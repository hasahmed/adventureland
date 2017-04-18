game.module(
	'game.inventory'
)
.body(function() { 
game.createClass('Inventory', 'Sprite', {
texture: 'clear24x32.png',
array: [""],
iv: "notShowing",
rect: null,
//plcX, plcY: the placement of the drawn rect, and the "INVENTORY" text written on it

//iPressed
iPressed: function(){
    switch (this.iv) {
        case "notShowing":
            INVENTORY.visible = true;
            this.rect.visible = true;
            this.visible = true;
            iv = "showing";
            break;
        case "showing":
            this.visible = false;
            this.rect.visible = false;
            INVENTORY.visible = false;
            break;
    }
},
interactFunc: function() {
arrayText.setText(this.array);
console.log(arrayText);
},

//init function
 init: function(){
 //this.x = game.player.x;
 //this.y = game.player.y;
 this.anchorCenter();
//rect
 this.rect = new game.Graphics();
 this.rect.alpha = 0.7;
 this.rect.fillColor = '#4c4c4c';
 
 this.rect.addTo(this);
 this.rect.drawRect(game.config.system.width,
 // /2 +150, 
 game.config.system.height, 300, 200);
 this.rect.anchorCenter();
 this.rect.cache = true;
 //rect.cacheAsBitmap = true;
 
//INVENTORY
 INVENTORY = new game.Text("INVENTORY:");
 INVENTORY.addTo(this);
 INVENTORY.position.set(game.config.system.width /2 - 60, game.config.system.height /2 - 80);
 INVENTORY.anchorCenter();
 
// this
this.visible = false;
this.addTo(game.scene.stage);
},

update: function() {
//console.log(this.anchor);
//console.log(this.rect.anchor);

}

});
});