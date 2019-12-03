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
/* harmony import */ var _plugins_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/breadcrumbs */ "./src/plugins/breadcrumbs/index.js");
/* harmony import */ var _plugins_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/image */ "./src/plugins/image/index.js");


 // import { registerPlugin } from "@wordpress/plugins";
// import { PluginSidebar } from "@wordpress/edit-post";
// import { __ } from "@wordpress/i18n";
// import { PanelBody, ToggleControl } from "@wordpress/components";
// import { withDispatch } from "@wordpress/data";
// import icons from "./icons";
// import SwitcherControls from "./components/SwitcherControls";
// import BreadCrumbsControls from "./components/BreadCrumbsControls";
//
// let PluginMetaFields = (props) => {
//
// 	return (
// 		<>
// 			<PanelBody
// 				title={__("Layout", "tm-beans")}
// 				intialOpen={ true }
// 			>
// 				<SwitcherControls icons={icons}  />
//
// 			</PanelBody>
// 		</>
// 	)
// }
//
// PluginMetaFields = withDispatch(
// 	(dispatch) => {
// 		return {
// 			onMetaFieldChange: (value) => {
// 				dispatch('core/editor').editPost({meta: {beans_layout: value}})
// 			}
// 		}
// 	}
// )(PluginMetaFields);
//
// registerPlugin( 'beans-sidebar', {
// 	icon: icons.beans,
// 	render: () => {
// 		return (
// 			<>
// 				<PluginSidebar
// 					name="beans-sidebar"
// 					title={__('Beans', 'tm-beans')}
// 				>
//
// 					<PluginMetaFields />
// 					<BreadCrumbsControls />
//
// 				</PluginSidebar>
//
// 			</>
// 		)
// 	}
// })

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

/***/ "./src/plugins/breadcrumbs/breadcrumbs-toggle-info.js":
/*!************************************************************!*\
  !*** ./src/plugins/breadcrumbs/breadcrumbs-toggle-info.js ***!
  \************************************************************/
/*! exports provided: BeansBreadcrumbsToggleInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeansBreadcrumbsToggleInfo", function() { return BeansBreadcrumbsToggleInfo; });
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13__);









/**
 * Provides a BeansBreadcrumbsToggleInfo component that displays the state
 * of the global “breadcrumbs” Customzier checkbox for the current page type.
 *
 * Offers a link to either disable or enable breadcrumbs site-wide for
 * the current page type. The goal is to reduce the need to leave the editor
 * and visit the Customizer to turn breadcrumbs on or off.
 *
 * @since   3.1.0
 * @package Beans\JS
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */








var BreadcrumbsToggleInfo =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(BreadcrumbsToggleInfo, _Component);

  function BreadcrumbsToggleInfo(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BreadcrumbsToggleInfo);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BreadcrumbsToggleInfo).call(this, props)); // Enable access to this.props inside `updateBreadcrumbsSetting`.

    _this.updateBreadcrumbsSetting = _this.updateBreadcrumbsSetting.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.state = {
      typesWithBreadcrumbsEnabled: [],
      isStaticHomepage: false,
      isPostsPage: false,
      currentUserCanEditThemeOptions: false,
      updating: false
    };
    return _this;
  }
  /**
   * Gets items with breadcrumbs enabled, user capabilities, and reading settings.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BreadcrumbsToggleInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13___default()({
        path: '/beans/v1/breadcrumbs'
      }).then(function (types) {
        _this2.setState({
          typesWithBreadcrumbsEnabled: types
        });
      });
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13___default()({
        path: '/wp/v2/users/me?context=edit'
      }).then(function (user) {
        if (user.capabilities.edit_theme_options) {
          _this2.setState({
            currentUserCanEditThemeOptions: user.capabilities.edit_theme_options
          });
        }
      }); // apiFetch( { path: '/beans/v1/reading-settings' } ).then( ( settings ) => {
      // 	if (
      // 		settings.show_on_front === 'page' &&
      // 		settings.page_on_front === this.props.currentPostID
      // 	) {
      // 		this.setState( { isStaticHomepage: true } );
      // 	}
      //
      // 	if (
      // 		settings.show_on_front === 'posts' &&
      // 		settings.page_for_posts === this.props.currentPostID
      // 	) {
      // 		this.setState( { isPostsPage: true } );
      // 	}
      // } );
    }
    /**
     * Gets the label for the current page.
     *
     * @return {string} The label.
     */

  }, {
    key: "getPageLabel",
    value: function getPageLabel() {
      if (this.state.isStaticHomepage) {
        /* translators: should match the “Homepage” label from Settings -> Reading. Note lowercase t in 'the'. */
        return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('the Homepage', 'beans');
      }

      if (this.state.isPostsPage) {
        /* translators: should match the “Posts Page ” label from Settings -> Reading. Note lowercase t in 'the'. */
        return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('the Posts Page', 'beans');
      }

      return this.props.currentPostTypeLabel;
    }
    /**
     * Determines if status text should be displayed.
     *
     * We only show text for posts, pages, and static home and posts pages.
     *
     * @return {boolean} True if status text should not be displayed.
     */

  }, {
    key: "breadcrumbStatusTextIsNotSupported",
    value: function breadcrumbStatusTextIsNotSupported() {
      return !this.state.currentUserCanEditThemeOptions && !this.state.isStaticHomepage && !this.state.isPostsPage && !['post', 'page'].includes(this.props.currentPostType);
    }
    /**
     * Gives current state of the “show breadcrumbs” Beans settings
     * for the current page type the user is editing.
     *
     * @return {boolean} True if current page type has breadcrumbs disabled.
     */

  }, {
    key: "postTypeHasBreadcrumbsDisabled",
    value: function postTypeHasBreadcrumbsDisabled() {
      if (this.props.currentPostType === 'post') {
        return !this.state.typesWithBreadcrumbsEnabled.includes('single');
      }

      if (this.props.currentPostType === 'page') {
        return !this.state.typesWithBreadcrumbsEnabled.includes('page');
      }

      return '';
    }
    /**
     * Get the Beans breadcrumb option name to update based on the current page.
     *
     * @return {string} Beans breadcrumbs setting value.
     */

  }, {
    key: "breadcrumbsValueToUpdate",
    value: function breadcrumbsValueToUpdate() {
      if (this.props.currentPostType === 'post') {
        return 'single';
      }

      if (this.props.currentPostType === 'page') {
        return 'page';
      }

      return '';
    }
    /**
     * Sets the “show breadcrumbs on (post-type)” setting to `newValue`
     * for the current post type.
     *
     * @param {number} newValue 1 to turn singular/breadcrumbs for the
     *                          current post type on. 0 to turn them off.
     *
     * @return {boolean} False to prevent default button actions.
     */

  }, {
    key: "updateBreadcrumbsSetting",
    value: function updateBreadcrumbsSetting(newValue) {
      var _this3 = this;

      this.setState({
        updating: true
      });
      var breadcrumbsOption = this.breadcrumbsValueToUpdate();

      var data = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, breadcrumbsOption, newValue);

      var putRequest = {
        path: '/beans/v1/breadcrumbs',
        method: 'PUT',
        data: data
      };
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13___default()(putRequest).then(function (types) {
        _this3.setState({
          updating: false,
          typesWithBreadcrumbsEnabled: types
        });

        var pageLabel = _this3.getPageLabel();
        /* translators: %s: the current page label, such as “Pages” or “the Homepage”. */


        var statusAnnouncement = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Breadcrumbs now visible on %s.', 'beans'), pageLabel);

        if (_this3.postTypeHasBreadcrumbsDisabled()) {
          /* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
          statusAnnouncement = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Breadcrumbs are hidden on %s.', 'beans'), pageLabel);
        }

        Object(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_12__["speak"])(statusAnnouncement, 'assertive');
      });
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.breadcrumbStatusTextIsNotSupported()) {
        return '';
      }

      var pageLabel = this.getPageLabel();

      if (this.state.updating) {
        /* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
        var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Disabling breadcrumbs on %s...', 'beans'), pageLabel);

        if (this.postTypeHasBreadcrumbsDisabled()) {
          /* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
          label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Enabling breadcrumbs on %s...', 'beans'), pageLabel);
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", null, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null));
      }

      var textClass = 'beans-sidebar-label-enabled';
      /* translators: %s: the current page label, such as “Pages” or “the Homepage”. */

      var statusText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Breadcrumbs are enabled on %s. ', 'beans'), pageLabel);
      /* translators: %s: the current page label, such as “Pages” or “the Homepage”. */

      var ariaText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Disable breadcrumbs on %s?'), pageLabel);

      var linkText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Disable breadcrumbs.', 'beans');

      var newBreadcrumbsState = 0; // Turn breadcrumbs off.

      if (this.postTypeHasBreadcrumbsDisabled()) {
        textClass = 'beans-sidebar-label-disabled';
        /* translators: %s: the current page label, such as “Pages” or “the Homepage”. */

        statusText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Breadcrumbs are disabled on %s.', 'beans'), pageLabel);
        /* translators: %s: the current page label, such as “Pages” or “the Homepage”. */

        ariaText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Enable breadcrumbs on %s'), pageLabel);
        linkText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Enable breadcrumbs.', 'beans');
        newBreadcrumbsState = 1; // Turn breadcrumbs on.
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", {
        className: textClass
      }, statusText + ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("button", {
        className: "beans-sidebar-text-button",
        onClick: function onClick() {
          return _this4.updateBreadcrumbsSetting(newBreadcrumbsState);
        },
        "aria-label": ariaText
      }, linkText));
    }
  }]);

  return BreadcrumbsToggleInfo;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]); // Get current post type, label, and post ID from the Block Editor Redux store.


var BeansBreadcrumbsToggleInfo = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function () {
  var postType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["select"])('core/editor').getCurrentPostType();
  return {
    currentPostType: postType,
    currentPostTypeLabel: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["select"])('core').getPostType(postType).name || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Entries', 'beans'),
    currentPostID: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["select"])('core/editor').getCurrentPostId()
  };
})])(BreadcrumbsToggleInfo);

/***/ }),

/***/ "./src/plugins/breadcrumbs/index.js":
/*!******************************************!*\
  !*** ./src/plugins/breadcrumbs/index.js ***!
  \******************************************/
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
/* harmony import */ var _breadcrumbs_toggle_info_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumbs-toggle-info.js */ "./src/plugins/breadcrumbs/breadcrumbs-toggle-info.js");
/* harmony import */ var _lib_new_meta_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/new-meta.js */ "./src/lib/new-meta.js");


/**
 * Adds a “hide breadcrumbs” checkbox to Beans Block Editor sidebar in a
 * Breadcrumbs panel. Unchecked by default.
 *
 * If checked and the post is updated or published, `_beans_hide_breadcrumbs`
 * is set to true in post meta.
 *
 * To disable the checkbox, use the PHP `beans_breadcrumbs_toggle_enabled`
 * TODO - Need to breakup update webpack.
 * TODO - Make this label dynamic.
 *
 * filter: `add_filter( 'beans_breadcrumbs_toggle_enabled', '__return_false' );`.
 *
 * @since   2.0.0
 * @package Beans\JS
 * @author  StudioPress & Maurice Tadros
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



/**
 * Checkbox component for the hide breadcrumbs option.
 *
 * @param {Object} props Component properties.
 * @return {Object} hideBreadcrumbsComponent
 */

function beansHideBreadcrumbsComponent(_ref) {
  var _ref$hideBreadcrumbs = _ref.hideBreadcrumbs,
      hideBreadcrumbs = _ref$hideBreadcrumbs === void 0 ? false : _ref$hideBreadcrumbs,
      onUpdate = _ref.onUpdate;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Fill"], {
    name: "BeansSidebar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    initialOpen: true,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Breadcrumbs', 'tm-beans')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Breadcrumbs will not be shown if either setting below is active.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: hideBreadcrumbs ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Breadcrumbs are hidden', 'tm-beans') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Breadcrumbs are shown', 'tm-beans'),
    checked: !!hideBreadcrumbs,
    onChange: function onChange() {
      return onUpdate(!hideBreadcrumbs);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_breadcrumbs_toggle_info_js__WEBPACK_IMPORTED_MODULE_6__["BeansBreadcrumbsToggleInfo"], null)))));
} // Retrieves meta from the Block Editor Redux store (withSelect) to set initial checkbox state.
// Persists it to the Redux store on change (withDispatch).
// Changes are only stored in the WordPress database when the post is updated.


var render = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function () {
  return {
    hideBreadcrumbs: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').getEditedPostAttribute('meta')._beans_hide_breadcrumbs
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    onUpdate: function onUpdate(hideBreadcrumbs) {
      dispatch('core/editor').editPost({
        meta: Object(_lib_new_meta_js__WEBPACK_IMPORTED_MODULE_7__["newMeta"])('_beans_hide_breadcrumbs', !!hideBreadcrumbs)
      });
    }
  };
})])(beansHideBreadcrumbsComponent);
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__["registerPlugin"])('beans-breadcrumbs-toggle', {
  render: render
});

/***/ }),

/***/ "./src/plugins/image/index.js":
/*!************************************!*\
  !*** ./src/plugins/image/index.js ***!
  \************************************/
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
/* harmony import */ var _lib_new_meta_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/new-meta.js */ "./src/lib/new-meta.js");


/**
 * Adds a “hide featured image” checkbox to Beans Block Editor sidebar in an
 * Image panel. Unchecked by default.
 *
 * If checked and the post is updated or published,
 * `_beans_hide_singular_image` is set to true in post meta.
 *
 * @since  2.0.0
 * @package Beans\JS
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */
// import { BeansImageToggleInfo } from '../components/image-toggle-info.js';


/**
 * Checkbox component for the hide title option.
 *
 * @param {Object} props Component properties.
 * @return {Object} BeansHideFeaturedImageComponent.
 */

function BeansHideFeaturedImageComponent(_ref) {
  var _ref$hideFeaturedImag = _ref.hideFeaturedImage,
      hideFeaturedImage = _ref$hideFeaturedImag === void 0 ? false : _ref$hideFeaturedImag,
      onUpdate = _ref.onUpdate;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Fill"], {
    name: "BeansSidebar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    initialOpen: true,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Images', 'beans')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: hideFeaturedImage ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Featured Image is hidden', 'tm-beans') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Featured Image are shown', 'tm-beans'),
    checked: !!hideFeaturedImage,
    onChange: function onChange() {
      return onUpdate(!hideFeaturedImage);
    }
  })))));
} // Retrieves meta from the Block Editor Redux store (withSelect) to set initial checkbox state.
// Persists it to the Redux store on change (withDispatch).
// Changes are only stored in the WordPress database when the post is updated.


var render = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function () {
  return {
    hideFeaturedImage: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').getEditedPostAttribute('meta')._beans_hide_singular_image
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch) {
  return {
    onUpdate: function onUpdate(hideFeaturedImage) {
      dispatch('core/editor').editPost({
        meta: Object(_lib_new_meta_js__WEBPACK_IMPORTED_MODULE_6__["newMeta"])('_beans_hide_singular_image', !!hideFeaturedImage)
      });
    }
  };
})])(BeansHideFeaturedImageComponent);
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__["registerPlugin"])('beans-image-toggle', {
  render: render
});

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
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_beans_icons__WEBPACK_IMPORTED_MODULE_4__["BeansIconSmall"], null)
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

/***/ "@wordpress/a11y":
/*!***************************************!*\
  !*** external {"this":["wp","a11y"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["a11y"]; }());

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