'use strict';

function Boot() {}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/image/ui/preloader.gif');

    this.isReadytoPreload = false;

    this.setUpScaling();

  },
  create: function() {

    this.game.savedName = "GameName v0.01a";

    if (this.checkLocalStorageSupport() === true) {
      this.game.canSave = true;
    } else {
      this.game.canSave = false;
    }

        this.game.canSave = false; //toggle for debugging
    this.loadProgress();
    this.loadGlobal();

    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  },

  setUpScaling: function() {

    if (this.game.device.cocoonJS) {
      //CocoonJS APP onMobile

      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.scale.windowConstraints.bottom = "visual";

    } else {
      //Web Desktop
      if (this.game.device.desktop) {

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.windowConstraints.bottom = "visual";

      } else {
        //Web Mobile
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.windowConstraints.bottom = "visual";

      }
    }

    this.game.world.setBounds(0, 0, this.game.width, this.game.height);
  },

  checkLocalStorageSupport: function() {
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }

  },

  loadProgress: function() {

    if (this.game.canSave) {
      var savedData = this.game.store.get(this.game.savedName);
      if (savedData !== null) {
        this.game.saved = savedData;

      } else this.initProgress();
    } else this.initProgress();

  },

  initProgress: function() {
    this.game.saved = {
      playerId: Math.floor((Math.random() * 10000000) + 1),
      score: 0,
      bestScore: 0,
      option: { vibrate: true, fullscreen: false, isSoundOn: true, isBgmOn: false }
    };

  },

  loadGlobal: function() {
    this.game.global = {
      clickURL: "https://www.google.com",
      currentItemNum: 0,
      isDebugging: false
    };
  }
};

module.exports = Boot;
