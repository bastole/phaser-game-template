'use strict';

function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {

    this.asset = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);


    //character
    this.load.spritesheet('klord', 'assets/image/character/klord_v2.png', 220, 220, 90);

    //title
    this.load.image('mantra', 'assets/image/ui/mantra.png');

    this.load.image('title', 'assets/image/ui/title.png');
    this.load.image('title_bg', 'assets/image/ui/title_bg2.png');

    //ui
    this.load.spritesheet('fullscreenbtn', 'assets/image/ui/fullscreenbtn.png', 90, 90, 2);

    //Bitmap Font
//    var fileFormat = (this.game.device.cocoonJS) ? '.json' : '.xml';
//    this.load.bitmapFont('pusab26', 'assets/font/pusab26.png', 'assets/font/pusab26' + fileFormat);

    //Sound
//    this.load.audio('smash', 'assets/sound/smash.wav');

  },
  create: function() {
    this.asset.cropEnabled = false;

  },
  update: function() {

    if(!!this.ready) {

      if (this.game.screenfull.enabled && this.game.saved.option.fullscreen && !this.game.device.cocoonJS) {

        this.game.state.start('fullscreener');
      } else {

        this.game.state.start('menu');
      }
    }
  },

  onLoadComplete: function() {
    this.ready = true;
  }

};

module.exports = Preload;
