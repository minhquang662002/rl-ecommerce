"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_InspirationProduct_Inspiration_js"],{

/***/ "./resources/InspirationProduct/Inspiration.js":
/*!*****************************************************!*\
  !*** ./resources/InspirationProduct/Inspiration.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_modals_search_SearchModalItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/modals/search/SearchModalItem */ "./resources/components/modals/search/SearchModalItem.js");
/* harmony import */ var _components_loading_LoadingSuspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loading/LoadingSuspense */ "./resources/components/loading/LoadingSuspense.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Inspiration = function Inspiration(props) {
  if (props.data.length < 1) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_loading_LoadingSuspense__WEBPACK_IMPORTED_MODULE_2__["default"], {});
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: props.data.map(function (item, key) {
        /*#__PURE__*/
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
          to: "/collections/products/".concat(item.title.toLowerCase().replaceAll(" ", "-")),
          state: {
            id_product: item.id_product,
            title: item.title,
            price: item.price,
            color: item.color,
            size: item.size,
            decription: item.decription,
            categories: item.categories
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_modals_search_SearchModalItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
            item: item
          })
        }, key);
      })
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspiration);

/***/ })

}]);