//@program

/*Skins and Styles*/
var buttonSkin = new Skin ({fill: 'Green'});
var whiteBox = new Skin ({fill: 'white'});

var buttonStyle = new Style({font: '22px', color: 'white'})
var smallStyle = new Style ({font: '20px', color: '#000000'});

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
					var responseObj = JSON.parse(text);
					mainContainer.output.string = responseObj.md5; 
					trace('*'+text+'*'+'\n');
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