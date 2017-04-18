game.module(
	'game.background.brickWallBottom'
)
//.require('game.player')
.body(function() {

game.createClass('BrickWallbottom', 'Sprite', {
texture: 'brickWallBottom.png',
init: function() {
this.anchorCenter();
this.body = new game.Body();
this.rect = new game.Rectangle(this.width, this.height - 55, this.x, this.y);
this.body.addShape(this.rect);

this.body.collisionGroup = 6;
this.body.collideAgainst.push(0);
this.body.addTo(game.scene.world);
},
collide: function() {
}

}); // end of class
}); // end of .body