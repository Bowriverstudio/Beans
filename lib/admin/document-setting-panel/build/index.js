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

/***/ "./src/components/BreadCrumbsControls.js":
/*!***********************************************!*\
  !*** ./src/components/BreadCrumbsControls.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Hide breadcrumbs: true if breadcrumbs should be hidden, false or empty otherwise.
 * _beans_hide_breadcrumbs is registered via beans_register_block_post_meta
 *
 * Development Notes:
 * wp.data.select('core/editor').getEditedPostAttribute('meta')['_beans_hide_breadcrumbs']
 *
 *
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
var withSelect = wp.data.withSelect;

var BreadCrumbsControls = function BreadCrumbsControls(_ref) {
  var _beans_hide_breadcrumbs = _ref._beans_hide_breadcrumbs;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __("Toggle Control", "tm-beans"),
    checked: _beans_hide_breadcrumbs // onChange={toggleControl => setAttributes({ toggleControl })}

  })));
};

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select) {
  return {
    _beans_hide_breadcrumbs: select('core/editor').getEditedPostAttribute('meta')['_beans_hide_breadcrumbs']
  };
})(BreadCrumbsControls));

/***/ }),

/***/ "./src/components/SwitcherButton.js":
/*!******************************************!*\
  !*** ./src/components/SwitcherButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);

var Icon = wp.components.Icon; // const { withDispatch, select } = wp.data;



var SwitcherButton = function SwitcherButton(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      alt = _ref.alt,
      value = _ref.value,
      selected_beans_layout = _ref.selected_beans_layout,
      text_metafield = _ref.text_metafield,
      layout = _ref.layout,
      blockIds = _ref.blockIds,
      removeBlocks = _ref.removeBlocks,
      resetBlocks = _ref.resetBlocks,
      insertBlock = _ref.insertBlock,
      onMetaFieldChange = _ref.onMetaFieldChange;
  var className = selected_beans_layout == value ? 'selected' : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: className,
    onClick: function onClick() {
      // removeBlocks(blockIds);
      // resetBlocks([]);
      // insertBlocks(layout);
      onMetaFieldChange(value);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    icon: icon
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, label));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch("core/editor"),
      removeBlocks = _dispatch.removeBlocks,
      resetBlocks = _dispatch.resetBlocks,
      insertBlocks = _dispatch.insertBlocks,
      insertBlock = _dispatch.insertBlock;

  return {
    onMetaFieldChange: function onMetaFieldChange(value) {
      dispatch('core/editor').editPost({
        meta: {
          beans_layout: value
        }
      });
    },
    removeBlocks: removeBlocks,
    resetBlocks: resetBlocks,
    insertBlock: insertBlock,
    insertBlocks: insertBlocks
  };
})(SwitcherButton)); // PluginMetaFields = withDispatch(
// 	(dispatch) => {
// 		return {
// 			onMetaFieldChange: (value) => {
// 				dispatch('core/editor').editPost({meta: {beans_layout: value}})
// 			}
// 		}
// 	}
// )(PluginMetaFields);

/***/ }),

/***/ "./src/components/SwitcherControls.js":
/*!********************************************!*\
  !*** ./src/components/SwitcherControls.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SwitcherButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitcherButton */ "./src/components/SwitcherButton.js");

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var withSelect = wp.data.withSelect;


var SwitcherControls = function SwitcherControls(_ref) {
  var icons = _ref.icons,
      selected_beans_layout = _ref.selected_beans_layout;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, {
    className: "layout-switcher"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("Default", "tm-beans"),
    icon: icons.beans,
    value: "",
    alt: __('Default', 'tm-beans'),
    screen_reader_text: __('Default.', 'tm-beans'),
    selected_beans_layout: selected_beans_layout //						@TODO - Load default icon from get_options
    //						@TODO - change to a loop

  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("c", "tm-beans"),
    icon: icons.c,
    value: "c",
    alt: __('Full-Width Content Layout', 'tm-beans'),
    screen_reader_text: __('Option for the Full-Width Content Layout.', 'tm-beans'),
    selected_beans_layout: selected_beans_layout
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("c_sp", "tm-beans"),
    icon: icons.cs,
    value: "c_sp",
    alt: __('Content and Primary Sidebar Layout', 'tm-beans'),
    screen_reader_text: __('Option for the Content and Primary Sidebar Layout.', 'tm-beans'),
    selected_beans_layout: selected_beans_layout
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("sp_c", "tm-beans"),
    icon: icons.sc,
    value: "sp_c",
    alt: __('Primary Sidebar and Content Layout', 'tm-beans'),
    screen_reader_text: __('Option for the Primary Sidebar and Content Layout.', 'tm-beans'),
    selected_beans_layout: selected_beans_layout
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("c_sp_ss", "tm-beans"),
    icon: icons.css,
    value: "c_sp_ss",
    alt: __('Content, Primary Sidebar and Secondary Sidebar Layout', 'tm-beans'),
    screen_reader_text: __('Option for the Content, Primary Sidebar and Secondary Sidebar Layouts.', 'tm-beans'),
    selected_beans_layout: selected_beans_layout
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("sp_ss_c", "tm-beans"),
    icon: icons.ssc,
    value: "sp_ss_c",
    alt: __('Primary Sidebar, Secondary Sidebar and Content Layout', 'tm-beans'),
    screen_reader_text: __('Option for the Primary Sidebar, Secondary Sidebar and Content Layout.', 'tm-beans'),
    selected_beans_layout: selected_beans_layout
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SwitcherButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("sp_c_ss", "tm-beans"),
    icon: icons.scs,
    value: "sp_c_ss",
    alt: __('Primary Sidebar, Content and Secondary Sidebar Layout', 'tm-beans'),
    screen_reader_text: __('Option for the Primary Sidebar, Content and Secondary Sidebar Layout.', 'tm-beans'),
    selected_beans_layout: selected_beans_layout
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select) {
  return {
    selected_beans_layout: select('core/editor').getEditedPostAttribute('meta')['beans_layout']
  };
})(SwitcherControls));

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icons = {};
icons.beans = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
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
icons.c = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
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
})));
icons.cs = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
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
})));
icons.css = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
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
})));
icons.sc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
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
icons.sc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
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
icons.ssc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
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
icons.ssc = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  fillRule: "evenodd",
  stroke: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#fcfcfc",
  d: "M0 65v4.2h41.511c45.641 0 42.561-.169 43.891 2.404.908 1.757.908 255.035 0 256.792-1.33 2.573 1.75 2.404-43.891 2.404H0v8.4h400v-8.4H191.92l-1.36-1.36-1.36-1.36V71.92l1.36-1.36 1.36-1.36H400v-8.4H0V65m179.44 5.56l1.36 1.36v256.16l-1.36 1.36-1.36 1.36h-40.551c-44.582 0-41.602.167-42.931-2.404-.908-1.757-.908-255.035 0-256.792 1.329-2.571-1.651-2.404 42.931-2.404h40.551l1.36 1.36"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#d4d4d4",
  d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h41.32c31.604 0 41.433-.113 41.8-.48.699-.699.699-255.141 0-255.84-.367-.367-10.196-.48-41.8-.48H0V200M96.88 72.08c-.699.699-.699 255.141 0 255.84.696.696 80.344.696 81.04 0 .699-.699.699-255.141 0-255.84-.696-.696-80.344-.696-81.04 0m95.2 0c-.699.699-.699 255.141 0 255.84.371.371 24.062.48 104.2.48H400V71.6H296.28c-80.138 0-103.829.109-104.2.48M0 370.8V400h400v-58.4H0v29.2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#dcece8",
  d: "M0 59.4v1h400v-2H0v1m0 11.2v1h41.32c31.604 0 41.433.113 41.8.48.699.699.699 255.141 0 255.84-.367.367-10.196.48-41.8.48H0v2H83.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m95.641.414L94.4 72.428v255.144l1.241 1.414 1.242 1.414h81.179l1.169-1.169 1.169-1.169V71.938l-1.169-1.169-1.169-1.169H96.883l-1.242 1.414m95.128-.245l-1.169 1.169v256.124l1.169 1.169 1.169 1.169H400v-2H296.28c-80.138 0-103.829-.109-104.2-.48-.699-.699-.699-255.141 0-255.84.371-.371 24.062-.48 104.2-.48H400v-2H191.938l-1.169 1.169M177.92 72.08c.699.699.699 255.141 0 255.84-.696.696-80.344.696-81.04 0-.699-.699-.699-255.141 0-255.84.696-.696 80.344-.696 81.04 0M0 340.6v1h400v-2H0v1"
})));
icons.scs = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40px",
  height: "40px",
  version: "1.1",
  viewBox: "0 0 400 400"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
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
})));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./src/icons.js");
/* harmony import */ var _components_SwitcherControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SwitcherControls */ "./src/components/SwitcherControls.js");
/* harmony import */ var _components_BreadCrumbsControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BreadCrumbsControls */ "./src/components/BreadCrumbsControls.js");










var PluginMetaFields = function PluginMetaFields(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Layout", "tm-beans"),
    intialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_SwitcherControls__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icons: _icons__WEBPACK_IMPORTED_MODULE_6__["default"]
  })));
};

PluginMetaFields = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  return {
    onMetaFieldChange: function onMetaFieldChange(value) {
      dispatch('core/editor').editPost({
        meta: {
          beans_layout: value
        }
      });
    }
  };
})(PluginMetaFields);
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__["registerPlugin"])('beans-sidebar', {
  icon: _icons__WEBPACK_IMPORTED_MODULE_6__["default"].beans,
  render: function render() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginSidebar"], {
      name: "beans-sidebar",
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Beans', 'tm-beans')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginMetaFields, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_BreadCrumbsControls__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
  }
});

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

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