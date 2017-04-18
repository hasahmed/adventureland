game.module(
	'game.playerprops'
)
//.require('backGround.building')
.body(function() {
game.playerProps = {
playerLoc: new game.Vector(),
interact: false
}
}); // end of .body