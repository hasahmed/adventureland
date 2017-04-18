game.module(
	'game.testThing'
)
//.require('backGround.building')
.body(function() {

game.createClass('TestThing', 'Spice', {
texture: 'spice.png',
init: function() {
this.addTo(this.stage);
this.position.set(100,100);
}

}); // end of class
}); // end of .body