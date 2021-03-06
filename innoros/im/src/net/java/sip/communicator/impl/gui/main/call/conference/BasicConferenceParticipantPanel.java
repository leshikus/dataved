/*
 * Jitsi, the OpenSource Java VoIP and Instant Messaging client.
 *
 * Distributable under LGPL license.
 * See terms of license at gnu.org.
 */
package net.java.sip.communicator.impl.gui.main.call.conference;

import java.awt.*;

import javax.swing.*;
import javax.swing.text.*;

import net.java.sip.communicator.impl.gui.main.call.*;
import net.java.sip.communicator.impl.gui.utils.*;
import net.java.sip.communicator.service.protocol.*;
import net.java.sip.communicator.service.protocol.event.*;
import net.java.sip.communicator.service.resources.*;
import net.java.sip.communicator.util.*;
import net.java.sip.communicator.util.skin.*;
import net.java.sip.communicator.util.swing.*;

import org.jitsi.service.neomedia.*;

/**
 * The basic panel used to render any conference participant. Meant to be
 * extended for <tt>CallPeer</tt>s and <tt>ConferenceMember</tt>s.
 *
 * @author Yana Stamcheva
 * @author Adam Netocny
 * @author Lyubomir Marinov
 */
public abstract class BasicConferenceParticipantPanel<T>
    extends TransparentPanel
    implements Skinnable
{
    /**
     * The avatar icon height.
     */
    private static final int AVATAR_HEIGHT = 50;

    /**
     * The avatar icon width.
     */
    private static final int AVATAR_WIDTH = 50;

    /**
     * Background color.
     */
    private static final Color bgColor = new Color(255, 255, 255);

    /**
     * Serial version UID.
     */
    private static final long serialVersionUID = 0L;

    /**
     * The <tt>CallRenderer</tt> which (directly or indirectly) initialized this
     * instance and which uses it to depict the associated
     * conference participant.
     */
    private final CallRenderer callRenderer;

    /**
     * The status of the peer
     */
    private final JLabel callStatusLabel = new JLabel();

    /**
     * Main panel constraints.
     */
    private final GridBagConstraints constraints = new GridBagConstraints();

    /**
     * The component responsible for displaying an error message.
     */
    private JTextComponent errorMessageComponent;

    /**
     * True if the avatar icon was changed and is no more default.
     */
    private boolean iconChanged = false;

    /**
     * The label showing the image of the participant.
     */
    private final JLabel imageLabel = new JLabel();

    /**
     * Indicates if we're in a video interface.
     */
    private final boolean isVideo;

    /**
     * The name bar.
     */
    private final JPanel nameBar
        = new TransparentPanel(new GridBagLayout());

    /**
     * The constraints used to layout the name bar.
     */
    private final GridBagConstraints nameBarConstraints
        = new GridBagConstraints();

    /**
     * The label showing the name of the participant.
     */
    private final JLabel nameLabel = new JLabel();

    /**
     * The conference participant which is depicted by this instance. If it is a
     * Call instance, this instance represents the local peer/user.
     */
    protected final T participant;

    /**
     * The panel containing all peer details.
     */
    private final TransparentPanel peerDetailsPanel = new TransparentPanel();

    /**
     * The right details panel.
     */
    private final TransparentPanel rightDetailsPanel
        = new TransparentPanel(new GridLayout(0, 1));

    /**
     * Security imageID.
     */
    private ImageID securityImageID = ImageLoader.SECURE_OFF_CONF_CALL;

    /**
     * The security status of the peer
     */
    protected SecurityStatusLabel securityStatusLabel;

    /**
     * The component showing the sound level of the participant.
     */
    private SoundLevelIndicator soundIndicator;

    /**
     * The status bar of the participant panel.
     */
    private final JPanel statusBar
        = new TransparentPanel(new GridBagLayout());

    /**
     * The status bar constraints.
     */
    private final GridBagConstraints statusBarConstraints
        = new GridBagConstraints();

    /**
     * The panel containing the title of the participant.
     */
    private final JPanel titleBar = new CallTitlePanel(new GridBagLayout());

    /**
     * Initializes a new <tt>BasicConferenceParticipantPanel</tt> instance which
     * is to depict a specific conference participant.
     *
     * @param callRenderer the renderer for the call
     * @param isLocalPeer if the peer is the local ones
     * @param isVideo indicates if we're in a video interface
     */
    public BasicConferenceParticipantPanel(
            CallRenderer callRenderer,
            T participant,
            boolean isVideo)
    {
        this.callRenderer = callRenderer;
        this.participant = participant;
        this.isVideo = isVideo;

        constraints.anchor = GridBagConstraints.CENTER;

        if (isVideo)
            initVideoConferencePanel();
        else
            initAudioConferencePanel();
    }

    /**
     * Adds the given <tt>component</tt> to the center below the sound bar.
     * @param component the component to add
     */
    public void addToCenter(Component component)
    {
        rightDetailsPanel.add(component);
    }

    /**
     * Adds the given <tt>component</tt> to the name bar.
     * @param component the component to add
     */
    public void addToNameBar(Component component)
    {
        nameBarConstraints.gridx = nameBarConstraints.gridx + 1;
        nameBarConstraints.weightx = 0f;
        this.nameBar.add(component, nameBarConstraints);
    }

    /**
     * Adds the given <tt>component</tt> to the status bar.
     * @param component the component to add
     */
    public void addToStatusBar(Component component)
    {
        statusBarConstraints.gridx = statusBarConstraints.gridx + 1;
        statusBarConstraints.weightx = 0f;
        statusBarConstraints.insets = new Insets(0, 5, 0, 5);

        this.statusBar.add(component, statusBarConstraints);
    }

    /**
     * Gets the <tt>CallPanel</tt> which contains this instances and uses it to
     * depict the associated conference participant.
     *
     * @return the <tt>CallPanel</tt> which contains this instances and uses it
     * to depict the associated conference participant
     */
    public CallPanel getCallPanel()
    {
        return getCallRenderer().getCallContainer();
    }

    /**
     * Gets the <tt>CallRenderer</tt> which (directly or indirectly) initialized
     * this instance and which uses it to depict the associated conference
     * participant.
     *
     * @return the <tt>CallRenderer</tt> which (directly or indirectly)
     * initialized this instance and which uses it to depict the associated
     * conference participant
     */
    public CallRenderer getCallRenderer()
    {
        return callRenderer;
    }

    /**
     * Gets the conference participant depicted by this instance.
     *
     * @return the conference participant depicted by this instance
     */
    public T getParticipant()
    {
        return participant;
    }

    /**
     * Sets the name of the participant.
     * @param participantName the name of the participant
     */
    public String getParticipantName()
    {
        return nameLabel.getText();
    }

    private void initAudioConferencePanel()
    {
        soundIndicator
            = new SoundLevelIndicator(
                    SoundLevelChangeEvent.MIN_LEVEL,
                    SoundLevelChangeEvent.MAX_LEVEL);

        securityStatusLabel = new SecurityStatusLabel();
        securityStatusLabel.setSecurityOff();

        this.setLayout(new GridBagLayout());
        this.setBorder(BorderFactory.createEmptyBorder(7, 7, 7, 7));

        this.initTitleBar();

        constraints.fill = GridBagConstraints.HORIZONTAL;
        constraints.gridx = 0;
        constraints.gridy = 0;
        constraints.weightx = 1;
        constraints.weighty = 0;
        constraints.insets = new Insets(0, 0, 0, 0);
        this.add(titleBar, constraints);

        this.initPeerDetailsPanel();

        constraints.fill = GridBagConstraints.HORIZONTAL;
        constraints.gridx = 0;
        constraints.gridy = 1;
        constraints.weightx = 1;
        constraints.weighty = 0;
        constraints.insets = new Insets(0, 0, 0, 0);
        this.add(peerDetailsPanel, constraints);
    }

    /**
     * Initializes the details panel for the peer.
     */
    private void initPeerDetailsPanel()
    {
        ImageIcon avatarIcon
            = new ImageIcon(
                    ImageLoader
                        .getImage(ImageLoader.DEFAULT_USER_PHOTO)
                            .getScaledInstance(
                                    AVATAR_WIDTH,
                                    AVATAR_HEIGHT,
                                    Image.SCALE_SMOOTH));

        peerDetailsPanel.setLayout(new GridBagLayout());
        peerDetailsPanel.setBackground(new Color(255, 255, 255));

        imageLabel.setIcon(avatarIcon);

        constraints.fill = GridBagConstraints.NONE;
        constraints.gridx = 0;
        constraints.gridy = 0;
        constraints.weightx = 0;
        constraints.weighty = 0;
        constraints.insets = new Insets(5, 10, 5, 0);

        peerDetailsPanel.add(imageLabel, constraints);

        constraints.fill = GridBagConstraints.BOTH;
        constraints.gridx = 1;
        constraints.gridy = 0;
        constraints.weightx = 1f;
        constraints.weighty = 0;
        constraints.insets = new Insets(5, 20, 5, 20);

        rightDetailsPanel.add(soundIndicator);
        peerDetailsPanel.add(rightDetailsPanel, constraints);
    }

    /**
     * Initializes the title bar.
     */
    private void initTitleBar()
    {
        titleBar.setBorder(BorderFactory.createEmptyBorder(2, 8, 2, 8));

        nameBar.setComponentOrientation(ComponentOrientation.RIGHT_TO_LEFT);
        nameBarConstraints.gridx = 0;
        nameBarConstraints.gridy = 0;
        nameBarConstraints.weightx = 1f;
        nameBar.add(nameLabel, nameBarConstraints);

        statusBar.setComponentOrientation(ComponentOrientation.RIGHT_TO_LEFT);
        statusBarConstraints.gridx = 0;
        statusBarConstraints.gridy = 0;
        statusBarConstraints.weightx = 1f;
        statusBar.add(callStatusLabel, statusBarConstraints);

        if (!(participant instanceof Call))
            addToStatusBar(securityStatusLabel);

        GridBagConstraints constraints = new GridBagConstraints();

        constraints.gridx = 0;
        constraints.gridy = 0;
        constraints.weightx = 1f;
        constraints.anchor = GridBagConstraints.WEST;
        titleBar.add(nameBar, constraints);

        constraints.gridx = 1;
        constraints.gridy = 0;
        constraints.weightx = 1f;
        constraints.anchor = GridBagConstraints.EAST;
        titleBar.add(statusBar, constraints);
    }

    /**
     * Initializes video conference specific panel.
     */
    private void initVideoConferencePanel()
    {
        securityStatusLabel = new SecurityStatusLabel();
        securityStatusLabel.setSecurityOff();

        this.setLayout(new GridBagLayout());
        this.setBorder(BorderFactory.createEmptyBorder(7, 7, 7, 7));

        this.initTitleBar();

        constraints.fill = GridBagConstraints.HORIZONTAL;
        constraints.gridx = 0;
        constraints.gridy = 0;
        constraints.weightx = 1;
        constraints.weighty = 0;
        constraints.insets = new Insets(0, 0, 0, 0);
        this.add(titleBar, constraints);
    }

    /**
     * Reloads default avatar icon.
     */
    public void loadSkin()
    {
        if(!iconChanged)
        {
            ImageIcon avatarIcon
                = new ImageIcon(
                        ImageLoader.getImage(ImageLoader.DEFAULT_USER_PHOTO)
                                .getScaledInstance(
                                        AVATAR_WIDTH,
                                        AVATAR_HEIGHT,
                                        Image.SCALE_SMOOTH));

            imageLabel.setIcon(avatarIcon);
        }

        securityStatusLabel.setIcon(
                new ImageIcon(ImageLoader.getImage(securityImageID)));
    }

    /**
     * Overrides {@link JComponent#paintComponent(Graphics)} in order to
     * customize the background of this panel.
     *
     * @param g the <tt>Graphics</tt> object used for painting
     */
    @Override
    public void paintComponent(Graphics g)
    {
        super.paintComponent(g);

        // If we're in a video interface, we have nothing more to do here.
        if (isVideo)
            return;

        g = g.create();
        try
        {
            AntialiasingManager.activateAntialiasing(g);

            g.setColor(bgColor);
            g.fillRoundRect(
                5, 5, this.getWidth() - 10, this.getHeight() - 10, 20, 20);
        }
        finally
        {
            g.dispose();
        }
    }

    /**
     * Indicates that the security has gone off.
     *
     * @param evt Details about the event that caused this message.
     */
    public void securityOff(CallPeerSecurityOffEvent evt)
    {
        securityStatusLabel.setText("");
        securityStatusLabel.setSecurityOff();
        if (securityStatusLabel.getBorder() == null)
            securityStatusLabel.setBorder(
                BorderFactory.createEmptyBorder(2, 5, 2, 3));
    }

    /**
     * Indicates that the security is turned on.
     * <p>
     * Sets the secured status icon to the status panel and initializes/updates
     * the corresponding security details.
     *
     * @param evt Details about the event that caused this message.
     */
    public void securityOn(CallPeerSecurityOnEvent evt)
    {
        // If the securityOn is called without a specific event, we'll just set
        // the security label status to on.
        if (evt == null)
        {
            securityStatusLabel.setSecurityOn();
            return;
        }

        SrtpControl srtpControl = evt.getSecurityController();

        if ((srtpControl.requiresSecureSignalingTransport()
            && getCallRenderer().getCall().getProtocolProvider()
                .isSignalingTransportSecure())
            || !srtpControl.requiresSecureSignalingTransport())
        {
            if (srtpControl instanceof ZrtpControl)
            {
                securityStatusLabel.setText("zrtp");

                if (!((ZrtpControl) srtpControl).isSecurityVerified())
                    securityStatusLabel.setSecurityPending();
                else
                    securityStatusLabel.setSecurityOn();
            }
            else
                securityStatusLabel.setSecurityOn();
        }
    }

    /**
     * Indicates that the security status is pending confirmation.
     */
    public void securityPending()
    {
        securityStatusLabel.setSecurityPending();
    }

    /**
     * Sets the reason of a call failure if one occurs. The renderer should
     * display this reason to the user.
     * @param reason the reason to display
     */
    protected void setErrorReason(String reason)
    {
        if (errorMessageComponent == null)
        {
            errorMessageComponent = new JTextPane();

            JTextPane textPane = (JTextPane) errorMessageComponent;
            textPane.setEditable(false);
            textPane.setOpaque(false);

            StyledDocument doc = textPane.getStyledDocument();

            MutableAttributeSet standard = new SimpleAttributeSet();
            StyleConstants.setFontFamily(standard,
                                        textPane.getFont().getFamily());
            StyleConstants.setFontSize(standard, 12);
            doc.setParagraphAttributes(0, 0, standard, true);

            addToCenter(errorMessageComponent);
            this.revalidate();
        }

        errorMessageComponent.setText(reason);

        if (isVisible())
            errorMessageComponent.repaint();
    }

    /**
     * Sets the image of the participant.
     * @param image the image to set
     */
    public void setParticipantImage(byte[] image)
    {
        ImageIcon icon = ImageUtils.getScaledRoundedIcon(image,
                                                        AVATAR_WIDTH,
                                                        AVATAR_HEIGHT);

        if (icon != null)
        {
            iconChanged = true;
            imageLabel.setIcon(icon);
        }
    }

    /**
     * Sets the name of the participant.
     * @param participantName the name of the participant
     */
    public void setParticipantName(String participantName)
    {
        nameLabel.setText(participantName);
    }

    /**
     * Sets the state of the participant.
     * @param participantState the state of the participant
     */
    public void setParticipantState(String participantState)
    {
        callStatusLabel.setText(participantState.toLowerCase());
    }

    /**
     * Sets the background color of the title panel.
     * @param color the background color to set
     */
    protected void setTitleBackground(Color color)
    {
        titleBar.setBackground(color);
    }

    /**
     * Updates the sound level bar to reflect the new sound level value.
     * @param soundLevel the new sound level value
     */
    public void updateSoundBar(int soundLevel)
    {
        if (soundIndicator != null)
            soundIndicator.updateSoundLevel(soundLevel);
    }
}
