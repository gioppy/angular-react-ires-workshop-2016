var React = require('react');

var Button = require('Button');
var reactfireApi = require('reactfireApi');

var Player = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    color: React.PropTypes.string
  },
  componentWillMount: function(){
    this.ref = reactfireApi.ref();
  },
  getInitialState: function(){
    return {
      score: this.props.score
    }
  },
  handleRemovePlayer: function(){
    var id = this.props.playerID;
    reactfireApi.update(this.ref, id, null);
  },
  handlePlusOne: function(){
    var id = this.props.playerID;
    var score = this.state.score + 1;
    reactfireApi.update(this.ref, id + '/score', score);
    this.setState({
      score: score
    });
  },
  handleMinusOne: function(){
    var id = this.props.playerID;
    var score = this.state.score - 1;
    reactfireApi.update(this.ref, id + '/score', score);
    this.setState({
      score: score
    });
  },
  render: function(){
    var {name, color} = this.props;
    var {score, playerID} = this.state;

    var cssClasses = `player color-${color}`;

    return (
      <div className={cssClasses}>
        <Button extraClasses="button--no-text button_icon button_icon--cross" text="Delete" click={this.handleRemovePlayer} />
        <h2 className="player-name">{name}</h2>
        <span className="player-score">{score}</span>
        <Button extraClasses="button--no-text button_icon button_icon--plus" text="Add one point" click={this.handlePlusOne} />
        <Button extraClasses="button--no-text button_icon button_icon--minus" text="Substract one point" click={this.handleMinusOne} />
      </div>
    );
  }
});
module.exports = Player;