# Basic Container Layout
##Summary
This sample application demonstrates how containers can be arranged and sized on screen in the x, y and z planes.
It also demostrates two ways to add containers to a running application and one way to access an object's parent container.

##How to use
Upon execution, the application will display three overlapping containers, each indicating how its dimensions were defined.

Please note that, while the side offset attributes (top, bottom, left, right) can be used with the size attributes (width, height) there are some combinations that are non-sensical.
One such example is defining a width while also defining a left *and* right offset.  In KinomaJS, the offset attributes will override the size attribute and your result may be unexpected.
Also note that when no offsets are defined (contianer 3) the container will be sized as requested and then centered between the sides of the parent container or application.

Clicking on container 1 will *add* container 4 to the application.  Because new items are stacked in the z-axis in the order they were added, container 4 will appear on top of container 2.
Clicking on container 4 will remove it from the application.  Clicking on container 2 when container 4 is not visible will *insert* the container below container 2 in the z-axis.
The insert function inserts an object before the object defined in the second argument to the function - in this case container 2 was specified.
Please note that any object can only exist one time in an application.  Adding or inserting container 4 when it already exists will result in an error. 
If you need multiple similar or identical objects within your application, consider creating templates and instanciating multiple copies of them.  This can drasitcally reduce 
the amount of code required for some complex layouts.

Clicking container 3 will change the color of the main container to purple.  It does this by referencing the container attribute of itself.  Every visual object in a KinomaJS application
has a container attribute that holds a refernce to the object containing it.   

##Related Samples   