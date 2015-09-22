//@program

/*Skins and Styles*/
var buttonSkin = new Skin ({fill: 'green'});
var whiteBox = new Skin ({fill: 'white'});

var buttonStyle = new Style({font: '22px', color: 'white'})
var smallStyle = new Style ({font: '20px', color: 'black'});

/* Globals */
var origText = 'thequickbrownfoxjumpedoverthelazydog'


/* Main screen layout */
var MainContainer = new Container({
	left: 0, right: 0, top: 0, bottom: 0, active: false, skin: whiteBox,
	contents: [
		new Label({ left:0, right:0, active: false, name:'output', style: smallStyle, string: origText }),
		new Container( { bottom: 20, height: 40, width: 160, skin: buttonSkin, active: true,
			behavior: Behavior({
				onTouchEnded: function(container, id, x, y, ticks) {
					var url = 'http://md5.jsontest.com/';
					var query = serializeQuery({text: origText});				
					var msg = new Message(url + '?' + query);
					
					container.invoke(msg, Message.TEXT);
				},
				onComplete: function(container, message, text) {
					if (0 == message.error && 200 == message.status) {
						try {
							var responseObj = JSON.parse(text);
						}
						catch (e) {
							trace('Web service responded with invalid JSON!\n');
						}
						MainContainer.output.string = responseObj.md5; 
						trace('Raw Response Body: *'+text+'*'+'\n');
					}
					else {
						trace('Web service failed with a status of ' + message.status + '\n');
					}
				}
			}),
			contents: [
				new Label({string: 'Send Request', style: buttonStyle})
			]
		}) 
	]
});

/* Application definition */
application.behavior = {
	onLaunch: function() { 
		application.add(MainContainer);
	}
}