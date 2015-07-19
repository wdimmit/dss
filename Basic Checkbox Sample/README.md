# Basic Checkbox Sample
##Summary
This sample demonstrates the use of Controls library's LabledCheckbox, a subtype of Buttons.  Each checkbox can be checked and unchecked and the name of the most recently changed checkbox will be displayed in the grey statusbar at the top.  There are also buttons to both check and uncheck all of the checkboxes at once.

##Inside the Code
This sample requires that the Controls Module be added to the project's build path.  See [URL] for instructions.  Both the Buttons library and the Flat theme are required from the Controls Framework, and the order of the code is important.  The theme must be referenced first and must be aliased as THEME for the Buttons library to load properly.

The objects myStatusBar and mySimpleButtons are both containers (Line[DOCSURL] is a type of container) which hold content to be directly added to the application later.  The object myCheckBoxTemplate, on the other hand, is a *template*.  It cannot be directly added to any part of the application; instead instances of the template must be created and those can be added.  Templates allow for easy creation of multiple copies of similar content (such as a list of checkboxes).  An object must be passed into the template when instanciating it and can contain any number of variables to be used in the intialization of the instance.  In this case "name" is passed in and assigned to the attribute buttonLabel.  This happens inside the Buttons library so it is not visible in this code.  Please see [URL] for more information on templates.

A KinomaJS application can only directly hold one container, so it is common for a full-screen container to be added to the application first, and for all subsequent content to be added to this container.  This is the purpose of the object mainCon, which is a Column[DOCSURL] (another type of container).

The checkboxes could be instanciated and added to mainCon directly, but here they are added to an array first to allow for easier access from other parts of the program.


[to be continued...]