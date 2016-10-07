var React = require('react');

var Button = require('Button');

var PlayerAddColors = React.createClass({
  getInitialState: function(){
    return {
      color: 'red'
    }
  },
  handlePlayerColor: function(e){
    var color = e.target.innerHTML.toLowerCase();
    this.setState({
      color: color
    });
    this.props.colorChange(color);
  },
  render: function(){
    var {color} = this.state;

    function selectedColor(color, button){
      return color === button ? ' button--selected' : '';
    }

    return (
      <div className="player-add-colors">
        <Button extraClasses={"button--no-text button--color-red" + selectedColor(color, 'red')} text="red" click={this.handlePlayerColor} />
        <Button extraClasses={"button--no-text button--color-violet" + selectedColor(color, 'violet')} text="violet" click={this.handlePlayerColor} />
        <Button extraClasses={"button--no-text button--color-blue" + selectedColor(color, 'blue')} text="blue" click={this.handlePlayerColor} />
        <Button extraClasses={"button--no-text button--color-green" + selectedColor(color, 'green')} text="green" click={this.handlePlayerColor} />
        <Button extraClasses={"button--no-text button--color-yellow" + selectedColor(color, 'yellow')} text="yellow" click={this.handlePlayerColor} />
        <Button extraClasses={"button--no-text button--color-white" + selectedColor(color, 'white')} text="white" click={this.handlePlayerColor} />
      </div>
    );
  }
});
module.exports = PlayerAddColors;