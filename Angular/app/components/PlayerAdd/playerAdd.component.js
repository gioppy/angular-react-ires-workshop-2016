(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('playerAdd', {
      templateUrl: 'app/components/PlayerAdd/playerAdd.tpl.html',
      controller: PlayerAddController
    });

  function PlayerAddController(){
    this.newPlayer = {
      name: '',
      score: 0,
      color: 'red'
    };
  }
})();