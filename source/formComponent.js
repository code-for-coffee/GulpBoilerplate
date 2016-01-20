var React = require('react');
var ReactDOM = require('react-dom');

var IntegerInput = React.createClass({
  getInitialState: function() {
    return { value: 'Hello!' };
  },
  handleChange: function(event) {
    var isValid = this.validate(event.target.value);
    var elementClassName;
    // commands before setting state
    if (isValid) {
      elementClassName = "success";
    } else {
      elementClassName = "error";
    }
    console.log(isValid);
    console.log('My internal state has been changed!');
    this.setState({ value: event.target.value, cssClass: elementClassName });
  },
  validate: function(val) {
    console.log(val);
    if (Number.isInteger(parseInt(val)) == false) {
      return false;
    }
    return true;
  },
  render: function() {
    var value = this.state.value;
    var cssClass = this.state.cssClass;
    return <input type="number" className={cssClass} value={value} onChange={this.handleChange} />;
  }
})

ReactDOM.render(<IntegerInput />, document.getElementById('crud-form'));
