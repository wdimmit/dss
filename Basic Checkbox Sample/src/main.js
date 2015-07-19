//@program
var THEMEX = require('themes/flat/theme');
var BUTTONS = require('controls/buttons');

var whiteSkin = new Skin({fill:"white"});
var blueSkin = new Skin ({fill: '#00F'});
var greySkin = new Skin({fill: '#999'});
var whiteStyle = new Style ({ font: '20px', color: 'white' });

var myStatusBar = new Container({
	top: 5, left: 10, right: 10, height: 35, skin: greySkin, 
	contents: [
	          new Label({style: whiteStyle, name: 'statusLabel'})
      ]
})

var myCheckBoxTemplate = BUTTONS.LabeledCheckbox.template(function($){ return{
	top:50, bottom:50, left:50, right:50,
	behavior: Object.create(BUTTONS.LabeledCheckboxBehavior.prototype, {
		onSelected: { value:  function(checkBox){
			myStatusBar.statusLabel.string = checkBox.buttonLabel.string + ' checked';
		}},
		onUnselected: { value:  function(checkBox){
			myStatusBar.statusLabel.string = checkBox.buttonLabel.string + ' unchecked';
		}}
	})
}});

var mySimpleButtons = new Line({
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

var mainCon = new Column({left:0, right:0, top:0, bottom:0, skin: whiteSkin});

function checkTheBox(element, index, array) {
    element.distribute("setSelected", true, false);
}
function unCheckTheBox(element, index, array) {
    element.distribute("setSelected", false, false);
}

var checkbox = [];
checkbox[0] = new myCheckBoxTemplate({name:"Hello"});
checkbox[1] = new myCheckBoxTemplate({name:"World"});
checkbox[2] = new myCheckBoxTemplate({name:"Click Me"});

application.add(mainCon);

mainCon.add(myStatusBar);
for (var i = 0; i < 3; i++) mainCon.add(checkbox[i]);
mainCon.add(mySimpleButtons);