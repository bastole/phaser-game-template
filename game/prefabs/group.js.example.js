'use strict';

var GroupNameHere = function(game, parent) {
  Phaser.Sprite.call(this, game, parent);

  // initialize your prefab here
  
};

GroupNameHere.prototype = Object.create(Phaser.Group.prototype);
GroupNameHere.prototype.constructor = GroupNameHere;

GroupNameHere.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = GroupNameHere;