game.module(
	'game.houseScene'
)
//.require('backGround.building')

.require(
'game.player',
'game.assets'
)
.body(function() {

game.createScene('HouseScene', {
init: function() {
 this.world = new game.World(0,0);
 game.curScene = this.scene;
 game.insideOutside = 'inside';
//player
    game.player = new game.Player();
    game.player.position.set(game.playerProps.playerLoc.x, game.playerProps.playerLoc.y);

//houseInside
var houseInside = new game.Sprite('houseInside2.png');
    //houseInside.anchorCenter();
    houseInside.scale.set(.7,.7);
    houseInside.position.set(225, 20);

//floorBoard
var floorBoard = new game.TilingSprite('floorBoardTile.png', houseInside.width - 150, houseInside.height - 230);
    floorBoard.position.set(houseInside.x, houseInside.y + 70);
    floorBoard.addTo(this.stage);

//wallLiner
var wallLiner = new game.TilingSprite('wallLiner.png',houseInside.width - 160);
 wallLiner.position.set(houseInside.position.x+10, houseInside.position.y +70);
 
//cloudWallPaper
    var cloudWallPaper = new game.TilingSprite('cloudWallPaper.png', houseInside.width - 155, 40);
        cloudWallPaper.position.set(houseInside.x, houseInside.y + 5);
        cloudWallPaper.addTo(this.stage);
        

//wallPaper
 var wallPaper = new game.TilingSprite('fieWallPaper1.png', houseInside.width -165);
    wallPaper.position.set(wallLiner.position.x, wallLiner.position.y - wallPaper.height);
    wallPaper.addTo(this.stage);
    
//wall
    var wall0 = new game.Wall();
        wall0.body.shape.width = wallLiner.width;
        wall0.position.set(game.width/2, houseInside.y + wall0.body.shape.height/2)
        wall0.addTo(this.stage);
        
    var wall1 = new game.Wall();
        wall1.body.shape.height = houseInside.height - 250;
        wall1.body.shape.width = 50;
        wall1.position.set(houseInside.x - wall1.body.shape.width/2 + game.player.width/2, game.height/2);
        wall1.addTo(this.stage);
        console.log(game.width/2 - houseInside.width/2  + wall1.body.shape.width/2, game.height/2);
        
    var rightWall = new game.Wall();
        rightWall.body.shape.height = wall1.body.shape.height;
        rightWall.body.shape.width = 50;
        rightWall.position.set(593, game.height/2);
        console.log(houseInside.x);
        console.log(houseInside.width);
        
    var wall3 = new game.Wall();
        wall3.position.set(game.width/2 + 50, 360);
        
    var wall4 = new game.Wall();
        wall4.position.set(game.width/2 - 225, 360);

//doorTo
        game.doorToHouseOutside = new game.Door();
        game.doorToHouseOutside.addTo(this.stage);
        game.doorToHouseOutside.going = 'outside';
        game.doorToHouseOutside.doorTo.scene = 'Main';
        game.doorToHouseOutside.position.set(houseInside.x + houseInside.width *.7 /2 - houseInside.width /6, houseInside.y + houseInside.height * .7 - 10);
        game.doorToHouseOutside.setTexture('clear24x32.png');
        game.doorToHouseOutside.body.shape.width = 40;
        game.playerProps.playerLoc.set(game.doorToHouseInside.x, game.doorToHouseInside.y + 20);
        
    var dudePlacement = new game.Vector(houseInside.x + 50 + 30, houseInside.y + 50)
        
//katieFirstDude
    var npcT = new game.Sprite('katieFirstDudeTopHalf.png');
        npcT.scale.set(.5,.5);
        npcT.position.set(dudePlacement.x, dudePlacement.y + 30);
        
    this.npcB = new game.PhysicsSprite('katieFirstDudeBottomHalf.png');
        this.npcB.scale.set(.5,.5);
        this.npcB.anchor.set(28,3);
        this.npcB.body.collisionGroup = 7;
        this.npcB.body.collideAgainst.push(0);
        this.npcB.body.shape.width = 12;
        this.npcB.body.shape.height = 5;
        this.npcB.position.set(dudePlacement.x + 6, dudePlacement.y+50);
        
        this.npcB.body2 = new game.Body();
var npcInteractShape = new game.Rectangle(this.npcB.texture.width, this.npcB.texture.height * 2);
        this.npcB.body2.addShape(npcInteractShape);
        this.npcB.body2.addTo(this.world);
        this.npcB.body2.position.set(this.npcB.x, this.npcB.y);
        this.npcB.body2.collisionGroup = 1;

        
//talkText
    this.talkText = new game.TalkText();
    this.talkText.loadStrs("Hey kid", "how are things?", "Have heard any word from\n your father in the north?", "Is your mother well?","I've taken too much of your time.\n Run along before you hear this old man\n drone on for the rest of your days", "...", "...", "...", "...", "..........", "...", "Didn't you hear me say leave?", "");
    this.talkText.position.set(this.npcB.x + 20 , this.npcB.y - 25);
    //this.talkText.visible = false;
    console.log(this.talkText.strList);
    
    //this.talkText.timer.resume();
 //addTo's
 wallLiner.addTo(this.stage);
 this.npcB.addTo(this.stage);
 game.player.addTo(this.stage);
 npcT.addTo(this.stage);
 houseInside.addTo(this.stage);
 this.talkText.addTo(this.stage);


}, //end init

update: function() {
this.playerTouchingNpcB = css.hitTest(game.player.body, this.npcB.body2);
if (this.playerTouchingNpcB) this.interact = true;
else this.talkText.visible = false;
},
keydown: function(key) {
if (key === 'P') game.system.pause();
if (key === 'M') game.system.setScene('Main');
if (key === 'F') functions.dialogFunc();
if (key === 'E') if (this.interact) this.talkText.visible = true, this.talkText.nextStr(), this.talkText.trigger(), console.log("str indedx = " + this.talkText.curStrIndex), console.log("str length = " + this.talkText.strList.length);
},

logStuff: function(str) {
    console.log(str);
},

addThing: function(thing) {
    new thing;
}

}); // end of scene
}); // end of .body