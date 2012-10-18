/*
 * Jitsi, the OpenSource Java VoIP and Instant Messaging client.
 *
 * Distributable under LGPL license.
 * See terms of license at gnu.org.
 */
package net.java.sip.communicator.impl.gui.main.call;

import java.awt.*;

import javax.swing.*;

/**
 * The <tt>CallContainer</tt> interface is an abstraction of a window,
 * containing one or many <tt>CallPanel</tt>s.
 *
 * @author Yana Stamcheva
 * @author Lyubomir Marinov
 */
public interface CallContainer
{
    /**
     * Adds the given <tt>CallPanel</tt> to this call window.
     *
     * @param callPanel the <tt>CallPanel</tt> to add
     */
    public void addCallPanel(CallPanel callPanel);

    /**
     * Closes a specific <tt>CallPanel</tt>. Optionally, does it with an
     * implementation-specific delay
     *
     * @param callPanel the <tt>CallPanel</tt> to be closed
     * @param delay <tt>true</tt> to close the specified <tt>callPanel</tt> with
     * an implementation-specific delay or <tt>false</tt> to close it as soon as
     * possible
     */
    public void close(CallPanel callPanel, boolean delay);

    /**
     * Attempts to give a specific <tt>Component</tt> a visible rectangle with a
     * specific width  and a specific height if possible and sane by resizing
     * the <tt>Window</tt> of this <tt>CallContainer</tt>.
     *
     * @param component the <tt>Component</tt> which requests a visible
     * rectangle with the specified <tt>width</tt> and <tt>height</tt>
     * @param width the width of the visible rectangle requested by the
     * specified <tt>component</tt>
     * @param height the height of the visible rectangle requested by the
     * specified <tt>component</tt>
     */
    void ensureSize(Component component, int width, int height);

    /**
     * Returns the frame of this call window.
     *
     * @return the frame of this call window
     */
    public JFrame getFrame();

    /**
     * Packs the content of this call window.
     */
    public void pack();
}
