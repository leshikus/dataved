/*
 * Jitsi, the OpenSource Java VoIP and Instant Messaging client.
 *
 * Distributable under LGPL license.
 * See terms of license at gnu.org.
 */
package net.java.sip.communicator.plugin.sipaccregwizz;

import java.awt.*;
import java.util.*;

import net.java.sip.communicator.service.gui.*;
import net.java.sip.communicator.service.protocol.*;
import net.java.sip.communicator.util.*;

import org.osgi.framework.*;

/**
 * The <tt>IPPIAccountRegistrationWizard</tt> is an implementation of the
 * <tt>AccountRegistrationWizard</tt> for the SIP protocol. It should allow
 * the user to create and configure a new SIP account.
 *
 * @author Yana Stamcheva
 * @author Grigorii Balutsel
 */
public class SIPAccountRegistrationWizard
    extends ExtendedAccountRegistrationWizard
{
    /**
     * The first wizard page.
     */
    private FirstWizardPage firstWizardPage;

    /**
     * Account registration instance holding the data.
     */
    private SIPAccountRegistration registration
        = new SIPAccountRegistration();

    /**
     * The protocol provider.
     */
    private ProtocolProviderService protocolProvider;

    /**
     * The logger.
     */
    private static final Logger logger
        = Logger.getLogger(SIPAccountRegistrationWizard.class);

    /**
     * Creates an instance of <tt>IPPIAccountRegistrationWizard</tt>.
     * @param wizardContainer the wizard container, where this wizard
     * is added
     */
    public SIPAccountRegistrationWizard(WizardContainer wizardContainer)
    {
        setWizardContainer(wizardContainer);

        wizardContainer.setFinishButtonText(
            Resources.getString("service.gui.SIGN_IN"));
    }

    /**
     * Implements the <code>AccountRegistrationWizard.getIcon</code> method.
     * Returns the icon to be used for this wizard.
     * @return byte[]
     */
    public byte[] getIcon()
    {
        return Resources.getImage(Resources.SIP_LOGO);
    }

    /**
     * Implements the <code>AccountRegistrationWizard.getPageImage</code> method.
     * Returns the image used to decorate the wizard page
     *
     * @return byte[] the image used to decorate the wizard page
     */
    public byte[] getPageImage()
    {
        return Resources.getImage(Resources.PAGE_IMAGE);
    }

    /**
     * Implements the <code>AccountRegistrationWizard.getProtocolName</code>
     * method. Returns the protocol name for this wizard.
     * @return String
     */
    public String getProtocolName()
    {
        return Resources.getString("plugin.sipaccregwizz.PROTOCOL_NAME");
    }

    /**
     * Implements the <code>AccountRegistrationWizard.getProtocolDescription
     * </code> method. Returns the description of the protocol for this wizard.
     * @return String
     */
    public String getProtocolDescription()
    {
        return Resources.getString("plugin.sipaccregwizz.PROTOCOL_DESCRIPTION");
    }

    /**
     * Returns the set of pages contained in this wizard.
     * @return Iterator
     */
    public Iterator<WizardPage> getPages()
    {
        // create new registration, our container needs the pages
        // this means this is a new wizard and we must reset all data
        // it will be invoked and when the wizard cleans and unregister
        // our pages, but this fix don't hurt in this situation.
        return getPages(new SIPAccountRegistration());
    }

    /**
     * Returns the set of pages contained in this wizard.
     *
     * @param registration the registration object
     * @return Iterator
     */
    public Iterator<WizardPage> getPages(SIPAccountRegistration registration)
    {
        java.util.List<WizardPage> pages = new ArrayList<WizardPage>();

        setRegistration(registration);

        // If the first wizard page was already created
        if (firstWizardPage == null)
            firstWizardPage = new FirstWizardPage(this);

        pages.add(firstWizardPage);

        return pages.iterator();
    }

    /**
     * Returns the set of data that user has entered through this wizard.
     * @return Iterator
     */
    public Iterator<Map.Entry<String, String>> getSummary()
    {
        LinkedHashMap<String, String> summaryTable
            = new LinkedHashMap<String, String>();

        boolean rememberPswd = registration.isRememberPassword();
        String rememberPswdString = Resources.getString(
                rememberPswd ? "service.gui.YES" : "service.gui.NO");
        String displayName = registration.getDisplayName();
        if(displayName != null && displayName.length() > 0)
            summaryTable.put(
                        Resources.getString("plugin.sipaccregwizz.DISPLAY_NAME"),
                        displayName);
        summaryTable.put(
            Resources.getString("plugin.sipaccregwizz.USERNAME"),
            registration.getId());
        summaryTable.put(
            Resources.getString("service.gui.REMEMBER_PASSWORD"),
            rememberPswdString);
        summaryTable.put(
            Resources.getString("plugin.sipaccregwizz.REGISTRAR"),
            registration.getServerAddress());
        String authName = registration.getAuthorizationName();
        if(authName != null)
            summaryTable.put(
                        Resources.getString("plugin.sipaccregwizz.AUTH_NAME"),
                        authName);
        String serverPort = registration.getServerPort();
        if(serverPort != null && serverPort.length() > 0)
            summaryTable.put(
                Resources.getString("plugin.sipaccregwizz.SERVER_PORT"),
                serverPort);

        if(registration.isProxyAutoConfigure())
        {
            summaryTable.put(
                    Resources.getString("plugin.sipaccregwizz.PROXY_AUTO"),
                    Resources.getString("service.gui.YES"));
        }
        else
        {
            String proxy = registration.getProxy();
            if(proxy != null && proxy.length() >0)
                summaryTable.put(
                    Resources.getString("plugin.sipaccregwizz.PROXY"),
                    proxy);
            String proxyPort = registration.getProxyPort();
            if(proxyPort != null && proxyPort.length() > 0)
                summaryTable.put(
                    Resources.getString("plugin.sipaccregwizz.PROXY_PORT"),
                    proxyPort);
            summaryTable.put(
                Resources.getString("plugin.sipaccregwizz.PREFERRED_TRANSPORT"),
                registration.getPreferredTransport());
        }

        if (registration.isEnablePresence())
        {
            summaryTable.put(
                Resources.getString("plugin.sipaccregwizz.ENABLE_PRESENCE"),
                Resources.getString("service.gui.YES"));
        }
        else
        {
            summaryTable.put(
                Resources.getString("plugin.sipaccregwizz.ENABLE_PRESENCE"),
                Resources.getString("service.gui.NO"));
        }

        if (registration.isForceP2PMode())
        {
            summaryTable.put(
                Resources.getString("plugin.sipaccregwizz.FORCE_P2P_PRESENCE"),
                Resources.getString("service.gui.YES"));
        }
        else
        {
            summaryTable.put(
                Resources.getString("plugin.sipaccregwizz.FORCE_P2P_PRESENCE"),
                Resources.getString("service.gui.NO"));
        }

        if (registration.isDefaultEncryption())
        {
            summaryTable.put(Resources.getString(
                "plugin.sipaccregwizz.ENABLE_DEFAULT_ENCRYPTION"),
                Resources.getString("service.gui.YES"));
        }
        else
        {
            summaryTable.put(Resources.getString(
                "plugin.sipaccregwizz.ENABLE_DEFAULT_ENCRYPTION"),
                Resources.getString("service.gui.NO"));
        }

        if (registration.isSipZrtpAttribute())
        {
            summaryTable.put(Resources.getString(
                "plugin.sipaccregwizz.ENABLE_SIPZRTP_ATTRIBUTE"),
                Resources.getString("service.gui.YES"));
        }
        else
        {
            summaryTable.put(Resources.getString(
                "plugin.sipaccregwizz.ENABLE_SIPZRTP_ATTRIBUTE"),
                Resources.getString("service.gui.NO"));
        }

        summaryTable.put(Resources.getString(
                "plugin.sipaccregwizz.OFFLINE_CONTACT_POLLING_PERIOD"),
                registration.getPollingPeriod());
        summaryTable.put(Resources.getString(
                "plugin.sipaccregwizz.SUBSCRIPTION_EXPIRATION"),
                registration.getSubscriptionExpiration());

        summaryTable.put(
            Resources.getString("plugin.sipaccregwizz.KEEP_ALIVE_METHOD"),
            registration.getKeepAliveMethod());
        summaryTable.put(
            Resources.getString("plugin.sipaccregwizz.KEEP_ALIVE_INTERVAL"),
            registration.getKeepAliveInterval());

        summaryTable.put(
            Resources.getString("plugin.sipaccregwizz.DTMF_METHOD"),
            registration.getDTMFMethod());

        if (registration.isXCapEnable() || registration.isXiVOEnable())
        {
            summaryTable.put("XCAP " + Resources.getString(
                "plugin.sipaccregwizz.XCAP_SERVER_URI"),
                registration.getClistOptionServerUri());

            if (registration.isClistOptionUseSipCredentials())
            {
                summaryTable.put("XCAP " + Resources.getString(
                        "plugin.sipaccregwizz.XCAP_USE_SIP_CREDENTIALS"),
                        Resources.getString("service.gui.YES"));
            }
            else
            {
                summaryTable.put("XCAP " + Resources.getString(
                        "plugin.sipaccregwizz.XCAP_USER"),
                        registration.getClistOptionUser());
            }
        }

        if(registration.isMessageWaitingIndicationsEnabled())
            if(!StringUtils.isNullOrEmpty(registration.getVoicemailURI(), true))
                summaryTable.put(
                    Resources.getString("plugin.sipaccregwizz.VOICEMAIL_URI"),
                    registration.getVoicemailURI());

        return summaryTable.entrySet().iterator();
    }

    /**
     * Installs the account created through this wizard.
     * @return ProtocolProviderService
     * @throws OperationFailedException problem signing in.
     */
    public ProtocolProviderService signin()
        throws OperationFailedException
    {
        firstWizardPage.commitPage();

        if (firstWizardPage.isCommitted())
            return signin(registration.getId(), registration.getPassword());

        return null;
    }

    /**
     * Installs the account with the given user name and password.
     * @param userName the account user name
     * @param password the password
     * @return the <tt>ProtocolProviderService</tt> corresponding to the newly
     * created account.
     * @throws OperationFailedException problem signing in.
     */
    public ProtocolProviderService signin(String userName, String password)
        throws OperationFailedException
    {
        if(userName.startsWith("sip:"))
            userName = userName.substring(4);

        ProtocolProviderFactory factory
            = SIPAccRegWizzActivator.getSIPProtocolProviderFactory();

        ProtocolProviderService pps = null;
        if (factory != null)
            pps = this.installAccount(  factory,
                                        userName,
                                        password);

        return pps;
    }

    /**
     * Creates an account for the given user and password.
     *
     * @param providerFactory the ProtocolProviderFactory which will create
     * the account
     * @param userName the user identifier
     * @param passwd the password
     * @return the <tt>ProtocolProviderService</tt> for the new account.
     * @throws OperationFailedException problem installing account
     */
    private ProtocolProviderService installAccount(
            ProtocolProviderFactory providerFactory,
            String userName,
            String passwd)
        throws OperationFailedException
    {
        HashMap<String, String> accountProperties
            = new HashMap<String, String>();

        accountProperties.put(ProtocolProviderFactory.PROTOCOL, getProtocol());
        String protocolIconPath = getProtocolIconPath();
        if (protocolIconPath != null)
            accountProperties.put(  ProtocolProviderFactory.PROTOCOL_ICON_PATH,
                                    protocolIconPath);

        String accountIconPath = getAccountIconPath();
        if (accountIconPath != null)
            accountProperties.put(  ProtocolProviderFactory.ACCOUNT_ICON_PATH,
                                    accountIconPath);

        if(registration.isRememberPassword())
        {
            accountProperties.put(ProtocolProviderFactory.PASSWORD, passwd);
        }
        else
        {
            // clear password if requested
            registration.setPassword(null);
        }

        String serverAddress = null;
        String serverFromUsername =
            SIPAccountRegistrationForm.getServerFromUserName(userName);

        if (registration.getServerAddress() != null)
            serverAddress = registration.getServerAddress();

        if(serverFromUsername == null
            && registration.getDefaultDomain() != null)
        {
            // we have only a username and we want to add
            // a default domain
            userName = userName + "@" + registration.getDefaultDomain();

            if(serverAddress == null)
                serverAddress = registration.getDefaultDomain();
        }
        else if(serverAddress == null &&
            serverFromUsername != null)
        {
            serverAddress = serverFromUsername;
        }

        if (serverAddress != null)
        {
            accountProperties.put(ProtocolProviderFactory.SERVER_ADDRESS,
                serverAddress);

            if (userName.indexOf(serverAddress) < 0)
                accountProperties.put(
                    ProtocolProviderFactory.IS_SERVER_OVERRIDDEN,
                    Boolean.toString(true));
        }

        accountProperties.put(ProtocolProviderFactory.DISPLAY_NAME,
            registration.getDisplayName());

        accountProperties.put(ProtocolProviderFactory.AUTHORIZATION_NAME,
            registration.getAuthorizationName());

        accountProperties.put(ProtocolProviderFactory.SERVER_PORT,
            registration.getServerPort());

        if(registration.isProxyAutoConfigure())
        {
            accountProperties.put(ProtocolProviderFactory.PROXY_AUTO_CONFIG,
                    Boolean.TRUE.toString());
        }
        else
        {
            accountProperties.put(ProtocolProviderFactory.PROXY_AUTO_CONFIG,
                    Boolean.FALSE.toString());

            accountProperties.put(ProtocolProviderFactory.PROXY_ADDRESS,
                registration.getProxy());

            accountProperties.put(ProtocolProviderFactory.PROXY_PORT,
                registration.getProxyPort());

            accountProperties.put(ProtocolProviderFactory.PREFERRED_TRANSPORT,
                registration.getPreferredTransport());
        }

        accountProperties.put(ProtocolProviderFactory.IS_PRESENCE_ENABLED,
                Boolean.toString(registration.isEnablePresence()));

        // when we are creating registerless account make sure that
        // we don't use PA
        if(serverAddress != null)
        {
            accountProperties.put(ProtocolProviderFactory.FORCE_P2P_MODE,
                Boolean.toString(registration.isForceP2PMode()));
        }
        else
        {
            accountProperties.put(ProtocolProviderFactory.FORCE_P2P_MODE,
                Boolean.TRUE.toString());
        }

        accountProperties.put(ProtocolProviderFactory.DEFAULT_ENCRYPTION,
                Boolean.toString(registration.isDefaultEncryption()));

        accountProperties.put(ProtocolProviderFactory.DEFAULT_SIPZRTP_ATTRIBUTE,
                Boolean.toString(registration.isSipZrtpAttribute()));

        accountProperties.put(ProtocolProviderFactory.SAVP_OPTION,
            Integer.toString(registration.getSavpOption()));

        accountProperties.put(ProtocolProviderFactory.SDES_ENABLED,
            Boolean.toString(registration.isSDesEnabled()));

        accountProperties.put(ProtocolProviderFactory.SDES_CIPHER_SUITES,
            registration.getSDesCipherSuites());

        accountProperties.put(ProtocolProviderFactory.POLLING_PERIOD,
                registration.getPollingPeriod());

        accountProperties.put(ProtocolProviderFactory.SUBSCRIPTION_EXPIRATION,
                registration.getSubscriptionExpiration());

        accountProperties.put(ProtocolProviderFactory.CLIENT_TLS_CERTIFICATE,
                registration.getTlsClientCertificate());

        if(registration.getKeepAliveMethod() != null)
            accountProperties.put(ProtocolProviderFactory.KEEP_ALIVE_METHOD,
                registration.getKeepAliveMethod());
        else
            accountProperties.put(ProtocolProviderFactory.KEEP_ALIVE_METHOD,
                registration.getDefaultKeepAliveMethod());

        accountProperties.put(ProtocolProviderFactory.KEEP_ALIVE_INTERVAL,
            registration.getKeepAliveInterval());

        if(registration.getDTMFMethod() != null)
            accountProperties.put("DTMF_METHOD",
                registration.getDTMFMethod());
        else
            accountProperties.put("DTMF_METHOD",
                registration.getDefaultDTMFMethod());

        accountProperties.put("XIVO_ENABLE",
                Boolean.toString(registration.isXiVOEnable()));
        accountProperties.put("XCAP_ENABLE",
            Boolean.toString(registration.isXCapEnable()));

        if(registration.isXCapEnable())
        {
            accountProperties.put("XCAP_USE_SIP_CREDETIALS",
                Boolean.toString(registration.isClistOptionUseSipCredentials()));
            if (registration.getClistOptionServerUri() != null)
            {
                accountProperties.put(
                    "XCAP_SERVER_URI",
                    registration.getClistOptionServerUri());
            }
            if (registration.getClistOptionUser() != null)
            {
                accountProperties
                    .put("XCAP_USER", registration.getClistOptionUser());
            }
            if (registration.getClistOptionPassword() != null)
            {
                accountProperties
                    .put("XCAP_PASSWORD", registration.getClistOptionPassword());
            }
        }
        else if(registration.isXiVOEnable())
        {
            accountProperties.put("XIVO_USE_SIP_CREDETIALS",
                Boolean.toString(registration.isClistOptionUseSipCredentials()));
            if (registration.getClistOptionServerUri() != null)
            {
                accountProperties.put(
                    "XIVO_SERVER_URI",
                    registration.getClistOptionServerUri());
            }
            if (registration.getClistOptionUser() != null)
            {
                accountProperties
                    .put("XIVO_USER", registration.getClistOptionUser());
            }
            if (registration.getClistOptionPassword() != null)
            {
                accountProperties
                    .put("XIVO_PASSWORD", registration.getClistOptionPassword());
            }
        }

        if(registration.isMessageWaitingIndicationsEnabled())
        {
            if(!StringUtils.isNullOrEmpty(registration.getVoicemailURI(), true))
                accountProperties.put(
                    ProtocolProviderFactory.VOICEMAIL_URI,
                    registration.getVoicemailURI());
            else if(isModification())
                accountProperties.put(ProtocolProviderFactory.VOICEMAIL_URI, "");

            if(isModification())
            {
                // remove the property as true is by default,
                // and null removes property
                accountProperties.put(ProtocolProviderFactory.VOICEMAIL_ENABLED,
                                      null);
            }
        }
        else if(isModification())
        {
            accountProperties.put(ProtocolProviderFactory.VOICEMAIL_ENABLED,
                                  Boolean.FALSE.toString());
        }


        if(isModification())
        {
            accountProperties.put(ProtocolProviderFactory.USER_ID, userName);
            providerFactory.modifyAccount(  protocolProvider,
                                            accountProperties);

            setModification(false);

            return protocolProvider;
        }

        try
        {
            AccountID accountID = providerFactory.installAccount(
                    userName, accountProperties);

            ServiceReference serRef = providerFactory
                .getProviderForAccount(accountID);

            protocolProvider
                = (ProtocolProviderService) SIPAccRegWizzActivator.bundleContext
                    .getService(serRef);
        }
        catch (IllegalStateException exc)
        {
            logger.warn(exc.getMessage());

            throw new OperationFailedException(
                "Account already exists.",
                OperationFailedException.IDENTIFICATION_CONFLICT);
        }
        catch (Exception exc)
        {
            logger.warn(exc.getMessage());

            throw new OperationFailedException(
                exc.getMessage(),
                OperationFailedException.GENERAL_ERROR);
        }

        return protocolProvider;
    }

    /**
     * Fills the id and Password fields in this panel with the data coming
     * from the given protocolProvider.
     * @param protocolProvider The <tt>ProtocolProviderService</tt> to load the
     * data from.
     */
    public void loadAccount(ProtocolProviderService protocolProvider)
    {
        setModification(true);

        this.protocolProvider = protocolProvider;

        setRegistration(new SIPAccountRegistration());

        this.firstWizardPage.loadAccount(protocolProvider);
    }

    /**
     * Returns the registration object, which will store all the data through
     * the wizard.
     *
     * @return the registration object, which will store all the data through
     * the wizard
     */
    public SIPAccountRegistration getRegistration()
    {
        return registration;
    }

    /**
     * Sets the registration object, which will store all the data through
     * the wizard.
     *
     * @param registration the registration object, which will store all the
     * data through the wizard
     */
    protected void setRegistration(SIPAccountRegistration registration)
    {
        this.registration = registration;
    }

    /**
     * Returns the size of this wizard.
     * @return the size of this wizard
     */
    public Dimension getSize()
    {
        return new Dimension(600, 500);
    }

    /**
     * Returns the identifier of the page to show first in the wizard.
     * @return the identifier of the page to show first in the wizard.
     */
    public Object getFirstPageIdentifier()
    {
        return firstWizardPage.getIdentifier();
    }

    /**
     * Returns the identifier of the page to show last in the wizard.
     * @return the identifier of the page to show last in the wizard.
     */
    public Object getLastPageIdentifier()
    {
        return firstWizardPage.getIdentifier();
    }

    /**
     * Returns an example string, which should indicate to the user how the
     * user name should look like.
     * @return an example string, which should indicate to the user how the
     * user name should look like.
     */
    public String getUserNameExample()
    {
        return "Ex: john@voiphone.net or simply \"john\" for no server";
    }

    /**
     * Returns the name of the web sign up link.
     * @return the name of the web sign up link
     */
    public String getWebSignupLinkName()
    {
        return null;
    }

    /**
     * Indicates if a sign up form is supported by this wizard.
     *
     * @return <tt>true</tt> if a sign up form is supported by this wizard,
     * <tt>false</tt> - otherwise
     */
    public boolean isSignupSupported()
    {
        if (getCreateAccountService() != null)
            return true;

        return false;
    }

    /**
     * Returns <code>true</code> if the web sign up is supported by the current
     * implementation, <code>false</code> - otherwise.
     * @return <code>true</code> if the web sign up is supported by the current
     * implementation, <code>false</code> - otherwise
     */
    public boolean isWebSignupSupported()
    {
        String webSignupLinkName = getWebSignupLinkName();

        return webSignupLinkName != null && webSignupLinkName.length() > 0;
    }

    /**
     * Sets the create account view of this registration wizard.
     */
    public void setCreateAccountView()
    {
        if (getCreateAccountService() != null)
        {
            firstWizardPage.getRegistrationForm().setCreateButtonSelected();
        }
    }

    /**
     * Returns a simple account registration form that would be the first form
     * shown to the user. Only if the user needs more settings she'll choose
     * to open the advanced wizard, consisted by all pages.
     *
     * @param isCreateAccount indicates if the simple form should be opened as 
     * a create account form or as a login form
     * @return a simple account registration form
     */
    public Object getSimpleForm(boolean isCreateAccount)
    {
        return getSimpleForm(new SIPAccountRegistration(), isCreateAccount);
    }

    /**
     * Returns the simple form.
     *
     * @param registration the registration object
     * @return the simple form
     */
    public Object getSimpleForm(SIPAccountRegistration registration,
                                boolean isCreateAccount)
    {
        setRegistration(registration);

        firstWizardPage = new FirstWizardPage(this);
        return firstWizardPage.getSimpleForm();
    }

    /**
     * Returns the protocol name as listed in "ProtocolNames" or just the name
     * of the service.
     * @return the protocol name
     */
    public String getProtocol()
    {
        return ProtocolNames.SIP;
    }

    /**
     * Returns the protocol icon path.
     * @return the protocol icon path
     */
    public String getProtocolIconPath()
    {
        return null;
    }

    /**
     * Returns the account icon path.
     * @return the account icon path
     */
    public String getAccountIconPath()
    {
        return null;
    }

    /**
     * Returns an instance of <tt>CreateAccountService</tt> through which the
     * user could create an account. This method is meant to be implemented by
     * specific protocol provider wizards.
     * @return an instance of <tt>CreateAccountService</tt>
     */
    protected SIPAccountCreationFormService getCreateAccountService()
    {
        return null;
    }

    /**
     * Returns the display label used for the sip id field.
     * @return the sip id display label string.
     */
    protected String getUsernameLabel()
    {
        return Resources.getString("plugin.sipaccregwizz.USERNAME");
    }

    /**
     * Return the string for add existing account button.
     * @return the string for add existing account button.
     */
    protected String getExistingAccountLabel()
    {
        return Resources.getString("plugin.sipaccregwizz.EXISTING_ACCOUNT");
    }

    /**
     * Return the string for create new account button.
     * @return the string for create new account button.
     */
    protected String getCreateAccountLabel()
    {
        return Resources.getString("plugin.sipaccregwizz.CREATE_ACCOUNT");
    }
}
