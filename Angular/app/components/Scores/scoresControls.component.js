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
      var p = document.querySelectorAll('#player-add');
      var s = document.querySelectorAll('#scores');
      angular.element(p).removeClass('fadeOutUp').addClass('fadeInDown');
      angular.element(s).addClass('zoomOut')
    };
  }
})();