webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  mainPosts: [{\n    user: {\n      id: 1,\n      nickname: 'ykwimk'\n    },\n    content: 'asdfdasf'\n  }]\n};\nvar ADD_POST = 'ADD_POST';\nvar ADD_DUMMY = 'ADD_DUMMY';\nvar addPostAction = {\n  type: ADD_POST\n};\nvar addDummyAction = {\n  type: ADD_DUMMY,\n  data: {\n    content: 'hello',\n    id: 1,\n    user: {\n      nickname: 'ykwimk'\n    }\n  }\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      {\n        return _objectSpread({}, state);\n      }\n\n    case ADD_DUMMY:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          mainPosts: [action.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts))\n        });\n      }\n\n    default:\n      {\n        return _objectSpread({}, state);\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwidXNlciIsImlkIiwibmlja25hbWUiLCJjb250ZW50IiwiQUREX1BPU1QiLCJBRERfRFVNTVkiLCJhZGRQb3N0QWN0aW9uIiwidHlwZSIsImFkZER1bW15QWN0aW9uIiwiZGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUFDO0FBQ1ZDLFFBQUksRUFBRTtBQUNKQyxRQUFFLEVBQUUsQ0FEQTtBQUVKQyxjQUFRLEVBQUU7QUFGTixLQURJO0FBS1ZDLFdBQU8sRUFBRTtBQUxDLEdBQUQ7QUFEZSxDQUFyQjtBQVVQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUVBLElBQU1DLGFBQWEsR0FBRztBQUNwQkMsTUFBSSxFQUFFSDtBQURjLENBQXRCO0FBR0EsSUFBTUksY0FBYyxHQUFHO0FBQ3JCRCxNQUFJLEVBQUVGLFNBRGU7QUFFckJJLE1BQUksRUFBRTtBQUNKTixXQUFPLEVBQUUsT0FETDtBQUVKRixNQUFFLEVBQUUsQ0FGQTtBQUdKRCxRQUFJLEVBQUU7QUFDSkUsY0FBUSxFQUFFO0FBRE47QUFIRjtBQUZlLENBQXZCOztBQVdBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmIsWUFBeUI7QUFBQSxNQUFYYyxNQUFXOztBQUNoRCxVQUFPQSxNQUFNLENBQUNMLElBQWQ7QUFDRSxTQUFLSCxRQUFMO0FBQWU7QUFDYixpQ0FDS08sS0FETDtBQUdEOztBQUVELFNBQUtOLFNBQUw7QUFBZ0I7QUFDZCwrQ0FDS00sS0FETDtBQUVFWixtQkFBUyxHQUFJYSxNQUFNLENBQUNILElBQVgsc0dBQW9CRSxLQUFLLENBQUNaLFNBQTFCO0FBRlg7QUFJRDs7QUFDRDtBQUFTO0FBQ1AsaUNBQ0tZLEtBREw7QUFHRDtBQWpCSDtBQW1CRCxDQXBCRDs7QUFzQmVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW3tcbiAgICB1c2VyOiB7XG4gICAgICBpZDogMSxcbiAgICAgIG5pY2tuYW1lOiAneWt3aW1rJyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6ICdhc2RmZGFzZidcbiAgfV1cbn1cblxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnXG5jb25zdCBBRERfRFVNTVkgPSAnQUREX0RVTU1ZJ1xuXG5jb25zdCBhZGRQb3N0QWN0aW9uID0ge1xuICB0eXBlOiBBRERfUE9TVCxcbn1cbmNvbnN0IGFkZER1bW15QWN0aW9uID0ge1xuICB0eXBlOiBBRERfRFVNTVksXG4gIGRhdGE6IHtcbiAgICBjb250ZW50OiAnaGVsbG8nLFxuICAgIGlkOiAxLFxuICAgIHVzZXI6IHtcbiAgICAgIG5pY2tuYW1lOiAneWt3aW1rJ1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIEFERF9EVU1NWToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1haW5Qb3N0czogWyBhY3Rpb24uZGF0YSwgLi4uc3RhdGUubWFpblBvc3RzIF1cbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})