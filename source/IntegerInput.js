var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

// basic react outline
var IntegerInput = React.createClass({
  // runs first! we want to give our component 'state'
  getInitialState: function() {
    // set this.state.value = 42
    // this.state =sorta backbone.model.attributes
    return { value: 42, cssClass: 'form-control' };
  },
  handleChange: function(event) {
    var isInputValid = this.validate(event.target.value);
    var validationClass; // css validation class
    if (isInputValid) {
      validationClass = 'success form-control';
    } else {
      validationClass = 'error form-control';
    }
    this.setState({ cssClass: validationClass, value: event.target.value });
  },
  validate: function(val) {
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
});

var PasswordInput = React.createClass({
  // runs first! we want to give our component 'state'
  getInitialState: function() {
    // set this.state.value = 42
    // this.state =sorta backbone.model.attributes
    return { value: '', cssClass: 'form-control' };
  },
  handleChange: function(event) {
    var isInputValid = this.validate(event.target.value);
    var validationClass; // css validation class
    if (isInputValid) {
      validationClass = 'success form-control';
    } else {
      validationClass = 'error form-control';
    }
    this.setState({ cssClass: validationClass, value: event.target.value });
  },
  validate: function(val) {
    // require 10 character long password
    if (val.length < 10) {
      return false;
    }
    return true;
  },
  render: function() {
    var value = this.state.value;
    var cssClass = this.state.cssClass;
    return <div class="form-group has-success">
      <label class="control-label" for="inputSuccess1">Your Password</label>
      <input type="password" className={cssClass} value={value} onChange={this.handleChange} />
    </div>;
  }
});




ReactDOM.render(
  <IntegerInput />,
  document.getElementById('react-element')
);

ReactDOM.render(
  <PasswordInput />,
  document.getElementById('react-element-pass')
);
