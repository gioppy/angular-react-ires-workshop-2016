(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('scoresPlayers', {
      templateUrl: 'app/components/Scores/scoresPlayers.tpl.html',
      controller: ScoresPlayersController
    });

  ScoresPlayersController.$inject = ['FirebaseService'];

  function ScoresPlayersController(fs){
    this.players = fs.ref();

    this.handlePlusOne = function(player){
      var index = this.players.indexOf(player);
      this.players[index].score += 1;
      this.players.$save(this.players[index]);
    };

    this.handleMinusOne = function(player){
      var index = this.players.indexOf(player);
      this.players[index].score -= 1;
      this.players.$save(this.players[index]);
    };

    this.handleRemovePlayer = function(player){
      var index = this.players.indexOf(player);
      this.players.$remove(this.players[index]);
    };
  }
})();