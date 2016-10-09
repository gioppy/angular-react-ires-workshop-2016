var React = require('react');

var Button = require('Button');

var ScoresControls = React.createClass({
  handleNewPlayer: function(){
    var p = document.getElementById('player-add');
    p.setAttribute('class', 'player-add animated fadeInDown');
    var s = document.getElementById('scores');
    s.setAttribute('class', 'scores animated zoomOut');
  },
  render: function(){
    return (
      <div className="scores-controls">
        <Button text="Add new player" extraClasses="button--no-text button_icon button_icon--user" click={this.handleNewPlayer} />
      </div>
    );
  }
});
module.exports = ScoresControls;