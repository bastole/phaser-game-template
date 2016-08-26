'use strict';
//
var Klord = require('../prefabs/klord');
//

function Play() {}
Play.prototype = {
  preload: function() {

  },
  create: function() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.debug.font = '10px Courier';
    this.game.time.advancedTiming = true;

    this.klord = new Klord(this.game, 'klord', -200, this.game.height - 120);
    this.game.add.tween(this.klord).to({ x: Math.round(this.game.width + 200) }, 3200, null, true, 1000,-1,true);
    this.klord.inputEnabled = true;
    this.klord.events.onInputDown.add(function(){
      this.game.state.start('gameover');
    }, this);

  },
  update: function() {

  },
  render: function() {

  },
  shutdown: function() {

  }
};

module.exports = Play;
