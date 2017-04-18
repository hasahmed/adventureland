game.module(
	'game.door'
)
//.require('game.playerprops')
.body(function() {

game.createClass('Door', 'PhysicsSprite', {
texture: '8bitDoor.png',
doorTo: {scene: null, going: 'outside', comeBack: null, comp: null},
going: null,
otherDoorLoc: null,
init: function(){
this.super();
this.body.collisionGroup = 8;
this.body.collideAgainst.push(0);
this.body.shape.height = 3;
this.body.shape.width = 3;
this.onHit = function() {
    if (this.going === 'inside') {
    //code
        console.log("inside");
        }
    if (this.going === 'outside') {
    //code
    console.log("outside");
    }
}

}, // end of init

collide: function(otherBody) {
if (otherBody.collisionGroup === 0) {
    this.onHit();
    game.system.setScene(this.doorTo.scene);
}
}
}); // end of class
}); // end of .bodya