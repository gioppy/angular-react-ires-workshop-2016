(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('btn', {
      templateUrl: 'app/shared/btn/btn.tpl.html',
      transclude: true,
      bindings: {
        extraClasses: '@',
        onClick: '&'
      },
      controller: btnController
    });

  function btnController(){
    this.clickBtn = function(){
      this.onClick();
      console.log("BTN");
    }.bind(this);
  }
})();