'use strict';

function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    this.input.onDown.addOnce(this.actionOnClick, this);

    this.title_bg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'title_bg');
    this.title_bg.anchor.setTo(0.5, 0.5);
    if (this.game.world.height > this.title_bg.height) this.title_bg.height = this.game.world.height;

    this.game.add.tween(this.title_bg).from({ alpha: 0 }, 1200, null, true);

    this.mantra = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mantra');
    this.mantra.anchor.setTo(0.5, 0.5);
    this.mantra.scale.setTo(1.5, 1.5);
    this.mantra.alpha = 0.6;
    this.game.add.tween(this.mantra.scale).from({ x: 0.34, y: 0.34 }, 5000, Phaser.Easing.Cubic.Out, true);
    this.game.add.tween(this.mantra).to({ angle: 359.9 }, 80000, null, true, 0, -1);


    this.title = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 90, 'title');
    this.title.anchor.setTo(0.5, 0.5);

  },
  actionOnClick: function() {

    if (navigator.vibrate) navigator.vibrate(500);

    this.title.destroy();
    this.title_bg.destroy();
    this.mantra.destroy();

    this.game.state.start('play');

  },

  update: function() {


  },
  shutdown: function() {

  }
};


module.exports = Menu;
