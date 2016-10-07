var React = require('react');

var Player = require('Player');
var reactfireApi = require('reactfireApi');

var ScoresPlayers = React.createClass({
  mixins: [ReactFireMixin],
  componentWillMount: function(){
    var ref = reactfireApi.ref();
    this.bindAsArray(ref, "players");
  },
  sortPlayers: function(a, b){
    if(a.score < b.score){
      return 1;
    }

    if(a.score > b.score){
      return -1;
    }
    return 0;
  },
  render: function(){
    var {players} = this.state;
    players.sort(this.sortPlayers);

    return (
      <div className="scores-players">
        {
          players.map((player) => {
            return (<Player key={player['.key']} playerID={player['.key']} color={player.color} name={player.name} score={player.score} />)
          })
        }
      </div>
    );
  }
});
module.exports = ScoresPlayers;