game.module(
	'game.playerTemp'
)
.body(function() {
    
game.createClass ('playerTemp', 'PhysicsSprite', {
texture: null,
currentAnimPlaying: function(anim) {
if (animation.currentAnim === anim && animation.playing)
return true;
else return false;
},
walkSpeed: 100,
dSpeed: 75,
//walkSet: 

//init
init: function () {
this.super();
this.body.collideAgainst.push(1,2,3);
//var animSpeed = 7;
//var dAnimSpeed = animSpeed - 1.5;
//ssheet = new game.SpriteSheet('eightWaySS.png', 32, 32); 
//animation = ssheet.anim();
//animation.position = this.x, this.y;
//animation.addAnim("walkUp",[18,19,20,19], {speed: animSpeed});
//animation.addAnim ("walkRight",[12,13,14,13], {speed: animSpeed});
//animation.addAnim ("walkDown",[0,1,2,1], {speed: animSpeed});
//animation.addAnim ("walkLeft",[6,7,8,7], {speed: animSpeed});
//animation.addAnim("walkLeftDown", [24,25,26,25], {speed: dAnimSpeed});
//animation.addTo(game.scene.stage);
//animation.addAnim("walkRightDown", [30,31,32,31], {speed: dAnimSpeed});
//animation.addAnim("walkLeftUp",  [36,37,38,37], {speed: dAnimSpeed});
//animation.addAnim("walkRightUp", [42,43,44,43], {speed: dAnimSpeed});

},

//collide
    collide: function(otherBody) {
//    if(otherBody.collisionGroup === 1){
//    overlappingItem = true;
//    interactText.visible = true;
//    itemInfoText.position.set(otherBody.owner.x, otherBody.owner.y - 20);
//    itemInfoText.visible = true;
//    otherBodyOwner = otherBody.owner;
//}
//   otherBody.owner.interactFunc(); 
                        },
//update
    update: function() {

        wDown = game.keyboard.down('W');
        aDown = game.keyboard.down('A');
        sDown = game.keyboard.down('S');
        dDown = game.keyboard.down('D'); 
        
//        console.log("wDown =" + wDown);
//        console.log("aDown =" + aDown);
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

//key
//        switch (this.key.down) {
//            case 'WA':
//             //player.body.velocity.set(-dSpeed, -dSpeed);
//             player.x += -this.dSpeed * game.delta;
//             player.y += -this.dSpeed * game.delta;
//             if (!this.currentAnimPlaying("walkLeftUp"))
//             animation.play("walkLeftUp");
//             break;
//             
//            case 'WD':
//              //player.body.velocity.set(dSpeed, -dSpeed);
//             player.x += this.dSpeed * game.delta;
//             player.y += -this.dSpeed * game.delta;
//              if (!this.currentAnimPlaying("walkRightUp"))
//              animation.play("walkRightUp");
//              break;
//              
//            case 'SD':
//             //player.body.velocity.set(dSpeed, dSpeed);
//             player.x += this.dSpeed * game.delta;
//             player.y += this.dSpeed * game.delta;
//             if (!this.currentAnimPlaying("walkRightDown"))
//             animation.play("walkRightDown");
//             break;
//             
//            case 'SA':
//            // player.body.velocity.set(-dSpeed, dSpeed);
//            player.x += -this.dSpeed * game.delta;
//            player.y += this.dSpeed * game.delta;
//             if (!this.currentAnimPlaying("walkLeftDown"))
//             animation.play("walkLeftDown");
//             break;
//             
//            case 'W':
//             //player.body.velocity.set(0, -walkSpeed);
//             player.y += -this.walkSpeed * game.delta;
//             if (!this.currentAnimPlaying("walkUp"))
//             animation.play("walkUp");
//             break;
//             
//            case 'A':
//             //player.body.velocity.set(-walkSpeed, 0);
//             player.x += - this.walkSpeed * game.delta;
//             if (!this.currentAnimPlaying("walkLeft"))
//             animation.play("walkLeft");
//             break;
//             
//            case 'S':
//             //player.body.velocity.set(0, walkSpeed);
//             player.y += this.walkSpeed * game.delta;
//             if (!this.currentAnimPlaying("walkDown"))
//             animation.play("walkDown");
//             break;
//             
//            case 'D':
//             //player.body.velocity.set(walkSpeed, 0);
//             player.x += this.walkSpeed * game.delta;
//             if (!this.currentAnimPlaying("walkRight"))
//             animation.play("walkRight");
//             break;
//            default:
//             player.body.velocity.set(0,0);
//             animation.stop(1);
//            
//        }
//
//                    walkSpeed = 70;
//                    dSpeed = 65;

                     } // end update
                     
                }); // end player create class
});