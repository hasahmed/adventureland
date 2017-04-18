//In the name of Allah.
game.module(
	'game.main'
)
.require(
'engine.debug',
'game.player',
'game.playerprops',
'game.spice',
'game.assets',  
'game.safeTent', 
'game.inventory', 
'game.cardamom',
'game.playerTemp',
//'game.player2',
'game.background.brickHouse',
'game.background.brickWallBottom',
'game.background.brickWallTop',
'game.background.wall',
'game.houseScene',
'game.door',
'game.talkText',
'game.functions'
//'game.testThing'
)
.body(function() {
safeTentSpawn = 1;
otherBodyOwner = null;
//ePressed = false;

game.createScene('Main', {
	init: function() {
    game.curScene = this.scene;
    this.world = new game.World();
    this.world.gravity.set(0,0);
    game.insideOutside = 'outside';
    game.sceneInfo = {name: 'Main', setting: 'outside'};
    this.logger = function() {
    var val = 1;
    console.log(val);
    }
    
    talkText = new game.TalkText();
    talkText.addTo(this.stage);
    
        
       // game.audio.playMusic('benLevelOne.wav', true);
        var layout = new game.Container();
        layout.addTo(game.scene.stage);
        layout.parent = game.scene.stage;

    //background
    // added to layout
        background = new game.Container();
        background.addTo(layout);
        
    //topBackground
        topBackground = new game.Container();
        topBackground.addTo(layout);
        
    //foreground
    // added to layoutm
        foreground = new game.Container();
        foreground.addTo(layout);
        
    //topMost
        topMost = new game.Container();
        topMost.addTo(layout);
        
        grass = new game.TilingSprite('grass.png', 10000, 10000);
        grass.x = -1000;
        grass.y = -1000;
        grass.addTo(background);
//house
        houseTop = new game.Sprite('houseTop1.png');
        houseBottom = new game.Sprite('houseBottom.jpg');
        functions.placeSplitSprites(houseTop, houseBottom, 100, 100);
        houseTop.addTo(layout);
        houseBottom.addTo(background);
        
//house wall
        functions.wallPlacer(houseBottom);
        
//        var INVENTORY = new game.Text("INVENTORY:");
//    INVENTORY.addTo(game.scene.stage);
//    INVENTORY.position.set(100,100);
//    INVENTORY.anchorCenter();
        
    //fieWallPaper
   
        //bg = new game.Sprite('blueOrb.png');
        //bg.scale.set(2,2);
        //bg.addTo(background);
		//sprite = new game.Sprite('blueOrb.png');
        //sprite.scale.set(.2, .2);
		//sprite.addTo(foreground);

// itemInfoText
        itemInfoText = new game.Text("", {font: 'Noto Sans' });
        itemInfoText.scale.set(.5);
// pauseScreen
        pauseScreen = new game.Sprite('paused.png');
        pauseScreen.visible = false;
        
//interactText
        interactText = new game.Text("", {font: 'Noto Sans'});
        interactText.visible = false;
        interactText.position.set(10, game.system.height - 20);
        interactText.scale.set(0.5);
        
//rect

        //rect.visible = !true;
        
//brickWallBottom
        brickWallBottom = new game.BrickWallbottom();
        brickWallBottom.addTo(background);
        brickWallBottom.position.set(450, 150);
        brickWallBottom.body.position.set(-450, -1550);
//        wall = new game.Wall();
//        wall.position.set(450,155);
        functions.wallPlacer(brickWallBottom, true, 0, -28);
//        wall = new game.Wall();
//        wall.position.set(450,150);

//player
        //splayer = new game.Player2();
        game.player = new game.Player();
        game.player.addTo(foreground);
        game.player.position.set(game.playerProps.playerLoc.x, game.playerProps.playerLoc.y);
        //console.log(game.playerProps.playerLoc);
            //console.log(game.playerLoc);
//        pb = new game.Body();
//        pb.addShape(player.width, player.height);
//        //pb.addTo(this.world);
//        pb.position.set(100, 100);
        //pb.visible = true;


//brickWallTop
        brickWallTop = new game.BrickWallTop();
        brickWallTop.addTo(layout);
        brickWallTop.position.set(brickWallBottom.position.x, brickWallBottom.position.y -45);
        
//door to houseInside
        game.doorToHouseInside = new game.Door();
        game.doorToHouseInside.addTo(background);
        game.doorToHouseInside.setTexture('clear24x32.png');
        game.doorToHouseInside.doorTo.scene = 'HouseScene';
        //game.doorToHouseInside.doorLoc.set()
        game.doorToHouseInside.position.set(houseBottom.x + 35, (houseBottom.y + houseBottom.height) - (game.player.height - 3));
        game.doorToHouseInside.going = 'inside';
     game.playerProps.playerLoc.set(310, 365);
        
//camera
    var camera = new game.Camera();
        camera.addTo(layout);
        camera.setPosition(game.player.x, game.player.y);
        camera.setTarget(game.player);
        camera.acceleration = 20;
        camera.sensorWidth = .1;
        camera.sensorHeight = .1;


//cardamom
        this.cardamom = new game.Cardamom();
        this.cardamom.addTo(background);
        itemInfoText.setText(this.cardamom.spiceKind);
        
//safeTent
        for (i = 0; i < safeTentSpawn; i++) {
        new game.SafeTent();
        }
        
//itemInfoText
        itemInfoText.addTo(game.scene.stage);
        interactText.addTo(game.scene.stage);

//rect
        //rect.addTo(game.scene.stage);

//inventory
        //inventory = new game.Inventory();
        game.inventory.addTo(game.scene.stage);
        
//css (collisionSolver)
        css = new game.CollisionSolver();
        overlappingItem = false;
        gamePaused = 0;
        pauseScreen.addTo(game.scene.stage);
        
        overlap = function(obj1, obj2) {
            if (css.hitTest(obj1.body, obj2.body)) return true;
            else return false;
        }
    },  // end main init funciton 
    

//update
   update: function() {
   if (css.hitTest(game.player.body, this.cardamom.body) === false) {
   interactText.visible = false;
   itemInfoText.visible = false;
   overlappingItem = false;
   }
   
},
    
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!KEYDOWN
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!KEYDOWN
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!KEYDOWN
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!KEYDOWN
            
        
        keydown: function (key) {
            var pauseGameFunc = function (gmPsd){
                if (gmPsd === 0) {
                pauseScreen.visible = true;
                return game.system.pause();
                }
            else {
            pauseScreen.visible = false;
            return game.system.resume();
            }
        }
        var funky = function(param) {
	switch (param) {
		case 0:
			pauseGameFunc(gamePaused);
			gamePaused = 1;
            //pauseScreen.visible = true;
        	//game.system.pause();
        	console.log("gamePaused");
        break;
        case 1:
        pauseGameFunc(gamePaused);
        	gamePaused = 0;
            //pauseScreen.visible = false;
        	//game.system.resume();
        	console.log("gameNotPaused");
        	break;
        	default:
        	game.system.resume();
        	console.log("default");
	}
}
//            if (!inventory.rect.visible) {
//            }
//P pressed
    if (key === 'P') funky(gamePaused);
//M pressed
    if(key === 'M') {
        game.audio.toggleMusic();
        game.system.setScene('HouseScene');
        //if(game.audio.isMusicPlaying()) game.audio.muteMusic();
        //else game.audio.resumeMusic();
        //console.log(game.audio.isMusicPlaying());
    } 
    
    if (key === 'B') {
        //code
    } // end key B
        
//E pressed
    if (key === 'E') {
        if (gamePaused !=1) {
            if (overlappingItem === true) {
            ePressed = true;
            otherBodyOwner.body.remove();
            otherBodyOwner.interactFunc();
            }
        }
    }
    
    if (key === 'V') functions.inventory.addTo(this.cardamom);

// I pressed
//    if (key === 'I') {
//        if (inventory.iv === "notShowing") {
//        inventory.iPressed();
//        inventory.iv = "showing";
//        }
//        else if (inventory.iv === "showing") {
//        inventory.iPressed();
//        inventory.iv = "notShowing";
//        }
//    }
    
    if (key === 'Q') console.log(game.player.position);
                             
}, // end keydown function

//keyup 
    keyup: function(key) {
    }// end keyUp function
    
    
}); //end main init funtion
    
    game.createClass('BG', 'TilingSprite',
                     {
        
        texture: 'top_edge.png',
            init: function() {
                //this.super();
                //var topEdge = new game.TilingSprite('top_edge.png', 0, 128);
                this.addTo(game.scene.stage);
                this.position.set(128, 0);
                //topEdge.position.set(304, 304);
                //topEdge.addTo(game.scene.stage);
                this.anchorCenter;
            },
            /*
        topEdge.addTo(game.scene.stage);
        topEdge.position.set(128,0);
        
        bottomEdge = new game.TilingSprite('bottom_edge.png',384);
        bottomEdge.addTo(game.scene.stage);
        bottomEdge.position.set(128,512);
        
        leftEdge = new game.TilingSprite ('left_edge.png',0,384);
        leftEdge.addTo(game.scene.stage);
        leftEdge.position.set(0,128);
        
        rightEdge = new game.TilingSprite('right_edge.png',0,384);
        rightEdge.addTo(game.scene.stage);
        rightEdge.position.set(512,128);
        
        topLeftCorner = new game.Sprite ('top_left_corner.png');
        topLeftCorner.addTo(game.scene.stage);
        topLeftCorner.position.set(0,0);
        
        topRightCorner = new game.Sprite ('top_right_corner.png');
        topRightCorner.addTo(game.scene.stage);
        topRightCorner.position.set(512,0);
        
        bottomLeftCorner = new game.Sprite ('bottom_left_corner.png');
        bottomLeftCorner.addTo(game.scene.stage);
        bottomLeftCorner.position.set(0,512);
        
        bottomRightCorner = new game.Sprite ('bottom_right_corner.png');
        bottomRightCorner.addTo(game.scene.stage);
        bottomRightCorner.position.set(512,512);

        sand = new game.TilingSprite('sand128.png',384,384);
        sand.addTo(game.scene.stage);
        sand.position.set(128,128);
        
        grid = new game.TilingSprite ('grid_square.png',512,512);
        grid.addTo(game.scene.stage);
        grid.position.set(64,64);
            */
        });

});  //.body function end
     
