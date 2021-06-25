_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/_app"],{

/***/ "./components/PageImage.tsx":
/*!**********************************!*\
  !*** ./components/PageImage.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony import */ var C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/classnames */ "./utils/classnames.ts");


var _jsxFileName = "C:\\Users\\admin\\Documents\\Dev\\nico.dev\\components\\PageImage.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement;


var SIZES = [500, 700, 1000, 1500, 2000];
var TYPES = {
  avif: 'image/avif',
  webp: 'image/webp',
  jpg: ''
};

var PageImage = function PageImage(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return __jsx("div", {
    className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__["default"])(className, 'page-image'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx("picture", {
    className: "page-image__image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, Object.entries(TYPES).map(function (_ref2) {
    var _ref3 = Object(C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        ext = _ref3[0],
        mime = _ref3[1];

    return __jsx("source", {
      type: mime,
      srcSet: SIZES.map(function (size) {
        return "../portrait/nico-martin-".concat(size, ".").concat(ext, " ").concat(size, "w");
      }).join(','),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    });
  })));
};

_c = PageImage;
/* harmony default export */ __webpack_exports__["default"] = (PageImage);

var _c;

$RefreshReg$(_c, "PageImage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

  if (true) {
    const currentExports = __prefresh_utils__.getExports(module);
    const previousHotModuleExports =
      module.hot.data && module.hot.data.moduleExports;

    __prefresh_utils__.registerExports(currentExports, module.i);

    if (isPrefreshComponent) {
      if (previousHotModuleExports) {
        try {
          __prefresh_utils__.flush();
          if (
            typeof __prefresh_errors__ !== 'undefined' &&
            __prefresh_errors__ &&
            __prefresh_errors__.clearRuntimeErrors
          ) {
            __prefresh_errors__.clearRuntimeErrors();
          }
        } catch (e) {
          // Only available in newer webpack versions.
          if (module.hot.invalidate) {
            module.hot.invalidate();
          } else {
            self.location.reload();
          }
        }
      }

      module.hot.dispose(data => {
        data.moduleExports = __prefresh_utils__.getExports(module);
      });

      module.hot.accept(function errorRecovery() {
        if (
          typeof __prefresh_errors__ !== 'undefined' &&
          __prefresh_errors__ &&
          __prefresh_errors__.handleRuntimeError
        ) {
          __prefresh_errors__.handleRuntimeError(error);
        }

        __webpack_require__.c[module.i].hot.accept(errorRecovery);
      });
    }
  }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ "./node_modules/@prefresh/webpack/src/utils/prefresh.js")))

/***/ }),

/***/ "./components/PageNavigation.tsx":
/*!***************************************!*\
  !*** ./components/PageNavigation.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony import */ var C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/classnames */ "./utils/classnames.ts");


var _jsxFileName = "C:\\Users\\admin\\Documents\\Dev\\nico.dev\\components\\PageNavigation.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement;




var LINKS = {
  '/': 'About',
  '/blog/': 'Blog',
  '/talks/': 'Talks',
  '/code/': 'Code'
};

var PageNavigation = function PageNavigation(_ref) {
  _s();

  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      asPath = _useRouter.asPath;

  return __jsx("div", {
    className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_4__["default"])('page-navigation', className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, Object.entries(LINKS).map(function (_ref2) {
    var _ref3 = Object(C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        path = _ref3[0],
        link = _ref3[1];

    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_4__["default"])('page-navigation__item', {
        'page-navigation__item--active': asPath === path
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, link));
  }));
};

_s(PageNavigation, "9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = PageNavigation;
/* harmony default export */ __webpack_exports__["default"] = (PageNavigation);

var _c;

$RefreshReg$(_c, "PageNavigation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

  if (true) {
    const currentExports = __prefresh_utils__.getExports(module);
    const previousHotModuleExports =
      module.hot.data && module.hot.data.moduleExports;

    __prefresh_utils__.registerExports(currentExports, module.i);

    if (isPrefreshComponent) {
      if (previousHotModuleExports) {
        try {
          __prefresh_utils__.flush();
          if (
            typeof __prefresh_errors__ !== 'undefined' &&
            __prefresh_errors__ &&
            __prefresh_errors__.clearRuntimeErrors
          ) {
            __prefresh_errors__.clearRuntimeErrors();
          }
        } catch (e) {
          // Only available in newer webpack versions.
          if (module.hot.invalidate) {
            module.hot.invalidate();
          } else {
            self.location.reload();
          }
        }
      }

      module.hot.dispose(data => {
        data.moduleExports = __prefresh_utils__.getExports(module);
      });

      module.hot.accept(function errorRecovery() {
        if (
          typeof __prefresh_errors__ !== 'undefined' &&
          __prefresh_errors__ &&
          __prefresh_errors__.handleRuntimeError
        ) {
          __prefresh_errors__.handleRuntimeError(error);
        }

        __webpack_require__.c[module.i].hot.accept(errorRecovery);
      });
    }
  }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ "./node_modules/@prefresh/webpack/src/utils/prefresh.js")))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

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

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@prefresh/core/src/computeKey.js":
/*!*******************************************************!*\
  !*** ./node_modules/@prefresh/core/src/computeKey.js ***!
  \*******************************************************/
/*! exports provided: computeKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeKey", function() { return computeKey; });
/* harmony import */ var _runtime_signaturesForType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runtime/signaturesForType */ "./node_modules/@prefresh/core/src/runtime/signaturesForType.js");


/**
 *
 * This part has been vendored from "react-refresh"
 * https://github.com/facebook/react/blob/master/packages/react-refresh/src/ReactFreshRuntime.js#L83
 */
const computeKey = signature => {
  let fullKey = signature.key;
  let hooks;

  try {
    hooks = signature.getCustomHooks();
  } catch (err) {
    signature.forceReset = true;
    return fullKey;
  }

  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (typeof hook !== 'function') {
      signature.forceReset = true;
      return fullKey;
    }

    const nestedHookSignature = _runtime_signaturesForType__WEBPACK_IMPORTED_MODULE_0__["signaturesForType"].get(hook);
    if (nestedHookSignature === undefined) continue;

    const nestedHookKey = computeKey(nestedHookSignature);
    if (nestedHookSignature.forceReset) signature.forceReset = true;

    fullKey += '\n---\n' + nestedHookKey;
  }

  return fullKey;
};


/***/ }),

/***/ "./node_modules/@prefresh/core/src/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@prefresh/core/src/constants.js ***!
  \******************************************************/
/*! exports provided: VNODE_COMPONENT, NAMESPACE, COMPONENT_HOOKS, HOOKS_LIST, EFFECTS_LIST, RERENDER_COUNT, CATCH_ERROR_OPTION, COMPONENT_DIRTY, VNODE_DOM, VNODE_CHILDREN, HOOK_VALUE, HOOK_ARGS, HOOK_CLEANUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNODE_COMPONENT", function() { return VNODE_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_HOOKS", function() { return COMPONENT_HOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOKS_LIST", function() { return HOOKS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECTS_LIST", function() { return EFFECTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RERENDER_COUNT", function() { return RERENDER_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATCH_ERROR_OPTION", function() { return CATCH_ERROR_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_DIRTY", function() { return COMPONENT_DIRTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNODE_DOM", function() { return VNODE_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNODE_CHILDREN", function() { return VNODE_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOK_VALUE", function() { return HOOK_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOK_ARGS", function() { return HOOK_ARGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOK_CLEANUP", function() { return HOOK_CLEANUP; });
const VNODE_COMPONENT = '__c';
const NAMESPACE = '__PREFRESH__';
const COMPONENT_HOOKS = '__H';
const HOOKS_LIST = '__';
const EFFECTS_LIST = '__h';
const RERENDER_COUNT = '__r';
const CATCH_ERROR_OPTION = '__e';
const COMPONENT_DIRTY = '__d';
const VNODE_DOM = '__e';
const VNODE_CHILDREN = '__k';
const HOOK_VALUE = '__';
const HOOK_ARGS = '__H';
const HOOK_CLEANUP = '__c';


/***/ }),

/***/ "./node_modules/@prefresh/core/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@prefresh/core/src/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _runtime_catchError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runtime/catchError */ "./node_modules/@prefresh/core/src/runtime/catchError.js");
/* harmony import */ var _runtime_debounceRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtime/debounceRendering */ "./node_modules/@prefresh/core/src/runtime/debounceRendering.js");
/* harmony import */ var _runtime_vnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtime/vnode */ "./node_modules/@prefresh/core/src/runtime/vnode.js");
/* harmony import */ var _runtime_unmount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtime/unmount */ "./node_modules/@prefresh/core/src/runtime/unmount.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@prefresh/core/src/constants.js");
/* harmony import */ var _computeKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./computeKey */ "./node_modules/@prefresh/core/src/computeKey.js");
/* harmony import */ var _runtime_vnodesForComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./runtime/vnodesForComponent */ "./node_modules/@prefresh/core/src/runtime/vnodesForComponent.js");
/* harmony import */ var _runtime_signaturesForType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./runtime/signaturesForType */ "./node_modules/@prefresh/core/src/runtime/signaturesForType.js");
// Options for Preact.












let typesById = new Map();
let pendingUpdates = [];

function sign(type, key, forceReset, getCustomHooks, status) {
  if (type) {
    let signature = _runtime_signaturesForType__WEBPACK_IMPORTED_MODULE_8__["signaturesForType"].get(type);
    if (status === 'begin') {
      _runtime_signaturesForType__WEBPACK_IMPORTED_MODULE_8__["signaturesForType"].set(type, {
        type,
        key,
        forceReset,
        getCustomHooks: getCustomHooks || (() => []),
      });

      return 'needsHooks';
    } else if (status === 'needsHooks') {
      signature.fullKey = Object(_computeKey__WEBPACK_IMPORTED_MODULE_6__["computeKey"])(signature);
    }
  }
}

function replaceComponent(OldType, NewType, resetHookState) {
  const vnodes = _runtime_vnodesForComponent__WEBPACK_IMPORTED_MODULE_7__["vnodesForComponent"].get(OldType);
  if (!vnodes) return;

  // migrate the list to our new constructor reference
  _runtime_vnodesForComponent__WEBPACK_IMPORTED_MODULE_7__["vnodesForComponent"].delete(OldType);
  _runtime_vnodesForComponent__WEBPACK_IMPORTED_MODULE_7__["vnodesForComponent"].set(NewType, vnodes);

  _runtime_vnodesForComponent__WEBPACK_IMPORTED_MODULE_7__["mappedVNodes"].set(OldType, NewType);

  pendingUpdates = pendingUpdates.filter(p => p[0] !== OldType);

  vnodes.forEach(vnode => {
    // update the type in-place to reference the new component
    vnode.type = NewType;

    if (vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]]) {
      vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]].constructor = vnode.type;

      try {
        if (vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]] instanceof OldType) {
          const oldInst = vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]];

          const newInst = new NewType(
            vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]].props,
            vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]].context
          );

          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]] = newInst;
          // copy old properties onto the new instance.
          //   - Objects (including refs) in the new instance are updated with their old values
          //   - Missing or null properties are restored to their old values
          //   - Updated Functions are not reverted
          //   - Scalars are copied
          for (let i in oldInst) {
            const type = typeof oldInst[i];
            if (!(i in newInst)) {
              newInst[i] = oldInst[i];
            } else if (type !== 'function' && typeof newInst[i] === type) {
              if (
                type === 'object' &&
                newInst[i] != null &&
                newInst[i].constructor === oldInst[i].constructor
              ) {
                Object.assign(newInst[i], oldInst[i]);
              } else {
                newInst[i] = oldInst[i];
              }
            }
          }
        }
      } catch (e) {
        /* Functional component */
        vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]].constructor = NewType;
      }

      if (resetHookState) {
        if (
          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]] &&
          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]][_constants__WEBPACK_IMPORTED_MODULE_5__["HOOKS_LIST"]] &&
          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]][_constants__WEBPACK_IMPORTED_MODULE_5__["HOOKS_LIST"]].length
        ) {
          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]][_constants__WEBPACK_IMPORTED_MODULE_5__["HOOKS_LIST"]].forEach(
            possibleEffect => {
              if (
                possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_CLEANUP"]] &&
                typeof possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_CLEANUP"]] === 'function'
              ) {
                possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_CLEANUP"]]();
              } else if (
                possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_ARGS"]] &&
                possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_VALUE"]] &&
                Object.keys(possibleEffect).length === 3
              ) {
                const cleanupKey = Object.keys(possibleEffect).find(
                  key => key !== _constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_ARGS"] && key !== _constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_VALUE"]
                );
                if (
                  cleanupKey &&
                  typeof possibleEffect[cleanupKey] == 'function'
                )
                  possibleEffect[cleanupKey]();
              }
            }
          );
        }

        vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]] = {
          [_constants__WEBPACK_IMPORTED_MODULE_5__["HOOKS_LIST"]]: [],
          [_constants__WEBPACK_IMPORTED_MODULE_5__["EFFECTS_LIST"]]: [],
        };
      } else {
        if (
          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]] &&
          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]][_constants__WEBPACK_IMPORTED_MODULE_5__["HOOKS_LIST"]] &&
          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]][_constants__WEBPACK_IMPORTED_MODULE_5__["HOOKS_LIST"]].length
        ) {
          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]][_constants__WEBPACK_IMPORTED_MODULE_5__["HOOKS_LIST"]].forEach(
            possibleEffect => {
              if (
                possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_CLEANUP"]] &&
                typeof possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_CLEANUP"]] === 'function'
              ) {
                possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_CLEANUP"]]();
              } else if (
                possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_ARGS"]] &&
                possibleEffect[_constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_VALUE"]] &&
                Object.keys(possibleEffect).length === 3
              ) {
                const cleanupKey = Object.keys(possibleEffect).find(
                  key => key !== _constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_ARGS"] && key !== _constants__WEBPACK_IMPORTED_MODULE_5__["HOOK_VALUE"]
                );
                if (
                  cleanupKey &&
                  typeof possibleEffect[cleanupKey] == 'function'
                )
                  possibleEffect[cleanupKey]();
              }
            }
          );

          vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_HOOKS"]][_constants__WEBPACK_IMPORTED_MODULE_5__["HOOKS_LIST"]].forEach(
            hook => {
              if (
                hook.__H &&
                Array.isArray(hook.__H)
              ) {
                hook.__H = undefined;
              }
            }
          );
        }
      }

      // Cleanup when an async component has thrown.
      if (
        (vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_DOM"]] && !document.contains(vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_DOM"]])) ||
        (!vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_DOM"]] && !vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_CHILDREN"]])
      ) {
        location.reload();
      }

      preact__WEBPACK_IMPORTED_MODULE_4__["Component"].prototype.forceUpdate.call(vnode[_constants__WEBPACK_IMPORTED_MODULE_5__["VNODE_COMPONENT"]]);
    }
  });
}

self[_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE"]] = {
  getSignature: type => _runtime_signaturesForType__WEBPACK_IMPORTED_MODULE_8__["signaturesForType"].get(type),
  register: (type, id) => {
    if (typeof type !== 'function') return;

    if (typesById.has(id)) {
      const existing = typesById.get(id);
      if (existing !== type) {
        pendingUpdates.push([existing, type]);
        typesById.set(id, type);
      }
    } else {
      typesById.set(id, type);
    }

    if (!_runtime_signaturesForType__WEBPACK_IMPORTED_MODULE_8__["signaturesForType"].has(type)) {
      _runtime_signaturesForType__WEBPACK_IMPORTED_MODULE_8__["signaturesForType"].set(type, {
        getCustomHooks: () => [],
        type,
      });
    }
  },
  getPendingUpdates: () => pendingUpdates,
  flush: () => {
    pendingUpdates = [];
  },
  replaceComponent,
  sign,
  computeKey: _computeKey__WEBPACK_IMPORTED_MODULE_6__["computeKey"],
};


/***/ }),

/***/ "./node_modules/@prefresh/core/src/runtime/catchError.js":
/*!***************************************************************!*\
  !*** ./node_modules/@prefresh/core/src/runtime/catchError.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@prefresh/core/src/constants.js");



const oldCatchError = preact__WEBPACK_IMPORTED_MODULE_0__["options"][_constants__WEBPACK_IMPORTED_MODULE_1__["CATCH_ERROR_OPTION"]];
preact__WEBPACK_IMPORTED_MODULE_0__["options"][_constants__WEBPACK_IMPORTED_MODULE_1__["CATCH_ERROR_OPTION"]] = (error, vnode, oldVNode) => {
  if (vnode[_constants__WEBPACK_IMPORTED_MODULE_1__["VNODE_COMPONENT"]] && vnode[_constants__WEBPACK_IMPORTED_MODULE_1__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_1__["COMPONENT_DIRTY"]]) {
    vnode[_constants__WEBPACK_IMPORTED_MODULE_1__["VNODE_COMPONENT"]][_constants__WEBPACK_IMPORTED_MODULE_1__["COMPONENT_DIRTY"]] = false;
  }

  if (oldCatchError) oldCatchError(error, vnode, oldVNode);
};


/***/ }),

/***/ "./node_modules/@prefresh/core/src/runtime/debounceRendering.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@prefresh/core/src/runtime/debounceRendering.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@prefresh/core/src/constants.js");




const defer =
  typeof Promise == 'function'
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;

preact__WEBPACK_IMPORTED_MODULE_0__["options"].debounceRendering = process => {
  defer(() => {
    try {
      process();
    } catch (e) {
      process[_constants__WEBPACK_IMPORTED_MODULE_1__["RERENDER_COUNT"]] = 0;
      throw e;
    }
  });
};


/***/ }),

/***/ "./node_modules/@prefresh/core/src/runtime/signaturesForType.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@prefresh/core/src/runtime/signaturesForType.js ***!
  \**********************************************************************/
/*! exports provided: signaturesForType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signaturesForType", function() { return signaturesForType; });
// Signatures for functional components and custom hooks.
const signaturesForType = new WeakMap();


/***/ }),

/***/ "./node_modules/@prefresh/core/src/runtime/unmount.js":
/*!************************************************************!*\
  !*** ./node_modules/@prefresh/core/src/runtime/unmount.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _vnodesForComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnodesForComponent */ "./node_modules/@prefresh/core/src/runtime/vnodesForComponent.js");



const oldUnmount = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = vnode => {
  const type = (vnode || {}).type;
  if (typeof type === 'function' && _vnodesForComponent__WEBPACK_IMPORTED_MODULE_1__["vnodesForComponent"].has(type)) {
    const vnodes = _vnodesForComponent__WEBPACK_IMPORTED_MODULE_1__["vnodesForComponent"].get(type);
    if (vnodes) {
      const index = vnodes.indexOf(vnode);
      if (index !== -1) {
        vnodes.splice(index, 1);
      }
    }
  }

  if (oldUnmount) oldUnmount(vnode);
};


/***/ }),

/***/ "./node_modules/@prefresh/core/src/runtime/vnode.js":
/*!**********************************************************!*\
  !*** ./node_modules/@prefresh/core/src/runtime/vnode.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _vnodesForComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnodesForComponent */ "./node_modules/@prefresh/core/src/runtime/vnodesForComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@prefresh/core/src/constants.js");




const getMappedVnode = type => {
  if (_vnodesForComponent__WEBPACK_IMPORTED_MODULE_1__["mappedVNodes"].has(type)) {
    return getMappedVnode(_vnodesForComponent__WEBPACK_IMPORTED_MODULE_1__["mappedVNodes"].get(type));
  }

  return type;
};

const oldVnode = preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode;
preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode = vnode => {
  if (vnode && typeof vnode.type === 'function') {
    const vnodes = _vnodesForComponent__WEBPACK_IMPORTED_MODULE_1__["vnodesForComponent"].get(vnode.type);
    if (!vnodes) {
      _vnodesForComponent__WEBPACK_IMPORTED_MODULE_1__["vnodesForComponent"].set(vnode.type, [vnode]);
    } else {
      vnodes.push(vnode);
    }

    const foundType = getMappedVnode(vnode.type);
    vnode.type = foundType;
    if (vnode[_constants__WEBPACK_IMPORTED_MODULE_2__["VNODE_COMPONENT"]]) {
      vnode[_constants__WEBPACK_IMPORTED_MODULE_2__["VNODE_COMPONENT"]].constructor = foundType;
    }
  }

  if (oldVnode) oldVnode(vnode);
};


/***/ }),

/***/ "./node_modules/@prefresh/core/src/runtime/vnodesForComponent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@prefresh/core/src/runtime/vnodesForComponent.js ***!
  \***********************************************************************/
/*! exports provided: vnodesForComponent, mappedVNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vnodesForComponent", function() { return vnodesForComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mappedVNodes", function() { return mappedVNodes; });
// all vnodes referencing a given constructor
const vnodesForComponent = new WeakMap();
const mappedVNodes = new WeakMap();


/***/ }),

/***/ "./node_modules/@prefresh/utils/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@prefresh/utils/src/index.js ***!
  \***************************************************/
/*! exports provided: flush, isComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
const compareSignatures = (prev, next) => {
  const prevSignature = self.__PREFRESH__.getSignature(prev) || {};
  const nextSignature = self.__PREFRESH__.getSignature(next) || {};

  if (
    prevSignature.key !== nextSignature.key ||
    self.__PREFRESH__.computeKey(prevSignature) !==
      self.__PREFRESH__.computeKey(nextSignature) ||
    nextSignature.forceReset
  ) {
    self.__PREFRESH__.replaceComponent(prev, next, true);
  } else {
    self.__PREFRESH__.replaceComponent(prev, next, false);
  }
};

const flush = () => {
  const pending = [...self.__PREFRESH__.getPendingUpdates()];
  self.__PREFRESH__.flush();

  if (pending.length > 0) {
    pending.forEach(([prev, next]) => {
      compareSignatures(prev, next);
    });
  }
};

const isComponent = exportValue => {
  if (typeof exportValue === 'function') {
    if (
      exportValue.prototype != null &&
      exportValue.prototype.isReactComponent
    ) {
      return true;
    }

    const name = exportValue.name || exportValue.displayName;
    return (
      typeof name === 'string' && name[0] && name[0] == name[0].toUpperCase()
    );
  }
  return false;
};


/***/ }),

/***/ "./node_modules/@prefresh/webpack/src/utils/prefresh.js":
/*!**************************************************************!*\
  !*** ./node_modules/@prefresh/webpack/src/utils/prefresh.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { isComponent, flush } = __webpack_require__(/*! @prefresh/utils */ "./node_modules/@prefresh/utils/src/index.js");

// eslint-disable-next-line
const getExports = m => m.exports || m.__proto__.exports;

function isSafeExport(key) {
  return (
    key === '__esModule' ||
    key === '__N_SSG' ||
    key === '__N_SSP' ||
    key === 'config'
  );
}

function registerExports(moduleExports, moduleId) {
  self['__PREFRESH__'].register(moduleExports, moduleId + ' %exports%');
  if (moduleExports == null || typeof moduleExports !== 'object') return;

  for (const key in moduleExports) {
    if (isSafeExport(key)) continue;
    const exportValue = moduleExports[key];
    const typeID = moduleId + ' %exports% ' + key;
    self['__PREFRESH__'].register(exportValue, typeID);
  }
}

const shouldBind = m => {
  let isCitizen = false;
  const moduleExports = getExports(m);

  if (isComponent(moduleExports)) {
    isCitizen = true;
  }

  if (
    moduleExports === undefined ||
    moduleExports === null ||
    typeof moduleExports !== 'object'
  ) {
    isCitizen = isCitizen || false;
  } else {
    for (const key in moduleExports) {
      if (key === '__esModule') continue;

      const exportValue = moduleExports[key];
      if (isComponent(exportValue)) {
        isCitizen = isCitizen || true;
      }
    }
  }

  return isCitizen;
};

module.exports = Object.freeze({
  getExports,
  shouldBind,
  flush,
  registerExports,
});


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + (true ? "\nOpen your browser's console to view the Component stack trace." : undefined));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();
  var pathname = router && router.asPath || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childRef = child && typeof child === 'object' && child.ref;

  var _ref3 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  }),
      _ref4 = _slicedToArray(_ref3, 2),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(function () {
    var shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports["default"] = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject);
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return setTimeout(function () {
        if (!cancelled) {
          reject(err);
        }
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        })["catch"](function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback.requestIdleCallback)(function () {
          return _this2.loadRoute(route, true)["catch"](function () {});
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/app.css":
/*!************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/app.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_tools_keyframes_spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./tools/keyframes-spinner.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/tools/keyframes-spinner.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./reset.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/reset.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_font_icon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./font-icon.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/font-icon.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_font_affogato_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./font-affogato.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/font-affogato.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_typography_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./typography.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/typography.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_tools_keyframes_spinner_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_font_icon_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_font_affogato_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ref_5_oneOf_6_2_typography_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --spacing: 2rem;\n  --spacing-small: 1rem;\n  --spacing-section: 2.5rem;\n  --spacing-page: 7vmin;\n  --transition-speed: 200ms;\n\n  --c-p: #1d1d1b;\n  --c-bkg: #f8f8f8;\n  --c-bkg-inverse: #252525;\n  --c-card-b: #e6e6e6;\n  --c-card-bkg: #fff;\n  --c-social: #fff;\n\n  --c-grad: #009d89;\n  --c-grad-from: #009fb4;\n  --c-grad-to: #009c69;\n\n  --fs: 1.2rem;\n  --fs-s: 1rem;\n  --fs-xs: 0.8rem;\n  --fs-l: 1.4rem;\n  --fs-nav: 1.6rem;\n  --fs-xl: 2rem;\n\n  @media (prefers-color-scheme: dark) {\n    --c-p: #f2f2f2;\n    --c-bkg: #252525;\n    --c-bkg-inverse: #f8f8f8;\n    --c-card-b: #1a1a1a;\n    --c-card-bkg: #1d1d1d;\n    --c-social: #1d1d1d;\n  }\n}\n", "",{"version":3,"sources":["webpack://styles/app.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,yBAAyB;;EAEzB,cAAc;EACd,gBAAgB;EAChB,wBAAwB;EACxB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;;EAEhB,iBAAiB;EACjB,sBAAsB;EACtB,oBAAoB;;EAEpB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,aAAa;;EAEb;IACE,cAAc;IACd,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;EACrB;AACF","sourcesContent":[":root {\n  --spacing: 2rem;\n  --spacing-small: 1rem;\n  --spacing-section: 2.5rem;\n  --spacing-page: 7vmin;\n  --transition-speed: 200ms;\n\n  --c-p: #1d1d1b;\n  --c-bkg: #f8f8f8;\n  --c-bkg-inverse: #252525;\n  --c-card-b: #e6e6e6;\n  --c-card-bkg: #fff;\n  --c-social: #fff;\n\n  --c-grad: #009d89;\n  --c-grad-from: #009fb4;\n  --c-grad-to: #009c69;\n\n  --fs: 1.2rem;\n  --fs-s: 1rem;\n  --fs-xs: 0.8rem;\n  --fs-l: 1.4rem;\n  --fs-nav: 1.6rem;\n  --fs-xl: 2rem;\n\n  @media (prefers-color-scheme: dark) {\n    --c-p: #f2f2f2;\n    --c-bkg: #252525;\n    --c-bkg-inverse: #f8f8f8;\n    --c-card-b: #1a1a1a;\n    --c-card-bkg: #1d1d1d;\n    --c-social: #1d1d1d;\n  }\n}\n\n@import 'tools/keyframes-spinner.css';\n@import 'reset.css';\n@import 'font-icon.css';\n@import 'font-affogato.css';\n@import 'typography.css';\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/font-affogato.css":
/*!**********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/font-affogato.css ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'Affogato';\n  font-display: auto;\n  src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2');\n  font-weight: 900;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Affogato';\n  font-display: auto;\n  src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2');\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  font-family: Affogato, sans-serif;\n}\n", "",{"version":3,"sources":["webpack://styles/font-affogato.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,mymBAAmymB;EACnymB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,uxlBAAuxlB;EACvxlB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;AACnC","sourcesContent":["@font-face {\n  font-family: 'Affogato';\n  font-display: auto;\n  src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2');\n  font-weight: 900;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Affogato';\n  font-display: auto;\n  src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2');\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  font-family: Affogato, sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/font-icon.css":
/*!******************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/font-icon.css ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: 'icon';\n  src: url(data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAikABAAAAAAE5QAAAhGAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GVgCCQggkCZZwEQgKgVyBWQsKAAE2AiQDEAQgBYVoBzAMgQYbbhKjok5sUiayvzrgDaNPvgALFhyACYrJuUpdOvHRKIrv3OQtmm025/7r/Oftqj/3vveqqtsjV/dAqiEU7Wy2nwyhbKnsf2dwSkXiH/5Pdt/2z5SiOClqIElQHFI6K7OsxIL/R9s3K0rwNDe8FctHbGWwfANfJ0Eza0VNUU9XnQxu5XIJpbaby5dbo9hBKBQu35yhCv8VWrfVdApRetH/Wivt+2/nCFrIu0sHWEhUkeq2l3v6YGbDQOVJUXlkBUQyNhUHaFSUis8iniNOpZOaQ7oqAATAR68kGwDwWeBjr1qgAE5WQh8FI4JAJIABNK/R4xTwg28DHmY/PX2QGwNMzbBO231pmIf1w7cQp/9XjRpd8GwWBgMQRk30kFT4JCnJVJIchW/x/7oLdzL+sYDiXUw7ACv9ZxHGhYsGZ2N+xHzTiYuCDIGBNM7Sm39w97xB+35KFJxJ+ZULdQMJ1va/4QaoTu3EeQ9GQJ2NehBYYoCAGS8CDJ2J+7vI8KlP8fa68el4/3Py5l03LLp3k8fKTpS0R5X8sqqL/u0ZKYOJvmon5tgcT7g/ji7UPdh2YM+UIWvC1t5mEYo+gJJzdpDlbKA7neccENBYSG3PhOJuQklEk+i8z1AMSJg3r7OqyigjHrOpvwkojk8RuRca1Zn/87NWc7qJyLCXyq5r93Oy7IV1kCBzHss6XkABnes9mC7QHpgu0QTiYwuXF1AFRVQe0CGNhYOn/6QrFXgAVsnkbBml8FQGen0MjuOapzRs81Pe2SO4MJmBOqQWjbv4QmcohYhCcizmGQubSRBq7Sj8VXH4DUgIQCxMgPMBgvjYO0aiIXlnPq/5gAuVWw3Mt6OAG1CUcPI1F22NkJhx9UmvuCYOeCC89LgM/ZOu6uIL3CzqpoWbCLscL94cpirrUV7A1diPQMDQoL305kANnFcjQY0HosJTd5T21M8OFRGPZVAHa6xOQVxHg3YmhO6mSrmJkRq7BxXnFLk3qOg65wSOVmPGuBknp7jYKLCA8bQoY++cFQiyEURQ1ZMn/QMIwkzFDYcJj0SNcUjELlCMKlDx27uYxQzv2E3XwF46u+vuVg4EoyJoPRCCSk2EkhFGgXBKRFAhkhqiqCOaBmJo6xaLGXZNWyokTmLFNBx8ZPgpEE+JBCokUkMSdSTTQAptA1OhZlZC2gQFb9Qwfn+I9wCKpE5RX0w6SDPS8kAGpKloPcDaTVtNLbrjVM7nQCb+M9OOjBza3smZy0JkoaMHZkMPs3gQOZihT8g9IYtxodCfB6G/AAD1T22zZvuQtUAu1GjKdwN18mcUyMPgWhPId9cf4qnbl1aAym63qIGmID7C+qp7cGpTa5VOnM+QxD7fU8jltUAhQChSkUo+PDaun3dZIjVdCamNoqwG8gghJXq4aTG9m4S1l37yY950PznMR+YYTRhUF+/xAG1SkFxERhVBthI/DLOcGYLtmRztCVon2LJ0WaD3K2pNQgabtJvOMDiBtRFLYKNFgjU2Y6AtuO9daYuKsD8ytKKvKSjQElt+zZPMgBwoLn4LklChmzWboyIlrWFIlDQxMZkJZUuhWOoTaJ4K/WmgxryDR2wjFL0DTfuWe7VejY+lhc60iYliZdq1ZbZBOmnstWDGCy05HkeUwzRA7LCT/aQmD2q6D14flVfR1m5eJfcX7rzvKlBoIY5bDYqsM4fMlLKxroQ/BZID0i1gzVwMiemvn6mRXLMZVr+ajWpoazpOh//EdMYzaTerlN0b23R+Unf2OXu2lhLJorOuszdxA7aZX6l3IXNm2GMRTF+C8nPzDmkY1rhRQT0BeUL/pg0KGmg+GULHpoEmXXyBUdiyMS0GNHfGa93ogVAjiWVwhSSeISiolciQCkkyQ1FQJZWhFZJ0hqHAkolhLiRZGFYFdbIx7IUkB8OpoFouhruQ5GFDXyBobL+eANOO/DLHCiyECGWlEot1JR6x5JVg2SvBiitRsJpXijWvFOteKTa8UmzmlWHLK8O2V4Ydr2yK3YxLNsk7RU+/Nv28sXBeJHQfn6eQnEwQ+ocHAEgAYAAEIAmQBaDqxfcQoCFjHcolBx3KvjbgfvAJnL7p8PQ/fRpS+cxDYUvPnQ1dfPbB4Ir+y/W9aHvxq7eG38r6Vc6cqQ26GZwVdCuotnOcD5I/wJfJX+rGV7X6rzB0WQkAcIGQvbuoS+9PeRc09SVXILh6FAXVsIu6FvCPSPprWz4I4gaOtwEK/QA6g9AhLDTRJ1V4OghAEPBeyp7yVPw1iBPf7ksCc4grvwgwcujs/1l4NA47ACll5LDzwfFqFkSlmljpVMwQbg9QSMPegb6OwgA1611NDJc1032gBcM3kCWxVhzFa41RjbZL76ULOwT1N4GGDcAqdDXxekkztzta8PpIZM6vWgnNoTXesrXdYK2vwyGpD1Fny7YTu1YsWbbPlKJOKlOeHLlKmWadMG15OPeKTTPWmWYc2LcMZvbMCotp8cds2rdg3botWeZs2YB/g+5Rl2p+RWvq9FbiMo+1bqw0p/rMKZAVI6pakC4M9Fqw5MC6GbvweuRFdb/oo3sOWsiDv0Ke3ZQrSw5cWNn13Kwcv9Lkb/r3Z4h185h133MoZfIAtW+x56JdNHZkagyrp2kbzqxa+5uzLwuuy5lw73Apb39/8VJMTWO8yU919ASWoz+U28pky54IiWPlC8C4EysV2nWU+BIYyLEag+dB2wtv9w5fIHp0PU/bHgPuF6DWPqG01qhLdiZDLHJjem1/k++D2GToxbAOL1C/JdC54/B569ywjHkmjXPTOEVjMJjrl7ujfi2d/ZKTyZl2nf6HfGRj1AMAAA==) format('woff2');\n  font-display: auto;\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: 'icon';\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1em;\n  margin-left: .2em;\n}\n\n.icon-arrow-right:before {\n  content: '\\e800';\n}\n", "",{"version":3,"sources":["webpack://styles/font-icon.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,m9FAAm9F;EACn9F,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;;EAEX,qBAAqB;EACrB,wBAAwB;EACxB,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,6BAAoB;EAApB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["@font-face {\n  font-family: 'icon';\n  src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2');\n  font-display: auto;\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: 'icon';\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1em;\n  margin-left: .2em;\n}\n\n.icon-arrow-right:before {\n  content: '\\e800';\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/reset.css":
/*!**************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/reset.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* https://github.com/hankchizljaw/modern-css-reset */\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Set core body defaults */\nbody {\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n  margin: 0;\n  list-style: none;\n  padding: 0;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Natural flow and rhythm in articles by default */\narticle > * + * {\n  margin-top: 1em;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    -webkit-animation-duration: 0.01ms !important;\n            animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n            animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n", "",{"version":3,"sources":["webpack://styles/reset.css"],"names":[],"mappings":"AAAA,qDAAqD;AACrD,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;;;EAYE,SAAS;AACX;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;EACvB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,iEAAiE;AACjE;;EAEE,SAAS;EACT,gBAAgB;EAChB,UAAU;AACZ;;AAEA,0DAA0D;AAC1D;EACE,iCAA8B;UAA9B,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,mDAAmD;AACnD;EACE,eAAe;AACjB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,iFAAiF;AACjF;EACE;IACE,6CAAqC;YAArC,qCAAqC;IACrC,+CAAuC;YAAvC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* https://github.com/hankchizljaw/modern-css-reset */\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Set core body defaults */\nbody {\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n  margin: 0;\n  list-style: none;\n  padding: 0;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Natural flow and rhythm in articles by default */\narticle > * + * {\n  margin-top: 1em;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/tools/keyframes-spinner.css":
/*!********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/tools/keyframes-spinner.css ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://styles/tools/keyframes-spinner.css"],"names":[],"mappings":"AAAA;EACE;IACE,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;EAC3B;AACF;AARA;EACE;IACE,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/typography.css":
/*!*******************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/typography.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html {\n  font-size: 100%;\n}\n\nbody {\n  font-size: var(--fs);\n  line-height: 1.2;\n  color: var(--c-p);\n}\n\na {\n  font-weight: 900;\n  transition: 200ms all ease-in 0ms;\n  cursor: pointer;\n}\n\n::-moz-selection {\n  color: #fff;\n  background: var(--c-grad);\n}\n\n::selection {\n  color: #fff;\n  background: var(--c-grad);\n}\n", "",{"version":3,"sources":["webpack://styles/typography.css","webpack://styles/mixins/mixins.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;ECEhB,iCAA6C;EDA7C,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAHA;EACE,WAAW;EACX,yBAAyB;AAC3B","sourcesContent":["html {\n  font-size: 100%;\n}\n\nbody {\n  font-size: var(--fs);\n  line-height: 1.2;\n  color: var(--c-p);\n}\n\na {\n  font-weight: 900;\n  @mixin transition;\n  cursor: pointer;\n}\n\n::selection {\n  color: #fff;\n  background: var(--c-grad);\n}\n","@define-mixin background-gradient {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(\n    -90deg,\n    var(--c-grad-from),\n    var(--c-grad-to)\n  );\n  -webkit-background-clip: text;\n  text-decoration: none;\n}\n\n@define-mixin transition $speed: 200ms, $property: all, $function: ease-in,\n  $delay: 0ms {\n  transition: $speed $property $function $delay;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports["default"] = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // tslint:disable:no-console


var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function delLocale(path, locale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router.asPath, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils.getLocationOrigin)();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

var manualScrollRestoration =  false && false;
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales,
        isPreview = _ref.isPreview;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), {
          locale: locale
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var _options$scroll, shouldResolveHref, localeChange, parsedAs, localePathResult, didNavigate, _this$locales, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, parsed, pathname, query, pages, rewrites, _yield, resolvedAs, rewritesResult, route, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp, isValidShallowRoute;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated

                if (options._h) {
                  this.isReady = true;
                } // Default to scroll reset behavior unless explicitly specified to be
                // `false`! This makes the behavior between using `Router#push` and a
                // `<Link />` consistent.


                options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
                localeChange = options.locale !== this.locale;

                if (true) {
                  _context.next = 19;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _utils.formatWithValidation)(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 19:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 35;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 35:
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 37;
                _context.next = 40;
                return this.pageLoader.getPageList();

              case 40:
                pages = _context.sent;
                _context.next = 43;
                return (0, _routeLoader.getClientBuildManifest)();

              case 43:
                _yield = _context.sent;
                rewrites = _yield.__rewrites;
                _context.next = 51;
                break;

              case 47:
                _context.prev = 47;
                _context.t0 = _context["catch"](37);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 51:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

                if (shouldResolveHref && pathname !== '/_error') {
                  if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);

                    if (parsed.pathname !== pathname) {
                      pathname = parsed.pathname;
                      url = (0, _utils.formatWithValidation)(parsed);
                    }
                  }
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

                if (isLocalURL(as)) {
                  _context.next = 61;
                  break;
                }

                if (false) {}

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 59:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 61:
                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 77;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 76;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 74;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 74:
                _context.next = 77;
                break;

              case 76:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 77:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 78;
                _context.next = 81;
                return this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);

              case 81:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 108;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 94;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 92;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

                if (!pages.includes(parsedHref.pathname)) {
                  _context.next = 92;
                  break;
                }

                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 92:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 94:
                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 108;
                  break;
                }

                _context.prev = 96;
                _context.next = 99;
                return this.fetchComponent('/404');

              case 99:
                notFoundRoute = '/404';
                _context.next = 105;
                break;

              case 102:
                _context.prev = 102;
                _context.t1 = _context["catch"](96);
                notFoundRoute = '/_error';

              case 105:
                _context.next = 107;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                  shallow: false
                });

              case 107:
                routeInfo = _context.sent;

              case 108:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                } // shallow routing is only allowed for same page URL changes.


                isValidShallowRoute = options.shallow && this.route === route;

                if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                }

                _context.next = 115;
                return this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
                  x: 0,
                  y: 0
                }))["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 115:
                if (!error) {
                  _context.next = 118;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 118:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 123:
                _context.prev = 123;
                _context.t2 = _context["catch"](78);

                if (!_context.t2.cancelled) {
                  _context.next = 127;
                  break;
                }

                return _context.abrupt("return", false);

              case 127:
                throw _context.t2;

              case 128:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[37, 47], [78, 123], [96, 102]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader.isAssetError)(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 14;
                  break;
                }

                ;
                _context2.next = 11;
                return this.fetchComponent('/_error');

              case 11:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 14:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 26;
                  break;
                }

                _context2.prev = 16;
                _context2.next = 19;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 19:
                routeInfo.props = _context2.sent;
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 26:
                return _context2.abrupt("return", routeInfo);

              case 29:
                _context2.prev = 29;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 29], [16, 22]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps) {
        var _this2 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, _require, isValidElementType, dataHref, props;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), resolvedAs, __N_SSG, this.locale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this2._getStaticData(dataHref) : __N_SSP ? _this2._getServerData(dataHref) : _this2.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as,
                    locale: _this2.locale,
                    locales: _this2.locales,
                    defaultLocale: _this2.defaultLocale
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data, resetScroll) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this3 = this;

        var asPath,
            options,
            parsed,
            pathname,
            parsedAs,
            localePathResult,
            pages,
            resolvedAs,
            rewrites,
            _yield2,
            rewritesResult,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                resolvedAs = asPath;

                if (true) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 12;
                return (0, _routeLoader.getClientBuildManifest)();

              case 12:
                _yield2 = _context4.sent;
                rewrites = _yield2.__rewrites;
                rewritesResult = (0, _resolveRewrites["default"])(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);
                resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

                _context4.next = 21;
                break;

              case 19:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

              case 21:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

                if (false) {}

                return _context4.abrupt("return");

              case 24:
                _context4.next = 26;
                return Promise.all([this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? _this3._getStaticData(_this3.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this3.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x18) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x19) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this4 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this4.clc) {
          _this4.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this5 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this5.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      var _this6 = this;

      var _URL2 = new URL(dataHref, window.location.href),
          resourceKey = _URL2.href;

      if (this.sdr[resourceKey]) {
        return this.sdr[resourceKey];
      }

      return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(function (data) {
        delete _this6.sdr[resourceKey];
        return data;
      })["catch"](function (err) {
        delete _this6.sdr[resourceKey];
        throw err;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data, resetScroll) {
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
  }]);

  return Router;
}();

_c = Router;
exports["default"] = Router;
Router.events = (0, _mitt["default"])();

var _c;

$RefreshReg$(_c, "Router");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL(false ? undefined : (0, _utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = resolveRewrites;

function resolveRewrites() {}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, unstable_ImmediatePriority, unstable_UserBlockingPriority, unstable_NormalPriority, unstable_LowPriority, unstable_IdlePriority, unstable_runWithPriority, unstable_now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_ImmediatePriority", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_UserBlockingPriority", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_NormalPriority", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_LowPriority", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_IdlePriority", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_runWithPriority", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_now", function() { return on; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t))},k={map:N,forEach:N,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__["options"].unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,u)}return u.displayName="Lazy",u.__f=!0,u}function F(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,n.fallback);return u&&(u.__h=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,t.__e?null:n.children),u]};var M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function T(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var t=this,e=n.i;t.componentWillUnmount=function(){Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(T,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function I(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(j,{__v:n,i:t})}(F.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u()};e?e(o):o()}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){M(n,e,t)})};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n)};var K=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r=function(n){K&&K(n),q=n.__c};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}},X=1,nn=2,tn=3,en=4,rn=5;function un(n,t){return t()}var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()},ln="16.8.0";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function cn(n){return!!n&&n.$$typeof===W}function an(n){return cn(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function sn(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function hn(n){return n&&(n.base||1===n.nodeType&&n)||null}var pn=function(n,t){return n(t)},vn=preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"];/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:sn,createPortal:I,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:fn,cloneElement:an,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:cn,findDOMNode:hn,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:pn,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],Suspense:L,SuspenseList:F,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)))})}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i)}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return q; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,v=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony import */ var C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _comps_PageImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/comps/PageImage */ "./components/PageImage.tsx");
/* harmony import */ var _comps_PageNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/comps/PageNavigation */ "./components/PageNavigation.tsx");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\admin\\Documents\\Dev\\nico.dev\\pages\\_app.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx("div", {
    className: "page-layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_comps_PageImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "page-layout__image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "page-layout__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_comps_PageNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "page-layout__navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "page-layout__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(Component, Object(C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })))));
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

  if (true) {
    const currentExports = __prefresh_utils__.getExports(module);
    const previousHotModuleExports =
      module.hot.data && module.hot.data.moduleExports;

    __prefresh_utils__.registerExports(currentExports, module.i);

    if (isPrefreshComponent) {
      if (previousHotModuleExports) {
        try {
          __prefresh_utils__.flush();
          if (
            typeof __prefresh_errors__ !== 'undefined' &&
            __prefresh_errors__ &&
            __prefresh_errors__.clearRuntimeErrors
          ) {
            __prefresh_errors__.clearRuntimeErrors();
          }
        } catch (e) {
          // Only available in newer webpack versions.
          if (module.hot.invalidate) {
            module.hot.invalidate();
          } else {
            self.location.reload();
          }
        }
      }

      module.hot.dispose(data => {
        data.moduleExports = __prefresh_utils__.getExports(module);
      });

      module.hot.accept(function errorRecovery() {
        if (
          typeof __prefresh_errors__ !== 'undefined' &&
          __prefresh_errors__ &&
          __prefresh_errors__.handleRuntimeError
        ) {
          __prefresh_errors__.handleRuntimeError(error);
        }

        __webpack_require__.c[module.i].hot.accept(errorRecovery);
      });
    }
  }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ "./node_modules/@prefresh/webpack/src/utils/prefresh.js")))

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./app.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/app.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./app.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/app.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./app.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/app.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./utils/classnames.ts":
/*!*****************************!*\
  !*** ./utils/classnames.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony import */ var C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");


var cn = function cn() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.map(function (entry) {
    return typeof entry === 'string' ? entry : Object.entries(entry).filter(function (_ref) {
      var _ref2 = Object(C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          cl = _ref2[0],
          append = _ref2[1];

      return append;
    }).map(function (_ref3) {
      var _ref4 = Object(C_Users_admin_Documents_Dev_nico_dev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 1),
          cl = _ref4[0];

      return cl;
    }).join(' ');
  }).filter(function (e) {
    return e !== '';
  }).join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (cn);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


const isPrefreshComponent = __prefresh_utils__.shouldBind(module);

  if (true) {
    const currentExports = __prefresh_utils__.getExports(module);
    const previousHotModuleExports =
      module.hot.data && module.hot.data.moduleExports;

    __prefresh_utils__.registerExports(currentExports, module.i);

    if (isPrefreshComponent) {
      if (previousHotModuleExports) {
        try {
          __prefresh_utils__.flush();
          if (
            typeof __prefresh_errors__ !== 'undefined' &&
            __prefresh_errors__ &&
            __prefresh_errors__.clearRuntimeErrors
          ) {
            __prefresh_errors__.clearRuntimeErrors();
          }
        } catch (e) {
          // Only available in newer webpack versions.
          if (module.hot.invalidate) {
            module.hot.invalidate();
          } else {
            self.location.reload();
          }
        }
      }

      module.hot.dispose(data => {
        data.moduleExports = __prefresh_utils__.getExports(module);
      });

      module.hot.accept(function errorRecovery() {
        if (
          typeof __prefresh_errors__ !== 'undefined' &&
          __prefresh_errors__ &&
          __prefresh_errors__.handleRuntimeError
        ) {
          __prefresh_errors__.handleRuntimeError(error);
        }

        __webpack_require__.c[module.i].hot.accept(errorRecovery);
      });
    }
  }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ "./node_modules/@prefresh/webpack/src/utils/prefresh.js")))

/***/ }),

/***/ 4:
/*!***************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@prefresh/core/src/index.js next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ./node_modules/next/dist/client/router.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\admin\Documents\Dev\nico.dev\node_modules\@prefresh\core\src\index.js */"./node_modules/@prefresh/core/src/index.js");
__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./");
module.exports = __webpack_require__(/*! C:\Users\admin\Documents\Dev\nico.dev\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ })

},[[4,"webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlSW1hZ2UudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmVmcmVzaC9jb3JlL3NyYy9jb21wdXRlS2V5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHByZWZyZXNoL2NvcmUvc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmVmcmVzaC9jb3JlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmVmcmVzaC9jb3JlL3NyYy9ydW50aW1lL2NhdGNoRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcHJlZnJlc2gvY29yZS9zcmMvcnVudGltZS9kZWJvdW5jZVJlbmRlcmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmVmcmVzaC9jb3JlL3NyYy9ydW50aW1lL3NpZ25hdHVyZXNGb3JUeXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHByZWZyZXNoL2NvcmUvc3JjL3J1bnRpbWUvdW5tb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmVmcmVzaC9jb3JlL3NyYy9ydW50aW1lL3Zub2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHByZWZyZXNoL2NvcmUvc3JjL3J1bnRpbWUvdm5vZGVzRm9yQ29tcG9uZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHByZWZyZXNoL3V0aWxzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BwcmVmcmVzaC93ZWJwYWNrL3NyYy91dGlscy9wcmVmcmVzaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2ZvbnQtYWZmb2dhdG8uY3NzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZm9udC1pY29uLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Rvb2xzL2tleWZyYW1lcy1zcGlubmVyLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3R5cG9ncmFwaHkuY3NzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvZGlzdC9jb21wYXQubW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2FwcC5jc3M/YjUyOCIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2xhc3NuYW1lcy50cyJdLCJuYW1lcyI6WyJTSVpFUyIsIlRZUEVTIiwiYXZpZiIsIndlYnAiLCJqcGciLCJQYWdlSW1hZ2UiLCJjbGFzc05hbWUiLCJjbiIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJleHQiLCJtaW1lIiwic2l6ZSIsImpvaW4iLCJMSU5LUyIsIlBhZ2VOYXZpZ2F0aW9uIiwidXNlUm91dGVyIiwiYXNQYXRoIiwicGF0aCIsImxpbmsiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInNoYWxsb3ciLCJsb2NhbGUiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhY3R1YWwiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJDb21wb25lbnQiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwicGFyc2VkQXMiLCJkZWxCYXNlUGF0aCIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImRldGVjdGVkRG9tYWluIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwYWdlUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJjbGFzc2VzIiwiZmlsdGVyIiwiY2wiLCJhcHBlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRztBQUNaQyxNQUFJLEVBQUUsWUFETTtBQUVaQyxNQUFJLEVBQUUsWUFGTTtBQUdaQyxLQUFHLEVB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQSxJQUFNeFcsRUFBRSxHQUFHLFNBQUxBLEVBQUs7QUFBQSxvQ0FBSTRXLE9BQUo7QUFBSUEsV0FBSjtBQUFBOztBQUFBLFNBQ1RBLE9BQU8sQ0FDSnpXLEdBREgsQ0FDTyxVQUFDK0UsS0FBRDtBQUFBLFdBQ0gsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixHQUNJQSxLQURKLEdBRUlqRixNQUFNLENBQUNDLE9BQVAsQ0FBZWdGLEtBQWYsRUFDRzJSLE1BREgsQ0FDVTtBQUFBO0FBQUEsVUFBRUMsRUFBRjtBQUFBLFVBQU1DLE1BQU47O0FBQUEsYUFBa0JBLE1BQWxCO0FBQUEsS0FEVixFQUVHNVcsR0FGSCxDQUVPO0FBQUE7QUFBQSxVQUFFMlcsRUFBRjs7QUFBQSxhQUFVQSxFQUFWO0FBQUEsS0FGUCxFQUdHdlcsSUFISCxDQUdRLEdBSFIsQ0FIRDtBQUFBLEdBRFAsRUFTR3NXLE1BVEgsQ0FTVSxVQUFDdlYsQ0FBRDtBQUFBLFdBQU9BLENBQUMsS0FBSyxFQUFiO0FBQUEsR0FUVixFQVVHZixJQVZILENBVVEsR0FWUixDQURTO0FBQUEsQ0FBWDs7QUFhZVAsaUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNuIGZyb20gJ0AvdXRpbHMvY2xhc3NuYW1lcyc7XG5cbmNvbnN0IFNJWkVTID0gWzUwMCwgNzAwLCAxMDAwLCAxNTAwLCAyMDAwXTtcbmNvbnN0IFRZUEVTID0ge1xuICBhdmlmOiAnaW1hZ2UvYXZpZicsXG4gIHdlYnA6ICdpbWFnZS93ZWJwJyxcbiAganBnOiAnJyxcbn07XG5cbmNvbnN0IFBhZ2VJbWFnZSA9ICh7IGNsYXNzTmFtZSA9ICcnIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ3BhZ2UtaW1hZ2UnKX0+XG4gICAgPHBpY3R1cmUgY2xhc3NOYW1lPVwicGFnZS1pbWFnZV9faW1hZ2VcIj5cbiAgICAgIHtPYmplY3QuZW50cmllcyhUWVBFUykubWFwKChbZXh0LCBtaW1lXSkgPT4gKFxuICAgICAgICA8c291cmNlXG4gICAgICAgICAgdHlwZT17bWltZX1cbiAgICAgICAgICBzcmNTZXQ9e1NJWkVTLm1hcChcbiAgICAgICAgICAgIChzaXplKSA9PiBgLi4vcG9ydHJhaXQvbmljby1tYXJ0aW4tJHtzaXplfS4ke2V4dH0gJHtzaXplfXdgXG4gICAgICAgICAgKS5qb2luKCcsJyl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3BpY3R1cmU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUltYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjbiBmcm9tICdAL3V0aWxzL2NsYXNzbmFtZXMnO1xuXG5jb25zdCBMSU5LUyA9IHtcbiAgJy8nOiAnQWJvdXQnLFxuICAnL2Jsb2cvJzogJ0Jsb2cnLFxuICAnL3RhbGtzLyc6ICdUYWxrcycsXG4gICcvY29kZS8nOiAnQ29kZScsXG59O1xuXG5jb25zdCBQYWdlTmF2aWdhdGlvbiA9ICh7IGNsYXNzTmFtZSA9ICcnIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbigncGFnZS1uYXZpZ2F0aW9uJywgY2xhc3NOYW1lKX0+XG4gICAgICB7T2JqZWN0LmVudHJpZXMoTElOS1MpLm1hcCgoW3BhdGgsIGxpbmtdKSA9PiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKCdwYWdlLW5hdmlnYXRpb25fX2l0ZW0nLCB7XG4gICAgICAgICAgICAgICdwYWdlLW5hdmlnYXRpb25fX2l0ZW0tLWFjdGl2ZSc6IGFzUGF0aCA9PT0gcGF0aCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsaW5rfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTmF2aWdhdGlvbjtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IHNpZ25hdHVyZXNGb3JUeXBlIH0gZnJvbSAnLi9ydW50aW1lL3NpZ25hdHVyZXNGb3JUeXBlJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBUaGlzIHBhcnQgaGFzIGJlZW4gdmVuZG9yZWQgZnJvbSBcInJlYWN0LXJlZnJlc2hcIlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9tYXN0ZXIvcGFja2FnZXMvcmVhY3QtcmVmcmVzaC9zcmMvUmVhY3RGcmVzaFJ1bnRpbWUuanMjTDgzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29tcHV0ZUtleSA9IHNpZ25hdHVyZSA9PiB7XHJcbiAgbGV0IGZ1bGxLZXkgPSBzaWduYXR1cmUua2V5O1xyXG4gIGxldCBob29rcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGhvb2tzID0gc2lnbmF0dXJlLmdldEN1c3RvbUhvb2tzKCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XHJcbiAgICByZXR1cm4gZnVsbEtleTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGhvb2sgPSBob29rc1tpXTtcclxuICAgIGlmICh0eXBlb2YgaG9vayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XHJcbiAgICAgIHJldHVybiBmdWxsS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5lc3RlZEhvb2tTaWduYXR1cmUgPSBzaWduYXR1cmVzRm9yVHlwZS5nZXQoaG9vayk7XHJcbiAgICBpZiAobmVzdGVkSG9va1NpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICBjb25zdCBuZXN0ZWRIb29rS2V5ID0gY29tcHV0ZUtleShuZXN0ZWRIb29rU2lnbmF0dXJlKTtcclxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlLmZvcmNlUmVzZXQpIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcclxuXHJcbiAgICBmdWxsS2V5ICs9ICdcXG4tLS1cXG4nICsgbmVzdGVkSG9va0tleTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmdWxsS2V5O1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgVk5PREVfQ09NUE9ORU5UID0gJ19fYyc7XHJcbmV4cG9ydCBjb25zdCBOQU1FU1BBQ0UgPSAnX19QUkVGUkVTSF9fJztcclxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9IT09LUyA9ICdfX0gnO1xyXG5leHBvcnQgY29uc3QgSE9PS1NfTElTVCA9ICdfXyc7XHJcbmV4cG9ydCBjb25zdCBFRkZFQ1RTX0xJU1QgPSAnX19oJztcclxuZXhwb3J0IGNvbnN0IFJFUkVOREVSX0NPVU5UID0gJ19fcic7XHJcbmV4cG9ydCBjb25zdCBDQVRDSF9FUlJPUl9PUFRJT04gPSAnX19lJztcclxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9ESVJUWSA9ICdfX2QnO1xyXG5leHBvcnQgY29uc3QgVk5PREVfRE9NID0gJ19fZSc7XHJcbmV4cG9ydCBjb25zdCBWTk9ERV9DSElMRFJFTiA9ICdfX2snO1xyXG5leHBvcnQgY29uc3QgSE9PS19WQUxVRSA9ICdfXyc7XHJcbmV4cG9ydCBjb25zdCBIT09LX0FSR1MgPSAnX19IJztcclxuZXhwb3J0IGNvbnN0IEhPT0tfQ0xFQU5VUCA9ICdfX2MnO1xyXG4iLCIvLyBPcHRpb25zIGZvciBQcmVhY3QuXHJcbmltcG9ydCAnLi9ydW50aW1lL2NhdGNoRXJyb3InO1xyXG5pbXBvcnQgJy4vcnVudGltZS9kZWJvdW5jZVJlbmRlcmluZyc7XHJcbmltcG9ydCAnLi9ydW50aW1lL3Zub2RlJztcclxuaW1wb3J0ICcuL3J1bnRpbWUvdW5tb3VudCc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBWTk9ERV9DT01QT05FTlQsXHJcbiAgTkFNRVNQQUNFLFxyXG4gIEhPT0tTX0xJU1QsXHJcbiAgRUZGRUNUU19MSVNULFxyXG4gIENPTVBPTkVOVF9IT09LUyxcclxuICBWTk9ERV9ET00sXHJcbiAgVk5PREVfQ0hJTERSRU4sXHJcbiAgSE9PS19BUkdTLFxyXG4gIEhPT0tfVkFMVUUsXHJcbiAgSE9PS19DTEVBTlVQLFxyXG59IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgY29tcHV0ZUtleSB9IGZyb20gJy4vY29tcHV0ZUtleSc7XHJcbmltcG9ydCB7IHZub2Rlc0ZvckNvbXBvbmVudCwgbWFwcGVkVk5vZGVzIH0gZnJvbSAnLi9ydW50aW1lL3Zub2Rlc0ZvckNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHNpZ25hdHVyZXNGb3JUeXBlIH0gZnJvbSAnLi9ydW50aW1lL3NpZ25hdHVyZXNGb3JUeXBlJztcclxuXHJcbmxldCB0eXBlc0J5SWQgPSBuZXcgTWFwKCk7XHJcbmxldCBwZW5kaW5nVXBkYXRlcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gc2lnbih0eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzLCBzdGF0dXMpIHtcclxuICBpZiAodHlwZSkge1xyXG4gICAgbGV0IHNpZ25hdHVyZSA9IHNpZ25hdHVyZXNGb3JUeXBlLmdldCh0eXBlKTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdiZWdpbicpIHtcclxuICAgICAgc2lnbmF0dXJlc0ZvclR5cGUuc2V0KHR5cGUsIHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICBmb3JjZVJlc2V0LFxyXG4gICAgICAgIGdldEN1c3RvbUhvb2tzOiBnZXRDdXN0b21Ib29rcyB8fCAoKCkgPT4gW10pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiAnbmVlZHNIb29rcyc7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ25lZWRzSG9va3MnKSB7XHJcbiAgICAgIHNpZ25hdHVyZS5mdWxsS2V5ID0gY29tcHV0ZUtleShzaWduYXR1cmUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNvbXBvbmVudChPbGRUeXBlLCBOZXdUeXBlLCByZXNldEhvb2tTdGF0ZSkge1xyXG4gIGNvbnN0IHZub2RlcyA9IHZub2Rlc0ZvckNvbXBvbmVudC5nZXQoT2xkVHlwZSk7XHJcbiAgaWYgKCF2bm9kZXMpIHJldHVybjtcclxuXHJcbiAgLy8gbWlncmF0ZSB0aGUgbGlzdCB0byBvdXIgbmV3IGNvbnN0cnVjdG9yIHJlZmVyZW5jZVxyXG4gIHZub2Rlc0ZvckNvbXBvbmVudC5kZWxldGUoT2xkVHlwZSk7XHJcbiAgdm5vZGVzRm9yQ29tcG9uZW50LnNldChOZXdUeXBlLCB2bm9kZXMpO1xyXG5cclxuICBtYXBwZWRWTm9kZXMuc2V0KE9sZFR5cGUsIE5ld1R5cGUpO1xyXG5cclxuICBwZW5kaW5nVXBkYXRlcyA9IHBlbmRpbmdVcGRhdGVzLmZpbHRlcihwID0+IHBbMF0gIT09IE9sZFR5cGUpO1xyXG5cclxuICB2bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB7XHJcbiAgICAvLyB1cGRhdGUgdGhlIHR5cGUgaW4tcGxhY2UgdG8gcmVmZXJlbmNlIHRoZSBuZXcgY29tcG9uZW50XHJcbiAgICB2bm9kZS50eXBlID0gTmV3VHlwZTtcclxuXHJcbiAgICBpZiAodm5vZGVbVk5PREVfQ09NUE9ORU5UXSkge1xyXG4gICAgICB2bm9kZVtWTk9ERV9DT01QT05FTlRdLmNvbnN0cnVjdG9yID0gdm5vZGUudHlwZTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHZub2RlW1ZOT0RFX0NPTVBPTkVOVF0gaW5zdGFuY2VvZiBPbGRUeXBlKSB7XHJcbiAgICAgICAgICBjb25zdCBvbGRJbnN0ID0gdm5vZGVbVk5PREVfQ09NUE9ORU5UXTtcclxuXHJcbiAgICAgICAgICBjb25zdCBuZXdJbnN0ID0gbmV3IE5ld1R5cGUoXHJcbiAgICAgICAgICAgIHZub2RlW1ZOT0RFX0NPTVBPTkVOVF0ucHJvcHMsXHJcbiAgICAgICAgICAgIHZub2RlW1ZOT0RFX0NPTVBPTkVOVF0uY29udGV4dFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICB2bm9kZVtWTk9ERV9DT01QT05FTlRdID0gbmV3SW5zdDtcclxuICAgICAgICAgIC8vIGNvcHkgb2xkIHByb3BlcnRpZXMgb250byB0aGUgbmV3IGluc3RhbmNlLlxyXG4gICAgICAgICAgLy8gICAtIE9iamVjdHMgKGluY2x1ZGluZyByZWZzKSBpbiB0aGUgbmV3IGluc3RhbmNlIGFyZSB1cGRhdGVkIHdpdGggdGhlaXIgb2xkIHZhbHVlc1xyXG4gICAgICAgICAgLy8gICAtIE1pc3Npbmcgb3IgbnVsbCBwcm9wZXJ0aWVzIGFyZSByZXN0b3JlZCB0byB0aGVpciBvbGQgdmFsdWVzXHJcbiAgICAgICAgICAvLyAgIC0gVXBkYXRlZCBGdW5jdGlvbnMgYXJlIG5vdCByZXZlcnRlZFxyXG4gICAgICAgICAgLy8gICAtIFNjYWxhcnMgYXJlIGNvcGllZFxyXG4gICAgICAgICAgZm9yIChsZXQgaSBpbiBvbGRJbnN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2xkSW5zdFtpXTtcclxuICAgICAgICAgICAgaWYgKCEoaSBpbiBuZXdJbnN0KSkge1xyXG4gICAgICAgICAgICAgIG5ld0luc3RbaV0gPSBvbGRJbnN0W2ldO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG5ld0luc3RbaV0gPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0eXBlID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICAgICAgICAgICAgbmV3SW5zdFtpXSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICBuZXdJbnN0W2ldLmNvbnN0cnVjdG9yID09PSBvbGRJbnN0W2ldLmNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld0luc3RbaV0sIG9sZEluc3RbaV0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJbnN0W2ldID0gb2xkSW5zdFtpXTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvKiBGdW5jdGlvbmFsIGNvbXBvbmVudCAqL1xyXG4gICAgICAgIHZub2RlW1ZOT0RFX0NPTVBPTkVOVF0uY29uc3RydWN0b3IgPSBOZXdUeXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVzZXRIb29rU3RhdGUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB2bm9kZVtWTk9ERV9DT01QT05FTlRdW0NPTVBPTkVOVF9IT09LU10gJiZcclxuICAgICAgICAgIHZub2RlW1ZOT0RFX0NPTVBPTkVOVF1bQ09NUE9ORU5UX0hPT0tTXVtIT09LU19MSVNUXSAmJlxyXG4gICAgICAgICAgdm5vZGVbVk5PREVfQ09NUE9ORU5UXVtDT01QT05FTlRfSE9PS1NdW0hPT0tTX0xJU1RdLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdm5vZGVbVk5PREVfQ09NUE9ORU5UXVtDT01QT05FTlRfSE9PS1NdW0hPT0tTX0xJU1RdLmZvckVhY2goXHJcbiAgICAgICAgICAgIHBvc3NpYmxlRWZmZWN0ID0+IHtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUVmZmVjdFtIT09LX0NMRUFOVVBdICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcG9zc2libGVFZmZlY3RbSE9PS19DTEVBTlVQXSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcG9zc2libGVFZmZlY3RbSE9PS19DTEVBTlVQXSgpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUVmZmVjdFtIT09LX0FSR1NdICYmXHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUVmZmVjdFtIT09LX1ZBTFVFXSAmJlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocG9zc2libGVFZmZlY3QpLmxlbmd0aCA9PT0gM1xyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cEtleSA9IE9iamVjdC5rZXlzKHBvc3NpYmxlRWZmZWN0KS5maW5kKFxyXG4gICAgICAgICAgICAgICAgICBrZXkgPT4ga2V5ICE9PSBIT09LX0FSR1MgJiYga2V5ICE9PSBIT09LX1ZBTFVFXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBjbGVhbnVwS2V5ICYmXHJcbiAgICAgICAgICAgICAgICAgIHR5cGVvZiBwb3NzaWJsZUVmZmVjdFtjbGVhbnVwS2V5XSA9PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIHBvc3NpYmxlRWZmZWN0W2NsZWFudXBLZXldKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm5vZGVbVk5PREVfQ09NUE9ORU5UXVtDT01QT05FTlRfSE9PS1NdID0ge1xyXG4gICAgICAgICAgW0hPT0tTX0xJU1RdOiBbXSxcclxuICAgICAgICAgIFtFRkZFQ1RTX0xJU1RdOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHZub2RlW1ZOT0RFX0NPTVBPTkVOVF1bQ09NUE9ORU5UX0hPT0tTXSAmJlxyXG4gICAgICAgICAgdm5vZGVbVk5PREVfQ09NUE9ORU5UXVtDT01QT05FTlRfSE9PS1NdW0hPT0tTX0xJU1RdICYmXHJcbiAgICAgICAgICB2bm9kZVtWTk9ERV9DT01QT05FTlRdW0NPTVBPTkVOVF9IT09LU11bSE9PS1NfTElTVF0ubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB2bm9kZVtWTk9ERV9DT01QT05FTlRdW0NPTVBPTkVOVF9IT09LU11bSE9PS1NfTElTVF0uZm9yRWFjaChcclxuICAgICAgICAgICAgcG9zc2libGVFZmZlY3QgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlRWZmZWN0W0hPT0tfQ0xFQU5VUF0gJiZcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBwb3NzaWJsZUVmZmVjdFtIT09LX0NMRUFOVVBdID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUVmZmVjdFtIT09LX0NMRUFOVVBdKCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlRWZmZWN0W0hPT0tfQVJHU10gJiZcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlRWZmZWN0W0hPT0tfVkFMVUVdICYmXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwb3NzaWJsZUVmZmVjdCkubGVuZ3RoID09PSAzXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwS2V5ID0gT2JqZWN0LmtleXMocG9zc2libGVFZmZlY3QpLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgIGtleSA9PiBrZXkgIT09IEhPT0tfQVJHUyAmJiBrZXkgIT09IEhPT0tfVkFMVUVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIGNsZWFudXBLZXkgJiZcclxuICAgICAgICAgICAgICAgICAgdHlwZW9mIHBvc3NpYmxlRWZmZWN0W2NsZWFudXBLZXldID09ICdmdW5jdGlvbidcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgcG9zc2libGVFZmZlY3RbY2xlYW51cEtleV0oKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgdm5vZGVbVk5PREVfQ09NUE9ORU5UXVtDT01QT05FTlRfSE9PS1NdW0hPT0tTX0xJU1RdLmZvckVhY2goXHJcbiAgICAgICAgICAgIGhvb2sgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGhvb2suX19IICYmXHJcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGhvb2suX19IKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaG9vay5fX0ggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2xlYW51cCB3aGVuIGFuIGFzeW5jIGNvbXBvbmVudCBoYXMgdGhyb3duLlxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHZub2RlW1ZOT0RFX0RPTV0gJiYgIWRvY3VtZW50LmNvbnRhaW5zKHZub2RlW1ZOT0RFX0RPTV0pKSB8fFxyXG4gICAgICAgICghdm5vZGVbVk5PREVfRE9NXSAmJiAhdm5vZGVbVk5PREVfQ0hJTERSRU5dKVxyXG4gICAgICApIHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZS5jYWxsKHZub2RlW1ZOT0RFX0NPTVBPTkVOVF0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5zZWxmW05BTUVTUEFDRV0gPSB7XHJcbiAgZ2V0U2lnbmF0dXJlOiB0eXBlID0+IHNpZ25hdHVyZXNGb3JUeXBlLmdldCh0eXBlKSxcclxuICByZWdpc3RlcjogKHR5cGUsIGlkKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuXHJcbiAgICBpZiAodHlwZXNCeUlkLmhhcyhpZCkpIHtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0eXBlc0J5SWQuZ2V0KGlkKTtcclxuICAgICAgaWYgKGV4aXN0aW5nICE9PSB0eXBlKSB7XHJcbiAgICAgICAgcGVuZGluZ1VwZGF0ZXMucHVzaChbZXhpc3RpbmcsIHR5cGVdKTtcclxuICAgICAgICB0eXBlc0J5SWQuc2V0KGlkLCB0eXBlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHlwZXNCeUlkLnNldChpZCwgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzaWduYXR1cmVzRm9yVHlwZS5oYXModHlwZSkpIHtcclxuICAgICAgc2lnbmF0dXJlc0ZvclR5cGUuc2V0KHR5cGUsIHtcclxuICAgICAgICBnZXRDdXN0b21Ib29rczogKCkgPT4gW10sXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRQZW5kaW5nVXBkYXRlczogKCkgPT4gcGVuZGluZ1VwZGF0ZXMsXHJcbiAgZmx1c2g6ICgpID0+IHtcclxuICAgIHBlbmRpbmdVcGRhdGVzID0gW107XHJcbiAgfSxcclxuICByZXBsYWNlQ29tcG9uZW50LFxyXG4gIHNpZ24sXHJcbiAgY29tcHV0ZUtleSxcclxufTtcclxuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJ3ByZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ0FUQ0hfRVJST1JfT1BUSU9OLFxyXG4gIENPTVBPTkVOVF9ESVJUWSxcclxuICBWTk9ERV9DT01QT05FTlQsXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IG9sZENhdGNoRXJyb3IgPSBvcHRpb25zW0NBVENIX0VSUk9SX09QVElPTl07XHJcbm9wdGlvbnNbQ0FUQ0hfRVJST1JfT1BUSU9OXSA9IChlcnJvciwgdm5vZGUsIG9sZFZOb2RlKSA9PiB7XHJcbiAgaWYgKHZub2RlW1ZOT0RFX0NPTVBPTkVOVF0gJiYgdm5vZGVbVk5PREVfQ09NUE9ORU5UXVtDT01QT05FTlRfRElSVFldKSB7XHJcbiAgICB2bm9kZVtWTk9ERV9DT01QT05FTlRdW0NPTVBPTkVOVF9ESVJUWV0gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChvbGRDYXRjaEVycm9yKSBvbGRDYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAncHJlYWN0JztcclxuXHJcbmltcG9ydCB7IFJFUkVOREVSX0NPVU5UIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGRlZmVyID1cclxuICB0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXHJcbiAgICA/IFByb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSlcclxuICAgIDogc2V0VGltZW91dDtcclxuXHJcbm9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSBwcm9jZXNzID0+IHtcclxuICBkZWZlcigoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBwcm9jZXNzKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHByb2Nlc3NbUkVSRU5ERVJfQ09VTlRdID0gMDtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiLy8gU2lnbmF0dXJlcyBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnRzIGFuZCBjdXN0b20gaG9va3MuXHJcbmV4cG9ydCBjb25zdCBzaWduYXR1cmVzRm9yVHlwZSA9IG5ldyBXZWFrTWFwKCk7XHJcbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgdm5vZGVzRm9yQ29tcG9uZW50IH0gZnJvbSAnLi92bm9kZXNGb3JDb21wb25lbnQnO1xuXG5jb25zdCBvbGRVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xub3B0aW9ucy51bm1vdW50ID0gdm5vZGUgPT4ge1xuICBjb25zdCB0eXBlID0gKHZub2RlIHx8IHt9KS50eXBlO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgJiYgdm5vZGVzRm9yQ29tcG9uZW50Lmhhcyh0eXBlKSkge1xuICAgIGNvbnN0IHZub2RlcyA9IHZub2Rlc0ZvckNvbXBvbmVudC5nZXQodHlwZSk7XG4gICAgaWYgKHZub2Rlcykge1xuICAgICAgY29uc3QgaW5kZXggPSB2bm9kZXMuaW5kZXhPZih2bm9kZSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChvbGRVbm1vdW50KSBvbGRVbm1vdW50KHZub2RlKTtcbn07XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHZub2Rlc0ZvckNvbXBvbmVudCwgbWFwcGVkVk5vZGVzIH0gZnJvbSAnLi92bm9kZXNGb3JDb21wb25lbnQnO1xuaW1wb3J0IHsgVk5PREVfQ09NUE9ORU5UIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0TWFwcGVkVm5vZGUgPSB0eXBlID0+IHtcbiAgaWYgKG1hcHBlZFZOb2Rlcy5oYXModHlwZSkpIHtcbiAgICByZXR1cm4gZ2V0TWFwcGVkVm5vZGUobWFwcGVkVk5vZGVzLmdldCh0eXBlKSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn07XG5cbmNvbnN0IG9sZFZub2RlID0gb3B0aW9ucy52bm9kZTtcbm9wdGlvbnMudm5vZGUgPSB2bm9kZSA9PiB7XG4gIGlmICh2bm9kZSAmJiB0eXBlb2Ygdm5vZGUudHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZub2RlcyA9IHZub2Rlc0ZvckNvbXBvbmVudC5nZXQodm5vZGUudHlwZSk7XG4gICAgaWYgKCF2bm9kZXMpIHtcbiAgICAgIHZub2Rlc0ZvckNvbXBvbmVudC5zZXQodm5vZGUudHlwZSwgW3Zub2RlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZub2Rlcy5wdXNoKHZub2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3VuZFR5cGUgPSBnZXRNYXBwZWRWbm9kZSh2bm9kZS50eXBlKTtcbiAgICB2bm9kZS50eXBlID0gZm91bmRUeXBlO1xuICAgIGlmICh2bm9kZVtWTk9ERV9DT01QT05FTlRdKSB7XG4gICAgICB2bm9kZVtWTk9ERV9DT01QT05FTlRdLmNvbnN0cnVjdG9yID0gZm91bmRUeXBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvbGRWbm9kZSkgb2xkVm5vZGUodm5vZGUpO1xufTtcbiIsIi8vIGFsbCB2bm9kZXMgcmVmZXJlbmNpbmcgYSBnaXZlbiBjb25zdHJ1Y3RvclxyXG5leHBvcnQgY29uc3Qgdm5vZGVzRm9yQ29tcG9uZW50ID0gbmV3IFdlYWtNYXAoKTtcclxuZXhwb3J0IGNvbnN0IG1hcHBlZFZOb2RlcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiIsImNvbnN0IGNvbXBhcmVTaWduYXR1cmVzID0gKHByZXYsIG5leHQpID0+IHtcclxuICBjb25zdCBwcmV2U2lnbmF0dXJlID0gc2VsZi5fX1BSRUZSRVNIX18uZ2V0U2lnbmF0dXJlKHByZXYpIHx8IHt9O1xyXG4gIGNvbnN0IG5leHRTaWduYXR1cmUgPSBzZWxmLl9fUFJFRlJFU0hfXy5nZXRTaWduYXR1cmUobmV4dCkgfHwge307XHJcblxyXG4gIGlmIChcclxuICAgIHByZXZTaWduYXR1cmUua2V5ICE9PSBuZXh0U2lnbmF0dXJlLmtleSB8fFxyXG4gICAgc2VsZi5fX1BSRUZSRVNIX18uY29tcHV0ZUtleShwcmV2U2lnbmF0dXJlKSAhPT1cclxuICAgICAgc2VsZi5fX1BSRUZSRVNIX18uY29tcHV0ZUtleShuZXh0U2lnbmF0dXJlKSB8fFxyXG4gICAgbmV4dFNpZ25hdHVyZS5mb3JjZVJlc2V0XHJcbiAgKSB7XHJcbiAgICBzZWxmLl9fUFJFRlJFU0hfXy5yZXBsYWNlQ29tcG9uZW50KHByZXYsIG5leHQsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxmLl9fUFJFRlJFU0hfXy5yZXBsYWNlQ29tcG9uZW50KHByZXYsIG5leHQsIGZhbHNlKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmx1c2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgcGVuZGluZyA9IFsuLi5zZWxmLl9fUFJFRlJFU0hfXy5nZXRQZW5kaW5nVXBkYXRlcygpXTtcclxuICBzZWxmLl9fUFJFRlJFU0hfXy5mbHVzaCgpO1xyXG5cclxuICBpZiAocGVuZGluZy5sZW5ndGggPiAwKSB7XHJcbiAgICBwZW5kaW5nLmZvckVhY2goKFtwcmV2LCBuZXh0XSkgPT4ge1xyXG4gICAgICBjb21wYXJlU2lnbmF0dXJlcyhwcmV2LCBuZXh0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0NvbXBvbmVudCA9IGV4cG9ydFZhbHVlID0+IHtcclxuICBpZiAodHlwZW9mIGV4cG9ydFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGV4cG9ydFZhbHVlLnByb3RvdHlwZSAhPSBudWxsICYmXHJcbiAgICAgIGV4cG9ydFZhbHVlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGV4cG9ydFZhbHVlLm5hbWUgfHwgZXhwb3J0VmFsdWUuZGlzcGxheU5hbWU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgbmFtZVswXSAmJiBuYW1lWzBdID09IG5hbWVbMF0udG9VcHBlckNhc2UoKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG4iLCJjb25zdCB7IGlzQ29tcG9uZW50LCBmbHVzaCB9ID0gcmVxdWlyZSgnQHByZWZyZXNoL3V0aWxzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgZ2V0RXhwb3J0cyA9IG0gPT4gbS5leHBvcnRzIHx8IG0uX19wcm90b19fLmV4cG9ydHM7XG5cbmZ1bmN0aW9uIGlzU2FmZUV4cG9ydChrZXkpIHtcbiAgcmV0dXJuIChcbiAgICBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fFxuICAgIGtleSA9PT0gJ19fTl9TU0cnIHx8XG4gICAga2V5ID09PSAnX19OX1NTUCcgfHxcbiAgICBrZXkgPT09ICdjb25maWcnXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRXhwb3J0cyhtb2R1bGVFeHBvcnRzLCBtb2R1bGVJZCkge1xuICBzZWxmWydfX1BSRUZSRVNIX18nXS5yZWdpc3Rlcihtb2R1bGVFeHBvcnRzLCBtb2R1bGVJZCArICcgJWV4cG9ydHMlJyk7XG4gIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSByZXR1cm47XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkgY29udGludWU7XG4gICAgY29uc3QgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgY29uc3QgdHlwZUlEID0gbW9kdWxlSWQgKyAnICVleHBvcnRzJSAnICsga2V5O1xuICAgIHNlbGZbJ19fUFJFRlJFU0hfXyddLnJlZ2lzdGVyKGV4cG9ydFZhbHVlLCB0eXBlSUQpO1xuICB9XG59XG5cbmNvbnN0IHNob3VsZEJpbmQgPSBtID0+IHtcbiAgbGV0IGlzQ2l0aXplbiA9IGZhbHNlO1xuICBjb25zdCBtb2R1bGVFeHBvcnRzID0gZ2V0RXhwb3J0cyhtKTtcblxuICBpZiAoaXNDb21wb25lbnQobW9kdWxlRXhwb3J0cykpIHtcbiAgICBpc0NpdGl6ZW4gPSB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgIG1vZHVsZUV4cG9ydHMgPT09IHVuZGVmaW5lZCB8fFxuICAgIG1vZHVsZUV4cG9ydHMgPT09IG51bGwgfHxcbiAgICB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCdcbiAgKSB7XG4gICAgaXNDaXRpemVuID0gaXNDaXRpemVuIHx8IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdfX2VzTW9kdWxlJykgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgICAgaWYgKGlzQ29tcG9uZW50KGV4cG9ydFZhbHVlKSkge1xuICAgICAgICBpc0NpdGl6ZW4gPSBpc0NpdGl6ZW4gfHwgdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDaXRpemVuO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgZ2V0RXhwb3J0cyxcbiAgc2hvdWxkQmluZCxcbiAgZmx1c2gsXG4gIHJlZ2lzdGVyRXhwb3J0cyxcbn0pO1xuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi90b29scy9rZXlmcmFtZXMtc3Bpbm5lci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vZm9udC1pY29uLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vZm9udC1hZmZvZ2F0by5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL3R5cG9ncmFwaHkuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNwYWNpbmc6IDJyZW07XFxuICAtLXNwYWNpbmctc21hbGw6IDFyZW07XFxuICAtLXNwYWNpbmctc2VjdGlvbjogMi41cmVtO1xcbiAgLS1zcGFjaW5nLXBhZ2U6IDd2bWluO1xcbiAgLS10cmFuc2l0aW9uLXNwZWVkOiAyMDBtcztcXG5cXG4gIC0tYy1wOiAjMWQxZDFiO1xcbiAgLS1jLWJrZzogI2Y4ZjhmODtcXG4gIC0tYy1ia2ctaW52ZXJzZTogIzI1MjUyNTtcXG4gIC0tYy1jYXJkLWI6ICNlNmU2ZTY7XFxuICAtLWMtY2FyZC1ia2c6ICNmZmY7XFxuICAtLWMtc29jaWFsOiAjZmZmO1xcblxcbiAgLS1jLWdyYWQ6ICMwMDlkODk7XFxuICAtLWMtZ3JhZC1mcm9tOiAjMDA5ZmI0O1xcbiAgLS1jLWdyYWQtdG86ICMwMDljNjk7XFxuXFxuICAtLWZzOiAxLjJyZW07XFxuICAtLWZzLXM6IDFyZW07XFxuICAtLWZzLXhzOiAwLjhyZW07XFxuICAtLWZzLWw6IDEuNHJlbTtcXG4gIC0tZnMtbmF2OiAxLjZyZW07XFxuICAtLWZzLXhsOiAycmVtO1xcblxcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgICAtLWMtcDogI2YyZjJmMjtcXG4gICAgLS1jLWJrZzogIzI1MjUyNTtcXG4gICAgLS1jLWJrZy1pbnZlcnNlOiAjZjhmOGY4O1xcbiAgICAtLWMtY2FyZC1iOiAjMWExYTFhO1xcbiAgICAtLWMtY2FyZC1ia2c6ICMxZDFkMWQ7XFxuICAgIC0tYy1zb2NpYWw6ICMxZDFkMWQ7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7O0VBRXpCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCOztFQUVoQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG9CQUFvQjs7RUFFcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhOztFQUViO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNwYWNpbmc6IDJyZW07XFxuICAtLXNwYWNpbmctc21hbGw6IDFyZW07XFxuICAtLXNwYWNpbmctc2VjdGlvbjogMi41cmVtO1xcbiAgLS1zcGFjaW5nLXBhZ2U6IDd2bWluO1xcbiAgLS10cmFuc2l0aW9uLXNwZWVkOiAyMDBtcztcXG5cXG4gIC0tYy1wOiAjMWQxZDFiO1xcbiAgLS1jLWJrZzogI2Y4ZjhmODtcXG4gIC0tYy1ia2ctaW52ZXJzZTogIzI1MjUyNTtcXG4gIC0tYy1jYXJkLWI6ICNlNmU2ZTY7XFxuICAtLWMtY2FyZC1ia2c6ICNmZmY7XFxuICAtLWMtc29jaWFsOiAjZmZmO1xcblxcbiAgLS1jLWdyYWQ6ICMwMDlkODk7XFxuICAtLWMtZ3JhZC1mcm9tOiAjMDA5ZmI0O1xcbiAgLS1jLWdyYWQtdG86ICMwMDljNjk7XFxuXFxuICAtLWZzOiAxLjJyZW07XFxuICAtLWZzLXM6IDFyZW07XFxuICAtLWZzLXhzOiAwLjhyZW07XFxuICAtLWZzLWw6IDEuNHJlbTtcXG4gIC0tZnMtbmF2OiAxLjZyZW07XFxuICAtLWZzLXhsOiAycmVtO1xcblxcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgICAtLWMtcDogI2YyZjJmMjtcXG4gICAgLS1jLWJrZzogIzI1MjUyNTtcXG4gICAgLS1jLWJrZy1pbnZlcnNlOiAjZjhmOGY4O1xcbiAgICAtLWMtY2FyZC1iOiAjMWExYTFhO1xcbiAgICAtLWMtY2FyZC1ia2c6ICMxZDFkMWQ7XFxuICAgIC0tYy1zb2NpYWw6ICMxZDFkMWQ7XFxuICB9XFxufVxcblxcbkBpbXBvcnQgJ3Rvb2xzL2tleWZyYW1lcy1zcGlubmVyLmNzcyc7XFxuQGltcG9ydCAncmVzZXQuY3NzJztcXG5AaW1wb3J0ICdmb250LWljb24uY3NzJztcXG5AaW1wb3J0ICdmb250LWFmZm9nYXRvLmNzcyc7XFxuQGltcG9ydCAndHlwb2dyYXBoeS5jc3MnO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQWZmb2dhdG8nO1xcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xcbiAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmYyO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdNZ0FCQUFBQUFEbWdBQkVBQUFBQWdJZ0FBRGs5QUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHaTRibEhRY2czWUdZQUNCUkFnOENab1dFUWdLZ2JFY2dadElDNE1pQUFFMkFpUURoa0FFSUFXR0FBZUZSQXlCRFJ2b2NqWGk3VHNKNkE1STFaMll3enlLa2tZM09oSWhiQndBS2ZEOTdQLy9tdlNRYlY0RC9pcklFbVFLSW85d0JUd3pTUm5WUldNSVE5a0ltUXBmalBHcjlyZzFYaDdzSkdzZ1A0WWVENGNRN1BTNkxTVTk4UFYrNXVWRXo3ZkZPMGo4OWRKdlZmbEZ2elU3ZFU2K1JjVk9rbEF2aExBcU1vd3VlaEFJWlBkQ3cvL3JQNk9HT2hOaXJidWRDUjMrekxIUG5kcE0zZTBJalgyU1N4SVZhNC9mcy9jQ0RPVlRVWWd5N0lpTVNFWFlmR0toZ0JXUUFpREh1TVB6Yy9zLzkrNXV6ZGF3SU5iQUdHdkdZTlFZaktnTlJvNFFHSjJLZ1RhbzRKTVpoUmlOaUdJVlZtR2l2dUR4Ly9ORitpcUVjY0RpWDllUE92T2ZGYmFkV0dDaWlHd0hxYVMyLy9PdzNBM0xsaXZDRXh0N0gyZkFONXN3c3hLMUxaUmRTV1ZxcGEzVW00SUVTSWFXNTRGMkRmU3dKaDNadkhjbWpWRjc4TEhERDBLWHNxaTFaemc3VHh6L1MvNThsUXdCeVE0Z1RjaHRSNUpPejc3d2gxY0FPSy8zMWhEeTFDa0FPT2JJTHVmYTJmWWxkVkVWMTlWRERvaUQvLys2ekh2Zko4RVhEWkhISkk5WEpwaGxMYUNjY3hhdzRxcEltV3hYYlIwdWt5cXBXclJzNysvMjEwcXBTN25zaWR1aENVY3llVUtoZm12eElCUzZDbW14L25XVlZkWGRYMThhMUJJZEFNVm5zM2JYUUJQcE5JWTVPYnlYSDQrenlCd0N4cG5CZ0czZEdoQWpIdEtyU2JENC83OW0ydm5uN2x2Z1c3WUVhb1FycXJLdVVCVXVKMzhtOU00cjhHUUtoRzZKa3F5c01UV0MwTEpjV1dCaHFtdDhlK1dydnQ5NTl3RWdBZElCK2pIRE1mUlVxcHlMTHBVdW1zUHRlM2dSNlQyQUloNUVDZ0lVbUJRSVNCd0krZ0VQZ0RRZytRTkYvWkFDNVJRcEtEUG8vMDg2NU5qbFVNbWQzY1hLcll2R2RlbmVSZG5ZclpleCtZMlltR0RraWRKMXBkWmtEN0x1TWdoRjd0VkN5RUxJR2YreEozK3UvbEN3YmE5Q1FnZ2xwRlVGbmZ0ODVWb0JUTmIvMGdVTlpSVGtqT3NnazI2QTNYUVQ1SmFIWUJCZ0lqRWRlTmVlWkRzZ1h6M1ZXZy9JRUFBSitjbXVuR3V1QnpoQUFRS0djUkVNS0FTcElPNFF3RmhTY2hvR0VTSkFNQ2hvNkR4d2VZSmM2bGtRZEllUmhwVzV2SnJTMjhIRTd1a0dVWVNQZy81T2YxdVBWYVRlL1I3dHREczJqbFFla0F1Vm8xT2tHRUpvaERDSndpS0NROWlWck0yamdSRXkxV2hnM0JxUWwybHh4M29RTEZVR0NBbHo4aXdDdUhBQUFXckhnQUVrdUJjd3U3L3JSLzE3VHcvSitaNDF4UW03Y0dQSXFvM3pCcnd2QXcvZUxWOWJxZG10L2F5alo5M2IzcW5zNlBmelNzNmpWZjZJM3ZEWkRHNTBvMXRjZjVTOUVhcFpQRzliNld6TTBYOVhzSDhweXFERTlIcGN6L2pidlRUeXBsRGFOQlQyUDkwSTlFeVI1L3YyeDZiZ01UQUFxeWxBVkxSSWdvU2hzckJncTlhSW85bGlmTDFXVXpybW1HQXd2dE5NaElUa2NpbGZDRDlEbUQreFpHRkVBRGxZSUhFVVlSUVZOWmlHQ0MzUmdvaWhKeUtZV0FiaWhKQW9sSGhHRW9TUnlFSllZeGpXckF1c200ajVZZGdDaXlGNnc0aWxWc0JaU2FKVlJGdXRFSDJIVGtLZ2dRUjR3Z2lrSUExbkpseVJEcVJpRUNZbWpaUXdXZVJGQXRNQllYcUY2UU1GQkZpZ2dVbXdJb0Y0NWpCZHJEaDBDYVJMQ2pPa3NXS3drUzZEZEhZeVpKSXVpempaWkhBb2c2R0VwZ2tpM3dFcjdQVnByRFhXZndnUEdrTG5zcVc0bFlYcHRodEdOL0pndWowT1lEamtNRVpnRXRnb2tPNDgzVndnMlVVU1hTTEpsVWgwZ1hPTTAzZmczSVcvbXc2T0ZRTGtnVklob0VwRVBtN3ZkaGFUTEcwcW1DMUJQZ0VyblphZHdrekYrTDR0SldPZnhtNFk3WmNJTG10YVphdXFsYjBQelljWE4yYXhnTDBTb2FSSWgyV1h4VTJPUEZSK3liRGhhbzV0aG5seG1vZ2NOQ3JtTVpHNEJaUzZzN0F2bUljWUltS0pFMGRFUENFSmhDVVNKWVU0cVlxUFNJZEsweUd4Q0RTUTJ6Rnk1TUxLUThWUmNFZ0dGQlZoUUJRaEFnUUlVQTZqZ3NRRExrRnpZMFNoRUVZalRFaXNZT0tGa0NTVUJFWVNoWkVra21SUlJKaVZrbFNnS0NXUlFGRUtaVkFBQWFOdXFRSVNLRXBKRWxCQVVRcHhwY1ErWUlXaUhsQkFhVEk5RS9neHNvQ3dLcHNxMkhRODZPR281MlY3Qkw5amtEOCtEUGVPZU4wdldBVm1iVGViZUgzcFdVY3dBc1Q0VGJ5SGU4T1dXWDA2akFqMElVRHZRRHp2V1REQ2VSZGNuQUdHUHc0TnhkMStJcUprQWxhOGVBQURMQkJGOCtrbHQ2dW9yaVFxbHRNbE1jQXBobTlnZ1Uyd2tnMGh0aEtXOVJaWXhTckZDK2FLb0lBQlZyRVJBQ3l3UTdIeXFGaldEWHUrdWVFcW41Sk8vdXoxTU50UHh2S0JhcWZKemdlaE85TzNyVEZ6ai9CQjZzc3pjcDZldExua3ZOUnJWMXRTYTZpR29XSFVNT1pGWTJHdlhxb29CdktyRGFXMVFOT0dBUkdJUWVMaVZrQmdnQVlBQWdod0dRVjN6TWtQMG1yZnVKUUxnVEUvVitiWmd6SkxPczdWVXJjcWQ4dFFMbWpseEpUNGlpUGd1aTlDa2lEcnA2dWhVYi9NbE5PYmx5SWVSTXlMWVJnazk4Rkk3b0VSdDd1SEUwbUNSa0xINWszc0RsaVcyMkRKYm9FbHVnR1dhaElzeVY3dnd1VVFOSVFYM0Jrdm8yajE5azJaVnU2SVZwYnM2THdNVTNyMzByd2Rsa0VEdGFtb2dCM3RKMllEVFhBQU1GRi92WEhBVTQ4c094VkU0YStrby9JN2dMWi9UUytXQXpjQThtU3BBTXNSQUw3OVdiOUNtb2l4LzNVOVBnUk9rWVgyMk9lUVVXUE9tSVBVeVZqTzRuUDRYbndoWDhvUDV4L2w5TGs1TEZkc3Q1VzdzcW4wNVF3K20rLzU3MHl4djVxOWV1WGkyVE1uRG5mTk9XYjJ6b3pNRE05c245a3lzM1NHOVNuOEVVMC9nT3BOUFlLQWIvZWpGMk9xWHJwazBFZDdUa1U2L2Y5ZlRVdVh5T3p5NjNmb3I5Z0I4VEwwRkhpK1FEcDhUdnYyTWZEa2tvdEpQRUI2R1NqVy9BMEN6cFJPWkd5ZEk5NFNkNlRiZ3NZY2ZVR0M4L1ZCUVFHbTRHODFkZnJZTGlSaWI5S2pMWUtqTWgxOUNrNmNUVy9BSjdYcXFOVmV3ckovT1ZGa3lPWE5sQXVVdnJDY2NLQWRRTUZ2NitFQTZjdUhHeUkxZXRwOHZ4YTlDV2R3OWxVUVZkV1NyaXJFa3pCVExhaUFIcWl0bVlLR2RhQ0pualo2NjV5UzY0SWE0c1JobXMzVzQ1SVAxckNkODZkZ0FadVdVMldYK09nUWFmNzFsWjRQcXB2VWFSaGliWnVSQmxHbllQMG1rRzdKa3JwbS9Ld0dkTnhxSVV3Q3F6ak1DQWpxYmlqYkE2SHVWQWROVnJZRCtybCt6TWxDaHhLbGd0dDExSElyZHBmN0N0QzZkakQzL0taak80Uk9NUmdSaGhSZFludWl0b2hlV3Q5Z3lpb1RZM2F1NC95U05ZT1lWQ3hyZEpzL0wzSGRPRGMrSUtybTREa3hFN2R4cTF3RVo4WHBwdU5GQ2JLVUNuNnVXRjR3aFZJQXR1ZXp1c0dUbGRySzVBcyt3NFFOZlJuQW5CNUZXT2hRbXRZM1gwNWxSSHF2cEVtUWlYSThmeHV5M25kMXVkeC9rRU9sOEZZTXcvTTMyN2gxeXRWKy9CWXlzczQ3SmR0S3lJMW41a3BNcjVqUGZvZEpFWGtpb0xKZXk1U0xVYnZwOUdYZVppbzdlUlA2TUd3VlNIQ2h5L1dWbmdNbUVJeFU0Rk10M0pzeUE3T2tTNUs0MFZMa1l2OXRtQXpwdlEzTW9rZVA4ZmIwakNLNTlvZ2ZsYzJ2WXJnRXNvbjI2WDF1MVNwK1gxMWUxWUlkWkxTM0NuYVJ1WWFlSU5BWEZBd0VEVVBCd0Vpd01CWWNUSVFBcGtMWXRRMWhlVVBhOWZPM1FWQ1NDKzFnVGYybGt1YWUrNzF0MVZ5NlAxNnJaekFjK2Rod0JXYzRSOFZWVkZ4RHhYVlUzRURGVFZRc1VYRUxGUmVvdVIyZ2tsSFl6WXNzMXVpMHIzZjRxTkRSZHRUMGwyWVAzSFh1NW9MN0FBWVFZRmFhSFhHR3RWZHFkdVJ3SUcxMnpSUHU1MnprdUJldUszSDZJVk5xSzhzZEFYZUdxaDdYYklkRkN6YnBMVmZmTnlsNlB3SHNlaUE3K1VpNmhMMWFUb0FLZzk1MkVIZm9SNmpnS2NxelZjRXpzQmdaRFpZV255TkxjRjlCS1cxaVhTZTZuNll2RDhUME5naGo2MVNMbzIvUGhNZW5OdG5BSllnZWM0aHJtd2xrWW9iY21xVzlDRlJwbVY3QTVRUktQREZxajBQWjRIdUxNV2s5REhPNVBUcTNjMGxIUitxdGFGOUFwSFhJbVBUYk1UVk5VWXVXVEF3Wk94SEdxVkN4bWJhSzdLcDl0R2pGS3NJL29FWUE2aVQ5WnNjS0EvWXB4cWlEN1Via2h0aExSWStjQXlsanpWSVJ3S1pPbzlHdEIxNkxvcDBzNjBiUk1YS0ZCU29pU1pPeURxbDJ3czFYTFFaVlNoOTRpMXh3a1d2N2lSQ0p1Y1Y0RVVwVTRxd25ieThER3ZySHJWbERuZ1oya1hOVlpWb1NraGJWT25MOWhoZ3ZYV3JSLzFja044VGIyQTFjV3NsQXR1dy9aNmp0U0FNcUxmT2VkTFl5ODk5ODhaR3RSNjdSYW9hK3k3ZTJ1ZlRXU205djg3S24rVzJsV2hjeExjRUdVTFBrSG9NN0ZucHFDVW1XM295Z0FvVjNNUDRZdmJ1ZGc0cDVvbmYxTHpGUVdUNENicDl1VzhtT2RjcVJkRG84dU5lRjVSWUwxUHNXNjVKT0Nta1VNc0g0d09ocXQ5bkNqSldUTWU5SlhwU0gzWSsyTS9nWDV5bFhIdWZWOHgyYXZhSFhFNVRvcC9VTms4eUxiZm1OczdrSGZMUE5xWlh1U293SVFMUUZHQk1DOFhuU1BVd0lRTElGbUJJeU1EMlhjRXRneGdWa1c0RTVWeUIvdUVRc3VJQmlLN0RraWxidUR1OElGYjZBYWd1d0pnVHE4NlQ3MkJDQVpndXdKVVJ2RHdsdnV6cDhDZDFXWU04VnZaL3hEQWN1WU5nS0hMbXlicHhsYzArZmZJblRiOXhURExRWnhXbUJvVElQaHFtR2hRZlgwZ09zbHNqQmlHdTNneHUzbzI4enVzYWRkQTE3RDNEd29CN0haaGRQYmhmUGJoY3ZiaGV2VWdZM0QzRDNvRDZnMmNPbjI4T1gyOE8zMjhPUGxNSFhBL3c4RFByUHpaRWlWY1czZzQxenROWDFZUWpldURCZ3p6SUtmL2w0SC96aDlVOTVpNEJYNzNrT09XeVVDMW02ekE3WVpFOFY3NXcvSlFpMXRZbXRoWi91d3JhL1N1YlJvaEZWOXFRVHI3VGNRalFwVzJyd0VkVC9mMHVZYXM4NFVvMncyMkdvWTFHbE0rUFlKQ3puMFJnb004N3dML0pEblREeDVRUDJZZklxRGQwSFB0elRlOW9QdDcwZWoxYzhwaHF0ZUxzOW02MzBablp2dTMrYlR2cWJjV0RUTUR5SXcyRjFKZ3YxUjI1VXJhUkp1WkpsNVpXZzQ1SmhXV1hQeVhkOU41NjFuYUhyYmJoZG41M3ZVb2Z4ajNSMnBjOUc2ZkFnV3VqRjJOVm56eUtNTTR4bjBkVDdnNkozNUFjdVdJOVBka2Z4N1pXcGR3NXU1M292TFYwNmNVK2Iya2Y0N2ZzK1BLdjk4SW91ZC9qSVg0cjk1Z2ZYalpCU2dJR0FrWkJSWGxSUm9XV2FjZXBDazQramdEQlVUY0R2aXpITzQ0UnVYR2J0bW1TWEVDNHdGUllTc29kV1l4OEwzL2Y0SlB6cytVZjY1M3VGN1dQTCt5VHJDcGFjQlU1ODNXR04yM0FzeHhtNXJCaGc3UEVYdC9XSFB4bjRpaituZTAreDlrK3lYd2cvK09MalkvZys1MS92cERUa2Y0b3NpelZ1MzVXQmRLZFVaZm9TakQwSWZaSlo1MWxDTnlyVzArczBCSVozOUw1MTYvOVVkczl1TUIzMFRrcmRUc21FTThxb1kxbk43NGhRUU9CdU5SVXZSbE5HSEp0Z2RzZkxtMGd4amhPYk1neEFvR202WmMveURpTkF1Q1ZmRlNndldBY2x0TE5ValpTa3lNRXhuclBKS3daYWkrVERXSm1tWVhKL1d6eG5oR1dRT2dJeThweXdLWEJkMWVMMW1wd3ZBOG5XTWlKditWSWhYNDlvMXlGNGh4MkFvWDdRVjdQSkUrNElhRmwweDJMZ0s4TE1kSk5OMm5DWXhoMjArQWlrOFk0K3BkZGR0TFFvdk5WMUV5S2hSSzhQSWpNQ256SkcwM3htemhycURkY3V6NjA3aXdSM2dWdGJ2TjZiaTg2MkhzQjFHbHAvWVYrVzdlMzZhWExDYkJjMUY4WWs0N1EzdFVXUlcrc3pmSmd6NnFHNjZBQVE1cGNxUEY3aURveXpQazVVUjBMemJBNDVKN3VXalNhaE96N1NCUG1icFNOQlgwY0xDTzJBdTdMaURPTVBRUGdsMmJWU2l6bXFWTTl2R1Fkc0l1ZE5vUjlLeFRyNHVDSXFsbkcwdWRLa2FrUDF6YThLR2pPUGlxYnlibitWQzZQTlNHeHh1MGFsdUZVbkZVWEdVcUU2S0ExbTdqZWxTWkhMaFJTdHRRdFVmZHRlSlM5cjZqTVIvdXRRNHBKRnoreklUckpydnR6QlNHaFppaWg1cnFjM21JOHFLYWRzRHFEc2dFVnlWNGEwa1pHdThNWk5wNWxVMzdrVGFWU1NVbzd5aE9YQjlWYXRFaTdSN1NwWHJqSy96YWE1cnVwM3E1cHNGVmJkWlNma2M1dW9jVktwQTZwWDFQeEZwQWxEQ1QxaGVSNkRGQlJvTHM4aHRxSkRia0twRTJlcUxhWEZzMk14SE1MNHBiZytjNUhFRE82cmN0MktwZ3JLS3ora0V4TWFqamg2VWRIazFzcnQrd1lXMTdYSmRzSkkzVDBhZXdTZ2NMbWhWUGNKYkF4M0RuZjB0cG9SbW13MDNhSVNMRCtWbXJLTzV0Vm9neE80bHpQUVErVWF4cis3Ujc1c3dYYXAydzhoZGQ2SVhaZDFBbVBLc0Q2ZWs3NGNuam1Ed1MrRkhKbTVtbXNId3M1dm8wMkVTODhwQ3U5RHZyY2tsUFdMNlZIL0hqYk1lMUZFRlhiZXRKYXlOQlAvbExNS0dQa2lDTlhrQ2svQ0lzZ3IwZEdiYzIwVTRBYlNnc3RUcXEwcDkrd1N2aXpCU085QVI2ekpYTzFpdTJXRExGVVRMT2wwQkVmZWxJb0VrTnVETVhkdHZGSW82WUVzd2txT0dDd1AwaHoxMldickZZb1J2eWF5K2pTaHFsWDhUNGt5U2Q3WE0xYXJVOFc0WlU2eWpCekQ0eGJqMTcybjhGemRyTEdhaXR6cHByeGtFbG5NenB2VUdMaVMrU1h5RHRGNzgrT0Q3QmNnOVBXTGlSN0NlZGFFYnVndEUyNGRVbUVvaFVmK2p2ekFFblJIeVdYNjVkVlBDVVNhamQxb0srKy9XL05RciswLzlibFVsOTE4VUR3S2JEbkM2THBuQjU4dThWeDVOaHhydjQvVm1UQ1UvZk8yMHU0d1kxZk9TZXUydldEc0dMWjBNTWJjV1U3Smt1Z2FKZmJXcnQ2K0N3aDVNUU90aXJWYjNPWnZQaVRac1RDMVhWSkE0dytrY2ZWUGxKaDRUajZ4ek9GR3IxYlpkdG1CbFp0MVppalViYzF3OStyNUx6Nis2TDM3OG43Y1RITDd5ZTdEcmFjUWNyeHBOTUtUa2FoWllrd2VvR2kzM0xFVXBCMnNpQ2wwbldPMzVUeFN1NjRLV1lQdnIvdG5LVXhkOFpSSVFsOXBIY3hIZVVaTHA2V0l5azlaT21HYkpld3Era2FpcGVjaG41RWtIK245QU92WTNzZDIrQUIwM3Vabk90OTJGSDZUN2RmL3AvQ2RKbmlCNW9la3I1RzFteEp2VVE1Q21yOTlEcm5peUdDTGZhdmZzR093dENoZEdoeFhRVUxmT1E5TzN2Z09JRngyb2RPbFFaOXlWTmhyYThhL2VReTg0Z3o5bm5aTFlhNDY3ZXMyYnFlRHUreXo1NEo3OHZqTjZSTS9uV2d4OG5Cbzl0M3dESnYxMmd2Z2dKSWVSd3FIT0s1bmR3T2tHRTltVnlEVkdwRngzWitTRWE1dGJjZk90Ryt4YnhWZHg3QlllcTNPemlHMGlOSTRLdUtReksyR1NzRzg4TWFaUDdTVVVwVWdLekxJc01jbVFlQzlzRi9jYzJjS08wMVVkZ0RPRldabjJoOG9yTVNyZDMyTFQ3QnlmZHQ0bWR1Zm14ZkRjVDJyM2V5a1Q4blYzbEJNSjBZWFErK29yZW9vK3VrZEZEczVqd0xJanV6TUhJY2owLzRxU3QxTEtXL1g1SVdBQTBjOE5pV0NlRkpuRGJSNytPcFo1bDd2ZHV6eTdGdzdheDF4a3RHUWM4UFZvTFVremQ2ZGw3V3pvU1lGZ0UxN29kSnJIVzZBOUtQTHRCMU0xeGgwNEkrYThxd1F5R3NNOTBzZ3FBV08vTTR3RmJiWVVXbS84R2M2WlNPcjVwQmZsSVdZYks5eEI2cTJEUVNsZU9hVVY1SGVJZkhneDhwWkpUU3F5ZzVhNjI5NzRtem5JMlIzN1Nkc2V4RDVmZVRQMFVLVEpGcHdRR0NXbUlYN2wxUWRFSmt0Z2xpQldHQXFGa1FIdndhZEZyT0FGNzFjZU1EcDdEWUlQUVJLcDFYUWRLQnAvOUhtQTgwQ3ExUHBYRll1c01RcWhBZUVGUllGWDhCUjFBK3pkenNwankrS1JPZEZvc01pMFVXaDZOdDRqeHF6MXhJekk2K2ZrZWQ4NHA5WkFPSXlGbmRuLzZ3N2wwb1l4bTQ3eGFmZjJiMjNLU0pMZzg0ZVF0c3BzVWtIQm55RDlwUGRJaWxrVk1yc2ljOVVJZkc1QTBqNlJveGpOankrWnFXNDdTU0ZBb2Y3WHo3NzJlZEtTNmh1ajdLL2lEMGVJMzZMSW5EeitLc0NGYXNEZzdXZnZpeDdxZEJBa0NMKy80bjl3NVNqRmtPT1dwMnV0S1E0a3dnTlV3djdQMHJxeDgxMW1mK3U5N0VTUEI4em1STk1MM00xZS9FUW1veTBzdk0xcGs5Yk9zd2ZteHpkVm0yODhid2oyM2hCWmVtMlliWk9iSXhsT3p3V1lWR1dZZGxZUjB2VmZxSnlNY1R4YmwrVlBkZkc3Q3lhMmM1dTloL3ZsdERUcGJIYWl4anR1V21IM0lSNnZIV2ZhOSsyL20xN1hYdTNTdkVWaHA5cWNGNS9ZR0xvdjE1OS83TGpLTGljYzJWZ2NKNkFjUXNwandydHlYSExJWFl5YlpSOWlvWDBZS2twZVUyL1cvSWljZXJtbnhDSkhOWm9OMjNLUXcvNkRLOWR0MkRCK0ZXTGhPRkJweHZkMXdoSjhTVzJtR0M3UW1IVCtvdk5UNHRyYmM2RThQVFFJRzFPampiSVhHWDdZYWtFUEdGeWZ1WnltOXlwQ1FkRHl5cnlqNjdNSE14TjBiOHRVQlM2UU1HSHpLbCtSV3dLZEdZQU82YVFxZWZGK3NrU1ZIV1orcmZCdzB2ZUhrY2xCUGNmZzlPKzh3eUxyVFNyeGNsU2c4cmgwRVVFTzdSQnVZYWt3aE9tZWRrNTJ6SldTQlBYY0x5K211UnlyM0U4SG5tZ0FYZVNFK2xTWGxOdUh0eDVhdEJua0NjeEIycDFhUTY1d2VDUUIxazFnUkl6TTZPWkZ4aVFZSlZwdFdteWdJUkF6NmFNRFd2WHNGaXI2ZlRWTE5ZYU9qdGh4c3RyaHNOOTR1WDFoQnZPMHhVR2FYUDFTbVcxS3NjdmRya3I0ZTVDVSsvNTFSNFNzOFEvU2EvWDV1WHFnblhQSnptY1NTLzJWVGIzS2xkUG94djR6TFRLb3ZzL0dzWUdZR2hQSHZ6NFFER1hzVDllelB3WE5PSkZuMzJxRjFTUFRqcXJpN1BSdjBkdlNaTUdSRHVDNUpuS2tQeDlaWHdqZzF2elVIai9iMklOL3VrZFFNMEZxM0xEOCtSY3M5OUgvdkxZWU9rOFk3aC9kWHhVUUtUUW5OQkhJSWlTQlZMdlBEVElTT3hiYWN1MnI4dklXR3UzWjZ4YmwyRWZMQ1IreGE2S0tITHpVN1ZNTmpWZGIybHB1bjY5cWJYdGZGMzFKYWdKdmI0MlpuMDVoLzFhS2Y3RWM4NmpPbTJVbGVZNjZIK1NjRkRuQ24ycFBxYytGeER1OTVaa3R4V1krY3U4c2lTSkFTSDZoQ1NCOE1OMVI4OW1rRVBvNzIzbXUzUVhrN21YRWdzeXdxZVJ4c2pvbm14cWRuUlBZNlRaMG1ianhLM1FIYjNFbHZYSFVHUDZaYnovTmEzVXM2M3R0a1JGdVA5RFFraDVkT1N5Z2dKTFY0MGg1UHJsandKbE1ab29YN3ZpQkVFNnRUZkoxZStLbnVsdlZiV0FmdVd6UGNYYityZWRjYWs2K3YyYi83Wk5tWi9yWVZrbnZXL3pDVmlVUkUxYUZDRGFpNkJ5ZXYvSWo0MnNxVFdhOUo4cFZhNng5akZYd0JEMisvWnZmSis3RkVNWVJxZ3V0N0c0TVVrZXkvL1pVQTNtTTdXSkQvTDZsT2liYXNzaVYrQVE3dmJLcTRkSDNoMlBQK3pUME5ldmtRL2hEdm0weVFKY2JNZmh6THpEYkZmQUVHNzVqMWlrbUZPcVZ1NTE5N0FicmNEdDlmRVVUeU4xa1ZGRDhrZjExTFdiNjYraC9tUHZ2em90aVpxVUpwTkZKRk9USTJSeXZTNVBiU2lNQ2dsMDJQV040WnVHWkxjSUJBOFBrNmZQTFg3NkVyMHYwWXpGUXhTekExZy9WWWRyelRKc2lUSW1oV2hyRk5sU2FDTktJckpjek5xNnBybXpCL25sSk5hY1ozbjZZbnJsZ2tlUTJneHlnaFA4dmlyVktmWkFuU3JUTHpnMkovOTIwS3F0ZHJsT3NXRm4xeTdYcnM3Qmxid25zRk1iV3A0SVdUN0NRdEdLZFFKaFF5QmsyZ2lsSklhVU83VVJBamY1R2ZtbU0vS3R1TXJxaW1yQnNZRDJnRjQ3SVpQUTJ4NHdoQXNLU1BOMHB2bm9GVzBiRzQ0M0hoKzU1RFZCRzZuY1kvWS9Na0cvNkNtTmZ2UFc5ZmF3ZFNzK2I4cXc3ZjN5bXR6NW12Nm1mMkRnRThZbi9ldWxoc2taVndJaVNrQmNNMEl2OTZWSS9qVHhWc21qUDRVdHRUM0w1dmZtNTA4L2V2TUVrOHFJSlBaRjhzZFBvamdyYzNrQjU5NklFamRQWVExayttaFJFbHMvZ0FVdmpoYVhVMERYR3E2MC8wT3pTbnFWS29zT0YxZEhSdmlWeG9ZRXVPdno3OWYyWnd4aHdYdXhlTHJGd0FyRkhVLzNqV0RWRm5yYlBzUVJwaWd6WW95S01rZFlaSEJSOEw2dXhMSTdUSi9MRW96a3NnL2paV1pueW8waXJWWjNLaTYrSHgvakdkejZic3pDcEJuM0o1VXIrbmlkRnJjY1F2SWoxT1ZHNDhJT2YwUkV3ZjlteFhwdkdnWkQ1TEY4LzdmU3Q3MDRKbHBIeEpGWUxFOU8xT3hUWFhSUHROcWxWdlFvNE16ODlHVDMzSDAralF6aWNNOXpwUWsxckk1UTIvUUdiWDYrUGl5bFBQL2ZEcVc5MW9jNzY4WE1YOFlLeXpkcWlnMDZUWEYrUkJqOEEwSHgvUlNmLzdsWTlEbWZQeVhhSXJ0RUNyYmttWVN1UHoxdEhoeXQwQlUvaEoyV00vYVU0ZkZmYnBIWHVhS0djR1RuZ3VIVngxeDRWOUV1a01DWFd1UEEraUVzS0ZPOEtsbE1YMC9ER2JIMVU2eHZaZkQ3TDJEeWZvWGdPdDJIeGNURFB2cnJVUVJKNTVSQ2Z6S3lyVW5PREdDUk9EbHpqKzR3VWhDbVpxcGZYVmJRSGxuNENRcC96dDZMcmdkZ0FxNzdHQXN4aFVhNW9QYk1mWTBad3ZRT1lKRmNRYXk4K0lFeFI5WjIwRTJuTHZVTllRa0N1QTZTeFlzcnZnWTd2cmhzSmtSQnV4dkpHbDhUU0J4d25lbkQ0bU55ZHlKV0tVYS9RbWJ5SkgrSHcyaGp0b2hWaHplUCs1dUtVeFBDSEJHbmwvanBPTFRKT0VsSDJlWk50NVgrS3BOVkxBOTZwNHBUdkVvZllBbXhxYnRMdlZMVHBtYlZZMXFwUEg3bTdHQnFZSk13SkNFOXdXTUkrL2ZvaS9YQVczVnF2Rzk4ZU00TTRCSzVmRUpCN2tUMVJMLzJFcVM3MUgvZW56NWNFQ3Jxajh6SW43VC90cG5mYkh3ekhOOEN5bkJidEdGNkZ6NnVQYkZkL3RaOTlwL1pseGhTVWFxTERNcFJlcGlxdmxZS2krWENaZUV0N0pwSkJ0TEl4YUhiUnJmM1ovZGsveVg2WDlxUWJqS1dSb2xNZXBlMDlxYXlOTVFlUFJQWWhSK2liT2pUMVB1dGFFUjhLeVQxN0tMTWNUZjhRSlVpSWV2bUVKTG5ZaWR0cU1JUHVJMW5GckhySlJXK1NPTUt2M3BOM3dnWlA5UVZPR09QRGlsVjNxeVZ1dlFpVTFTcE1kMWtpaE4vV2xIL21kUmpmdGNYWDVNWUlkdFh4VmVsN2hDN1Z4UFFIS0svSmJ6eVRHRHJ6dnpHZTdkenRGUGhzOGJ6Qjh1YVNjQWkrVXRoYko2Wm50U2VqRWxKYW91aFkvT1h3RWorMkJhenpxQnYzNVNPYy94SnZpZnJxM2pEWCs2S3NiVFNkeElMRzBydVZMeVRhVFhwV1FwZGVFbXNwVEdZdFpUSEZmRW9PeSsyZE9ZbUVhQ1p2MzQ3eE5IZGFzNHVLS1RGNXptbFRxc3oyaFZkYWkyVmx1YkZyZU80b1FPRnRMZE1WRldkcXEydG1waW9ycWxlL0JPMU5jd3ZybzVmM0cySjY0NVBnS0x1dUlUNEJYSHgzUlNQNzZJUGEycU9YdTBJTnFqenM0T0M1U25pSjQ1NXRSS08wNVBYeWFhZTJGRTQ3M0d5T01DNVJacXAwV1JwdGNpZ1U2dkwrbURRU0Jjd3poV0p1T01pNGNpZkQ4T0lNR2lxZEhHNE4rM2VMUS9kS0tTVWg5aW5HS1JsYWdUZEpOMityaVpLS3BrVlgzRnNsTVRYbDZIcWF3ZkZUMDh0cnFBektobTBManE5ZzJiQTNiY3crTTBhYTZDQktIVkNYY3JSVSt6SDFlSjBGeFYzdy9QK1hkNmQwaTVJSHFhbytnRVQ5SGQ5TmhnNUVQZUpyY3BxUnJLbjBLTHZoWXJmTlBwR21TbVFRL2lMTG81dnlMQXlTOWZVK24ydEI3ZjB3TGNUOXBFR05wVE1XemV3ZGwxcGdXSWtsTUw2UHN6N3ZWOVd6N25IS0hOZVZIQlhZbUtNWlUyU1g0M1paKzY1SmJaOXZYbG5wa1FXa1h3UkRPL3Y5NWVsSlJtTWpZNGRoSElQMmdLUGY3MlZvaGpTNVdmYUhONVJubFZkR3B3dFVadjhPV083b0VFY2Z1ZWxiVDhHK2Zra21BTFY3THdVNnFKZVBNM2x3VENrTmRWenlHZWZYZDVMcE85akJJUkMyOWN2eGV2cjBmRmVaMTMxOThHUXFUbVMxNS84L2ZRTmkxTWtUZjNDMFVmTU9weUtHRno4RExOTFBUbjFPQklyNmZMYW51TmVrWmZ0ODhjeStiL1Q3amoxcGliV3ZscXk0NmhwbmFtaFIxdlpHLzd3dWJ2eU5QZEdKZVU2TlN3M1hGRWVGcXdzdFJ1MXhydkVCTlNkdGQvOFUySXNQN2ZmdHQ3YUVkQm5wUTd2NTFOdnYwczJudVB6RHhudGVISkdmMUV2TWVNLzlqelllZkRvdVI4UHdMakY4VXNrVjY4cExqQkdwaFNVUDF5RnNRVDFYTlBxYVovd2IxYlhUQXY1aDJUdHpLcXFsM3orT1pseFFNUEtiUFllYXgrU2hyQ01JZXl2ZlpJTDhtNlBzMHUzTVNtbTNBY1pjTXpsOXlicVNQNTJrUGsyTjFCbmpxd1VuVFBlMjh3VzBIOTFXVVMxUTFsYTBweG1taHR2U0pVcUhlK05rd1pHK2hZbGtNVjZ4NFBEcXZpdzVwc0M4V01mU240NGZCNkxqN0NtVGwwV2RIdlFXSTJDWFVQWS9RMnAxZGE0di9QTjg4OTFCVG93SCtidG4vYm8rWTl6TVRGdWlVWkxXR0xTNFB3TjdaZzAyNWpPNU91ZXl1OG1rcTRkS05NODA1ajk2V2Y5OGdpTVA4Tng2MG1nbWNodjhmOUVJdnBVTFA1ZUxLRVBsM1RrNytnWWxTcmFyRmJGbUZVK3Z4WDVFTk1GRkxLRzdBYVRLWkNiSVRWMG5OZzN6Z1pBRGkzQ2h2VkNrNUR0dFVRejE0eG5ZakcrUzVtWUFhcG1Ea01UMXg2aWZ0cThaVFBVNnB6RXFRS1VOd3JMV2tHbmwwdldoaHVkbGpEOGV5UGxWTVlRYUIxZi90QmFVQ24wMzdGN3B4dGhwQVEzZmZPQ1FIeDBQdEFkZ1dSVThIOWtoMGg0WGl6Y0psSHBQdktPTkgwdW1iMU9sa052Q1NSVFNZRVdQVE8vdHl4THR3L1pBdDJaRmY2ZVYwYUtMYlVrS3JuV01vOFZGU1piL25WeWRQekdsUnN4aFBWKzhBTUJBWktvVTFSTklDNjVKMWs5QkZTS0hnVStPU016VlQwT3B4SlgrQXdmblJwc2Y1WUJqeXBLVWQ3QVhObDlWWnhpMnVadmgyUkR6VTBjeTFvQ2lwQ1ZwcDZYb3d5YUpoQ1hjOVQyZ3ZXczRWa3lRY25WNzVrOEQzcmZ2VENub3QzS0hqbXdLZzZvL3E1cUNIdUVYVEtTRW16azFUNVI4MXFBVDlWWUlVMFg1MWN3VHVmdHBmWHlOcFBNaFJodnpPZGZFZTFlL0FTMDZWR25xRXV4Q0JDOEJxWVhJUHlPdWc3UUVPSStBd05vVTlBWlNzSzhuZUw5ZEEydS83NUJaclpuVldNaE9Bek1HQWNtM08wUmxPUEptejQ2bktiMTcxNUZJTDQ0bGhpZGF2MFRlYjMrZVBiTVBwbno2ck1rVGovS1lWYTgrTWhYMHN6cDZTeTNOajljaU1RUFo4VVB2ZWFISkt0eEcvTEpZODZaM0JXcElnY3B0c2lkVDRBcEZWVGhPL2tVMUdocTRyd0hyS1loaFJUUllGWTBPR29hRjUzMFdEUnlFdS9OZ0lRSU1lQ1pHTEREREs2eUY3TVdacTJYOE0xY1l0RGM3MksyZTVrSWJDTkV0SGhrN2pzeFQ5NDI5K2pnNjdtSGF2SnBxQjF4NVRHSVl4MlgxajhCalU0Wmh6cGpOWG5SM0ExZW1wdkU0WXRqNE5EY2Mxai9CQlF4WlJ6Q3hhNWx5dHhSTnBwU2pwaVZLcmZQelpxTkJuaGl3NWpZMEcwMkZ4bU1VRzBKS1Z5cHk5NEJDWDIwYkxBem1RaHNDVVJncTBLRVcrYXd4aEZ6bUdVQnpnZktMQnlGcm43NHlmQ2lyZzlYcjVVSVB2aUNCZnpnNitScy9zUE1IMzNUWHpQLzlQdDAwZmEvbFZvTHExaXpQOHZoVC9JZXZzOE9rS2J4ZHZkTEx0WDVjRlZlZlZEME1PQVZwS0hld1BmWDl2d3k3d2N3dUxxZVNGSlVUWXF3MzU4VVgyQUVqTDBHTUIvdzlOYTVYVnNqUDFzYnVNM1pCSUJwNmMycVdra0M3V1pPSVhTWFR6SXVoRDBQYzVJdjRPVnE2a2V0OEVuTlIvUEthTnJRZ0pvMzJMU2tTNHBveExNem45KzJQTndIRVkxNTNFUGhZWWloMDdNdjcvSzJLVGpVMUw4SGk1cjY0MkNsVi94MndOMExGTlJzc3Y2bktMOUlTYnFraUNiemhjcit6MndnNlpMeWFrOHdrTytIZUx6K2tFL3E4WTg4a2ZzeUpsdmRtN24vNUhUZGxGdHk3Y01IZWhUd1VoMmpCTEtwUnZzZGtFbndvWDRBWkdaMWJrc2ZxLzNLem1QSStVN2plVkt5YVdjRGZIc3VZL1dZN0RoaW9wNGNOVmIzY1d0S25rUElRVGxnVTZoNm5xOGdrdHpPRjVTVmR4b3pXcjM4V1BwY0xlSGt0QWZzeE92NnVia2NlL0hpQmR1RmttNnB1SHBjUXQybS9QNnppbXNSQW9EeWEyamJJVG9pTERSWXI1WDVKbGlUVlJxSEJFKzBVTjJzVEEyQUFoZUlyRE9hYmFvTDB6N3g4YmtDRDl4bTlmK3pldkppMnN3S1liSjdiNmNzeS9IaElrOVVVZVIyRmlubnV1bFRtdWhvMVBvOVgxREpEU01YajFGQ1FHdlRsTUMvVzNjd2pHR2NKdkUvWHpGS2JyOHFSdFBLN0llVzBzbVZTZUMwa0VCckVCaGxQUVhnakVLMFFCdy9UaHZXZDF2Vi8wL255YWZKSUlubXV3Y0cwa1BNT2E5RzVJUkhvM2tHNlFWWEVCc3dZbkxJYmxSZDdGU0xLbXkxYjhHazNRejVhdndjOS9WMGpOUFFaeFdPLzVZWk1vZ0MzTmZtREMrSXNPYmpTWjY4bUJMYXdqeWVvNllXMGZnUUQzU0ZRSWFqVWZPbERUS0l6d0E3Q2pkNWtXYXljVVlpSGd6ZFRtVUNnTVRuQUxZVThIaWRJN2RSZlU4TWIyN29Zb2I2MDNwK1VKVzVTQ2FPUURiRWg1MDZKcWZkNnBpYWJUN1A1bys0MDlEc2pJQTIrdWRPRTBIREFuT1V0UE9ZU3hydXgxMzdyc2lidmRuY2hBRFlDWmttbmtYTG5GVnVQYWhpZmdTV0pMajlkUkNoQS9UK0g5RHNEUnBzVHJwcEFWb0Z6ZU1RQ3NpYllkMXo1Q0RWS3Vta29lRThnNmlMZmpPemNaS2hqRWFZbW8vbjhzbUxDWUVaZWtYWTcwUUwyN00rQktNYjB2L1dPSTBMWUFBRHBjbUFydzJPMHp6cWlXMUVZWGRtQTJaVEZCVzR6OXdxSEhaUkh5N1dIYW5VQjloK0p4c1ljd3QvSG5RUmREeEdUWXBFV2MvZ2tkdWx6ZStUQ0Vsc3hGSFRQM3N3SUlaNnpLMUZyV2dJbU1HVU1LbjBxSVBKM3JjdHBRTnFVK01VRFlUM0N1Z3QzQ0Rvam5seG9FTVAwQk1oejFQb1FpZCtlLzQyNkRqMVl6d1ZGeHNFSHZJKytBS3duaHRNcUVkemVGcmtlWHRzRDV0VjN1UjZ1VkpqbXMwdUpZME54V0RFYzh6Vk9UbFFCL245aHJVNlQyRUFmUjBQM1ViMWh2d0c5YjRlbjFueVYzVE92N2s2REgxejc3dS9HL0ptandodkFOS3JmME4xVGpOWnlWSzRJTzFDaU4zb3JjYlNrZGgzUkVDSWZzbWc0WFErcjVmMVFrdTlHSkR2TDdyVzI3L1JRWUVlUHFNd1g2WEJOY3RHTkpYRzk2MU8wUWtPcnNLNTFiS0tiVkEzTnN0U3c3VStxZko3cVVmcWlMUnFuUkVtNStHQVJ2MDFKcnNSeUhIWnZIdVZGVEFHWk9mbDJQVWEvRlZ5cEVoZkw4blNNUkdqTjNYamZ6ODliTXV6VmxwTDRUaG51dzJwRUN1Y0RwWDJpa0I1b1RSdFY3bTY4US9kMXZLSFk1U2RNeWlFS3haOFo3VldwVE9oR3JIVFlUdFpYU2J6ZEI0Rk9DYnhzaDZ6WFZuR0JydXhpMnlVZjJpUGc1c0RwakJScXRIUk9vSDNaS08waTFtOGtqdHQzeTVyVVVaV2ZtOVZNTUowTFpHUjZaUG0wakVHbWttbUZkR2dvNXk2eUlNWWh6bzhSRWxFOWg1OUxCL2tqZzBtdDhWZ3plZzZNamROMXJNR3E0UVROZTJYMEY2NEhVYk42aElRS2c5Z0JRWjVFWUcxM05VcUlGVVFWTlAzN1JpZFJFRU9PVldDTW8zeTBOSkFOc0ptTEdXUjNiUUlEWjNrQWxyR2g4OE5qMjYzaksyWkpvL2x1cThiZUF6ckZxWEQ0ODBESmNnMkphbUlGZ0IvaUZKMHA3VzcrcGVvYUpsRXZjZU9wVng5OGd5Z3dTcWFhcDFJeUpKT3QwaUFOcDEyMHk0OEJyVmR5L0xDa3NIS3pxb0xSQTRuZDc5czZqRTNPUFV0SFNQQ3hiVmpRVWZTd3dkM2hwTGZLdTBGeE1NWTQxT2lnTTNDNVREdWljTXBSdFQwTmtBcW4rUVNiT3VWZW1WaUlhQmF4Ni9qcnJYeWQ5cmpRSHVTTnJTWThPM1NVR0J4RlNxM3owZGFKTEp3dmIrZHdHd2d4bmdETTlMeDNjWXpic1lCYmpld1NUT2orVUw5a1pNUU00VElkQk5zMlFWUGQ0eXBjSm1Vc25GRTVKd3VTNWMxSlpWVlZqUU4rN3FwVlZDM0NMbmVNOVJPQTFFdlJCY0ZDcmZiSTFxRTFGVlJLc09rUGdmc2toMHpyMG9hd1d1QStDQUEwQUxhd1A2dUVUeXVrdjM4bnJaazNpemU2bkg2KzBqNklUSjJNRUdJYkNLc0dUOGhHUW1ZeXAyRnN6REE1M2p3YzJYZElLYVZ2eGdPbUJSSXp5c1RJL0Vwd1A3U2VPTnhwak9sbVZhY3RMQlQ1TFdvc1o4amVjU0l4QURtOHhDWU5oaEU4Q2xxMHdZQUhtMnp0WkdhYW90ZG1STXFrMmJXMVp0VlFka1NYOWYyeHJ1UDk0VnRWOFFkS3BuelhkUmkzMTVCcmZVT01tNUVMMCtySGNOVkNPcGYwdHpUeUVwWFZsNVd3Z0hsR0xsQkdyL05BTzJDSllFRkxXaHBTU0tNaGg4NmxuQ2RTbW9xeTIwRjQxUkhQOTJ4M3NrUU1LeE1hWkhCQVBvaTBLaHJmeGEwRVNlVVZMQ0JTQkNiUGcxbEs5RWFjWmdUYVE0V2FwNS94V0lKeGlJdFI5VnBXUW9oVkU3ZzQwdHVSSjEyWjkybXcyNlIyemRpTVJranhhbkkrbXBMd0NkQnpSV0RaNUZEQjlPK3k1aGhVdzNyZ0gxQzVhSSthcThsMFBnT1UxaC9JMTlTcjU1MFkrMmlWSWVmemk0b0dKSVNYY0twUGpId211c0RZaU05bWE2dlN5eTJ2MVVvZjd2U0VNSFVTMGVETWdYV1VNZTZ0VlFPUitnVmorcS93MU5FdkNnZ0lLZU5Ha1I3amlzYy9icUFzVjFIRUFKOWR1N3R5dGRmSGk2RTBRY2NXNmk1eUMvKzg4V0lwWjRIU1gwcGh1c2Q3MWY2ZmkxQmdqVlg2SkUwampWYmJUWVN3d012a1JXY0xJNW1HWmZJUFBZYzJneURReGtydzZCZDFveVlVM2xUSGh6UFEzRTA1TWlHKytnY0t1cThvY3BKMlIySlZ1WEMwSjFHNjJKVEFUU29rM1lvcmNXWTBnYnRaVVNXazJaN2FpZElMWVpMRXd5NGYwSTdKZUcwbXZISmJVYVcrUWkyN2RTOHpBRGQwSzkxNVAzNWk3UkZTTi84TUxTRU82RzJBN1Vsc0JDOXNQcVJjcU92SWtHN1dxME5KMlV0NEp5RDEwd1Bla1NuL1gxZ2svdlhoYVYwaU9uMG1rMjFDZU5NQ3lZOHB0T1BMN3pHNHRGdStCZ2Z0aW5hMXMxTG9WNmtla0cxUDhISXhYaFVLTGJXcmdTaVJTc2w3K1Q3aWFWdFFubEpLaFAwSm95RWpQUG9SQVNKTVlTQ3pGUXdxYVhZK1Z5VUJRbDUrWVhYMmwrVVBPRWNiUUI1OE13aElUemxqT2sxaUlNekJBNTUzOWtVeEllQUxTaVRrR29pa05vbUlzdy9nZ2JUVEdoOHNDMUJ1WmFoV0dNVm5oa014MnltdVg5T3BJOHVub0NFUEk2b21DNThEQTRwald6bXhIdW5sSGNwTU5DZUk2YnZBQnBtNmxXS3dqNjhLNlVnVG93bU1NajZrSkNhemkrTkxMTnl5MmRZMEdHaXZvOXpDR2lLNHpUVWU4QlBocFB4YUFaRnNCazZDSHp3Y1h1UWtnbm1iWGZMTkExUStCTFJQQThLcHYweXFxK0l6S1k3bGlvYzUwK3lEbXR0RW9NL00xSnhyMEtCaG1RZUVQU0dDeHN3STlPVDV4VlVOaVhMdS9BTzg2MEdXaDZOcnc4UkJjVlppbFlHTGNQUVRFdURSUkVvUlpUa2t3UExVeThkQytXS1JoUmhNeGRVek1aWmk4a3Nvc1ljNVVaSGh5Nmo1RGFPblZmRWwxbS9MbWo4Zm9Wc1BLQkwxZ0RFb2I1OVRGTVRGUXRMUmQ5cHBNMjZVNFgydmhzL3ZKcGpESmcvNnZ2cHNGbTFHbGU0akVQSU1ENGZ1M1hoRWY2RzA3T1R1dWY4OGhZeVJXakV5ZXRiUlN3OHJIalNtcGxJOEpCRks2NTU3cU5ScjBGdnRoZnh2T2hOVSs1dGhoWGJ1NXBYMDNyVnRYeWVhV3RjYUlZM0lRVU5HaHRmaVhPV2hOSmtkdy81OVJXUGxkbHRwNGw3cE8yVVE1eHhSUVlWd0VvUkJmS0hKdlltNzdDejZvdW5YckNDRXRJc2thcFBnUG1Ea21BRFlBWVhFMmE0WlY5MEZrVnFpWFE4YmptTDlkWUZvR0RHQzdreDU3Zm14Q2lUcDRjN3dmczJOb2xrTkd3a1VSdU1TRVV6S1dOTHdDaXlUd2lZUjZSWFVqb1FKS3NPcTN6eGVMQ1dZRFhETUZEc3h1NllzR3Y2N3BRVGRsWjlFYXk2akhjcndReVZmVnVSclh6cXF5V1FLVy85QUFuUHo1UFlOYVpCYVJOZTc0RjhiMEs4ZTZEYXJxWjl1ZnR5b1ozVDFpSUc2eStPTVJGSEdpQkI4bnhKNVppajlQOW45K1RsWjBxR3V1Q0JXanBvclU5bVdFVUxHZjQvOWRFSHdoSVRsWnJBOGtYNnkzaWRSY0diblZzTGlud295dDJEZTN5MDI1UjVISEw1VGY4MjkzdFIvYlhwTytFUkt1RmhRcVJhSE1hN2w2M3p1aGY0ZmJwOHp3clNOSEZHZUhOTi9kNW9GMlhmcFBLS0JaZUpmRzFoTmdwdXdJUWlMYnBYenQ0NUUvaTlUQ01CN0ZURUdOeVAzQUdTQUdUb0VLdWlSN2pSTStZWHJaY0l4TUwzc2pvNXJkZUFrNCtuRC9mcityZys3TGF3QXp1TlZreUttUi8rd0lyU01uNUJKTVd1RXFTQ2hoMkt4R3BTeVRnOWFxektvcmtXZHB0MHpVRDhvdEFEY0FnSFdxcTMvbHJpWVUydndnMVV3aVJ5RVo4TFIxSHdTTUt3S0lDZnd5SmZ0QUxiZkM4aGl3UlRUcTVhRG9mQXhvV0oxdThwVFRQWjN1SzFGaEVnZFlDelc5VG5rV2VIdnRiY0FPdTJkWGpNSjhBaWZHWkdsNmJYUndnSS9kOVJrQ1hIUUxJYjNwTXJ4L2FWaGd1MVJhbEpGMnA2RlI2aDFELzh2YVk1alVWU3pvT1hrUWFNWEU1bjBXaFJaVmFqMm1ERUk4cXdneW9lejlZN0VhcVZQOUpIUW1yNThCT2c5Y05WTEFyc0FWMlU4dy9LOE5vS1YrbnVtZ0w2NUU1S2FyR0JDSi9sNm0rUmltS3llTlZHTStGRUMweWtoa2RlUVVVaDUzcnJnTWV1NmRKRnk2dUxhUk54Mi9wUUswenU5TkJoTHNrUXJVMTl5dUFnUHJDbDZoTEdNR2FOOE5iU2ZLUTJpYi82aVJnVmMybWhINTR5NVA0UEptQXJCbElzV3F5aW1DVXpKN1JDOHZ5V2ZvWEFjdFNVK1RKbytYMTBMK2U3S0JPejJhZWxCaXd2KzYxZTZXWFh3aVpzeWtaSzRSNjFQSU90Q0lvcW0zR2dLM0dDQUhhMThmTkZ3YVU4YVRCdnRMb2huUjJWbnJ4YXBLTUhsOGZwWWgxT3Z0MFV2T2JwU3JuS2xVVm00K3dDUHp6dnVsV1N4Sm5tQ1pCc0pmMDJBWS9CMlQrMWRibzE5emtwTXVZYm5NVVdESDBtTTlzc0VIaCtIZHRhMEZWZGNvTFA3TFBJVlpOc0xTY0swb20raW1YYjF0VXBRQ0VpamFXMFk5TUVPUWlPYmR2VHA4VGpkb2JUVXF0VFUzUDZONkJPRzFSK21aUTFsWjU1M21mUG5hcklnYmdna3NFc2crbmdWR2xScWFUZ2hLcEZZVlRDWGJkZmZSY2tic2M2RVMzYmRPcTBJbnBGQXFMY2RjcjB0Qm1lZnFxcmt4TGc1WC9Ya0drUWxnVUVlMzdJc1lEMmx5d3JsM3BPZ3l5cno4YXNOVmlxMHRSMVliNjRKSzFQejFaWGRIMDgydXl4N2ZabitFUlNOcHBsaEYrY0NBdWJaWlQzZU1MNURSSjNqeTV2VHRxcmJzcXFtalpqS3dsdE44UHBOOWRJWnNPeEM4UURBdFhJKzEwQ0JUekU1Um14d21MVExTSTRLdTgvSmRpV2JNazFkazNyWU1kaGJvU2hCYkpjNDN1b1Q1QklvZlI4UzJjQ2F0MXB5ZFQ4U25CQlNmNTNNK0ltNmRQWnd1T3VvQ29aL0hPTnBtSkR2TjhWWS8ra1NyNUlkdWhHZ0QwTlZCRFBobE5WS0xTb0lsVTlVbzJ3dEpEQWVBWHROSkRNVVNRZ3FjL2RKZ1FXM0Jhd2VzTFRFQk5uL3FuYjMxbThzRUk5T0VOUnVZT2xOL1pRRUt0VSthQU5wKzJiZUdKRUc3anVuTnBxNTdCeUxxdEttL1NKY3hmbStxNkJvMWQvUUZCSEU3bDlJcjVtcEFVRlVjZ3ZSbVdHVVdvSDBDMlN3UDV5ZEgwQmwzenUrZDJ0UlFyd2p0YW5aOERwcC9QSHgrMndXM1JhbG5rVVVKekNRVUxPOUpIUXJjU3ZxaGZtQ0k5QUJBTkNlQWVFTU9sYzJGNk0zYUtOVlNMWjFIVGg2THBxUHhVQzJhdGFNQ0ZTbjBlVENublh2Q2owQVBTZ2F5MW9hdTF6Q0FSQXB2L0cvMG1SZCszL29GSUJaeVBBVzNjdUJnQjhNQzM3MWc4TUdCWU4rWUR4WUFBQjZLOGJuZ0xEaXhrNGZBVWcvYS8rMS9PSEFvQ3NBVElWQUg5UlpqOUt4ZlFmZVVOU2pieExnK2NPVGtSNEVjRm1VbGlGQzNFT0ljUE1udUZGQzlRVUlJa0ZMUmRKY3Bta0lNRFR2dHhUTnk3R0o4dTRYN0VZQlFqNVRVaHhNUWdESTNJQ2FUaHJuK3FIVnNRQnhTTXA5NWo2anFuWEVIWG9qZlNlVnFUaUl1NVNUeUZHOUlTUTVYTlV3dytZKzR6a0hrbDJJUldQc2xpd2RRV3Q0dER5RXpoLzBpVkNTTFE5bXdpU0NtWHVGRE1yNU9YL2xCbUhlYnhNb1daVzMvRE1aNVIrNHhzdzl5aVBLWU5wWDZSVWlieHdJWHMxNFJpNERTY1orUEJBWkJudi95b2ZuUC9CNWlWWmppd0R1OUJpa1kzVFNTcVlKRFQ2UENUTmZXcXpHbTdLem5hMDFQSnpIQzM3OEVOU3ZXUy83bC9DZEh6ZThaUEJUKy9McE9IMzYvVEg1UjZpeXFvald3aWEvU0ZNRGtXZy9sSnZZMEZFV0txVzRvT0p1Y2FkY0t6ZmV0Ukw2ZXQzYXgva0xSNVVCT0kvOVFJcXAvcGlzd3hmMmw5UmFvNHphYmFMeUZxU29aR3Mvc1hqUWNFUURaRHYvMC94UWZqRDE0VlB5SzBZNXJxZTBMUC84eDF2eFEvWjRjMnJVNzFIcXlla1ZSOSs4VFd1VFI1ZWFmRTRqdGNmajhwWVVJL2ZuVnBDVW1saysvU0pDRUF2Q2pzZkJIamQyZ2NWQlFFVDB1b0RYRThKQkFTWUd6SklPZGdvTFFOQnBnOFVySmpBZ0NNcE1FTG1ESXpocHJsKzdMYkFCQ1NMY0xLbkx6QWR6cGFaWjBEYkRRVWE0UUZ3MVg0SVFEeEREOERJVVFSUU5BbFRrYnluUG9ER3pacDZqQXJnc2JNWFNaNkxBU3BxcG05RFE4aFhkMmt6RDlWZk1vTGZpOTlPYmloNW4xakZ0SW8zaUE4OTJ2MW1wdkx5aG9yaTFvYjN2SlNlUmp0UHJWQ3BkTVliSkVTTUpsZGdoWXgwZjFyYTEvRTMvUFo4NGRvQzIrdktma0hsanlFd2E5Q29TN01xRlNxMTRqdUVUME5GTFFoZmlTNThzY2FlVW56Si9WUWxuTXJVcXFYQVo1clg4OTMxbG94YWRtQ1oyczRPN0tSZ1VxNWNnd3JGV21FdWZORnFGU3RWSTEyWkNtM1ozL2RtYWdvcUtqcEdtWkprUzJWMGJSTlkrM1k5aThEcmExR2xRVDArY20wZTZSMERSUUdWL0x6Q09tV0ZsRmN0V1AvbDlsSWFrZGR2MmhtNmUrY2hoNE5IUUVUaWhveUNpb2FPZ1luRm5jZGQ4RDQyWHJ6NTRCTVFFaEdUa1BMbHg1OU1BTGxBQ2txKy9xT2hvYVVUUkMrWVFZaFFSbUhDUllnVXhTUmFqRmdXY2VJbFNKUWtXWXBVYWF4czBtV3d5NVFsVzQ1Y2VSenlGU2hVWko1aWV5eXpuRXVmTlphYU5PS1l1MjRiVmFMVUFLZjd5dHh4ejJNUFBQVEkxOG85ODhTVTR5cjhaTkJMejcxUTZWdmZXNjFhbFJwMWF0VWIxcUJKbzJZdDJyUnExK0V2djlHcFc1ZjVlaXh3MW02TExMVFlFdC81d1htdklpcU1PUkZOUTB2SGdDRWp4aGgzTWg2bm5YSEtoSldPSkdHS0gxMTFMUlBtRUNnTW40Q1FpQmpUSEU5Mk5yUWl0YzZHVm14YmZaVktvdzNHVnpRWHQ1ZVZOdFNWNEl0TDIxcm50RjNSVWdlK3Rhck1zUmJXYVUrd1lPSnBMNEt0alVHZVM4ekdWeW51TmxOaVQwL0NsUmRWS3U1T0V6eWJxdDJ0NGFhMUljeVBZR1lVdlljU3YvRWpOZHF5U0R6RS9jcS9UbGxYY1YzUnJTTWZjdWVjbHJLNnFuM0R4SDlhcWlpdWJjVVZsU3QyODJBMmpXa1crSDBVTXVWUHlRdU5OL2llNFh3N0ZNaWdmKzRiMHFpMDltcWJCdjZmZWpVMGVJTFFnNGxWaU1rYjh0MHdzUDd4aG1BdmxPdjlDejROajduMnA3ZGh0NnA2Zi9PMElaMjg0UDl5NnQ4c2dmeTUyWjhBTVYwQUFBPT0pIGZvcm1hdCgnd29mZjInKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBZmZvZ2F0byc7XFxuICBmb250LWRpc3BsYXk6IGF1dG87XFxuICBzcmM6IHVybChkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjI7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R01nQUJBQUFBQURnWUFCRUFBQUFBZXF3QUFEZTFBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdpNGJuSGdjZzNZR1lBQ0JSQWc4Q1pvV0VRZ0tnWjRvZ1lna0M0TWdBQUUyQWlRRGhqd0VJQVdGSXdlRk9ReUJEUnZjYkRYc21DWGlkZ0FsNFZWUlBqSVFiQndFRVA0cmpDS1BBOW5VNnV6Ly81emNrQ0ZZb1d5V3I4Zks1UEl5OWlJWGtscVU2TlNOeDFnelpLTTFHSytLOGpmaHZ2QTdlUGlyRGJGWnBFQ2loSkd4VC9yVFpyR2lPcklqbi83K1NOUVpTdEdyS0RQRDFxRVNyQ0NQellJaXhYT1pkVjZKclBoUE9rOGxGZHBGeXcxdk54YTFVVkZiaWNGVCtJSXZkYVBvZ2FJOFFtT2Y1Rm84dWZtejd3ckhjY0FkSUdMTmlWZ2FJamJzeE5KUWc2MGtrVVJzS2ZocjYrcnY1dWZYMnM3K2Y2M1BxcnIzUHVqaHBWa0FqQ2J1UDBHWTA2SFpqZ1FpUitqUTdZbUtTMnlNalNVWlJmenpzRCtlZnUxejN5aEJySk9FUklVTVp6RGtjYWh3U0JNYjlQOFpvRzBHekRGZENhZ3paaDFJSGNjVkZSNGNZSEhRQW1iK2RHNnVqSzExKzFoODY2TENSYnFxOHZkVjhQdzMxM3ZmMEFJbVdaNGwvZ1ZBbFY5VzA3THdQYjdHc0dWWjRXcGtKUXFITmxOem8rMDZLVzIwU0tZRXJwTzltelcxTnNYTVh2L1hyZi91UUFZTlRCSWdtQWViWVo3NXlZcEk2MzFsLzN0WGJsV3VsYnAvcVNnaHBHYVZDM3ZzQUgxd1NJOCt3bDFRZWxUVUtjcU11bXJsY0lMakFxQU1iaVZJb1Vmdy84dXAvYkdMZit3U3hRRUFCMGtsR0dsc0s0MjM2SDB2eHlXU3J2YTFTQ0VvZ1IwbXlTcHdkdm00RU1MYWR1K0d5OEJMWElxVVVMSEsxbmJmSExOQnBtWmZwcE9JcnN0Uk9hMGNrcEFzUTRGNVd5Nkhvb0FROHZsZisxWjU1KzZzK0dVK1VrM1NoSXkwMVpDd0VyNjgvM2VIeTBOOEdNeDNmVmkwcmxuY3pDRVVTRzRoYmlSYXlIZ045TXIvYjdyUFhjZDNuelNRTjBUY2JaSmo2RGZHMWxXcXRuWDE5TjZiMGN3YmFSQXpSQTByaTJIaGdJVC9GeHI0SHVERFVXSXQySlJZbk9PbXpOZFBoQi9CS2VlaUN5SFZMaXEzWlNwZHRKWGR1Uk5ZWUpGWFdpeFhYVFdpbTRFWUVRTWkvN052ciswV3p0STUrNVVZa1RBTUtZTnZFUEhaOG51bDN1K245Y3ppbGxLVEtIYVFRWkFaRU10OWZOM2xJSUJDZld0R3dMa1Z1ZHZEeUNNZXhUem1NZVJ4ejJFSUlQT3B3QjVzN3htQzdlWFkzanRod3dQQUlmL0psK0o3N29RRVlBRENpTk1EQnVBb3RkTC9pQjhQY0JneFpkYkJqblM4VTUzdFVsZGI5YWJmL1ZzcnZjSUtFUWVlUUdhbmNVamlsc3dqUmFwMFhtdDJ1Yzl1aEtkajBuYkVLMERnNHBGRTVhWks1ZUhWaWV4ZWdBZ1BiQkoxdHJDdnp5ZnpJSzU4eU8yaFg5eEZZbjc2dkIxNWIrdzdvblhoMmhydVFuaGZyblUzZG5zQW9lbTVDWVdCQjdITm1sdXJwMXBLemZyTWFVSVJwak1NMTR4dUFrYS9kd0Rqb3ZLT0djWjFlS1R0U3FjZXluNzZKbnZqeUdEY285NWgvTmlyUlR1WlZHcTYyekFZdDZBdk1YRnhVeGltS2JHR0xyb3dxWkVrZlZYQ1dBZ1V5VFN4azJnaXkwaVFCSm9sazBrUjV4VHhNa0hKQXpGaHBUYkFwN2lKSkl4SEFEeUphRi9rUllSc1lTVGZRTmJmVHViRG9LOU40OG4zWjh4T0NvZG1adU5UaVBBS1ZPc3ppUGkyZ3loOEQ2ZGxiS2dMc0UrT0tLemNyYjlVUDlnT3Y0MFdwWk1TcW93ZUQzNUpnR2c0eitpVDh6TWFNb3orWjJuNEhjdUpZTDg3MXgxUDVFWWJ4dTh3bUdLRjRwek4wV05WcTNUamdhbzBFK0N6amZ6U29sbDN0R0piWXNhbnRnSDFGNGNWb0xMRmJzRS9pbDhmNHBNclY3N0dUWmh1ZWJzR1ZmZDhMZDZIQkk1MzNtQy9WeG4vZlY3R3pNa0o4UEVqQWVVVWxScW8yclZMc1doSnFqMGRMc3VSVGhCd2kxdUVNRmxPRVpNVGc3SmNlWmg4a2dJS0NvTk1rV0traEFwLzBDS2dEQW1TS1Nlbmtyd3FNdFVVaEtpb29hU1dvanFhMUZQU1FMTjJrcVVnMmRNQnlJRmtEZ3FTZ3gyT09UTElIT1ZZaXVNb09aNmNFeVFIWVRqVjhrSmtZaVlTR1FxVDJHbWwwY3BCbFpQRVI0ZGNra0liU3BKVXFFQVNCQVliQkhEZ0kwRVQwYTRscUduVFFkTkZUU1RvdEVHVVV6ODFnOVFNMFdtWW1oR0tSdWswS1dlY0lvYzlZRU1IaVlLK0tEalJhUitDWnppSDVsd1hoQmV5b09aaWw5TmMrWExOVmE3amRJTWJPWW1KeUsyZ1pvMnlYYlM0ajVMZE5IdUFWZy9LOVJNTDBUZ3ZQa24wRk5vMGJLcTQ2dVlQam5RV0tjRHBmNVYwUHJyQUloSlY1VEZnKzMzR0g2eWNUbVdkekIvYWpTYjB5YVBwMEozdE9Mclg0OU5HL1E3MEt1UFUwWFNCeTBXQVR1OFhDNHhVR1hlZ3FzQngrNkg3TUZ3MncwYlIvWi9iSFpQSTgvSEF5UnhpRmhwd0ZBYmIvMndZUllzMlFJZHVuRjRqVE1aTTBKS1lMbWNtVTEza2NwbUpHL2xjSDVualZ1WjZuSG1lWERVZms2S0ZzbFp5Mm1qU1FVNFhTVGVaWHByMFNjbzd3L3dCSE16Z3dWMHZHRE5PTkFHWnVnUFpjR21JNVJRNGNaMENCdzdNQ0FyempseU1BL0hPUENzcjdvOUQ2STIweVhiSlhCdmxLUmhZcEpoK1pWa2VoU3laZDJSbkhEaWdRb01qNlJZV0prR01Fc25zQXlaR2hwSTRLUExvQlpLTXgrL0h3T0FCazRtSjVLRUVac3RLOG5DelpGYVd6TVNRalNNK2dTekJ3T0FCQXdPVGgwTEozQlI1M0JRcHUxbEpwSW94Rkt3UVlJRWlrakRCQTlNY1ZoNU8wMFVOc1A3dEFNWFVWaGdmNnZsK2FZdUtoZmJXanFyN2Z0dm1PR1h1cWhGbFFHVVR6YWZ2OUx0TDB2aDIwWXpFUnc3TmVYZmJscm04NGgvTmJDYVg1TWN3L2pveFR3ejAwR1JyejJJMGZSSU1kbDdZQzRtbHBpWGtjaEptZndCN0Z4ZTZVS1c2UWlEQjJweWMvQm1WZmlnaE9BUkJFQ1JMVmlRRUJrb0pxcHlheU1wSnVXYXhzRUFVWkdRVVpEUmV5YWFqeWc4bEhJSWdKR1JrRkdSa1pCUVVTRG5KMEtDZ2NiblAyVlEvT3Q3N2RDaCtmejd4dm9rMkhZRUgxZy9wcUgxZ1lOalYrdkR4bEk2K1o0WUx4NTRaaU96WTBqZk5QUm50cEpNU1ZzS1Y4Q1hDeDBTbWx4Zm1ZaWgrT2JGMU80S1hDS0VScmVoZU13b2dJZ1FBUEFnczVraTk0TUlvWHZTMWkxZ3ZXOXc0NmVKSFhFSW1WOWVuVmFwbWVDbzAvK0JLL1V2cWdEbXdpMFR3NWVRaWdTbzErVFhkcGVTekdDL0dvM3JtQjZUdGFZeEZyK2VLbjFxZ2NQREk1UE1rWnNRVG1CNlBZN285aXVuekNDYUM4SjdDOXhNQkwwT21Ub05OS3pNMHVhek1UWm9mZXpmTEdHTktnOXRpenpTWEFPek9VUUhObDV1bDJ3U1RBRUNnam0zeWpodCtlTFFQWWZvMVRNMWRWdm1SNjRXcmdMTUFvRjhuQU5ESmdIaTc0TUloc1NkditiYzFuNDRuMmV4UVY3bkdEVzYxN0c0R25XMVFUNnJpS3ErYVNsU1AxVjk3SGY5VGdDN21DaXQ0NFBRR2RHY1ZWZGx2enZvV2xTcVdLMVd5Y0tIMGh2YkRPNVpaWW9FdTA4Uzh6NGlpL1BEYWxpaVpBTEFuYUEwTTNURm9hS1p5NGQ2azNRdmppcDlPeVRtaUdNU3dEZ3pZK3dlYnMwZngvcU95NG9UNXIzR09QUHhDWnVtL0ZBYW9KakoyM2hQalJJdjBPeEFZUTAwQzlYeGVrd0ZUOEVHYmZQclk1Y2VFZzhtQVlxYWVuTm5wcHpSU3ZNdGpGNHplL05yRHIrNFBod1pDcjRaaTJaV216Q2U1UUdvNElBSlc2TUUwekpGUFRBdVN0WGdTdWw3SVkxeUZxajRLb3BrNWtwc0pFZFdaV1UwT0dJQzhwU2tvOEZncGFLQ293WGx2cEx3bUQvSGlNUzFDR1hCSk94dDJqZE9INEtJYjVOZEZidU1McnptUjliL2xSUytCN29GOE90RjQ3TktwcVpnM01IeXZYRGk1NUxZSlgxc0FUYXc2TUpDUXFKb29JU0JVWHlJcjUwS3J6Q2dLbTVvbW9KdnBGazcrOGFFMEduZ3NuTnR4Sy9aUE5pZWhNNDBEQitHUmh4MlpjNGNoTE5ld2RYSWhXc2hieENCbkY1aENaU0lOenRYVVR4Z0dhQWc1azlTdi9weFlpamJSOXdGUWtDR0ZTak4zWnhtMU0vVk92RDN5M0dORllhMk1Ndys2YXRwZ1ZDQ21jTGRvY0VwcU1GcC93QUJZM1RYdEFGVjFlUENQRDFYT0xyNGN3SWc4cmRxS1NPWlNzWGV1aGEvN2R1ZitIbzE4VjdYVG1TZTZkM2JSNUx6eE9lL1pnUUs3ZXFIYWgxR2tJdER1SmsyU1dTaktKVmc5cEgwQk9mT2lLTTVOM2tJK0VVMTJiTHk4VWI3Q0xndXhZTWV1MDQwS1I3UWltTW1qcDJLMHQyUUJ6cFUraVVSalJ6RmVmUlE0c1ZDRTZlZEt1d1lNYU5GQVdVbDVRQ1FWdjdXdFJabmhPdVRwZjBkUGVVSjFjdHRxdWxEZ3JHb21vZEFiY21PR2tqR0hQSmhIS1ZoQXFWaEVhZGlFMHJHRU1yQTVYZ0NCdkN6RmZPOWNCUTNwYzNRUVhWcDRwTkx0L3psMFVXV3UvL2M2bllrRjV0NDNXQWVab0lOQUZnaDRRU0FiQkh3Z2tBTUN1U0NRQndMNUlOM0ZRR3VpcUNRalVzdlJhMTcwOUVqSG5TaTJVNDhmTEhHV2JPU0JwUUJHaFFmUWtiUXVaRmg4cG5BOVJ3SDVmUDIwejlKTkVlTGVRSitZZEhvWktNVWQ2dzRDTDBYVnlwOWNERmtETnNrYkxuaG9VYmgvQVhqd3JheVhZT3dsdTBZcWdCYWp6cllUTFlyb1c2a1N6ZlcyWmxVK0FwSU4zdlZXbzdDd2Z4ZU5qQkhaWTZKdko1ODQwcGhNMExFalZhK0dyaXF5dC9xSURRNkJjRk5GRTI4dHl6TTN6YXhtMmE5QW0wUGx3NmxwUmxPUFExNERGNW5FTkdKNHc3ZjZrMTBzcjkyUVRNdFRDeWlha29pY3pSbVZvYjFJbnE0b0lwTHhrTEVPeGpnVmNreFRxN0pSYzZ1SUtKYVh2ejBKMUVKOGttRmFkMEtKUXpJYldRc1hHOEhDZ3BjcTMxQU52R0RCRW9VYVkrUlRiM1RyUUpWRmpwTlo3YWpXR0xVUWFNaTBDQ2xwbDNiOXVyTE9vcFNsRGtFYnBBTm4xQjlta3NqZ2VqR2tEVnJ4N2hTNm1BRUs2bThTYlRkbEo3Qnp6UlUwYVhtUWhOcTEwWERIZ0pldlJmVC9lZVZWZEp0c2hLQUJrSFR6cTlSamQycUsxcHJpajExVk9XelRhVS9kOGRtSHl4WE4vU0t2QjBQZVdIb3pXT05aZDlTMkxtRU81UnRFbmczOWoxR0xCYmRkK2hJMzNvU2doWXFzMS9oTnRCVkY2bGdnM0RkL0Z5T2JwVDJnK1BTOHJhdzdieDB0M3NSRGJYR0VLZ2kwOWgxeExWNVN1UmNoaWFFam5EUzZ6UTV1cks3a3FpbzJSNmF6cndzRnRHbGlKZS9xQnF0SEZOa1UzQU5CZzJIT0xrQXllMkMrVFl3c2czclJJUUpOZ29sRFZnMkJqVVBPbnFDRGkwTmVEWUdQR3h6Z0owQVdFUHBDVVMxQjdBc2xld0VoOVlXeVdvTGNseWphQXhXWGRJZXFHb0lhaDVvOXdZQVdoN29hZ2g2SGJCQ0owcWlKMHF4RnF6YnRmcURnZHUzdC9OSFNtaWhvL3dXaXVCWE9kaUNwejJXRTJlaVY2UHNrb3I4TllIUTF3aGkvRHNiNmRmcTRoTjNDZVBrV1RaRG9xRVdpYTYxTnBSN2EvSHBvOSt0aG9sOFBrK1FFVFpib2FJcEUxNmFpMGdEVC9BYVk3amZBREw4Qk91UUVkVXAwTkZPaXJ6RUwyaDRSeHBpb3FtYTdabmpsbG41cHJ2RWgrTzB1TlJXRWxwb0FnQmNBb0s4Qmo0RHlJYWkvQS95bndONEdNaTRGMmIzT05nZXVPa2ZBME5WMDdFdHdBRnRDSnA1WUdBek9KajhrZHVRSUdBY203cGRqc200Y25SdytnTkpWM0ZQUm9FNUYyajVqaGs2bWt6SFhsUlBDaVN5U1FJVTRMb3M2UnFqNVorTllRNWFHRWJJUnpsQ242Mk13RE9JbWNsMldJV1lFYzdXa2NidWN0V00zNCs5aHJjVHY1RVVsbGxuWk5yWUVSZ1JyanNXWVkvdU1tYXZoNnc2MkxBTVpHc3BkejZtNGs1aDhJaHpqbWJNN3ljaWhzMzg2VDJtTmFJd3hFazhSSVZrcm5GWTlGVkd2Y1dMYmV1VEZ1ak92ZTRMUlZyWGU5S09NRGVZWVExcmNQWUh1RTdqRUoxajZseXc3TkFjR0ZCQW9RVUlKZTlPWVVRN1lsSlR2QlB2YUY1QW8yU3ozRG5OSzNOU0JlcHVvN2RUWENrb0xlaGkxSVhUK1ZCdE9xeW1qaDRqNHlLQi9UZmVEb2pGQU1oS015cnM2YnlmUFpnYUlhZ2lFd3JBZW1YTnRJUmVDL3BQa1FSKzhHaVJxb0JBYUJsL2ltd1dpTGxMZlBDaHoyTjByYnhIMHZnREZULy9ZdlUyV21JaFpjK2dOQm9scWNNa0s2QnprZHUySXBHbHdVNmR1Z2FGK29SVWNGbEYwTWIvQ01JZ2FsSXAwWFRDdkxLWklJbktXOW01MHVpaFJ4bE5Qb1B5SUlIcmxJcmN6bWRwa2JuZlR1bjE3TUVoVTFEQ0VSOWNCRkUzRE5laGYxeUI2TlFCRnArNWxhR2JrQkZnSTc3NVAxQVgwenRseWIrY05jcnVZL2ZXbWF0UVhIQWpMdXlwVzRKc2RKT3JBREhydmJFcmpGbUlGSnNBdFo1R3BnL0lhb01tWE9aWlFLRnNCV2ZOazlzc1hqQ1pFM1hyZDRFWTZ2ZENYb0tVOHBxOE13VXpiaGRUZFVJY3lrcjlPWk5DYTlyVDlYMmpuQ0NlUCs0SnpvTXl2WWxGb1dpcDZiMGFZVXozSlZ2N2FkRVZqV2dwZUhrdzIwaCtjc1Q0TmlRRE5DTC9jQWoxOXhXUzVnSW41ZTdoVTVIUndOZVQ2WUcrN2ZWQU5lbTErZXZreW4zUnN1d0Fhc09aUHBEdlBJMTAvRlhPblptOXNveitSMkUxWC9TNXE4QXRhUFUwMWZmdTBCMEkxU1lCeElueWNMQ05kTTJ5REo1Q2hteDlGeWVWd045ZTg5ODRlTjZNc1c0YTNHczczakk4TElneG9aMlorVnd0eXVsWjZRWStHN2xHdXZSZ2k1NmVkc0hOTWJnY2FZZ1hMY2l0OHFTaHo2am10bUhQTE5JaHBNUUdjaG1WSWVQc0ZFelhUTWRwZ3lwQjdpVWRiMGh1MWk4aElQT3lJUjZiTWlTZkFncEhMdmx1R1pnZTZURmROVHZtdE9QMXhNYWZNeGhqdVRiTmIxZi9ydGNocHl4N2xUdk1KVmw1UU5WdUwzcEx4dmZTemtLSFNhLzJsNVlzb25jRnpta3ZYN0NuQlRGUW5acEVVVENjd1VUamg0TFFpZWgzOE9HYXNBOFUvWGpDT0JXVTA5T0F5WEk3RTJsMUh6bk1valhRVE0zVkNrVjZIOVlKVC9tNjBYSTRMbFpwNXJSSkQyU1dJdk1iaDVJQkVPazRxMTdpVjhEakpMK1NUSFlWcXJ3RjAwNk1vQ3N0ckNWMkJIb21WY2xHMDJpeExuU1hZWkVzVHdtc2MybVF5NFliU0tJeWVpWWRodytVQ2RCdGo1bVZ1ZXNBd2I0ZjNpcW41bC9ScGh4UjBhUElaUlpHT3FTYTB0enJFREgwL2JhWnowM0d3SzdDcmNrTkhXRktERHk4d0lKY0p6VWpvZUJ3Y2EydENqOVQ2dUtYOElXZTEwNHBhVlRaRHZiYWxyU3VseExkWjFCeERHQ1BjTnFGWmdwNDdjd21tUG9XNVRXSCs1ZnNXaUN3NGxFNDdCZnlmMDU1S09Qdk52L0NkT05HY0p5NEs1Nmx2T3JYYm9IWEMxSjVtUVp5MENXYXBPTXBxK1hIRjlxdXBVOCt5V3ZOQVhmRGxyRXRIMzh4ZWRXeU9PTGN6STVoSUdhQUhCM2JrVVNMaEF6TzdIMDBFYUt3ak5PZlM0M21mZElBeXZldmhlRDhvZlJweVFHeUJjTVVLUWNtam1kSnA5NWhRYW9IVUlXYkJSSHBsalhUWjQwQ1g0SlMvY3BoaHJTdXY0NFNJcW9aTDVMbFFUdTJrOUl1RE1BMHBpc3hKQ2hZaTIvaklnQkIxSUpjODdrMmlWNWZyUElkM1dnQ1VGekhRMkkvWG9qWFd0elgwRExxRkZhakhoWitsdnEzTjdZU29nL0ZFa1gxdGNSaldiRFEvVC9ydDhLQ3ZVQUo1OSt3eDhUQzJzWEdJUFE4cHdJdjJ1S1pIbU5tUzhBWkh0MVluVStlU0VWSndSY3NSYTZOSDlITGxnaVN3aDNxbzhkb25XaDRVUjAwTmUvMjl4cFhzUUVLN3VoeVlRcjdpcTRuYktlQkZ1S29sUURQMU5jWTJQcVMreC9GeUJCRUJuMG1mK1Bncy9XVG8zRCtDa1dXYWpjR3NHWWtwQVlPOVNtV3BMUnErS1hkNHozZE95bXR1QlNVbUU5TVFrSisvVE5Selc4NjVjd1JUaHh5bHJDMHEyeTUwdE9TMzlBVzR0dkNhQUxobVdXOTN5R1hTUU9ZYklzaXd3UW9uemJGRS9zSm0rbDVRcHREN2JFdHk2M29MdFJQMVdWd09IL0VhYzU4UTh5Vld5S1Vpa1JkNGhPSzRNdzRtY1J3WmRpVHg5MHhQVzRHZXBheVRuYVNialVXVUhhdDlkdGhCdEQ2TmxUMm8wNUZ3NW93QmRiYjY3L0wyNzEvM2xENitseGdvYkdzYkdpNkh0SGVyTTFlcjU4RFJuQ0FiS3NJTHpBSWtMNmdxYm9mNzFEVHU0MndaYVF2RW5SdHgybDllV0RGS1g2SzZjMUt0aUhQMENDTXpsN1M5THhCUlVUSmIxbm1pQmcrenBDT0IzYVhqSlFjUzk4N3I4TEZ6MlpyT0diS25aMWF3VEQ2TmZqRHZubFNjVkRid01JbGxpUjlUZWR2RXJHbk16L1prdFNzUFl6eitQSlVGQjM0MzZGUTUyUVBhUzZ6d1JYZEN0Sm9QeUh6NVF5bzBncEJOejBxN3RMandSbXBnQm5HTDFxZUxLZlU4bGRWTExJbUw5ZmVkcStwc28rZDhTRUVQbm12YTBuNlo1OUI3WVZzOUJYd1BnUFUrZ0NuQ1R3a2pycmNUdFEyOUxUNUpaYXZOOHRUdXNrS2lNZXdCdklZWno5Qno5SFJHQjM2WWZGMTVMVjBDTzE4V20rbnZLdGE5alhRdThRTEpraElTZW1saUdVd1J3OVlwNjJjVThNeVBVc09WNlRxVnJXRHAzcWZqNWFtT2MrbnYweitadlNhK0dWZ05rSHlTdTJwSzdXb2VhUU9zUUJwZ0tnWE1mRE5RWVNPQjRlWVozTlVWRlMxcWJpeUFWTGlBcHRWTnF6YU1XajBLY0ZVZ0ZkT3JBSnNWNXE3bVZ0dmdWQ0RlVnE1bUhoWDBYK1puc1N4c3Rvek5zcklzWjlza3g1c1hOaWZOUkZ1OTk2SzlZV0hEOFlER0JZMUpIVmJIa1NReGNzSGlYdmRoMU51aVNGcGVEMm16dkpZQldYaldTNGZIOUU2ZTk5M2piVk1EWW9XRDZzbkFiUjJPN0xKN0FiZjFjb2R2LzlSOVZWZVR0alU5Ri9JL2JEOG52SUNJbXhDUW1kVXRGbmVCRFNGaXZCMjgrRGhaZkR3dmpnak9pV2Z2aDEvdWcwV29DUzFRSHIvajBPYWh1RmRoTDZoMmhwZnZCOUU3eDhlb1dlVEduUmN6SnJ6STdFZDV0SU84Ym12ajRJbmMvcTlFY2UxaDZoTlZ0ZHBUYXUvbmNydHlYMW1KZktmTTBjMjA0dzVFUzhvTzVLSzlXK1V0L1ZXc3JWS2RVSHFZajdlMWFDd05PY3hPNFlET2hoeGZxNlpWUnpiYUI4d1VNbWMyMkwzOHZTOFdyOFBYTFVZV3I4WFhMZ2JFNDhFN283bjNtRVhSSnhlZGpIUFFnZXlMLy9nMWVxaWRJK29zbzBDdm1oQ01DeW95dFdnMDMvWlFUaWhjTndrSEcwZkdqUXcwV0N6QkJoRDNhVWRDNnpBYy84L1BvU2xURWRRdXVmRFA4VDJwNFBjaXFHVHQzVCtkTFhxUmhTODBpNFdBMmJEOVBzb0p1Q0dKRTBaaHR4dkJvRXpCZTllREt0S0lwbTBibnBZbVdjWWRQT01xYitQdWNLa1pXYkZCMlRrYm1ZUFBZZFFzd2ZJYWo5SStNaDRnd3VROENuNWJqU0FJaGV6L2tSNzRnZFJqYWR1SDg5SVN0NmNsK2hsbldBT2prZWVEamhhNkV2VFNCZzhPZWpHNTFPZkQxSnBjQlpRbm9OT29ZRmRWcVFJUzB4ZnltMkdEUVVzcURHcXNPUzY5THNkbGxOaWdwd3VUZEhhM1VWbUVuRUFVUGYvL2pxYU1GeW5kbUZSTStSQ0QxZzlERkl5cDNMeStuR3l0bHlMTlhrckwwL1ZOdnJCU0xONEpJOStKeFN0aDJ3c3JwVWkrL1J4Rm45OU9WbWJaU2NPVzR2YWVTTEpFMDYyMjJXMU5SNHlkbVJkaHM3VUoveWNVei81KzhoZk1aSDhrSEg3S24vOE4vNWZ3VHp4elNoZkFpU05IKzk2bkFiTC81U2Z2bklNaWlLQ1RvUEx5YkpqRTNKejhNaWtLNEhiRjlSKzNIbC95aWthMlpuOWJrQjhkdUM5N3hoNkFacXFFbFdhOXNEckxnRVgzbTdHMWxmeTVVMEJTc3VYVGFSU3RNTmk5TUZnZS9ERS9mMGxaVmVIQ3JrRElXSkxNdWwxcmJxWlZiQ3F2MmQ3VVVMMXRRMVhGaUMybGxldm9OZjNISG1xazNidGNBYWpJU3NwakxsTE5HOW55S2FjRjN3SVIvVGFqdUd4Tm5hL1dKOG1IRy91blozcnNKbmZYbDRvY0JTYk55RW1EVG05VllYb1llZzZybjV6NWlxa2dEVEs0UmJiZ2p1RmxXTFdSYUExeFFwWk1YbTE2R2RHem9qNGJmWjd1UXZGS095ZUhDTDNuSVR3Ynk5K3h0b3dnNEh6WVcwSTMxS3V0a3l1WEx4aFY4TldYV0Y1OVE3TkRWcGNyazVub0Y2QXZhWTlPSTZlUERrR01xQkZCdnFJOTM0ZnNlNCtiT2NRdncycU54dmI4Z2ZsRWFPY0lXNE9QVGJ5NzRpRlV1QWZGYXB3RG5WajF2MDhIYVRZazhXbkROMGdmU2JPMURhVmFyWEl2Z3VKdi8zNkx3NXlZdjZPRmkzQ1VFOFhHMnZLb2tzeUVmLytNWFNDcW1VY2p2NE9SOEl5V0h6ZmpTSlRxSDVtMisxQnZvNFpiQUNOMG1NTklLWWFrK05sRHhTbUh5eS9pVXRtRjlyakRTVytsTUFMZnVZdEx1ZURORzJrdnc2b042VzBoVG9nSXhmVzZtaGtDcis2aEM4V3I3QnlLRVpnd0xQZWdPSGJrZkhOQ2V0bG5vUm9ONW5HQVN4cjN5cEJsK1hSR05uZUpRNUtWWlRWQzVsZzArcE8rMW1ocUN3NEpFcUYrdmE3T2FLYjVYSnBSOU5vRjNmSktEd2JEWHN6R3NvZmtZRThFOWl5ZE13UllLOWNFbnRTYzFwYnVKd1kxN3ZmNTZReDV1Q3FmcmYzem5FeExSaFpwTEdIRVZHTjd3bkxFSU1GOWwyM1N5OVczcENuRHdhWFJXN3NrUWdtUmt5WTFGOWpIM3l1d3lDR3VkdTJ3NVBDQjg2SjdOOEFpdmlWSHJJS0wvNThMeDF6VU0veEpXRWlCbDVvWW9VK1VaL2ZtbTBoWEhwV0gwZkpOV0dsSW9RWDJ3dnRndkoyYnQvVHgwa2VwWDhNZE1EenpFQSttZVRnanIzVWNGblVjR1htZFdyZmhON3pmTkNlUzlyT2FscjliMmRmMFFNekpST3ZiOXgvd0Qyc0o3bXdXNHlzV042bEZDb2RrdlBNOGFVQUJuSUZHclIySlg5NXhCUi9KaldDL1BsdjZsUjJYdDJxUyt2NE9yRzVyYnh0UFgvamR3bTVtM2VEVGpqT3BNL1BYaVpFK3ltazdiOG1nWlh5MzdVc2VnMEZMUHpLUS9HRW9iZUxLZDZuWjhMZHlJTE5vaHkvOVFJWmVVR213U0NxeTViRHBZZnd3MU05K2ZOZ21BSUJ2TXdzRGRxSlNHVUZjMDF0dTNqMks3UXNMcVBCeUE4dUFsd2RVQ28yZlNPallSTWdoSVFFS0tJeUY4ZTBtVUNBbFpBZkhnZjUwTlR6TDdVRjRrWDFQaGUxNG1RL2RQT1REclJiOFh4UGJGK2JYSUpVbUFxM00xU3BsZmhsV29JdU55S0NGazgwZU1vSm1NUE44Yzc1Qk80c3U0WnVmOHdWL0NDd0N3eEZvVm9xeERDcHJ3VnUwa0phUWt3VE9XN2Ria0RqdHpPUVM1bjg4SCtvNk04VW9SNzI1c0ZxWEp5dk5GTnFFc05IaDBDUnMzeXcweWdOcVdhbGVKeXNMcU9WMEdnMmZIK1RvRWxBbWlWQm9rdkFwRk9GVGhFUW9Na2tFZHJTcTZLQXJZT1hpdzlRNkU4cjg2WmQ1UklXN09DOTJVQkFJUjBSOCtMTjhydzRjajY0LzkxWTc5WWV1RkRuM3l4RWs3U3lIZGt5NmZuSWlscEpTNFBnek9RMVhwOGNLOGVFcUJ6UzRkMFVnajJiRmU1N1N6U05XbFVTQ3Z6T1cyc1VpZVdIbDVUeTdtSzdCZHpOb2U1YzVwR0xxWUZoSUpYdjNTVSttdUVxWk4wTXdyN0tkQkFVVXpzSUZEak1vRnB1QkhZaTZDQkVVM1FlK0VNWnRZZERKaDVhQWNJNjV3UHRkMXBHM3pVYXMvc3VlZGs3NGZ2TERzK21WeHhZSk9ZV3ptMlNYZitua011bW52V2JSM0w5RWcwc1l4RUNGTmN0Sit3L2YreE1qYXpDNU9JemdtV3ozRXlrN2FramlsVS9ibEVseFpWN1NvSE1hOTk0dm1DMEcxbUNSS2FqN1lXMkpJRVZGQWdqOEo0cWw2RWVRdE4vVnFMcVQ4N2tmOWRQZVM5ZFA5cS9zMlkzUnlZTjJQa2c0YzYzRE9XenRISVNmTFoxR1V4WE8yN1ZnbDZhZGx6RnpldWQwSUxlbnZVZFJYVjlUcjBocFA5VWZVamNheE0rZHVuYUtkbnZCYmRXMG51azlxb1YzRnQwaE8vZDM3dk1rcitpNTRxa285VUtPdEpodkhoTkpQRzFPUm5xQjJlTHkvbCtEV3BNNzgwWG9KWktDUEErOVFGS0VQUTI5d3BNQXFqSldoNHNQOFUvd292dEo1MGFpY1ZGSHdjYmZoVmRsL0ZNeHd3ajJTT2pwTUdQTlpvNFFaeE9OWGdnTmowQ0ptSmhUL0xKWC9hMXMxOUVvRVJvdnhkbThFL3hEb29ocW81QUFUZ3A3ZVFiQjc2UHlrNFkxTGxxNEx6S2FPck9iN3pGRlQxcjRXUktMYzlLdTl2MmRiRTlNRzNnM0dkR0xESzM0ZkMzMFMzdmRTNGFKU0E5emFLRWlEYXRQT0RWaFlZZXJ3U0JmMnZTLzVPU0hiK0NIK01uNThRbXRvZHFlS0lGNTEzWmxNWlE0M3czcUFRU0FvU3k3V0tvSmtzL20vR0NXUzJRMlVoYi94NUI1czhHMmNmRUR4Ym5mTS9iR3NuY0hRd25EWXNEQjFOK1dDbDZ6dXhsb0hvZVBtdzVNZDA5dldycTR6T1hWVEtqYVVsMjlwYWEySThtc3Jaa1NUK0d0eVVPNjgvSzY4d3U4MDVWWFVJQ3FnbnpVN1ZITXlwVmplVW9sU0pwUExyUW1yKy9iWUJDYWhRS3JXSXdkTTR1RTZqTjlYWllrUWRFeVVRQ1hCZVF5V1M0U2Nqd1h0NnJNYWdGNjBObVpJSmdKZ1dCV05aVFpBRUpnNWc4YkNIN3YzdnAvYXJmcGw5UUxMQ1FCeVZpeVpjaGd4MVRUNElHb2NjMlVlWmtSOGRPcXc5L01BUHN0Rm1QbGNsSW16UnI2TmdhUTNWT2dlNTJTY0NMa0ltUTVvQ2hMaWtGa0dlc216T0Q1dzBPY0ZlN3o0eXNncHU0MVQ1RW5JeDRrM1Vzc1Q4L3dRRk1CVlBwRFB2b3lVekFZQUF0RnZIdU56UlFZOTNkOFRFS2ZDMmExbjVRM082Y1R1cnQrL2tRdjB1UC9tejB2OHF1NVVZMU16YlBubmcxalBqZ3BJc3ZEOE1aaytkRGI5ZmRNWkRMaDk5TmJnMzM4WHhUM1Z1R3BLYUxaNW1SK2FONUFlY0gzUEhCR2xrQ0VlRzVkMGNBRk0vN0dpeTlUM3p3YVJ6bk4rL3FTL2NGSHh2U2E5MnZldXRUNUsybHV5a21hUGVteXhHeHcvcHdCRVlEaG1LbEhpSW5ORmtDbzQ3K2VEYzhsWkNyUjNMcmU5VkdEVGx5SjQ4WndBMUpZcEtadFFHc2p3alBpUkd5K2hQRmZwZlQ4REdvS2FtVmZFOUZQK3ZaRkdaK09wQW8zU25EWXhDL0xtcmpYRGg3N3Rpa1NqMHg1dVdmUVkwT0U4MzloQm82VEZ5SENZeXlOVWZzMVQ5N00xSXJ6VmNGTXVBV2tUKysrMHg4VksrNCsxUTNvaC90MFNMbVJrRlVFTkFwOUNaVWV6ZzRxNTBTYkRmVi9YWjNyUGZYS1daYzB3YkM0dUdHcHdHMldpc1NrTkhrVVNvSFhMQldMUVdBcjVSRlNYL0JWcFptOTdJMk9Xa250d2hWL0hsZjJiVlV3RzluSGk2M0pHN283TG1Sa2svNVdSTGJrOWQzamluNGQvK3lOTXBoQzlHdnhiVFhQM2l3MmlyMkFyaEI0aWdqM3YxekRHaVluam5QdFBNRk5aZk9zK1BMNWFjekVDVzNuMEhiaFVTOGFoMDFIcjZUMWZyVkpyNC8weU9icW1lNjNHaEhxNGZTTzI4NUZIN28ya0RkU2tPV2dTck1OS3IrbEdnK3JISTZDYktNV0wvRHdzTTVTbHpkZ0FzcURjUTAwQ2V4aVFBTjY5ZXlZdmQvNUIyZFVDWm4wOGplY2Q1UXhXeUhlTS83Y3d0RW9jeTgydkp2T3JhcGlKZzd4T0p5T2Q0MTFqYlhNZCtxSjRpRzFDYSt5SW9aOExDc3BnaCt0K3d0SWVNWWNkR1NVNHBUL0RIZ21WVFhjejJacndjRmNIRUZseFBxa2xMVXBTVjNZc2ZsSjErU1JMRVZrcEpVVmFZbFU1dy9tTmZEaThMTTBvcWdoamw1M1FYQWhMdWtId1pOcFNjK1l2Ty9qbjBYem5qQTV1cjJSOFhFcDhiR1JjWEY5Y2NrLzFmM1h1V21jNGN3MEgyTWI3ZnYra0RXWUcyT2RGZThNNHlZUldqeTF2N0I4TEY5cXloOXMwblBWc1VNNUhKK3ZWMTl6WjdVMVQwOEZ5cjhVWHV1alQwL0g2MklqeXVETjN1WHNPTWROL21idmpaUGVUUnRxTnZUWTQvNjQrS0ZTdGVCY0hDL0l1ZnFlV1RIYjkxVlJ2UlprdDRFNmtQK2czZ2dhUnhzMUVkcTVtd0sxdk5mYjJjNjZBUjcrdjBlKy8rSFZxVjY0RWJUVGNLY0x0Z1B2dHVqS25hZUwydjY5bFlHdmE3bFUrNHZHSzUzV2VMWDVwYmVYd0w3WHFUZkM4MVZnQ1YzUGU4b2U1dml1MWx1N2ZMOU1kN2lYNzg0b1dMaEZXRTkrRmZibk13NUFNWmRkVjBEamxkSlRxMzZ6cml2NXlkTFo0cmJudW9FOC80NG1YRm5IZVlhbDdVR3ZGYlY1UWF3VkJTczZ5d1ZkZEdIQVh0Q2JnMTlkeUJNYnpIc2h0MXF3Y0NmQnV2cWRwdm10bUt1MzVnSm1YWXRrOGhLdnhaMHNMVndjdGx2Y2JpQ3Z4UzgxUHNjZjM2L3c3Nm9SSGZGeVRtc3JHNjkwZkdxMVdGNzRoY2FMRCs4Yk4zWXRPM3RuYUx5U09iWHE0M3cwNXI2L3ZiSUgzbkxScnZKZ0ErenNEMUZJNW1IUkFvczhyRXNMdkpkNVkzVG1jbG15OFVybnBsWkw1RjM5ZXVQTUYvZmlKcTNqczNjanJObXZOU1o4ZnFjb2JYdStQSU14ZkV6My96K29RdC8vcWRmQ21zdXpzM3p0djBXN1hMeGswYTYvQ0pudHVaM3d0V1l5TnFQVldUNXlZL2FjUE52MTI3bmlnYjdSa2IxV2orNkNhOGx0QzFaMjdvOWsyVGY0ZjNQUksyVWZmN1NQNVE1K3JlWW0zNlVxQnZqSFMyMlpvN3lCWDJwaVgwa1UvQUx3Q3o5VTgvNlZ3TE1aaHlFRE1JQjdHWUFPOE9VaXd5NDIvV2RYR08zNmcrWm4rRUZURWNtbzg3d1doWmtSNTNBYmE3ekpGZHFITmNBYmhiTkpuTGVLY0I1ZmNZaHNaUVh5cXlVL0ZRMnQwZ2YzVnNkb3VlK1ladnVjeTRYZjNjQis2WHhQZkxKTWVWSXQyMUZydmZ5M29SZ0IvTlpiRy9zM1hZRDNENzFDT0lOT09QTEJQNjdYWDN2OGpwR0h3eE1iV3EvL3ZudDNvWUo4eENrNGt4SE9hOFZBK2xacWxwb2VzMjVVWlpETjdFcnBURDB4eDRhUnozVXMrb0JVSUc1QmZtbHNCZ1RmNU9WT3dEcjI1TXpUMmZheEs0VjBwbUs2YVFsdXlHaE43Q0pJSjhGOGdPc2JkckkrVHRIT0xkVmI3Z0E1MzdtQnJmSSsyZlFjMjdFU1JjOXlVVVo0aFM1T2dQekFKZ2Z3dHh4cldqVFZ6N3FHak90SEJnaDBhcjN6cERMV3NnRGYxNlluZUdZayt4OURxUjlIZ1I3NTNRdnpkNThlN3E2dnp1ZWhLNU9JVTJLNjBKeld6NTRGMFo4bEJ5R1dnSG9La25VR3M3bTc4TklIRUlHcjExN0hJTEhuUHZIeGdacHM4MXcvZTVaR2Y1YmpMZ2xocXZyYWxxaDF2RmF0Y3N1NUxNdUpTcGtaUXBwbzRhVjR3ZDU0eGlqNXJJdFNhVldRQmJBOXkydUN4L2ZpYUxNMkc2bjZ3dFIzcU94T1R3YlJObVdSUnBRNHc1cW1JbXdoK0JyQTAxNGNLbm1qeXU5QThKRDNKYUtocGJDZWhGSlRlYWhDSFRLejVoNVFYWU9jY0xFZXM0d1E1SWUvNDltNno0Wk1OQlZKU2NMOVI1RVozRDhnY3BmVGJkNzdEREdGcTAyZlRkR2ZaUW5Hd2p4ZXhFeExwUEdhSXdLZEFOU3c4TExON0FiVThyeW4yRUhPV1FUcERnTXZlQjdTc0dGNjNxSXlBSVM0RlNCTENGNGJFU1Z2MHBjamdhY0hNQzBwRzBwMncwRlRTMDRtamhUQmVUTTRsZDJPbjFiSklsaDRZTkN3Z3ZTVSs0d0ZuRjluUk10YjlhVVJUN2MxVm5JQTZSUWdqUUtVME94M0FYWVRRUEFhRHNsODgwMmdoQTdRU3JlWXZRR0Q1b3ZHREloSHJJaERpS2l2dEtJVE1oQnFxWUZDb09JTWk1alZxSnF5QjNja294R21saXVqUTlwazV0aUdaZDZNTHQzRlFHL0t5Zk82U2xYWjFteFFuZGxTMEJUaFpyMWxlbWJkU211ekcva2lpSzJDRitnMHVnZzZ6bUoyb3llQ1MzazRPSXZwZVp2SzIycWoyRGJGQTY5M2JrZEFEUFc0bXppdW1Rc3dZMW85MXMzenBCUGxXNHRnTG5zSTBqeGEzWE12Tk1pQndUYWYyaHI2K1A2SGM3Y0ptS3E3dU5mRjFzaDFCelRDM21TNjVmRnFsN0VVU1NMT3hkbGhTZnFrbTVmZVVGTnlqMGtYWmlNT3d0bGpwbHJlaXRvUE96Smw0eUlFMS9KbWZRNzZpVForUHA4YzBqbGk5SmZrQlZ2cVpSQlA3NnMzUEw0NGNPUGxiVVoyY2tGK0JQUmlFbEJFbzZaM2FsakozRnVNU21DMExhZStoU0hEeFFMQTI5WkxZcVhvOHN1UjVyV2NlU2tCYTlObmZmUm5lWVFjWE5sN0FpblNBNVFpdm11TFdkUzZXelZadzR3OTFzc0Q5elZzZ0RXVW9xTXh5dDRKM2kvZStYd1duZWduWmJZMitneU1KbDFxNHdaVEpWbWEvR28rcUkzZ0RxVnV2bmUzTzUyeEVZY1FybGhodGVScGJ3NTNDMXVPVHlpcHk2UkpteWdnTVkzbkUwTnE5NUtsZU9CQ3RnaWRLWWVPeHdKR0RGZjlZUGY5RTRqaFhyMFpOVkdsOW5MbGRFTnRiOHcySHVwdHJjWWUzeW4yS09QQ2tteFluMVJxbHpBd2UyYTVoc2g3QVl1aFU2eW1YSHNWVUptc3lYTThrSXQ2NVE2VDIwcGtNN3FXekxtZjlDK1lSNzVpVlRkM1lIL095dm1xMWxSYzV4ZUFZcnpzQWdyT3JHOXZrTW9FMVhiOVlnd3U2S3Boc203ZnFtZFVhU2FuZzFlcmVUVmtPMDdzTXpWVHovWlFaenNoTERNVHV5WkRsTnNQZksyVzBYSzFZWUxZR2xmR29FdUdBZzZwdzNZU3RQZ0lNOWFrOGNCQm80R3NKN2hyYVpIQzFOTFZIR2dsenJ5WVN4bk43S0RqZXljWUgvdTVuVSt0Mm5Db0tNNjFLbVNRdEI2QkNLNUN2UmpMRWhhUHAvVFVBOXU5SkRFeUI3NUVWTzBWQUJqZmZleGx6K0lnUkZTRFhGbUlPRTJDYkVJVSs5bUJuSEwza1JBbnJlL2tXOU9RSUZWS21uTWMwc3pIck9EdFFES0RzVTJmeGRHZnBiZDE5YkptUXY3VjVBQzliWGd4STNUbERkSVJVTVpRaFptRjJtYVNUWUJXQmFkaHQ4VXpqS3RhTEFZMUszdDREV0ZzaStxNndJUjlnWWxtc0RTU21BRk1ZWE5aN3VtVmNGWElIRXJLcVZhUG1XNGRnM0hadGNBVkNLKzBBRkxWRUFKQ0RUZ1VZaThkV1B3a3Baa3I0WnprRVVhWm0xV2tPVUlOMEo0WmdnMzlETjlpQU9SZWZ4L3pNbzBXZERzMkxXeDBrT1o1RUgxTm80aXhjczJ6WFhXNHhaaFRzekNyczdXRnhrT1piaHRpb3NnVDJsa0JpanV5M2RRYVJ6NnFtbGJJcm1UY0RwMDg1TUJEaytheW84NGRENVJUa2JONXYzSmE4THUwWGdMMHBuRnNtVU9Yeml3UVBuSzAxWkJpUFVqVFBBZ1N1YzUwU25WRVRPbCtPSllHSUtKQzFkK0F3WlVpd2ppZzJYbmw0MTB5QnB0NUdrVHE4NFNKZklsQXV5Uk5HalBNTXowRHlrV3BSbGo0RmhUVFVsVGdnOXdvWFpmcGhQVy9jVUo3eUQ4akwzT0lUMHBuV1hUQTd1TzQrMVAwaTcwd3gvbDA0SFJJNzVDZU9FbGhBblZIM1BPbUFvaFZSb2UvdzV6U3FrVmpscWZrQ0dZV1ZOdXJUaE00VWlVMCs5cmRHM2xhNUFyajRDcFJRYlVhTXJwY29JZ3RoaHgxWU15RzlUSm9JMDh0K2h0eEZidlZ2RDlrcHFjK0dnb2g2S0hNdWRJb21KQjdsMDNMUjdFNzNwelAzT3JoblB6cnVRVUtSL29sczRrWDA0Vlk3emhtRFh2Wk9QQzUvTmwya0g0akJ3MVpIdkhtaUZuZk9xNUNVS1p0MDBEOXVJZGFaRk9uc2lqeERRa05DYnVkSVYzVTdrV1BjZXV5UFJMVG9rUXBzSFU2OEZPMHJXYi9sYnF1OElZNnoyclNtVzBKT2ZvZjdwWjcyN0JlTEQyblpUMi9SSGFBV2hwVVVaZVNBSVVJNUg1SkpuSEZsWnZCTGQ5T2lKbGVKNjZCcVRLWkZGTmZtOW1DaXZGRmsxbmtmUjFSYkFteTFlSWlPQXNmTkhEblhGVXVlSGFrWmtkeTFwT2FPYWtsbXlmU1JQK3hWL2xPYmlWcm5xRDc1aGowQlVhb0NhTGMxTXpyK25hbmQvZ1VoNjZaaXJGZWhPWWlpREd0dktMM1pFUHM3K25KeFFPWXJJMDI1RFYreE5jYnQ5Tm5nK3g2WEN1V2U5c0RNMXh2RW5uODlHMXh4emZVN3BVakIwbUR0VUNNc0JjTlpxK0NrVlVOWXdkRnR1ZDA5WGw0eVR3NE5Hd1dNOHNzZzZzQkpZZjNVT0x0aTdZRWRmMDhpRVowRm5aVzd3SERyc3BCejdTa2FlVU1LRStpTlI0dE1uR1F5WUtOdUdVY1UyYW9Kc0VvRUlZV0RqRnVuZ0RiNGFXM1hRMW8zSGMwb2hCK0h3dm1xelI4alQ0dEM4WGlncmRTeTRDZ3RXVXFyM0ZZcHVRcnVhS0FLT3lKOEE3M3FVR3RVOHV5cDI4SHludEJ3NjZ4RmdVSFhQa2IxTzQ4eUwweXo3cUJwSXM5YTFYYzRCQnNud3hidExuSDZMMGc4d2tHMzl2eXU1dnJaVVlwMkFLVVF6Mk9TQjQ5cVdHMmxQc0NSdHJ0Qld4QytkZmRlUDI0SWdRWW42N3VyaTdXL1NoSVNZcUlRdzNqZzJuZUNES3RPZmxhVUtwbUQrWU5YK2lNWkNVZWJzUlRxcGUrVERVRFVkT3FsUGhLdnFMdDVXV1I1MWdLZXpGTkJ0a2NEdUpGOTU2SVgrYlY1WDZacDNHb0t4R2xuRnNSclJjc2JLdnhXWjloSmhHWVo1c2FJcGR4Z002OUZYN0cybnJKVW5lWUZBNTh3UVFGa3oxZ2lDcDA4YjZ6WWpoS0JFd0V0eERqOVFsYU9mYXZ0dWpjL3MvTzM2Ujk4Ukl5dkljbGxqVkV2azgzeU9zd3FMd2lxeUlGcnVLckFqbW5KU25OdHl4TFNzR0oxdU5ZQlRYWkxJUzk0ZkFhZmpsUHFqeW5IU0JuT3RjM2lybTNFRzUwOE1naXNja01hdHdtalRRODZOdjhhL0lZUnhlVDAzVUhadDQySzRmREM3NHBmVElPK0ZuTURpOFo2bXZ1b2JNUUtybzZVRk9ZT0VPTzcrelFNVXZqMEJrMjFUUWd6SlljV1hONFp6TXRna0JvY3pCZjhDMHluZUFZSXN5MnljdUE3WFlZUEd6VDRHVkFBajB6SzdyMUdQSy9vSFAvbm1sTmtXMEJ6UTMvRFR3Y2pobThjeXpHQzAwY3lMM0daQzl6Zko2aHJQWnRCSDgveDBPZVJyeXhNL3NuZzZTRjN5c1Evb0RocnlXV0xZdTRHRG50YXJVcHAydTM1RUFXTlBjMzFIQ2dnR1VKS0E2WjBlUlZOVlVwM2psZjA2TU5PTEVBNmJRajhYbmtNTzBwcCtDVWZmRjUvZG5OQ3AxM2FSUEh3R1RKRzM2b2dpeGxwOFBZYWc3U25aeGI0R1hsZEpnV3dvOWRzbnA4WEZmZzdOWEg5OStSNjhONmYzMEplOWs3QzBUcjllM09BWStlTGJJdWkzckhMekQ4Qmg3SkdlNkJHQUtXUDZVYkdkdEpWUlpadW5yZVkvRnFWZ1habEUrNXpEaDRuQWJ4WGxURWFnQXdxUzZkUFJDTkw2QzdNMUFJY2hQeHpQQjR3TkV0amxBanVSQ1BHdHgxTys3UjVYYXVENUlUSUY5eFYvNmZGUXlCSVJxUVozR2tVQVBocDlkazAzQ2d3MnlwWEhQUmluckhaeEMrQUdIVElwOFFnczlkaTQvWEM1N3pXb3hKdlRDbHMvZFRFNlU4QjJZUWF2Ny9EclhHSUZkRzZqQVp6YXJBUUQ1UnpuYmZ1OGxNRnNWb0V2WnFOeTY0Qk80aHVHMjBBZ3pqNXB0NjdOUDJqbTNXSjkzTHN5S05zRE9vbGRIWktmSTN0MTNYSlhoOE1yUWg2bzM1Sk4ra1BDN1pFR3BKRFFNcFZ2bFVPYThtbUNaTzUxY3JYZzNBdVRPWDU4TnhXTldxbGhseTVWNDNkSDJMdHhxckdBMlBHTmhEaU9QNWN0R1hkcURDY3M2MS9COFcvQ1ZudFNOWnFGZ1lSYUtJeXdBZGpFYlBmS05Fb1Npbm9wN01CZ25QOHFYQktPdCtIUFQ0djBDZWdKRkxjYTJlcFljVVJZVFc0SDFFZnArRTZLKzFyRXRMZGphckpJTHFCdWlFd0w4akVBTmh6WWxrL3pvV2U3bWI4M3RuM0pxc29DYzlUZUZGUnN4Q3JOdEV2RVFidjErR21aaE1aR0VVajFDZVZpR0xaV1UyVnNvL0dWeUtzcTZsQWZVNng1Ung2MHNOWXFuV0YvZzdDTTk5SnY4RFFybzBjajlmWFJlM0x0K2JLWjBONzNFVCtRZ0FBbERpZnU3dDM3cnQ5YjlMbzJNSkFGNzU0bTBBOE5hWmdRc045YkxIREpjTGtEQUFRTURkc0N4d3YxWFFhQmFRKzlRTC9XNWp2bi92MXdOK0J6eWt1UnpjOUVMc0NhMHppWUx4QzluSUdvKzJlR1Ixb2ZveEllSTZoUjJFWWJ2VlZDZ3dGbFNueW01WmRVK283RzQ1dmFDdWoxVzBFemw5b2JydjFIdFh4TDBLdTFEZEFKRXVWTjlXc0dNRVJmMGtieXlZR2wzVGVFMzFyS2t1TmpWTm1zWmpLZ3UydHdqdk1FeDFLS1ptdDZucHZPc0k5d3B2T2lDQzJyNzZBdXRWNFhiQ05pRWpQVXViR3lYM3QrU3VwWFlwYjBYMnFwQmNrWTd1MGpBWGl2ZTVzajR3M3FQSytrUlpuNnJLanBKK1Zqb0N4bjBtNHJ1ZHpESGpjUmdlUTNYbjhCanZXeGY0L0tPbTJHZ1hxQ3hYMlFEUlZxeWIvYUQzdU56K0YrMTBvWXEwSkdDaElrVTlKczlqbXJwWGRvOHE2bHpxOGJoWVhTMDNpazVIQ1BhU2Rrb0szamx6OXQ1cG9oVGxpajBzeHJrYU1YRFBzSTRYZWRIVmJ5SkpaTkNVSXhqY245dmVyNmJDS2lTR0hINlZQU3B5ME9DekhWVHJROXdhQ3hZVUlDOVkvRW1DZ2lsUndhaUtQYUpMTE10bnhqc0FVeVV3ZUl3Z2ZBeWlKZzVkWU5nWVdBR0FLRkRCdG50dXBGY056N3FQcVo1YjRreVpUdVdyVW1wbDB0MG9iYkkxTlFjMmpjb0g2TzFYSmVOUTRqT1J3NldrZjVWTW1aSjVTT240UkVZVHNmM0FtVkVJUmc4Q3ZLQ1ByQldQOFNwM0V1RGdKc0FqZ01QN0NBQUFWVEFORUVsVmdERnBESERTdEFWNHF1bUF3R3FwVk5RRnpCU0hiRjFoY3dJT25aZ0JiSGNlQWtTTkN6QzJuQUZPVlZrQm50NW9RSkRhZnFVaUFtYWV6bmdlUlhvM3JOREh2R0gzUVMrZ3EyMk85U1MyN0hxbStrN1BseWFzckFmNHVQV3pzNG01Mk42SlRSYk9LUE9mbkZ6Y3owUFhxTk5HU283eUZ1VVZHYkxxT2JYUUpUbEZ0amYzTnQwUlI0dUVKUWZZMDRJNTgvYW11NEV1S0tCTUpkMFdCOUMxR1JmYVN0Y2pZWXNaY2R1ajVvZStmbHlxdSt0N0ZiUjRndmp2ODMzRnpmQmJiOWFzaERreGUwc1lFRGRuSDl2RjdLbU1YMEJBaFRyRElrYjFxYk9mcHVSa2NpWjlwUEViMnN1Q2hKMzBCb29MUnQ5dnBQcVJMMFRYRG5HTWVyVEdORUhHQzZ0c1U1YmU5ajBrTVpOWktLeHM3RlFhQnlmWDBwSzBOUFcyeVpCcEhWMFdyMncrT1hMbHlWZWdVSkZpSmZ4S0kvS2ZRRkM1Q3BXcVZBdXBVYXRPdlFhTm1vU3QxNnhWbTNZZE9uWHBGdEdqVjU4Tm92b05HRFJrMkloUlk4Wk5tRFJsbzAwMm14WnpsYU1kNDF3bk9kRlJIbkdsV3p6bENiZmFZcXZUelhoRzNKT2U5b0puUGVkNVg1bjFpaGU5NURaemZuU0cxNzNxTmZPKzhaMFRMRnF3elE3YjdYUzVoRDBzSFd2N3NNL0lmZTNuYS9zNzBBRU9jb2lEM2VNS2h6blU0WTd3cmUrdGVTTUdjVmkyRWs4Q2lXUWlpY3dra3dXcmJrL0JYZTUyaHpzZDU2YXNaTU1QSHZSUWthU201Y2lacTZUY0plYzU2WmxKN00xdjcyL2N0TS9PaFVEdy9OcmNIdHFwOFYxelRabGpXL2ZaZTh6MGFybHFOL2RldUpkVGlsdzhTZGY0SGZwSjVvaWR2OCt2bFZMTXZPQ2Z6L2lvb1lHSU5MdDUzajlmOHVCVXNlamZPN0pIYVlyckFHaUZOMitGREYzcEZ6czdkQkw3T3VEVnN2ZE5WankyWS9OcXcrNzR3bFAyaXU5WXFCcXh0UFRsV0gvWnZqY2l2K0xKcDhaV2lFNTlrVFJueVRLdnI4QjAvMm9Lb2ZCNTRIWkZJdW1vMWkyT2xPNWY0OElnWm9YTUV1WTJ0SDdubytPZjFPWHdqekdGWm5CdTJwcDBPRG81eHJhZWo3MnR2UmptdTkwbWtWTDRLdzNEK1NuZjZTTHpCMkZHUk91REFBQT0pIGZvcm1hdCgnd29mZjInKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFmZm9nYXRvLCBzYW5zLXNlcmlmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2ZvbnQtYWZmb2dhdG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixteW1CQUFteW1CO0VBQ255bUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdXhsQkFBdXhsQjtFQUN2eGxCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0FmZm9nYXRvJztcXG4gIGZvbnQtZGlzcGxheTogYXV0bztcXG4gIHNyYzogdXJsKGRhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmMjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHTWdBQkFBQUFBRG1nQUJFQUFBQUFnSWdBQURrOUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR2k0YmxIUWNnM1lHWUFDQlJBZzhDWm9XRVFnS2diRWNnWnRJQzRNaUFBRTJBaVFEaGtBRUlBV0dBQWVGUkF5QkRSdm9jalhpN1RzSjZBNUkxWjJZd3p5S2trWTNPaEloYkJ3QUtmRDk3UC8vbXZTUWJWNEQvaXJJRW1RS0lvOXdCVHd6U1JuVlJXTUlROWtJbVFwZmpQR3I5cmcxWGg3c0pHc2dQNFllRDRjUTdQUzZMU1U5OFBWKzV1VkV6N2ZGTzBqODlkSnZWZmxGdnpVN2RVNitSY1ZPa2xBdmhMQXFNb3d1ZWhBSVpQZEN3Ly9yUDZPR09oTmlyYnVkQ1IzK3pMSFBuZHBNM2UwSWpYMlNTeElWYTQvZnMvY0NET1ZUVVlneTdJaU1TRVhZZkdLaGdCV1FBaURIdU1QemMvcy85KzV1emRhd0lOYkFHR3ZHWU5RWWpLZ05SbzRRR0oyS2dUYW80Sk1aaFJpTmlHSVZWbUdpdnVEeC8vTkYraXFFY2NEaVg5ZVBPdk9mRmJhZFdHQ2lpR3dIcWFTMi8vT3czQTNMbGl2Q0V4dDdIMmZBTjVzd3N4SzFMWlJkU1dWcXBhM1VtNElFU0lhVzU0RjJEZlN3SmgzWnZIY21qVkY3OExIREQwS1hzcWkxWnpnN1R4ei9TLzU4bFF3QnlRNGdUY2h0UjVKT3o3N3doMWNBT0svMzFoRHkxQ2tBT09iSUx1ZmEyZllsZFZFVjE5VkREb2lELy8rNnpIdmZKOEVYRFpISEpJOVhKcGhsTGFDY2N4YXc0cXBJbVd4WGJSMHVreXFwV3JSczcrLzIxMHFwUzduc2lkdWhDVWN5ZVVLaGZtdnhJQlM2Q21teC9uV1ZWZFhkWDE4YTFCSWRBTVZuczNiWFFCUHBOSVk1T2J5WEg0K3p5QndDeHBuQmdHM2RHaEFqSHRLclNiRDQvNzltMnZubjdsdmdXN1lFYW9RcnFyS3VVQlV1SjM4bTlNNHI4R1FLaEc2SmtxeXNNVFdDMExKY1dXQmhxbXQ4ZStXcnZ0OTU5d0VnQWRJQitqSERNZlJVcXB5TExwVXVtc1B0ZTNnUjZUMkFJaDVFQ2dJVW1CUUlTQndJK2dFUGdEUWcrUU5GL1pBQzVSUXBLRFBvLzA4NjVOamxVTW1kM2NYS3JZdkdkZW5lUmRuWXJaZXgrWTJZbUdEa2lkSjFwZFprRDdMdU1naEY3dFZDeUVMSUdmK3hKMyt1L2xDd2JhOUNRZ2dscEZVRm5mdDg1Vm9CVE5iLzBnVU5aUlRrak9zZ2syNkEzWFFUNUphSFlCQmdJakVkZU5lZVpEc2dYejNWV2cvSUVBQUorY211bkd1dUJ6aEFBUUtHY1JFTUtBU3BJTzRRd0ZoU2Nob0dFU0pBTUNobzZEeHdlWUpjNmxrUWRJZVJocFc1dkpyUzI4SEU3dWtHVVlTUGcvNU9mMXVQVmFUZS9SN3R0RHMyamxRZWtBdVZvMU9rR0VKb2hEQ0p3aUtDUTlpVnJNMmpnUkV5MVdoZzNCcVFsMmx4eDNvUUxGVUdDQWx6OGl3Q3VIQUFBV3JIZ0FFa3VCY3d1Ny9yUi8xN1R3L0orWjQxeFFtN2NHUElxbzN6QnJ3dkF3L2VMVjlicWRtdC9heWpaOTNiM3FuczZQZnpTczZqVmY2STN2RFpERzUwbzF0Y2Y1UzlFYXBaUEc5YjZXek0wWDlYc0g4cHlxREU5SHBjei9qYnZUVHlwbERhTkJUMlA5MEk5RXlSNS92Mng2YmdNVEFBcXlsQVZMUklnb1Noc3JCZ3E5YUlvOWxpZkwxV1V6cm1tR0F3dnROTWhJVGtjaWxmQ0Q5RG1EK3haR0ZFQURsWUlIRVVZUlFWTlppR0NDM1Jnb2loSnlLWVdBYmloSkFvbEhoR0VvU1J5RUpZWXhqV3JBdXNtNGo1WWRnQ2l5RjZ3NGlsVnNCWlNhSlZSRnV0RUgySFRrS2dnUVI0d2dpa0lBMW5KbHlSRHFSaUVDWW1qWlF3V2VSRkF0TUJZWHFGNlFNRkJGaWdnVW13SW9GNDVqQmRyRGgwQ2FSTENqT2tzV0t3a1M2RGRIWXlaSkl1aXpqWlpIQW9nNkdFcGdraTN3RXI3UFZwckRYV2Z3Z1BHa0xuc3FXNGxZWHB0aHRHTi9KZ3VqME9ZRGprTUVaZ0V0Z29rTzQ4M1Z3ZzJVVVNYU0xKbFVoMGdYT00wM2ZnM0lXL213Nk9GUUxrZ1ZJaG9FcEVQbTd2ZGhhVExHMHFtQzFCUGdFcm5aYWR3a3pGK0w0dEpXT2Z4bTRZN1pjSUxtdGFaYXVxbGIwUHpZY1hOMmF4Z0wwU29hUkloMldYeFUyT1BGUit5YkRoYW81dGhubHhtb2djTkNybU1aRzRCWlM2czdBdm1JY1lJbUtKRTBkRVBDRUpoQ1VTSllVNHFZcVBTSWRLMHlHeENEU1EyekZ5NU1MS1E4VlJjRWdHRkJWaFFCUWhBZ1FJVUE2amdzUURMa0Z6WTBTaEVFWWpURWlzWU9LRmtDU1VCRVlTaFpFa2ttUlJSSmlWa2xTZ0tDV1JRRkVLWlZBQUFhTnVxUUlTS0VwSkVsQkFVUXB4cGNRK1lJV2lIbEJBYVRJOUUvZ3hzb0N3S3BzcTJIUTg2T0dvNTJWN0JMOWprRDgrRFBlT2VOMHZXQVZtYlRlYmVIM3BXVWN3QXNUNFRieUhlOE9XV1gwNmpBajBJVUR2UUR6dldURENlUmRjbkFHR1B3NE54ZDErSXFKa0FsYThlQUFETEJCRjgra2x0NnVvcmlRcWx0TWxNY0FwaG05Z2dVMndrZzBodGhLVzlSWll4U3JGQythS29JQUJWckVSQUN5d1E3SHlxRmpXRFh1K3VlRXFuNUpPL3V6MU1OdFB4dktCYXFmSnpnZWhPOU8zclRGemovQkI2c3N6Y3A2ZXRMbmt2TlJyVjF0U2E2aUdvV0hVTU9aRlkyR3ZYcW9vQnZLckRhVzFRTk9HQVJHSVFlTGlWa0JnZ0FZQUFnaHdHUVYzek1rUDBtcmZ1SlFMZ1RFL1YrYlpnekpMT3M3VlVyY3FkOHRRTG1qbHhKVDRpaVBndWk5Q2tpRHJwNnVoVWIvTWxOT2JseUllUk15TFlSZ2s5OEZJN29FUnQ3dUhFMG1DUmtMSDVrM3NEbGlXMjJESmJvRWx1Z0dXYWhJc3lWN3Z3dVVRTklRWDNCa3ZvMmoxOWsyWlZ1NklWcGJzNkx3TVUzcjMwcndkbGtFRHRhbW9nQjN0SjJZRFRYQUFNRkYvdlhIQVU0OHNPeFZFNGEra28vSTdnTFovVFMrV0F6Y0E4bVNwQU1zUkFMNzlXYjlDbW9peC8zVTlQZ1JPa1lYMjJPZVFVV1BPbUlQVXlWak80blA0WG53aFg4b1A1eC9sOUxrNUxGZHN0NVc3c3FuMDVRdyttKy81NzB5eHY1cTlldVhpMlRNbkRuZk5PV2Iyem96TURNOXNuOWt5czNTRzlTbjhFVTAvZ09wTlBZS0FiL2VqRjJPcVhycGswRWQ3VGtVNi9mOWZUVXVYeU96eTYzZm9yOWdCOFRMMEZIaStRRHA4VHZ2Mk1mRGtrb3RKUEVCNkdTalcvQTBDenBST1pHeWRJOTRTZDZUYmdzWWNmVUdDOC9WQlFRR200RzgxZGZyWUxpUmliOUtqTFlLak1oMTlDazZjVFcvQUo3WHFxTlZld3JKL09WRmt5T1hObEF1VXZyQ2NjS0FkUU1GdjYrRUE2Y3VIR3lJMWV0cDh2eGE5Q1dkdzlsVVFWZFdTcmlyRWt6QlRMYWlBSHFpdG1ZS0dkYUNKbmpaNjY1eVM2NElhNHNSaG1zM1c0NUlQMXJDZDg2ZGdBWnVXVTJXWCtPZ1FhZjcxbFo0UHFwdlVhUmhpYlp1UkJsR25ZUDBta0c3SmtycG0vS3dHZE54cUlVd0NxempNQ0FqcWJpamJBNkh1VkFkTlZyWUQrcmwrek1sQ2h4S2xndHQxMUhJcmRwZjdDdEM2ZGpEMy9LWmpPNFJPTVJnUmhoUmRZbnVpdG9oZVd0OWd5aW9UWTNhdTQveVNOWU9ZVkN4cmRKcy9MM0hkT0RjK0lLcm00RGt4RTdkeHExd0VaOFhwcHVORkNiS1VDbjZ1V0Y0d2hWSUF0dWV6dXNHVGxkcks1QXMrdzRRTmZSbkFuQjVGV09oUW10WTNYMDVsUkhxdnBFbVFpWEk4Znh1eTNuZDF1ZHgva0VPbDhGWU13L00zMjdoMXl0VisvQll5c3M0N0pkdEt5STFuNWtwTXI1alBmb2RKRVhraW9MSmV5NVNMVWJ2cDlHWGVaaW83ZVJQNk1Hd1ZTSENoeS9XVm5nTW1FSXhVNEZNdDNKc3lBN09rUzVLNDBWTGtZdjl0bUF6cHZRM01va2VQOGZiMGpDSzU5b2dmbGMydllyZ0Vzb24yNlgxdTFTcCtYMTFlMVlJZFpMUzNDbmFSdVlhZUlOQVhGQXdFRFVQQndFaXdNQlljVElRQXBrTFl0UTFoZVVQYTlmTzNRVkNTQysxZ1RmMmxrdWFlKzcxdDFWeTZQMTZyWnpBYytkaHdCV2M0UjhWVlZGeER4WFZVM0VERlRWUXNVWEVMRlJlb3VSMmdrbEhZellzczF1aTByM2Y0cU5EUmR0VDBsMllQM0hYdTVvTDdBQVlRWUZhYUhYR0d0VmRxZHVSd0lHMTJ6UlB1NTJ6a3VCZXVLM0g2SVZOcUs4c2RBWGVHcWg3WGJJZEZDemJwTFZmZk55bDZQd0hzZWlBNytVaTZoTDFhVG9BS2c5NTJFSGZvUjZqZ0tjcXpWY0V6c0JnWkRaWVdueU5MY0Y5QktXMWlYU2U2bjZZdkQ4VDBOZ2hqNjFTTG8yL1BoTWVuTnRuQUpZZ2VjNGhybXdsa1lvYmNtcVc5Q0ZScG1WN0E1UVJLUERGcWowUFo0SHVMTVdrOURITzVQVHEzYzBsSFIrcXRhRjlBcEhYSW1QVGJNVFZOVVl1V1RBd1pPeEhHcVZDeG1iYUs3S3A5dEdqRktzSS9vRVlBNmlUOVpzY0tBL1lweHFpRDdVYmtodGhMUlkrY0F5bGp6VklSd0taT285R3RCMTZMb3AwczYwYlJNWEtGQlNvaVNaT3lEcWwyd3MxWExRWlZTaDk0aTF4d2tXdjdpUkNKdWNWNEVVcFU0cXduYnk4REd2ckhyVmxEbmdaMmtYTlZaVm9Ta2hiVk9uTDloaGd2WFdyUi8xY2tOOFRiMkExY1dzbEF0dXcvWjZqdFNBTXFMZk9lZExZeTg5OTg4Wkd0UjY3UmFvYSt5N2UydWZUV1NtOXY4N0tuK1cybFdoY3hMY0VHVUxQa0hvTTdGbnBxQ1VtVzNveWdBb1YzTVA0WXZidWRnNHA1b25mMUx6RlFXVDRDYnA5dVc4bU9kY3FSZERvOHVOZUY1UllMMVBzVzY1Sk9DbWtVTXNINHdPaHF0OW5DakpXVE1lOUpYcFNIM1krMk0vZ1g1eWxYSHVmVjh4MmF2YUhYRTVUb3AvVU5rOHlMYmZtTnM3a0hmTFBOcVpYdVNvd0lRTFFGR0JNQzhYblNQVXdJUUxJRm1CSXlNRDJYY0V0Z3hnVmtXNEU1VnlCL3VFUXN1SUJpSzdEa2lsYnVEdThJRmI2QWFndXdKZ1RxODZUNzJCQ0FaZ3V3SlVSdkR3bHZ1enA4Q2QxV1lNOFZ2Wi94REFjdVlOZ0tITG15YnB4bGMwK2ZmSW5UYjl4VERMUVp4V21Cb1RJUGhxbUdoUWZYMGdPc2xzakJpR3UzZ3h1M28yOHp1c2FkZEExN0QzRHdvQjdIWmhkUGJoZlBiaGN2YmhldlVnWTNEM0Qzb0Q2ZzJjT24yOE9YMjhPMzI4T1BsTUhYQS93OERQclB6WkVpVmNXM2c0MXp0TlgxWVFqZXVEQmd6eklLZi9sNEgvemg5VTk1aTRCWDcza09PV3lVQzFtNnpBN1laRThWNzV3L0pRaTF0WW10aFovdXdyYS9TdWJSb2hGVjlxUVRyN1RjUWpRcFcycndFZFQvZjB1WWFzODRVbzJ3MjJHb1kxR2xNK1BZSkN6bjBSZ29NODd3TC9KRG5URHg1UVAyWWZJcURkMEhQdHpUZTlvUHQ3MGVqMWM4cGhxdGVMczltNjMwWm5adnUzK2JUdnFiY1dEVE1EeUl3MkYxSmd2MVIyNVVyYVJKdVpKbDVaV2c0NUpoV1dYUHlYZDlONTYxbmFIcmJiaGRuNTN2VW9meGozUjJwYzlHNmZBZ1d1akYyTlZuenlLTU00eG4wZFQ3ZzZKMzVBY3VXSTlQZGtmeDdaV3BkdzV1NTNvdkxWMDZjVStiMmtmNDdmcytQS3Y5OElvdWQvaklYNHI5NWdmWGpaQlNnSUdBa1pCUlhsUlJvV1dhY2VwQ2s0K2pnREJVVGNEdml6SE80NFJ1WEdidG1tU1hFQzR3RlJZU3NvZFdZeDhMMy9mNEpQenMrVWY2NTN1RjdXUEwreVRyQ3BhY0JVNTgzV0dOMjNBc3h4bTVyQmhnN1BFWHQvV0hQeG40aWorbmUwK3g5ayt5WHdnLytPTGpZL2crNTEvdnBEVGtmNG9zaXpWdTM1V0JkS2RVWmZvU2pEMElmWkpaNTFsQ055clcwK3MwQklaMzlMNTE2LzlVZHM5dU1CMzBUa3JkVHNtRU04cW9ZMW5ONzRoUVFPQnVOUlV2UmxOR0hKdGdkc2ZMbTBneGpoT2JNZ3hBb0dtNlpjL3lEaU5BdUNWZkZTZ3ZXQWNsdExOVWpaU2t5TUV4bnJQSkt3WmFpK1REV0ptbVlYSi9XenhuaEdXUU9nSXk4cHl3S1hCZDFlTDFtcHd2QThuV01pSnYrVkloWDQ5bzF5RjRoeDJBb1g3UVY3UEpFKzRJYUZsMHgyTGdLOExNZEpOTjJuQ1l4aDIwK0FpazhZNCtwZGRkdExRb3ZOVjFFeUtoUks4UElqTUNuekpHMDN4bXpocnFEZGN1ejYwN2l3UjNnVnRidk42Ymk4NjJIc0IxR2xwL1lWK1c3ZTM2YVhMQ2JCYzFGOFlrNDdRM3RVV1JXK3N6ZkpnejZxRzY2QUFRNXBjcVBGN2lEb3l6UGs1VVIwTHpiQTQ1Sjd1V2pTYWhPejdTQlBtYnBTTkJYMGNMQ08yQXU3TGlET01QUVBnbDJiVlNpem1xVk05dkdRZHNJdWROb1I5S3hUcjR1Q0lxbG5HMHVkS2tha1AxemE4S0dqT1BpcWJ5Ym4rVkM2UE5TR3h4dTBhbHVGVW5GVVhHVXFFNktBMW03amVsU1pITGhSU3R0UXRVZmR0ZUpTOXI2ak1SL3V0UTRwSkZ6K3pJVHJKcnZ0ekJTR2haaWloNXJxYzNtSThxS2Fkc0RxRHNnRVZ5VjRhMGtaR3U4TVpOcDVsVTM3a1RhVlNTVW83eWhPWEI5VmF0RWk3UjdTcFhyaksvemFhNXJ1cDNxNXBzRlZiZFpTZmtjNXVvY1ZLcEE2cFgxUHhGcEFsRENUMWhlUjZERkJSb0xzOGh0cUpEYmtLcEUyZXFMYVhGczJNeEhNTDRwYmcrYzVIRURPNnJjdDJLcGdyS0t6K2tFeE1hampoNlVkSGsxc3J0K3dZVzE3WEpkc0pJM1QwYWV3U2djTG1oVlBjSmJBeDNEbmYwdHBvUm1tdzAzYUlTTEQrVm1yS081dFZvZ3hPNGx6UFFRK1VheHIrN1I3NXN3WGFwMnc4aGRkNklYWmQxQW1QS3NENmVrNzRjbmptRHdTK0ZISm01bW1zSHdzNXZvMDJFUzg4cEN1OUR2cmNrbFBXTDZWSC9IamJNZTFGRUZYYmV0SmF5TkJQL2xMTUtHUGtpQ05Ya0NrL0NJc2dyMGRHYmMyMFU0QWJTZ3N0VHFxMHA5K3dTdml6QlNPOUFSNnpKWE8xaXUyV0RMRlVUTE9sMEJFZmVsSW9Fa051RE1YZHR2RklvNllFc3drcU9HQ3dQMGh6MTJXYnJGWW9SdnlheStqU2hxbFg4VDRreVNkN1hNMWFyVThXNFpVNnlqQnpENHhiajE3Mm44RnpkckxHYWl0enBwcnhrRWxuTXpwdlVHTGlTK1NYeUR0Rjc4K09EN0JjZzlQV0xpUjdDZWRhRWJ1Z3RFMjRkVW1Fb2hVZitqdnpBRW5SSHlXWDY1ZFZQQ1VTYWpkMW9LKysvVy9OUXIrMC85YmxVbDkxOFVEd0tiRG5DNkxwbkI1OHU4Vng1Tmh4cnY0L1ZtVENVL2ZPMjB1NHdZMWZPU2V1MnZXRHNHTFowTU1iY1dVN0prdWdhSmZiV3J0NitDd2g1TVFPdGlyVmIzT1p2UGlUWnNUQzFYVkpBNHcra2NmVlBsSmg0VGo2eHpPRkdyMWJaZHRtQmxadDFaaWpVYmMxdzkrcjVMejYrNkwzNzhuN2NUSEw3eWU3RHJhY1FjcnhwTk1LVGthaFpZa3dlb0dpMzNMRVVwQjJzaUNsMG5XTzM1VHhTdTY0S1dZUHZyL3RuS1V4ZDhaUklRbDlwSGN4SGVVWkxwNldJeWs5Wk9tR2JKZXdxK2thaXBlY2huNUVrSCtuOUFPdlkzc2QyK0FCMDN1Wm5PdDkyRkg2VDdkZi9wL0NkSm5pQjVvZWtyNUcxbXhKdlVRNUNtcjk5RHJuaXlHQ0xmYXZmc0dPd3RDaGRHaHhYUVVMZk9ROU8zdmdPSUZ4Mm9kT2xRWjl5Vk5ocmE4YS9lUXk4NGd6OW5uWkxZYTQ2N2VzMmJxZUR1K3l6NTRKNzh2ak42Uk0vbldneDhuQm85dDN3REp2MTJndmdnSkllUndxSE9LNW5kd09rR0U5bVZ5RFZHcEZ4M1orU0VhNXRiY2ZPdEcreGJ4VmR4N0JZZXEzT3ppRzBpTkk0S3VLUXpLMkdTc0c4OE1hWlA3U1VVcFVnS3pMSXNNY21RZUM5c0YvY2MyY0tPMDFVZGdET0ZXWm4yaDhvck1TcmQzMkxUN0J5ZmR0NG1kdWZteGZEY1QycjNleWtUOG5WM2xCTUowWVhRKytvcmVvbyt1a2RGRHM1andMSWp1ek1ISWNqMC80cVN0MUxLVy9YNUlXQUEwYzhOaVdDZUZKbkRiUjcrT3BaNWw3dmR1enk3Rnc3YXgxeGt0R1FjOFBWb0xVa3pkNmRsN1d6b1NZRmdFMTdvZEpySFc2QTlLUEx0QjFNMXhoMDRJK2E4cXdReUdzTTkwc2dxQVdPL000d0ZiYllVV20vOEdjNlpTT3I1cEJmbElXWWJLOXhCNnEyRFFTbGVPYVVWNUhlSWZIZ3g4cFpKVFNxeWc1YTYyOTc0bXpuSTJSMzdTZHNleEQ1ZmVUUDBVS1RKRnB3UUdDV21JWDdsMVFkRUprdGdsaUJXR0FxRmtRSHZ3YWRGck9BRjcxY2VNRHA3RFlJUFFSS3AxWFFkS0JwLzlIbUE4MENxMVBwWEZZdXNNUXFoQWVFRlJZRlg4QlIxQSt6ZHpzcGp5K0tST2RGb3NNaTBVV2g2TnQ0anhxejF4SXpJNitma2VkODRwOVpBT0l5Rm5kbi82dzdsMG9ZeG00N3hhZmYyYjIzS1NKTGc4NGVRdHNwc1VrSEJueUQ5cFBkSWlsa1ZNcnNpYzlVSWZHNUEwajZSb3hqTmp5K1pxVzQ3U1NGQW9mN1h6NzcyZWRLUzZodWo3Sy9pRDBlSTM2TEluRHorS3NDRmFzRGc3V2Z2aXg3cWRCQWtDTCsvNG45dzVTakZrT09XcDJ1dEtRNGt3Z05Vd3Y3UDBycXg4MTFtZit1OTdFU1BCOHptUk5NTDNNMWUvRVFtb3kwc3ZNMXBrOWJPc3dmbXh6ZFZtMjg4YndqMjNoQlplbTJZYlpPYkl4bE96d1dZVkdXWWRsWVIwdlZmcUp5TWNUeGJsK1ZQZGZHN0N5YTJjNXU5aC92bHREVHBiSGFpeGp0dVdtSDNJUjZ2SFdmYTkrMi9tMTdYWHUzU3ZFVmhwOXFjRjUvWUdMb3YxNTkvN0xqS0xpY2MyVmdjSjZBY1FzcGp3cnR5WEhMSVhZeWJaUjlpb1gwWUtrcGVVMi9XL0lpY2VybW54Q0pITlpvTjIzS1F3LzZESzlkdDJEQitGV0xoT0ZCcHh2ZDF3aEo4U1cybUdDN1FtSFQrb3ZOVDR0cmJjNkU4UFRRSUcxT2pqYklYR1g3WWFrRVBHRnlmdVp5bTl5cENRZER5eXJ5ajY3TUhNeE4wYjh0VUJTNlFNR0h6S2wrUld3S2RHWUFPNmFRcWVmRitza1NWSFdaK3JmQncwdmVIa2NsQlBjZmc5Tys4d3lMclRTcnhjbFNnOHJoMEVVRU83UkJ1WWFrd2hPbWVkazUyekpXU0JQWGNMeSttdVJ5cjNFOEhubWdBWGVTRStsU1hsTnVIdHg1YXRCbmtDY3hCMnAxYVE2NXdlQ1FCMWsxZ1JJek02T1pGeGlRWUpWcHRXbXlnSVJBejZhTURXdlhzRmlyNmZUVkxOWWFPanRoeHN0cmhzTjk0dVgxaEJ2TzB4VUdhWFAxU21XMUtzY3ZkcmtyNGU1Q1UrLzUxUjRTczhRL1NhL1g1dVhxZ25YUEp6bWNTUy8yVlRiM0tsZFBveHY0ekxUS292cy9Hc1lHWUdoUEh2ejRRREdYc1Q5ZXpQd1hOT0pGbjMycUYxU1BUanFyaTdQUnYwZHZTWk1HUkR1QzVKbktrUHg5Wlh3amcxdnpVSGovYjJJTi91a2RRTTBGcTNMRDgrUmNzOTlIL3ZMWVlPazhZN2gvZFh4VVFLVFFuTkJISUlpU0JWTHZQRFRJU094YmFjdTJyOHZJV0d1M1o2eGJsMkVmTENSK3hhNktLSEx6VTdWTU5qVmRiMmxwdW42OXFiWHRmRjMxSmFnSnZiNDJabjA1aC8xYUtmN0VjODZqT20yVWxlWTY2SCtTY0ZEbkNuMnBQcWMrRnhEdTk1Wmt0eFdZK2N1OHNpU0pBU0g2aENTQjhNTjFSODlta0VQbzcyM211M1FYazdtWEVnc3l3cWVSeHNqb25teHFkblJQWTZUWjBtYmp4SzNRSGIzRWx2WEhVR1A2WmJ6L05hM1VzNjN0dGtSRnVQOURRa2g1ZE9TeWdnSkxWNDBoNVBybGp3SmxNWm9vWDd2aUJFRTZ0VGZKMWUrS251bHZWYldBZnVXelBjWGIrcmVkY2FrNit2MmIvN1pObVovcllWa252Vy96Q1ZpVVJFMWFGQ0RhaTZCeWV2L0lqNDJzcVRXYTlKOHBWYTZ4OWpGWHdCRDIrL1p2ZkorN0ZFTVlScWd1dDdHNE1Va2V5Ly9aVUEzbU03V0pEL0w2bE9pYmFzc2lWK0FRN3ZiS3E0ZEgzaDJQUCt6VDBOZXZrUS9oRHZtMHlRSmNiTWZoekx6RGJGZkFFRzc1ajFpa21GT3FWdTUxOTdBYnJjRHQ5ZkVVVHlOMWtWRkQ4a2YxMUxXYjY2K2gvbVB2dnpvdGlacVVKcE5GSkZPVEkyUnl2UzVQYlNpTUNnbDAyUFdONFp1R1pMY0lCQThQazZmUExYNzZFcjB2MFl6RlF4U3pBMWcvVllkcnpUSnNpVEltaFdockZObFNhQ05LSXJKY3pOcTZwcm16Qi9ubEpOYWNaM242WW5ybGdrZVEyZ3h5Z2hQOHZpclZLZlpBblNyVEx6ZzJKLzkyMEtxdGRybE9zV0ZuMXk3WHJzN0JsYnduc0ZNYldwNElXVDdDUXRHS2RRSmhReUJrMmdpbEpJYVVPN1VSQWpmNUdmbW1NL0t0dU1ycWltckJzWUQyZ0Y0N0laUFEyeDR3aEFzS1NQTjBwdm5vRlcwYkc0NDNIaCs1NURWQkc2bmNZL1kvTWtHLzZDbU5mdlBXOWZhd2RTcytiOHF3N2YzeW10ejVtdjZtZjJEZ0U4WW4vZXVsaHNrWlZ3SWlTa0JjTTBJdjk2VkkvalR4VnNtalA0VXR0VDNMNXZmbTUwOC9ldk1FazhxSUpQWkY4c2RQb2pncmMza0I1OTZJRWpkUFlRMWsrbWhSRWxzL2dBVXZqaGFYVTBEWEdxNjAvME96U25xVktvc09GMWRIUnZpVnhvWUV1T3Z6NzlmMlp3eGh3WHV4ZUxyRndBckZIVS8zaldEVkZucmJQc1FScGlnellveUtNa2RZWkhCUjhMNnV4TEk3VEovTEVvemtzZy9qWldabnlvMGlyVlozS2k2K0h4L2pHZHo2YnN6Q3BCbjNKNVVyK25pZEZyY2NRdklqMU9WRzQ4SU9mMFJFd2Y5bXhYcHZHZ1pENUxGOC83ZlN0NzA0SmxwSHhKRllMRTlPMU94VFhYUlB0TnFsVnZRbzRNejg5R1QzM0gwK2pRemljTTl6cFFrMXJJNVEyL1FHYlg2K1BpeWxQUC9mRHFXOTFvYzc2OFhNWDhZS3l6ZHFpZzA2VFhGK1JCajhBMEh4L1JTZi83bFk5RG1mUHlYYUlydEVDcmJrbVlTdVB6MXRIaHl0MEJVL2hKMldNL2FVNGZGZmJwSFh1YUtHY0dUbmd1SFZ4MXg0VjlFdWtNQ1hXdVBBK2lFc0tGTzhLbGxNWDAvREdiSDFVNnh2WmZEN0wyRHlmb1hnT3QySHhjVERQdnJyVVFSSjU1UkNmekt5clVuT0RHQ1JPRGx6ais0d1VoQ21acXBmWFZiUUhsbjRDUXAvenQ2THJnZGdBcTc3R0FzeGhVYTVvUGJNZlkwWnd2UU9ZSkZjUWF5OCtJRXhSOVoyMEUybkx2VU5ZUWtDdUE2U3hZc3J2Z1k3dnJoc0prUkJ1eHZKR2w4VFNCeHduZW5ENG1OeWR5SldLVWEvUW1ieUpIK0h3MmhqdG9oVmh6ZVArNXVLVXhQQ0hCR25sL2pwT0xUSk9FbEgyZVpOdDVYK0twTlZMQTk2cDRwVHZFb2ZZQW14cWJ0THZWTFRwbWJWWTFxcFBIN203R0JxWUpNd0pDRTl3V01JKy9mb2kvWEFXM1Zxdkc5OGVNNE00Qks1ZkVKQjdrVDFSTC8yRXFTNzFIL2VuejVjRUNycWo4ekluN1QvdHBuZmJId3pITjhDeW5CYnRHRjZGejZ1UGJGZC90Wjk5cC9abHhoU1VhcUxETXBSZXBpcXZsWUtpK1hDWmVFdDdKcEpCdExJeGFIYlJyZjNaL2RrL3lYNlg5cVFiaktXUm9sTWVwZTA5cWF5Tk1RZVBSUFloUitpYk9qVDFQdXRhRVI4S3lUMTdLTE1jVGY4UUpVaUlldm1FSkxuWWlkdHFNSVB1STFuRnJIckpSVytTT01LdjNwTjN3Z1pQOVFWT0dPUERpbFYzcXlWdXZRaVUxU3BNZDFraWhOL1dsSC9tZFJqZnRjWFg1TVlJZHRYeFZlbDdoQzdWeFBRSEtLL0pienlUR0RyenZ6R2U3ZHp0RlBoczhiekI4dWFTY0FpK1V0aGJKNlpudFNlakVsSmFvdWhZL09Yd0VqKzJCYXp6cUJ2MzVTT2MveEp2aWZycTNqRFgrNktzYlRTZHhJTEcwcnVWTHlUYVRYcFdRcGRlRW1zcFRHWXRaVEhGZkVvT3krMmRPWW1FYUNadjM0N3hOSGRhczR1S0tURjV6bWxUcXN6MmhWZGFpMlZsdWJGcmVPNG9RT0Z0TGRNVkZXZHFxMnRtcGlvcnFsZS9CTzFOY3d2cm81ZjNHMko2NDVQZ0tMdXVJVDRCWEh4M1JTUDc2SVBhMnFPWHUwSU5xanpzNE9DNVNuaUo0NTV0UktPMDVQWHlhYWUyRkU0NzNHeU9NQzVSWnFwMFdScHRjaWdVNnZMK21EUVNCY3d6aFdKdU9NaTRjaWZEOE9JTUdpcWRIRzROKzNlTFEvZEtLU1VoOWluR0tSbGFnVGRKTjIrcmlaS0twa1ZYM0ZzbE1UWGw2SHFhd2ZGVDA4dHJxQXpLaG0wTGpxOWcyYkEzYmN3K00wYWE2Q0JLSFZDWGNyUlUrekgxZUowRnhWM3cvUCtYZDZkMGk1SUhxYW8rZ0VUOUhkOU5oZzVFUGVKcmNwcVJyS24wS0x2aFlyZk5QcEdtU21RUS9pTExvNXZ5TEF5UzlmVStuMnRCN2Ywd0xjVDlwRUdOcFRNV3pld2RsMXBnV0lrbE1MNlBzejd2VjlXejduSEtITmVWSEJYWW1LTVpVMlNYNDNaWis2NUpiWjl2WGxucGtRV2tYd1JETy92OTVlbEpSbU1qWTRkaEhJUDJnS1BmNzJWb2hqUzVXZmFITjVSbmxWZEdwd3RVWnY4T1dPN29FRWNmdWVsYlQ4Rytma2ttQUxWN0x3VTZxSmVQTTNsd1RDa05kVnp5R2VmWGQ1THBPOWpCSVJDMjljdnhldnIwZkZlWjEzMTk4R1FxVG1TMTUvOC9mUU5pMU1rVGYzQzBVZk1PcHlLR0Z6OERMTkxQVG4xT0JJcjZmTGFudU5la1pmdDg4Y3krYi9UN2pqMXBpYld2bHF5NDZocG5hbWhSMXZaRy83d3VidnlOUGRHSmVVNk5TdzNYRkVlRnF3c3RSdTF4cnZFQk5TZHRkLzhVMklzUDdmZnR0N2FFZEJucFE3djUxTnZ2MHMybnVQekR4bnRlSEpHZjFFdk1lTS85anpZZWZEb3VSOFB3TGpGOFVza1Y2OHBMakJHcGhTVVAxeUZzUVQxWE5QcWFaL3diMWJYVEF2NWgyVHR6S3FxbDN6K09abHhRTVBLYlBZZWF4K1NockNNSWV5dmZaSUw4bTZQczB1M01TbW0zQWNaY016bDl5YnFTUDUya1BrMk4xQm5qcXdVblRQZTI4d1cwSDkxV1VTMVExbGEwcHhtbWh0dlNKVXFIZStOa3daRytoWWxrTVY2eDRQRHF2aXc1cHNDOFdNZlNuNDRmQjZMajdDbVRsMFdkSHZRV0kyQ1hVUFkvUTJwMWRhNHYvUE44ODkxQlRvd0grYnRuL2JvK1k5ek1URnVpVVpMV0dMUzRQd043WmcwMjVqTzVPdWV5dThta3E0ZEtOTTgwNWo5NldmOThnaU1QOE54NjBtZ21jaHY4ZjlFSXZwVUxQNWVMS0VQbDNUazcrZ1lsU3JhckZiRm1GVSt2eFg1RU5NRkZMS0c3QWFUS1pDYklUVjBuTmczemdaQURpM0NodlZDazVEdHRVUXoxNHhuWWpHK1M1bVlBYXBtRGtNVDF4NmlmdHE4WlRQVTZwekVxUUtVTndyTFdrR25sMHZXaGh1ZGxqRDhleVBsVk1ZUWFCMWYvdEJhVUNuMDM3RjdweHRocEFRM2ZmT0NRSHgwUHRBZGdXUlU4SDlraDBoNFhpemNKbEhwUHZLT05IMHVtYjFPbGtOdkNTUlRTWUVXUFRPL3R5eEx0dy9aQXQyWkZmNmVWMGFLTGJVa0tybldNbzhWRlNaYi9uVnlkUHpHbFJzeGhQVis4QU1CQVpLb1UxUk5JQzY1SjFrOUJGU0tIZ1UrT1NNelZUME9weEpYK0F3Zm5ScHNmNVlCanlwS1VkN0FYTmw5Vlp4aTJ1WnZoMlJEelUwY3kxb0NpcENWcHA2WG93eWFKaENYYzlUMmd2V3M0Vmt5UWNuVjc1azhEM3JmdlRDbm90M0tIam13S2c2by9xNXFDSHVFWFRLU0VtemsxVDVSODFxQVQ5VllJVTBYNTFjd1R1ZnRwZlh5TnBQTWhSaHZ6T2RmRWUxZS9BUzA2VkducUV1eENCQzhCcVlYSVB5T3VnN1FFT0krQXdOb1U5QVpTc0s4bmVMOWRBMnUvNzVCWnJablZXTWhPQXpNR0FjbTNPMFJsT1BKbXo0Nm5LYjE3MTVGSUw0NGxoaWRhdjBUZWIzK2VQYk1QcG56NnJNa1RqL0tZVmE4K01oWDBzenA2U3kzTmo5Y2lNUVBaOFVQdmVhSEpLdHhHL0xKWTg2WjNCV3BJZ2NwdHNpZFQ0QXBGVlRoTy9rVTFHaHE0cndIcktZaGhSVFJZRlkwT0dvYUY1MzBXRFJ5RXUvTmdJUUlNZUNaR0xERERLNnlGN01XWnEyWDhNMWNZdERjNzJLMmU1a0liQ05FdEhoazdqc3hUOTQyOStqZzY3bUhhdkpwcUIxeDVUR0lZeDJYMWo4QmpVNFpoenBqTlhuUjNBMWVtcHZFNFl0ajRORGNjMWovQkJReFpSekN4YTVseXR4Uk5wcFNqcGlWS3JmUHpacU5CbmhpdzVqWTBHMDJGeG1NVUcwSktWeXB5OTRCQ1gyMGJMQXptUWhzQ1VSZ3EwS0VXK2F3eGhGem1HVUJ6Z2ZLTEJ5RnJuNzR5ZkNpcmc5WHI1VUlQdmlDQmZ6ZzYrUnMvc1BNSDMzVFh6UC85UHQwMGZhL2xWb0xxMWl6UDh2aFQvSWV2czhPa0tieGR2ZExMdFg1Y0ZWZWZWRDBNT0FWcEtIZXdQZlg5dnd5N3djd3VMcWVTRkpVVFlxdzM1OFVYMkFFakwwR01CL3c5TmE1WFZzalAxc2J1TTNaQklCcDZjMnFXa2tDN1daT0lYU1hUekl1aEQwUGM1SXY0T1ZxNmtldDhFbk5SL1BLYU5yUWdKbzMyTFNrUzRwb3hMTXpuOSsyUE53SEVZMTUzRVBoWVlpaDA3TXY3L0syS1RqVTFMOEhpNXI2NDJDbFYveDJ3TjBMRk5Sc3N2Nm5LTDlJU2Jxa2lDYnpoY3IrejJ3ZzZaTHlhazh3a08rSGVMeitrRS9xOFk4OGtmc3lKbHZkbTduLzVIVGRsRnR5N2NNSGVoVHdVaDJqQkxLcFJ2c2RrRW53b1g0QVpHWjFia3NmcS8zS3ptUEkrVTdqZVZLeWFXY0RmSHN1WS9XWTdEaGlvcDRjTlZiM2NXdEtua1BJUVRsZ1U2aDZucThna3R6T0Y1U1ZkeG96V3IzOFdQcGNMZUhrdEFmc3hPdjZ1YmtjZS9IaUJkdUZrbTZwdUhwY1F0Mm0vUDZ6aW1zUkFvRHlhMmpiSVRvaUxEUllyNVg1SmxpVFZScUhCRSswVU4yc1RBMkFBaGVJckRPYWJhb0wwejd4OGJrQ0Q5eG05Zit6ZXZKaTJzd0tZYko3YjZjc3kvSGhJazlVVWVSMkZpbm51dWxUbXVobzFQbzlYMURKRFNNWGoxRkNRR3ZUbE1DL1czY3dqR0djSnZFL1h6RkticjhxUnRQSzdJZVcwc21WU2VDMGtFQnJFQmhsUFFYZ2pFSzBRQncvVGh2V2QxdlYvMC9ueWFmSklJbm11d2NHMGtQTU9hOUc1SVJIbzNrRzZRVlhFQnN3WW5MSWJsUmQ3RlNMS215MWI4R2szUXo1YXZ3YzkvVjBqTlBRWnhXTy81WVpNb2dDM05mbURDK0lzT2JqU1o2OG1CTGF3anllbzZZVzBmZ1FEM1NGUUlhalVmT2xEVEtJendBN0NqZDVrV2F5Y1VZaUhnemRUbVVDZ01UbkFMWVU4SGlkSTdkUmZVOE1iMjdvWW9iNjAzcCtVSlc1U0NhT1FEYkVoNTA2SnFmZDZwaWFiVDdQNW8rNDA5RHNqSUEyK3VkT0UwSERBbk9VdFBPWVN4cnV4MTM3cnNpYnZkbmNoQURZQ1prbW5rWExuRlZ1UGFoaWZnU1dKTGo5ZFJDaEEvVCtIOURzRFJwc1RycHBBVm9GemVNUUNzaWJZZDF6NUNEVkt1bWtvZUU4ZzZpTGZqT3pjWktoakVhWW1vL244c21MQ1lFWmVrWFk3MFFMMjdNK0JLTWIwdi9XT0kwTFlBQURwY21BcncyTzB6enFpVzFFWVhkbUEyWlRGQlc0ejl3cUhIWlJIeTdXSGFuVUI5aCtKeHNZY3d0L0huUVJkRHhHVFlwRVdjL2drZHVsemUrVENFbHN4RkhUUDNzd0lJWjZ6SzFGcldnSW1NR1VNS24wcUlQSjNyY3RwUU5xVStNVURZVDNDdWd0M0NEb2pubHhvRU1QMEJNaHoxUG9RaWQrZS80MjZEajFZendWRnhzRUh2SSsrQUt3bmh0TXFFZHplRnJrZVh0c0Q1dFYzdVI2dVZKam1zMHVKWTBOeFdERWM4elZPVGxRQi9uOWhyVTZUMkVBZlIwUDNVYjFodndHOWI0ZW4xbnlWM1RPdjdrNkRIMXo3N3UvRy9KbWp3aHZBTktyZjBOMVRqTlp5Vks0SU8xQ2lOM29yY2JTa2RoM1JFQ0lmc21nNFhRK3I1ZjFRa3U5R0pEdkw3clcyNy9SUVlFZVBxTXdYNlhCTmN0R05KWEc5NjFPMFFrT3JzSzUxYktLYlZBM05zdFN3N1UrcWZKN3FVZnFpTFJxblJFbTUrR0FSdjAxSnJzUnlISFp2SHVWRlRBR1pPZmwyUFVhL0ZWeXBFaGZMOG5TTVJHak4zWGpmejg5Yk11elZscEw0VGhudXcycEVDdWNEcFgyaWtCNW9UUnRWN202OFEvZDF2S0hZNVNkTXlpRUt4WjhaN1ZXcFRPaEdySFRZVHRaWFNiemRCNEZPQ2J4c2g2elhWbkdCcnV4aTJ5VWYyaVBnNXNEcGpCUnF0SFJPb0gzWktPMGkxbThranR0M3k1clVVWldmbTlWTU1KMExaR1I2WlBtMGpFR21rbW1GZEdnbzV5NnlJTVloem84UkVsRTloNTlMQi9ramcwbXQ4Vmd6ZWc2TWpkTjFyTUdxNFFUTmUyWDBGNjRIVWJONmhJUUtnOWdCUVo1RVlHMTNOVXFJRlVRVk5QMzdSaWRSRUVPT1ZXQ01vM3kwTkpBTnNKbUxHV1IzYlFJRFoza0FsckdoODhOajI2M2pLMlpKby9sdXE4YmVBenJGcVhENDgwREpjZzJKYW1JRmdCL2lGSjBwN1c3K3Blb2FKbEV2Y2VPcFZ4OThneWd3U3FhYXAxSXlKSk90MGlBTnAxMjB5NDhCclZkeS9MQ2tzSEt6cW9MUkE0bmQ3OXM2akUzT1BVdEhTUEN4YlZqUVVmU3d3ZDNocExmS3UwRnhNTVk0MU9pZ00zQzVURHVpY01wUnRUME5rQXFuK1FTYk91VmVtVmlJYUJheDYvanJyWHlkOXJqUUh1U05yU1k4TzNTVUdCeEZTcTN6MGRhSkxKd3ZiK2R3R3dneG5nRE05THgzY1l6YnNZQmJqZXdTVE9qK1VMOWtaTVFNNFRJZEJOczJRVlBkNHlwY0ptVXNuRkU1Snd1UzVjMUpaVlZWalFOKzdxcFZWQzNDTG5lTTlST0ExRXZSQmNGQ3JmYkkxcUUxRlZSS3NPa1BnZnNraDB6cjBvYXdXdUErQ0FBMEFMYXdQNnVFVHl1a3YzOG5yWmszaXplNm5INiswajZJVEoyTUVHSWJDS3NHVDhoR1FtWXlwMkZzekRBNTNqd2MyWGRJS2FWdnhnT21CUkl6eXNUSS9FcHdQN1NlT054cGpPbG1WYWN0TEJUNUxXb3NaOGplY1NJeEFEbTh4Q1lOaGhFOENscTB3WUFIbTJ6dFpHYWFvdGRtUk1xazJiVzFadFZRZGtTWDlmMnhydVA5NFZ0VjhRZEtwbnpYZFJpMzE1QnJmVU9NbTVFTDArckhjTlZDT3BmMHR6VHlFcFhWbDVXd2dIbEdMbEJHci9OQU8yQ0pZRUZMV2hwU1NLTWhoODZsbkNkU21vcXkyMEY0MVJIUDkyeDNza1FNS3hNYVpIQkFQb2kwS2hyZnhhMEVTZVVWTENCU0JDYlBnMWxLOUVhY1pnVGFRNFdhcDUveFdJSnhpSXRSOVZwV1FvaFZFN2c0MHR1UkoxMlo5Mm13MjZSMnpkaU1Sa2p4YW5JK21wTHdDZEJ6UldEWjVGREI5Tyt5NWhoVXczcmdIMUM1YUkrYXE4bDBQZ09VMWgvSTE5U3I1NTBZKzJpVkllZnppNG9HSklTWGNLcFBqSHdtdXNEWWlNOW1hNnZTeXkydjFVb2Y3dlNFTUhVUzBlRE1nWFdVTWU2dFZRT1IrZ1ZqK3EvdzFORXZDZ2dJS2VOR2tSN2ppc2MvYnFBc1YxSEVBSjlkdTd0eXRkZkhpNkUwUWNjVzZpNXlDLys4OFdJcFo0SFNYMHBodXNkNzFmNmZpMUJnalZYNkpFMGpqVmJiVFlTd3dNdmtSV2NMSTVtR1pmSVBQWWMyZ3lEUXhrcnc2QmQxb3lZVTNsVEhoelBRM0UwNU1pRysrZ2NLdXE4b2NwSjJSMkpWdVhDMEoxRzYySlRBVFNvazNZb3JjV1kwZ2J0WlVTV2syWjdhaWRJTFlaTEV3eTRmMEk3SmVHMG12SEpiVWFXK1FpMjdkUzh6QURkMEs5MTVQMzVpN1JGU04vOE1MU0VPNkcyQTdVbHNCQzlzUHFSY3FPdklrRzdXcTBOSjJVdDRKeUQxMHdQZWtTbi9YMWdrL3ZYaGFWMGlPbjBtazIxQ2VOTUN5WThwdE9QTDd6RzR0RnUrQmdmdGluYTFzMUxvVjZrZWtHMVA4SEl4WGhVS0xiV3JnU2lSU3NsNytUN2lhVnRRbmxKS2hQMEpveUVqUFBvUkFTSk1ZU0N6RlF3cWFYWStWeVVCUWw1K1lYWDJsK1VQT0VjYlFCNThNd2hJVHpsak9rMWlJTXpCQTU1MzlrVXhJZUFMU2lUa0dvaWtOb21Jc3cvZ2diVFRHaDhzQzFCdVphaFdHTVZuaGtNeDJ5bXVYOU9wSTh1bm9DRVBJNm9tQzU4REE0cGpXem14SHVubEhjcE1OQ2VJNmJ2QUJwbTZsV0t3ajY4SzZVZ1Rvd21NTWo2a0pDYXppK05MTE55eTJkWTBHR2l2bzl6Q0dpSzR6VFVlOEJQaHBQeGFBWkZzQms2Q0h6d2NYdVFrZ25tYlhmTE5BMVErQkxSUEE4S3B2MHlxcStJektZN2xpb2M1MCt5RG10dEVvTS9NMUp4cjBLQmhtUWVFUFNHQ3hzd0k5T1Q1eFZVTmlYTHUvQU84NjBHV2g2TnJ3OFJCY1ZaaWxZR0xjUFFURXVEUlJFb1JaVGtrd1BMVXk4ZEMrV0tSaFJoTXhkVXpNWlppOGtzb3NZYzVVWkhoeTZqNURhT25WZkVsMW0vTG1qOGZvVnNQS0JMMWdERW9iNTlURk1URlF0TFJkOXBwTTI2VTRYMnZocy92SnBqREpnLzZ2dnBzRm0xR2xlNGpFUElNRDRmdTNYaEVmNkcwN09UdXVmODhoWXlSV2pFeWV0YlJTdzhySGpTbXBsSThKQkZLNjU1N3FOUnIwRnZ0aGZ4dk9oTlUrNXRoaFhidTVwWDAzclZ0WHllYVd0Y2FJWTNJUVVOR2h0ZmlYT1doTkprZHcvNTlSV1BsZGx0cDRsN3BPMlVRNXh4UlFZVndFb1JCZktISnZZbTc3Q3o2b3VuWHJDQ0V0SXNrYXBQZ1BtRGttQURZQVlYRTJhNFpWOTBGa1ZxaVhROGJqbUw5ZFlGb0dER0M3a3g1N2ZteENpVHA0Yzd3ZnMyTm9sa05Hd2tVUnVNU0VVektXTkx3Q2l5VHdpWVI2UlhVam9RSktzT3EzenhlTENXWURYRE1GRHN4dTZZc0d2NjdwUVRkbFo5RWF5NmpIY3J3UXlWZlZ1UnJYenFxeVdRS1cvOUFBblB6NVBZTmFaQmFSTmU3NEY4YjBLOGU2RGFycVo5dWZ0eW9aM1QxaUlHNnkrT01SRkhHaUJCOG54SjVaaWo5UDluOStUbFowcUd1dUNCV2pwb3JVOW1XRVVMR2Y0LzlkRUh3aElUbFpyQThrWDZ5M2lkUmNHYm5Wc0xpbndveXQyRGUzeTAyNVI1SEhMNVRmODI5M3RSL2JYcE8rRVJLdUZoUXFSYUhNYTdsNjN6dWhmNGZicDh6d3JTTkhGR2VITk4vZDVvRjJYZnBQS0tCWmVKZkcxaE5ncHV3SVFpTGJwWHp0NDVFL2k5VENNQjdGVEVHTnlQM0FHU0FHVG9FS3VpUjdqUk0rWVhyWmNJeE1MM3NqbzVyZGVBazQrbkQvZnIrcmcrN0xhd0F6dU5Wa3lLbVIvK3dJclNNbjVCSk1XdUVxU0NoaDJLeEdwU3lUZzlhcXpLb3JrV2RwdDB6VUQ4b3RBRGNBZ0hXcXEzL2xyaVlVMnZ3ZzFVd2lSeUVaOExSMUh3U01Ld0tJQ2Z3eUpmdEFMYmZDOGhpd1JUVHE1YURvZkF4b1dKMXU4cFRUUFozdUsxRmhFZ2RZQ3pXOVRua1dlSHZ0YmNBT3UyZFhqTUo4QWlmR1pHbDZiWFJ3Z0kvZDlSa0NYSFFMSWIzcE1yeC9hVmhndTFSYWxKRjJwNkZSNmgxRC84dmFZNWpVVlN6b09Ya1FhTVhFNW4wV2hSWlZhajJtREVJOHF3Z3lvZXo5WTdFYXFWUDlKSFFtcjU4Qk9nOWNOVkxBcnNBVjJVOHcvSzhOb0tWK251bWdMNjVFNUthckdCQ0ovbDZtK1JpbUt5ZU5WR00rRkVDMHlraGtkZVFVVWg1M3JyZ01ldTZkSkZ5NnVMYVJOeDIvcFFLMHp1OU5CaExza1FyVTE5eXVBZ1ByQ2w2aExHTUdhTjhOYlNmS1EyaWIvNmlSZ1ZjMm1oSDU0eTVQNFBKbUFyQmxJc1dxeWltQ1V6SjdSQzh2eVdmb1hBY3RTVStUSm8rWDEwTCtlN0tCT3oyYWVsQml3dis2MWU2V1hYd2lac3lrWks0UjYxUElPdENJb3FtM0dnSzNHQ0FIYTE4Zk5Gd2FVOGFUQnZ0TG9oblIyVm5yeGFwS01IbDhmcFloMU92dDBVdk9icFNybktsVVZtNCt3Q1B6enZ1bFdTeEpubUNaQnNKZjAyQVkvQjJUKzFkYm8xOXprcE11WWJuTVVXREgwbU05c3NFSGgrSGR0YTBGVmRjb0xQN0xQSVZaTnNMU2NLMG9tK2ltWGIxdFVwUUNFaWphVzBZOU1FT1FpT2JkdlRwOFRqZG9iVFVxdFRVM1A2TjZCT0cxUittWlExbFo1NTNtZlBuYXJJZ2JnZ2tzRXNnK25nVkdsUnFhVGdoS3BGWVZUQ1hiZGZmUmNrYnNjNkVTM2JkT3EwSW5wRkFxTGNkY3IwdEJtZWZxcXJreExnNVgvWGtHa1FsZ1VFZTM3SXNZRDJseXdybDNwT2d5eXJ6OGFzTlZpcTB0UjFZYjY0SksxUHoxWlhkSDA4MnV5eDdmWm4rRVJTTnBwbGhGK2NDQXViWlpUM2VNTDVEUkozank1dlR0cXJic3FxbWpaakt3bHROOFBwTjlkSVpzT3hDOFFEQXRYSSsxMENCVHpFNVJteHdtTFRMU0k0S3U4L0pkaVdiTWsxZGszcllNZGhib1NoQmJKYzQzdW9UNUJJb2ZSOFMyY0NhdDFweWRUOFNuQkJTZjUzTStJbTZkUFp3dU91b0NvWi9IT05wbUpEdk44VlkvK2tTcjVJZHVoR2dEME5WQkRQaGxOVktMU29JbFU5VW8yd3RKREFlQVh0TkpETVVTUWdxYy9kSmdRVzNCYXdlc0xURUJObi9xbmIzMW04c0VJOU9FTlJ1WU9sTi9aUUVLdFUrYUFOcCsyYmVHSkVHN2p1bk5wcTU3QnlMcXRLbS9TSmN4Zm0rcTZCbzFkL1FGQkhFN2w5SXI1bXBBVUZVY2d2Um1XR1VXb0gwQzJTd1A1eWRIMEJsM3p1K2QydFJRcndqdGFuWjhEcHAvUEh4KzJ3VzNSYWxua1VVSnpDUVVMTzlKSFFyY1N2cWhmbUNJOUFCQU5DZUFlRU1PbGMyRjZNM2FLTlZTTFoxSFRoNkxwcVB4VUMyYXRhTUNGU24wZVRDbm5YdkNqMEFQU2dheTFvYXUxekNBUkFwdi9HLzBtUmQrMy9vRklCWnlQQVczY3VCZ0I4TUMzNzFnOE1HQllOK1lEeFlBQUI2SzhibmdMRGl4azRmQVVnL2EvKzEvT0hBb0NzQVRJVkFIOVJaajlLeGZRZmVVTlNqYnhMZytjT1RrUjRFY0ZtVWxpRkMzRU9JY1BNbnVGRkM5UVVJSWtGTFJkSmNwbWtJTURUdnR4VE55N0dKOHU0WDdFWUJRajVUVWh4TVFnREkzSUNhVGhybitxSFZzUUJ4U01wOTVqNmpxblhFSFhvamZTZVZxVGlJdTVTVHlGRzlJU1E1WE5Vd3crWSs0emtIa2wySVJXUHNsaXdkUVd0NHREeUV6aC8waVZDU0xROW13aVNDbVh1RkRNcjVPWC9sQm1IZWJ4TW9XWlczL0RNWjVSKzR4c3c5eWlQS1lOcFg2UlVpYnh3SVhzMTRSaTREU2NaK1BCQVpCbnYveW9mblAvQjVpVlpqaXdEdTlCaWtZM1RTU3FZSkRUNlBDVE5mV3F6R203S3puYTAxUEp6SEMzNzhFTlN2V1MvN2wvQ2RIemU4WlBCVCsvTHBPSDM2L1RINVI2aXlxb2pXd2lhL1NGTURrV2cvbEp2WTBGRVdLcVc0b09KdWNhZGNLemZldFJMNmV0M2F4L2tMUjVVQk9JLzlRSXFwL3Bpc3d4ZjJsOVJhbzR6YWJhTHlGcVNvWkdzL3NYalFjRVFEWkR2LzAveFFmakQxNFZQeUswWTVycWUwTFAvOHgxdnhRL1o0YzJyVTcxSHF5ZWtWUjkrOFRXdVRSNWVhZkU0anRjZmo4cFlVSS9mblZwQ1VtbGsrL1NKQ0VBdkNqc2ZCSGpkMmdjVkJRRVQwdW9EWEU4SkJBU1lHekpJT2Rnb0xRTkJwZzhVckpqQWdDTXBNRUxtREl6aHBybCs3TGJBQkNTTGNMS25MekFkenBhWlowRGJEUVVhNFFGdzFYNElRRHhERDhESVVRUlFOQWxUa2J5blBvREd6WnA2akFyZ3NiTVhTWjZMQVNwcXBtOURROGhYZDJrekQ5VmZNb0xmaTk5T2JpaDVuMWpGdElvM2lBODkydjFtcHZMeWhvcmkxb2IzdkpTZVJqdFByVkNwZE1ZYkpFU01KbGRnaFl4MGYxcmExL0UzL1BaODRkb0MyK3ZLZmtIbGp5RXdhOUNvUzdNcUZTcTE0anVFVDBORkxRaGZpUzU4c2NhZVVuekovVlFsbk1yVXFxWEFaNXJYODkzMWxveGFkbUNaMnM0TzdLUmdVcTVjZ3dyRldtRXVmTkZxRlN0VkkxMlpDbTNaMy9kbWFnb3FLanBHbVpKa1MyVjBiUk5ZKzNZOWk4RHJhMUdsUVQwK2NtMGU2UjBEUlFHVi9MekNPbVdGbEZjdFdQL2w5bElha2RkdjJobTZlK2NoaDROSFFFVGlob3lDaW9hT2dZbkZuY2RkOEQ0MlhyejU0Qk1RRWhHVGtQTGx4NTlNQUxsQUNrcSsvcU9ob2FVVFJDK1lRWWhRUm1IQ1JZZ1V4U1JhakZnV2NlSWxTSlFrV1lwVWFheHMwbVd3eTVRbFc0NWNlUnp5RlNoVVpKNWlleXl6bkV1Zk5aYWFOT0tZdTI0YlZhTFVBS2Y3eXR4eHoyTVBQUFRJMThvOTg4U1U0eXI4Wk5CTHo3MVE2VnZmVzYxYWxScDFhdFViMXFCSm8yWXQyclJxMStFdnY5R3BXNWY1ZWl4dzFtNkxMTFRZRXQvNXdYbXZJaXFNT1JGTlEwdkhnQ0VqeGhoM01oNm5uWEhLaEpXT0pHR0tIMTExTFJQbUVDZ01uNENRaUJqVEhFOTJOclFpdGM2R1ZteGJmWlZLb3czR1Z6UVh0NWVWTnRTVjRJdEwyMXJudEYzUlVnZSt0YXJNc1JiV2FVK3dZT0pwTDRLdGpVR2VTOHpHVnludU5sTmlUMC9DbFJkVkt1NU9FenlicXQydDRhYTFJY3lQWUdZVXZZY1N2L0VqTmRxeVNEekUvY3EvVGxsWGNWM1JyU01mY3VlY2xySzZxbjNEeEg5YXFpaXViY1VWbFN0MjgyQTJqV2tXK0gwVU11VlB5UXVOTi9pZTRYdzdGTWlnZis0YjBxaTA5bXFiQnY2ZmVqVTBlSUxRZzRsVmlNa2I4dDB3c1A3eGhtQXZsT3Y5Q3o0Tmo3bjJwN2RodDZwNmYvTzBJWjI4NFA5eTZ0OHNnZnk1Mlo4QU1WMEFBQT09KSBmb3JtYXQoJ3dvZmYyJyk7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQWZmb2dhdG8nO1xcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xcbiAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmYyO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdNZ0FCQUFBQUFEZ1lBQkVBQUFBQWVxd0FBRGUxQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHaTRibkhnY2czWUdZQUNCUkFnOENab1dFUWdLZ1o0b2dZZ2tDNE1nQUFFMkFpUURoandFSUFXRkl3ZUZPUXlCRFJ2Y2JEWHNtQ1hpZGdBbDRWVlJQaklRYkJ3RUVQNHJqQ0tQQTluVTZ1ei8vNXpja0NGWW9XeVdyOGZLNVBJeTlpSVhrbHFVNk5TTngxZ3paS00xR0srSzhqZmh2dkE3ZVBpckRiRlpwRUNpaEpHeFQvclRackdpT3JJam4vNytTTlFaU3RHcktEUEQxcUVTckNDUHpZSWl4WE9aZFY2SnJQaFBPazhsRmRwRnl3MXZOeGExVVZGYmljRlQrSUl2ZGFQb2dhSThRbU9mNUZvOHVmbXo3d3JIY2NBZElHTE5pVmdhSWpic3hOSlFnNjBra1VSc0tmaHI2K3J2NXVmWDJzNytmNjNQcXJyM1B1amhwVmtBakNidVAwR1kwNkhaamdRaVIralE3WW1LUzJ5TWpTVVpSZnp6c0QrZWZ1MXozeWhCckpPRVJJVU1aekRrY2Fod1NCTWI5UDhab0cwR3pERmRDYWd6WmgxSUhjY1ZGUjRjWUhIUUFtYitkRzZ1aksxMSsxaDg2NkxDUmJxcTh2ZFY4UHczMTN2ZjBBSW1XWjRsL2dWQWxWOVcwN0x3UGI3R3NHVlo0V3BrSlFxSE5sTnpvKzA2S1cyMFNLWUVycE85bXpXMU5zWE1Ydi9YcmYvdVFBWU5UQklnbUFlYllaNzV5WXBJNjMxbC8zdFhibFd1bGJwL3FTZ2hwR2FWQzN2c0FIMXdTSTgrd2wxUWVsVFVLY3FNdW1ybGNJTGpBcUFNYmlWSW9VZncvOHVwL2JHTGYrd1N4UUVBQjBrbEdHbHNLNDIzNkgwdnh5V1NydmExU0NFb2dSMG15U3B3ZHZtNEVNTGFkdStHeThCTFhJcVVVTEhLMW5iZkhMTkJwbVpmcHBPSXJzdFJPYTBja3BBc1E0RjVXeTZIb29BUTh2bGYrMVo1NSs2cytHVStVazNTaEl5MDFaQ3dFcjY4LzNlSHkwTjhHTXgzZlZpMHJsbmN6Q0VVU0c0aGJpUmF5SGdOOU1yL2I3clBYY2QzbnpTUU4wVGNiWkpqNkRmRzFsV3F0blgxOU42YjBjd2JhUkF6UkEwcmkySGhnSVQvRnhyNEh1RERVV0l0MkpSWW5PT216TmRQaEIvQktlZWlDeUhWTGlxM1pTcGR0SlhkdVJOWVlKRlhXaXhYWFRXaW00RVlFUU1pLzdOdnIrMFd6dEk1KzVVWWtUQU1LWU52RVBIWjhudWwzdStuOWN6aWxsS1RLSGFRUVpBWkVNdDlmTjNsSUlCQ2ZXdEd3TGtWdWR2RHlDTWV4VHptTWVSeHoyRUlJUE9wd0I1czd4bUM3ZVhZM2p0aHd3UEFJZi9KbCtKNzdvUUVZQURDaU5NREJ1QW90ZEwvaUI4UGNCZ3haZGJCam5TOFU1M3RVbGRiOWFiZi9Wc3J2Y0lLRVFlZVFHYW5jVWppbHN3alJhcDBYbXQydWM5dWhLZGowbmJFSzBEZzRwRkU1YVpLNWVIVmlleGVnQWdQYkJKMXRyQ3Z6eWZ6SUs1OHlPMmhYOXhGWW43NnZCMTViK3c3b25YaDJocnVRbmhmcm5VM2Ruc0FvZW01Q1lXQkI3SE5tbHVycDFwS3pmck1hVUlScGpNTTE0eHVBa2EvZHdEam92S09HY1oxZUtUdFNxY2V5bjc2Sm52anlHRGNvOTVoL05pclJUdVpWR3E2MnpBWXQ2QXZNWEZ4VXhpbUtiR0dMcm93cVpFa2ZWWENXQWdVeVRTeGsyZ2l5MGlRQkpvbGswa1I1eFR4TWtISkF6RmhwVGJBcDdpSkpJeEhBRHlKYUYva1JZUnNZU1RmUU5iZlR1YkRvSzlONDhuM1o4eE9Db2RtWnVOVGlQQUtWT3N6aVBpMmd5aDhENmRsYktnTHNFK09LS3pjcmI5VVA5Z092NDBXcFpNU3Fvd2VEMzVKZ0dnNHoraVQ4ek1hTW96K1oybjRIY3VKWUw4NzF4MVA1RVlieHU4d21HS0Y0cHpOMFdOVnEzVGpnYW8wRStDempmelNvbGwzdEdKYllzYW50Z0gxRjRjVm9MTEZic0UvaWw4ZjRwTXJWNzdHVFpodWVic0dWZmQ4TGQ2SEJJNTMzbUMvVnhuL2ZWN0d6TWtKOFBFakFlVVVsUnFvMnJWTHNXaEpxajBkTHN1UlRoQndpMXVFTUZsT0VaTVRnN0pjZVpoOGtnSUtDb05Na1dLa2hBcC8wQ0tnREFtU0tTZW5rcndxTXRVVWhLaW9vYVNXb2pxYTFGUFNRTE4ya3FVZzJkTUJ5SUZrRGdxU2d4Mk9PVExJSE9WWWl1TW9PWjZjRXlRSFlUalY4a0prWWlZU0dRcVQyR21sMGNwQmxaUEVSNGRja2tJYlNwSlVxRUFTQkFZYkJIRGdJMEVUMGE0bHFHblRRZE5GVFNUb3RFR1VVejgxZzlRTTBXbVltaEdLUnVrMEtXZWNJb2M5WUVNSGlZSytLRGpSYVIrQ1p6aUg1bHdYaEJleW9PWmlsOU5jK1hMTlZhN2pkSU1iT1ltSnlLMmdabzJ5WGJTNGo1TGROSHVBVmcvSzlSTUwwVGd2UGtuMEZObzBiS3E0NnVZUGpuUVdLY0RwZjVWMFByckFJaEpWNVRGZyszM0dINnljVG1XZHpCL2FqU2IweWFQcDBKM3RPTHJYNDlORy9RNzBLdVBVMFhTQnkwV0FUdThYQzR4VUdYZWdxc0J4KzZIN01GdzJ3MGJSL1ovYkhaUEk4L0hBeVJ4aUZocHdGQWJiLzJ3WVJZczJRSWR1bkY0alRNWk0wSktZTG1jbVUxM2tjcG1KRy9sY0g1bmpWdVo2bkhtZVhEVWZrNktGc2xaeTJtalNRVTRYU1RlWlhwcjBTY283dy93QkhNemd3VjB2R0ROT05BR1p1Z1BaY0dtSTVSUTRjWjBDQnc3TUNBcnpqbHlNQS9IT1BDc3I3bzlENkkyMHlYYkpYQnZsS1JoWXBKaCtaVmtlaFN5WmQyUm5IRGlnUW9NajZSWVdKa0dNRXNuc0F5WkdocEk0S1BMb0JaS014Ky9Id09BQms0bUo1S0VFWnN0SzhuQ3paRmFXek1TUWpTTStnU3pCd09BQkF3T1RoMExKM0JSNTNCUXB1MWxKcElveEZLd1FZSUVpa2pEQkE5TWNWaDVPMDBVTnNQN3RBTVhVVmhnZjZ2bCthWXVLaGZiV2pxcjdmdHZtT0dYdXFoRmxRR1VUemFmdjlMdEwwdmgyMFl6RVJ3N05lWGZibHJtODRoL05iQ2FYNU1jdy9qb3hUd3owMEdScnoySTBmUklNZGw3WUM0bWxwaVhrY2hKbWZ3QjdGeGU2VUtXNlFpREIycHljL0JtVmZpZ2hPQVJCRUNSTFZpUUVCa29KcXB5YXlNcEp1V2F4c0VBVVpHUVVaRFJleWFhanlnOGxISUlnSkdSa0ZHUmtaQlFVU0RuSjBLQ2djYm5QMlZRL090NzdkQ2grZno3eHZvazJIWUVIMWcvcHFIMWdZTmpWK3ZEeGxJNitaNFlMeDU0WmlPelkwamZOUFJudHBKTVNWc0tWOENYQ3gwU21seGZtWWloK09iRjFPNEtYQ0tFUnJlaGVNd29nSWdRQVBBZ3M1a2k5NE1Jb1h2UzFpMWd2Vzl3NDZlSkhYRUltVjllblZhcG1lQ28wLytCSy9VdnFnRG13aTBUdzVlUWlnU28xK1RYZHBlU3pHQy9HbzNybUI2VHRhWXhGcitlS24xcWdjUERJNVBNa1pzUVRtQjZQWTdvOWl1bnpDQ2FDOEo3Qzl4TUJMME9tVG9OTkt6TTB1YXpNVFpvZmV6ZkxHR05LZzl0aXp6U1hBT3pPVVFITmw1dWwyd1NUQUVDZ2ptM3lqaHQrZUxRUFlmbzFUTTFkVnZtUjY0V3JnTE1Bb0Y4bkFOREpnSGk3NE1JaHNTZHYrYmMxbjQ0bjJleFFWN25HRFc2MTdHNEduVzFRVDZyaUtxK2FTbFNQMVY5N0hmOVRnQzdtQ2l0NDRQUUdkR2NWVmRsdnp2b1dsU3FXSzFXeWNLSDBodmJETzVaWllvRXUwOFM4ejRpaS9QRGFsaWlaQUxBbmFBME0zVEZvYUtaeTRkNmszUXZqaXA5T3lUbWlHTVN3RGd6WSt3ZWJzMGZ4L3FPeTRvVDVyM0dPUFB4Q1p1bS9GQWFvSmpKMjNoUGpSSXYwT3hBWVEwMEM5WHhla3dGVDhFR2JmUHJZNWNlRWc4bUFZcWFlbk5ucHB6UlN2TXRqRjR6ZS9OckRyKzRQaHdaQ3I0WmkyWldtekNlNVFHbzRJQUpXNk1FMHpKRlBUQXVTdFhnU3VsN0lZMXlGcWo0S29wazVrcHNKRWRXWldVME9HSUM4cFNrbzhGZ3BhS0Nvd1hsdnBMd21EL0hpTVMxQ0dYQkpPeHQyamRPSDRLSWI1TmRGYnVNTHJ6bVI5Yi9sUlMrQjdvRjhPdEY0N05LcHFaZzNNSHl2WERpNTVMWUpYMXNBVGF3Nk1KQ1FxSm9vSVNCVVh5SXI1MEtyekNnS201b21vSnZwRms3KzhhRTBHbmdzbk50eEsvWlBOaWVoTTQwREIrR1JoeDJaYzRjaExOZXdkWEloV3NoYnhDQm5GNWhDWlNJTnp0WFVUeGdHYUFnNWs5U3YvcHhZaWpiUjl3RlFrQ0dGU2pOM1p4bTFNL1ZPdkQzeTNHTkZZYTJNTXcrNmF0cGdWQ0NtY0xkb2NFcHFNRnAvd0FCWTNUWHRBRlYxZVBDUEQxWE9McjRjd0lnOHJkcUtTT1pTc1hldWhhLzdkdWYrSG8xOFY3WFRtU2U2ZDNiUjVMenhPZS9aZ1FLN2VxSGFoMUdrSXREdUprMlNXU2pLSlZnOXBIMEJPZk9pS001TjNrSStFVTEyYkx5OFViN0NMZ3V4WU1ldTA0MEtSN1FpbU1tanAySzB0MlFCenBVK2lVUmpSekZlZlJRNHNWQ0U2ZWRLdXdZTWFORkFXVWw1UUNRVnY3V3RSWm5oT3VUcGYwZFBlVUoxY3R0cXVsRGdyR29tb2RBYmNtT0drakdIUEpoSEtWaEFxVmhFYWRpRTByR0VNckE1WGdDQnZDekZmTzljQlEzcGMzUVFYVnA0cE5MdC96bDBVV1d1Ly9jNm5Za0Y1dDQzV0FlWm9JTkFGZ2g0UVNBYkJId2drQU1DdVNDUUJ3TDVJTjNGUUd1aXFDUWpVc3ZSYTE3MDlFakhuU2kyVTQ4ZkxIR1diT1NCcFFCR2hRZlFrYlF1WkZoOHBuQTlSd0g1ZlAyMHo5Sk5FZUxlUUorWWRIb1pLTVVkNnc0Q0wwWFZ5cDljREZrRE5za2JMbmhvVWJoL0FYandyYXlYWU93bHUwWXFnQmFqenJZVExZcm9XNmtTemZXMlpsVStBcElOM3ZWV283Q3dmeGVOakJIWlk2SnZKNTg0MHBoTTBMRWpWYStHcmlxeXQvcUlEUTZCY0ZORkUyOHR5ek0zemF4bTJhOUFtMFBsdzZscFJsT1BRMTRERjVuRU5HSjR3N2Y2azEwc3I5MlFUTXRUQ3lpYWtvaWN6Um1Wb2IxSW5xNG9JcEx4a0xFT3hqZ1Zja3hUcTdKUmM2dUlLSmFYdnowSjFFSjhrbUZhZDBLSlF6SWJXUXNYRzhIQ2dwY3EzMUFOdkdEQkVvVWFZK1JUYjNUclFKVkZqcE5aN2FqV0dMVVFhTWkwQ0NscGwzYjl1ckxPb3BTbERrRWJwQU5uMUI5bWtzamdlakdrRFZyeDdoUzZtQUVLNm04U2JUZGxKN0J6elJVMGFYbVFoTnExMFhESGdKZXZSZlQvZWVWVmRKdHNoS0FCa0hUenE5UmpkMnFLMXByaWoxMVZPV3pUYVUvZDhkbUh5eFhOL1NLdkIwUGVXSG96V09OWmQ5UzJMbUVPNVJ0RW5nMzlqMUdMQmJkZCtoSTMzb1NnaFlxczEvaE50QlZGNmxnZzNEZC9GeU9icFQyZytQUzhyYXc3YngwdDNzUkRiWEdFS2dpMDloMXhMVjVTdVJjaGlhRWpuRFM2elE1dXJLN2txaW8yUjZhenJ3c0Z0R2xpSmUvcUJxdEhGTmtVM0FOQmcySE9Ma0F5ZTJDK1RZd3NnM3JSSVFKTmdvbERWZzJCalVQT25xQ0RpME5lRFlHUEd4emdKMEFXRVBwQ1VTMUI3QXNsZXdFaDlZV3lXb0xjbHlqYUF4V1hkSWVxR29JYWg1bzl3WUFXaDdvYWdoNkhiQkNKMHFpSjBxeEZxemJ0ZnFEZ2R1M3QvTkhTbWloby93V2l1QlhPZGlDcHoyV0UyZWlWNlBza29yOE5ZSFExd2hpL0RzYjZkZnE0aE4zQ2VQa1dUWkRvcUVXaWE2MU5wUjdhL0hwbzkrdGhvbDhQaytRRVRaYm9hSXBFMTZhaTBnRFQvQWFZN2pmQURMOEJPdVFFZFVwME5GT2lyekVMMmg0UnhwaW9xbWE3Wm5qbGxuNXBydkVoK08wdU5SV0VscG9BZ0JjQW9LOEJqNER5SWFpL0EveW53TjRHTWk0RjJiM09OZ2V1T2tmQTBOVjA3RXR3QUZ0Q0pwNVlHQXpPSmo4a2R1UUlHQWNtN3BkanNtNGNuUncrZ05KVjNGUFJvRTVGMmo1amhrNm1rekhYbFJQQ2lTeVNRSVU0TG9zNlJxajVaK05ZUTVhR0ViSVJ6bENuNjJNd0RPSW1jbDJXSVdZRWM3V2tjYnVjdFdNMzQrOWhyY1R2NUVVbGxsblpOcllFUmdScmpzV1lZL3VNbWF2aDZ3NjJMQU1aR3NwZHo2bTRrNWg4SWh6am1iTTd5Y2loczM4NlQybU5hSXd4RWs4UklWa3JuRlk5RlZHdmNXTGJldVRGdWpPdmU0TFJWclhlOUtPTURlWVlRMXJjUFlIdUU3akVKMWo2bHl3N05BY0dGQkFvUVVJSmU5T1lVUTdZbEpUdkJQdmFGNUFvMlN6M0RuTkszTlNCZXB1bzdkVFhDa29MZWhpMUlYVCtWQnRPcXltamg0ajR5S0IvVGZlRG9qRkFNaEtNeXJzNmJ5ZlBaZ2FJYWdpRXdyQWVtWE50SVJlQy9wUGtRUis4R2lScW9CQWFCbC9pbXdXaUxsTGZQQ2h6Mk4wcmJ4SDB2Z0RGVC8vWXZVMldtSWhaYytnTkJvbHFjTWtLNkJ6a2R1MklwR2x3VTZkdWdhRitvUlVjRmxGME1iL0NNSWdhbElwMFhUQ3ZMS1pJSW5LVzltNTB1aWhSeGxOUG9QeUlJSHJsSXJjem1kcGtibmZUdW4xN01FaFUxRENFUjljQkZFM0ROZWhmMXlCNk5RQkZwKzVsYUdia0JGZ0k3NzVQMUFYMHp0bHliK2NOY3J1WS9mV21hdFFYSEFqTHV5cFc0SnNkSk9yQURIcnZiRXJqRm1JRkpzQXRaNUdwZy9JYW9NbVhPWlpRS0ZzQldmTms5c3NYakNaRTNYcmQ0RVk2dmRDWG9LVThwcThNd1V6YmhkVGRVSWN5a3I5T1pOQ2E5clQ5WDJqbkNDZVArNEp6b015dllsRm9XaXA2YjBhWVV6M0pWdjdhZEVWaldncGVIa3cyMGgrY3NUNE5pUUROQ0wvY0FqMTl4V1M1Z0luNWU3aFU1SFJ3TmVUNllHKzdmVkFOZW0xK2V2a3luM1JzdXdBYXNPWlBwRHZQSTEwL0ZYT25abTlzb3orUjJFMVgvUzVxOEF0YVBVMDFmZnUwQjBJMVNZQnhJbnljTENOZE0yeURKNUNobXg5RnllVndOOWU4OTg0ZU42TXNXNGEzR3M3M2pJOExJZ3hvWjJaK1Z3dHl1bFo2UVkrRzdsR3V2UmdpNTZlZHNITk1iZ2NhWWdYTGNpdDhxU2h6NmptdG1IUExOSWhwTVFHY2htVkllUHNGRXpYVE1kcGd5cEI3aVVkYjBodTFpOGhJUE95SVI2Yk1pU2ZBZ3BITHZsdUdaZ2U2VEZkTlR2bXRPUDF4TWFmTXhoanVUYk5iMWYvcnRjaHB5eDdsVHZNSlZsNVFOVnVMM3BMeHZmU3prS0hTYS8ybDVZc29uY0Z6bWt2WDdDbkJURlFuWnBFVVRDY3dVVGpoNExRaWVoMzhPR2FzQThVL1hqQ09CV1UwOU9BeVhJN0UybDFIem5Nb2pYUVRNM1ZDa1Y2SDlZSlQvbTYwWEk0TGxacDVyUkpEMlNXSXZNYmg1SUJFT2s0cTE3aVY4RGpKTCtTVEhZVnFyd0YwMDZNb0NzdHJDVjJCSG9tVmNsRzAyaXhMblNYWVpFc1R3bXNjMm1ReTRZYlNLSXllaVlkaHcrVUNkQnRqNW1WdWVzQXdiNGYzaXFuNWwvUnBoeFIwYVBJWlJaR09xU2EwdHpyRURIMC9iYVp6MDNHd0s3Q3Jja05IV0ZLRER5OHdJSmNKelVqb2VCd2NhMnRDajlUNnVLWDhJV2UxMDRwYVZUWkR2YmFsclN1bHhMZFoxQnhER0NQY05xRlpncDQ3Y3dtbVBvVzVUV0grNWZzV2lDdzRsRTQ3QmZ5ZjA1NUtPUHZOdi9DZE9OR2NKeTRLNTZsdk9yWGJvSFhDMUo1bVFaeTBDV2FwT01wcStYSEY5cXVwVTgreVd2TkFYZkRsckV0SDM4eGVkV3lPT0xjekk1aElHYUFIQjNia1VTTGhBek83SDAwRWFLd2pOT2ZTNDNtZmRJQXl2ZXZoZUQ4b2ZScHlRR3lCY01VS1FjbWptZEpwOTVoUWFvSFVJV2JCUkhwbGpYVFo0MENYNEpTL2NwaGhyU3V2NDRTSXFvWkw1TGxRVHUyazlJdURNQTBwaXN4SkNoWWkyL2pJZ0JCMUlKYzg3azJpVjVmclBJZDNXZ0NVRnpIUTJJL1hvalhXdHpYMERMcUZGYWpIaForbHZxM043WVNvZy9GRWtYMXRjUmpXYkRRL1QvcnQ4S0N2VUFKNTkrd3g4VEMyc1hHSVBROHB3SXYydUtaSG1ObVM4QVpIdDFZblUrZVNFVkp3UmNzUmE2Tkg5SExsZ2lTd2gzcW84ZG9uV2g0VVIwME5lLzI5eHBYc1FFSzd1aHlZUXI3aXE0bmJLZUJGdUtvbFFEUDFOY1kyUHFTK3gvRnlCQkVCbjBtZitQZ3MvV1RvM0QrQ2tXV2FqY0dzR1lrcEFZTzlTbVdwTFJxK0tYZDR6M2RPeW10dUJTVW1FOU1Ra0orL1ROUnpXODY1Y3dSVGh4eWxyQzBxMnk1MHRPUzM5QVc0dHZDYUFMaG1XVzkzeUdYU1FPWWJJc2l3d1FvbnpiRkUvc0ptK2w1UXB0RDdiRXR5NjNvTHRSUDFXVndPSC9FYWM1OFE4eVZXeUtVaWtSZDRoT0s0TXc0bWNSd1pkaVR4OTB4UFc0R2VwYXlUbmFTYmpVV1VIYXQ5ZHRoQnRENk5sVDJvMDVGdzVvd0JkYmI2Ny9MMjcxLzNsRDYrbHhnb2JHc2JHaTZIdEhlck0xZXI1OERSbkNBYktzSUx6QUlrTDZncWJvZjcxRFR1NDJ3WmFRdkVuUnR4Mmw5ZVdERktYNks2YzFLdGlIUDBDQ016bDdTOUx4QlJVVEpiMW5taUJnK3pwQ09CM2FYakpRY1M5ODdyOExGejJack9HYktuWjFhd1RENk5makR2bmxTY1ZEYndNSWxsaVI5VGVkdkVyR25Nei9aa3RTc1BZenorUEpVRkIzNDM2RlE1MlFQYVM2endSWGRDdEpvUHlIejVReW8wZ3BCTnowcTd0TGp3Um1wZ0JuR0wxcWVMS2ZVOGxkVkxMSW1MOWZlZHErcHNvK2Q4U0VFUG5tdmEwbjZaNTlCN1lWczlCWHdQZ1BVK2dDbkNUd2tqcnJjVHRRMjlMVDVKWmF2Tjh0VHVza0tpTWV3QnZJWVp6OUJ6OUhSR0IzNllmRjE1TFYwQ08xOFdtK252S3RhOWpYUXU4UUxKa2hJU2VtbGlHVXdSdzlZcDYyY1U4TXlQVXNPVjZUcVZyV0RwM3FmajVhbU9jK252MHorWnZTYStHVmdOa0h5U3UycEs3V29lYVFPc1FCcGdLZ1hNZkROUVlTT0I0ZVlaM05VVkZTMXFiaXlBVkxpQXB0Vk5xemFNV2owS2NGVWdGZE9yQUpzVjVxN21WdHZnVkNEZVZxNW1IaFgwWCtabnNTeHN0b3pOc3JJc1o5c2t4NXNYTmlmTlJGdTk5Nks5WVdIRDhZREdCWTFKSFZiSGtTUXhjc0hpWHZkaDFOdWlTRnBlRDJtenZKWUJXWGpXUzRmSDlFNmU5OTNqYlZNRFlvV0Q2c25BYlIyTzdMSjdBYmYxY29kdi85UjlWVmVUdGpVOUYvSS9iRDhudklDSW14Q1FtZFV0Rm5lQkRTRml2QjI4K0RoWmZEd3ZqZ2pPaVdmdmgxL3VnMFdvQ1MxUUhyL2owT2FodUZkaEw2aDJocGZ2QjlFN3g4ZW9XZVRHblJjekpyekk3RWQ1dElPOGJtdmo0SW5jL3E5RWNlMWg2aE5WdGRwVGF1L25jcnR5WDFtSmZLZk0wYzIwNHc1RVM4b081S0s5VytVdC9WV3NyVktkVUhxWWo3ZTFhQ3dOT2N4TzRZRE9oaHhmcTZaVlJ6YmFCOHdVTW1jMjJMMzh2UzhXcjhQWExVWVdyOFhYTGdiRTQ4RTdvN24zbUVYUkp4ZWRqSFBRZ2V5TC8vZzFlcWlkSStvc28wQ3ZtaENNQ3lveXRXZzAzL1pRVGloY053a0hHMGZHalF3MFdDekJCaEQzYVVkQzZ6QWMvOC9Qb1NsVEVkUXV1ZkRQOFQycDRQY2lxR1R0M1QrZExYcVJoUzgwaTRXQTJiRDlQc29KdUNHSkUwWmh0eHZCb0V6QmU5ZURLdEtJcG0wYm5wWW1XY1lkUE9NcWIrUHVjS2taV2JGQjJUa2JtWVBQWWRRc3dmSWFqOUkrTWg0Z3d1UThDbjVialNBSWhlei9rUjc0Z2RSamFkdUg4OUlTdDZjbCtobG5XQU9qa2VlRGpoYTZFdlRTQmc4T2VqRzUxT2ZEMUpwY0JaUW5vTk9vWUZkVnFRSVMweGZ5bTJHRFFVc3FER3FzT1M2OUxzZGxsTmlncHd1VGRIYTNVVm1FbkVBVVBmLy9qcWFNRnluZG1GUk0rUkNEMWc5REZJeXAzTHkrbkd5dGx5TE5Ya3JMMC9WTnZyQlNMTjRKSTkrSnhTdGgyd3NycFVpKy9SeEZuOTlPVm1iWlNjT1c0dmFlU0xKRTA2MjIyVzFOUjR5ZG1SZGhzN1VKL3ljVXovNSs4aGZNWkg4a0hIN0tuLzhOLzVmd1R6eHpTaGZBaVNOSCs5Nm5BYkwvNVNmdm5JTWlpS0NUb1BMeWJKakUzSno4TWlrSzRIYkY5UiszSGwveWlrYTJabjlia0I4ZHVDOTd4aDZBWnFxRWxXYTlzRHJMZ0VYM203RzFsZnk1VTBCU3N1WFRhUlN0TU5pOU1GZ2UvREUvZjBsWlZlSENya0RJV0pMTXVsMXJicVpWYkNxdjJkN1VVTDF0UTFYRmlDMmxsZXZvTmYzSEhtcWszYnRjQWFqSVNzcGpMbExORzlueUthY0Yzd0lSL1RhanVHeE5uYS9XSjhtSEcvdW5aM3JzSm5mWGw0b2NCU2JOeUVtRFRtOVZZWG9ZZWc2cm41ejVpcWtnRFRLNFJiYmdqdUZsV0xXUmFBMXhRcFpNWG0xNkdkR3pvajRiZlo3dVF2RktPeWVIQ0wzbklUd2J5OSt4dG93ZzRIellXMEkzMUt1dGt5dVhMeGhWOE5XWFdGNTlRN05EVnBjcms1bm9GNkF2YVk5T0k2ZVBEa0dNcUJGQnZxSTkzNGZzZTQrYk9jUXZ3MnFOeHZiOGdmbEVhT2NJVzRPUFRieTc0aUZVdUFmRmFwd0RuVmoxdjA4SGFUWWs4V25ETjBnZlNiTzFEYVZhclhJdmd1SnYvMzZMdzV5WXY2T0ZpM0NVRThYRzJ2S29rc3lFZi8rTVhTQ3FtVWNqdjRPUjhJeVdIemZqU0pUcUg1bTIrMUJ2bzRaYkFDTjBtTU5JS1lhaytObER4U21IeXkvaVV0bUY5cmpEU1crbE1BTGZ1WXRMdWVETkcya3Z3Nm9ONlcwaFRvZ0l4Zlc2bWhrQ3IrNmhDOFdyN0J5S0VaZ3dMUGVnT0hia2ZITkNldGxub1JvTjVuR0FTeHIzeXBCbCtYUkdObmVKUTVLVlpUVkM1bGcwK3BPKzFtaHFDdzRKRXFGK3ZhN09hS2I1WEpwUjlOb0YzZkpLRHdiRFhzekdzb2ZrWUU4RTlpeWRNd1JZSzljRW50U2MxcGJ1SndZMTd2ZjU2UXg1dUNxZnJmM3puRXhMUmhacExHSEVWR043d25MRUlNRjlsMjNTeTlXM3BDbkR3YVhSVzdza1FnbVJreVkxRjlqSDN5dXd5Q0d1ZHUydzVQQ0I4Nko3TjhBaXZpVkhySUtMLzU4THgxelVNL3hKV0VpQmw1b1lvVStVWi9mbW0waFhIcFdIMGZKTldHbElvUVgyd3Z0Z3ZKMmJ0L1R4MGtlcFg4TWRNRHp6RUErbWVUZ2pyM1VjRm5VY0dYbWRXcmZoTjd6Zk5DZVM5ck9hbHI5YjJkZjBRTXpKUk92Yjl4L3dEMnNKN213VzR5c1dONmxGQ29ka3ZQTThhVUFCbklGR3JSMkpYOTV4QlIvSmpXQy9QbHY2bFIyWHQycVMrdjRPckc1cmJ4dFBYL2pkd201bTNlRFRqak9wTS9QWGlaRSt5bWs3YjhtZ1pYeTM3VXNlZzBGTFB6S1EvR0VvYmVMS2Q2blo4TGR5SUxOb2h5LzlRSVplVUdtd1NDcXk1YkRwWWZ3dzFNOStmTmdtQUlCdk13c0RkcUpTR1VGYzAxdHUzajJLN1FzTHFQQnlBOHVBbHdkVUNvMmZTT2pZUk1naElRRUtLSXlGOGUwbVVDQWxaQWZIZ2Y1ME5Uekw3VUY0a1gxUGhlMTRtUS9kUE9URHJSYjhYeFBiRitiWElKVW1BcTNNMVNwbGZobFdvSXVOeUtDRms4MGVNb0ptTVBOOGM3NUJPNHN1NFp1Zjh3Vi9DQ3dDd3hGb1ZvcXhEQ3Byd1Z1MGtKYVFrd1RPVzdkYmtEanR6T1FTNW44OEgrbzZNOFVvUjcyNXNGcVhKeXZORk5xRXNOSGgwQ1JzM3l3MHlnTnFXYWxlSnlzTHFPVjBHZzJmSCtUb0VsQW1pVkJva3ZBcEZPRlRoRVFvTWtrRWRyU3E2S0FyWU9YaXc5UTZFOHI4NlpkNVJJVzdPQzkyVUJBSVIwUjgrTE44cnc0Y2o2NC85MVk3OVlldUZEbjN5eEVrN1N5SGRreTZmbklpbHBKUzRQZ3pPUTFYcDhjSzhlRXFCelM0ZDBVZ2oyYkZlNTdTelNOV2xVU0N2ek9XMnNVaWVXSGw1VHk3bUs3QmR6Tm9lNWM1cEdMcVlGaElKWHYzU1UrbXVFcVpOME13cjdLZEJBVVV6c0lGRGpNb0ZwdUJIWWk2Q0JFVTNRZStFTVp0WWRESmg1YUFjSTY1d1B0ZDFwRzN6VWFzL3N1ZWRrNzRmdkxEcyttVnh4WUpPWVd6bTJTWGYrbmtNdW1udldiUjNMOUVnMHNZeEVDRk5jdEordy9mK3hNamF6QzVPSXpnbVd6M0V5azdha2ppbFUvYmxFbHhaVjdTb0hNYTk5NHZtQzBHMW1DUkthajdZVzJKSUVWRkFnajhKNHFsNkVlUXROL1ZxTHFUODdrZjlkUGVTOWRQOXEvczJZM1J5WU4yUGtnNGM2M0RPV3p0SElTZkxaMUdVeFhPMjdWZ2w2YWRsekZ6ZXVkMElMZW52VWRSWFY5VHIwaHBQOVVmVWpjYXhNK2R1bmFLZG52QmJkVzBudWs5cW9WM0Z0MGhPL2QzN3ZNa3IraTU0cWtvOVVLT3RKaHZIaE5KUEcxT1JucUIyZUx5L2wrRFdwTTc4MFhvSlpLQ1BBKzlRRktFUFEyOXdwTUFxakpXaDRzUDhVL3dvdnRKNTBhaWNWRkh3Y2JmaFZkbC9GTXh3d2oyU09qcE1HUE5abzRRWnhPTlhnZ05qMENKbUpoVC9MSlgvYTFzMTlFb0VSb3Z4ZG04RS94RG9vaHFvNUFBVGdwN2VRYkI3NlB5azRZMUxscTRMekthT3JPYjd6RkZUMXI0V1JLTGM5S3U5djJkYkU5TUczZzNHZEdMREszNGZDMzBTM3ZkUzRhSlNBOXphS0VpRGF0UE9EVmhZWWVyd1NCZjJ2Uy81T1NIYitDSCtNbjU4UW10b2RxZUtJRjUxM1psTVpRNDN3M3FBUVNBb1N5N1dLb0prcy9tL0dDV1MyUTJVaGIveDVCNXM4RzJjZkVEeGJuZk0vYkdzbmNIUXduRFlzREIxTitXQ2w2enV4bG9Ib2VQbXc1TWQwOXZXcnE0ek9YVlRLamFVbDI5cGFhMkk4bXNyWmtTVCtHdHlVTzY4L0s2OHd1ODA1VlhVSUNxZ256VTdWSE15cFZqZVVvbFNKcFBMclFtcisvYllCQ2FoUUtyV0l3ZE00dUU2ak45WFpZa1FkRXlVUUNYQmVReVdTNFNjandYdDZyTWFnRjYwTm1aSUpnSmdXQldOWlRaQUVKZzVnOGJDSDd2M3ZwL2FyZnBsOVFMTENRQnlWaXlaY2hneDFUVDRJR29jYzJVZVprUjhkT3F3OS9NQVBzdEZtUGxjbEltelJyNk5nYVEzVk9nZTUyU2NDTGtJbVE1b0NoTGlrRmtHZXNtek9ENXcwT2NGZTd6NHlzZ3B1NDFUNUVuSXg0azNVc3NUOC93UUZNQlZQcERQdm95VXpBWUFBdEZ2SHVOelJRWTkzZDhURUtmQzJhMW41UTNPNmNUdXJ0Ky9rUXYwdVAvbXowdjhxdTVVWTFNemJQbm5nMWpQamdwSXN2RDhNWmsrZERiOWZkTVpETGg5OU5iZzMzOFh4VDNWdUdwS2FMWjVtUithTjVBZWNIM1BIQkdsa0NFZUc1ZDBjQUZNLzdHaXk5VDN6d2FSem5OKy9xUy9jRkh4dlNhOTJ2ZXV0VDVLMmx1eWttYVBlbXl4R3h3L3B3QkVZRGhtS2xIaUluTkZrQ280NytlRGM4bFpDclIzTHJlOVZHRFRseUo0OFp3QTFKWXBLWnRRR3Nqd2pQaVJHeStoUEZmcGZUOERHb0thbVZmRTlGUCt2WkZHWitPcEFvM1NuRFl4Qy9MbXJqWERoNzd0aWtTajB4NXVXZlFZME9FODM5aEJvNlRGeUhDWXl5TlVmczFUOTdNMUlyelZjRk11QVdrVCsrKzB4OFZLKzQrMVEzb2gvdDBTTG1Sa0ZVRU5BcDlDWlVlemc0cTUwU2JEZlYvWFozclBmWEtXWmMwd2JDNHVHR3B3RzJXaXNTa05Ia1VTb0hYTEJXTFFXQXI1UkZTWC9CVnBabTk3STJPV2tudHdoVi9IbGYyYlZVd0c5bkhpNjNKRzdvN0xtUmtrLzVXUkxiazlkM2ppbjRkLyt5Tk1waEM5R3Z4YlRYUDNpdzJpcjJBcmhCNGlnajN2MXpER2lZbmpuUHRQTUZOWmZPcytQTDVhY3pFQ1czbjBIYmhVUzhhaDAxSHI2VDFmclZKcjQvMHlPYnFtZTYzR2hIcTRmU08yODVGSDdvMmtEZFNrT1dnU3JNTktyK2xHZytySEk2Q2JLTVdML0R3c001U2x6ZGdBc3FEY1EwMENleGlRQU42OWV5WXZkLzVCMmRVQ1puMDhqZWNkNVF4V3lIZU0vN2N3dEVvY3k4MnZKdk9yYXBpSmc3eE9KeU9kNDExamJYTWQrcUo0aUcxQ2EreUlvWjhMQ3NwZ2grdCt3dEllTVljZEdTVTRwVC9ESGdtVlRYY3oyWnJ3Y0ZjSEVGbHhQcWtsTFVwU1YzWXNmbEoxK1NSTEVWa3BKVVZhWWxVNXcvbU5mRGk4TE0wb3FnaGpsNTNRWEFoTHVrSHdaTnBTYytZdk8vam4wWHpuakE1dXIyUjhYRXA4YkdSY1hGOWNjay8xZjNYdVdtYzRjdzBIMk1iN2Z2K2tEV1lHMk9kRmU4TTR5WVJXankxdjdCOExGOXF5aDlzMG5QVnNVTTVISit2VjE5elo3VTFUMDhGeXI4VVh1dWpUMC9INjJJanl1RE4zdVhzT01kTi9tYnZqWlBlVFJ0cU52VFk0LzY0K0tGU3RlQmNIQy9JdWZxZVdUSGI5MVZSdlJaa3Q0RTZrUCtnM2dnYVJ4czFFZHE1bXdLMXZOZmIyYzY2QVI3K3YwZSsvK0hWcVY2NEViVFRjS2NMdGdQdnR1aktuYWVMMnY2OWxZR3ZhN2xVKzR2R0s1M1dlTFg1cGJlWHdMN1hxVGZDODFWZ0NWM1BlOG9lNXZpdTFsdTdmTDlNZDdpWDc4NG9XTGhGV0U5K0ZmYm5NdzVBTVpkZFYwRGpsZEpUcTM2enJpdjV5ZExaNHJibnVvRTgvNDRtWEZuSGVZYWw3VUd2RmJWNVFhd1ZCU3M2eXdWZGRHSEFYdENiZzE5ZHlCTWJ6SHNodDFxd2NDZkJ1dnFkcHZtdG1LdTM1Z0ptWFl0azhoS3Z4WjBzTFZ3Y3RsdmNiaUN2eFM4MVBzY2YzNi93NzZvUkhmRnlUbXNyRzY5MGZHcTFXRjc0aGNhTEQrOGJOM1l0TzN0bmFMeVNPYlhxNDN3MDVyNi92YklIM25MUnJ2SmdBK3pzRDFGSTVtSFJBb3M4ckVzTHZKZDVZM1RtY2xteThVcm5wbFpMNUYzOWV1UE1GL2ZpSnEzanMzY2pyTm12TlNaOGZxY29iWHUrUElNeGZFejMveitvUXQvL3FkZkNtc3V6czN6dHYwVzdYTHhrMGE2L0NKbnR1WjN3dFdZeU5xUFZXVDV5WS9hY1BOdjEyN25pZ2I3UmtiMVdqKzZDYThsdEMxWjI3bzlrMlRmNGYzUFJLMlVmZjdTUDVRNStyZVltMzZVcUJ2akhTMjJabzd5QlgycGlYMGtVL0FMd0N6OVU4LzZWd0xNWmh5RURNSUI3R1lBTzhPVWl3eTQyL1dkWEdPMzZnK1puK0VGVEVjbW84N3dXaFprUjUzQWJhN3pKRmRxSE5jQWJoYk5KbkxlS2NCNWZjWWhzWlFYeXF5VS9GUTJ0MGdmM1ZzZG91ZStZWnZ1Y3k0WGYzY0IrNlh4UGZMSk1lVkl0MjFGcnZmeTNvUmdCL05aYkcvczNYWUQzRDcxQ09JTk9PUExCUDY3WFgzdjhqcEdId3hNYldxLy92bnQzb1lKOHhDazRreEhPYThWQStsWnFscG9lczI1VVpaRE43RXJwVEQweHg0YVJ6M1VzK29CVUlHNUJmbWxzQmdUZjVPVk93RHIyNU16VDJmYXhLNFYwcG1LNmFRbHV5R2hON0NKSUo4RjhnT3NiZHJJK1R0SE9MZFZiN2dBNTM3bUJyZkkrMmZRYzI3RVNSYzl5VVVaNGhTNU9nUHpBSmdmd3R4eHJXalRWejdxR2pPdEhCZ2gwYXIzenBETFdzZ0RmMTZZbmVHWWsreDlEcVI5SGdSNzUzUXZ6ZDU4ZTdxNnZ6dWVoSzVPSVUySzYwSnpXejU0RjBaOGxCeUdXZ0hvS2tuVUdzN203OE5JSEVJR3IxMTdISUxIblB2SHhnWnBzODF3L2U1WkdmNWJqTGdsaHF2cmFscWgxdkZhdGNzdTVMTXVKU3BrWlFwcG80YVY0d2Q1NHhpajVySXRTYVZXUUJiQTl5MnVDeC9maWFMTTJHNm42d3RSM3FPeE9Ud2JSTm1XUlJwUTR3NXFtSW13aCtCckEwMTRjS25tanl1OUE4SkQzSmFLaHBiQ2VoRkpUZWFoQ0hUS3o1aDVRWFlPY2NMRWVzNHdRNUllLzQ5bTZ6NFpNTkJWSlNjTDlSNUVaM0Q4Z2NwZlRiZDc3RERHRnEwMmZUZEdmWlFuR3dqeGV4RXhMcFBHYUl3S2RBTlN3OExMTjdBYlU4cnluMkVIT1dRVHBEZ012ZUI3U3NHRjYzcUl5QUlTNEZTQkxDRjRiRVNWdjBwY2pnYWNITUMwcEcwcDJ3MEZUUzA0bWpoVEJlVE00bGQyT24xYkpJbGg0WU5Dd2d2U1UrNHdGbkY5blJNdGI5YVVSVDdjMVZuSUE2UlFnalFLVTBPeDNBWFlUUVBBYURzbDg4MDJnaEE3UVNyZVl2UUdENW92R0RJaEhySWhEaUtpdnRLSVRNaEJxcVlGQ29PSU1pNWpWcUpxeUIzY2tveEdtbGl1alE5cGs1dGlHWmQ2TUx0M0ZRRy9LeWZPNlNsWFoxbXhRbmRsUzBCVGhacjFsZW1iZFNtdXpHL2tpaUsyQ0YrZzB1Z2c2em1KMm95ZUNTM2s0T0l2cGVadksyMnFqMkRiRkE2OTNia2RBRFBXNG16aXVtUXN3WTFvOTFzM3pwQlBsVzR0Z0xuc0kwanhhM1hNdk5NaUJ3VGFmMmhyNitQNkhjN2NKbUtxN3VOZkYxc2gxQnpUQzNtUzY1ZkZxbDdFVVNTTE94ZGxoU2Zxa201ZmVVRk55ajBrWFppTU93dGxqcGxyZWl0b1BPekpsNHlJRTEvSm1mUTc2aVRaK1BwOGMwamxpOUpma0JWdnFaUkJQNzZzM1BMNDRjT1BsYlVaMmNrRitCUFJpRWxCRW82WjNhbGpKM0Z1TVNtQzBMYWUraFNIRHhRTEEyOVpMWXFYbzhzdVI1cldjZVNrQmE5Tm5mZlJuZVlRY1hObDdBaW5TQTVRaXZtdUxXZFM2V3pWWnc0dzkxc3NEOXpWc2dEV1VvcU14eXQ0SjNpL2UrWHdXbmVnblpiWTIrZ3lNSmwxcTR3WlRKVm1hL0dvK3FJM2dEcVZ1dm5lM081MnhFWWNRcmxoaHRlUnBidzUzQzF1T1R5aXB5NlJKbXlnZ01ZM25FME5xOTVLbGVPQkN0Z2lkS1llT3h3SkdERmY5WVBmOUU0amhYcjBaTlZHbDluTGxkRU50Yjh3Mkh1cHRyY1llM3luMktPUENrbXhZbjFScWx6QXdlMmE1aHNoN0FZdWhVNnltWEhzVlVKbXN5WE04a0l0NjVRNlQyMHBrTTdxV3pMbWY5QytZUjc1aVZUZDNZSC9PeXZtcTFsUmM1eGVBWXJ6c0Fnck9yRzl2a01vRTFYYjlZZ3d1NktwaHNtN2ZxbWRVYVNhbmcxZXJlVFZrTzA3c016VlR6L1pRWnpzaExETVR1eVpEbE5zUGZLMlcwWEsxWVlMWUdsZkdvRXVHQWc2cHczWVN0UGdJTTlhazhjQkJvNEdzSjdocmFaSEMxTkxWSEdnbHpyeVlTeG5ON0tEamV5Y1lIL3U1blUrdDJuQ29LTTYxS21TUXRCNkJDSzVDdlJqTEVoYVBwL1RVQTl1OUpERXlCNzVFVk8wVkFCamZmZXhseitJZ1JGU0RYRm1JT0UyQ2JFSVUrOW1CbkhMM2tSQW5yZS9rVzlPUUlGVkttbk1jMHN6SHJPRHRRREtEc1UyZnhkR2ZwYmQxOWJKbVF2N1Y1QUM5YlhneEkzVGxEZElSVU1aUWhabUYybWFTVFlCV0JhZGh0OFV6akt0YUxBWTFLM3Q0RFdGc2krcTZ3SVI5Z1lsbXNEU1NtQUZNWVhOWjd1bVZjRlhJSEVyS3FWYVBtVzRkZzNIWnRjQVZDSyswQUZMVkVBSkNEVGdVWWk4ZFdQd2twWmtyNFp6a0VVYVptMVdrT1VJTjBKNFpnZzM5RE45aUFPUmVmeC96TW8wV2REczJMV3gwa09aNUVIMU5vNGl4Y3MyelhYVzR4WmhUc3pDcnM3V0Z4a09aYmh0aW9zZ1QybGtCaWp1eTNkUWFSejZxbWxiSXJtVGNEcDA4NU1CRGsrYXlvODRkRDVSVGtiTjV2M0phOEx1MFhnTDBwbkZzbVVPWHppd1FQbkswMVpCaVBValRQQWdTdWM1MFNuVkVUT2wrT0pZR0lLSkMxZCtBd1pVaXdqaWcyWG5sNDEweUJwdDVHa1RxODRTSmZJbEF1eVJOR2pQTU16MER5a1dwUmxqNEZoVFRVbFRnZzl3b1haZnBoUFcvY1VKN3lEOGpMM09JVDBwbldYVEE3dU80KzFQMGk3MHd4L2wwNEhSSTc1Q2VPRWxoQW5WSDNQT21Bb2hWUm9lL3c1elNxa1ZqbHFma0NHWVdWTnVyVGhNNFVpVTArOXJkRzNsYTVBcmo0Q3BSUWJVYU1ycGNvSWd0aGh4MVlNeUc5VEpvSTA4dCtodHhGYnZWdkQ5a3BxYytHZ29oNktITXVkSW9tSkI3bDAzTFI3RTczcHpQM09yaG5QenJ1UVVLUi9vbHM0a1gwNFZZN3pobURYdlpPUEM1L05sMmtINGpCdzFaSHZIbWlGbmZPcTVDVUtadDAwRDl1SWRhWkZPbnNpanhEUWtOQ2J1ZElWM1U3a1dQY2V1eVBSTFRva1Fwc0hVNjhGTzByV2IvbGJxdThJWTZ6MnJTbVcwSk9mb2Y3cFo3MjdCZUxEMm5aVDIvUkhhQVdocFVVWmVTQUlVSTVINUpKbkhGbFp2QkxkOU9pSmxlSjY2QnFUS1pGRk5mbTltQ2l2RkZrMW5rZlIxUmJBbXkxZUlpT0FzZk5IRG5YRlV1ZUhha1prZHkxcE9hT2FrbG15ZlNSUCt4Vi9sT2JpVnJucUQ3NWhqMEJVYW9DYUxjMU16cituYW5kL2dVaDY2WmlyRmVoT1lpaURHdHZLTDNaRVBzNytuSnhRT1lySTAyNURWK3hOY2J0OU5uZyt4NlhDdVdlOXNETTF4dkVubjg5RzF4eHpmVTdwVWpCMG1EdFVDTXNCY05acStDa1ZVTll3ZEZ0dWQwOVhsNHlUdzROR3dXTThzc2c2c0JKWWYzVU9MdGk3WUVkZjA4aUVaMEZuWlc3d0hEcnNwQno3U2thZVVNS0UraU5SNHRNbkdReVlLTnVHVWNVMmFvSnNFb0VJWVdEakZ1bmdEYjRhVzNYUTFvM0hjMG9oQitId3ZtcXpSOGpUNHRDOFhpZ3JkU3k0Q2d0V1VxcjNGWXB1UXJ1YUtBS095SjhBNzNxVUd0VTh1eXAyOEh5bnRCdzY2eEZnVUhYUGtiMU80OHlMMHl6N3FCcElzOWExWGM0QkJzbnd4YnRMbkg2TDBnOHdrRzM5dnl1NXZyWlVZcDJBS1VRejJPU0I0OXFXRzJsUHNDUnRydEJXeEMrZGZkZVAyNElnUVluNjd1cmk3Vy9TaElTWXFJUXczamcybmVDREt0T2ZsYVVLcG1EK1lOWCtpTVpDVWVic1JUcXBlK1REVURVZE9xbFBoS3ZxTHQ1V1dSNTFnS2V6Rk5CdGtjRHVKRjk1NklYK2JWNVg2WnAzR29LeEdsbkZzUnJSY3NiS3Z4V1o5aEpoR1laNXNhSXBkeGdNNjlGWDdHMm5ySlVuZVlGQTU4d1FRRmt6MWdpQ3AwOGI2ellqaEtCRXdFdHhEajlRbGFPZmF2dHVqYy9zL08zNlI5OFJJeXZJY2xsalZFdms4M3lPc3dxTHdpcXlJRnJ1S3JBam1uSlNuTnR5eExTc0dKMXVOWUJUWFpMSVM5NGZBYWZqbFBxanluSFNCbk90YzNpcm0zRUc1MDhNZ2lzY2tNYXR3bWpUUTg2TnY4YS9JWVJ4ZVQwM1VIWnQ0Mks0ZkRDNzRwZlRJTytGbk1EaThaNm12dW9iTVFLcm82VUZPWU9FT083K3pRTVV2ajBCazIxVFFnekpZY1dYTjRaek10Z2tCb2N6QmY4QzB5bmVBWUlzeTJ5Y3VBN1hZWVBHelQ0R1ZBQWoweks3cjFHUEsvb0hQL25tbE5rVzBCelEzL0RUd2NqaG04Y3l6R0MwMGN5TDNHWkM5emZKNmhyUFp0Qkg4L3gwT2VScnl4TS9zbmc2U0YzeXNRL29EaHJ5V1dMWXU0R0RudGFyVXBwMnUzNUVBV05QYzMxSENnZ0dVSktBNlowZVJWTlZVcDNqbGYwNk1OT0xFQTZiUWo4WG5rTU8wcHArQ1VmZkY1L2RuTkNwMTNhUlBId0dUSkczNm9naXhscDhQWWFnN1NuWnhiNEdYbGRKZ1d3bzlkc25wOFhGZmc3TlhIOTkrUjY4TjZmMzBKZTlrN0MwVHI5ZTNPQVkrZUxiSXVpM3JITHpEOEJoN0pHZTZCR0FLV1A2VWJHZHRKVlJaWnVucmVZL0ZxVmdYWmxFKzV6RGg0bkFieFhsVEVhZ0F3cVM2ZFBSQ05MNkM3TTFBSWNoUHh6UEI0d05FdGpsQWp1UkNQR3R4MU8rN1I1WGF1RDVJVElGOXhWLzZmRlF5QklScVFaM0drVUFQaHA5ZGswM0NndzJ5cFhIUFJpbnJIWnhDK0FHSFRJcDhRZ3M5ZGk0L1hDNTd6V294SnZUQ2xzL2RURTZVOEIyWVFhdjcvRHJYR0lGZEc2akFaemFyQVFENVJ6bmJmdThsTUZzVm9FdlpxTnk2NEJPNGh1RzIwQWd6ajVwdDY3TlAyam0zV0o5M0xzeUtOc0RPb2xkSFpLZkkzdDEzWEpYaDhNclFoNm8zNUpOK2tQQzdaRUdwSkRRTXBWdmxVT2E4bW1DWk81MWNyWGczQXVUT1g1OE54V05XcWxobHk1VjQzZEgyTHR4cXJHQTJQR05oRGlPUDVjdEdYZHFEQ2NzNjEvQjhXL0NWbnRTTlpxRmdZUmFLSXl3QWRqRWJQZktORW9TaW5vcDdNQmduUDhxWEJLT3QrSFBUNHYwQ2VnSkZMY2EyZXBZY1VSWVRXNEgxRWZwK0U2SysxckV0TGRqYXJKSUxxQnVpRXdMOGpFQU5oellsay96b1dlN21iODN0bjNKcXNvQ2M5VGVGRlJzeENyTnRFdkVRYnYxK0dtWmhNWkdFVWoxQ2VWaUdMWldVMlZzby9HVnlLc3E2bEFmVTZ4NVJ4NjBzTllxbldGL2c3Q005OUp2OERRcm8wY2o5ZlhSZTNMdCtiS1owTjczRVQrUWdBQWxEaWZ1N3QzN3J0OWI5TG8yTUpBRjc1NG0wQThOYVpnUXNOOWJMSERKY0xrREFBUU1EZHNDeHd2MVhRYUJhUSs5UUwvVzVqdm4vdjF3TitCenlrdVJ6YzlFTHNDYTB6aVlMeEM5bklHbysyZUdSMW9mb3hJZUk2aFIyRVlidlZWQ2d3RmxTbnltNVpkVStvN0c0NXZhQ3VqMVcwRXpsOW9icnYxSHRYeEwwS3UxRGRBSkV1Vk45V3NHTUVSZjBrYnl5WUdsM1RlRTMxcktrdU5qVk5tc1pqS2d1MnR3anZNRXgxS0tabXQ2bnB2T3NJOXdwdk9pQ0Mycjc2QXV0VjRYYkNOaUVqUFV1Ykd5WDN0K1N1cFhZcGIwWDJxcEJja1k3dTBqQVhpdmU1c2o0dzNxUEsra1JabjZyS2pwSitWam9DeG4wbTRydWR6REhqY1JnZVEzWG44Qmp2V3hmNC9LT20yR2dYcUN4WDJRRFJWcXliL2FEM3VOeitGKzEwb1lxMEpHQ2hJa1U5SnM5am1ycFhkbzhxNmx6cThiaFlYUzAzaWs1SENQYVNka29LM2psejl0NXBvaFRsaWowc3hya2FNWERQc0k0WGVkSFZieUpKWk5DVUl4amNuOXZlcjZiQ0tpU0dISDZWUFNweTBPQ3pIVlRyUTl3YUN4WVVJQzlZL0VtQ2dpbFJ3YWlLUGFKTExNdG54anNBVXlVd2VJd2dmQXlpSmc1ZFlOZ1lXQUdBS0ZEQnRudHVwRmNOejdxUHFaNWI0a3laVHVXclVtcGwwdDBvYmJJMU5RYzJqY29INk8xWEplTlE0ak9SdzZXa2Y1Vk1tWko1U09uNFJFWVRzZjNBbVZFSVJnOEN2S0NQckJXUDhTcDNFdURnSnNBamdNUDdDQUFBVlRBTkVFbFZnREZwREhEU3RBVjRxdW1Bd0dxcFZOUUZ6QlNIYkYxaGN3SU9uWmdCYkhjZUFrU05DekMybkFGT1ZWa0JudDVvUUpEYWZxVWlBbWFlem5nZVJYbzNyTkRIdkdIM1FTK2dxMjJPOVNTMjdIcW0razdQbHlhc3JBZjR1UFd6czRtNTJONkpUUmJPS1BPZm5GemN6MFBYcU5OR1NvN3lGdVVWR2JMcU9iWFFKVGxGdGpmM050MFJSNHVFSlFmWTA0STU4L2FtdTRFdUtLQk1KZDBXQjlDMUdSZmFTdGNqWVlzWmNkdWo1b2UrZmx5cXUrdDdGYlI0Z3ZqdjgzM0Z6ZkJiYjlhc2hEa3hlMHNZRURkbkg5dkY3S21NWDBCQWhUckRJa2IxcWJPZnB1UmtjaVo5cFBFYjJzdUNoSjMwQm9vTFJ0OXZwUHFSTDBUWERuR01lclRHTkVIR0M2dHNVNWJlOWowa01aTlpLS3hzN0ZRYUJ5ZlgwcEswTlBXMnlaQnBIVjBXcjJ3K09YTGx5VmVnVUpGaUpmeEtJL0tmUUZDNUNwV3FWQXVwVWF0T3ZRYU5tb1N0MTZ4Vm0zWWRPblhwRnRHalY1OE5vdm9OR0RSazJJaFJZOFpObURSbG8wMDJteFp6bGFNZDQxd25PZEZSSG5HbFd6emxDYmZhWXF2VHpYaEczSk9lOW9KblBlZDVYNW4xaWhlOTVEWnpmblNHMTczcU5mTys4WjBUTEZxd3pRN2I3WFM1aEQwc0hXdjdzTS9JZmUzbmEvczcwQUVPY29pRDNlTUtoem5VNFk3d3JlK3RlU01HY1ZpMkVrOENpV1FpaWN3a2t3V3Jiay9CWGU1Mmh6c2Q1NmFzWk1NUEh2UlFrYVNtNWNpWnE2VGNKZWM1NlpsSjdNMXY3Mi9jdE0vT2hVRHcvTnJjSHRxcDhWMXpUWmxqVy9mWmU4ejBhcmxxTi9kZXVKZFRpbHc4U2RmNEhmcEo1b2lkdjgrdmxWTE12T0Nmei9pb29ZR0lOTHQ1M2o5Zjh1QlVzZWpmTzdKSGFZcnJBR2lGTjIrRkRGM3BGenM3ZEJMN091RFZzdmROVmp5MlkvTnF3Kzc0d2xQMml1OVlxQnF4dFBUbFdIL1p2amNpditMSnA4WldpRTU5a1RSbnlUS3ZyOEIwLzJvS29mQjU0SFpGSXVtbzFpMk9sTzVmNDhJZ1pvWE1FdVkydEg3bm8rT2YxT1h3anpHRlpuQnUycHAwT0RvNXhyYWVqNzJ0dlJqbXU5MG1rVkw0S3czRCtTbmY2U0x6QjJGR1JPdURBQUE9KSBmb3JtYXQoJ3dvZmYyJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBZmZvZ2F0bywgc2Fucy1zZXJpZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdpY29uJztcXG4gIHNyYzogdXJsKGRhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmMjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHTWdBQkFBQUFBQWlrQUJBQUFBQUFFNVFBQUFoR0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUDBaR1ZFMGNHaDRHVmdDQ1FnZ2tDWlp3RVFnS2dWeUJXUXNLQUFFMkFpUURFQVFnQllWb0J6QU1nUVliYmhLam9rNXNVaWF5dnpyZ0RhTlB2Z0FMRmh5QUNZckp1VXBkT3ZIUktJcnYzT1F0bW0wMjUvN3IvT2Z0cWovM3Z2ZXFxdHNqVi9kQXFpRVU3V3kybnd5aGJLbnNmMmR3U2tYaUgvNVBkdC8yejVTaU9DbHFJRWxRSEZJNks3T3N4SUwvUjlzM0swcndORGU4RmN0SGJHV3dmQU5mSjBFemEwVk5VVTlYblF4dTVYSUpwYmFieTVkYm85aEJLQlF1MzV5aEN2OFZXcmZWZEFwUmV0SC9XaXZ0KzIvbkNGckl1MHNIV0VoVWtlcTJsM3Y2WUdiRFFPVkpVWGxrQlVReU5oVUhhRlNVaXM4aW5pTk9wWk9hUTdvcUFBVEFSNjhrR3dEd1dlQmpyMXFnQUU1V1FoOEZJNEpBSklBQk5LL1I0eFR3ZzI4REhtWS9QWDJRR3dOTXpiQk8yMzFwbUlmMXc3Y1FwLzlYalJwZDhHd1dCZ01RUmszMGtGVDRKQ25KVkpJY2hXL3gvN29MZHpMK3NZRGlYVXc3QUN2OVp4SEdoWXNHWjJOK3hIelRpWXVDRElHQk5NN1NtMzl3OTd4QiszNUtGSnhKK1pVTGRRTUoxdmEvNFFhb1R1M0VlUTlHUUoyTmVoQllZb0NBR1M4Q0RKMkorN3ZJOEtsUDhmYTY4ZWw0LzNQeTVsMDNMTHAzazhmS1RwUzBSNVg4c3FxTC91MFpLWU9Kdm1vbjV0Z2NUN2cvamk3VVBkaDJZTStVSVd2QzF0NW1FWW8rZ0pKemRwRGxiS0E3bmVjY0VOQllTRzNQaE9KdVFrbEVrK2k4ejFBTVNKZzNyN09xeWlnakhyT3B2d2tvams4UnVSY2ExWm4vODdOV2M3cUp5TENYeXE1cjkzT3k3SVYxa0NCekhzczZYa0FCbmVzOW1DN1FIcGd1MFFUaVl3dVhGMUFGUlZRZTBDR05oWU9uLzZRckZYZ0FWc25rYkJtbDhGUUdlbjBNanVPYXB6UnM4MVBlMlNPNE1KbUJPcVFXamJ2NFFtY29oWWhDY2l6bUdRdWJTUkJxN1NqOFZYSDREVWdJUUN4TWdQTUJndmpZTzBhaUlYbG5QcS81Z0F1Vld3M010Nk9BRzFDVWNQSTFGMjJOa0poeDlVbXZ1Q1lPZUNDODlMZ00vWk91NnVJTDNDenFwb1diQ0xzY0w5NGNwaXJyVVY3QTFkaVBRTURRb0wzMDVrQU5uRmNqUVkwSG9zSlRkNVQyMU04T0ZSR1BaVkFIYTZ4T1FWeEhnM1ltaE82bVNybUprUnE3QnhYbkZMazNxT2c2NXdTT1ZtUEd1QmtucDdqWUtMQ0E4YlFvWSsrY0ZRaXlFVVJRMVpNbi9RTUl3a3pGRFljSmowU05jVWpFTGxDTUtsRHgyN3VZeFF6djJFM1h3RjQ2dSt2dVZnNEVveUpvUFJDQ1NrMkVraEZHZ1hCS1JGQWhraHFpcUNPYUJtSm82eGFMR1haTld5b2tUbUxGTkJ4OFpQZ3BFRStKQkNva1VrTVNkU1RUUUFwdEExT2habFpDMmdRRmI5UXdmbitJOXdDS3BFNVJYMHc2U0RQUzhrQUdwS2xvUGNEYVRWdE5MYnJqVk03blFDYitNOU9PakJ6YTNzbVp5MEprb2FNSFprTVBzM2dRT1ppaFQ4ZzlJWXR4b2RDZkI2Ry9BQUQxVDIyelp2dVF0VUF1MUdqS2R3TjE4bWNVeU1QZ1doUElkOWNmNHFuYmwxYUF5bTYzcUlHbUlEN0MrcXA3Y0dwVGE1Vk9uTStReEQ3ZlU4amx0VUFoUUNoU2tVbytQRGF1bjNkWklqVmRDYW1Ob3F3RzhnZ2hKWHE0YVRHOW00UzFsMzd5WTk1MFB6bk1SK1lZVFJoVUYrL3hBRzFTa0Z4RVJoVkJ0aEkvRExPY0dZTHRtUnp0Q1ZvbjJMSjBXYUQzSzJwTlFnYWJ0SnZPTURpQnRSRkxZS05GZ2pVMlk2QXR1TzlkYVl1S3NEOHl0S0t2S1NqUUVsdCt6WlBNZ0J3b0xuNExrbENobXpXYm95SWxyV0ZJbERReE1aa0paVXVoV09vVGFKNEsvV21neHJ5RFIyd2pGTDBEVGZ1V2U3VmVqWStsaGM2MGlZbGlaZHExWmJaQk9tbnN0V0RHQ3kwNUhrZVV3elJBN0xDVC9hUW1EMnE2RDE0ZmxWZlIxbTVlSmZjWDdyenZLbEJvSVk1YkRZcXNNNGZNbExLeHJvUS9CWklEMGkxZ3pWd01pZW12bjZtUlhMTVpWcithaldwb2F6cE9oLy9FZE1ZemFUZXJsTjBiMjNSK1VuZjJPWHUybGhMSm9yT3VzemR4QTdhWlg2bDNJWE5tMkdNUlRGK0M4blB6RG1rWTFyaFJRVDBCZVVML3BnMEtHbWcrR1VMSHBvRW1YWHlCVWRpeU1TMEdOSGZHYTkzb2dWQWppV1Z3aFNTZUlTaW9sY2lRQ2treVExRlFKWldoRlpKMGhxSEFrb2xoTGlSWkdGWUZkYkl4N0lVa0I4T3BvRm91aHJ1UTVHRkRYeUJvYkwrZUFOT08vRExIQ2l5RUNHV2xFb3QxSlI2eDVKVmcyU3ZCaWl0UnNKcFhpald2Rk90ZUtUYThVbXptbFdITEs4TzJWNFlkcjJ5SzNZeExOc2s3UlUrL052MjhzWEJlSkhRZm42ZVFuRXdRK29jSEFFZ0FZQUFFSUFtUUJhRHF4ZmNRb0NGakhjb2xCeDNLdmpiZ2Z2QUpuTDdwOFBRL2ZScFMrY3hEWVV2UG5RMWRmUGJCNElyK3kvVzlhSHZ4cTdlRzM4cjZWYzZjcVEyNkdad1ZkQ3VvdG5PY0Q1SS93SmZKWCtyR1Y3WDZyekIwV1FrQWNJR1F2YnVvUys5UGVSYzA5U1ZYSUxoNkZBWFZzSXU2RnZDUFNQcHJXejRJNGdhT3R3RUsvUUE2ZzlBaExEVFJKMVY0T2doQUVQQmV5cDd5VlB3MWlCUGY3a3NDYzRncnZ3Z3djdWpzLzFsNE5BNDdBQ2xsNUxEendmRnFGa1NsbWxqcFZNd1FiZzlRU01QZWdiNk93Z0ExNjExTkRKYzEwMzJnQmNNM2tDV3hWaHpGYTQxUmpiWkw3NlVMT3dUMU40R0dEY0FxZERYeGVra3p0enRhOFBwSVpNNnZXZ25Ob1RYZXNyWGRZSzJ2d3lHcEQxRm55N1lUdTFZc1diYlBsS0pPS2xPZUhMbEttV2FkTUcxNU9QZUtUVFBXbVdZYzJMY01admJNQ290cDhjZHMycmRnM2JvdFdlWnMyWUIvZys1UmwycCtSV3ZxOUZiaU1vKzFicXcwcC9yTUtaQVZJNnBha0M0TTlGcXc1TUM2R2J2d2V1UkZkYi9vbzNzT1dzaUR2MEtlM1pRclN3NWNXTm4xM0t3Y3Y5TGtiL3IzWjRoMTg1aDEzM01vWmZJQXRXK3g1NkpkTkhaa2FneXJwMmtienF4YSs1dXpMd3V1eTVsdzczQXBiMzkvOFZKTVRXTzh5VTkxOUFTV296K1UyOHBreTU0SWlXUGxDOEM0RXlzVjJuV1UrQklZeUxFYWcrZEIyd3R2OXc1ZklIcDBQVS9iSGdQdUY2RFdQcUcwMXFoTGRpWkRMSEpqZW0xL2srK0QyR1RveGJBT0wxQy9KZEM1NC9CNTY5eXdqSGttalhQVE9FVmpNSmpybDd1amZpMmQvWktUeVpsMm5mNkhmR1JqMUFNQUFBPT0pIGZvcm1hdCgnd29mZjInKTtcXG4gIGZvbnQtZGlzcGxheTogYXV0bztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbltjbGFzc149XFxcImljb24tXFxcIl06YmVmb3JlLCBbY2xhc3MqPVxcXCIgaWNvbi1cXFwiXTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6ICdpY29uJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBzcGVhazogbm9uZTtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxZW07XFxuICBtYXJnaW4tcmlnaHQ6IC4yZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IC4yZW07XFxufVxcblxcbi5pY29uLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXGU4MDAnO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2ZvbnQtaWNvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbTlGQUFtOUY7RUFDbjlGLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVzs7RUFFWCxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDZCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2ljb24nO1xcbiAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmYyO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdNZ0FCQUFBQUFBaWtBQkFBQUFBQUU1UUFBQWhHQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFQMFpHVkUwY0doNEdWZ0NDUWdna0NaWndFUWdLZ1Z5QldRc0tBQUUyQWlRREVBUWdCWVZvQnpBTWdRWWJiaEtqb2s1c1VpYXl2enJnRGFOUHZnQUxGaHlBQ1lySnVVcGRPdkhSS0lydjNPUXRtbTAyNS83ci9PZnRxai8zdnZlcXF0c2pWL2RBcWlFVTdXeTJud3loYktuc2YyZHdTa1hpSC81UGR0LzJ6NVNpT0NscUlFbFFIRkk2SzdPc3hJTC9SOXMzSzByd05EZThGY3RIYkdXd2ZBTmZKMEV6YTBWTlVVOVhuUXh1NVhJSnBiYWJ5NWRibzloQktCUXUzNXloQ3Y4VldyZlZkQXBSZXRIL1dpdnQrMi9uQ0ZySXUwc0hXRWhVa2VxMmwzdjZZR2JEUU9WSlVYbGtCVVF5TmhVSGFGU1VpczhpbmlOT3BaT2FRN29xQUFUQVI2OGtHd0R3V2VCanIxcWdBRTVXUWg4Rkk0SkFKSUFCTksvUjR4VHdnMjhESG1ZL1BYMlFHd05NemJCTzIzMXBtSWYxdzdjUXAvOVhqUnBkOEd3V0JnTVFSazMwa0ZUNEpDbkpWSkljaFcveC83b0xkekwrc1lEaVhVdzdBQ3Y5WnhIR2hZc0daMk4reEh6VGlZdUNESUdCTk03U20zOXc5N3hCKzM1S0ZKeEorWlVMZFFNSjF2YS80UWFvVHUzRWVROUdRSjJOZWhCWVlvQ0FHUzhDREoySis3dkk4S2xQOGZhNjhlbDQvM1B5NWwwM0xMcDNrOGZLVHBTMFI1WDhzcXFML3UwWktZT0p2bW9uNXRnY1Q3Zy9qaTdVUGRoMllNK1VJV3ZDMXQ1bUVZbytnSkp6ZHBEbGJLQTduZWNjRU5CWVNHM1BoT0p1UWtsRWsraTh6MUFNU0pnM3I3T3F5aWdqSHJPcHZ3a29qazhSdVJjYTFabi84N05XYzdxSnlMQ1h5cTVyOTNPeTdJVjFrQ0J6SHNzNlhrQUJuZXM5bUM3UUhwZ3UwUVRpWXd1WEYxQUZSVlFlMENHTmhZT24vNlFyRlhnQVZzbmtiQm1sOEZRR2VuME1qdU9hcHpSczgxUGUyU080TUptQk9xUVdqYnY0UW1jb2hZaENjaXptR1F1YlNSQnE3U2o4VlhINERVZ0lRQ3hNZ1BNQmd2allPMGFpSVhsblBxLzVnQXVWV3czTXQ2T0FHMUNVY1BJMUYyMk5rSmh4OVVtdnVDWU9lQ0M4OUxnTS9aT3U2dUlMM0N6cXBvV2JDTHNjTDk0Y3BpcnJVVjdBMWRpUFFNRFFvTDMwNWtBTm5GY2pRWTBIb3NKVGQ1VDIxTThPRlJHUFpWQUhhNnhPUVZ4SGczWW1oTzZtU3JtSmtScTdCeFhuRkxrM3FPZzY1d1NPVm1QR3VCa25wN2pZS0xDQThiUW9ZKytjRlFpeUVVUlExWk1uL1FNSXdrekZEWWNKajBTTmNVakVMbENNS2xEeDI3dVl4UXp2MkUzWHdGNDZ1K3Z1Vmc0RW95Sm9QUkNDU2syRWtoRkdnWEJLUkZBaGtocWlxQ09hQm1KbzZ4YUxHWFpOV3lva1RtTEZOQng4WlBncEVFK0pCQ29rVWtNU2RTVFRRQXB0QTFPaFpsWkMyZ1FGYjlRd2ZuK0k5d0NLcEU1UlgwdzZTRFBTOGtBR3BLbG9QY0RhVFZ0TkxicmpWTTduUUNiK005T09qQnphM3NtWnkwSmtvYU1IWmtNUHMzZ1FPWmloVDhnOUlZdHhvZENmQjZHL0FBRDFUMjJ6WnZ1UXRVQXUxR2pLZHdOMThtY1V5TVBnV2hQSWQ5Y2Y0cW5ibDFhQXltNjNxSUdtSUQ3QytxcDdjR3BUYTVWT25NK1F4RDdmVThqbHRVQWhRQ2hTa1VvK1BEYXVuM2RaSWpWZENhbU5vcXdHOGdnaEpYcTRhVEc5bTRTMWwzN3lZOTUwUHpuTVIrWVlUUmhVRisveEFHMVNrRnhFUmhWQnRoSS9ETE9jR1lMdG1SenRDVm9uMkxKMFdhRDNLMnBOUWdhYnRKdk9NRGlCdFJGTFlLTkZnalUyWTZBdHVPOWRhWXVLc0Q4eXRLS3ZLU2pRRWx0K3paUE1nQndvTG40TGtsQ2hteldib3lJbHJXRklsRFF4TVprSlpVdWhXT29UYUo0Sy9XbWd4cnlEUjJ3akZMMERUZnVXZTdWZWpZK2xoYzYwaVlsaVpkcTFaYlpCT21uc3RXREdDeTA1SGtlVXd6UkE3TENUL2FRbUQycTZEMTRmbFZmUjFtNWVKZmNYN3J6dktsQm9JWTViRFlxc000Zk1sTEt4cm9RL0JaSUQwaTFnelZ3TWllbXZuNm1SWExNWlZyK2FqV3BvYXpwT2gvL0VkTVl6YVRlcmxOMGIyM1IrVW5mMk9YdTJsaExKb3JPdXN6ZHhBN2FaWDZsM0lYTm0yR01SVEYrQzhuUHpEbWtZMXJoUlFUMEJlVUwvcGcwS0dtZytHVUxIcG9FbVhYeUJVZGl5TVMwR05IZkdhOTNvZ1ZBamlXVndoU1NlSVNpb2xjaVFDa2t5UTFGUUpaV2hGWkowaHFIQWtvbGhMaVJaR0ZZRmRiSXg3SVVrQjhPcG9Gb3VocnVRNUdGRFh5Qm9iTCtlQU5PTy9ETEhDaXlFQ0dXbEVvdDFKUjZ4NUpWZzJTdkJpaXRSc0pwWGlqV3ZGT3RlS1RhOFVtem1sV0hMSzhPMlY0WWRyMnlLM1l4TE5zazdSVSsvTnYyOHNYQmVKSFFmbjZlUW5Fd1Erb2NIQUVnQVlBQUVJQW1RQmFEcXhmY1FvQ0ZqSGNvbEJ4M0t2amJnZnZBSm5MN3A4UFEvZlJwUytjeERZVXZQblExZGZQYkI0SXIreS9XOWFIdnhxN2VHMzhyNlZjNmNxUTI2R1p3VmRDdW90bk9jRDVJL3dKZkpYK3JHVjdYNnJ6QjBXUWtBY0lHUXZidW9TKzlQZVJjMDlTVlhJTGg2RkFYVnNJdTZGdkNQU1Bwcld6NEk0Z2FPdHdFSy9RQTZnOUFoTERUUkoxVjRPZ2hBRVBCZXlwN3lWUHcxaUJQZjdrc0NjNGdydndnd2N1anMvMWw0TkE0N0FDbGw1TER6d2ZGcUZrU2xtbGpwVk13UWJnOVFTTVBlZ2I2T3dnQTE2MTFOREpjMTAzMmdCY00za0NXeFZoekZhNDFSamJaTDc2VUxPd1QxTjRHR0RjQXFkRFh4ZWtrenR6dGE4UHBJWk02dldnbk5vVFhlc3JYZFlLMnZ3eUdwRDFGbnk3WVR1MVlzV2JiUGxLSk9LbE9lSExsS21XYWRNRzE1T1BlS1RUUFdtV1ljMkxjTVp2Yk1Db3RwOGNkczJyZGczYm90V2VaczJZQi9nKzVSbDJwK1JXdnE5RmJpTW8rMWJxdzBwL3JNS1pBVkk2cGFrQzRNOUZxdzVNQzZHYnZ3ZXVSRmRiL29vM3NPV3NpRHYwS2UzWlFyU3c1Y1dObjEzS3djdjlMa2IvcjNaNGgxODVoMTMzTW9aZklBdFcreDU2SmROSFprYWd5cnAya2J6cXhhKzV1ekx3dXV5NWx3NzNBcGIzOS84VkpNVFdPOHlVOTE5QVNXb3orVTI4cGt5NTRJaVdQbEM4QzRFeXNWMm5XVStCSVl5TEVhZytkQjJ3dHY5dzVmSUhwMFBVL2JIZ1B1RjZEV1BxRzAxcWhMZGlaRExISmplbTEvaysrRDJHVG94YkFPTDFDL0pkQzU0L0I1Njl5d2pIa21qWFBUT0VWak1KanJsN3VqZmkyZC9aS1R5WmwybmY2SGZHUmoxQU1BQUE9PSkgZm9ybWF0KCd3b2ZmMicpO1xcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuW2NsYXNzXj1cXFwiaWNvbi1cXFwiXTpiZWZvcmUsIFtjbGFzcyo9XFxcIiBpY29uLVxcXCJdOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogJ2ljb24nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHNwZWFrOiBub25lO1xcblxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbiAgd2lkdGg6IDFlbTtcXG4gIG1hcmdpbi1yaWdodDogLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IC4yZW07XFxufVxcblxcbi5pY29uLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXGU4MDAnO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cHM6Ly9naXRodWIuY29tL2hhbmtjaGl6bGphdy9tb2Rlcm4tY3NzLXJlc2V0ICovXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5saSxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGNsYXNzIGF0dHJpYnV0ZSAqL1xcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10ge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogaW5rO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIE5hdHVyYWwgZmxvdyBhbmQgcmh5dGhtIGluIGFydGljbGVzIGJ5IGRlZmF1bHQgKi9cXG5hcnRpY2xlID4gKiArICoge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucyBhbmQgdHJhbnNpdGlvbnMgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscURBQXFEO0FBQ3JELHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7Ozs7O0VBWUUsU0FBUztBQUNYOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLGlFQUFpRTtBQUNqRTs7RUFFRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSxpQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLG1EQUFtRDtBQUNuRDtFQUNFLGVBQWU7QUFDakI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGlGQUFpRjtBQUNqRjtFQUNFO0lBQ0UsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQywrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwczovL2dpdGh1Yi5jb20vaGFua2NoaXpsamF3L21vZGVybi1jc3MtcmVzZXQgKi9cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmxpLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgY2xhc3MgYXR0cmlidXRlICovXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSB7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIE5hdHVyYWwgZmxvdyBhbmQgcmh5dGhtIGluIGFydGljbGVzIGJ5IGRlZmF1bHQgKi9cXG5hcnRpY2xlID4gKiArICoge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucyBhbmQgdHJhbnNpdGlvbnMgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKiB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3Rvb2xzL2tleWZyYW1lcy1zcGlubmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFSQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBzcGlubmVyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMpO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIGNvbG9yOiB2YXIoLS1jLXApO1xcbn1cXG5cXG5hIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBhbGwgZWFzZS1pbiAwbXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWdyYWQpO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWMtZ3JhZCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvdHlwb2dyYXBoeS5jc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvbWl4aW5zL21peGlucy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUNFaEIsaUNBQTZDO0VEQTdDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUhBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZzKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBjb2xvcjogdmFyKC0tYy1wKTtcXG59XFxuXFxuYSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgQG1peGluIHRyYW5zaXRpb247XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYy1ncmFkKTtcXG59XFxuXCIsXCJAZGVmaW5lLW1peGluIGJhY2tncm91bmQtZ3JhZGllbnQge1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAtOTBkZWcsXFxuICAgIHZhcigtLWMtZ3JhZC1mcm9tKSxcXG4gICAgdmFyKC0tYy1ncmFkLXRvKVxcbiAgKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AZGVmaW5lLW1peGluIHRyYW5zaXRpb24gJHNwZWVkOiAyMDBtcywgJHByb3BlcnR5OiBhbGwsICRmdW5jdGlvbjogZWFzZS1pbixcXG4gICRkZWxheTogMG1zIHtcXG4gIHRyYW5zaXRpb246ICRzcGVlZCAkcHJvcGVydHkgJGZ1bmN0aW9uICRkZWxheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDkzMTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTMxKTtcbi8qKioqKiovIH0pKClcbjsiLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyA4ODA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oODgwKTtcbi8qKioqKiovIH0pKClcbjsiLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSb3V0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxOZXh0Um91dGVyPihudWxsIGFzIGFueSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUm91dGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdSb3V0ZXJDb250ZXh0J1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gVHJhbnNsYXRlcyBhIGxvZ2ljYWwgcm91dGUgaW50byBpdHMgcGFnZXMgYXNzZXQgcGF0aCAocmVsYXRpdmUgZnJvbSBhIGNvbW1vbiBwcmVmaXgpXG4vLyBcImFzc2V0IHBhdGhcIiBiZWluZyBpdHMgamF2YXNjcmlwdCBmaWxlLCBkYXRhIGZpbGUsIHByZXJlbmRlcmVkIGh0bWwsLi4uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBc3NldFBhdGhGcm9tUm91dGUoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGV4dDogc3RyaW5nID0gJydcbik6IHN0cmluZyB7XG4gIGNvbnN0IHBhdGggPVxuICAgIHJvdXRlID09PSAnLydcbiAgICAgID8gJy9pbmRleCdcbiAgICAgIDogL15cXC9pbmRleChcXC98JCkvLnRlc3Qocm91dGUpXG4gICAgICA/IGAvaW5kZXgke3JvdXRlfWBcbiAgICAgIDogYCR7cm91dGV9YFxuICByZXR1cm4gcGF0aCArIGV4dFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGYsdXNlRGVidWdWYWx1ZSBhcyBjfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgcCxGcmFnbWVudCBhcyB2LHJlbmRlciBhcyBkLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Uyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gUyh0aGlzLnByb3BzLG4pfHxTKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Qyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnAocChuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/cChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1wKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnB9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEQobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gRigpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxmPSEwPT09dC5fX2g7ci5fX3UrK3x8Znx8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PUMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyh2LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyh2LG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIE09ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gVChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIGoobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7ZChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxkKHMoVCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBJKG4sdCl7cmV0dXJuIHMoaix7X192Om4saTp0fSl9KEYucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLE0odCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxGLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9cChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sRi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPUYucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe00obixlLHQpfSl9O3ZhciBXPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIHoobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIiksZChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIFooKXt9ZnVuY3Rpb24gWSgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBIJiYobj1IKG4pKSxuLnBlcnNpc3Q9WixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPVksbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9JCxuLm5hdGl2ZUV2ZW50PW59O3ZhciBxLEc9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEo9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtmb3IodmFyIHUgaW4gcj17fSxlKXt2YXIgbz1lW3VdO1widmFsdWVcIj09PXUmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1vfHwoXCJkZWZhdWx0VmFsdWVcIj09PXUmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/dT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09dSYmITA9PT1vP289XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QodSk/dT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QodSt0KSYmIVYoZS50eXBlKT91PVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdCh1KT91PXUudG9Mb3dlckNhc2UoKTpQLnRlc3QodSk/dT11LnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1vJiYobz12b2lkIDApLHJbdV09byl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9cChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9cChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihHLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEcpKSxuLiQkdHlwZW9mPVcsSiYmSihuKX07dmFyIEs9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7SyYmSyhuKSxxPW4uX19jfTt2YXIgUT17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIHEuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sWD0xLG5uPTIsdG49Myxlbj00LHJuPTU7ZnVuY3Rpb24gdW4obix0KXtyZXR1cm4gdCgpfXZhciBvbj1cIm9iamVjdFwiPT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZS5ub3cuYmluZChwZXJmb3JtYW5jZSk6ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKX0sbG49XCIxNi44LjBcIjtmdW5jdGlvbiBmbihuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gY24obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09V31mdW5jdGlvbiBhbihuKXtyZXR1cm4gY24obik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBzbihuKXtyZXR1cm4hIW4uX19rJiYoZChudWxsLG4pLCEwKX1mdW5jdGlvbiBobihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBwbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSx2bj12O2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjp1LHVzZUltcGVyYXRpdmVIYW5kbGU6byx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6bCx1c2VDb250ZXh0OmYsdXNlRGVidWdWYWx1ZTpjLHZlcnNpb246XCIxNi44LjBcIixDaGlsZHJlbjprLHJlbmRlcjp6LGh5ZHJhdGU6Qix1bm1vdW50Q29tcG9uZW50QXROb2RlOnNuLGNyZWF0ZVBvcnRhbDpJLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0Ol8sY3JlYXRlRmFjdG9yeTpmbixjbG9uZUVsZW1lbnQ6YW4sY3JlYXRlUmVmOmIsRnJhZ21lbnQ6dixpc1ZhbGlkRWxlbWVudDpjbixmaW5kRE9NTm9kZTpobixDb21wb25lbnQ6YSxQdXJlQ29tcG9uZW50OkUsbWVtbzpnLGZvcndhcmRSZWY6eCx1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpwbixTdHJpY3RNb2RlOnYsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6RixsYXp5OkQsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6UX07ZXhwb3J0e2xuIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbix6IGFzIHJlbmRlcixCIGFzIGh5ZHJhdGUsc24gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxJIGFzIGNyZWF0ZVBvcnRhbCxmbiBhcyBjcmVhdGVGYWN0b3J5LGFuIGFzIGNsb25lRWxlbWVudCxjbiBhcyBpc1ZhbGlkRWxlbWVudCxobiBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixwbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyx2biBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsRiBhcyBTdXNwZW5zZUxpc3QsRCBhcyBsYXp5LFEgYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsWCBhcyB1bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxubiBhcyB1bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSx0biBhcyB1bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxlbiBhcyB1bnN0YWJsZV9Mb3dQcmlvcml0eSxybiBhcyB1bnN0YWJsZV9JZGxlUHJpb3JpdHksdW4gYXMgdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LG9uIGFzIHVuc3RhYmxlX25vd307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwidmFyIG4sbCx1LGksdCxvLHI9e30sZj1bXSxlPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYyhuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBzKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIGEobixsLHUpe3ZhciBpLHQsbyxyPWFyZ3VtZW50cyxmPXt9O2ZvcihvIGluIGwpXCJrZXlcIj09bz9pPWxbb106XCJyZWZcIj09bz90PWxbb106ZltvXT1sW29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mylmb3IodT1bdV0sbz0zO288YXJndW1lbnRzLmxlbmd0aDtvKyspdS5wdXNoKHJbb10pO2lmKG51bGwhPXUmJihmLmNoaWxkcmVuPXUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm51bGwhPW4uZGVmYXVsdFByb3BzKWZvcihvIGluIG4uZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbb10mJihmW29dPW4uZGVmYXVsdFByb3BzW29dKTtyZXR1cm4gdihuLGYsaSx0LG51bGwpfWZ1bmN0aW9uIHYobCx1LGksdCxvKXt2YXIgcj17dHlwZTpsLHByb3BzOnUsa2V5OmkscmVmOnQsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09bz8rK24uX192Om99O3JldHVybiBudWxsIT1uLnZub2RlJiZuLnZub2RlKHIpLHJ9ZnVuY3Rpb24gaCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIHkobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gcChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBkKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9kKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2Qobik6bnVsbH1mdW5jdGlvbiBfKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gXyhuKX19ZnVuY3Rpb24gayhsKXsoIWwuX19kJiYobC5fX2Q9ITApJiZ1LnB1c2gobCkmJiFiLl9fcisrfHx0IT09bi5kZWJvdW5jZVJlbmRlcmluZykmJigodD1uLmRlYm91bmNlUmVuZGVyaW5nKXx8aSkoYil9ZnVuY3Rpb24gYigpe2Zvcih2YXIgbjtiLl9fcj11Lmxlbmd0aDspbj11LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHU9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1jKHt9LHQpKS5fX3Y9dC5fX3YrMSxJKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9kKHQpOm8sdC5fX2gpLFQodSx0KSx0Ll9fZSE9byYmXyh0KSkpfSl9ZnVuY3Rpb24gbShuLGwsdSxpLHQsbyxlLGMscyxhKXt2YXIgaCxwLF8sayxiLG0sdyxBPWkmJmkuX19rfHxmLFA9QS5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oaz11Ll9fa1toXT1udWxsPT0oaz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBrP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIGt8fFwibnVtYmVyXCI9PXR5cGVvZiBrfHxcImJpZ2ludFwiPT10eXBlb2Ygaz92KG51bGwsayxudWxsLG51bGwsayk6QXJyYXkuaXNBcnJheShrKT92KHkse2NoaWxkcmVuOmt9LG51bGwsbnVsbCxudWxsKTprLl9fYj4wP3Yoay50eXBlLGsucHJvcHMsay5rZXksbnVsbCxrLl9fdik6aykpe2lmKGsuX189dSxrLl9fYj11Ll9fYisxLG51bGw9PT0oXz1BW2hdKXx8XyYmay5rZXk9PV8ua2V5JiZrLnR5cGU9PT1fLnR5cGUpQVtoXT12b2lkIDA7ZWxzZSBmb3IocD0wO3A8UDtwKyspe2lmKChfPUFbcF0pJiZrLmtleT09Xy5rZXkmJmsudHlwZT09PV8udHlwZSl7QVtwXT12b2lkIDA7YnJlYWt9Xz1udWxsfUkobixrLF89X3x8cix0LG8sZSxjLHMsYSksYj1rLl9fZSwocD1rLnJlZikmJl8ucmVmIT1wJiYod3x8KHc9W10pLF8ucmVmJiZ3LnB1c2goXy5yZWYsbnVsbCxrKSx3LnB1c2gocCxrLl9fY3x8YixrKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2Ygay50eXBlJiZudWxsIT1rLl9fayYmay5fX2s9PT1fLl9faz9rLl9fZD1zPWcoayxzLG4pOnM9eChuLGssXyxBLGIscyksYXx8XCJvcHRpb25cIiE9PXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJl8uX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWQoXykpfWZvcih1Ll9fZT1tLGg9UDtoLS07KW51bGwhPUFbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPUFbaF0uX19lJiZBW2hdLl9fZT09dS5fX2QmJih1Ll9fZD1kKGksaCsxKSksTChBW2hdLEFbaF0pKTtpZih3KWZvcihoPTA7aDx3Lmxlbmd0aDtoKyspeih3W2hdLHdbKytoXSx3WysraF0pfWZ1bmN0aW9uIGcobixsLHUpe3ZhciBpLHQ7Zm9yKGk9MDtpPG4uX19rLmxlbmd0aDtpKyspKHQ9bi5fX2tbaV0pJiYodC5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP2codCxsLHUpOngodSx0LHQsbi5fX2ssdC5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIHcobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXt3KG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24geChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBBKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxDKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8QyhuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uIFAobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fGUudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fFAobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8UChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/SDokLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/SDokLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uICQobCl7dGhpcy5sW2wudHlwZSshMV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIEgobCl7dGhpcy5sW2wudHlwZSshMF0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIEkobCx1LGksdCxvLHIsZixlLHMpe3ZhciBhLHYsaCxkLF8sayxiLGcsdyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKHM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwoYT1uLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYoZz11LnByb3BzLHc9KGE9UC5jb250ZXh0VHlwZSkmJnRbYS5fX2NdLHg9YT93P3cucHJvcHMudmFsdWU6YS5fXzp0LGkuX19jP2I9KHY9dS5fX2M9aS5fX2MpLl9fPXYuX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPXY9bmV3IFAoZyx4KToodS5fX2M9dj1uZXcgcChnLHgpLHYuY29uc3RydWN0b3I9UCx2LnJlbmRlcj1NKSx3JiZ3LnN1Yih2KSx2LnByb3BzPWcsdi5zdGF0ZXx8KHYuc3RhdGU9e30pLHYuY29udGV4dD14LHYuX19uPXQsaD12Ll9fZD0hMCx2Ll9faD1bXSksbnVsbD09di5fX3MmJih2Ll9fcz12LnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKHYuX19zPT12LnN0YXRlJiYodi5fX3M9Yyh7fSx2Ll9fcykpLGModi5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoZyx2Ll9fcykpKSxkPXYucHJvcHMsXz12LnN0YXRlLGgpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPXYuY29tcG9uZW50V2lsbE1vdW50JiZ2LmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPXYuY29tcG9uZW50RGlkTW91bnQmJnYuX19oLnB1c2godi5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmZyE9PWQmJm51bGwhPXYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmdi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGcseCksIXYuX19lJiZudWxsIT12LnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT12LnNob3VsZENvbXBvbmVudFVwZGF0ZShnLHYuX19zLHgpfHx1Ll9fdj09PWkuX192KXt2LnByb3BzPWcsdi5zdGF0ZT12Ll9fcyx1Ll9fdiE9PWkuX192JiYodi5fX2Q9ITEpLHYuX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLHYuX19oLmxlbmd0aCYmZi5wdXNoKHYpO2JyZWFrIG59bnVsbCE9di5jb21wb25lbnRXaWxsVXBkYXRlJiZ2LmNvbXBvbmVudFdpbGxVcGRhdGUoZyx2Ll9fcyx4KSxudWxsIT12LmNvbXBvbmVudERpZFVwZGF0ZSYmdi5fX2gucHVzaChmdW5jdGlvbigpe3YuY29tcG9uZW50RGlkVXBkYXRlKGQsXyxrKX0pfXYuY29udGV4dD14LHYucHJvcHM9Zyx2LnN0YXRlPXYuX19zLChhPW4uX19yKSYmYSh1KSx2Ll9fZD0hMSx2Ll9fdj11LHYuX19QPWwsYT12LnJlbmRlcih2LnByb3BzLHYuc3RhdGUsdi5jb250ZXh0KSx2LnN0YXRlPXYuX19zLG51bGwhPXYuZ2V0Q2hpbGRDb250ZXh0JiYodD1jKGMoe30sdCksdi5nZXRDaGlsZENvbnRleHQoKSkpLGh8fG51bGw9PXYuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPXYuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoZCxfKSksQT1udWxsIT1hJiZhLnR5cGU9PT15JiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsbShsLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQsbyxyLGYsZSxzKSx2LmJhc2U9dS5fX2UsdS5fX2g9bnVsbCx2Ll9faC5sZW5ndGgmJmYucHVzaCh2KSxiJiYodi5fX0U9di5fXz1udWxsKSx2Ll9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1qKGkuX19lLHUsaSx0LG8scixmLHMpOyhhPW4uZGlmZmVkKSYmYSh1KX1jYXRjaChsKXt1Ll9fdj1udWxsLChzfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFzLHJbci5pbmRleE9mKGUpXT1udWxsKSxuLl9fZShsLHUsaSl9fWZ1bmN0aW9uIFQobCx1KXtuLl9fYyYmbi5fX2ModSxsKSxsLnNvbWUoZnVuY3Rpb24odSl7dHJ5e2w9dS5fX2gsdS5fX2g9W10sbC5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKGwpe24uX19lKGwsdS5fX3YpfX0pfWZ1bmN0aW9uIGoobixsLHUsaSx0LG8sZSxjKXt2YXIgYSx2LGgseSxwPXUucHJvcHMsZD1sLnByb3BzLF89bC50eXBlLGs9MDtpZihcInN2Z1wiPT09XyYmKHQ9ITApLG51bGwhPW8pZm9yKDtrPG8ubGVuZ3RoO2srKylpZigoYT1vW2tdKSYmKGE9PT1ufHwoXz9hLmxvY2FsTmFtZT09XzozPT1hLm5vZGVUeXBlKSkpe249YSxvW2tdPW51bGw7YnJlYWt9aWYobnVsbD09bil7aWYobnVsbD09PV8pcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpO249dD9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLF8pOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXyxkLmlzJiZkKSxvPW51bGwsYz0hMX1pZihudWxsPT09XylwPT09ZHx8YyYmbi5kYXRhPT09ZHx8KG4uZGF0YT1kKTtlbHNle2lmKG89byYmZi5zbGljZS5jYWxsKG4uY2hpbGROb2Rlcyksdj0ocD11LnByb3BzfHxyKS5kYW5nZXJvdXNseVNldElubmVySFRNTCxoPWQuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHA9e30seT0wO3k8bi5hdHRyaWJ1dGVzLmxlbmd0aDt5KyspcFtuLmF0dHJpYnV0ZXNbeV0ubmFtZV09bi5hdHRyaWJ1dGVzW3ldLnZhbHVlOyhofHx2KSYmKGgmJih2JiZoLl9faHRtbD09di5fX2h0bWx8fGguX19odG1sPT09bi5pbm5lckhUTUwpfHwobi5pbm5lckhUTUw9aCYmaC5fX2h0bWx8fFwiXCIpKX1pZihBKG4sZCxwLHQsYyksaClsLl9faz1bXTtlbHNlIGlmKGs9bC5wcm9wcy5jaGlsZHJlbixtKG4sQXJyYXkuaXNBcnJheShrKT9rOltrXSxsLHUsaSx0JiZcImZvcmVpZ25PYmplY3RcIiE9PV8sbyxlLG4uZmlyc3RDaGlsZCxjKSxudWxsIT1vKWZvcihrPW8ubGVuZ3RoO2stLTspbnVsbCE9b1trXSYmcyhvW2tdKTtjfHwoXCJ2YWx1ZVwiaW4gZCYmdm9pZCAwIT09KGs9ZC52YWx1ZSkmJihrIT09bi52YWx1ZXx8XCJwcm9ncmVzc1wiPT09XyYmIWspJiZDKG4sXCJ2YWx1ZVwiLGsscC52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBkJiZ2b2lkIDAhPT0oaz1kLmNoZWNrZWQpJiZrIT09bi5jaGVja2VkJiZDKG4sXCJjaGVja2VkXCIsayxwLmNoZWNrZWQsITEpKX1yZXR1cm4gbn1mdW5jdGlvbiB6KGwsdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgbD9sKHUpOmwuY3VycmVudD11fWNhdGNoKGwpe24uX19lKGwsaSl9fWZ1bmN0aW9uIEwobCx1LGkpe3ZhciB0LG8scjtpZihuLnVubW91bnQmJm4udW5tb3VudChsKSwodD1sLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PWwuX19lfHx6KHQsbnVsbCx1KSksaXx8XCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlfHwoaT1udWxsIT0obz1sLl9fZSkpLGwuX19lPWwuX19kPXZvaWQgMCxudWxsIT0odD1sLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChsKXtuLl9fZShsLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bC5fX2spZm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdJiZMKHRbcl0sdSxpKTtudWxsIT1vJiZzKG8pfWZ1bmN0aW9uIE0obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gTihsLHUsaSl7dmFyIHQsbyxlO24uX18mJm4uX18obCx1KSxvPSh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGkpP251bGw6aSYmaS5fX2t8fHUuX19rLGU9W10sSSh1LGw9KCF0JiZpfHx1KS5fX2s9YSh5LG51bGwsW2xdKSxvfHxyLHIsdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsIXQmJmk/W2ldOm8/bnVsbDp1LmZpcnN0Q2hpbGQ/Zi5zbGljZS5jYWxsKHUuY2hpbGROb2Rlcyk6bnVsbCxlLCF0JiZpP2k6bz9vLl9fZTp1LmZpcnN0Q2hpbGQsdCksVChlLGwpfWZ1bmN0aW9uIE8obixsKXtOKG4sbCxPKX1mdW5jdGlvbiBTKG4sbCx1KXt2YXIgaSx0LG8scj1hcmd1bWVudHMsZj1jKHt9LG4ucHJvcHMpO2ZvcihvIGluIGwpXCJrZXlcIj09bz9pPWxbb106XCJyZWZcIj09bz90PWxbb106ZltvXT1sW29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mylmb3IodT1bdV0sbz0zO288YXJndW1lbnRzLmxlbmd0aDtvKyspdS5wdXNoKHJbb10pO3JldHVybiBudWxsIT11JiYoZi5jaGlsZHJlbj11KSx2KG4udHlwZSxmLGl8fG4ua2V5LHR8fG4ucmVmLG51bGwpfWZ1bmN0aW9uIHEobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrbysrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUoayl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59LF9fdjowfSxsPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxwLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1jKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oYyh7fSx1KSx0aGlzLnByb3BzKSksbiYmYyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxrKHRoaXMpKX0scC5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLGsodGhpcykpfSxwLnByb3RvdHlwZS5yZW5kZXI9eSx1PVtdLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsYi5fX3I9MCxvPTA7ZXhwb3J0e04gYXMgcmVuZGVyLE8gYXMgaHlkcmF0ZSxhIGFzIGNyZWF0ZUVsZW1lbnQsYSBhcyBoLHkgYXMgRnJhZ21lbnQsaCBhcyBjcmVhdGVSZWYsbCBhcyBpc1ZhbGlkRWxlbWVudCxwIGFzIENvbXBvbmVudCxTIGFzIGNsb25lRWxlbWVudCxxIGFzIGNyZWF0ZUNvbnRleHQsdyBhcyB0b0NoaWxkQXJyYXksbiBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixvPTAsaT1bXSxjPW4uX19iLGY9bi5fX3IsZT1uLmRpZmZlZCxhPW4uX19jLHY9bi51bm1vdW50O2Z1bmN0aW9uIG0odCxyKXtuLl9faCYmbi5fX2godSx0LG98fHIpLG89MDt2YXIgaT11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7fSksaS5fX1t0XX1mdW5jdGlvbiBsKG4pe3JldHVybiBvPTEscCh3LG4pfWZ1bmN0aW9uIHAobixyLG8pe3ZhciBpPW0odCsrLDIpO3JldHVybiBpLnQ9bixpLl9fY3x8KGkuX189W28/byhyKTp3KHZvaWQgMCxyKSxmdW5jdGlvbihuKXt2YXIgdD1pLnQoaS5fX1swXSxuKTtpLl9fWzBdIT09dCYmKGkuX189W3QsaS5fX1sxXV0saS5fX2Muc2V0U3RhdGUoe30pKX1dLGkuX19jPXUpLGkuX199ZnVuY3Rpb24geShyLG8pe3ZhciBpPW0odCsrLDMpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBoKHIsbyl7dmFyIGk9bSh0KyssNCk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX2gucHVzaChpKSl9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gbz01LGQoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIF8obix0LHUpe289NixoKGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQoKSk6biYmKG4uY3VycmVudD10KCkpfSxudWxsPT11P3U6dS5jb25jYXQobikpfWZ1bmN0aW9uIGQobix1KXt2YXIgcj1tKHQrKyw3KTtyZXR1cm4gayhyLl9fSCx1KSYmKHIuX189bigpLHIuX19IPXUsci5fX2g9biksci5fX31mdW5jdGlvbiBBKG4sdCl7cmV0dXJuIG89OCxkKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIEYobil7dmFyIHI9dS5jb250ZXh0W24uX19jXSxvPW0odCsrLDkpO3JldHVybiBvLl9fYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT12b2lkIDB9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsZCBhcyB1c2VNZW1vLEEgYXMgdXNlQ2FsbGJhY2ssRiBhcyB1c2VDb250ZXh0LFQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlSW1hZ2UgZnJvbSAnQC9jb21wcy9QYWdlSW1hZ2UnO1xuaW1wb3J0IFBhZ2VOYXZpZ2F0aW9uIGZyb20gJ0AvY29tcHMvUGFnZU5hdmlnYXRpb24nO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1sYXlvdXRcIj5cbiAgICAgIDxQYWdlSW1hZ2UgY2xhc3NOYW1lPVwicGFnZS1sYXlvdXRfX2ltYWdlXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1sYXlvdXRfX21haW5cIj5cbiAgICAgICAgPFBhZ2VOYXZpZ2F0aW9uIGNsYXNzTmFtZT1cInBhZ2UtbGF5b3V0X19uYXZpZ2F0aW9uXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxheW91dF9fY29udGVudFwiPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2FwcC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2FwcC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9hcHAuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGNuID0gKC4uLmNsYXNzZXM6IEFycmF5PFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+IHwgc3RyaW5nPik6IHN0cmluZyA9PlxuICBjbGFzc2VzXG4gICAgLm1hcCgoZW50cnkpID0+XG4gICAgICB0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnXG4gICAgICAgID8gZW50cnlcbiAgICAgICAgOiBPYmplY3QuZW50cmllcyhlbnRyeSlcbiAgICAgICAgICAgIC5maWx0ZXIoKFtjbCwgYXBwZW5kXSkgPT4gYXBwZW5kKVxuICAgICAgICAgICAgLm1hcCgoW2NsXSkgPT4gY2wpXG4gICAgICAgICAgICAuam9pbignICcpXG4gICAgKVxuICAgIC5maWx0ZXIoKGUpID0+IGUgIT09ICcnKVxuICAgIC5qb2luKCcgJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==