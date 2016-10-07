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
      var panel = document.getElementById('player-add');
      panel.style.display = 'none';
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
      <div className="player-add" id="player-add">
        <PlayerAddColors colorChange={this.handleColorPlayer} />
        <PlayerAddForm addNewPlayer={this.handleNewPlayer} color={color} />
      </div>
    );
  }
});
module.exports = PlayerAdd;