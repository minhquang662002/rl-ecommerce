"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_page_detail_ConfirmOrder_js"],{

/***/ "./node_modules/@mui/material/DialogTitle/DialogTitle.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/DialogTitle/DialogTitle.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogTitleClasses */ "./node_modules/@mui/material/DialogTitle/dialogTitleClasses.js");
/* harmony import */ var _Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Dialog/DialogContext */ "./node_modules/@mui/material/Dialog/DialogContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "id"];











const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_6__.getDialogTitleUtilityClass, classes);
};

const DialogTitleRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])(_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
  name: 'MuiDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: '16px 24px',
  flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiDialogTitle'
  });

  const {
    className,
    id: idProp
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId: id = idProp
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_10__["default"]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DialogTitleRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "h2",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    variant: "h6",
    id: id
  }, other));
});
 true ? DialogTitle.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * @ignore
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogTitle);

/***/ }),

/***/ "./node_modules/@mui/material/DialogTitle/dialogTitleClasses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/material/DialogTitle/dialogTitleClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getDialogTitleUtilityClass": () => (/* binding */ getDialogTitleUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getDialogTitleUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiDialogTitle', slot);
}
const dialogTitleClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiDialogTitle', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogTitleClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Dialog/Dialog.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/material/Dialog/Dialog.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/material/node_modules/@mui/utils/esm/useId.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Fade */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _dialogClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogClasses */ "./node_modules/@mui/material/Dialog/dialogClasses.js");
/* harmony import */ var _DialogContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DialogContext */ "./node_modules/@mui/material/Dialog/DialogContext.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Backdrop */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
















const DialogBackdrop = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_Backdrop__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: 'MuiDialog',
  slot: 'Backdrop',
  overrides: (props, styles) => styles.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});

const useUtilityClasses = ownerState => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ['root'],
    container: ['container', `scroll${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(scroll)}`],
    paper: ['paper', `paperScroll${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(scroll)}`, `paperWidth${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(String(maxWidth))}`, fullWidth && 'paperFullWidth', fullScreen && 'paperFullScreen']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_8__["default"])(slots, _dialogClasses__WEBPACK_IMPORTED_MODULE_9__.getDialogUtilityClass, classes);
};

const DialogRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
  name: 'MuiDialog',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  '@media print': {
    // Use !important to override the Modal inline-style.
    position: 'absolute !important'
  }
});
const DialogContainer = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__["default"])('div', {
  name: 'MuiDialog',
  slot: 'Container',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.container, styles[`scroll${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(ownerState.scroll)}`]];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  height: '100%',
  '@media print': {
    height: 'auto'
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, ownerState.scroll === 'paper' && {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}, ownerState.scroll === 'body' && {
  overflowY: 'auto',
  overflowX: 'hidden',
  textAlign: 'center',
  '&:after': {
    content: '""',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '100%',
    width: '0'
  }
}));
const DialogPaper = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_Paper__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: 'MuiDialog',
  slot: 'Paper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`scrollPaper${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(ownerState.scroll)}`], styles[`paperWidth${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  margin: 32,
  position: 'relative',
  overflowY: 'auto',
  // Fix IE11 issue, to remove at some point.
  '@media print': {
    overflowY: 'visible',
    boxShadow: 'none'
  }
}, ownerState.scroll === 'paper' && {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100% - 64px)'
}, ownerState.scroll === 'body' && {
  display: 'inline-block',
  verticalAlign: 'middle',
  textAlign: 'left' // 'initial' doesn't work on IE11

}, !ownerState.maxWidth && {
  maxWidth: 'calc(100% - 64px)'
}, ownerState.maxWidth === 'xs' && {
  maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : `${theme.breakpoints.values.xs}${theme.breakpoints.unit}`,
  [`&.${_dialogClasses__WEBPACK_IMPORTED_MODULE_9__["default"].paperScrollBody}`]: {
    [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: 'calc(100% - 64px)'
    }
  }
}, ownerState.maxWidth !== 'xs' && {
  maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
  [`&.${_dialogClasses__WEBPACK_IMPORTED_MODULE_9__["default"].paperScrollBody}`]: {
    [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
      maxWidth: 'calc(100% - 64px)'
    }
  }
}, ownerState.fullWidth && {
  width: 'calc(100% - 64px)'
}, ownerState.fullScreen && {
  margin: 0,
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  maxHeight: 'none',
  borderRadius: 0,
  [`&.${_dialogClasses__WEBPACK_IMPORTED_MODULE_9__["default"].paperScrollBody}`]: {
    margin: 0,
    maxWidth: '100%'
  }
}));
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

const Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Dialog(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_12__["default"])({
    props: inProps,
    name: 'MuiDialog'
  });
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledbyProp,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = 'sm',
    onBackdropClick,
    onClose,
    open,
    PaperComponent = _Paper__WEBPACK_IMPORTED_MODULE_11__["default"],
    PaperProps = {},
    scroll = 'paper',
    TransitionComponent = _Fade__WEBPACK_IMPORTED_MODULE_14__["default"],
    transitionDuration = defaultTransitionDuration,
    TransitionProps
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  });

  const classes = useUtilityClasses(ownerState);
  const backdropClick = react__WEBPACK_IMPORTED_MODULE_2__.useRef();

  const handleMouseDown = event => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.
    backdropClick.current = event.target === event.currentTarget;
  };

  const handleBackdropClick = event => {
    // Ignore the events not coming from the "backdrop".
    if (!backdropClick.current) {
      return;
    }

    backdropClick.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const ariaLabelledby = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_15__["default"])(ariaLabelledbyProp);
  const dialogContextValue = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DialogRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      transitionDuration,
      as: BackdropComponent
    }, BackdropProps),
    closeAfterTransition: true,
    BackdropComponent: DialogBackdrop,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref,
    onClick: handleBackdropClick,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DialogContainer, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.container),
        onMouseDown: handleMouseDown,
        ownerState: ownerState,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DialogPaper, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.paper, PaperProps.className),
          ownerState: ownerState,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DialogContext__WEBPACK_IMPORTED_MODULE_16__["default"].Provider, {
            value: dialogContextValue,
            children: children
          })
        }))
      })
    }))
  }));
});
 true ? Dialog.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),

  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),

  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType),

  /**
   * @ignore
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),

  /**
   * Dialog children, usually the included sub-components.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),

  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string)]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func),

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool.isRequired),

  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType),

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   * @default {}
   */
  PaperProps: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),

  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOf(['body', 'paper']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_17___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_17___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object)]),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().elementType),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_17___default().number), prop_types__WEBPACK_IMPORTED_MODULE_17___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().number)
  })]),

  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);

/***/ }),

/***/ "./node_modules/@mui/material/Dialog/DialogContext.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/Dialog/DialogContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const DialogContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

if (true) {
  DialogContext.displayName = 'DialogContext';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogContext);

/***/ }),

/***/ "./node_modules/@mui/material/Dialog/dialogClasses.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/Dialog/dialogClasses.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getDialogUtilityClass": () => (/* binding */ getDialogUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getDialogUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiDialog', slot);
}
const dialogClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Typography/Typography.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/Typography.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyRoot": () => (/* binding */ TypographyRoot),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _typographyClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typographyClasses */ "./node_modules/@mui/material/Typography/typographyClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];











const useUtilityClasses = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _typographyClasses__WEBPACK_IMPORTED_MODULE_7__.getTypographyUtilityClass, classes);
};

const TypographyRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Typography(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TypographyRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className)
  }, other));
});
 true ? Typography.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['center', 'inherit', 'justify', 'left', 'right']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),

  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)]),

  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)]),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ "./node_modules/@mui/material/Typography/typographyClasses.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/typographyClasses.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getTypographyUtilityClass": () => (/* binding */ getTypographyUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getTypographyUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTypography', slot);
}
const typographyClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographyClasses);

/***/ }),

/***/ "./resources/action/payment.js":
/*!*************************************!*\
  !*** ./resources/action/payment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "payment": () => (/* binding */ payment)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var payment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(author_shop, quantity, price, image) {
    var res, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              url: "http://localhost:8000/checkout/",
              method: "post",
              timeout: 10000,
              timeoutErrorMessage: "Time out login",
              headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
              },
              xsrfCookieName: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
              xsrfHeaderName: 'X-CSRF-TOKEN',
              withCredentials: false,
              validateStatus: function validateStatus(status) {
                return status >= 200 && status < 300;
              },
              maxRedirects: 10,
              responseType: "json",
              data: {
                id_user: author_shop,
                quantity: quantity,
                price: price,
                image: image
              }
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.data;

          case 5:
            result = _context.sent;
            console.log(result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function payment(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./resources/components/page/detail/ConfirmOrder.js":
/*!**********************************************************!*\
  !*** ./resources/components/page/detail/ConfirmOrder.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleDialogDemo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _action_payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../action/payment */ "./resources/action/payment.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function SimpleDialog(props) {
  var handleClose = function handleClose() {
    props.onClose(function () {
      return false;
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClose: handleClose,
    open: props.open,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: "Detail order"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "dg4",
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        gap: 10,
        flex: "1 1 0"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "of5",
        style: {
          minWidth: 150,
          height: 250,
          borderRadius: 10,
          overflow: "hidden"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: props.image,
          alt: "open",
          className: "fmk2",
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "ejw4",
        style: {
          height: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            fontWeight: 600
          },
          children: props.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            textOverflow: "ellipsis",
            height: 100
          },
          children: props.decription
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "iy4",
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            textTransform: "capitalize",
            fontSize: 16,
            fontWeight: 600,
            whiteSpace: "nowrap"
          },
          children: "product classification"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [props.size_ && "Size: ".concat(props.size_), " ", props.color_]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "ji3",
      style: {
        display: "flex",
        width: "100%",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 10,
        padding: 10
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: function onClick() {
          return (0,_action_payment__WEBPACK_IMPORTED_MODULE_1__.payment)(props.author_shop, props.quantity, parseInt(props.price), props.image);
        },
        variant: "contained",
        children: "Checkout"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: function onClick() {
          return handleClose();
        },
        variant: "outlined",
        children: "Cancel"
      })]
    })]
  });
}

SimpleDialog.propTypes = {
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool.isRequired)
};
function SimpleDialogDemo(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "outlined",
      onClick: handleClickOpen,
      children: "Buy now"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SimpleDialog, _objectSpread({
      open: open,
      onClose: handleClose
    }, props))]
  });
}

/***/ })

}]);