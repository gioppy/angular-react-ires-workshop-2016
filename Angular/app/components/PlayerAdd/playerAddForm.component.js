(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('playerAddForm', {
      templateUrl: 'app/components/PlayerAdd/playerAddForm.tpl.html',
      bindings: {
        newPlayer: '<'
      },
      controller: PlayerAddFormController
    });

  PlayerAddFormController.$inject = ['FirebaseService'];

  function PlayerAddFormController(fs){
    var p = document.querySelectorAll('#player-add');
    var s = document.querySelectorAll('#scores');
    this.player;

    this.handlePlayerDiscard = function(){
      this.player = '';
      angular.element(p).removeClass('fadeInDown').addClass('fadeOutUp');
      angular.element(s).removeClass('zoomOut').addClass('zoomIn');
    };

    this.submitNewPlayer = function(){
      if(this.player && this.player.length > 0){
        this.newPlayer.name = this.player;
        this.player = '';

        var ref = fs.ref();
        ref.$add(this.newPlayer);

        angular.element(p).removeClass('fadeInDown').addClass('fadeOutUp');
        angular.element(s).removeClass('zoomOut').addClass('zoomIn');
      }
    };
  }
})();