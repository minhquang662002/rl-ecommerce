"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_modals_quickview_QuickViewModal_js"],{

/***/ "./resources/components/modals/quickview/QuickViewModal.js":
/*!*****************************************************************!*\
  !*** ./resources/components/modals/quickview/QuickViewModal.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_NavContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/NavContext */ "./resources/components/context/NavContext.js");
/* harmony import */ var _QuickViewModal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuickViewModal.css */ "./resources/components/modals/quickview/QuickViewModal.css");
/* harmony import */ var _QuickViewModalLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuickViewModalLeft */ "./resources/components/modals/quickview/QuickViewModalLeft.js");
/* harmony import */ var _ContextApp_ContextContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ContextApp/ContextContainer */ "./resources/ContextApp/ContextContainer.jsx");
/* harmony import */ var _page_detail_DetailPageRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../page/detail/DetailPageRight */ "./resources/components/page/detail/DetailPageRight.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // import QuickViewModalRight from "./QuickViewModalRight"








var QuickViewModal = function QuickViewModal() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_NavContext__WEBPACK_IMPORTED_MODULE_2__.NavContext),
      quickViewData = _useContext.navChoices.quickViewData,
      setNavChoices = _useContext.setNavChoices;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ContextApp_ContextContainer__WEBPACK_IMPORTED_MODULE_5__.MyContext),
      allImages = _useContext2.allImages,
      id_product = _useContext2.id_product;

  var imageList = allImages === null || allImages === void 0 ? void 0 : allImages.map(function (item) {
    return item;
  }).flat();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      displayedImage = _useState2[0],
      setDisplayedImage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return id_product;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      idProductUp = _useState4[0],
      setIdProductUp = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIdProductUp(function () {
      return id_product;
    });
  }, [id_product]);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return [];
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var res, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                url: "http://localhost:8000/brief",
                method: "post",
                timeout: 10000,
                headers: {
                  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                xsrfCookieName: 'qwerty',
                xsrfHeaderName: 'token',
                withCredentials: false,
                data: {
                  id_product: idProductUp
                }
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.data;

            case 5:
              result = _context.sent;
              setData(result[0]);
              return _context.abrupt("return", function () {
                setData(function () {
                  return [];
                });
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [idProductUp]);

  if (data === []) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      style: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
      },
      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CircularProgress, {})]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "QuickViewModal",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_QuickViewModalLeft__WEBPACK_IMPORTED_MODULE_4__["default"], {
        allImages: allImages,
        displayedImage: displayedImage,
        setDisplayedImage: setDisplayedImage,
        imageList: imageList
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_page_detail_DetailPageRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "qwe",
        title: data === null || data === void 0 ? void 0 : data.title,
        price: data === null || data === void 0 ? void 0 : data.price,
        color: data === null || data === void 0 ? void 0 : data.color,
        decription: data === null || data === void 0 ? void 0 : data.decription,
        size: data === null || data === void 0 ? void 0 : data.size,
        categories: data === null || data === void 0 ? void 0 : data.categories,
        currentColor: 0
      })]
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickViewModal);

/***/ }),

/***/ "./resources/components/modals/quickview/QuickViewModalLeft.js":
/*!*********************************************************************!*\
  !*** ./resources/components/modals/quickview/QuickViewModalLeft.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_useCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/useCarousel */ "./resources/utils/useCarousel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var QuickViewModalLeft = function QuickViewModalLeft(_ref) {
  var allImages = _ref.allImages,
      displayedImage = _ref.displayedImage,
      setDisplayedImage = _ref.setDisplayedImage,
      imageList = _ref.imageList;
  var quickViewRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var grabbing = (0,_utils_useCarousel__WEBPACK_IMPORTED_MODULE_0__["default"])(quickViewRef, displayedImage, setDisplayedImage, imageList === null || imageList === void 0 ? void 0 : imageList.length);
  var current = -1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "QuickViewModal__image--holder",
    ref: quickViewRef,
    style: {
      cursor: grabbing ? "grabbing" : "grab"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "QuickViewModal__image",
      style: {
        backgroundImage: "url(".concat(imageList[displayedImage], ")")
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "QuickViewModal__dot--holder",
      children: allImages === null || allImages === void 0 ? void 0 : allImages.map(function (item, index) {
        current++;
        var pos = current;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "dot quickview__dot",
          style: {
            background: pos === displayedImage ? "black" : ""
          },
          onClick: function onClick() {
            setDisplayedImage(pos);
          }
        }, index);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickViewModalLeft);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/components/modals/quickview/QuickViewModal.css":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/components/modals/quickview/QuickViewModal.css ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".QuickViewModal {\r\n    width: 65%;\r\n    height: 95%;\r\n    position: fixed;\r\n    background: white;\r\n    z-index: 12;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-40%, -50%);\r\n    display: flex;\r\n    -webkit-animation: opIn 0.4s forwards;\r\n            animation: opIn 0.4s forwards;\r\n}\r\n\r\n.QuickViewModal__image--holder {\r\n    width: 60%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    position: relative;\r\n}\r\n\r\n.QuickViewModal__image {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: 0.2s;\r\n}\r\n\r\n.QuickViewModal__info--holder {\r\n    padding: 10px 20px;\r\n}\r\n\r\n.QuickViewModal__title {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.QuickViewModal__price {\r\n    font-size: 1.3rem;\r\n    color: rgb(163, 159, 159);\r\n}\r\n\r\n.QuickViewModal__description {\r\n    margin: 20px 0;\r\n    color: rgb(146, 143, 143);\r\n}\r\n\r\n.QuickViewModal__color--container {\r\n    font-weight: bolder;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.QuickViewModal__color--holder {\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.QuickViewModal__color--outer {\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    border-radius: 50%;\r\n    padding: 2px;\r\n    cursor: pointer;\r\n}\r\n\r\n.QuickViewModal__color {\r\n    width: 26px;\r\n    height: 26px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.QuickViewModal__size--container {\r\n    font-weight: bolder;\r\n    margin-top: 20px;\r\n}\r\n\r\n.QuickViewModal__size--container > p {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.QuickViewModal__size--holder {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.QuickViewModal__size--button {\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    border: 1px solid rgb(161, 158, 158);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: bolder;\r\n    font-size: 0.7rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.QuickViewModal__dot--holder {\r\n    position: absolute;\r\n    display: flex;\r\n    bottom: 10px;\r\n    left: 50%;\r\n    gap: 5px;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.quickview__dot {\r\n    background: transparent;\r\n    border: 1px solid black;\r\n}\r\n\r\n@-webkit-keyframes opIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translate(-50%, -50%);\r\n    }\r\n}\r\n\r\n@keyframes opIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translate(-50%, -50%);\r\n    }\r\n}\r\n.qwe {\r\n    min-width: 450px ;\r\n    box-sizing: border-box;\r\n    padding: 12px 0 12px 10px;\r\n    background-color: #fff;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/components/modals/quickview/QuickViewModal.css":
/*!******************************************************************!*\
  !*** ./resources/components/modals/quickview/QuickViewModal.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_QuickViewModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./QuickViewModal.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/components/modals/quickview/QuickViewModal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_QuickViewModal_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_QuickViewModal_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);