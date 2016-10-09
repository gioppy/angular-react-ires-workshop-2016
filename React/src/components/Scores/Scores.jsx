var React = require('react');

var ScoresControls = require('ScoresControls');
var ScoresPlayers = require('ScoresPlayers');

var Scores = React.createClass({
  render: function(){
    return (
      <div className="scores animated" id="scores">
        <div className="scores-container">
          <ScoresControls />
          <ScoresPlayers />
        </div>
      </div>
    );
  }
});
module.exports = Scores;