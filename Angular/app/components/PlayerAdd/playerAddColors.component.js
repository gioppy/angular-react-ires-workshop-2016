(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('playerAddColors', {
      templateUrl: 'app/components/PlayerAdd/playerAddColors.tpl.html',
      bindings: {
        newPlayer: '='
      },
      controller: PlayerAddColorsController
    });

  function PlayerAddColorsController(){
    this.color = this.newPlayer.color;
    this.handlePlayerColor = function(color){
      this.color = color;
      this.newPlayer.color = color;
    };

    this.selectedColor = function(color){
      return this.color === color ? ' button--selected' : '';
    };
  }
})();