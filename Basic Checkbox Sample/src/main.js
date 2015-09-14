//@program
var THEME = require('themes/flat/theme');
var BUTTONS = require('controls/buttons');

var blueSkin = new Skin ({fill: 'blue'});
var greySkin = new Skin({fill: '#999'});
var whiteSkin = new Skin({fill:'white'});

var whiteStyle = new Style ({ font: '20px', color: 'white' });

var MyStatusBar = new Container({
	top: 5, left: 10, right: 10, height: 35, skin: greySkin, 
	contents: [
	          new Label({style: whiteStyle, name: 'statusLabel'})
      ]
})

var MyCheckBoxTemplate = BUTTONS.LabeledCheckbox.template(function($){ return{
	top:50, bottom:50, left:50, right:50,
	behavior: Object.create(BUTTONS.LabeledCheckboxBehavior.prototype, {
		onSelected: { value:  function(checkBox){
			MyStatusBar.statusLabel.string = checkBox.buttonLabel.string + ' checked';
		}},
		onUnselected: { value:  function(checkBox){
			MyStatusBar.statusLabel.string = checkBox.buttonLabel.string + ' unchecked';
		}}
	})
}});

var MySimpleButtons = new Line({
	left: 20, right: 20, bottom: 5, height: 50, active: true,
	contents: [
		new Container({left: 10, right: 10, skin: blueSkin, active: true,
			contents: [
			    new Label({string: 'Check All', style: whiteStyle})	        
	        ],
	    	behavior: Object.create(Behavior.prototype, {
	    		onTouchEnded: { value: function(container, id, x, y, ticks) {
	    			checkbox.forEach(checkTheBox)
	    		}},
	    	}),		
		}),
		new Container({left: 10, right: 10, skin: blueSkin, active: true,
			contents: [
			    new Label({string: 'Uncheck All', style: whiteStyle})	        
	        ],
	    	behavior: Object.create(Behavior.prototype, {
	    		onTouchEnded: { value: function(container, id, x, y, ticks) {
	    			checkbox.forEach(unCheckTheBox)
	    		}},
	    	}),		
		})
		
	],
	
});

var MainContainer = new Column({left:0, right:0, top:0, bottom:0, skin: whiteSkin});

function checkTheBox(element, index, array) {
    element.distribute("setSelected", true, false);
}
function unCheckTheBox(element, index, array) {
    element.distribute("setSelected", false, false);
}

var checkbox = [
	new MyCheckBoxTemplate({name:"Hello"}),
	new MyCheckBoxTemplate({name:"World"}),
	new MyCheckBoxTemplate({name:"Click Me"})
];


/* Application definition */
application.behavior = {
	onLaunch: function() { 
		MainContainer.add(MyStatusBar);
		
		for (var i = 0; i < 3; i++) 
			MainContainer.add(checkbox[i]);
		
		MainContainer.add(MySimpleButtons);
		application.add(MainContainer);

	}
}