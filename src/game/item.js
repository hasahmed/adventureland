game.module(
	'game.item'
)
.body(function() {

// @Item Class
// @ Child Of PhysicsSprite
game.createClass('Item', 'PhysicsSprite', {
texture: null,
itemKind: null,
itemKeyInteract: false,
interactFunc: function() {
// what happens when interaction happens
}
init: function() {
this.super();
}




});
});