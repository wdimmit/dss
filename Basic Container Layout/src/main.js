//@program
/* Skins and Styles */
var redSkin = new Skin ({fill: 'red'});
var greenSkin = new Skin ({fill: 'green'});
var blueSkin = new Skin ({fill: 'blue'});
var purpleSkin = new Skin ({fill: 'purple'});
var yellowSkin = new Skin ({fill: 'yellow'});
var whiteSkin = new Skin ({fill: 'white'});

var whiteStyle = new Style ({ font: '18px', color: 'white' });
var blackStyle = new Style ({ font: '18px', color: 'black' });


/* Extra container definition */
var containerFour = new Container({
	left: 0, right: 0, bottom: 0, height: 75, skin: yellowSkin, active: true,
	contents: [
		new Label({string: 'Behind 2 (4)', style: blackStyle}),
		new Label({bottom: 5, string: '(Remove)', style: blackStyle})
	],
	behavior: Object.create(Behavior.prototype, {
		onTouchEnded: { value: function(container, id, x, y, ticks) {
			container.container.remove(containerFour);
		}},
	}),	
});

/* Main screen layout */
var mainContainer = new Container({
	left: 0, right: 0, top: 0, bottom: 0, 
	active: false, skin: whiteSkin, name: 'mainCon',
	contents: [
		new Container( { top: 0, left: 0, right: 0, height: 100, skin: redSkin, name: 'containerOne', active: true,
			contents: [
			    new Label({top: 5, string: '(Add)', style: whiteStyle}),
				new Label({string: 'Top and Side (1)', style: whiteStyle})						
			],
			behavior: Object.create(Behavior.prototype, {
				onTouchEnded: { value: function(container, id, x, y, ticks) {
					container.container.add(containerFour);
				}},
			}),	
			
		}),
		new Container( { top: 0, bottom: 0, right: 0, width: 100, skin: greenSkin, active: true, name: 'containerTwo',
			contents: [
				new Column({
					contents: [
						new Label({string: '(Insert)', style: whiteStyle}),
						new Label({string: '', style: whiteStyle}),
						new Label({string: 'Top,', style: whiteStyle}),
						new Label({string: 'Bottom', style: whiteStyle}),
						new Label({string: 'Right', style: whiteStyle}),
						new Label({string: '(2)', style: whiteStyle}),
					]		
				}),
			],
			behavior: Object.create(Behavior.prototype, {
				onTouchEnded: { value: function(container, id, x, y, ticks) {
					container.container.insert(containerFour, container.container.containerGreen);
				}},
			}),	
		}),
		new Container( { width: 160, height: 100, skin: blueSkin, active: true, name: 'containerThree',
			contents: [
			    new Label({top: 5, string: '(Color Parent)', style: whiteStyle}),
				new Label({string: 'Height, Width (3)', style: whiteStyle})
			],
			behavior: Object.create(Behavior.prototype, {
				onTouchEnded: { value: function(container, id, x, y, ticks) {
					container.container.skin = purpleSkin;
				}},
			}),			
		}), 
	],
});

/* Application definition */
application.behavior = {
	onLaunch: function() { 
		application.add(mainContainer);
	}
}