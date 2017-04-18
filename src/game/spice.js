game.module(
    'game.spice'
)
.body(function() {

    
           
        
        game.createClass ('Spice', 'PhysicsSprite', {
        texture: 'spice.png',
        spiceKind: null,
        spiceKeyInteract: false,
        props: {kind: null, type: 'Spice', texture: 'spice.png'},
        interactFunc: function() {
        if (ePressed) {
        itemInfoText.visible = false;
        inventory.array.unshift(otherBodyOwner.spiceKind + ": Spice");
        inventory.interactFunc();
        console.log(inventory.array[0]);
        otherBodyOwner.position.set(otherBodyOwner.x + 200, otherBodyOwner.y + 200);
        otherBodyOwner.body.remove();
        console.log(ePressed);
        }
        },
        init: function () {
        this.super(); 
        this.body.collisionGroup = 1;
        this.body.collideAgainst.push(0);
        this.x = 250;
        this.y = 250;
//        this.body.addShape(new game.Rectangle(this.width = 15, this.height = 15));
        //this.addTo(game.scene.stage);
            
                                }, 
            
        collide: function(otherBody) {
        if (otherBody.collisionGroup === 0) console.log("yourHittingCardamom");
//        if (otherBody.collisionGroup === 1) {
//        otherBody.position.set (this.x = rowID * 32 + 80, this.y = columnID * 32 + 80)
//            
//            
//            
//            }
        },
        
      update: function () {
        
        },
}); // end Spice Class
});