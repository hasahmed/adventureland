game.module(
	'game.inventory'
)
.require(
'game.assets'
)
.body(function() {

game.inventory = new game.Container();
    game.inventory.rect = new game.Graphics();
    game.inventory.rect.alpha = 0.7;
    game.inventory.rect.fillColor = '#4c4c4c';
    game.inventory.rect.drawRect(0,0, 300, 200);
    game.inventory.rect.position.set(game.config.system.width/2, game.config.system.height/2);
    game.inventory.rect.addTo(game.inventory);
    game.inventory.rect.anchorCenter();
    game.inventory.rect.cache = true;
 //game.inventory.rect.cacheAsBitmap = true;
 
//INVENTORY
//var newSprite = new game.Sprite('spice.png');
//    newSprite.addTo(game.inventory);
//    
//    var text = new game.Text("hello");
//        text.addTo(game.inventory);
//    
//var INVENTORY = new game.Text("INVENTORY:");
//    INVENTORY.addTo(game.inventory);
//    INVENTORY.position.set(100,100);
//    INVENTORY.anchorCenter();
game.inventory.visible = false;
});