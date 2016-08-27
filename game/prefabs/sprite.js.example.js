'use strict';

var SpriteNameHere = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, '<%= prefabSpriteKey %>', frame);

  // initialize your prefab here
  
};

SpriteNameHere.prototype = Object.create(Phaser.Sprite.prototype);
SpriteNameHere.prototype.constructor = SpriteNameHere;

SpriteNameHere.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = SpriteNameHere;