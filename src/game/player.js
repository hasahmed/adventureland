game.module(
	'game.player'
)
.body(function() {
    
game.createClass ('Player', 'PhysicsSprite', {
texture: 'clear24x32.png',
props: {type: 'player', kind: 'Hero'},
currentAnimPlaying: function(anim) {
    if (this.animation.currentAnim === anim && this.animation.playing)
        return true;
        else return false;
},
returnDir: function(player, obj) {
    //if(player.body.x - obj.body.x) 
},
walkSpeed: 100,
dSpeed: 75,
init: function () {
this.super();
this.horObo;
this.vertObo;
this.body.collisionGroup = 0;
this.body.collideAgainst.push(2,4,5,6,7,8);
this.anchor.set(this.texture.width/2 + 5, this.texture.height/2);
var animSpeed = 7;
var dAnimSpeed = animSpeed - 1.5;
this.ssheet = new game.SpriteSheet('eightWaySS.png', 32, 32); 
this.animation = this.ssheet.anim();
this.animation.position = this.x, this.y;
this.animation.addAnim("walkUp",[18,19,20,19], {speed: animSpeed});
this.animation.addAnim ("walkRight",[12,13,14,13], {speed: animSpeed});
this.animation.addAnim ("walkDown",[0,1,2,1], {speed: animSpeed});
this.animation.addAnim ("walkLeft",[6,7,8,7], {speed: animSpeed});
this.animation.addAnim("walkLeftDown", [24,25,26,25], {speed: dAnimSpeed});
this.animation.addTo(this);
this.animation.addAnim("walkRightDown", [30,31,32,31], {speed: dAnimSpeed});
this.animation.addAnim("walkLeftUp",  [36,37,38,37], {speed: dAnimSpeed});
this.animation.addAnim("walkRightUp", [42,43,44,43], {speed: dAnimSpeed});
//this.addTo(foreground);

this.playerOverlapDir = function(obj) {
 if (typeof obj === 'undefined') return obj;
   else if (typeof obj != 'undefined') {
    var halfPlayerBodyWidth = this.body.shape.width/2;
    var halfPlayerBodyHeight = this.body.shape.height/2;
    var halfObjBodyWidth = obj.body.shape.width/2;
    var halfObjBodyHeight = obj.body.shape.height/2;
    var playerOverlappingWall = css.hitTest(this.body, obj.body);
            if (playerOverlappingWall && this.y + halfPlayerBodyHeight <= obj.body.position.y - halfObjBodyHeight +3) return 'top';
            if (playerOverlappingWall && this.y - halfPlayerBodyHeight >= obj.body.position.y + halfObjBodyHeight -3) return 'bottom';
            if (playerOverlappingWall && this.x + halfPlayerBodyWidth <= obj.body.position.x - halfObjBodyWidth + 3) return 'left';
            if (playerOverlappingWall && this.x - halfPlayerBodyWidth >= obj.body.position.x - halfObjBodyWidth -3) return 'right';
    }
  }
  
  
  this.stopPlayer = function() {
    this.x += 0;
    this.y += 0;
  }
}, //end init

//collide
/*
Collision Groups
1: Items
2:
3:
4: Buildings
5:
6:
7: Buildings
*/
    collide: function(otherBody) {
//group 1: Items?
    if(otherBody.collisionGroup === 1){
    overlappingItem = true;
    interactText.visible = true;
    itemInfoText.position.set(otherBody.owner.x, otherBody.owner.y - 20);
    itemInfoText.visible = true;
    otherBodyOwner = otherBody.owner;
}


    if(otherBody.collisionGroup === 4) {
    console.log("you're hitting a building");
    }
    if(otherBody.collisionGroup === 6) {
        console.log("x:" + eval("this.x - otherBody.position.x") + ", " + "y:" +  eval("this.y - otherBody.position.y"));
    }
    if(otherBody.collisionGroup === 7) {
    if (otherBody.owner.body.shape.height >=
        otherBody.owner.body.shape.width)
        this.vertObo = otherBody.owner;
    else this.horObo = otherBody.owner;
    }
    }, //end collide
    
//update
    update: function() {
    
        var wDown = game.keyboard.down('W');
        var aDown = game.keyboard.down('A');
        var sDown = game.keyboard.down('S');
        var dDown = game.keyboard.down('D'); 
        
        this.key = {
        get down() {
        if (wDown && aDown) return 'WA';
        if (wDown && dDown) return 'WD';
        if (sDown && dDown) return 'SD';
        if (sDown && aDown) return 'SA';
        if (wDown && !sDown) return 'W';
        if (aDown && !dDown) return 'A';
        if (sDown && !wDown) return 'S';
        if (dDown && !aDown) return 'D';

        } // end get down();
    } // end keyfunc
        switch (this.key.down) {
            case 'WA':
                if (this.playerOverlapDir(this.vertObo) === 'right') {
                    if (this.playerOverlapDir(this.horObo) === 'bottom') {
                        this.y += 0;
                        this.x += 0;
                    }
                     else this.y += -this.dSpeed * game.delta;
                }
                else if (this.playerOverlapDir(this.horObo) === 'bottom') {
                    if(this.playerOverlapDir(this.vertObo) === 'right') {
                    this.stopPlayer();
                    }
                    else this.x += -this.dSpeed * game.delta;
                }
                else if (this.playerOverlapDir(this.vertObo) === 'bottom') this.x += -this.dSpeed * game.delta;
                else if (this.playerOverlapDir(this.horObo) === 'right') this.y += -this.dSpeed * game.delta;
                else this.y += -this.dSpeed * game.delta, this.x += -this.dSpeed * game.delta;
             if (!this.currentAnimPlaying("walkLeftUp"))
             this.animation.play("walkLeftUp");
             break;
             
            case 'WD':
                if (this.playerOverlapDir(this.vertObo) === 'left') {
                    if (this.playerOverlapDir(this.horObo) === 'bottom') {
                        this.y += 0;
                        this.x += 0;
                    }
                     else this.y += -this.dSpeed * game.delta;
                }
                else if (this.playerOverlapDir(this.horObo) === 'bottom') {
                    if(this.playerOverlapDir(this.vertObo) === 'left') {
                    this.stopPlayer();
                    }
                    else this.x += this.dSpeed * game.delta;
                }
                else if (this.playerOverlapDir(this.vertObo) === 'bottom') this.x += this.dSpeed * game.delta;
                else if (this.playerOverlapDir(this.horObo) === 'left') this.y += -this.dSpeed * game.delta;
                else this.y += -this.dSpeed * game.delta, this.x += this.dSpeed * game.delta;
              if (!this.currentAnimPlaying("walkRightUp"))
              this.animation.play("walkRightUp");
              break;
              
            case 'SD':
                if (this.playerOverlapDir(this.vertObo) === 'left') {
                    if (this.playerOverlapDir(this.horObo) === 'top') {
                        this.stopPlayer();
                    }
                     else this.y += this.dSpeed * game.delta;
                }
                else if (this.playerOverlapDir(this.horObo) === 'top') {
                    if(this.playerOverlapDir(this.vertObo) === 'left') {
                    //this.stopPlayer();
                    }
                    else this.x += this.dSpeed * game.delta;
                }
                else if (this.playerOverlapDir(this.vertObo) === 'top') this.x += this.dSpeed * game.delta;
                else if (this.playerOverlapDir(this.horObo) === 'left') this.y += this.dSpeed * game.delta;
                else this.y += this.dSpeed * game.delta, this.x += this.dSpeed * game.delta;
             if (!this.currentAnimPlaying("walkRightDown"))
             this.animation.play("walkRightDown");
             break;
             
            case 'SA':
                if (this.playerOverlapDir(this.vertObo) === 'right') {
                    if (this.playerOverlapDir(this.horObo) === 'top') {
                        this.stopPlayer();
                    }
                     else this.y += this.dSpeed * game.delta;
                }
                else if (this.playerOverlapDir(this.horObo) === 'top') {
                    if(this.playerOverlapDir(this.vertObo) === 'right') {
                    this.stopPlayer();
                    }
                    else this.x += -this.dSpeed * game.delta;
                }
                else if (this.playerOverlapDir(this.vertObo) === 'top') this.x += -this.dSpeed * game.delta;
                else if (this.playerOverlapDir(this.horObo) === 'right') this.y += this.dSpeed * game.delta;
                else this.y += this.dSpeed * game.delta, this.x += -this.dSpeed * game.delta;
             if (!this.currentAnimPlaying("walkLeftDown"))
             this.animation.play("walkLeftDown");
             break;
             
            case 'W':
             if (this.playerOverlapDir(this.horObo) !== 'bottom' && this.playerOverlapDir(this.vertObo) !== 'bottom') this.y += -this.walkSpeed * game.delta;
             if (!this.currentAnimPlaying("walkUp"))
             this.animation.play("walkUp");
             break;
             
            case 'A':
             if (this.playerOverlapDir(this.vertObo) !== 'right' && this.playerOverlapDir(this.horObo) !== 'right') this.x += - this.walkSpeed * game.delta;
             if (!this.currentAnimPlaying("walkLeft"))
             this.animation.play("walkLeft");
             break;
             
            case 'S':
             //player.body.velocity.set(0, walkSpeed);
             if(this.playerOverlapDir (this.horObo) !== 'top' && this.playerOverlapDir (this.vertObo) !== 'top') this.y += this.walkSpeed * game.delta;
             if (!this.currentAnimPlaying("walkDown"))
             this.animation.play("walkDown");
             break;
             
            case 'D':
             //player.body.velocity.set(walkSpeed, 0);
             if (this.playerOverlapDir(this.vertObo) !== 'left' && this.playerOverlapDir(this.horObo) !== 'left' ) this.x += this.walkSpeed * game.delta;
             if (!this.currentAnimPlaying("walkRight"))
             this.animation.play("walkRight");
             break;
            default:
             this.x += 0;
             this.y += 0;
             this.animation.stop(1);
            
        } // end switch
        
  } // end update
                     
}); // end player create class
});
