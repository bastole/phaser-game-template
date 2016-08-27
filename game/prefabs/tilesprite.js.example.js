'use strict';

var TileSpriteNameHere = function(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, '<%= prefabSpriteKey %>');

  // initialize your prefab here
  
};

TileSpriteNameHere.prototype = Object.create(Phaser.TileSprite.prototype);
TileSpriteNameHere.prototype.constructor = TileSpriteNameHere;

TileSpriteNameHere.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = TileSpriteNameHere;