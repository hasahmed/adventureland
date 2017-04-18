game.module(
	'game.keydown'
)
.body(function() {
    
     keydown: function (key) {
        if (player.position.y > 100 
            && startScreen.visible === false 
            && gOS.visible === false 
            && tween.playing === false 
            && winScreen.visible === false 
            && key === 'UP') {
            
            
            safe = false;
            
            //player.position.y = player.position.y -32;
            //safe = false;
            animation.play("walkUp");
            tween.to({x: player.x+0, y: player.y-32}, 500);
            tween.start();
            
            tween.onCompleteCallback = function () {
                
            safe = false;
            animation.stop();
            //player.setTexture('dark_male_up.png');
            stepNum = 0;
                
            }
                
            
                if (stepNum===0) {
                    player.visible = false;
                    animation.visible = false;
                    trap.position.set (player.x,player.y-32);
                    trap.visible = true;
                    player.remove();
                    }

//            if (tween.playing === true) {
//                
//                //safe = false;
//                
//            }
        }
            

        //UPEND

                             
                          
                             
                             
        if (player.position.y < 550 
            && startScreen.visible === false 
            && gOS.visible === false 
            && tween.playing === false 
            && winScreen.visible === false 
            && key === 'DOWN') {
            
            
//            player.position.y = player.position.y +32;
            safe= false;
            //player.setTexture('clear24x32.png');
            tween.to({x: player.x+0, y: player.y+32}, 500);
            animation.visible = true;
            animation.play("walkDown");
            tween.start();
            
                    if (stepNum ==1) {
                    player.visible = false;
                    animation.visible = false;
                    trap.position.set (player.x,player.y+32);
                    trap.visible = true;
                    player.remove();
                                }
            
            if (safe === true) {
                
                safe = false;
            }
            
            tween.onCompleteCallback = function () { 
            safe = false;
            animation.stop();
            stepNum = 1;
                        }
            
}
                             
                             
                             
                             
        if (player.position.x < 550 
            && startScreen.visible === false 
            && gOS.visible === false 
            && tween.playing === false 
            && winScreen.visible === false 
            && key === 'RIGHT') {
//            player.position.x = player.position.x +32;
            //player.setTexture('dark_male_right.png');
            safe = false;
            //player.setTexture('dark_male_right.png');
            tween.to({x: player.x+32, y: player.y+0}, 500);
            animation.visible = true;
            animation.play("walkRight");
            tween.start();
           
                    if (stepNum ==2) {
                        player.visible = false;
                        animation.visible = false;
                        trap.position.set (player.x+32,player.y);
                        trap.visible = true;
                        player.remove();
                    }
            
            
            tween.onCompleteCallback = function () { 
            safe = false;
            animation.stop();
            stepNum = 2;
                
                        }
            stepNum = 2;
            
         }
                             
                             
                          // RIGHT end   
                             
                             
                             
                             
                             
                             
        if (player.position.x > 100 
            && startScreen.visible === false 
            && tween.playing === false 
            && winScreen.visible === false 
            && key === 'LEFT' 
            && gOS.visible === false) {
                safe = false;
                tween.to({x: player.x-32, y: player.y+0}, 500);
                animation.visible = true;
                animation.play("walkLeft");
                tween.start();
            
                    if (stepNum ==3) {
                        player.visible = false;
                        animation.visible = false;
                        trap.position.set (player.x-32,player.y);
                        player.remove();
                    }
            
            
            tween.onCompleteCallback = function () {    
            safe = false;
            animation.stop();
            //player.setTexture('dark_male_left.png');
            stepNum = 3;
                
                        }
            stepNum = 3;


        }
            if (key === 'ENTER' && startScreen.visible === true) {
                startScreen.visible = false;
                //storm = new game.Storm();
                
            
        }
                             
            if (key === 'ENTER' && winScreen.visible === true ||gOS.visible === true && key=== 'ENTER') {
                game.system.setScene("Main");
                //game.system.pause(false);
                }
        

                             
    }, // end keydown function

});