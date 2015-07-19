//@program
var DIALOG = require('mobile/dialog');
var MODEL = require('mobile/model');
var THEME = require('themes/sample/theme');
var KEYBOARD = require('mobile/keyboard');

var backgroundSkin = new Skin({ fill: '#eee',});
var buttonSkin = new Skin({ fill: '#ccf',});
var headerStyle = new Style({ color: '#444', font: 'bold 18px', horizontal: 'center', vertical: 'middle', });
var buttonStyle = new Style({ color: 'blue', font: 'bold 24px', horizontal: 'center', vertical: 'middle', });

Handler.bind("/simple", Object.create(MODEL.DialogBehavior.prototype, {
	onDescribe: { value: 
		function(query) {
			return {
                    Dialog: DIALOG.Box,
                    title: "What is your name?",
                    action: "/traceResult",
                    items: [
                        {
                            Item: DIALOG.Field,
                            id: "first_name",
                            label: "First",
                        },
                        {
                            Item: DIALOG.Field,
                            id: "last_name",
                            label: "Last",
                        },
                        {
                            id: "secret",
                        },
                        {
                            Item: DIALOG.Caption,
                            string: query.greeting
                        },
                    ],
                    ok: "OK",
                    cancel: "Cancel",
                };
		},
	},
}));

Handler.bind("/traceResult", {
	onInvoke: function(handler, message) {
			data = parseQuery(message.query);
			for (var key in data) {
                    trace(key + ": " + data[key] + "\n");
                }
		},
	},
);

var MainScreen = Container.template(function($) { return { left: 0, right: 0, top: 0, bottom: 0, skin: backgroundSkin, contents: [
	Label($, { left: 0, right: 0, top: 4, style: headerStyle, string: 'Basic Dialog Sample', }),
	Column($, { width: 300, contents: [
		Label($, { height: 35, left: 25, right: 25, active: true, string: 'Show Simple Dialog', skin: buttonSkin,
			style: buttonStyle,
			behavior: Object.create(Behavior.prototype, {
				onTouchEnded: { value: function(label, x, y, id, ticks) {			
					dialogData = {first_name: 'Will', greeting: 'Welcome to KinomaJS', secret: '42'}
					label.invoke(new Message("/simple?" + serializeQuery(dialogData)));
				}}
			}),
		}),
	]
 })
 ]
}});


application.behavior = new MODEL.ApplicationBehavior( application );

application.add(new MainScreen({}));

