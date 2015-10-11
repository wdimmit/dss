# Basic Web Service Call

## Summary
This sample applicaiton demonstrates how to send data to a simple JSON web service and display the retrieved data in the UI.  The web service used is http://md5.jsontest.com, which generates the md5 hash of the string submitted.

## How to use
When executed, the applicaiton will display a string to be processed and a button to send the string to the web service for processing.  Pressing this button generates a proper query string, appends it to the service URL and submits the request to the web service.  

As KinomaJS is an event-driven framework, the program does not pause and wait for the result; it simply sends it and moves on.  To handle the eventual return of data from the service, an onComplete method is declared in the container which invokes the request.  This declariation acts as a listener* for the result and is executed when the result arrives.  In this case, the text from the web serivce is parsed out of JSON and into an object and the md5 hash of the submitted text then replaces the original text in the UI.

## Notes & Tips
* Any object in KinomaJS can only have a single onComplete method.  If you need to make requests requiring different processing within a single applicaiton, you will need to either add logic to an onComplete method to differentiate between the various responses or split the requests between different objects entirely.
* If you want the result of a request to be processed, you must declare the type of response expected in the invoke method.  This can be either Message.HTML, Message.JSON or Message.TEXT.  When using JSON web services, it is suggested that you use Message.TEXT instead of Message.JSON as a request declared as Message.JSON will fail if the service returns anything except valid JSON (like an HTTP 500 error page).
* In the onComplete method, there is a trace call to help with troubleshooting the request.  Please note the asterisks appended around the response text.  The difference between the string '' and ' ' can be very significant and, by itself, trace doesn't highlight the difference.

## Related Resources