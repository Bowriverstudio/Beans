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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/beans-icons.js":
/*!****************************!*\
  !*** ./src/beans-icons.js ***!
  \****************************/
/*! exports provided: BeansIcon, BeansIconSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeansIcon", function() { return BeansIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeansIconSmall", function() { return BeansIconSmall; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Genesis Icons for use in React components.
 *
 * Wrapping these icons in the WordPress SVG component instead of using SVGs
 * directly ensures icons remain accessible in all browsers.
 *
 * See https://developer.wordpress.org/block-editor/components/svg/.
 *
 * @since   3.1.0
 * @package Genesis\JS
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */

var BeansIcon = function BeansIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 70 70",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("image", {
    width: "70",
    height: "70",
    x: "0",
    y: "0",
    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACVVBMVEUAAAAAAAAdkV0gkWEg kV8gkmAgkmEgkWAgkmAhkWARiFUfkmAgkmAhkmAfj14gkWEgkmAAgAAgkWAhkmAgkGEgkWEbklsh kWEfkF8hkmEAkkkhkWAgj2AhkmAfj1wgkmAhkWAhkmEkk2NXrIiTybKs1sTB4NPW6uHi8OrT6eDC 4dSq1cJ3vJ5BoXdesIyy2cjx+PX///9zupsmlGRSqoTI5Nfe7+hQqYIplmev2Mb7/fx6vqA7nnPU 6uD+/v5xuZpMp3/r9fGFw6hConhotZP3+/k7n3Q3nXHo8+5ZrYlVq4bm8+212sonlWXP5901nG/6 /PsumGqm07/2+vhrtpZIpXz9/v283s/O59y/39Eymm3y+fZGpHuQyLBYrYhbroqJxatJpX1Jpn5w uJluuJhConlqtZVWrIfK5dliso/j8esikmJkspBptZSn08Cg0Lwrl2ju9vOUyrPN5ttntJPc7ea7 3s/s9vEwmWxmtJKbzriHxKpls5G228sllGQtl2ljspD0+feIxKpLpn+CwaY5nXJUq4X8/f1Np4Cp 1cK73c6AwaWKxavq9fD5/PuNx65Do3lHpHxfsI2g0Lsjk2IvmWvV6uGZzLaOx6+Mxq1Eo3qRybBF o3vJ5Nldr4uLxqydz7mczrhrtpWMx60nlGXv9/P4+/qPyK9AoXd2u52i0b2TyrLP59y53M11u51T qoSz2clQqYOYzLU2nHCr1cPg8Onw9/R/wKPt9vKVy7TQ6N44nXG328zR6N7p9O80m26GxKnq9PCu 18W+39Fst5aXzLUzmm5wDMNKAAAAIXRSTlMAASxfhq3Q3+z5D2Ko6Ump9wJY0kfYHKtT8AeUEMIZ 3qxK5folAAAAAWJLR0Qx2dsdcgAAAAd0SU1FB+MLBgQmOgxkXwsAAAQNSURBVFjDrZj3WxMxGMev kw5ooRWQIRIQUQGhFrVVhkq1bnFQBUVExQHurSiCiigOxD1Qce+9FcX9d3lNcte7JKU9n3t/aHPv fd/Pk+TyZnFcWNNodXqDMcZkNptijAa9TqvhFJvFGhsHCIuLtVqUMDQ2ezxgWrzdFm2dEhxOMIA5 HQnRUAYlggiWOCgiJCk5EiRoyUkDUwanREMBIGXwAJDUtOggQUtLDUdJHxI9BYAh6WxKhlMJhf9k GUzKUGUUAIYyOOkK6wLrQ7UrVVG/iP1D9rOCbyS1NGK8/B8FANn4SQo36rKyh+UMzx0xclRefgFT kCIdz5lsyOjCIlfIcse4GZpMSTYyIcVjXYSNG8+QiXmawMppj9dF24SJtDBRmDccDEpJqYtlZeW0 1IEoGsbAmzQ5FDrFU+HLKcMPU6dRWieaD200xT9dUoMZQc/MWfhpNq22QYyd8s+ZK23IPOjLxvWp nE/J7UGKhZ69F6CIhfC3CDvzMHURJY8PrhdWyl0VgPrFqE5LsLdc6Cq6VVZmm6qhfFbNUvifh73L MKaWxvCt0lCr2nIkr/Oj/xXYXY8x+TQmTsNpKacXt2UlCluF3asxpoHGAC2nI11u1JY1YK3ke4tN da1jUICO05Ou9VDd2AQ2oLgK5N6I02ElC6PnDKRrE5RvBsCHArdAr38retrGogADZyRd26HcB8AO WFgKnSU7EWWXm4kxcjGkazdMwT0A7EVJ5N3X7NuPk+NAC5MCYjgT4TmIuoYvtZLp3XaoiU0BJs5M eA7DiLl8qY7EFFUfaWdjzBQmGyUCXzoKS7tlpI4DDWwM2SgU7OVLx2DpeCf/U3ri5CkMOt3FbBTZ xWegeDhf6kZfvqX4bHBR8JwTapR3ntHF5Ae/AKUX+VIBLF0S31wWOFcYH5wafm2wN7MAuApjroXe LBHa1UPGGOhkuA6lN/j5GBYkXXFTqE4vGaOnU/OWMOXeJlswRcA0kjE6eqLAqXQETxh3Qm+qxe/u J2K09LR19x6S3kd/D4D7IXrxKDR8lslD+GmLiyWr81g24J54ngaePX9Rv+OlxPlKHhHLmtK7A1LM 61oXbW/kEVbmAvNWGtH1jqa8l+vhAkMvDe1TJSEfPtKYTXK9Pczi+0kS0tpJUcqq5HJbmK2A+7MY cnrLzACJ+SRX460AY2PyReyQPgDIPu7Mkosd4bdJ7V9RyLd+/uF7pQQS6CUSXNwmsTZtLc0/+NXk J1pdevoEUMevw6RScrhibSGbGl71iw81v7d5Cwv/lP+lZMnRbGgjmmxDq9L2Wq3NvlpHD5UOQmod y9Q6JKp1ZFXrAM2pdJwPjufMaCiZES4XOJWuOji1Ll44la6BoFmsdvpSyq7sUgrXScEV2T8Temup vpUadgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0wNlQxMTozODo1OC0wNzowMM8rSlQAAAAl dEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMDZUMTE6Mzg6NTgtMDc6MDC+dvLoAAAAAElFTkSuQmCC"
  }));
};
var BeansIconSmall = function BeansIconSmall() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 70 70",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("image", {
    width: "70",
    height: "70",
    x: "0",
    y: "0",
    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACVVBMVEUAAAAAAAAdkV0gkWEg kV8gkmAgkmEgkWAgkmAhkWARiFUfkmAgkmAhkmAfj14gkWEgkmAAgAAgkWAhkmAgkGEgkWEbklsh kWEfkF8hkmEAkkkhkWAgj2AhkmAfj1wgkmAhkWAhkmEkk2NXrIiTybKs1sTB4NPW6uHi8OrT6eDC 4dSq1cJ3vJ5BoXdesIyy2cjx+PX///9zupsmlGRSqoTI5Nfe7+hQqYIplmev2Mb7/fx6vqA7nnPU 6uD+/v5xuZpMp3/r9fGFw6hConhotZP3+/k7n3Q3nXHo8+5ZrYlVq4bm8+212sonlWXP5901nG/6 /PsumGqm07/2+vhrtpZIpXz9/v283s/O59y/39Eymm3y+fZGpHuQyLBYrYhbroqJxatJpX1Jpn5w uJluuJhConlqtZVWrIfK5dliso/j8esikmJkspBptZSn08Cg0Lwrl2ju9vOUyrPN5ttntJPc7ea7 3s/s9vEwmWxmtJKbzriHxKpls5G228sllGQtl2ljspD0+feIxKpLpn+CwaY5nXJUq4X8/f1Np4Cp 1cK73c6AwaWKxavq9fD5/PuNx65Do3lHpHxfsI2g0Lsjk2IvmWvV6uGZzLaOx6+Mxq1Eo3qRybBF o3vJ5Nldr4uLxqydz7mczrhrtpWMx60nlGXv9/P4+/qPyK9AoXd2u52i0b2TyrLP59y53M11u51T qoSz2clQqYOYzLU2nHCr1cPg8Onw9/R/wKPt9vKVy7TQ6N44nXG328zR6N7p9O80m26GxKnq9PCu 18W+39Fst5aXzLUzmm5wDMNKAAAAIXRSTlMAASxfhq3Q3+z5D2Ko6Ump9wJY0kfYHKtT8AeUEMIZ 3qxK5folAAAAAWJLR0Qx2dsdcgAAAAd0SU1FB+MLBgQmOgxkXwsAAAQNSURBVFjDrZj3WxMxGMev kw5ooRWQIRIQUQGhFrVVhkq1bnFQBUVExQHurSiCiigOxD1Qce+9FcX9d3lNcte7JKU9n3t/aHPv fd/Pk+TyZnFcWNNodXqDMcZkNptijAa9TqvhFJvFGhsHCIuLtVqUMDQ2ezxgWrzdFm2dEhxOMIA5 HQnRUAYlggiWOCgiJCk5EiRoyUkDUwanREMBIGXwAJDUtOggQUtLDUdJHxI9BYAh6WxKhlMJhf9k GUzKUGUUAIYyOOkK6wLrQ7UrVVG/iP1D9rOCbyS1NGK8/B8FANn4SQo36rKyh+UMzx0xclRefgFT kCIdz5lsyOjCIlfIcse4GZpMSTYyIcVjXYSNG8+QiXmawMppj9dF24SJtDBRmDccDEpJqYtlZeW0 1IEoGsbAmzQ5FDrFU+HLKcMPU6dRWieaD200xT9dUoMZQc/MWfhpNq22QYyd8s+ZK23IPOjLxvWp nE/J7UGKhZ69F6CIhfC3CDvzMHURJY8PrhdWyl0VgPrFqE5LsLdc6Cq6VVZmm6qhfFbNUvifh73L MKaWxvCt0lCr2nIkr/Oj/xXYXY8x+TQmTsNpKacXt2UlCluF3asxpoHGAC2nI11u1JY1YK3ke4tN da1jUICO05Ou9VDd2AQ2oLgK5N6I02ElC6PnDKRrE5RvBsCHArdAr38retrGogADZyRd26HcB8AO WFgKnSU7EWWXm4kxcjGkazdMwT0A7EVJ5N3X7NuPk+NAC5MCYjgT4TmIuoYvtZLp3XaoiU0BJs5M eA7DiLl8qY7EFFUfaWdjzBQmGyUCXzoKS7tlpI4DDWwM2SgU7OVLx2DpeCf/U3ri5CkMOt3FbBTZ xWegeDhf6kZfvqX4bHBR8JwTapR3ntHF5Ae/AKUX+VIBLF0S31wWOFcYH5wafm2wN7MAuApjroXe LBHa1UPGGOhkuA6lN/j5GBYkXXFTqE4vGaOnU/OWMOXeJlswRcA0kjE6eqLAqXQETxh3Qm+qxe/u J2K09LR19x6S3kd/D4D7IXrxKDR8lslD+GmLiyWr81g24J54ngaePX9Rv+OlxPlKHhHLmtK7A1LM 61oXbW/kEVbmAvNWGtH1jqa8l+vhAkMvDe1TJSEfPtKYTXK9Pczi+0kS0tpJUcqq5HJbmK2A+7MY cnrLzACJ+SRX460AY2PyReyQPgDIPu7Mkosd4bdJ7V9RyLd+/uF7pQQS6CUSXNwmsTZtLc0/+NXk J1pdevoEUMevw6RScrhibSGbGl71iw81v7d5Cwv/lP+lZMnRbGgjmmxDq9L2Wq3NvlpHD5UOQmod y9Q6JKp1ZFXrAM2pdJwPjufMaCiZES4XOJWuOji1Ll44la6BoFmsdvpSyq7sUgrXScEV2T8Temup vpUadgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0wNlQxMTozODo1OC0wNzowMM8rSlQAAAAl dEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMDZUMTE6Mzg6NTgtMDc6MDC+dvLoAAAAAElFTkSuQmCC"
  }));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _plugins_layout_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/layout-default */ "./src/plugins/layout-default/index.js");
/* harmony import */ var _plugins_layout_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/layout-meta */ "./src/plugins/layout-meta/index.js");
/* harmony import */ var _plugins_remove_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/remove_action */ "./src/plugins/remove_action/index.js");
 // import "./plugins/breadcrumbs";
// import "./plugins/image";





/***/ }),

/***/ "./src/lib/layout/icon-mapping.json":
/*!******************************************!*\
  !*** ./src/lib/layout/icon-mapping.json ***!
  \******************************************/
/*! exports provided: c, c_sp, sp_c, c_sp_ss, sp_ss_c, sp_c_ss, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"c\":\"c\",\"c_sp\":\"cs\",\"sp_c\":\"sc\",\"c_sp_ss\":\"css\",\"sp_ss_c\":\"ssc\",\"sp_c_ss\":\"scs\"}");

/***/ }),

/***/ "./src/lib/layout/icons.js":
/*!*********************************!*\
  !*** ./src/lib/layout/icons.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icons = {};
icons.beans_small = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  x: "0",
  y: "0",
  version: "1.1",
  viewBox: "0 0 70 70",
  xmlSpace: "preserve"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("image", {
  width: "70",
  height: "70",
  x: "0",
  y: "0",
  href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACVVBMVEUAAAAAAAAdkV0gkWEg kV8gkmAgkmEgkWAgkmAhkWARiFUfkmAgkmAhkmAfj14gkWEgkmAAgAAgkWAhkmAgkGEgkWEbklsh kWEfkF8hkmEAkkkhkWAgj2AhkmAfj1wgkmAhkWAhkmEkk2NXrIiTybKs1sTB4NPW6uHi8OrT6eDC 4dSq1cJ3vJ5BoXdesIyy2cjx+PX///9zupsmlGRSqoTI5Nfe7+hQqYIplmev2Mb7/fx6vqA7nnPU 6uD+/v5xuZpMp3/r9fGFw6hConhotZP3+/k7n3Q3nXHo8+5ZrYlVq4bm8+212sonlWXP5901nG/6 /PsumGqm07/2+vhrtpZIpXz9/v283s/O59y/39Eymm3y+fZGpHuQyLBYrYhbroqJxatJpX1Jpn5w uJluuJhConlqtZVWrIfK5dliso/j8esikmJkspBptZSn08Cg0Lwrl2ju9vOUyrPN5ttntJPc7ea7 3s/s9vEwmWxmtJKbzriHxKpls5G228sllGQtl2ljspD0+feIxKpLpn+CwaY5nXJUq4X8/f1Np4Cp 1cK73c6AwaWKxavq9fD5/PuNx65Do3lHpHxfsI2g0Lsjk2IvmWvV6uGZzLaOx6+Mxq1Eo3qRybBF o3vJ5Nldr4uLxqydz7mczrhrtpWMx60nlGXv9/P4+/qPyK9AoXd2u52i0b2TyrLP59y53M11u51T qoSz2clQqYOYzLU2nHCr1cPg8Onw9/R/wKPt9vKVy7TQ6N44nXG328zR6N7p9O80m26GxKnq9PCu 18W+39Fst5aXzLUzmm5wDMNKAAAAIXRSTlMAASxfhq3Q3+z5D2Ko6Ump9wJY0kfYHKtT8AeUEMIZ 3qxK5folAAAAAWJLR0Qx2dsdcgAAAAd0SU1FB+MLBgQmOgxkXwsAAAQNSURBVFjDrZj3WxMxGMev kw5ooRWQIRIQUQGhFrVVhkq1bnFQBUVExQHurSiCiigOxD1Qce+9FcX9d3lNcte7JKU9n3t/aHPv fd/Pk+TyZnFcWNNodXqDMcZkNptijAa9TqvhFJvFGhsHCIuLtVqUMDQ2ezxgWrzdFm2dEhxOMIA5 HQnRUAYlggiWOCgiJCk5EiRoyUkDUwanREMBIGXwAJDUtOggQUtLDUdJHxI9BYAh6WxKhlMJhf9k GUzKUGUUAIYyOOkK6wLrQ7UrVVG/iP1D9rOCbyS1NGK8/B8FANn4SQo36rKyh+UMzx0xclRefgFT kCIdz5lsyOjCIlfIcse4GZpMSTYyIcVjXYSNG8+QiXmawMppj9dF24SJtDBRmDccDEpJqYtlZeW0 1IEoGsbAmzQ5FDrFU+HLKcMPU6dRWieaD200xT9dUoMZQc/MWfhpNq22QYyd8s+ZK23IPOjLxvWp nE/J7UGKhZ69F6CIhfC3CDvzMHURJY8PrhdWyl0VgPrFqE5LsLdc6Cq6VVZmm6qhfFbNUvifh73L MKaWxvCt0lCr2nIkr/Oj/xXYXY8x+TQmTsNpKacXt2UlCluF3asxpoHGAC2nI11u1JY1YK3ke4tN da1jUICO05Ou9VDd2AQ2oLgK5N6I02ElC6PnDKRrE5RvBsCHArdAr38retrGogADZyRd26HcB8AO WFgKnSU7EWWXm4kxcjGkazdMwT0A7EVJ5N3X7NuPk+NAC5MCYjgT4TmIuoYvtZLp3XaoiU0BJs5M eA7DiLl8qY7EFFUfaWdjzBQmGyUCXzoKS7tlpI4DDWwM2SgU7OVLx2DpeCf/U3ri5CkMOt3FbBTZ xWegeDhf6kZfvqX4bHBR8JwTapR3ntHF5Ae/AKUX+VIBLF0S31wWOFcYH5wafm2wN7MAuApjroXe LBHa1UPGGOhkuA6lN/j5GBYkXXFTqE4vGaOnU/OWMOXeJlswRcA0kjE6eqLAqXQETxh3Qm+qxe/u J2K09LR19x6S3kd/D4D7IXrxKDR8lslD+GmLiyWr81g24J54ngaePX9Rv+OlxPlKHhHLmtK7A1LM 61oXbW/kEVbmAvNWGtH1jqa8l+vhAkMvDe1TJSEfPtKYTXK9Pczi+0kS0tpJUcqq5HJbmK2A+7MY cnrLzACJ+SRX460AY2PyReyQPgDIPu7Mkosd4bdJ7V9RyLd+/uF7pQQS6CUSXNwmsTZtLc0/+NXk J1pdevoEUMevw6RScrhibSGbGl71iw81v7d5Cwv/lP+lZMnRbGgjmmxDq9L2Wq3NvlpHD5UOQmod y9Q6JKp1ZFXrAM2pdJwPjufMaCiZES4XOJWuOji1Ll44la6BoFmsdvpSyq7sUgrXScEV2T8Temup vpUadgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0wNlQxMTozODo1OC0wNzowMM8rSlQAAAAl dEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMDZUMTE6Mzg6NTgtMDc6MDC+dvLoAAAAAElFTkSuQmCC"
}));

var C_GIcon = function C_GIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fillRule: "evenodd",
    stroke: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#fcfcfc",
    d: "M0 65v4.2h400v-8.4H0V65m0 270v4.2h400v-8.4H0v4.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#d4d4d4",
    d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h400V71.6H0V200m0 170.8V400h400v-58.4H0v29.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#dcece8",
    d: "M0 59.4v1h400v-2H0v1m0 11.2v1h400v-2H0v1m0 258.8v1h400v-2H0v1m0 11.2v1h400v-2H0v1"
  }));
};

icons.c = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(C_GIcon, null));
icons.c_small = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(C_GIcon, null));

var CS_GIcon = function CS_GIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fillRule: "evenodd",
    stroke: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#fcfcfc",
    d: "M0 65v4.2h151.511c136.648 0 151.598.061 152.402.624C306.154 71.394 306 61.784 306 200c0 138.216.154 128.606-2.087 130.176-.804.563-15.754.624-152.402.624H0v8.4h400v-8.4h-41.511c-45.641 0-42.561.169-43.891-2.404-.908-1.757-.908-255.035 0-256.792 1.33-2.573-1.75-2.404 43.891-2.404H400v-8.4H0V65"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#d4d4d4",
    d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h151.32c117.16 0 151.428-.108 151.8-.48.699-.699.699-255.141 0-255.84-.372-.372-34.64-.48-151.8-.48H0V200M316.88 72.08c-.699.699-.699 255.141 0 255.84.367.367 10.196.48 41.8.48H400V71.6h-41.32c-31.604 0-41.433.113-41.8.48M0 370.8V400h400v-58.4H0v29.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#dcece8",
    d: "M0 59.4v1h400v-2H0v1m0 11.2v1h151.32c117.16 0 151.428.108 151.8.48.699.699.699 255.141 0 255.84-.372.372-34.64.48-151.8.48H0v2H303.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m315.641.414l-1.241 1.414v255.144l1.241 1.414 1.242 1.414H400v-2h-41.32c-31.604 0-41.433-.113-41.8-.48-.699-.699-.699-255.141 0-255.84.367-.367 10.196-.48 41.8-.48H400v-2H316.883l-1.242 1.414M0 340.6v1h400v-2H0v1"
  }));
};

icons.cs = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CS_GIcon, null));
icons.cs_small = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CS_GIcon, null));

var CSS_GIcon = function CSS_GIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fillRule: "evenodd",
    stroke: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#fcfcfc",
    d: "M0 65v4.2h208.08l1.36 1.36 1.36 1.36v256.16l-1.36 1.36-1.36 1.36H0v8.4h400v-8.4h-41.511c-45.641 0-42.561.169-43.891-2.404-.908-1.757-.908-255.035 0-256.792 1.33-2.573-1.75-2.404 43.891-2.404H400v-8.4H0V65m303.913 4.824C306.154 71.394 306 61.784 306 200c0 112.103-.071 127.377-.598 128.396-1.329 2.571 1.651 2.404-42.931 2.404H221.92l-1.36-1.36-1.36-1.36V71.92l1.36-1.36 1.36-1.36h40.551c36.099 0 40.649.069 41.442.624"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#d4d4d4",
    d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h103.72c80.138 0 103.829-.109 104.2-.48.699-.699.699-255.141 0-255.84-.371-.371-24.062-.48-104.2-.48H0V200M222.08 72.08c-.699.699-.699 255.141 0 255.84.696.696 80.344.696 81.04 0 .699-.699.699-255.141 0-255.84-.696-.696-80.344-.696-81.04 0m94.8 0c-.699.699-.699 255.141 0 255.84.367.367 10.196.48 41.8.48H400V71.6h-41.32c-31.604 0-41.433.113-41.8.48M0 370.8V400h400v-58.4H0v29.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#dcece8",
    d: "M0 59.4v1h400v-2H0v1m0 11.2v1h103.72c80.138 0 103.829.109 104.2.48.699.699.699 255.141 0 255.84-.371.371-24.062.48-104.2.48H0v2h208.062l1.169-1.169 1.169-1.169V71.938l-1.169-1.169-1.169-1.169H0v1m220.769.169l-1.169 1.169v256.124l1.169 1.169 1.169 1.169h81.179l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414h-81.179l-1.169 1.169m94.872.245l-1.241 1.414v255.144l1.241 1.414 1.242 1.414H400v-2h-41.32c-31.604 0-41.433-.113-41.8-.48-.699-.699-.699-255.141 0-255.84.367-.367 10.196-.48 41.8-.48H400v-2H316.883l-1.242 1.414M303.12 72.08c.699.699.699 255.141 0 255.84-.696.696-80.344.696-81.04 0-.699-.699-.699-255.141 0-255.84.696-.696 80.344-.696 81.04 0M0 340.6v1h400v-2H0v1"
  }));
};

icons.css = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CSS_GIcon, null));
icons.css_small = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CSS_GIcon, null));

var SC_GIcon = function SC_GIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fillRule: "evenodd",
    stroke: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fillRule: "evenodd",
    stroke: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#fcfcfc",
    d: "M0 65v4.2h41.511c45.641 0 42.561-.169 43.891 2.404.908 1.757.908 255.035 0 256.792-1.33 2.573 1.75 2.404-43.891 2.404H0v8.4h400v-8.4H248.489c-136.648 0-151.598-.061-152.402-.624C93.846 328.606 94 338.216 94 200c0-138.216-.154-128.606 2.087-130.176.804-.563 15.754-.624 152.402-.624H400v-8.4H0V65"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#d4d4d4",
    d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h41.32c31.604 0 41.433-.113 41.8-.48.699-.699.699-255.141 0-255.84-.367-.367-10.196-.48-41.8-.48H0V200M96.88 72.08c-.699.699-.699 255.141 0 255.84.372.372 34.64.48 151.8.48H400V71.6H248.68c-117.16 0-151.428.108-151.8.48M0 370.8V400h400v-58.4H0v29.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#dcece8",
    d: "M0 59.4v1h400v-2H0v1m0 11.2v1h41.32c31.604 0 41.433.113 41.8.48.699.699.699 255.141 0 255.84-.367.367-10.196.48-41.8.48H0v2H83.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m95.641.414L94.4 72.428v255.144l1.241 1.414 1.242 1.414H400v-2H248.68c-117.16 0-151.428-.108-151.8-.48-.699-.699-.699-255.141 0-255.84.372-.372 34.64-.48 151.8-.48H400v-2H96.883l-1.242 1.414M0 340.6v1h400v-2H0v1"
  })));
};

icons.sc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SC_GIcon, null));
icons.sc_small = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SC_GIcon, null));

var SSC_GIcon = function SSC_GIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fillRule: "evenodd",
    stroke: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#fcfcfc",
    d: "M0 65v4.2h41.511c45.641 0 42.561-.169 43.891 2.404.908 1.757.908 255.035 0 256.792-1.33 2.573 1.75 2.404-43.891 2.404H0v8.4h400v-8.4H248.489c-136.648 0-151.598-.061-152.402-.624C93.846 328.606 94 338.216 94 200c0-138.216-.154-128.606 2.087-130.176.804-.563 15.754-.624 152.402-.624H400v-8.4H0V65"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#d4d4d4",
    d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h41.32c31.604 0 41.433-.113 41.8-.48.699-.699.699-255.141 0-255.84-.367-.367-10.196-.48-41.8-.48H0V200M96.88 72.08c-.699.699-.699 255.141 0 255.84.372.372 34.64.48 151.8.48H400V71.6H248.68c-117.16 0-151.428.108-151.8.48M0 370.8V400h400v-58.4H0v29.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#dcece8",
    d: "M0 59.4v1h400v-2H0v1m0 11.2v1h41.32c31.604 0 41.433.113 41.8.48.699.699.699 255.141 0 255.84-.367.367-10.196.48-41.8.48H0v2H83.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m95.641.414L94.4 72.428v255.144l1.241 1.414 1.242 1.414H400v-2H248.68c-117.16 0-151.428-.108-151.8-.48-.699-.699-.699-255.141 0-255.84.372-.372 34.64-.48 151.8-.48H400v-2H96.883l-1.242 1.414M0 340.6v1h400v-2H0v1"
  }));
};

icons.ssc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SSC_GIcon, null));
icons.ssc_small = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SSC_GIcon, null));

var SCS_GIcon = function SCS_GIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fillRule: "evenodd",
    stroke: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#fcfcfc",
    d: "M0 65v4.2h41.511c45.641 0 42.561-.169 43.891 2.404.908 1.757.908 255.035 0 256.792-1.33 2.573 1.75 2.404-43.891 2.404H0v8.4h400v-8.4h-41.511c-45.641 0-42.561.169-43.891-2.404-.908-1.757-.908-255.035 0-256.792 1.33-2.573-1.75-2.404 43.891-2.404H400v-8.4H0V65m303.913 4.824C306.154 71.394 306 61.784 306 200c0 138.216.154 128.606-2.087 130.176-1.363.955-206.463.955-207.826 0C93.846 328.606 94 338.216 94 200c0-138.216-.154-128.606 2.087-130.176 1.363-.955 206.463-.955 207.826 0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#d4d4d4",
    d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h41.32c31.604 0 41.433-.113 41.8-.48.699-.699.699-255.141 0-255.84-.367-.367-10.196-.48-41.8-.48H0V200M96.88 72.08c-.699.699-.699 255.141 0 255.84.699.699 205.541.699 206.24 0 .699-.699.699-255.141 0-255.84-.699-.699-205.541-.699-206.24 0m220 0c-.699.699-.699 255.141 0 255.84.367.367 10.196.48 41.8.48H400V71.6h-41.32c-31.604 0-41.433.113-41.8.48M0 370.8V400h400v-58.4H0v29.2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#dcece8",
    d: "M0 59.4v1h400v-2H0v1m0 11.2v1h41.32c31.604 0 41.433.113 41.8.48.699.699.699 255.141 0 255.84-.367.367-10.196.48-41.8.48H0v2H83.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m95.641.414L94.4 72.428v255.144l1.241 1.414 1.242 1.414h206.234l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H96.883l-1.242 1.414m220 0l-1.241 1.414v255.144l1.241 1.414 1.242 1.414H400v-2h-41.32c-31.604 0-41.433-.113-41.8-.48-.699-.699-.699-255.141 0-255.84.367-.367 10.196-.48 41.8-.48H400v-2H316.883l-1.242 1.414M303.12 72.08c.699.699.699 255.141 0 255.84-.699.699-205.541.699-206.24 0-.699-.699-.699-255.141 0-255.84.699-.699 205.541-.699 206.24 0M0 340.6v1h400v-2H0v1"
  }));
};

icons.scs = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SCS_GIcon, null));
icons.scs_small = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20px",
  height: "20px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SCS_GIcon, null));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/lib/layout/index.js":
/*!*********************************!*\
  !*** ./src/lib/layout/index.js ***!
  \*********************************/
/*! exports provided: getIconFromLayout, getSmallIconFromLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconFromLayout", function() { return getIconFromLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSmallIconFromLayout", function() { return getSmallIconFromLayout; });
/* harmony import */ var _icon_mapping_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-mapping.json */ "./src/lib/layout/icon-mapping.json");
var _icon_mapping_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./icon-mapping.json */ "./src/lib/layout/icon-mapping.json", 1);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/lib/layout/icons.js");


function getIconFromLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'c';
  var iconname = _icon_mapping_json__WEBPACK_IMPORTED_MODULE_0__[layout] || 'c';
  return _icons__WEBPACK_IMPORTED_MODULE_1__["default"][iconname];
}
function getSmallIconFromLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'c';
  var iconname = (_icon_mapping_json__WEBPACK_IMPORTED_MODULE_0__[layout] || 'beans') + '_small';
  return _icons__WEBPACK_IMPORTED_MODULE_1__["default"][iconname];
}

/***/ }),

/***/ "./src/lib/new-meta.js":
/*!*****************************!*\
  !*** ./src/lib/new-meta.js ***!
  \*****************************/
/*! exports provided: newMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newMeta", function() { return newMeta; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Builds new meta for use when saving post data. Refactored from StudioPress.
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */

/**
 * Builds the new Beans meta given a new key and value.
 *
 * Ensures that:
 * 1. Only Beans meta is updated when saving Beans settings
 * 2. A value of 'false' is sent instead of null for empty checkboxes, fixing
 * 3. Checkboxes do not flicker on and off when saving posts. See “additional
 * info”
 *
 * @param {string} newKey
 * @param {*} newValue
 * @return {Object} Beans meta keys and values.
 */

function newMeta(newKey, newValue) {
  var currentMeta = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])('core/editor').getEditedPostAttribute('meta');
  var beansMeta = Object.keys(currentMeta).filter(function (key) {
    return key.startsWith('_beans');
  }).reduce(function (obj, key) {
    obj[key] = currentMeta[key];

    if (obj[key] === null) {
      obj[key] = false;
    }

    return obj;
  }, {});
  return _objectSpread({}, beansMeta, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, newKey, newValue));
}

/***/ }),

/***/ "./src/plugins/layout-default/SwitcherButton.js":
/*!******************************************************!*\
  !*** ./src/plugins/layout-default/SwitcherButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/layout */ "./src/lib/layout/index.js");

var Icon = wp.components.Icon;


var SwitcherButton = function SwitcherButton(_ref) {
  var label = _ref.label,
      value = _ref.value,
      isSelected = _ref.isSelected,
      updateFunction = _ref.updateFunction;
  var className = isSelected ? 'selected' : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: className,
    onClick: function onClick() {
      updateFunction(value);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    icon: Object(_lib_layout__WEBPACK_IMPORTED_MODULE_1__["getIconFromLayout"])(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, label));
};

/* harmony default export */ __webpack_exports__["default"] = (SwitcherButton);

/***/ }),

/***/ "./src/plugins/layout-default/SwitcherControls.js":
/*!********************************************************!*\
  !*** ./src/plugins/layout-default/SwitcherControls.js ***!
  \********************************************************/
/*! exports provided: SwitcherControler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherControler", function() { return SwitcherControler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SwitcherButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SwitcherButton */ "./src/plugins/layout-default/SwitcherButton.js");









/**
 * WordPress dependencies
 */





var SwitcherControler =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SwitcherControler, _Component);

  function SwitcherControler(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SwitcherControler);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SwitcherControler).call(this, props));
    _this.updateDefaultLayout = _this.updateDefaultLayout.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.state = {};
    return _this;
  }
  /**
   * Gets items with breadcrumbs enabled, user capabilities, and reading settings.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SwitcherControler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
        path: '/beans/v1/layout-options'
      }).then(function (types) {
        _this2.setState({
          layoutOptions: types
        });
      });
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()({
        path: '/beans/v1/layout-default-selected'
      }).then(function (types) {
        _this2.setState({
          layoutSelected: types
        });
      });
    }
  }, {
    key: "updateDefaultLayout",
    value: function updateDefaultLayout(key) {
      var _this3 = this;

      var data = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props.currentPostType, key);

      var putRequest = {
        path: '/beans/v1/layout-default',
        method: 'PUT',
        data: data
      };
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_10___default()(putRequest).then(function (types) {
        if (_this3.props.onLayoutChange) {
          _this3.props.onLayoutChange();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (!this.state.layoutOptions) {
        var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Disabling breadcrumbs on %s...', 'beans'), 'test');
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", null, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Spinner"], null));
      }

      var items = Object.keys(this.state.layoutOptions).map(function (key) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          isSelected: _this4.props.currentLayout == key ? 1 : 0,
          label: key,
          value: key,
          updateFunction: _this4.updateDefaultLayout
        });
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], {
        className: "layout-switcher"
      }, items);
    }
  }]);

  return SwitcherControler;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ }),

/***/ "./src/plugins/layout-default/index.js":
/*!*********************************************!*\
  !*** ./src/plugins/layout-default/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/layout */ "./src/lib/layout/index.js");
/* harmony import */ var _SwitcherControls_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SwitcherControls.js */ "./src/plugins/layout-default/SwitcherControls.js");








/**
 * Selects
 * Image panel. Unchecked by default.
 *
 * If checked and the post is updated or published,
 * `_beans_hide_singular_image` is set to true in post meta.
 *
 * @since  2.0.0
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var BeansDefaultLayout =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BeansDefaultLayout, _Component);

  function BeansDefaultLayout() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BeansDefaultLayout);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BeansDefaultLayout).apply(this, arguments));
    _this.getCurrentLayout = _this.getCurrentLayout.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.fetchCurrentLayout = _this.fetchCurrentLayout.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    _this.fetchCurrentLayout();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BeansDefaultLayout, [{
    key: "fetchCurrentLayout",
    value: function fetchCurrentLayout() {
      var _this2 = this;

      wp.apiFetch({
        path: '/beans/v1/layout-default-selected',
        method: 'GET'
      }).then(function (types) {
        _this2.setState({
          layoutSelected: types
        });
      });
    }
  }, {
    key: "getCurrentLayout",
    value: function getCurrentLayout() {
      if (this.state && this.state.layoutSelected && this.props && this.props.currentPostType) {
        return this.state.layoutSelected[this.props.currentPostType];
      }

      return 'c';
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Fill"], {
        name: "BeansSidebar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        initialOpen: false,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Default ' + this.props.currentPostType + ' layouts', 'tm-beans'),
        icon: Object(_lib_layout__WEBPACK_IMPORTED_MODULE_11__["getSmallIconFromLayout"])(this.getCurrentLayout())
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_SwitcherControls_js__WEBPACK_IMPORTED_MODULE_12__["SwitcherControler"], {
        currentLayout: this.getCurrentLayout(),
        currentPostType: this.props.currentPostType,
        onLayoutChange: this.fetchCurrentLayout
      }))));
    }
  }]);

  return BeansDefaultLayout;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var HOC = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select) {
  var postType = select('core/editor').getCurrentPostType();
  return {
    currentPostType: postType
  };
})(BeansDefaultLayout);
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_10__["registerPlugin"])('beans-layout-controller', {
  render: HOC
});

/***/ }),

/***/ "./src/plugins/layout-meta/SwitcherButton.js":
/*!***************************************************!*\
  !*** ./src/plugins/layout-meta/SwitcherButton.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/layout */ "./src/lib/layout/index.js");

var Icon = wp.components.Icon;


var SwitcherButton = function SwitcherButton(_ref) {
  var label = _ref.label,
      value = _ref.value,
      isSelected = _ref.isSelected,
      updateFunction = _ref.updateFunction;
  var className = isSelected ? 'selected' : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: className,
    onClick: function onClick() {
      updateFunction(value);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    icon: Object(_lib_layout__WEBPACK_IMPORTED_MODULE_1__["getIconFromLayout"])(value)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, label));
};

/* harmony default export */ __webpack_exports__["default"] = (SwitcherButton);

/***/ }),

/***/ "./src/plugins/layout-meta/SwitcherControls.js":
/*!*****************************************************!*\
  !*** ./src/plugins/layout-meta/SwitcherControls.js ***!
  \*****************************************************/
/*! exports provided: SwitcherControler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherControler", function() { return SwitcherControler; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SwitcherButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SwitcherButton */ "./src/plugins/layout-meta/SwitcherButton.js");







/**
 * WordPress dependencies
 */





var SwitcherControler =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SwitcherControler, _Component);

  function SwitcherControler(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SwitcherControler);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SwitcherControler).call(this, props));
    _this.state = {};
    return _this;
  }
  /**
   * Gets items with breadcrumbs enabled, user capabilities, and reading settings.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SwitcherControler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default()({
        path: '/beans/v1/layout-options'
      }).then(function (types) {
        _this2.setState({
          layoutOptions: types
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.layoutOptions) {
        var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Loading %s...', 'beans'), 'test');
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Spinner"], null));
      }

      var items = Object.keys(this.state.layoutOptions).map(function (key) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          isSelected: _this3.props.currentLayout == key ? 1 : 0,
          label: key,
          value: key,
          updateFunction: _this3.props.onChange
        });
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelRow"], {
        className: "layout-switcher"
      }, items);
    }
  }]);

  return SwitcherControler;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/plugins/layout-meta/index.js":
/*!******************************************!*\
  !*** ./src/plugins/layout-meta/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_new_meta_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/new-meta.js */ "./src/lib/new-meta.js");
/* harmony import */ var _lib_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/layout */ "./src/lib/layout/index.js");
/* harmony import */ var _SwitcherControls_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SwitcherControls.js */ "./src/plugins/layout-meta/SwitcherControls.js");








/**
 * Selects
 * Image panel. Unchecked by default.
 *
 * If checked and the post is updated or published,
 * `_beans_hide_singular_image` is set to true in post meta.
 *
 * @since  2.0.0
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





var BeansDefaultLayout =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BeansDefaultLayout, _Component);

  function BeansDefaultLayout() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BeansDefaultLayout);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BeansDefaultLayout).apply(this, arguments));
    _this.getCurrentDefaultLayout = _this.getCurrentDefaultLayout.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.fetchCurrentLayout = _this.fetchCurrentLayout.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    _this.fetchCurrentLayout();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BeansDefaultLayout, [{
    key: "fetchCurrentLayout",
    value: function fetchCurrentLayout() {
      var _this2 = this;

      wp.apiFetch({
        path: '/beans/v1/layout-default-selected',
        method: 'GET'
      }).then(function (types) {
        _this2.setState({
          layoutSelected: types
        });
      });
    }
  }, {
    key: "getCurrentDefaultLayout",
    value: function getCurrentDefaultLayout() {
      if (this.state && this.state.layoutSelected && this.props && this.props.currentPostType) {
        return this.state.layoutSelected[this.props.currentPostType];
      }

      return 'c';
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Fill"], {
        name: "BeansSidebar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        initialOpen: true,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Layouts', 'tm-beans'),
        icon: Object(_lib_layout__WEBPACK_IMPORTED_MODULE_13__["getSmallIconFromLayout"])(this.props.selected_meta_layout)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_SwitcherControls_js__WEBPACK_IMPORTED_MODULE_14__["SwitcherControler"], {
        currentLayout: this.props.selected_meta_layout,
        onLayoutChange: this.fetchCurrentLayout,
        onChange: this.props.onChange
      }))));
    }
  }]);

  return BeansDefaultLayout;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select) {
  return {
    selected_meta_layout: select('core/editor').getEditedPostAttribute('meta')['beans_layout']
  };
});
var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withDispatch"])(function (dispatch) {
  return {
    onChange: function onChange(layout) {
      dispatch('core/editor').editPost({
        meta: Object(_lib_new_meta_js__WEBPACK_IMPORTED_MODULE_12__["newMeta"])('beans_layout', layout)
      });
    }
  };
}); // Retrieves meta from the Block Editor Redux store (withSelect) to set initial checkbox state.
// Persists it to the Redux store on change (withDispatch).
// Changes are only stored in the WordPress database when the post is updated.

var render = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__["compose"])([applyWithSelect, applyWithDispatch])(BeansDefaultLayout);
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_10__["registerPlugin"])('beans-layout-meta-controller', {
  render: render
});

/***/ }),

/***/ "./src/plugins/remove_action/index.js":
/*!********************************************!*\
  !*** ./src/plugins/remove_action/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _remove_action_toggle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remove-action-toggle.js */ "./src/plugins/remove_action/remove-action-toggle.js");
/* harmony import */ var _lib_new_meta_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/new-meta.js */ "./src/lib/new-meta.js");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggle */ "./src/plugins/remove_action/toggle.js");


/**
 * Adds a “hide featured image” checkbox to Beans Block Editor sidebar in an
 * Image panel. Unchecked by default.
 *
 * If checked and the post is updated or published,
 * `_beans_hide_singular_image` is set to true in post meta.
 *
 * @since  2.0.0
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




/**
 * Checkbox component for the hide title option.
 *
 * @param {Object} props Component properties.
 * @return {Object} BeansRemoveActionComponent.
 */

function BeansRemoveActionComponent() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Fill"], {
    name: "BeansSidebar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    initialOpen: true,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Action', 'beans')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "If Option is enabled that action will be removed"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_remove_action_toggle_js__WEBPACK_IMPORTED_MODULE_6__["BeansRemoveActionToggle"], null))));
} // Retrieves meta from the Block Editor Redux store (withSelect) to set initial checkbox state.
// Persists it to the Redux store on change (withDispatch).
// Changes are only stored in the WordPress database when the post is updated.


var render = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])()(BeansRemoveActionComponent);
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__["registerPlugin"])('beans-remove-action-toggle', {
  render: render
});

/***/ }),

/***/ "./src/plugins/remove_action/remove-action-toggle.js":
/*!***********************************************************!*\
  !*** ./src/plugins/remove_action/remove-action-toggle.js ***!
  \***********************************************************/
/*! exports provided: BeansRemoveActionToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeansRemoveActionToggle", function() { return BeansRemoveActionToggle; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_new_meta__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/new-meta */ "./src/lib/new-meta.js");








/**
 * Provides a Remove Action interface for some of the actions that can be removed.
 *
 * @since   2.0.0
 * @package Beans\JS
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */








var RemoveActionToggle =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RemoveActionToggle, _Component);

  function RemoveActionToggle(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RemoveActionToggle);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RemoveActionToggle).call(this, props));
    _this.getRemoveActionValue = _this.getRemoveActionValue.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {};
    return _this;
  }
  /**
   * Gets items with breadcrumbs enabled, user capabilities, and reading settings.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RemoveActionToggle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_11___default()({
        path: '/beans/v1/remove-actions-options'
      }).then(function (types) {
        _this2.setState({
          removeActionsOptions: types
        });
      });
    }
  }, {
    key: "getRemoveActionValue",
    value: function getRemoveActionValue(key) {
      if (!this.props.beansRemoveActions || 0 === this.props.beansRemoveActions.length) {
        return 0;
      }

      var obj = JSON.parse(this.props.beansRemoveActions);

      if (!obj[key]) {
        return 0;
      }

      return obj[key];
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.removeActionsOptions) {
        var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Disabling breadcrumbs on %s...', 'beans'), 'test');
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", null, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Spinner"], null));
      }

      var items = Object.keys(this.state.removeActionsOptions).map(function (key) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
          label: 1 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])(_this3.state.removeActionsOptions[key], 'tm-beans') : undefined,
          checked: _this3.getRemoveActionValue(key),
          onChange: function onChange() {
            return _this3.props.onUpdate(_this3.props.beansRemoveActions, key, !_this3.getRemoveActionValue(key));
          }
        }));
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, items);
    }
  }]);

  return RemoveActionToggle;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice,
    onUpdate: function onUpdate(beansRemoveActions, key, value) {
      var obj;

      if (!beansRemoveActions || beansRemoveActions.lenght === 0) {
        // Empty object
        obj = {};
        obj[key] = value;
      } else {
        obj = JSON.parse(beansRemoveActions);
        obj[key] = value;
      }

      var myJSON = JSON.stringify(obj);
      dispatch('core/editor').editPost({
        meta: Object(_lib_new_meta__WEBPACK_IMPORTED_MODULE_12__["newMeta"])('_beans_remove_actions', myJSON)
      });
    }
  };
}); // Get current post type, label, and post ID from the Block Editor Redux store.

var BeansRemoveActionToggle = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function () {
  return {
    beansRemoveActions: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/editor').getEditedPostAttribute('meta')._beans_remove_actions
  };
}), applyWithDispatch])(RemoveActionToggle);

/***/ }),

/***/ "./src/plugins/remove_action/toggle.js":
/*!*********************************************!*\
  !*** ./src/plugins/remove_action/toggle.js ***!
  \*********************************************/
/*! exports provided: MyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponent", function() { return MyComponent; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;

var MyComponentBase = function MyComponentBase(_ref) {
  var createNotice = _ref.createNotice,
      blocks = _ref.blocks,
      className = _ref.className;

  var triggerNotice = function triggerNotice(type) {
    createNotice(type, __('Hello, Notices Data!', 'gwg'));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Functional Component', 'gwg')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    onClick: function onClick() {
      return triggerNotice('info');
    }
  }, "Trigger info notice")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    onClick: function onClick() {
      return triggerNotice('error');
    }
  }, "Trigger error notice")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    onClick: function onClick() {
      return triggerNotice('warning');
    }
  }, "Trigger warning notice")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    onClick: function onClick() {
      return triggerNotice('success');
    }
  }, "Trigger success notice"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, blocks.map(function (block) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, block.name);
  })));
}; // const rootURL = "http://my-wordpress-site/wp-json/";
// apiFetch.use( apiFetch.createRootURLMiddleware( rootURL ) );
// const applyComponentDidMount = componentDidMount() => {
// 	apiFetch( { path: '/beans/v1/remove-actions-options' } ).then( ( types ) => {
// 		console.log(types)
// 		this.setState( { removeActionsOptions: types } );
// 	} );
//
// 	apiFetch( { path: '/beans/v1/breadcrumbs' } ).then( ( types ) => {
// 		this.setState( { typesWithBreadcrumbsEnabled: types } );
// 	} );
//
// 	apiFetch( { path: '/wp/v2/users/me?context=edit' } ).then( ( user ) => {
// 		if ( user.capabilities.edit_theme_options ) {
// 			this.setState( { currentUserCanEditThemeOptions: user.capabilities.edit_theme_options } );
// 		}
// 	} );
//
// }


var applyWithSelect = withSelect(function (select) {
  var _select = select('core/editor'),
      getBlocks = _select.getBlocks;

  return {
    blocks: getBlocks()
  };
});
var applyWithDispatch = withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}); // const applyComponentDidMount = componentDidMount( props => {
// 	console.log(this.props.name, ": componentDidMount()");
// });

var MyComponent = compose(applyWithSelect, applyWithDispatch)(MyComponentBase);

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _beans_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beans-icons */ "./src/beans-icons.js");


/**
 * Adds the Beans Sidebar to the Block Editor.
 *
 * Exposes a 'BeansSidebar' slot. Other components can use portal rendering
 * to appear inside the Beans sidebar by wrapping themselves in a Fill
 * component. First, import the Fill component:
 *
 * `import { Fill } from '@wordpress/components';`
 *
 * Then wrap your own component in a Fill component:
 *
 * `<Fill name="BeansSidebar">I'm in the Beans sidebar</Fill>`
 *
 * @since   2.0.0
 *
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

 // Beans Sidebar ComponentPlugin

var render = function render() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginSidebarMoreMenuItem"], {
    target: "beans-sidebar",
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_beans_icons__WEBPACK_IMPORTED_MODULE_4__["BeansIcon"], null)
  }, "Beans"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginSidebar"], {
    name: "beans-sidebar",
    title: "Beans",
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_beans_icons__WEBPACK_IMPORTED_MODULE_4__["BeansIcon"], null)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Slot"], {
    name: "BeansSidebar"
  })));
};

Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__["registerPlugin"])('beans-sidebar', {
  render: render,
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_beans_icons__WEBPACK_IMPORTED_MODULE_4__["BeansIconSmall"], null)
});

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!*******************************************!*\
  !*** external {"this":["wp","editPost"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!******************************************!*\
  !*** external {"this":["wp","plugins"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map