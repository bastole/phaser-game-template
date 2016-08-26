'use strict';

var gameStarted;    //Resize Trigger
var screenfull;


window.onload = function(){

  initGame();

}

//global variables
function initGame(){

  //Vibration
  navigator.vibrate = navigator.vibrate ||
                    navigator.webkitVibrate ||
                    navigator.mozVibrate || 
                    navigator.msVibrate;

  //Screen Full
  screenfull = require('./screenfull.min');

  //Resize Trigger
  gameStarted = false;

  displayOnResize();

  window.addEventListener("resize", function() {
      displayOnResize();
  }, false);

};
function consoleLog(msg){
  console.log(msg);
};

function displayOnResize(){
    if(window.innerWidth > window.innerHeight){
        document.getElementById('orientation').style.display = 'none';
        if(!gameStarted) { gameStarted = true; startWebGame(); }
    }

    else{
        document.getElementById('orientation').style.display = 'block';
    }
};

function startWebGame(){

    if(screenfull.enabled){ 
        consoleLog("fullscreen supported.");
        var w = screen.width,
            h = screen.height;

    }
    else {
        consoleLog("fullscreen NOT supported.");
        var w = window.innerWidth,
            h = window.innerHeight;
    }

    var width = (h > w) ? h : w,
        height = (h > w) ? w : h;


    if(width/height == 16/9){ width=960; height=540;}
    else { height= Math.round(960*height/width); width=960;}

    consoleLog("final width: "+width+" final height: "+height);

    runPhaser(width,height);

};

function runPhaser (width, height) {

  var game = new Phaser.Game(width,height, Phaser.AUTO, 'gamename');

  // Game Save
  game.store = require('./store.min');
  game.screenfull = screenfull;

  game.removeAsset = function(){
    var args = arguments;
    for(var i=0; i<args.length; i++){
        game.cache.removeImage(args[i]);
        consoleLog(args[i]+" removed... ");
    }
  };

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('fullscreener', require('./states/fullscreener'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  
  game.state.start('boot');
};

