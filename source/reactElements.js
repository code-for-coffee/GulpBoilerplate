var React = require('react');
var ReactDOM = require('react-dom');
// allow us to define a basic element
// var reactElement = React.createElement(type, props, children);
var reactElement = React.createElement('h1', { className: 'header' });
// is what jsx compiles to
// for:
// <h1 className="header" />
// render as usual
ReactDOM.render(reactElement, document.getElementById('some-where'));
// for more documentation: https://facebook.github.io/react/docs/jsx-in-depth.html

//
var Nav;
// Input (JSX):
var app = <Nav color="blue" />;
// Output (JS):
var app = React.createElement(Nav, {color:"blue"});
