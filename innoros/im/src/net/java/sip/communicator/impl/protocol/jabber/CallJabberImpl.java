/*
 * Jitsi, the OpenSource Java VoIP and Instant Messaging client.
 *
 * Distributable under LGPL license.
 * See terms of license at gnu.org.
 */
package net.java.sip.communicator.impl.protocol.jabber;

import java.lang.ref.*;
import java.util.*;

import net.java.sip.communicator.impl.protocol.jabber.extensions.cobri.*;
import net.java.sip.communicator.impl.protocol.jabber.extensions.jingle.*;
import net.java.sip.communicator.impl.protocol.jabber.jinglesdp.*;
import net.java.sip.communicator.service.protocol.*;
import net.java.sip.communicator.service.protocol.event.*;
import net.java.sip.communicator.service.protocol.media.*;
import net.java.sip.communicator.util.*;

import org.jitsi.service.neomedia.*;
import org.jivesoftware.smack.*;
import org.jivesoftware.smack.filter.*;
import org.jivesoftware.smack.packet.*;
import org.jivesoftware.smackx.packet.*;

/**
 * A Jabber implementation of the <tt>Call</tt> abstract class encapsulating
 * Jabber jingle sessions.
 *
 * @author Emil Ivov
 * @author Lyubomir Marinov
 */
public class CallJabberImpl
    extends AbstractCallJabberGTalkImpl<CallPeerJabberImpl>
{
    /**
     * The <tt>Logger</tt> used by the <tt>CallJabberImpl</tt> class and its
     * instances for logging output.
     */
    private static final Logger logger = Logger.getLogger(CallJabberImpl.class);

    /**
     * The Jitsi VideoBridge conference which the local peer represented by this
     * instance is a focus of.
     */
    private CobriConferenceIQ cobri;

    /**
     * The shared <tt>CallPeerMediaHandler</tt> state which is to be used by the
     * <tt>CallPeer</tt>s of this <tt>Call</tt> which use {@link #cobri}.
     */
    private MediaHandler cobriMediaHandler;

    private final List<WeakReference<CobriStreamConnector>>
        cobriStreamConnectors;

    /**
     * Initializes a new <tt>CallJabberImpl</tt> instance belonging to
     * <tt>sourceProvider</tt> and associated with the jingle session with the
     * specified <tt>jingleSID</tt>. If the new instance corresponds to an
     * incoming jingle session, then the jingleSID would come from there.
     * Otherwise, one could generate one using {@link JingleIQ#generateSID()}.
     *
     * @param parentOpSet the {@link OperationSetBasicTelephonyJabberImpl}
     * instance in the context of which this call has been created.
     */
    protected CallJabberImpl(
            OperationSetBasicTelephonyJabberImpl parentOpSet)
    {
        super(parentOpSet);

        int mediaTypeValueCount = MediaType.values().length;

        cobriStreamConnectors
            = new ArrayList<WeakReference<CobriStreamConnector>>(
                    mediaTypeValueCount);
        for (int i = 0; i < mediaTypeValueCount; i++)
            cobriStreamConnectors.add(null);

        //let's add ourselves to the calls repo. we are doing it ourselves just
        //to make sure that no one ever forgets.
        parentOpSet.getActiveCallsRepository().addCall(this);
    }

    /**
     * Closes a specific <tt>CobriStreamConnector</tt> which is associated with
     * a <tt>MediaStream</tt> of a specific <tt>MediaType</tt> upon request from
     * a specific <tt>CallPeer</tt>.
     * 
     * @param peer the <tt>CallPeer</tt> which requests the closing of the
     * specified <tt>cobriStreamConnector</tt>
     * @param mediaType the <tt>MediaType</tt> of the <tt>MediaStream</tt> with
     * which the specified <tt>cobriStreamConnector</tt> is associated
     * @param cobriStreamConnector the <tt>CobriStreamConnector</tt> to close on
     * behalf of the specified <tt>peer</tt>
     */
    public void closeCobriStreamConnector(
            CallPeerJabberImpl peer,
            MediaType mediaType,
            CobriStreamConnector cobriStreamConnector)
    {
        cobriStreamConnector.close();
    }

    /**
     * {@inheritDoc}
     *
     * Sends a <tt>content</tt> message to each of the <tt>CallPeer</tt>s
     * associated with this <tt>CallJabberImpl</tt> in order to include/exclude
     * the &quot;isfocus&quot; attribute. 
     */
    @Override
    protected void conferenceFocusChanged(boolean oldValue, boolean newValue)
    {
        try
        {
            Iterator<CallPeerJabberImpl> peers = getCallPeers();

            while (peers.hasNext())
            {
                CallPeerJabberImpl callPeer = peers.next();

                if (callPeer.getState() == CallPeerState.CONNECTED)
                    callPeer.sendCoinSessionInfo();
            }
        }
        finally
        {
            super.conferenceFocusChanged(oldValue, newValue);
        }
    }

    /**
     * Allocates cobri (conference) channels for a specific <tt>MediaType</tt>
     * to be used by a specific <tt>CallPeer</tt>.
     *
     * @param peer the <tt>CallPeer</tt> which is to use the allocated cobri
     * (conference) channels
     * @param rdpes the <tt>RtpDescriptionPacketExtension</tt>s which specify
     * the <tt>MediaType</tt>s for which cobri (conference) channels are to be
     * allocated
     * @return a <tt>CobriConferenceIQ</tt> which describes the allocated cobri
     * (conference) channels for the specified <tt>mediaTypes</tt> which are to
     * be used by the specified <tt>peer</tt>; otherwise, <tt>null</tt>
     */
    public CobriConferenceIQ createCobriChannels(
            CallPeerJabberImpl peer,
            Iterable<RtpDescriptionPacketExtension> rdpes)
    {
        if (!getConference().isJitsiVideoBridge())
            return null;

        /*
         * For a cobri conference to work properly, all CallPeers in the
         * conference must share one and the same CallPeerMediaHandler state
         * i.e. they must use a single set of MediaStreams as if there was a
         * single CallPeerMediaHandler.
         */
        CallPeerMediaHandler<?> peerMediaHandler = peer.getMediaHandler();

        if (peerMediaHandler.getMediaHandler() != cobriMediaHandler)
        {
            for (MediaType mediaType : MediaType.values())
                if (peerMediaHandler.getStream(mediaType) != null)
                    return null;
        }

        ProtocolProviderServiceJabberImpl protocolProvider
            = getProtocolProvider();
        String jitsiVideoBridge
            = (cobri == null)
                ? protocolProvider.getJitsiVideoBridge()
                : cobri.getFrom();

        if ((jitsiVideoBridge == null) || (jitsiVideoBridge.length() == 0))
            return null;

        CobriConferenceIQ conferenceRequest = new CobriConferenceIQ();

        if (cobri != null)
            conferenceRequest.setID(cobri.getID());

        for (RtpDescriptionPacketExtension rdpe : rdpes)
        {
            MediaType mediaType = MediaType.parseString(rdpe.getMedia());
            String contentName = mediaType.toString();
            CobriConferenceIQ.Content contentRequest
                = new CobriConferenceIQ.Content(contentName);

            conferenceRequest.addContent(contentRequest);

            boolean requestLocalChannel = true;

            if (cobri != null)
            {
                CobriConferenceIQ.Content content
                    = cobri.getContent(contentName);

                if ((content != null) && (content.getChannelCount() > 0))
                    requestLocalChannel = false;
            }
            if (requestLocalChannel)
            {
                CobriConferenceIQ.Channel localChannelRequest
                    = new CobriConferenceIQ.Channel();

                for (PayloadTypePacketExtension ptpe : rdpe.getPayloadTypes())
                    localChannelRequest.addPayloadType(ptpe);
                contentRequest.addChannel(localChannelRequest);
            }

            CobriConferenceIQ.Channel remoteChannelRequest
                = new CobriConferenceIQ.Channel();

            for (PayloadTypePacketExtension ptpe : rdpe.getPayloadTypes())
                remoteChannelRequest.addPayloadType(ptpe);
            contentRequest.addChannel(remoteChannelRequest);
        }

        XMPPConnection connection = protocolProvider.getConnection();
        PacketCollector packetCollector
            = connection.createPacketCollector(
                    new PacketIDFilter(conferenceRequest.getPacketID()));

        conferenceRequest.setTo(jitsiVideoBridge);
        conferenceRequest.setType(IQ.Type.GET);
        connection.sendPacket(conferenceRequest);

        Packet response
            = packetCollector.nextResult(
                    SmackConfiguration.getPacketReplyTimeout());

        packetCollector.cancel();

        if ((response == null)
                || (response.getError() != null)
                || !(response instanceof CobriConferenceIQ))
            return null;

        CobriConferenceIQ conferenceResponse = (CobriConferenceIQ) response;
        String conferenceResponseID = conferenceResponse.getID();

        /*
         * Update the complete CobriConferenceIQ representation maintained by
         * this instance with the information given by the (current) response.
         */
        if (cobri == null)
        {
            cobri = conferenceResponse;
        }
        else
        {
            String cobriID = cobri.getID();

            if (cobriID == null)
                cobri.setID(conferenceResponseID);
            else if (!cobriID.equals(conferenceResponseID))
                throw new IllegalStateException("conference.id");

            for (CobriConferenceIQ.Content contentResponse
                    : conferenceResponse.getContents())
            {
                CobriConferenceIQ.Content content
                    = cobri.getOrCreateContent(contentResponse.getName());

                for (CobriConferenceIQ.Channel channelResponse
                        : contentResponse.getChannels())
                    content.addChannel(channelResponse);
            }
        }

        /*
         * Formulate the result to be returned to the caller which
         * is a subset of the whole conference information kept by
         * this CallJabberImpl and includes the remote channels
         * explicitly requested by the method caller and their
         * respective local channels.
         */
        CobriConferenceIQ conferenceResult = new CobriConferenceIQ();

        conferenceResult.setID(conferenceResponseID);

        for (RtpDescriptionPacketExtension rdpe : rdpes)
        {
            MediaType mediaType = MediaType.parseString(rdpe.getMedia());
            CobriConferenceIQ.Content contentResponse
                = conferenceResponse.getContent(mediaType.toString());

            if (contentResponse != null)
            {
                String contentName = contentResponse.getName();
                CobriConferenceIQ.Content contentResult
                    = new CobriConferenceIQ.Content(contentName);

                conferenceResult.addContent(contentResult);

                /*
                 * The local channel may have been allocated in a previous
                 * method call as part of the allocation of the first remote
                 * channel in the respective content. Anyway, the current method
                 * caller still needs to know about it.
                 */
                CobriConferenceIQ.Content content
                    = cobri.getContent(contentName);
                CobriConferenceIQ.Channel localChannel = null;
                
                if ((content != null) && (content.getChannelCount() > 0))
                {
                    localChannel = content.getChannel(0);
                    contentResult.addChannel(localChannel);
                }

                String localChannelID
                    = (localChannel == null) ? null : localChannel.getID();

                for (CobriConferenceIQ.Channel channelResponse
                        : contentResponse.getChannels())
                {
                    if ((localChannelID == null)
                            || !localChannelID.equals(channelResponse.getID()))
                        contentResult.addChannel(channelResponse);
                }
            }
        }

        /*
         * The specified CallPeer will participate in the cobri conference
         * organized by this Call so it must use the shared CallPeerMediaHandler
         * state of all CallPeers in the same cobri conference.
         */
        if (cobriMediaHandler == null)
            cobriMediaHandler = new MediaHandler();
        peerMediaHandler.setMediaHandler(cobriMediaHandler);

        return conferenceResult;
    }

    /**
     * Initializes a <tt>CobriStreamConnector</tt> on behalf of a specific
     * <tt>CallPeer</tt> to be used in association with a specific
     * <tt>CobriConferenceIQ.Channel</tt> of a specific <tt>MediaType</tt>.
     *
     * @param peer the <tt>CallPeer</tt> which requests the initialization of a
     * <tt>CobriStreamConnector</tt>
     * @param mediaType the <tt>MediaType</tt> of the stream which is to use the
     * initialized <tt>CobriStreamConnector</tt> for RTP and RTCP traffic
     * @param channel the <tt>CobriConferenceIQ.Channel</tt> to which RTP and
     * RTCP traffic is to be sent and from which such traffic is to be received
     * via the initialized <tt>CobriStreamConnector</tt>
     * @param factory a <tt>StreamConnectorFactory</tt> implementation which is
     * to allocate the sockets to be used for RTP and RTCP traffic
     * @return a <tt>CobriStreamConnector</tt> to be used for RTP and RTCP
     * traffic associated with the specified <tt>channel</tt>
     */
    public CobriStreamConnector createCobriStreamConnector(
            CallPeerJabberImpl peer,
            MediaType mediaType,
            CobriConferenceIQ.Channel channel,
            StreamConnectorFactory factory)
    {
        String channelID = channel.getID();

        if (channelID == null)
            throw new IllegalArgumentException("channel");

        if (cobri == null)
            throw new IllegalStateException("cobri");

        CobriConferenceIQ.Content content
            = cobri.getContent(mediaType.toString());

        if (content == null)
            throw new IllegalArgumentException("mediaType");
        if ((content.getChannelCount() < 1)
                || !channelID.equals((channel = content.getChannel(0)).getID()))
            throw new IllegalArgumentException("channel");

        CobriStreamConnector cobriStreamConnector;

        synchronized (cobriStreamConnectors)
        {
            int index = mediaType.ordinal();
            WeakReference<CobriStreamConnector> weakReference
                = cobriStreamConnectors.get(index);

            cobriStreamConnector
                = (weakReference == null) ? null : weakReference.get();
            if (cobriStreamConnector == null)
            {
                StreamConnector streamConnector
                    = factory.createStreamConnector();

                if (streamConnector != null)
                {
                    cobriStreamConnector
                        = new CobriStreamConnector(streamConnector);
                    cobriStreamConnectors.set(
                            index,
                            new WeakReference<CobriStreamConnector>(
                                    cobriStreamConnector));
                }
            }
        }

        return cobriStreamConnector;
    }

    /**
     * Expires specific (cobri) conference channels used by a specific
     * <tt>CallPeer</tt>.
     *
     * @param peer the <tt>CallPeer</tt> which uses the specified (cobri)
     * conference channels to be expired
     * @param conference a <tt>CobriConferenceIQ</tt> which specifies the
     * (cobri) conference channels to be expired
     */
    public void expireCobriChannels(
            CallPeerJabberImpl peer,
            CobriConferenceIQ conference)
    {
        // Formulate the CobriConferenceIQ request which is to be sent.
        if (cobri != null)
        {
            String conferenceID = cobri.getID();

            if (conferenceID.equals(conference.getID()))
            {
                CobriConferenceIQ conferenceRequest = new CobriConferenceIQ();

                conferenceRequest.setID(conferenceID);

                for (CobriConferenceIQ.Content content
                        : conference.getContents())
                {
                    CobriConferenceIQ.Content cobriContent
                        = cobri.getContent(content.getName());

                    if (cobriContent != null)
                    {
                        CobriConferenceIQ.Content contentRequest
                            = conferenceRequest.getOrCreateContent(
                                    cobriContent.getName());

                        for (CobriConferenceIQ.Channel channel
                                : content.getChannels())
                        {
                            CobriConferenceIQ.Channel cobriChannel
                                = cobriContent.getChannel(channel.getID());

                            if (cobriChannel != null)
                            {
                                CobriConferenceIQ.Channel channelRequest
                                    = new CobriConferenceIQ.Channel();

                                channelRequest.setExpire(0);
                                channelRequest.setID(cobriChannel.getID());
                                contentRequest.addChannel(channelRequest);
                            }
                        }
                    }
                }

                /*
                 * Remove the channels which are to be expired from the internal
                 * state of the conference managed by this CallJabberImpl.
                 */
                for (CobriConferenceIQ.Content contentRequest
                        : conferenceRequest.getContents())
                {
                    CobriConferenceIQ.Content cobriContent
                        = cobri.getContent(contentRequest.getName());

                    for (CobriConferenceIQ.Channel channelRequest
                            : contentRequest.getChannels())
                    {
                        CobriConferenceIQ.Channel cobriChannel
                            = cobriContent.getChannel(channelRequest.getID());

                        cobriContent.removeChannel(cobriChannel);

                        /*
                         * If the last remote channel is to be expired, expire
                         * the local channel as well.
                         */
                        if (cobriContent.getChannelCount() == 1)
                        {
                            cobriChannel = cobriContent.getChannel(0);

                            channelRequest = new CobriConferenceIQ.Channel();
                            channelRequest.setExpire(0);
                            channelRequest.setID(cobriChannel.getID());
                            contentRequest.addChannel(channelRequest);

                            cobriContent.removeChannel(cobriChannel);

                            break;
                        }
                    }
                }

                /*
                 * At long last, send the CobriConferenceIQ request to expire
                 * the channels.
                 */
                conferenceRequest.setTo(cobri.getFrom());
                conferenceRequest.setType(IQ.Type.SET);
                getProtocolProvider().getConnection().sendPacket(
                        conferenceRequest);
            }
        }
    }

    /**
     * Creates a <tt>CallPeerJabberImpl</tt> from <tt>calleeJID</tt> and sends
     * them <tt>session-initiate</tt> IQ request.
     *
     * @param calleeJID the party that we would like to invite to this call.
     * @param discoverInfo any discovery information that we have for the jid
     * we are trying to reach and that we are passing in order to avoid having
     * to ask for it again.
     * @param sessionInitiateExtensions a collection of additional and optional
     * <tt>PacketExtension</tt>s to be added to the <tt>session-initiate</tt>
     * {@link JingleIQ} which is to init this <tt>CallJabberImpl</tt>
     *
     * @return the newly created <tt>Call</tt> corresponding to
     * <tt>calleeJID</tt>. All following state change events will be
     * delivered through this call peer.
     *
     * @throws OperationFailedException  with the corresponding code if we fail
     *  to create the call.
     */
    public CallPeerJabberImpl initiateSession(
            String calleeJID,
            DiscoverInfo discoverInfo,
            Iterable<PacketExtension> sessionInitiateExtensions)
        throws OperationFailedException
    {
        // create the session-initiate IQ
        CallPeerJabberImpl callPeer = new CallPeerJabberImpl(calleeJID, this);

        callPeer.setDiscoverInfo(discoverInfo);

        addCallPeer(callPeer);

        callPeer.setState(CallPeerState.INITIATING_CALL);

        // If this was the first peer we added in this call, then the call is
        // new and we need to notify everyone of its creation.
        if (getCallPeerCount() == 1)
            parentOpSet.fireCallEvent(CallEvent.CALL_INITIATED, this);

        CallPeerMediaHandlerJabberImpl mediaHandler
            = callPeer.getMediaHandler();

        /* enable video if it is a video call */
        mediaHandler.setLocalVideoTransmissionEnabled(localVideoAllowed);
        /* enable remote-control if it is a desktop sharing session */
        mediaHandler.setLocalInputEvtAware(getLocalInputEvtAware());

        /*
         * Set call state to connecting so that the user interface would start
         * playing the tones. We do that here because we may be harvesting
         * STUN/TURN addresses in initiateSession() which would take a while.
         */
        callPeer.setState(CallPeerState.CONNECTING);

        // if initializing session fails, set peer to failed
        boolean sessionInitiated = false;

        try
        {
            callPeer.initiateSession(sessionInitiateExtensions);
            sessionInitiated = true;
        }
        finally
        {
            // if initialization throws an exception
            if (!sessionInitiated)
                callPeer.setState(CallPeerState.FAILED);
        }
        return callPeer;
    }

    /**
     * Sends a <tt>content-modify</tt> message to each of the current
     * <tt>CallPeer</tt>s to reflect a possible change in the media setup
     * related to video.
     *
     * @param allowed <tt>true</tt> if the streaming of the local video to the
     * remote peer is allowed; otherwise, <tt>false</tt>
     * @throws OperationFailedException if a problem occurred during message
     * generation or there was a network problem
     */
    public void modifyVideoContent(boolean allowed)
        throws OperationFailedException
    {
        if (logger.isInfoEnabled())
        {
            logger.info(
                    (allowed ? "Start" : "Stop") + " local video streaming");
        }

        for (CallPeerJabberImpl peer : getCallPeerList())
            peer.sendModifyVideoContent(allowed);
    }

    /**
     * Creates a new call peer and sends a RINGING response.
     *
     * @param jingleIQ the {@link JingleIQ} that created the session.
     *
     * @return the newly created {@link CallPeerJabberImpl} (the one that sent
     * the INVITE).
     */
    public CallPeerJabberImpl processSessionInitiate(JingleIQ jingleIQ)
    {
        String remoteParty = jingleIQ.getInitiator();
        boolean autoAnswer = false;
        CallPeerJabberImpl attendant = null;
        OperationSetBasicTelephonyJabberImpl basicTelephony = null;

        //according to the Jingle spec initiator may be null.
        if (remoteParty == null)
            remoteParty = jingleIQ.getFrom();

        CallPeerJabberImpl callPeer
            = new CallPeerJabberImpl(remoteParty, this, jingleIQ);

        addCallPeer(callPeer);

        /*
         * We've already sent ack to the specified session-initiate so if it has
         * been sent as part of an attended transfer, we have to hang up on the
         * attendant.
         */
        try
        {
            TransferPacketExtension transfer
                = (TransferPacketExtension)
                    jingleIQ.getExtension(
                            TransferPacketExtension.ELEMENT_NAME,
                            TransferPacketExtension.NAMESPACE);

            if (transfer != null)
            {
                String sid = transfer.getSID();

                if (sid != null)
                {
                    ProtocolProviderServiceJabberImpl protocolProvider
                        = getProtocolProvider();
                    basicTelephony
                        = (OperationSetBasicTelephonyJabberImpl)
                            protocolProvider.getOperationSet(
                                    OperationSetBasicTelephony.class);
                    CallJabberImpl attendantCall
                        = basicTelephony
                            .getActiveCallsRepository()
                                .findSID(sid);

                    if (attendantCall != null)
                    {
                        attendant = attendantCall.getPeer(sid);
                        if ((attendant != null)
                                && basicTelephony
                                    .getFullCalleeURI(attendant.getAddress())
                                        .equals(transfer.getFrom())
                                && protocolProvider.getOurJID().equals(
                                        transfer.getTo()))
                        {
                            //basicTelephony.hangupCallPeer(attendant);
                            autoAnswer = true;
                        }
                    }
                }
            }
        }
        catch (Throwable t)
        {
            logger.error(
                    "Failed to hang up on attendant"
                        + " as part of session transfer",
                    t);

            if (t instanceof ThreadDeath)
                throw (ThreadDeath) t;
        }

        CoinPacketExtension coin
            = (CoinPacketExtension)
                jingleIQ.getExtension(
                        CoinPacketExtension.ELEMENT_NAME,
                        CoinPacketExtension.NAMESPACE);

        if (coin != null)
        {
            boolean b
                = Boolean.parseBoolean(
                        (String)
                            coin.getAttribute(
                                    CoinPacketExtension.ISFOCUS_ATTR_NAME));

            callPeer.setConferenceFocus(b);
        }

        //before notifying about this call, make sure that it looks alright
        callPeer.processSessionInitiate(jingleIQ);

        // if paranoia is set, to accept the call we need to know that
        // the other party has support for media encryption
        if (getProtocolProvider().getAccountID().getAccountPropertyBoolean(
                ProtocolProviderFactory.MODE_PARANOIA, false)
            && callPeer.getMediaHandler().getAdvertisedEncryptionMethods()
                    .length
                == 0)
        {
            //send an error response;
            String reasonText
                = JabberActivator.getResources().getI18NString(
                        "service.gui.security.encryption.required");
            JingleIQ errResp
                = JinglePacketFactory.createSessionTerminate(
                        jingleIQ.getTo(),
                        jingleIQ.getFrom(),
                        jingleIQ.getSID(),
                        Reason.SECURITY_ERROR,
                        reasonText);

            callPeer.setState(CallPeerState.FAILED, reasonText);
            getProtocolProvider().getConnection().sendPacket(errResp);

            return null;
        }

        if (callPeer.getState() == CallPeerState.FAILED)
            return null;

        callPeer.setState( CallPeerState.INCOMING_CALL );

        // in case of attended transfer, auto answer the call
        if (autoAnswer)
        {
            /* answer directly */
            try
            {
                callPeer.answer();
            }
            catch(Exception e)
            {
                logger.info(
                        "Exception occurred while answer transferred call",
                        e);
                callPeer = null;
            }

            // hang up now
            try
            {
                basicTelephony.hangupCallPeer(attendant);
            }
            catch(OperationFailedException e)
            {
                logger.error(
                        "Failed to hang up on attendant as part of session"
                            + " transfer",
                        e);
            }

            return callPeer;
        }

        /* see if offer contains audio and video so that we can propose
         * option to the user (i.e. answer with video if it is a video call...)
         */
        List<ContentPacketExtension> offer
            = callPeer.getSessionIQ().getContentList();
        Map<MediaType, MediaDirection> directions
            = new HashMap<MediaType, MediaDirection>();

        directions.put(MediaType.AUDIO, MediaDirection.INACTIVE);
        directions.put(MediaType.VIDEO, MediaDirection.INACTIVE);

        for (ContentPacketExtension c : offer)
        {
            String contentName = c.getName();
            MediaDirection remoteDirection
                = JingleUtils.getDirection(c, callPeer.isInitiator());

            if (MediaType.AUDIO.toString().equals(contentName))
                directions.put(MediaType.AUDIO, remoteDirection);
            else if (MediaType.VIDEO.toString().equals(contentName))
                directions.put(MediaType.VIDEO, remoteDirection);
        }

        // If this was the first peer we added in this call, then the call is
        // new and we need to notify everyone of its creation.
        if (getCallPeerCount() == 1)
        {
            parentOpSet.fireCallEvent(
                    CallEvent.CALL_RECEIVED,
                    this,
                    directions);
        }

        // Manages auto answer with "audio only", or "audio/video" answer.
        OperationSetAutoAnswerJabberImpl autoAnswerOpSet
            = (OperationSetAutoAnswerJabberImpl)
                getProtocolProvider().getOperationSet(
                        OperationSetBasicAutoAnswer.class);

        if (autoAnswerOpSet != null)
            autoAnswerOpSet.autoAnswer(this, directions);

        return callPeer;
    }
}
