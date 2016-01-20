var React = require('react');
var ReactDOM = require('react-dom');

var reactElementExample = require('./reactElements');


// Day 1:
// var NavBar = React.createClass({
//   render: function() {
//     return <nav>{this.props.appName}
//       <ul><li><a href={this.props.home}>{this.props.home}</a></li>
//       <li><a href={this.props.contact}>{this.props.contact}</a></li>
//       </ul>
//     </nav>;
//   }
// });
//
// var Hello = React.createClass({
//   render: function() {
//     return <div>Hello {this.props.name}</div>;
//   }
// });
//
// var Footer = React.createClass({
//   render: function() {
//     return <footer>&copy; 2016 {this.props.author}</footer>;
//   }
// });
//
// ReactDOM.render(
//   <NavBar appName="yo" home="home" contact="reachout" />,
//   document.getElementById('navbar-container')
// )
//
// ReactDOM.render(
//   <Hello name="World" />,
//   document.getElementById('container')
// );
//
// ReactDOM.render(
//   <Footer author="codeforcoffee" />,
//   document.getElementById('footer-container')
// )
