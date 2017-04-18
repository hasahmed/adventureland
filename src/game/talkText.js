game.module(
	'game.talkText'
)
//.require('backGround.building')
.body(function() {

game.createClass('TalkText', 'Text', {
text: " ",
time: 40,
incVal: 0,
curStrIndex: 0,
strList: [""],
loadStrs: function() {
for (var i = 0; i < arguments.length; i++) {
this.strList.push(arguments[i]);
console.log(i);
    }
},
nextStr: function(){
if (this.curStrIndex !== this.strList.length-1) {
this.curStrIndex++;
this.incVal = 0;
    }
},
incrStr: function (str) {
if (typeof str != 'undefined') 
return str.slice(0, this.incVal++);
},
//callback: function(){
//console.log("you didnt think I'd call did you?");
//},
init: function() {
    this.scale.set(.5, .5);
    this.timer = new game.Timer(this.time);
    this.timer.pause();
    this.trigger = function() {
        this.timer.resume();
    }
}, // end init

update: function() {
if (this.timer.time() >= 0) {
    this.timer.reset();
    this.setText(this.incrStr(this.strList[this.curStrIndex]));
}
//if (this.text.length === this.str.length)this.timer.pause();//, this.callback();
}
}); // end of class
}); // end of .body
//