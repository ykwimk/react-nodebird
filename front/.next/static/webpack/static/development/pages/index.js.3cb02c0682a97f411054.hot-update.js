webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm */ \"./components/LoginForm.js\");\n/* harmony import */ var _LoginCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginCard */ \"./components/LoginCard.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/robin/www/react-nodebird/front/components/AppLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar dummy = {\n  nickname: 'ykwimk',\n  post: [],\n  followings: [],\n  followers: [],\n  isLogin: false\n};\n\nvar AppLayout = function AppLayout(_ref) {\n  var children = _ref.children;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n    mode: \"horizontal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 26\n    }\n  }, \"\\uB178\\uB4DC\\uBC84\\uB4DC\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 33\n    }\n  }, \"\\uD504\\uB85C\\uD544\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"mail\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"].Search, {\n    enterButton: true,\n    style: {\n      verticalAlign: 'middle'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, dummy.isLogin ? __jsx(_LoginCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    dummy: dummy,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = AppLayout;\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheW91dC5qcz9kNzNiIl0sIm5hbWVzIjpbImR1bW15Iiwibmlja25hbWUiLCJwb3N0IiwiZm9sbG93aW5ncyIsImZvbGxvd2VycyIsImlzTG9naW4iLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInZlcnRpY2FsQWxpZ24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNaQyxVQUFRLEVBQUUsUUFERTtBQUVaQyxNQUFJLEVBQUUsRUFGTTtBQUdaQyxZQUFVLEVBQUUsRUFIQTtBQUlaQyxXQUFTLEVBQUUsRUFKQztBQUtaQyxTQUFPLEVBQUU7QUFMRyxDQUFkOztBQVFBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2xDLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFmLENBREYsQ0FERixFQUlFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQXRCLENBREYsQ0FKRixFQU9FLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQsQ0FBTyxNQUFQO0FBQWMsZUFBVyxNQUF6QjtBQUEwQixTQUFLLEVBQUU7QUFBRUMsbUJBQWEsRUFBRTtBQUFqQixLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQURGLEVBWUUsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsS0FBSyxDQUFDSyxPQUFOLEdBQ0csTUFBQyxrREFBRDtBQUFXLFNBQUssRUFBRUwsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILEdBRUcsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSE4sQ0FERixFQU9FLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCTyxRQUF0QixDQVBGLEVBUUUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQVpGLENBREY7QUF5QkQsQ0ExQkQ7O0tBQU1ELFM7QUE0Qk5BLFNBQVMsQ0FBQ0csU0FBVixHQUFzQjtBQUNwQkYsVUFBUSxFQUFFRyxpREFBUyxDQUFDQztBQURBLENBQXRCO0FBSWVMLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBNZW51LCBJbnB1dCwgQnV0dG9uLCBSb3csIENvbCwgQ2FyZCwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtJztcbmltcG9ydCBMb2dpbkNhcmQgZnJvbSAnLi9Mb2dpbkNhcmQnO1xuXG5jb25zdCBkdW1teSA9IHtcbiAgbmlja25hbWU6ICd5a3dpbWsnLFxuICBwb3N0OiBbXSxcbiAgZm9sbG93aW5nczogW10sXG4gIGZvbGxvd2VyczogW10sXG4gIGlzTG9naW46IGZhbHNlLFxufVxuXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaG9tZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+64W465Oc67KE65OcPC9hPjwvTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicHJvZmlsZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhPu2UhOuhnO2VhDwvYT48L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haWxcIj5cbiAgICAgICAgICA8SW5wdXQuU2VhcmNoIGVudGVyQnV0dG9uIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19IC8+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPC9NZW51PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICB7ZHVtbXkuaXNMb2dpblxuICAgICAgICAgICAgPyA8TG9naW5DYXJkIGR1bW15PXtkdW1teX0gLz5cbiAgICAgICAgICAgIDogPExvZ2luRm9ybSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PntjaGlsZHJlbn08L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT48L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ }),

/***/ "./node_modules/antd/lib/_util/devWarning.js":
false,

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
false,

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
false,

/***/ "./node_modules/antd/lib/config-provider/context.js":
false,

/***/ "./node_modules/antd/lib/config-provider/index.js":
false,

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
false,

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
false,

/***/ "./node_modules/antd/lib/empty/empty.js":
false,

/***/ "./node_modules/antd/lib/empty/index.js":
false,

/***/ "./node_modules/antd/lib/empty/simple.js":
false,

/***/ "./node_modules/antd/lib/form/Form.js":
false,

/***/ "./node_modules/antd/lib/form/context.js":
false,

/***/ "./node_modules/antd/lib/form/hooks/useForm.js":
false,

/***/ "./node_modules/antd/lib/form/util.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/context.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/default.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/index.js":
false,

/***/ "./node_modules/antd/lib/locale/default.js":
false,

/***/ "./node_modules/antd/lib/message/index.js":
false,

/***/ "./node_modules/antd/lib/modal/locale.js":
false,

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
false,

/***/ "./node_modules/antd/lib/notification/index.js":
false,

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
false,

/***/ "./node_modules/rc-notification/lib/Notice.js":
false,

/***/ "./node_modules/rc-notification/lib/useNotification.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
false,

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
false

})