game.module(
	'game.safeTent'
)
.body(function() { 
    

    
        game.createClass ('SafeTent', 'PhysicsSprite', {
        texture: 'safe_tent.png',
        interactFunc: function() {
        
        },
        init: function () {
        this.super();
        //this.body.addShape(new game.Rectangle(this.width = 1, this.height= 1));
        this.body.collisionGroup = 2;
        this.body.collideAgainst.push(0);
        gridCellID = Math.floor(Math.random(0,256));
        rowID = Math.floor(gridCellID / 16 );
        columnID = gridCellID % 16;
        this.x = rowID * 32 + 80;
        this.y = columnID * 32 + 80;
        this.addTo(background);
            
                                },
            
                collide: function(otherBody) {
                if (otherBody.collisionGroup === 0) console.log("You're touching a safe tent");
        if (otherBody.collisionGroup === 2) {
        otherBody.position.set (this.x = rowID * 32 + 80, this.y = columnID * 32 + 80)
        }
        } 

}); // end safeTent Class
    
});