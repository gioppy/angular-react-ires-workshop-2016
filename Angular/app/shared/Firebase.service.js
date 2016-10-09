(function(){
  'use strict';

  angular.module('scorekeeper')
    .service('FirebaseService', FirebaseService);

  FirebaseService.$inject = ['$firebaseArray'];

  function FirebaseService($firebaseArray){
    this.ref = function(){
      var ref = firebase.database().ref('players');
      return $firebaseArray(ref);
    };
  }
})();