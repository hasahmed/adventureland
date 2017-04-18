game.module(
	'game.functions'
)
//.require('backGround.building')
.body(function() {

functions = {
//dialogFunc
    //takes duration dur, a string str, and 
dialogFunc: function(){
    console.log("buttfartTacoLettuce");
},

toggleVal: function(val) {
    if(val) return val = false;
    else return val = true;
},
//placeSplitSprites
//takes 2 sprites, top and bottom, and places them such that they line up perfectly to a given x and y. (sprites must still be seperatly addd to stage);
//placeSplitSprites
//placeSplitSprites(Sprite, Sprite, Num, Num, [Bool])
//placeSplitSprites(top, bottom, x, y, center);
placeSplitSprites: function (topSprite, bottomSprite, x, y, center) {
var unequal = false;
var fatter;
 if (topSprite.width != bottomSprite.width) {
    var unequal = true;
 if (topSprite.width > bottomSprite.width) fatter = topSprite, other = bottomSprite;
 else fatter = bottomSprite, other = topSprite;
var offset = fatter.width - other.width;
    offset = offset /2;
 }
 if (!unequal) {
    topSprite.position.x = x;
    bottomSprite.position.x = x;
    }
else {
    fatter.position.x = x;
    other.position.x = x + offset;
}
    topSprite.position.y = y;
    bottomSprite.position.y = y + topSprite.texture.height;   
},
//returns whether a value is a number or not
isNumber: function(num) {
    if (isNaN(num)) return false;
    else return true;
},

//wallPlacer

//takes a sprite spr and places a wall where it needs to go. Does not add it to the world.

//spr: object
//center: [bool] optional
//adjustWidth: [Num] optional
//adjustHeight: [Num] optional

//wallPlacer(spr, cneter, adjustWidth, adjustHeight) takes a sprite and a maybe: bool, num, num, and returns a wall placed over the sprite such that it seems that the player is walking into it. 

wallPlacer: function(spr, center, adjustWidth, adjustHeight) {
 var wall = new game.Wall();
    wall.body.shape.width = spr.width;
    wall.body.shape.height = spr.texture.height - 26;
    if (center === false || typeof center === 'undefined') {
    if (this.isNumber(adjustWidth)) wall.body.shape.width = wall.body.shape.width + adjustWidth; 
    //adjustHeight
        wall.position.set(spr.x + spr.width/2, spr.y + (spr.texture.height/2) - 16);
        }
    else if (center === true) {
    wall.position.set(spr.x, spr.y);
    if (this.isNumber(adjustWidth)) wall.body.shape.width += adjustWidth;
    if (this.isNumber(adjustHeight)) wall.body.shape.height += adjustHeight;
    } 
}, //end of wall placer

doorPlacer: function(spr, scene, offsetX, offsetY){
    var door = new game.door
},

inventory: {addTo: function(obj) {
            var cont = new game.Container();
            var rect = new game.Graphics();
                rect.drawRect(0,0, 135, 30);
                rect.alpha = .5;
                rect.fillColor = '#4c4c4c';
                rect.addTo(cont);
                rect.position.set(game.inventory.rect.x, game.inventory.rect.y);
                
            var toDisplay = new game.Sprite(obj.texture);
                toDisplay.scale.set(.8,.8);
                toDisplay.addTo(cont);
                toDisplay.position.set(rect.x, rect.y);
                
            var displayText = new game.Text(obj.props.kind);
                displayText.position.set(rect.x + obj.texture.width, rect.y);
                displayText.scale.set(.7,.7);
                displayText.addTo(cont);
                
            var subText = new game.Text(obj.props.type);
                subText.scale.set(.4,.4);
                subText.position.set(displayText.x + 10, rect.y + 16);
                subText.addTo(cont);
                cont.visible = game.inventory.visible;
                cont.addTo(game.inventory);
                console.log(game.inventory.position);
                //console.log(game.inventory.width);
                console.log(game.inventory.rect.position);
                
            
            
}}, // end inventory

insert: function(str, insert, every) {
	var incVal = every;
	var start = 0;
	var end = every;
	for (var i = 0; i < str.length; i += incVal) {
		newStr = str.slice(start, end) + insert + str.slice(end);
		end += every;
		console.log(newStr);
	}
},

lineBreak: function(str, every) {
	insert(str, "\n", every);
}

} // end of functions

}); // end of .body