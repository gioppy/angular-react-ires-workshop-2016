var React = require('react');

var PlayerAddColors = require('PlayerAddColors');
var PlayerAddForm = require('PlayerAddForm');
var reactfireApi = require('reactfireApi');

var PlayerAdd = React.createClass({
  getInitialState: function(){
    return {
      score: 0,
      color: 'red'
    }
  },
  componentWillMount: function(){
    this.ref = reactfireApi.ref();
  },
  handleNewPlayer: function(name){
    this.setState({
      name: name
    }, () => {
      reactfireApi.insert(this.ref, this.state);
      var p = document.getElementById('player-add');
      p.setAttribute('class', 'player-add animated fadeOutUp');
      var s = document.getElementById('scores');
      s.setAttribute('class', 'scores animated zoomIn');
    });
  },
  handleColorPlayer: function(color){
    this.setState({
      color: color
    });
  },
  render: function(){
    var {color} = this.state;

    return (
      <div className="player-add animated fadeOutUp" id="player-add">
        <PlayerAddColors colorChange={this.handleColorPlayer} />
        <PlayerAddForm addNewPlayer={this.handleNewPlayer} color={color} />
      </div>
    );
  }
});
module.exports = PlayerAdd;