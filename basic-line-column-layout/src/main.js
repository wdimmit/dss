//@program
/*
  Copyright 2011-2015 Marvell Semiconductor, Inc.
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
      
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/* Skins and Styles */
var greySkin = new Skin ({fill: '#cccccc'});
var whiteSkin = new Skin ({fill: 'white'});
var yellowSkin = new Skin ({fill: 'yellow'});

var blackStyle = new Style ({ font: '22px', color: 'black', horizontal: 'center', vertical: 'middle' });
var whiteStyle = new Style ({ font: 'bold 22px', color: 'white', horizontal: 'center', vertical: 'middle' });


/* UI Templates */
var ButtonTemplate = Label.template(function ($) { return {
	top: 5, bottom: 5, left: 5, right: 5, skin: greySkin, style: whiteStyle, active: true, string: $.string,
	behavior: Behavior({
		onCreate: function(container, data) {
			this.data = data;
		},
		onTouchEnded: function(container, id, x, y, ticks) {
			application.distribute("onDisplayUpdate", this.data.string);
		}
	})
}})


/* Screen layout */
var mainContainer = Container.template(function ($) { return {
	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, 
	contents: [
		Label($, {top: 0, left: 0, right: 0, height: 35, style: blackStyle,
			behavior: Behavior({
				onDisplayUpdate: function(container, string) {
					container.string = container.string + string;	
				}
			})
		}),
		Container($, {top: 35, left: 0, right: 0, bottom: 0, skin: yellowSkin, 
			contents: [
				Column($, {top: 0, right: 0, left: 0, bottom: 0, 
					contents: [
						Line($, {top: 0, right: 0, left: 0, bottom: 0,
							contents: [
								new ButtonTemplate({string: '1'}),
								new ButtonTemplate({string: '2'}),
								new ButtonTemplate({string: '3'}),
							]
						}),
						Line($, {top: 0, right: 0, left: 0, bottom: 0,
							contents: [
								new ButtonTemplate({string: '4'}),
								new ButtonTemplate({string: '5'}),
								new ButtonTemplate({string: '6'}),
							]
						}),
						Line($, {top: 0, right: 0, left: 0, bottom: 0,
							contents: [
								new ButtonTemplate({string: '7'}),
								new ButtonTemplate({string: '8'}),
								new ButtonTemplate({string: '9'}),
							]
						}),
						Line($, {top: 0, right: 0, left: 0, bottom: 0,
							contents: [
								new ButtonTemplate({string: '*'}),
								new ButtonTemplate({string: '0'}),
								new ButtonTemplate({string: '#'}),
							]
						}),						
					]
				})
			]
		})
	]
}});

/* Application definition */
application.behavior = {
	onLaunch: function() { 
        var data = {};
		application.add(new mainContainer(data));
	}
}