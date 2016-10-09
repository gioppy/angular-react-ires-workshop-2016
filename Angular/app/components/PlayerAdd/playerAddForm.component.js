(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('playerAddForm', {
      templateUrl: 'app/components/PlayerAdd/playerAddForm.tpl.html',
      bindings: {
        newPlayer: '='
      },
      controller: PlayerAddFormController
    });

  PlayerAddFormController.$inject = ['FirebaseService'];

  function PlayerAddFormController(fs){
    this.player;

    this.handlePlayerDiscard = function(){
      this.player = '';
    };

    this.submitNewPlayer = function(){
      if(this.player && this.player.length > 0){
        this.newPlayer.name = this.player;
        this.player = '';

        var ref = fs.ref();
        ref.$add(this.newPlayer)
      }
    };
  };
})();