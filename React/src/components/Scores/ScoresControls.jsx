var React = require('react');

var Button = require('Button');

var ScoresControls = React.createClass({
  handleNewPlayer: function(){
    var panel = document.getElementById('player-add');
    panel.style.display = 'block';
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