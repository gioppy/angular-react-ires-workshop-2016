var React = require('react');

var Button = require('Button');

var PlayerAddForm = React.createClass({
  submitNewPlayer: function(e){
    e.preventDefault();
    var name = this.refs.player.value;

    if(name.length > 0){
      this.props.addNewPlayer(name);
      this.refs.player.value = '';
    }
  },
  handlePlayerDiscard: function(){
    this.refs.player.value = '';
    var panel = document.getElementById('player-add');
    panel.style.display = 'none';
  },
  render: function(){
    var {color} = this.props;
    var cssClasses = `player-add-form color-${color}`;

    return (
      <form className={cssClasses} onSubmit={this.submitNewPlayer}>
        <Button extraClasses="button--no-text button_icon button_icon--user-remove" text="Discard" click={this.handlePlayerDiscard} />
        <input className="form-text-name" type="text" placeholder="Name of the player" ref="player" />
        <button type="submit" className="button button--no-text button_icon button_icon--check">Save</button>
      </form>
    );
  }
});
module.exports = PlayerAddForm;