/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Board =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));\n    _this.state = {\n      board: new Array(_this.props.n).fill(0).map(function (i) {\n        return new Array(_this.props.m).fill(0);\n      }),\n      playerOne: true\n    };\n    _this.move = _this.move.bind(_assertThisInitialized(_this));\n    _this.togglebutton = _this.togglebutton.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Board, [{\n    key: \"move\",\n    value: function move(e) {\n      var x = Math.floor(Number(e.target.name) / 10);\n      var y = e.target.name % 10;\n      var i = this.props.n - 1;\n\n      while (i >= 0) {\n        var player = this.state.playerOne ? 1 : 20;\n        var tempBoard = this.state.board;\n\n        if (tempBoard[i][y] === 0) {\n          tempBoard[i][y] = player;\n          this.setState({\n            playerOne: !this.state.playerOne,\n            board: tempBoard\n          });\n          this.togglebutton(i, y, player);\n          break;\n        }\n\n        i--;\n      }\n\n      console.log(this.state.board);\n    }\n  }, {\n    key: \"togglebutton\",\n    value: function togglebutton(i, y, player) {\n      var name = i * 10 + y;\n      $('[name=' + name + ']').toggleClass(\"player\" + player.toString());\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var newboard = [];\n\n      for (var i = 0; i < this.props.n; i++) {\n        for (var j = 0; j < this.props.m; j++) {\n          var t = React.createElement(\"div\", {\n            key: i\n          }, React.createElement(Row, {\n            i: i,\n            j: j,\n            move: this.move\n          }));\n        }\n\n        newboard.push(t);\n      }\n\n      ;\n      return React.createElement(\"div\", null, newboard);\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\nfunction Row(_ref) {\n  var i = _ref.i,\n      j = _ref.j,\n      move = _ref.move;\n  var arr = [];\n\n  for (var k = 0; k <= j; k++) {\n    arr.push(React.createElement(\"button\", {\n      key: (i * 20 + k).toString(),\n      className: \"row\",\n      \"data-x\": i.toString(),\n      \"data-y\": k.toString(),\n      name: (i * 10 + k).toString(),\n      onClick: move\n    }, \" \", i, \", \", k, \" \"));\n  }\n\n  ;\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board); // you want your board to be static \n// class below another class where this class really doesn't do anything much, if ay all. \n// a smarter way to do it? faster?\n// Serving files from Express\n// Similar to the hint in challenge #2, you can use express.static to tell Express where to look for files to serve up to the browser. The convention is to serve client files from the public folder, like so:\n//   1│    app.use(express.static('public')\n// By default, Express will look for a file called index.html and serve that file whenver you browse to the root (/) route.\n// what is npm build?//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD83MzViIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGJvYXJkOiBuZXcgQXJyYXkodGhpcy5wcm9wcy5uKS5maWxsKDApLm1hcChpPT4gbmV3IEFycmF5KHRoaXMucHJvcHMubSkuZmlsbCgwKSksXG5cdFx0XHRwbGF5ZXJPbmU6IHRydWVcblx0XHR9XG5cdFx0dGhpcy5tb3ZlPXRoaXMubW92ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlYnV0dG9uID0gdGhpcy50b2dnbGVidXR0b24uYmluZCh0aGlzKTtcblx0XHRcblx0fVxuXHRtb3ZlKGUpe1xuXHRcdHZhciB4ID0gTWF0aC5mbG9vcihOdW1iZXIoZS50YXJnZXQubmFtZSkvIDEwKVxuXHRcdHZhciB5ID0gZS50YXJnZXQubmFtZSAlMTBcblx0XHR2YXIgaSA9IHRoaXMucHJvcHMubi0xO1xuXHRcdHdoaWxlIChpPj0wKXtcblx0XHRcdHZhciBwbGF5ZXIgPSB0aGlzLnN0YXRlLnBsYXllck9uZT8gMToyMDtcblx0XHRcdHZhciB0ZW1wQm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuXHRcdFx0aWYgKHRlbXBCb2FyZFtpXVt5XT09PTApe1xuXHRcdFx0XHR0ZW1wQm9hcmRbaV1beV09cGxheWVyO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKFxuXHRcdFx0XHRcdHtwbGF5ZXJPbmU6IXRoaXMuc3RhdGUucGxheWVyT25lLCBib2FyZDogdGVtcEJvYXJkfVxuXHRcdFx0XHQpXG5cdFx0XHRcdHRoaXMudG9nZ2xlYnV0dG9uKGksIHksIHBsYXllcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aS0tO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJvYXJkKTtcblx0fVxuXHR0b2dnbGVidXR0b24oaSx5LCBwbGF5ZXIpe1xuXHRcdGxldCBuYW1lID0gaSoxMCArIHkgXG5cdFx0JCgnW25hbWU9JysgbmFtZSsgJ10nKS50b2dnbGVDbGFzcyhcInBsYXllclwiK3BsYXllci50b1N0cmluZygpKTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIG5ld2JvYXJkID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLm47IGkrKykge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnByb3BzLm07IGorKykge1xuXHRcdFx0XHR2YXIgdCA9IChcblx0XHRcdFx0XHQ8ZGl2IGtleT17aX0+XG5cdFx0XHRcdFx0XHQ8Um93IGk9e2l9IGo9e2p9IG1vdmU9e3RoaXMubW92ZX0+PC9Sb3c+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRuZXdib2FyZC5wdXNoKHQpO1xuXHRcdH07XG5cdFx0cmV0dXJuICg8ZGl2PntuZXdib2FyZH08L2Rpdj4pXG5cdH1cblxufVxuXG5mdW5jdGlvbiBSb3coe2ksIGosbW92ZX0pIHtcblx0dmFyIGFyciA9IFtdO1xuXHRmb3IgKHZhciBrID0gMDsgayA8PSBqOyBrKyspIHtcblx0XHRhcnIucHVzaCg8YnV0dG9uIGtleT17KGkgKiAyMCArIGspLnRvU3RyaW5nKCl9IGNsYXNzTmFtZT1cInJvd1wiIGRhdGEteD17aS50b1N0cmluZygpfSBkYXRhLXk9e2sudG9TdHJpbmcoKX0gbmFtZSA9eyhpKjEwK2spLnRvU3RyaW5nKCl9IG9uQ2xpY2s9e21vdmV9PiB7aX0sIHtrfSA8L2J1dHRvbj4pXG5cdH07XG5cdHJldHVybiAoYXJyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG5cbi8vIHlvdSB3YW50IHlvdXIgYm9hcmQgdG8gYmUgc3RhdGljIFxuLy8gY2xhc3MgYmVsb3cgYW5vdGhlciBjbGFzcyB3aGVyZSB0aGlzIGNsYXNzIHJlYWxseSBkb2Vzbid0IGRvIGFueXRoaW5nIG11Y2gsIGlmIGF5IGFsbC4gXG4vLyBhIHNtYXJ0ZXIgd2F5IHRvIGRvIGl0PyBmYXN0ZXI/XG5cblxuLy8gU2VydmluZyBmaWxlcyBmcm9tIEV4cHJlc3NcblxuLy8gU2ltaWxhciB0byB0aGUgaGludCBpbiBjaGFsbGVuZ2UgIzIsIHlvdSBjYW4gdXNlIGV4cHJlc3Muc3RhdGljIHRvIHRlbGwgRXhwcmVzcyB3aGVyZSB0byBsb29rIGZvciBmaWxlcyB0byBzZXJ2ZSB1cCB0byB0aGUgYnJvd3Nlci4gVGhlIGNvbnZlbnRpb24gaXMgdG8gc2VydmUgY2xpZW50IGZpbGVzIGZyb20gdGhlIHB1YmxpYyBmb2xkZXIsIGxpa2Ugc286XG5cbi8vICAgMeKUgiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKVxuLy8gQnkgZGVmYXVsdCwgRXhwcmVzcyB3aWxsIGxvb2sgZm9yIGEgZmlsZSBjYWxsZWQgaW5kZXguaHRtbCBhbmQgc2VydmUgdGhhdCBmaWxlIHdoZW52ZXIgeW91IGJyb3dzZSB0byB0aGUgcm9vdCAoLykgcm91dGUuXG5cblxuLy8gd2hhdCBpcyBucG0gYnVpbGQ/ICJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7QUEvQ0E7QUFDQTtBQWtEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/board.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/board.jsx */ \"./client/src/components/board.jsx\");\n\nvar n = 4;\nvar m = 8;\nReactDOM.render(React.createElement(\"div\", null, React.createElement(_components_board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  n: n,\n  m: m\n})), document.getElementById('originalBoard')); // {/* <div><Board n={n} m={m}/></div>,  */}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvYm9hcmQuanN4XCI7XG5cbnZhciBuID0gNDtcbnZhciBtID0gODtcblxuUmVhY3RET00ucmVuZGVyKFxuPGRpdj48Qm9hcmQgIG49e259IG09e219Lz48L2Rpdj4sIFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZ2luYWxCb2FyZCcpXG4pXG5cbi8vIHsvKiA8ZGl2PjxCb2FyZCBuPXtufSBtPXttfS8+PC9kaXY+LCAgKi99XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });