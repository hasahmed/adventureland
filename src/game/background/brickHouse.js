game.module(
	'game.background.brickHouse'
)
.require('game.background.building')
.body(function() {

game.createClass('BrickHouse', 'Building', {
texture: 'brickHouse.png',
init: function() {
this.super();
},
collide: function() {
this.super();
}
}); // end of class
}); // end of .body