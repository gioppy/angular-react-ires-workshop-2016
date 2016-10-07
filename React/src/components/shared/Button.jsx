var React = require('react');

var Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    click: React.PropTypes.func.isRequired,
    extraClasses: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      text: 'Button'
    }
  },
  onClickButton: function(e){
    e.preventDefault();
    this.props.click(e);
  },
  render: function(){
    var {text, extraClasses} = this.props;

    var cssClasses = extraClasses ? `button ${extraClasses}` : 'button';

    return (
      <button className={cssClasses} onClick={this.onClickButton} type="button">{text}</button>
    );
  }
});
module.exports = Button;