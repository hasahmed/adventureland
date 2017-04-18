game.module(
	'game.background.building'
)
.body(function() {

game.createClass('Building', 'PhysicsSprite', {
texture: null,
interactFunc: function() {
//code
},
init: function() {
this.super();
this.body.collisionGroup = 4;
this.body.collideAgainst.push(0);
}
//collide: function(otherBody) {
//    if (otherBody.collisionGroup === 0) {
//        console.log("you are running into a building");
//    }
//}

}); // class end
}); // end .body