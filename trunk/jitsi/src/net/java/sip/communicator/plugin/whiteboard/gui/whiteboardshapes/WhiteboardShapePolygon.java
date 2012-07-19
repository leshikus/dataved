/*
 * Jitsi, the OpenSource Java VoIP and Instant Messaging client.
 *
 * Distributable under LGPL license.
 * See terms of license at gnu.org.
 */

package net.java.sip.communicator.plugin.whiteboard.gui.whiteboardshapes;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.AffineTransform;
import java.awt.geom.GeneralPath;
import java.awt.geom.Point2D;
import java.util.ArrayList;
import java.util.List;
import net.java.sip.communicator.service.protocol.WhiteboardPoint;
import net.java.sip.communicator.service.protocol.whiteboardobjects.*;

/**
 *
 * a WhiteboardShapePolygon, in XML :
 * <polygon id="" points="0,0 1,1 2,5"/>
 *
 * @author Julien Waechter
 */
public class WhiteboardShapePolygon
  extends WhiteboardShape implements WhiteboardObjectPolygon
{
    
    /**
     * list of WhiteboardPoint
     */
    private List<WhiteboardPoint> points;
    /**
     * True is filled, false is unfilled.
     */
    private boolean fill = false;
    /**
     * The background color of this object
     */
    private Color backgroundColor;
    
    /**
     * WhiteboardShapePolygon constructor.
     *
     * @param id  String that uniquely identifies this WhiteboardObject
     * @param thickness number of pixels that this object (or its border) 
     * should be thick
     * @param color WhiteboardShapePolygon's color (or rather it's border)
     * @param points list of WhiteboardPoint
     * @param fill True is filled, false is unfilled
     */
    public WhiteboardShapePolygon ( String id,
                                    int thickness,
                                    Color color,
                                    List<WhiteboardPoint> points,
                                    boolean fill)
    {
        super (id);

        this.initShape(thickness, color, points, fill);
    }
    
    /**
     * WhiteboardShapePolygon constructor.
     *
     * @param id String that uniquely identifies this WhiteboardObject
     * @param t number of pixels that this object (or its border) 
     * should be thick
     * @param c WhiteboardShapePolygon's color (or rather it's border)
     * @param m_points list of WhiteboardPoint
     * @param fill True is filled, false is unfilled
     * @param at 2D affine transformation
     */
    public WhiteboardShapePolygon ( String id,
                                    int t,
                                    Color c,
                                    List<WhiteboardPoint> m_points,
                                    boolean fill,
                                    AffineTransform at)
    {
        super (id);

        ArrayList<WhiteboardPoint> pointsList = new ArrayList<WhiteboardPoint>();
        WhiteboardPoint p;
        for (int i = 0; i < m_points.size (); i++)
        {
            p = m_points.get (i);
            Point2D w = at.transform (
              new Point2D.Double (p.getX (), p.getY ()), null);
            pointsList.add (new WhiteboardPoint (w.getX (), w.getY ()));
        }

        this.initShape(t, c, pointsList, fill);
    }

    /**
     * Initializes this shape.
     *
     * @param thickness number of pixels that this object (or its border) 
     * should be thick
     * @param color WhiteboardShapePolygon's color (or rather it's border)
     * @param points list of WhiteboardPoint
     * @param fill True is filled, false is unfilled
     */
    private void initShape (int thickness,
                            Color color,
                            List<WhiteboardPoint> points,
                            boolean fill)
    {
        this.setThickness (thickness);
        setColor (color);
        this.backgroundColor = color;
        this.points = new ArrayList<WhiteboardPoint>(points);
        this.fill = fill;
    }

    /**
     * Returns the fill state of the WhiteboardObject.
     *
     * @return True is filled, false is unfilled.
     */
    public boolean isFill ()
    {
        return fill;
    }
    
    /**
     * Sets the fill state of the WhiteboardObject.
     * True is filled, false is unfilled.
     *
     * @param fill The new fill state.
     */
    public void setFill (boolean fill)
    {
        this.fill = fill;
    }
    
    /**
     * Code to paint the WhiteboardShapePolygon.
     *
     * @param g graphics context
     * @param t 2D affine transform
     */
    public void paintShape (Graphics2D g, AffineTransform t)
    {
        g.setStroke (new BasicStroke (this.getThickness (),
          BasicStroke.CAP_ROUND,BasicStroke.CAP_ROUND));
        if (fill)
        {
            g.fill (createPoly (t));
        }
        else
        {
            g.draw (createPoly (t));
        }
    }
    
    /**
     * Returns the list of selected WhiteboardPoints.
     *
     * @return list of selected WhiteboardPoints
     */
    public List<WhiteboardPoint> getSelectionPoints ()
    {
        return points;
    }

    /**
     * Tests if the shape contains a point.
     *
     * @param p coord point
     * @return true if shape contains p
     */
    public boolean contains (Point2D p)
    {
        return createPolyWorld ().contains (p);
    }
    
    /**
     * Creates a GeneralPath with all the WhiteboardPoint.
     * This GeneralPath is used for display.
     *
     * @param w2v 2D affine transform
     * @return a GeneralPath generated with all the WhiteboardPoint.
     */
    private GeneralPath createPoly (AffineTransform w2v)
    {
        GeneralPath polygon = new GeneralPath (
          GeneralPath.WIND_EVEN_ODD, points.size ());
        if(points.size ()<=0)
            return polygon;
        
        WhiteboardPoint start = points.get (0);
        Point2D w = new Point2D.Double (start.getX (), start.getY ());
        Point2D v = w2v.transform (w, null);
        polygon.moveTo ((int) v.getX (), (int) v.getY ());
        
        WhiteboardPoint p;
        for (int i =0; i<points.size ();i++)
        {
            p = points.get (i);
            w = new Point2D.Double (p.getX (), p.getY ());
            v = w2v.transform (w, null);
            polygon.lineTo ((int) v.getX (), (int) v.getY ());
        }
        
        polygon.closePath ();
        return polygon;
    }
    
    /**
     * Creates a GeneralPath with all the WhiteboardPoint.
     * This GeneralPath is used for the contains test.
     *
     * @return a GeneralPath generated with all the WhiteboardPoint.
     */
    private GeneralPath createPolyWorld ()
    {
        GeneralPath polygon = new GeneralPath (
          GeneralPath.WIND_EVEN_ODD, points.size ());
        if(points.size ()<=0)
            return polygon;
        
        WhiteboardPoint start = points.get (0);
        polygon.moveTo ((float) start.getX (), (float) start.getY ());
        
        WhiteboardPoint p;
        for (int i =0; i<points.size ();i++)
        {
            p = points.get (i);
            polygon.lineTo ((float) p.getX (), (float) p.getY ());
        }
        
        polygon.closePath ();
        return polygon;
    }
    
    /**
     * Returns a list of all the <tt>WhiteboardPoint</tt> instances that this
     * <tt>WhiteboardObject</tt> is composed of.
     *
     * @return the list of <tt>WhiteboardPoint</tt>s composing this object.
     */
    public List<WhiteboardPoint> getPoints ()
    {
        return points;
    }
    
    /**
     * Sets the list of <tt>WhiteboardPoint</tt> instances that this
     * <tt>WhiteboardObject</tt> is composed of.
     *
     * @param points the list of <tt>WhiteboardPoint</tt> instances that this
     * <tt>WhiteboardObject</tt> is composed of.
     */
    public void setPoints (List<WhiteboardPoint> points)
    {
        this.points = new ArrayList<WhiteboardPoint>(points);
    }
    
    /**
     * Translates the shape.
     *
     * @param deltaX x coord
     * @param deltaY y coord
     */
    public void translate (double deltaX, double deltaY)
    {
        WhiteboardPoint point ;
        for (int i =0; i<points.size ();i++)
        {
            point = points.get (i);
            points.set (i,
              new WhiteboardPoint (point.getX () + deltaX,
              point.getY () + deltaY));
        }
    }
    
    /**
     * Translates a point from the shape.
     *
     * @param deltaX x coord
     * @param deltaY y coord
     */
    public void translateSelectedPoint (double deltaX, double deltaY)
    {
        if (getModifyPoint() == null)
            return;

        WhiteboardPoint point;
        for (int i = 0; i < points.size (); i++)
        {
            point = points.get (i);
            if(getModifyPoint().equals(point))
            {
                WhiteboardPoint newPoint
                    = new WhiteboardPoint (
                        point.getX () + deltaX,
                        point.getY () + deltaY);

                points.set (i, newPoint);

                this.setModifyPoint(newPoint);
            }
        }
    }

    /**
     * Tests if a point p is over a selection point.
     * 
     * @param p point
     * @return nearest selection point
     */
    public WhiteboardPoint getSelectionPoint (Point2D p)
    {
        WhiteboardPoint point;
        for (int i = 0; i< points.size ();i++)
        {
            point = points.get (i);

            if(( new Point2D.Double (
              point.getX (),  point.getY ())).distance (p) < 18)
            {
                return point;
            }
        }
        return null;
    }

    /**
     * Specifies the background color for this object. The color parameter
     * must be encoded with standard RGB encoding: bits 24-31 are alpha, 16-23
     * are red, 8-15 are green, 0-7 are blue.
     *
     * @param backColor the color that we'd like to set for the background of this
     * <tt>WhiteboardObject</tt> (using standard RGB encoding).
     */
    public void setBackgroundColor (int backColor)
    {
        this.backgroundColor = Color.getColor ("", backColor);
    }
    
    /**
     * Returns an integer representing the background color of this object. The
     * return value uses standard RGB encoding: bits 24-31 are alpha, 16-23 are
     * red, 8-15 are green, 0-7 are blue.
     *
     * @return the RGB value of the background color of this object.
     */
    public int getBackgroundColor ()
    {
        return this.backgroundColor.getRGB ();
    }
}
