'use strict';

var Klord = function(game, skin, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, skin, frame);

  this.anchor.setTo(0.5,1);

  this.game.add.existing(this);


//item related

//
  this.animations.add('run', [6,7,8,9,10,11]);
  this.animations.add('hurt', [12,12,12,12,12,13,14,15,14,15,15,16,17]);
  this.animations.add('win', [42,43,44,45]);
  this.animations.add('die', [12,12,12,12,12,13,14,15,14,15]);
  this.animations.add('break', [48]);

  this.animations.play('run', 15, true);

};

Klord.prototype = Object.create(Phaser.Sprite.prototype);
Klord.prototype.constructor = Klord;

Klord.prototype.update = function() {
    
};


module.exports = Klord;
