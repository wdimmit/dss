# Basic Dialog Sample
##Summary
This sample provides a quick look at how to use the MobileFramework's Dialog library in pure JavaScript.  It is intended to allow users famaliar with KinomaJS enough insight into the library so that they can reference the more detailed Dialog[URL] sample for extensive information.

##Prerequesites
Your path will be easier if you already have a grasp of how KinomaJS Handler objects work.  If you're not, I suggest taking a few minutes to glance over the Simple Handler Client and Server samples [URL].
Also, before building any MobileFramework based app, you'll need to ensure that the MobileFramework module is added to your build path - for details see [URL].

##Inside the Code
The MobileFramework's dialog boxes are declared as special Handler objects. All MobileFramework dialogs follow the same basic pattern, but nearly all arguments are optional.  "Dialog: DIALOG.Box" is required as is the items array (though it can be empty), but title, action, and the ok and cancel buttons can all be defined as you see fit.

When you want to return data from a dialog box, you'll need to define the action attribute with a reference to a handler which can accept the data from the inputs defined in the items section of the dialog.  This handler does not have to be any different from handlers dealing with input from other sources and the dialog box's data will be passed as a simple URL query string.

As dialog boxes are defined as Handlers rather than Containers, they are invoked directly rather than added to the container heierarchy.  Passing data into a dialog box is just the same as passing data to any other handler - a simple query string is all that is required.  Data that is passed into a dialog box is ignored unless the name of the incoming variable matches one of the "id" definitions in the itmes list or if the incoming query is referenced directly (such as by the Dialog.Caption here).

##Notes
For Dialog boxes to work correctly, your application must inheret its behavior from an instance of MODEL.ApplicationBehavior( application ).  [WHY]

Beware small and rotated screens! While dialog boxes work wonderfully on portrait oriented screens of smartphone size or greater, things can get tricky on smaller screens when you are requiring text input in the dialog.  Be sure to test that the keyboard doesn't make accessing the rest of your dialog impossible.

