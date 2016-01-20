var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var backbone = require('backbone');

var input = require('./IntegerInput');

//jsx element = reactElement
//jsx converts html style syntax into something called a reactElement

//<h1 className="emphasis" />
// compiles to:
// var element = React.createElement('h1', { className: 'emphasis '});
//
// // ReactDOM.render(<h1 className="emphasis" />, document.getElementById('react-element'));
// ReactDOM.render(
//   element,
//   document.getElementById('react-element')
// );
