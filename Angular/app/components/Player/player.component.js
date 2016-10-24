(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('player', {
      templateUrl: 'app/components/Player/player.tpl.html',
      transclude: true,
      bindings: {
        score: '<',
        plusOne: '&',
        minusOne: '&',
        removePlayer: '&'
      }
    });
})();