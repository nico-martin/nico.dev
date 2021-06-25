webpackHotUpdate_N_E("pages/index",{

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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/client/image.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
false,

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
false,

/***/ "./node_modules/next/image.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlSW1hZ2UudHN4Il0sIm5hbWVzIjpbIlNJWkVTIiwiVFlQRVMiLCJ3ZWJwIiwianBnIiwiUGFnZUltYWdlIiwiY2xhc3NOYW1lIiwiY24iLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZXh0IiwibWltZSIsInNpemUiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRztBQUNaQyxNQUFJLEVBQUUsWUFETTtBQUVaQyxLQUFHLEVBQUU7QUFGTyxDQUFkOztBQUtBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsNEJBQUdDLFNBQUg7QUFBQSxNQUFHQSxTQUFILCtCQUFlLEVBQWY7QUFBQSxTQUNoQjtBQUFLLGFBQVMsRUFBRUMsaUVBQUUsQ0FBQ0QsU0FBRCxFQUFZLFlBQVosQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsYUFBUyxFQUFDLG1CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUCxLQUFmLEVBQXNCUSxHQUF0QixDQUEwQjtBQUFBO0FBQUEsUUFBRUMsR0FBRjtBQUFBLFFBQU9DLElBQVA7O0FBQUEsV0FDekI7QUFDRSxVQUFJLEVBQUVBLElBRFI7QUFFRSxZQUFNLEVBQUVYLEtBQUssQ0FBQ1MsR0FBTixDQUNOLFVBQUNHLElBQUQ7QUFBQSxpREFBcUNBLElBQXJDLGNBQTZDRixHQUE3QyxjQUFvREUsSUFBcEQ7QUFBQSxPQURNLEVBRU5DLElBRk0sQ0FFRCxHQUZDLENBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR5QjtBQUFBLEdBQTFCLENBREgsQ0FERixDQURnQjtBQUFBLENBQWxCOztLQUFNVCxTO0FBZVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxOTZhNDQ0ZmI5Njk4NDZlMTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgY24gZnJvbSAnQC91dGlscy9jbGFzc25hbWVzJztcblxuY29uc3QgU0laRVMgPSBbNTAwLCA3MDAsIDEwMDAsIDE1MDAsIDIwMDBdO1xuY29uc3QgVFlQRVMgPSB7XG4gIHdlYnA6ICdpbWFnZS93ZWJwJyxcbiAganBnOiAnJyxcbn07XG5cbmNvbnN0IFBhZ2VJbWFnZSA9ICh7IGNsYXNzTmFtZSA9ICcnIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ3BhZ2UtaW1hZ2UnKX0+XG4gICAgPHBpY3R1cmUgY2xhc3NOYW1lPVwicGFnZS1pbWFnZV9faW1hZ2VcIj5cbiAgICAgIHtPYmplY3QuZW50cmllcyhUWVBFUykubWFwKChbZXh0LCBtaW1lXSkgPT4gKFxuICAgICAgICA8c291cmNlXG4gICAgICAgICAgdHlwZT17bWltZX1cbiAgICAgICAgICBzcmNTZXQ9e1NJWkVTLm1hcChcbiAgICAgICAgICAgIChzaXplKSA9PiBgLi4vcG9ydHJhaXQvbmljby1tYXJ0aW4tJHtzaXplfS4ke2V4dH0gJHtzaXplfXdgXG4gICAgICAgICAgKS5qb2luKCcsJyl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3BpY3R1cmU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUltYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==