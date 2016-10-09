(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('player', {
      templateUrl: 'app/components/Player/player.tpl.html',
      bindings: {
        name: '@',
        score: '=',
        color: '@',
        plusOne: '&',
        minusOne: '&',
        removePlayer: '&'
      }
    });
})();