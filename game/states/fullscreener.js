
'use strict';
function Fullscreener() {}

Fullscreener.prototype = {
  preload: function() {

  },
  create: function() {


    this.mantra = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mantra');
    this.mantra.anchor.setTo(0.5, 0.5);
    var mantraScale = 0.34;
    this.mantra.scale.setTo(mantraScale,mantraScale);


    this.fullscreenbtn = this.game.add.button(this.game.world.centerX, Math.round(this.game.world.centerY+150),'fullscreenbtn', this.actionOnClick, this, 0,0,1,0);
    this.fullscreenbtn.anchor.setTo(0.5,0.5);

  },

  update: function() {

  },
  actionOnClick: function() {

    //fullscreen
    
    if (this.game.screenfull.enabled && this.game.saved.option.fullscreen && !this.game.device.cocoonJS) {
        var elem = document.getElementById('wrapper');
        //var elem = document.getElementsByTagName('canvas')[0];
        this.game.screenfull.request(elem);
    }
    
    this.game.state.start('menu');

  },
  shutdown: function() {
    //


    this.mantra.destroy();
    this.fullscreenbtn.destroy();

  }

};


module.exports = Fullscreener;
