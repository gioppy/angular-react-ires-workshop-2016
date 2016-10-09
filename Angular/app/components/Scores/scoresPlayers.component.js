(function(){
  'use strict';

  angular.module('scorekeeper')
    .component('scoresPlayers', {
      templateUrl: 'app/components/Scores/scoresPlayers.tpl.html',
      controller: ScoresPlayersController
    });

  ScoresPlayersController.$inject = ['FirebaseService'];

  function ScoresPlayersController(fs){
    /*this.players = [
      {
        name: 'Pippo',
        score: 0,
        color: 'red'
      },
      {
        name: 'Pluto',
        score: 0,
        color: 'red'
      },
      {
        name: 'Paperino',
        score: 0,
        color: 'red'
      }
    ];*/
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
      //this.players.splice($index,1);
      var index = this.players.indexOf(player);
      this.players.$remove(this.players[index]);
    };
  }
})();