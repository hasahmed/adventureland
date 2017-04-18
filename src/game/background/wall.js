game.module(
	'game.background.wall'
)
//.require('backGround.building')
.body(function() {

game.createClass('Wall', 'PhysicsSprite', {
texture: 'clear24x32.png',
init: function(){
this.super();
this.body.shape = new game.Rectangle(200, 50, 0,0);
this.body.addTo(game.scene.world);
this.body.collisionGroup = 7;
//console.log(this.position.x);
},
}); // end of class
}); // end of .body