//@program

/*Skins and Styles*/
var smallStyle = new Style ({ font: '16px', color: '#000000' });
var counterStyle = new Style ({font: '20px', color: '#000000'});
var whiteBox = new Skin ({fill: 'white'});
var buttonSkin = new Skin ({fill: 'Green'});
var buttonStyle = new Style({font: '22px', color: 'white'})

/* Globals */
var origText = 'thequickbrownfoxjumpedoverthelazydog'


/* Main screen layout */
var mainContainer = new Container({
	left: 0, right: 0, top: 0, bottom: 0, active: false, skin: whiteBox, name: 'mainCon',
	contents: [
		new Label({ left:0, right:0, active: false, name:'output', style: counterStyle, string: origText }),
		new Container( { bottom: 20, height: 40, width: 160, skin: buttonSkin, active: true,
			contents: [
				new Label({string: 'Send Request', style: buttonStyle})
			],
			behavior: Object.create(Behavior.prototype, {
				onTouchEnded: { value: function(container, id, x, y, ticks) {
					var url = 'http://md5.jsontest.com/';
					var query = serializeQuery({text: origText});
					
					var msg = new Message(url + '?' + query);
					
					container.invoke(msg, Message.TEXT);
				}},
				onComplete: { value: function(container, message, text) {
					var responseObj = JSON.parse(text);
					mainContainer.output.string = responseObj.md5; 
					trace('*'+text+'*'+'\n');
				}} 
			})
		}) 
	]
});

/* Application definition */
application.behavior = {
	onLaunch: function() { 
		application.add(mainContainer);
	}
}