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

/*Skins and Styles*/
var appSkin = new Skin ({fill: '#ddd'});
var buttonSkin = new Skin ({fill: 'green'});
var skyBlueSkin = new Skin ({fill: '#add8e6'});
var whiteSkin = new Skin ({fill: 'white'});

var buttonStyle = new Style ({font: 'bold 22px', color: 'white'});
var titleStyle = new Style({font: 'bold 30px', color: 'black'});


/* Main screen layout */
var MainContainer = Column.template(function($) { return {
	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
	contents: [
	         Label($, {left: 0, right: 0, height: 40, skin: skyBlueSkin, style: titleStyle,
	        	 behavior: Behavior({
	        		updateTitle: function(container, string) {
	        			container.string = string;
	        		} 
	        	 })
        	 }),
	         Picture($, {left: 0, right: 0, top: 5, bottom: 5, height: application.height - 80, skin: appSkin,         	 
	        	 behavior: Behavior({
	        		 updatePicture: function(container, url) {
	        			 container.url = url;
	        		 }
	        	 })
        	 }),
	         Container($, {left: 0, right: 0, height: 40, skin: whiteSkin,
	        	 contents: [ 
	            	Line($, {left: 0, right: 0, contents: [
		            	new ButtonTemplate({buttonText: 'A', url: 'http://imgs.xkcd.com/comics/back_seat.png'}),
		            	new ButtonTemplate({buttonText: 'B', url: 'http://imgs.xkcd.com/comics/board_game.png' }),
		            	new ButtonTemplate({buttonText: 'C', url: 'http://imgs.xkcd.com/comics/90s_kid.png'}),
	            	]
	            	})
	            ]
	         }),
    ]
}});

/* Template for buttons */
var ButtonTemplate = Label.template(function($) { return {
	left: 10, width: (application.width / 3) - 10 , height: 30, skin: buttonSkin, style: buttonStyle, active: true,
	string: $.buttonText,
	behavior: Behavior({
		onTouchEnded: function(container, id, x, y, ticks) {
			application.distribute('updateTitle', $.buttonText);
			application.distribute('updatePicture', $.url);
		}
	})
}})


/* Application definition */
application.behavior = {
	onLaunch: function() { 
		application.add(new MainContainer({}));
	}
}