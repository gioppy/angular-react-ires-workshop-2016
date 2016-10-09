(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('scoresControls', {
      templateUrl: 'app/components/Scores/scoresControls.tpl.html',
      controller: scoresControlsController
    });

  function scoresControlsController(){
    var vm = this;

    vm.handleNewPlayer = function(){
      console.log("ADD NEW PLAYER");
    };
  }
})();