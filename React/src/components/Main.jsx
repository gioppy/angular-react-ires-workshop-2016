var React = require('react');

var Scores = require('Scores');
var PlayerAdd = require('PlayerAdd');

var Main = React.createClass({
  render: function(){
    return (
      <div className="app-container">
        <h1 className="app-name">Scorekeeper</h1>
        <Scores />
        <PlayerAdd />
      </div>
    );
  }
});
module.exports = Main;