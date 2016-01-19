(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bob = require('./bob');
bob();

var HelloWorld = function () {
  function HelloWorld(name, purpose) {
    _classCallCheck(this, HelloWorld);

    this.attrs = {
      name: name,
      purpose: purpose
    };
  }

  _createClass(HelloWorld, [{
    key: 'toString',
    value: function toString() {
      return 'Hello, world!';
    }
  }]);

  return HelloWorld;
}();

var sample = new HelloWorld("James", "party party party");
console.log(sample.toString());
console.log(sample.attrs);

},{"./bob":2}],2:[function(require,module,exports){
'use strict';

module.exports = function () {
  console.log('hi bob');
};

},{}]},{},[1]);
