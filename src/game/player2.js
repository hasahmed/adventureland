game.module(
	'game.player2'
)
.require('game.playerTemp')
.body(function() {


game.createClass('Player2', 'playerTemp', {
    texture: 'katieFirstDude.png',
    init: function() {
        this.super();
        this.anchorCenter();
        this.scale.set(.5,.5);
    },
    update:function() {
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
        }
        console.log(this.key.down);
         switch (this.key.down) {
            case 'WA':
             //player.body.velocity.set(-dSpeed, -dSpeed);
             this.x += -this.dSpeed * game.delta;
             this.y += -this.dSpeed * game.delta;
             break;
             
            case 'WD':
              //player.body.velocity.set(dSpeed, -dSpeed);
             this.x += this.dSpeed * game.delta;
             this.y += -this.dSpeed * game.delta;
              break;
              
            case 'SD':
             //player.body.velocity.set(dSpeed, dSpeed);
             this.x += this.dSpeed * game.delta;
             this.y += this.dSpeed * game.delta;
             break;
             
            case 'SA':
            // player.body.velocity.set(-dSpeed, dSpeed);
            this.x += -this.dSpeed * game.delta;
            this.y += this.dSpeed * game.delta;
             break;
             
            case 'W':
             //player.body.velocity.set(0, -walkSpeed);
             this.y += -this.walkSpeed * game.delta;
             break;
             
            case 'A':
             //player.body.velocity.set(-walkSpeed, 0);
             this.x += - this.walkSpeed * game.delta;
             break;
             
            case 'S':
             //player.body.velocity.set(0, walkSpeed);
             this.y += this.walkSpeed * game.delta;
             break;
             
            case 'D':
             //player.body.velocity.set(walkSpeed, 0);
             this.x += this.walkSpeed * game.delta;
             break;
            default:
             this.x += 0;
             this.y += 0;
            
        }
        
    }
})



});