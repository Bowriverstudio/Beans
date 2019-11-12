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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 216);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_toc__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beans__ = __webpack_require__(224);
/**
 * Import Sidebar Plugins
 */



// import "./03-layout-switcher";


/***/ }),

/***/ 217:
/***/ (function(module, exports) {

/**
 * Get dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;


var PluginSidebarDemo = function PluginSidebarDemo(props) {
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { target: "jsforwpadvgb-demo" },
      __("Plugin Sidebar Demo", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwpadvgb-demo",
        title: __("Plugin Sidebar Demo", "jsforwpadvblocks")
      },
      wp.element.createElement(
        PanelBody,
        { title: __("Sidebar Header", "jsforwpadvblocks"), opened: true },
        wp.element.createElement(
          PanelRow,
          null,
          wp.element.createElement(
            "p",
            null,
            __("Plugin Sidebar Demo", "jsforwpadvblocks")
          )
        )
      )
    )
  );
};

registerPlugin("jsforwpadvgb-demo", {
  icon: "admin-plugins",
  render: PluginSidebarDemo
});

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlockList__ = __webpack_require__(221);
/**
 * Get dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;







var TableOfContents = function TableOfContents(props) {
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { target: "jsforwpadvgb-toc" },
      __("Table of Contents", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwpadvgb-toc",
        title: __("Table of Contents", "jsforwpadvblocks")
      },
      wp.element.createElement(
        PanelBody,
        null,
        wp.element.createElement(
          PanelRow,
          null,
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockList__["a" /* default */], null)
        )
      )
    )
  );
};

registerPlugin("jsforwpadvgb-toc", {
  icon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */],
  render: TableOfContents
});

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icon = wp.element.createElement(
  "svg",
  {
    width: "20px",
    height: "20px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "m49.445 60.777h31c0.89063 0 1.668-0.66797 1.668-1.668l-0.003906-12c0-0.89062-0.77734-1.668-1.668-1.668l-30.996 0.003906c-0.89062 0-1.668 0.77734-1.668 1.668v6.7773h-12.223v-24.441c0-0.10938 0-0.22266-0.10938-0.33203h15.109c0.89062 0 1.668-0.66797 1.668-1.668v-12.004c0-0.89062-0.77734-1.668-1.668-1.668h-31c-0.89063 0-1.668 0.77734-1.668 1.668v12c0 0.89063 0.77734 1.668 1.668 1.668h15c-0.10938 0.10938-0.10938 0.21875-0.10938 0.33203v49.445c0 0.33203 0.22266 0.55469 0.55469 0.55469h12.777v5.1094c0 0.89062 0.77734 1.668 1.668 1.668h31c0.89063 0 1.668-0.77734 1.668-1.668l-0.003906-12c0-0.89063-0.77734-1.668-1.668-1.668l-30.996 0.003906c-0.89062 0-1.668 0.77734-1.668 1.668v5.7773l-12.223-0.003907v-23.332h12.223v4.1094c0 0.89062 0.77734 1.668 1.668 1.668zm-30.445-33.332v-12c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469h-31c-0.33203 0-0.55469-0.22266-0.55469-0.55469zm29.891 45.109c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469h-31c-0.33203 0-0.55469-0.22266-0.55469-0.55469zm0-25.445c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469l-31 0.003907c-0.33203 0-0.55469-0.22266-0.55469-0.55469z" }),
  wp.element.createElement("path", { d: "m52.891 53.668h24c0.33203 0 0.55469-0.22266 0.55469-0.55469s-0.22266-0.55469-0.55469-0.55469l-24-0.003906c-0.33203 0-0.55469 0.22266-0.55469 0.55469-0.003907 0.33594 0.21875 0.55859 0.55469 0.55859z" }),
  wp.element.createElement("path", { d: "m52.891 79.109h12c0.33203 0 0.55469-0.22266 0.55469-0.55469 0-0.33203-0.22266-0.55469-0.55469-0.55469h-12c-0.33203 0-0.55469 0.22266-0.55469 0.55469-0.003907 0.33594 0.21875 0.55469 0.55469 0.55469z" })
);

/* harmony default export */ __webpack_exports__["a"] = (icon);

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockItem__ = __webpack_require__(222);
var withSelect = wp.data.withSelect;




var BlockList = function BlockList(_ref) {
  var blocks = _ref.blocks;

  var blockItems = blocks.map(function (block) {
    return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__BlockItem__["a" /* default */], { block: block });
  });
  return wp.element.createElement(
    "ul",
    { className: "jsforwp-toc" },
    blockItems
  );
};

/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select) {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(BlockList));

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockButton__ = __webpack_require__(223);


var BlockItem = function BlockItem(_ref) {
  var block = _ref.block;

  var childBlocks = null;

  if (block.innerBlocks) {
    childBlocks = block.innerBlocks.map(function (innerBlock) {
      return wp.element.createElement(BlockItem, { block: innerBlock });
    });
  }
  return wp.element.createElement(
    "li",
    { key: block.clientId },
    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__BlockButton__["a" /* default */], { block: block }),
    childBlocks && wp.element.createElement(
      "ul",
      null,
      childBlocks
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (BlockItem);

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
var getBlockType = wp.blocks.getBlockType;
var Button = wp.components.Button;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch,
    withSelect = _wp$data.withSelect;




var BlockButton = function BlockButton(_ref) {
  var block = _ref.block,
      isBlockSelected = _ref.isBlockSelected;

  var blockType = getBlockType(block.name);
  return wp.element.createElement(
    Button,
    {
      className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()("editor-block-navigation__item-button", {
        "is-selected": isBlockSelected
      }),
      onClick: function onClick() {
        return dispatch("core/editor").selectBlock(block.clientId);
      }
    },
    wp.element.createElement(
      "span",
      { "class": "editor-block-icon has-colors" },
      blockType.icon.src
    ),
    blockType.title
  );
};

// export default BlockButton;
/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select, ownProps) {
  var clientId = ownProps.block.clientId;

  return {
    isBlockSelected: select("core/editor").isBlockSelected(clientId)
  };
})(BlockButton));

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SwitcherControls__ = __webpack_require__(227);
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var createBlock = wp.blocks.createBlock;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;






var LayoutSwitcher = function LayoutSwitcher() {
  var layouts = {
    default: [createBlock("core/paragraph", {})],
    c: [createBlock("core/cover", { align: "full" }), createBlock("core/button", {
      text: __("Layout Switcher", "jsforwpadvblocks"),
      align: "center"
    }), createBlock("core/columns", { columns: 3 })],
    cs: [createBlock("core/heading", {}), createBlock("core/spacer", { height: "10" }), createBlock("core/media-text", { align: "full" }), createBlock("core/spacer", { height: "40" }), createBlock("core/quote", {}), createBlock("core/spacer", { height: "20" }), createBlock("core/media-text", { mediaPosition: "right" }), createBlock("core/paragraph", {
      placeholder: __("Outro Text", "jsforwpadvblocks")
    })]
  };

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { target: "jsforwpadvgb-layout-switcher" },
      __("Layout Switcher", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwpadvgb-layout-switcher",
        title: __("Layout Switcher", "jsforwpadvblocks")
      },
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_SwitcherControls__["a" /* default */], { icons: __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */], layouts: layouts })
    )
  );
};

registerPlugin("jsforwpadvgb-layout-switcher", {
  icon: __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */].switcher,
  render: LayoutSwitcher
});

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icons = {};
icons.switcher = wp.element.createElement(
	"svg",
	{
		xmlns: "http://www.w3.org/2000/svg",
		width: "20",
		height: "20",
		x: "0",
		y: "0",
		version: "1.1",
		viewBox: "0 0 70 70",
		xmlSpace: "preserve"
	},
	wp.element.createElement("image", {
		width: "70",
		height: "70",
		x: "0",
		y: "0",
		href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACVVBMVEUAAAAAAAAdkV0gkWEg kV8gkmAgkmEgkWAgkmAhkWARiFUfkmAgkmAhkmAfj14gkWEgkmAAgAAgkWAhkmAgkGEgkWEbklsh kWEfkF8hkmEAkkkhkWAgj2AhkmAfj1wgkmAhkWAhkmEkk2NXrIiTybKs1sTB4NPW6uHi8OrT6eDC 4dSq1cJ3vJ5BoXdesIyy2cjx+PX///9zupsmlGRSqoTI5Nfe7+hQqYIplmev2Mb7/fx6vqA7nnPU 6uD+/v5xuZpMp3/r9fGFw6hConhotZP3+/k7n3Q3nXHo8+5ZrYlVq4bm8+212sonlWXP5901nG/6 /PsumGqm07/2+vhrtpZIpXz9/v283s/O59y/39Eymm3y+fZGpHuQyLBYrYhbroqJxatJpX1Jpn5w uJluuJhConlqtZVWrIfK5dliso/j8esikmJkspBptZSn08Cg0Lwrl2ju9vOUyrPN5ttntJPc7ea7 3s/s9vEwmWxmtJKbzriHxKpls5G228sllGQtl2ljspD0+feIxKpLpn+CwaY5nXJUq4X8/f1Np4Cp 1cK73c6AwaWKxavq9fD5/PuNx65Do3lHpHxfsI2g0Lsjk2IvmWvV6uGZzLaOx6+Mxq1Eo3qRybBF o3vJ5Nldr4uLxqydz7mczrhrtpWMx60nlGXv9/P4+/qPyK9AoXd2u52i0b2TyrLP59y53M11u51T qoSz2clQqYOYzLU2nHCr1cPg8Onw9/R/wKPt9vKVy7TQ6N44nXG328zR6N7p9O80m26GxKnq9PCu 18W+39Fst5aXzLUzmm5wDMNKAAAAIXRSTlMAASxfhq3Q3+z5D2Ko6Ump9wJY0kfYHKtT8AeUEMIZ 3qxK5folAAAAAWJLR0Qx2dsdcgAAAAd0SU1FB+MLBgQmOgxkXwsAAAQNSURBVFjDrZj3WxMxGMev kw5ooRWQIRIQUQGhFrVVhkq1bnFQBUVExQHurSiCiigOxD1Qce+9FcX9d3lNcte7JKU9n3t/aHPv fd/Pk+TyZnFcWNNodXqDMcZkNptijAa9TqvhFJvFGhsHCIuLtVqUMDQ2ezxgWrzdFm2dEhxOMIA5 HQnRUAYlggiWOCgiJCk5EiRoyUkDUwanREMBIGXwAJDUtOggQUtLDUdJHxI9BYAh6WxKhlMJhf9k GUzKUGUUAIYyOOkK6wLrQ7UrVVG/iP1D9rOCbyS1NGK8/B8FANn4SQo36rKyh+UMzx0xclRefgFT kCIdz5lsyOjCIlfIcse4GZpMSTYyIcVjXYSNG8+QiXmawMppj9dF24SJtDBRmDccDEpJqYtlZeW0 1IEoGsbAmzQ5FDrFU+HLKcMPU6dRWieaD200xT9dUoMZQc/MWfhpNq22QYyd8s+ZK23IPOjLxvWp nE/J7UGKhZ69F6CIhfC3CDvzMHURJY8PrhdWyl0VgPrFqE5LsLdc6Cq6VVZmm6qhfFbNUvifh73L MKaWxvCt0lCr2nIkr/Oj/xXYXY8x+TQmTsNpKacXt2UlCluF3asxpoHGAC2nI11u1JY1YK3ke4tN da1jUICO05Ou9VDd2AQ2oLgK5N6I02ElC6PnDKRrE5RvBsCHArdAr38retrGogADZyRd26HcB8AO WFgKnSU7EWWXm4kxcjGkazdMwT0A7EVJ5N3X7NuPk+NAC5MCYjgT4TmIuoYvtZLp3XaoiU0BJs5M eA7DiLl8qY7EFFUfaWdjzBQmGyUCXzoKS7tlpI4DDWwM2SgU7OVLx2DpeCf/U3ri5CkMOt3FbBTZ xWegeDhf6kZfvqX4bHBR8JwTapR3ntHF5Ae/AKUX+VIBLF0S31wWOFcYH5wafm2wN7MAuApjroXe LBHa1UPGGOhkuA6lN/j5GBYkXXFTqE4vGaOnU/OWMOXeJlswRcA0kjE6eqLAqXQETxh3Qm+qxe/u J2K09LR19x6S3kd/D4D7IXrxKDR8lslD+GmLiyWr81g24J54ngaePX9Rv+OlxPlKHhHLmtK7A1LM 61oXbW/kEVbmAvNWGtH1jqa8l+vhAkMvDe1TJSEfPtKYTXK9Pczi+0kS0tpJUcqq5HJbmK2A+7MY cnrLzACJ+SRX460AY2PyReyQPgDIPu7Mkosd4bdJ7V9RyLd+/uF7pQQS6CUSXNwmsTZtLc0/+NXk J1pdevoEUMevw6RScrhibSGbGl71iw81v7d5Cwv/lP+lZMnRbGgjmmxDq9L2Wq3NvlpHD5UOQmod y9Q6JKp1ZFXrAM2pdJwPjufMaCiZES4XOJWuOji1Ll44la6BoFmsdvpSyq7sUgrXScEV2T8Temup vpUadgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0wNlQxMTozODo1OC0wNzowMM8rSlQAAAAl dEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMDZUMTE6Mzg6NTgtMDc6MDC+dvLoAAAAAElFTkSuQmCC"
	})
);
icons.c = wp.element.createElement(
	"svg",
	{
		xmlns: "http://www.w3.org/2000/svg",
		width: "40px",
		height: "40px",
		version: "1.1",
		viewBox: "0 0 400 400"
	},
	wp.element.createElement(
		"g",
		{ fillRule: "evenodd", stroke: "none" },
		wp.element.createElement("path", {
			fill: "#fcfcfc",
			d: "M0 65v4.2h400v-8.4H0V65m0 270v4.2h400v-8.4H0v4.2"
		}),
		wp.element.createElement("path", {
			fill: "#d4d4d4",
			d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h400V71.6H0V200m0 170.8V400h400v-58.4H0v29.2"
		}),
		wp.element.createElement("path", {
			fill: "#dcece8",
			d: "M0 59.4v1h400v-2H0v1m0 11.2v1h400v-2H0v1m0 258.8v1h400v-2H0v1m0 11.2v1h400v-2H0v1"
		})
	)
);
icons.cs = wp.element.createElement(
	"svg",
	{
		xmlns: "http://www.w3.org/2000/svg",
		width: "40px",
		height: "40px",
		version: "1.1",
		viewBox: "0 0 400 400"
	},
	wp.element.createElement(
		"g",
		{ fillRule: "evenodd", stroke: "none" },
		wp.element.createElement("path", {
			fill: "#fcfcfc",
			d: "M0 65v4.2h151.511c136.648 0 151.598.061 152.402.624C306.154 71.394 306 61.784 306 200c0 138.216.154 128.606-2.087 130.176-.804.563-15.754.624-152.402.624H0v8.4h400v-8.4h-41.511c-45.641 0-42.561.169-43.891-2.404-.908-1.757-.908-255.035 0-256.792 1.33-2.573-1.75-2.404 43.891-2.404H400v-8.4H0V65"
		}),
		wp.element.createElement("path", {
			fill: "#d4d4d4",
			d: "M0 29.2v29.2h400V0H0v29.2M0 200v128.4h151.32c117.16 0 151.428-.108 151.8-.48.699-.699.699-255.141 0-255.84-.372-.372-34.64-.48-151.8-.48H0V200M316.88 72.08c-.699.699-.699 255.141 0 255.84.367.367 10.196.48 41.8.48H400V71.6h-41.32c-31.604 0-41.433.113-41.8.48M0 370.8V400h400v-58.4H0v29.2"
		}),
		wp.element.createElement("path", {
			fill: "#dcece8",
			d: "M0 59.4v1h400v-2H0v1m0 11.2v1h151.32c117.16 0 151.428.108 151.8.48.699.699.699 255.141 0 255.84-.372.372-34.64.48-151.8.48H0v2H303.117l1.242-1.414 1.241-1.414V72.428l-1.241-1.414-1.242-1.414H0v1m315.641.414l-1.241 1.414v255.144l1.241 1.414 1.242 1.414H400v-2h-41.32c-31.604 0-41.433-.113-41.8-.48-.699-.699-.699-255.141 0-255.84.367-.367 10.196-.48 41.8-.48H400v-2H316.883l-1.242 1.414M0 340.6v1h400v-2H0v1"
		})
	)
);
/* harmony default export */ __webpack_exports__["a"] = (icons);

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SwitcherButton__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResetControls__ = __webpack_require__(229);
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Icon = _wp$components.Icon,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    dispatch = _wp$data.dispatch;





var SwitcherControls = function SwitcherControls(_ref) {
  var blocks = _ref.blocks,
      icons = _ref.icons,
      layouts = _ref.layouts;

  var blockIds = blocks.map(function (block) {
    return block.clientId;
  });
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PanelBody,
      { title: __("Layout Choices", "jsforwpadvblocks"), opened: true },
      wp.element.createElement(
        PanelRow,
        { className: "layout-switcher" },
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__SwitcherButton__["a" /* default */], {
          label: __("c", "jsforwpadvblocks"),
          icon: icons.c,
          blockIds: blockIds,
          layout: layouts.c
        }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__SwitcherButton__["a" /* default */], {
          label: __("c-sp", "jsforwpadvblocks"),
          icon: icons.cs,
          blockIds: blockIds,
          layout: layouts.cs
        })
      )
    ),
    wp.element.createElement(
      PanelBody,
      { title: __("Reset Layout", "jsforwpadvblocks") },
      wp.element.createElement(
        PanelRow,
        null,
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__ResetControls__["a" /* default */], { layout: layouts.default })
      )
    )
  );
};
/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select) {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(SwitcherControls));

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;


var SwitcherButton = function SwitcherButton(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      layout = _ref.layout,
      blockIds = _ref.blockIds,
      removeBlocks = _ref.removeBlocks,
      resetBlocks = _ref.resetBlocks,
      insertBlock = _ref.insertBlock,
      insertBlocks = _ref.insertBlocks;

  return wp.element.createElement(
    "button",
    {
      onClick: function onClick() {
        console.log(label);
        // removeBlocks(blockIds);
        resetBlocks([]);
        insertBlocks(layout);
      }
    },
    wp.element.createElement(Icon, { icon: icon }),
    wp.element.createElement(
      "span",
      null,
      label
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
  var _dispatch = dispatch("core/editor"),
      removeBlocks = _dispatch.removeBlocks,
      resetBlocks = _dispatch.resetBlocks,
      insertBlocks = _dispatch.insertBlocks,
      insertBlock = _dispatch.insertBlock;

  return {
    removeBlocks: removeBlocks,
    resetBlocks: resetBlocks,
    insertBlock: insertBlock,
    insertBlocks: insertBlocks
  };
})(SwitcherButton));

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal;
var withDispatch = wp.data.withDispatch;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    withState = _wp$compose.withState;


var ResetControls = function ResetControls(_ref) {
  var isOpen = _ref.isOpen,
      setState = _ref.setState,
      layout = _ref.layout,
      resetBlocks = _ref.resetBlocks,
      insertBlocks = _ref.insertBlocks;

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      Button,
      { isLink: true, isDestructive: true, onClick: function onClick() {
          return setState({ isOpen: true });
        } },
      __("Reset Layout", "jsforwpadvblocks")
    ),
    isOpen && wp.element.createElement(
      Modal,
      {
        className: "layout-switcher-reset",
        title: __("Warning!", "jsforwpadvblocks"),
        onRequestClose: function onRequestClose() {
          return setState({ isOpen: false });
        }
      },
      wp.element.createElement(
        "p",
        null,
        __("This action will remove all blocks", "jsforwpadvblocks"),
        wp.element.createElement(
          "strong",
          null,
          __("This can be undone before leaving the page with the Undo option.", "jsforwpadvblocks")
        )
      ),
      wp.element.createElement(
        "p",
        null,
        wp.element.createElement(
          Button,
          {
            isDefault: true,
            onClick: function onClick() {
              resetBlocks([]);
              insertBlocks(layout);
              setState({ isOpen: false });
            }
          },
          __("Reset Layout", "jsforwpadvblocks")
        )
      )
    )
  );
};
/* harmony default export */ __webpack_exports__["a"] = (compose(withState({
  isOpen: false
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch("core/editor"),
      resetBlocks = _dispatch.resetBlocks,
      insertBlocks = _dispatch.insertBlocks;

  return {
    resetBlocks: resetBlocks,
    insertBlocks: insertBlocks
  };
}))(ResetControls));

/***/ })

/******/ });
//# sourceMappingURL=plugins.editor.js.map