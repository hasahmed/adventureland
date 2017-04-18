game.module(
	'game.cardamom'
)
.require('game.spice')
.body(function() {

// @ Cardamom
// @ Class
// @ Child Of Spice
game.createClass('Cardamom', 'Spice', {
spiceKind: "Cardamom",
props: {kind: 'Cardamom', type: 'Spice'},
init: function() {
this.super();
//console.log("hello Cardamom"); 
}
});
});
