game.module(
	'game.background.brickWallTop'
)
//.require('backGround.building')
.body(function() {

game.createClass('BrickWallTop', 'Sprite', {
texture: 'brickWallTop.png',
init: function() {
this.anchorCenter();
},
collide: function() {
}

}); // end of class
}); // end of .body