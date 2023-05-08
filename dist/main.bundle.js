"use strict";
(self["webpackChunklibrary"] = self["webpackChunklibrary"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* MODAL WIDGET */\n.modal {\n\tmargin: auto;\n\tborder: none;\n\tborder-radius: 10px;\n\tpadding: 1.5rem 2rem;\n\tbox-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\t\n\twidth: 500px;\n}\n\n.modal::backdrop {\n\tbackdrop-filter: blur(2px);\n}\n\n#modal-title {\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n}\n\n.modal form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.modal .inputItem {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.inputItem input {\n\twidth: 60%;\n\theight: 2rem;\n\n\tfont-size: 1rem;\n\tpadding: 5px;\n\tborder: none;\n\tborder-bottom: 2px solid var(--color-purple);\n\ttransition: border-bottom 250ms ease-in-out;\n\ttext-overflow: ellipsis;\n\toutline: none;\n\n\t/* -moz-appearance: textfield; */\n}\n\n.inputItem input:focus {\n\tborder-bottom: 2px solid var(--color-fushia);\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n}\n\n#modal-buttons {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n}\n\nbutton {\n\tmin-width: 100px;\n\tpadding: 0.5rem;\n\tborder-radius: 10px;\n\tbackground-color: var(--color-purple);\n\tborder-color: var(--color-purple);\n}\n\nbutton:hover {\n\tborder-color: var(--color-fushia);\n}\n\nbutton {\n\tfont-size: 1rem;\n\tcolor: whitesmoke;\n}\n\n/* END - MODAL WIDGET */\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;CACC,YAAY;CACZ,YAAY;CACZ,mBAAmB;CACnB,oBAAoB;CACpB,uEAAuE;;CAEvE,YAAY;AACb;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,UAAU;CACV,YAAY;;CAEZ,eAAe;CACf,YAAY;CACZ,YAAY;CACZ,4CAA4C;CAC5C,2CAA2C;CAC3C,uBAAuB;CACvB,aAAa;;CAEb,gCAAgC;AACjC;;AAEA;CACC,4CAA4C;AAC7C;;AAEA;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA;CACC,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,mBAAmB;CACnB,qCAAqC;CACrC,iCAAiC;AAClC;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA,uBAAuB","sourcesContent":["/* MODAL WIDGET */\n.modal {\n\tmargin: auto;\n\tborder: none;\n\tborder-radius: 10px;\n\tpadding: 1.5rem 2rem;\n\tbox-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\t\n\twidth: 500px;\n}\n\n.modal::backdrop {\n\tbackdrop-filter: blur(2px);\n}\n\n#modal-title {\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n}\n\n.modal form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.modal .inputItem {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.inputItem input {\n\twidth: 60%;\n\theight: 2rem;\n\n\tfont-size: 1rem;\n\tpadding: 5px;\n\tborder: none;\n\tborder-bottom: 2px solid var(--color-purple);\n\ttransition: border-bottom 250ms ease-in-out;\n\ttext-overflow: ellipsis;\n\toutline: none;\n\n\t/* -moz-appearance: textfield; */\n}\n\n.inputItem input:focus {\n\tborder-bottom: 2px solid var(--color-fushia);\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n}\n\n#modal-buttons {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n}\n\nbutton {\n\tmin-width: 100px;\n\tpadding: 0.5rem;\n\tborder-radius: 10px;\n\tbackground-color: var(--color-purple);\n\tborder-color: var(--color-purple);\n}\n\nbutton:hover {\n\tborder-color: var(--color-fushia);\n}\n\nbutton {\n\tfont-size: 1rem;\n\tcolor: whitesmoke;\n}\n\n/* END - MODAL WIDGET */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t--color-purple: #004aad;\n\t--color-fushia: #cb6ce6;\n\t--color-green: rgb(147, 220, 0);\n\t--bg-gradient: linear-gradient(to right, var(--color-purple), var(--color-fushia));\n\t--accent-font-color: #f1f1f1;\n\t--font-link-color: #ff914d;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100svh;\n}\n\nmain {\n\tdisplay: flex;\n\tflex: 1 1 auto;\n}\n\n/* PAGE */\n.page {\n\twidth: clamp(350px, 80vw, 1200px);\n}\n\nheader,\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 2rem;\n}\n\n/* END - PAGE */\n/* HEADER */\n\nheader,\nfooter {\n\tbackground: var(--bg-gradient);\n\tcolor: var(--accent-font-color);\n}\n\nheader .page {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\nheader .header-title {\n\tfont-size: 3rem;\n\tfont-weight: bold;\n}\n\nheader .header-tagline {\n\tfont-size: 1.5rem;\n}\n\n/* END - HEADER */\n/* FOOTER */\n\nfooter a {\n\tcolor: var(--font-link-color);\n\ttext-decoration: none;\n}\n\n/* END - FOOTER */\n\n\n/* MAIN */\nmain>.page {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 200px);\n\tgrid-auto-rows: max-content;\n\tgrid-gap: 2rem;\n\n\tjustify-content: center;\n}\n\n/* SWITCH WIDGET */\n.switch-widget {\n    display: flex;\n    align-items: center;\n\tflex-direction: row-reverse;\n\tjustify-content: space-between;\n}\n\n.switch-widget > label {\n    display: flex;\n    align-items: center;\n}\n\n.switch-widget input[type=\"checkbox\"] {\n    appearance: none;\n    width: 37px;\n    height: 12px;\n    border-radius: 15px;\n    background-color: lightgrey;\n    position: relative;\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]:checked {\n\tbackground-color: var(--color-fushia);\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n/* slider pseudo element */\n.switch-widget input[type=\"checkbox\"]:checked::before {\n    left: 19px;\n\tbackground-color: white;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]::before {\n    width: 16px;\n    height: 16px;\n    border: 1px solid lightgrey;\n    border-radius: 50%;\n    background-color: white;\n    content: '';\n    position: absolute;\n    top: -3px;\n    left: 0px;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .off,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .on {\n    opacity: 1;\n    transition: opacity 100ms;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .on,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .off {\n    opacity: 0;\n    transition: opacity 100ms;\n}\n\n.switch-widget label span {\n    position: absolute;\n\t/*cursor: pointer;*/\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;CACC,mJAAmJ;CACnJ,uBAAuB;CACvB,uBAAuB;CACvB,+BAA+B;CAC/B,kFAAkF;CAClF,4BAA4B;CAC5B,0BAA0B;AAC3B;;AAEA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,cAAc;AACf;;AAEA,SAAS;AACT;CACC,iCAAiC;AAClC;;AAEA;;;CAGC,aAAa;CACb,uBAAuB;CACvB,aAAa;AACd;;AAEA,eAAe;AACf,WAAW;;AAEX;;CAEC,8BAA8B;CAC9B,+BAA+B;AAChC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA,iBAAiB;AACjB,WAAW;;AAEX;CACC,6BAA6B;CAC7B,qBAAqB;AACtB;;AAEA,iBAAiB;;;AAGjB,SAAS;AACT;CACC,aAAa;CACb,+CAA+C;CAC/C,2BAA2B;CAC3B,cAAc;;CAEd,uBAAuB;AACxB;;AAEA,kBAAkB;AAClB;IACI,aAAa;IACb,mBAAmB;CACtB,2BAA2B;CAC3B,8BAA8B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,uCAAuC;CAC1C,eAAe;AAChB;;AAEA;CACC,qCAAqC;IAClC,uCAAuC;CAC1C,eAAe;AAChB;;AAEA,0BAA0B;AAC1B;IACI,UAAU;CACb,uBAAuB;IACpB,kCAAkC;CACrC,eAAe;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,kCAAkC;CACrC,eAAe;AAChB;;AAEA;;IAEI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;;IAEI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;CACrB,mBAAmB;AACpB","sourcesContent":[":root {\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t--color-purple: #004aad;\n\t--color-fushia: #cb6ce6;\n\t--color-green: rgb(147, 220, 0);\n\t--bg-gradient: linear-gradient(to right, var(--color-purple), var(--color-fushia));\n\t--accent-font-color: #f1f1f1;\n\t--font-link-color: #ff914d;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100svh;\n}\n\nmain {\n\tdisplay: flex;\n\tflex: 1 1 auto;\n}\n\n/* PAGE */\n.page {\n\twidth: clamp(350px, 80vw, 1200px);\n}\n\nheader,\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 2rem;\n}\n\n/* END - PAGE */\n/* HEADER */\n\nheader,\nfooter {\n\tbackground: var(--bg-gradient);\n\tcolor: var(--accent-font-color);\n}\n\nheader .page {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\nheader .header-title {\n\tfont-size: 3rem;\n\tfont-weight: bold;\n}\n\nheader .header-tagline {\n\tfont-size: 1.5rem;\n}\n\n/* END - HEADER */\n/* FOOTER */\n\nfooter a {\n\tcolor: var(--font-link-color);\n\ttext-decoration: none;\n}\n\n/* END - FOOTER */\n\n\n/* MAIN */\nmain>.page {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 200px);\n\tgrid-auto-rows: max-content;\n\tgrid-gap: 2rem;\n\n\tjustify-content: center;\n}\n\n/* SWITCH WIDGET */\n.switch-widget {\n    display: flex;\n    align-items: center;\n\tflex-direction: row-reverse;\n\tjustify-content: space-between;\n}\n\n.switch-widget > label {\n    display: flex;\n    align-items: center;\n}\n\n.switch-widget input[type=\"checkbox\"] {\n    appearance: none;\n    width: 37px;\n    height: 12px;\n    border-radius: 15px;\n    background-color: lightgrey;\n    position: relative;\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]:checked {\n\tbackground-color: var(--color-fushia);\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n/* slider pseudo element */\n.switch-widget input[type=\"checkbox\"]:checked::before {\n    left: 19px;\n\tbackground-color: white;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]::before {\n    width: 16px;\n    height: 16px;\n    border: 1px solid lightgrey;\n    border-radius: 50%;\n    background-color: white;\n    content: '';\n    position: absolute;\n    top: -3px;\n    left: 0px;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .off,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .on {\n    opacity: 1;\n    transition: opacity 100ms;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .on,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .off {\n    opacity: 0;\n    transition: opacity 100ms;\n}\n\n.switch-widget label span {\n    position: absolute;\n\t/*cursor: pointer;*/\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/tile.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/tile.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* BOOK TILE */\n\n.tile {\n\tborder: 3px solid var(--color-purple);\n\tborder-radius: 10px;\n\tpadding: 1rem;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\t/* need to make this more dynamic */\n\theight: 200px;\n\twidth: 200px;\n\n\tbox-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\t\n}\n\n.tile:hover {\n\tborder: 3px solid var(--color-fushia);\n\tcursor: pointer;\n}\n\n.tileFont-title {\n\tfont-weight: bolder;\n\tfont-size: 1.2rem;\n\theight: 4rem;\n}\n\n.tileFont-normal {\n\tfont-weight: normal;\n\tfont-size: 1rem;\n}\n\n/* END - BOOK TILE */\n/* ADD BOOK TILE */\n.addButton {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\n\tborder: 3px solid lightgrey;\n\n\tfont-size: 3rem;\n\tcolor: lightgrey;\n}\n\n.addButton:hover {\n\tborder: 3px solid var(--color-fushia);\n\tcolor: var(--color-fushia);\n\tcursor: pointer;\n}\n\n/* END - ADD BOOK TILE */", "",{"version":3,"sources":["webpack://./src/css/tile.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;CACC,qCAAqC;CACrC,mBAAmB;CACnB,aAAa;;CAEb,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,mCAAmC;CACnC,aAAa;CACb,YAAY;;CAEZ,uEAAuE;AACxE;;AAEA;CACC,qCAAqC;CACrC,eAAe;AAChB;;AAEA;CACC,mBAAmB;CACnB,iBAAiB;CACjB,YAAY;AACb;;AAEA;CACC,mBAAmB;CACnB,eAAe;AAChB;;AAEA,oBAAoB;AACpB,kBAAkB;AAClB;CACC,aAAa;CACb,kBAAkB;CAClB,uBAAuB;;CAEvB,2BAA2B;;CAE3B,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,qCAAqC;CACrC,0BAA0B;CAC1B,eAAe;AAChB;;AAEA,wBAAwB","sourcesContent":["/* BOOK TILE */\n\n.tile {\n\tborder: 3px solid var(--color-purple);\n\tborder-radius: 10px;\n\tpadding: 1rem;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\t/* need to make this more dynamic */\n\theight: 200px;\n\twidth: 200px;\n\n\tbox-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\t\n}\n\n.tile:hover {\n\tborder: 3px solid var(--color-fushia);\n\tcursor: pointer;\n}\n\n.tileFont-title {\n\tfont-weight: bolder;\n\tfont-size: 1.2rem;\n\theight: 4rem;\n}\n\n.tileFont-normal {\n\tfont-weight: normal;\n\tfont-size: 1rem;\n}\n\n/* END - BOOK TILE */\n/* ADD BOOK TILE */\n.addButton {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\n\tborder: 3px solid lightgrey;\n\n\tfont-size: 3rem;\n\tcolor: lightgrey;\n}\n\n.addButton:hover {\n\tborder: 3px solid var(--color-fushia);\n\tcolor: var(--color-fushia);\n\tcursor: pointer;\n}\n\n/* END - ADD BOOK TILE */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/tile.css":
/*!**************************!*\
  !*** ./src/css/tile.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tile.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/tile.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "library": () => (/* binding */ library)
/* harmony export */ });
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");


//app controller
function library() {
	let bookCollection = [];

	bookCollection = _modules_storage__WEBPACK_IMPORTED_MODULE_0__.getLibrary();

	const add = (book) => {
		if (bookCollection.some(b => b.title === book.title))
			throw new Error(`Book with title "${book.title}" already exists in library.`);

		bookCollection.push(book);
		_modules_storage__WEBPACK_IMPORTED_MODULE_0__.saveLibrary(bookCollection);

		console.log(`Book added to library. ${book.getDetails()}`);
	}
	
	const remove = (book) => {
		let bookIndex = bookCollection.indexOf(book);

		if (bookIndex < 0) return;

		bookCollection.splice(bookIndex, 1);
		_modules_storage__WEBPACK_IMPORTED_MODULE_0__.saveLibrary(bookCollection);

		console.log(`Book removed from library. ${book.getDetails()}`);
	}

	const update = (book, delta) => {
		if (delta.title !== undefined) {
			console.log(`Updating title "${book.title}" to "${delta.title}"`);
			book.title = delta.title;
		}

		if (delta.author !== undefined) {
			console.log(`Updating author "${book.author}" to "${delta.author}"`);
			book.author = delta.author;
		}

		if (delta.pageCount !== undefined) {
			console.log(`Updating page count "${book.pageCount}" to "${delta.pageCount}"`);
			book.pageCount = delta.pageCount;
		}

		if (delta.read !== undefined) {
			console.log(`Updating book read status "${book.read}" to "${delta.read}"`);
			book.read = delta.read;
		}

		_modules_storage__WEBPACK_IMPORTED_MODULE_0__.saveLibrary(bookCollection);
	}

	const printCollection = () => {
		if (bookCollection <= 0) {
			console.log('Library is empty!');
			return;
		}

		console.log('printing library...');
		bookCollection.forEach(book => console.log(`"${book.title}" by ${book.author}`));
	}

	const getBookCollection = () => {
		return bookCollection;
	}

	return {
		add,
		remove,
		update,
		printCollection,
		getBookCollection,
	}
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_tile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/tile.css */ "./src/css/tile.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _testData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testData */ "./src/testData.js");







let app = (0,_app__WEBPACK_IMPORTED_MODULE_4__.library)();
//createTestData(app);

let sc = (0,_screenController__WEBPACK_IMPORTED_MODULE_3__.screenController)(app);



/***/ }),

/***/ "./src/modules/book.js":
/*!*****************************!*\
  !*** ./src/modules/book.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "book": () => (/* binding */ book)
/* harmony export */ });
function book(title, author, pageCount, read) {
	const getDetails = () => {
		return `Title: "${title}", Author: "${author}", Page Count: ${pageCount}`;
	}

	return {
		getDetails,

		get title() {
			return title;
		},

		get author() {
			return author;
		},

		get pageCount() {
			return pageCount;
		},

		get read() {
			return read;
		},

		set title(newTitle) {
			if (!newTitle) return;
			if (newTitle === '') return;

			title = newTitle;
		},

		set author(newAuthor) {
			if (!newAuthor) return;
			if (newAuthor === '') return;

			author = newAuthor;
		},

		set pageCount(newPageCount) {
			if (typeof newPageCount !== 'number' && newPageCount !== undefined) {
				throw new Error(`Page Count invalid. Expected 'number', received ${typeof newPageCount}`);
				return;
			}

			if (newPageCount < 0)  {
				throw new Error(`Page Count invalid. Expected positive number, received ${newPageCount}`);
				return;
			}

			pageCount = newPageCount;
		},

		set read(readStatus) {
			read = readStatus;
		},
	}
}


/***/ }),

/***/ "./src/modules/bookTile.js":
/*!*********************************!*\
  !*** ./src/modules/bookTile.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newBookTile": () => (/* binding */ newBookTile)
/* harmony export */ });
function newBookTile() {
    const tile = document.createElement('div');
    tile.classList.add('book', 'tile');

    const titleText = document.createElement('p');
    titleText.classList.add('tileFont-title', 'tile-title');
    tile.appendChild(titleText);

    const authorText = document.createElement('p');
	authorText.classList.add('tileFont-normal', 'tile-author');
    tile.appendChild(authorText);
    
    const pageCountText = document.createElement('p');
	pageCountText.classList.add('tileFont-normal', 'tile-pageCount');
    tile.appendChild(pageCountText);

    tile.appendChild(newReadSwitch());

    return tile;
}

function newReadSwitch() {
    const switchWidget = document.createElement('div');
	switchWidget.classList.add('switch-widget');

	const switchInput = document.createElement('input');
	switchInput.setAttribute('type', 'checkbox');
	switchInput.setAttribute('name', 'bookRead');

    switchWidget.appendChild(switchInput);

	const switchLabel = document.createElement('label');

	const readLabel = document.createElement('span');
	readLabel.textContent = 'Read';
	readLabel.classList.add('on');
	switchLabel.appendChild(readLabel);

	const notReadLabel = document.createElement('span');
	notReadLabel.textContent = 'Not read';
	notReadLabel.classList.add('off');
	switchLabel.appendChild(notReadLabel);

	switchWidget.appendChild(switchLabel);

	return switchWidget;
}


/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newAddModalButtons": () => (/* binding */ newAddModalButtons),
/* harmony export */   "newUpdateModalButtons": () => (/* binding */ newUpdateModalButtons)
/* harmony export */ });
function newAddModalButtons() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'modal-buttons';

    buttonsContainer.appendChild(createSubmitButton('add'));
    buttonsContainer.appendChild(createCancelButton());

    return buttonsContainer;
}

function newUpdateModalButtons() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'modal-buttons';

    buttonsContainer.appendChild(createSubmitButton('update'));
    buttonsContainer.appendChild(createCancelButton());
    buttonsContainer.appendChild(createRemoveButton());

    return buttonsContainer;
}

function createSubmitButton(type) {
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.id = 'modal-addBook';

    if (type === 'add') {
        button.textContent = 'Add';
    }

    if (type === 'update') {
        button.textContent = 'Update';
    }

    return button;
}

function createCancelButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.id = 'modal-cancel';
    button.textContent = 'Cancel';
    
    return button;
}

function createRemoveButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.id = 'modal-removeBook';
    button.textContent = 'Remove';

    return button;
}

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLibrary": () => (/* binding */ getLibrary),
/* harmony export */   "saveLibrary": () => (/* binding */ saveLibrary)
/* harmony export */ });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/modules/book.js");


function saveLibrary(bookCollection) {
	localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}

function getLibrary() {
	let bookCollection = JSON.parse(localStorage.getItem('bookCollection') || '[]');
	bookCollection = bookCollection.map(book => 
		Object.assign((0,_book__WEBPACK_IMPORTED_MODULE_0__.book)(), book)
	);

	return bookCollection;
}


/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "screenController": () => (/* binding */ screenController)
/* harmony export */ });
/* harmony import */ var _modules_bookTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bookTile */ "./src/modules/bookTile.js");
/* harmony import */ var _modules_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/book */ "./src/modules/book.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");




const screenController = (application) => {
	const library = application;

	const libraryList = (() => {
		const libraryElement = document.querySelector('#libraryList');

		const addBookButton = libraryElement.querySelector('.tile.addButton');
		addBookButton.addEventListener('click', e => openModal());

		library.getBookCollection().forEach(book => {
			let bookTile = createBookTile(book);
			insertBookTile(bookTile);
		});

		function createBookTile(book) {
			let bookTile = (0,_modules_bookTile__WEBPACK_IMPORTED_MODULE_0__.newBookTile)();

			const tileTitle = bookTile.querySelector('.tile-title');
			const tileAuthor = bookTile.querySelector('.tile-author');
			const tilePageCount = bookTile.querySelector('.tile-pageCount');
			const tileReadState = bookTile.querySelector('input[type="checkbox"]');

			tileTitle.textContent = book.title;
			tileAuthor.textContent = book.author;
			tilePageCount.textContent = book.pageCount;
			tileReadState.checked = book.read;

			bookTile.addEventListener('click', e => openModal(book, bookTile));

			let readSwitch = bookTile.querySelector('.switch-widget input[name="bookRead"]');
			readSwitch.addEventListener('click', e => e.stopPropagation());
			readSwitch.addEventListener('change', e => toggleRead(e, book));

			return bookTile;
		}

		function toggleRead(e, bookObj) {
			let bookDelta = (0,_modules_book__WEBPACK_IMPORTED_MODULE_1__.book)();
			bookDelta.read = e.currentTarget.checked;
			library.update(bookObj, bookDelta);

			bookObj.read = e.currentTarget.checked;
		}

		function insertBookTile(bookTile) {
			libraryElement.insertBefore(bookTile, addBookButton);
		}

		function openModal(bookObj, bookTile) {
			const modalDialog = document.querySelector('.modal');
			const modalDialogTitle = modalDialog.querySelector('#modal-title');
			const modalDialogForm = modalDialog.querySelector('.modal form');
			
			addModalButtons(bookObj, modalDialogForm);
			initialiseCancelButton(modalDialogForm);
			
			if (bookObj !== undefined) {	// update book
				modalDialogTitle.textContent = 'Update Book';
				populateFormInputs(bookObj, modalDialogForm);

				initialiseRemoveButton(modalDialog, bookObj, bookTile);

				modalDialogForm.addEventListener('submit', e => {
					let bookDelta = updateBookObj(modalDialogForm, bookObj);
					library.update(bookObj, bookDelta);
	
					let updatedBookTile = createBookTile(bookObj);
					bookTile.replaceWith(updatedBookTile);
	
					closeModal();
				});
			} else {	// add book
				modalDialogTitle.textContent = 'Add Book';
				populateFormInputs((0,_modules_book__WEBPACK_IMPORTED_MODULE_1__.book)('',''), modalDialogForm);

				modalDialogForm.addEventListener('submit', e => {
					addBook(modalDialogForm);
					closeModal();
				});
			}

			modalDialog.showModal();
		}

		function addModalButtons(bookObj, form) {
			const modalButtonsContainer = form.querySelector('#modal-buttons');

			if (bookObj === undefined) {
				modalButtonsContainer === null ? form.appendChild((0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.newAddModalButtons)()): modalButtonsContainer.replaceWith((0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.newAddModalButtons)());
			} else {
				modalButtonsContainer === null ? form.appendChild((0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.newUpdateModalButtons)()): modalButtonsContainer.replaceWith((0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.newUpdateModalButtons)());
			}
		}

		function populateFormInputs(bookObj, form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="bookRead"]');

			titleInput.value = bookObj.title;
			authorInput.value = bookObj.author;
			pageCountInput.value = bookObj.pageCount;
			readStatusCheckBox.checked = bookObj.read;

			addValidationMessages(form);
		}

		function initialiseRemoveButton(modalElement, book, bookTile) {
			const removeButton = modalElement.querySelector('#modal-removeBook');


			removeButton.addEventListener('click', e => {
				library.remove(book);
				bookTile.remove();
				closeModal();
			});
		}

		function initialiseCancelButton(form) {
			const cancelButton = form.querySelector('#modal-cancel');
			cancelButton.addEventListener('click', e => closeModal());
		}

		function addBook(form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="bookRead"]');

			let newBook = (0,_modules_book__WEBPACK_IMPORTED_MODULE_1__.book)(titleInput.value, authorInput.value, parseInt(pageCountInput.value), readStatusCheckBox.checked);
			library.add(newBook);

			let newBookTile = createBookTile(newBook);
			insertBookTile(newBookTile);
		}
		
		function updateBookObj(form, bookObj) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="bookRead"]');

			const bookDelta = (0,_modules_book__WEBPACK_IMPORTED_MODULE_1__.book)();
			
			bookDelta.title = bookObj.title !== titleInput.value ?
				titleInput.value : undefined;
			bookDelta.author = bookObj.author !== authorInput.value ?
				authorInput.value : undefined;
			bookDelta.pageCount = bookObj.pageCount !== parseInt(pageCountInput.value) ?
				parseInt(pageCountInput.value) : undefined;
			bookDelta.read = bookObj.read !== readStatusCheckBox.checked ?
				readStatusCheckBox.checked : undefined;

			return bookDelta;
		}

		function addValidationMessages(form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');

			addTitleValidationMessage(titleInput);
			addAuthorValidationMessage(authorInput);
			addPageCountValidationMessage(pageCountInput);
		}

		function addTitleValidationMessage(titleInput) {
			if (titleInput.value === undefined) 
				titleInput.setCustomValidity('Please enter the book title.');

			titleInput.addEventListener('input', event => {
				if (titleInput.validity.valueMissing) {
					titleInput.setCustomValidity('Please enter the book title.');
				} else {
					titleInput.setCustomValidity('');
				}
			});
		}

		function addAuthorValidationMessage(authorInput) {
			if (authorInput.value === undefined)
				authorInput.setCustomValidity('Please enter an author.');

			authorInput.addEventListener('input', event => {
				if (authorInput.validity.valueMissing) {
					authorInput.setCustomValidity('Please enter an author.');
				} else if (authorInput.validity.patternMismatch) {
					authorInput.setCustomValidity('Author name cannot contain numbers.');
				} else {
					authorInput.setCustomValidity('');
				}
			});
		}

		function addPageCountValidationMessage(pageCountInput) {
			if (pageCountInput.value === undefined)
				pageCountInput.setCustomValidity('Please enter the number of pages.');

			pageCountInput.addEventListener('input', event => {
				if (pageCountInput.validity.valueMissing) {
					pageCountInput.setCustomValidity('Please enter the number of pages.');
				} else if (pageCountInput.validity.rangeUnderflow) {
					pageCountInput.setCustomValidity('Please enter a number greater than 0.');
				} else {
					pageCountInput.setCustomValidity('');
				}
			});
		}

		function closeModal() {
			const modalDialog = document.querySelector('.modal');

			modalDialog.close();
		}
	})();
}


/***/ }),

/***/ "./src/testData.js":
/*!*************************!*\
  !*** ./src/testData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTestData": () => (/* binding */ createTestData)
/* harmony export */ });
/* harmony import */ var _modules_book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/book */ "./src/modules/book.js");


const bookList = ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Pheonix", "Harry Potter and the Half Bood-Prince", "Harry Potter and the Deathly Hallows"];

const pageCounts = [309, 341, 435, 734, 870, 652, 759];

function createTestData(app) {
	console.log('Creating test data...');

	bookList.forEach(title => {
		let book = (0,_modules_book__WEBPACK_IMPORTED_MODULE_0__.book)(title, 'J.K Rowling', pageCounts[bookList.indexOf(title)], false);

		app.add(book);
	});

	console.log('Test data created!');
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7OztBQzVOaUQ7O0FBRWpEOztBQUVBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSxhQUFhLG1EQUFPOztBQUVwQjtBQUNBLEVBQUU7O0FBRUY7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3NzL21vZGFsLmNzcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9jc3MvdGlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3NzL21vZGFsLmNzcz9mMzgxIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3NzL3RpbGUuY3NzP2IzZmIiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbW9kdWxlcy9ib29rLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbW9kdWxlcy9ib29rVGlsZS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zY3JlZW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvdGVzdERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNT0RBTCBXSURHRVQgKi9cXG4ubW9kYWwge1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG5cXHRib3gtc2hhZG93OiAwIDAgIzAwMDAsIDAgMCAjMDAwMCwgMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG5cXHRcXG5cXHR3aWR0aDogNTAwcHg7XFxufVxcblxcbi5tb2RhbDo6YmFja2Ryb3Age1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbn1cXG5cXG4jbW9kYWwtdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLm1vZGFsIC5pbnB1dEl0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dEl0ZW0gaW5wdXQge1xcblxcdHdpZHRoOiA2MCU7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wdXJwbGUpO1xcblxcdHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMjUwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXG5cXHQvKiAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgKi9cXG59XFxuXFxuLmlucHV0SXRlbSBpbnB1dDpmb2N1cyB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWZ1c2hpYSk7XFxufVxcblxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG5cXHRcXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4jbW9kYWwtYnV0dG9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRtaW4td2lkdGg6IDEwMHB4O1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZnVzaGlhKTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi8qIEVORCAtIE1PREFMIFdJREdFVCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQix1RUFBdUU7O0NBRXZFLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixZQUFZOztDQUVaLGVBQWU7Q0FDZixZQUFZO0NBQ1osWUFBWTtDQUNaLDRDQUE0QztDQUM1QywyQ0FBMkM7Q0FDM0MsdUJBQXVCO0NBQ3ZCLGFBQWE7O0NBRWIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsNENBQTRDO0FBQzdDOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIscUNBQXFDO0NBQ3JDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUEsdUJBQXVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1PREFMIFdJREdFVCAqL1xcbi5tb2RhbCB7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcblxcdGJveC1zaGFkb3c6IDAgMCAjMDAwMCwgMCAwICMwMDAwLCAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcdFxcblxcdHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbiNtb2RhbC10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbCBmb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwgLmlucHV0SXRlbSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0SXRlbSBpbnB1dCB7XFxuXFx0d2lkdGg6IDYwJTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXB1cnBsZSk7XFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAyNTBtcyBlYXNlLWluLW91dDtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcblxcdC8qIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAqL1xcbn1cXG5cXG4uaW5wdXRJdGVtIGlucHV0OmZvY3VzIHtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItZnVzaGlhKTtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcblxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHRtYXJnaW46IDA7XFxufVxcblxcbiNtb2RhbC1idXR0b25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5idXR0b24ge1xcblxcdG1pbi13aWR0aDogMTAwcHg7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1mdXNoaWEpO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLyogRU5EIC0gTU9EQUwgV0lER0VUICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG5cXHQtLWNvbG9yLXB1cnBsZTogIzAwNGFhZDtcXG5cXHQtLWNvbG9yLWZ1c2hpYTogI2NiNmNlNjtcXG5cXHQtLWNvbG9yLWdyZWVuOiByZ2IoMTQ3LCAyMjAsIDApO1xcblxcdC0tYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY29sb3ItcHVycGxlKSwgdmFyKC0tY29sb3ItZnVzaGlhKSk7XFxuXFx0LS1hY2NlbnQtZm9udC1jb2xvcjogI2YxZjFmMTtcXG5cXHQtLWZvbnQtbGluay1jb2xvcjogI2ZmOTE0ZDtcXG59XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG59XFxuXFxubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuLyogUEFHRSAqL1xcbi5wYWdlIHtcXG5cXHR3aWR0aDogY2xhbXAoMzUwcHgsIDgwdncsIDEyMDBweCk7XFxufVxcblxcbmhlYWRlcixcXG5tYWluLFxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBFTkQgLSBQQUdFICovXFxuLyogSEVBREVSICovXFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmctZ3JhZGllbnQpO1xcblxcdGNvbG9yOiB2YXIoLS1hY2NlbnQtZm9udC1jb2xvcik7XFxufVxcblxcbmhlYWRlciAucGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuaGVhZGVyIC5oZWFkZXItdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaGVhZGVyIC5oZWFkZXItdGFnbGluZSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIEVORCAtIEhFQURFUiAqL1xcbi8qIEZPT1RFUiAqL1xcblxcbmZvb3RlciBhIHtcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1saW5rLWNvbG9yKTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEVORCAtIEZPT1RFUiAqL1xcblxcblxcbi8qIE1BSU4gKi9cXG5tYWluPi5wYWdlIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjAwcHgpO1xcblxcdGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG5cXHRncmlkLWdhcDogMnJlbTtcXG5cXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogU1dJVENIIFdJREdFVCAqL1xcbi5zd2l0Y2gtd2lkZ2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCA+IGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAzN3B4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGVhc2U7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZ1c2hpYSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXMgZWFzZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHNsaWRlciBwc2V1ZG8gZWxlbWVudCAqL1xcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgbGVmdDogMTlweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAyMDBtcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtM3B4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGxlZnQgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIH4gbGFiZWwgLm9mZixcXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBsYWJlbCAub24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIH4gbGFiZWwgLm9uLFxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGxhYmVsIC5vZmYge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBsYWJlbCBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcdC8qY3Vyc29yOiBwb2ludGVyOyovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsbUpBQW1KO0NBQ25KLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsK0JBQStCO0NBQy9CLGtGQUFrRjtDQUNsRiw0QkFBNEI7Q0FDNUIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0FBQ2Y7O0FBRUEsU0FBUztBQUNUO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUVBOzs7Q0FHQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGFBQWE7QUFDZDs7QUFFQSxlQUFlO0FBQ2YsV0FBVzs7QUFFWDs7Q0FFQyw4QkFBOEI7Q0FDOUIsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBLGlCQUFpQjtBQUNqQixXQUFXOztBQUVYO0NBQ0MsNkJBQTZCO0NBQzdCLHFCQUFxQjtBQUN0Qjs7QUFFQSxpQkFBaUI7OztBQUdqQixTQUFTO0FBQ1Q7Q0FDQyxhQUFhO0NBQ2IsK0NBQStDO0NBQy9DLDJCQUEyQjtDQUMzQixjQUFjOztDQUVkLHVCQUF1QjtBQUN4Qjs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCLDJCQUEyQjtDQUMzQiw4QkFBOEI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsdUNBQXVDO0NBQzFDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxxQ0FBcUM7SUFDbEMsdUNBQXVDO0NBQzFDLGVBQWU7QUFDaEI7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksVUFBVTtDQUNiLHVCQUF1QjtJQUNwQixrQ0FBa0M7Q0FDckMsZUFBZTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGtDQUFrQztDQUNyQyxlQUFlO0FBQ2hCOztBQUVBOztJQUVJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtDQUNyQixtQkFBbUI7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG5cXHQtLWNvbG9yLXB1cnBsZTogIzAwNGFhZDtcXG5cXHQtLWNvbG9yLWZ1c2hpYTogI2NiNmNlNjtcXG5cXHQtLWNvbG9yLWdyZWVuOiByZ2IoMTQ3LCAyMjAsIDApO1xcblxcdC0tYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY29sb3ItcHVycGxlKSwgdmFyKC0tY29sb3ItZnVzaGlhKSk7XFxuXFx0LS1hY2NlbnQtZm9udC1jb2xvcjogI2YxZjFmMTtcXG5cXHQtLWZvbnQtbGluay1jb2xvcjogI2ZmOTE0ZDtcXG59XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG59XFxuXFxubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuLyogUEFHRSAqL1xcbi5wYWdlIHtcXG5cXHR3aWR0aDogY2xhbXAoMzUwcHgsIDgwdncsIDEyMDBweCk7XFxufVxcblxcbmhlYWRlcixcXG5tYWluLFxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBFTkQgLSBQQUdFICovXFxuLyogSEVBREVSICovXFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmctZ3JhZGllbnQpO1xcblxcdGNvbG9yOiB2YXIoLS1hY2NlbnQtZm9udC1jb2xvcik7XFxufVxcblxcbmhlYWRlciAucGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuaGVhZGVyIC5oZWFkZXItdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaGVhZGVyIC5oZWFkZXItdGFnbGluZSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIEVORCAtIEhFQURFUiAqL1xcbi8qIEZPT1RFUiAqL1xcblxcbmZvb3RlciBhIHtcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1saW5rLWNvbG9yKTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEVORCAtIEZPT1RFUiAqL1xcblxcblxcbi8qIE1BSU4gKi9cXG5tYWluPi5wYWdlIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjAwcHgpO1xcblxcdGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG5cXHRncmlkLWdhcDogMnJlbTtcXG5cXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogU1dJVENIIFdJREdFVCAqL1xcbi5zd2l0Y2gtd2lkZ2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCA+IGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAzN3B4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGVhc2U7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZ1c2hpYSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXMgZWFzZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHNsaWRlciBwc2V1ZG8gZWxlbWVudCAqL1xcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgbGVmdDogMTlweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAyMDBtcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtM3B4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGxlZnQgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIH4gbGFiZWwgLm9mZixcXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBsYWJlbCAub24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIH4gbGFiZWwgLm9uLFxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGxhYmVsIC5vZmYge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBsYWJlbCBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcdC8qY3Vyc29yOiBwb2ludGVyOyovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEJPT0sgVElMRSAqL1xcblxcbi50aWxlIHtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1wdXJwbGUpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcblxcdC8qIG5lZWQgdG8gbWFrZSB0aGlzIG1vcmUgZHluYW1pYyAqL1xcblxcdGhlaWdodDogMjAwcHg7XFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcblxcdGJveC1zaGFkb3c6IDAgMCAjMDAwMCwgMCAwICMwMDAwLCAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcdFxcbn1cXG5cXG4udGlsZTpob3ZlciB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZnVzaGlhKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aWxlRm9udC10aXRsZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxufVxcblxcbi50aWxlRm9udC1ub3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBFTkQgLSBCT09LIFRJTEUgKi9cXG4vKiBBREQgQk9PSyBUSUxFICovXFxuLmFkZEJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyOiAzcHggc29saWQgbGlnaHRncmV5O1xcblxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRjb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uYWRkQnV0dG9uOmhvdmVyIHtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1mdXNoaWEpO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1mdXNoaWEpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRU5EIC0gQUREIEJPT0sgVElMRSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7QUFFZDtDQUNDLHFDQUFxQztDQUNyQyxtQkFBbUI7Q0FDbkIsYUFBYTs7Q0FFYixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxtQ0FBbUM7Q0FDbkMsYUFBYTtDQUNiLFlBQVk7O0NBRVosdUVBQXVFO0FBQ3hFOztBQUVBO0NBQ0MscUNBQXFDO0NBQ3JDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEI7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHVCQUF1Qjs7Q0FFdkIsMkJBQTJCOztDQUUzQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MscUNBQXFDO0NBQ3JDLDBCQUEwQjtDQUMxQixlQUFlO0FBQ2hCOztBQUVBLHdCQUF3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCT09LIFRJTEUgKi9cXG5cXG4udGlsZSB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItcHVycGxlKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG5cXHQvKiBuZWVkIHRvIG1ha2UgdGhpcyBtb3JlIGR5bmFtaWMgKi9cXG5cXHRoZWlnaHQ6IDIwMHB4O1xcblxcdHdpZHRoOiAyMDBweDtcXG5cXG5cXHRib3gtc2hhZG93OiAwIDAgIzAwMDAsIDAgMCAjMDAwMCwgMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHRcXG59XFxuXFxuLnRpbGU6aG92ZXIge1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWZ1c2hpYSk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGlsZUZvbnQtdGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0aGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4udGlsZUZvbnQtbm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogRU5EIC0gQk9PSyBUSUxFICovXFxuLyogQUREIEJPT0sgVElMRSAqL1xcbi5hZGRCdXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Z3JleTtcXG5cXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Y29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmFkZEJ1dHRvbjpob3ZlciB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZnVzaGlhKTtcXG5cXHRjb2xvcjogdmFyKC0tY29sb3ItZnVzaGlhKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEVORCAtIEFERCBCT09LIFRJTEUgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UnO1xuXG4vL2FwcCBjb250cm9sbGVyXG5leHBvcnQgZnVuY3Rpb24gbGlicmFyeSgpIHtcblx0bGV0IGJvb2tDb2xsZWN0aW9uID0gW107XG5cblx0Ym9va0NvbGxlY3Rpb24gPSBzdG9yYWdlLmdldExpYnJhcnkoKTtcblxuXHRjb25zdCBhZGQgPSAoYm9vaykgPT4ge1xuXHRcdGlmIChib29rQ29sbGVjdGlvbi5zb21lKGIgPT4gYi50aXRsZSA9PT0gYm9vay50aXRsZSkpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEJvb2sgd2l0aCB0aXRsZSBcIiR7Ym9vay50aXRsZX1cIiBhbHJlYWR5IGV4aXN0cyBpbiBsaWJyYXJ5LmApO1xuXG5cdFx0Ym9va0NvbGxlY3Rpb24ucHVzaChib29rKTtcblx0XHRzdG9yYWdlLnNhdmVMaWJyYXJ5KGJvb2tDb2xsZWN0aW9uKTtcblxuXHRcdGNvbnNvbGUubG9nKGBCb29rIGFkZGVkIHRvIGxpYnJhcnkuICR7Ym9vay5nZXREZXRhaWxzKCl9YCk7XG5cdH1cblx0XG5cdGNvbnN0IHJlbW92ZSA9IChib29rKSA9PiB7XG5cdFx0bGV0IGJvb2tJbmRleCA9IGJvb2tDb2xsZWN0aW9uLmluZGV4T2YoYm9vayk7XG5cblx0XHRpZiAoYm9va0luZGV4IDwgMCkgcmV0dXJuO1xuXG5cdFx0Ym9va0NvbGxlY3Rpb24uc3BsaWNlKGJvb2tJbmRleCwgMSk7XG5cdFx0c3RvcmFnZS5zYXZlTGlicmFyeShib29rQ29sbGVjdGlvbik7XG5cblx0XHRjb25zb2xlLmxvZyhgQm9vayByZW1vdmVkIGZyb20gbGlicmFyeS4gJHtib29rLmdldERldGFpbHMoKX1gKTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZSA9IChib29rLCBkZWx0YSkgPT4ge1xuXHRcdGlmIChkZWx0YS50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgVXBkYXRpbmcgdGl0bGUgXCIke2Jvb2sudGl0bGV9XCIgdG8gXCIke2RlbHRhLnRpdGxlfVwiYCk7XG5cdFx0XHRib29rLnRpdGxlID0gZGVsdGEudGl0bGU7XG5cdFx0fVxuXG5cdFx0aWYgKGRlbHRhLmF1dGhvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgVXBkYXRpbmcgYXV0aG9yIFwiJHtib29rLmF1dGhvcn1cIiB0byBcIiR7ZGVsdGEuYXV0aG9yfVwiYCk7XG5cdFx0XHRib29rLmF1dGhvciA9IGRlbHRhLmF1dGhvcjtcblx0XHR9XG5cblx0XHRpZiAoZGVsdGEucGFnZUNvdW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBVcGRhdGluZyBwYWdlIGNvdW50IFwiJHtib29rLnBhZ2VDb3VudH1cIiB0byBcIiR7ZGVsdGEucGFnZUNvdW50fVwiYCk7XG5cdFx0XHRib29rLnBhZ2VDb3VudCA9IGRlbHRhLnBhZ2VDb3VudDtcblx0XHR9XG5cblx0XHRpZiAoZGVsdGEucmVhZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgVXBkYXRpbmcgYm9vayByZWFkIHN0YXR1cyBcIiR7Ym9vay5yZWFkfVwiIHRvIFwiJHtkZWx0YS5yZWFkfVwiYCk7XG5cdFx0XHRib29rLnJlYWQgPSBkZWx0YS5yZWFkO1xuXHRcdH1cblxuXHRcdHN0b3JhZ2Uuc2F2ZUxpYnJhcnkoYm9va0NvbGxlY3Rpb24pO1xuXHR9XG5cblx0Y29uc3QgcHJpbnRDb2xsZWN0aW9uID0gKCkgPT4ge1xuXHRcdGlmIChib29rQ29sbGVjdGlvbiA8PSAwKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnTGlicmFyeSBpcyBlbXB0eSEnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZygncHJpbnRpbmcgbGlicmFyeS4uLicpO1xuXHRcdGJvb2tDb2xsZWN0aW9uLmZvckVhY2goYm9vayA9PiBjb25zb2xlLmxvZyhgXCIke2Jvb2sudGl0bGV9XCIgYnkgJHtib29rLmF1dGhvcn1gKSk7XG5cdH1cblxuXHRjb25zdCBnZXRCb29rQ29sbGVjdGlvbiA9ICgpID0+IHtcblx0XHRyZXR1cm4gYm9va0NvbGxlY3Rpb247XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGFkZCxcblx0XHRyZW1vdmUsXG5cdFx0dXBkYXRlLFxuXHRcdHByaW50Q29sbGVjdGlvbixcblx0XHRnZXRCb29rQ29sbGVjdGlvbixcblx0fVxufVxuXG4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vY3NzL3RpbGUuY3NzJztcbmltcG9ydCAnLi9jc3MvbW9kYWwuY3NzJztcbmltcG9ydCB7IHNjcmVlbkNvbnRyb2xsZXIgfSBmcm9tICcuL3NjcmVlbkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJy4vYXBwJztcbmltcG9ydCB7IGNyZWF0ZVRlc3REYXRhIH0gZnJvbSAnLi90ZXN0RGF0YSc7XG5cbmxldCBhcHAgPSBsaWJyYXJ5KCk7XG4vL2NyZWF0ZVRlc3REYXRhKGFwcCk7XG5cbmxldCBzYyA9IHNjcmVlbkNvbnRyb2xsZXIoYXBwKTtcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJvb2sodGl0bGUsIGF1dGhvciwgcGFnZUNvdW50LCByZWFkKSB7XG5cdGNvbnN0IGdldERldGFpbHMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGBUaXRsZTogXCIke3RpdGxlfVwiLCBBdXRob3I6IFwiJHthdXRob3J9XCIsIFBhZ2UgQ291bnQ6ICR7cGFnZUNvdW50fWA7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGdldERldGFpbHMsXG5cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGl0bGU7XG5cdFx0fSxcblxuXHRcdGdldCBhdXRob3IoKSB7XG5cdFx0XHRyZXR1cm4gYXV0aG9yO1xuXHRcdH0sXG5cblx0XHRnZXQgcGFnZUNvdW50KCkge1xuXHRcdFx0cmV0dXJuIHBhZ2VDb3VudDtcblx0XHR9LFxuXG5cdFx0Z2V0IHJlYWQoKSB7XG5cdFx0XHRyZXR1cm4gcmVhZDtcblx0XHR9LFxuXG5cdFx0c2V0IHRpdGxlKG5ld1RpdGxlKSB7XG5cdFx0XHRpZiAoIW5ld1RpdGxlKSByZXR1cm47XG5cdFx0XHRpZiAobmV3VGl0bGUgPT09ICcnKSByZXR1cm47XG5cblx0XHRcdHRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblxuXHRcdHNldCBhdXRob3IobmV3QXV0aG9yKSB7XG5cdFx0XHRpZiAoIW5ld0F1dGhvcikgcmV0dXJuO1xuXHRcdFx0aWYgKG5ld0F1dGhvciA9PT0gJycpIHJldHVybjtcblxuXHRcdFx0YXV0aG9yID0gbmV3QXV0aG9yO1xuXHRcdH0sXG5cblx0XHRzZXQgcGFnZUNvdW50KG5ld1BhZ2VDb3VudCkge1xuXHRcdFx0aWYgKHR5cGVvZiBuZXdQYWdlQ291bnQgIT09ICdudW1iZXInICYmIG5ld1BhZ2VDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgUGFnZSBDb3VudCBpbnZhbGlkLiBFeHBlY3RlZCAnbnVtYmVyJywgcmVjZWl2ZWQgJHt0eXBlb2YgbmV3UGFnZUNvdW50fWApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdQYWdlQ291bnQgPCAwKSAge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFBhZ2UgQ291bnQgaW52YWxpZC4gRXhwZWN0ZWQgcG9zaXRpdmUgbnVtYmVyLCByZWNlaXZlZCAke25ld1BhZ2VDb3VudH1gKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRwYWdlQ291bnQgPSBuZXdQYWdlQ291bnQ7XG5cdFx0fSxcblxuXHRcdHNldCByZWFkKHJlYWRTdGF0dXMpIHtcblx0XHRcdHJlYWQgPSByZWFkU3RhdHVzO1xuXHRcdH0sXG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBuZXdCb29rVGlsZSgpIHtcbiAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdib29rJywgJ3RpbGUnKTtcblxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZVRleHQuY2xhc3NMaXN0LmFkZCgndGlsZUZvbnQtdGl0bGUnLCAndGlsZS10aXRsZScpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuICAgIGNvbnN0IGF1dGhvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGF1dGhvclRleHQuY2xhc3NMaXN0LmFkZCgndGlsZUZvbnQtbm9ybWFsJywgJ3RpbGUtYXV0aG9yJyk7XG4gICAgdGlsZS5hcHBlbmRDaGlsZChhdXRob3JUZXh0KTtcbiAgICBcbiAgICBjb25zdCBwYWdlQ291bnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwYWdlQ291bnRUZXh0LmNsYXNzTGlzdC5hZGQoJ3RpbGVGb250LW5vcm1hbCcsICd0aWxlLXBhZ2VDb3VudCcpO1xuICAgIHRpbGUuYXBwZW5kQ2hpbGQocGFnZUNvdW50VGV4dCk7XG5cbiAgICB0aWxlLmFwcGVuZENoaWxkKG5ld1JlYWRTd2l0Y2goKSk7XG5cbiAgICByZXR1cm4gdGlsZTtcbn1cblxuZnVuY3Rpb24gbmV3UmVhZFN3aXRjaCgpIHtcbiAgICBjb25zdCBzd2l0Y2hXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0c3dpdGNoV2lkZ2V0LmNsYXNzTGlzdC5hZGQoJ3N3aXRjaC13aWRnZXQnKTtcblxuXHRjb25zdCBzd2l0Y2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdHN3aXRjaElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXHRzd2l0Y2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYm9va1JlYWQnKTtcblxuICAgIHN3aXRjaFdpZGdldC5hcHBlbmRDaGlsZChzd2l0Y2hJbnB1dCk7XG5cblx0Y29uc3Qgc3dpdGNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG5cdGNvbnN0IHJlYWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0cmVhZExhYmVsLnRleHRDb250ZW50ID0gJ1JlYWQnO1xuXHRyZWFkTGFiZWwuY2xhc3NMaXN0LmFkZCgnb24nKTtcblx0c3dpdGNoTGFiZWwuYXBwZW5kQ2hpbGQocmVhZExhYmVsKTtcblxuXHRjb25zdCBub3RSZWFkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdG5vdFJlYWRMYWJlbC50ZXh0Q29udGVudCA9ICdOb3QgcmVhZCc7XG5cdG5vdFJlYWRMYWJlbC5jbGFzc0xpc3QuYWRkKCdvZmYnKTtcblx0c3dpdGNoTGFiZWwuYXBwZW5kQ2hpbGQobm90UmVhZExhYmVsKTtcblxuXHRzd2l0Y2hXaWRnZXQuYXBwZW5kQ2hpbGQoc3dpdGNoTGFiZWwpO1xuXG5cdHJldHVybiBzd2l0Y2hXaWRnZXQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbmV3QWRkTW9kYWxCdXR0b25zKCkge1xuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmlkID0gJ21vZGFsLWJ1dHRvbnMnO1xuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTdWJtaXRCdXR0b24oJ2FkZCcpKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNhbmNlbEJ1dHRvbigpKTtcblxuICAgIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3VXBkYXRlTW9kYWxCdXR0b25zKCkge1xuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmlkID0gJ21vZGFsLWJ1dHRvbnMnO1xuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTdWJtaXRCdXR0b24oJ3VwZGF0ZScpKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNhbmNlbEJ1dHRvbigpKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVJlbW92ZUJ1dHRvbigpKTtcblxuICAgIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24odHlwZSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYnV0dG9uLmlkID0gJ21vZGFsLWFkZEJvb2snO1xuXG4gICAgaWYgKHR5cGUgPT09ICdhZGQnKSB7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAndXBkYXRlJykge1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVXBkYXRlJztcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYW5jZWxCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSAnbW9kYWwtY2FuY2VsJztcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZW1vdmVCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSAnbW9kYWwtcmVtb3ZlQm9vayc7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufSIsImltcG9ydCB7IGJvb2sgYXMgbmV3Qm9vayB9IGZyb20gJy4vYm9vayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTGlicmFyeShib29rQ29sbGVjdGlvbikge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9va0NvbGxlY3Rpb24nLCBKU09OLnN0cmluZ2lmeShib29rQ29sbGVjdGlvbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlicmFyeSgpIHtcblx0bGV0IGJvb2tDb2xsZWN0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va0NvbGxlY3Rpb24nKSB8fCAnW10nKTtcblx0Ym9va0NvbGxlY3Rpb24gPSBib29rQ29sbGVjdGlvbi5tYXAoYm9vayA9PiBcblx0XHRPYmplY3QuYXNzaWduKG5ld0Jvb2soKSwgYm9vaylcblx0KTtcblxuXHRyZXR1cm4gYm9va0NvbGxlY3Rpb247XG59XG4iLCJpbXBvcnQgeyBuZXdCb29rVGlsZSB9IGZyb20gJy4vbW9kdWxlcy9ib29rVGlsZSc7XG5pbXBvcnQgeyBib29rIH0gZnJvbSAnLi9tb2R1bGVzL2Jvb2snO1xuaW1wb3J0IHsgbmV3QWRkTW9kYWxCdXR0b25zLCBuZXdVcGRhdGVNb2RhbEJ1dHRvbnMgfSBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xuXG5leHBvcnQgY29uc3Qgc2NyZWVuQ29udHJvbGxlciA9IChhcHBsaWNhdGlvbikgPT4ge1xuXHRjb25zdCBsaWJyYXJ5ID0gYXBwbGljYXRpb247XG5cblx0Y29uc3QgbGlicmFyeUxpc3QgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IGxpYnJhcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpYnJhcnlMaXN0Jyk7XG5cblx0XHRjb25zdCBhZGRCb29rQnV0dG9uID0gbGlicmFyeUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbGUuYWRkQnV0dG9uJyk7XG5cdFx0YWRkQm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gb3Blbk1vZGFsKCkpO1xuXG5cdFx0bGlicmFyeS5nZXRCb29rQ29sbGVjdGlvbigpLmZvckVhY2goYm9vayA9PiB7XG5cdFx0XHRsZXQgYm9va1RpbGUgPSBjcmVhdGVCb29rVGlsZShib29rKTtcblx0XHRcdGluc2VydEJvb2tUaWxlKGJvb2tUaWxlKTtcblx0XHR9KTtcblxuXHRcdGZ1bmN0aW9uIGNyZWF0ZUJvb2tUaWxlKGJvb2spIHtcblx0XHRcdGxldCBib29rVGlsZSA9IG5ld0Jvb2tUaWxlKCk7XG5cblx0XHRcdGNvbnN0IHRpbGVUaXRsZSA9IGJvb2tUaWxlLnF1ZXJ5U2VsZWN0b3IoJy50aWxlLXRpdGxlJyk7XG5cdFx0XHRjb25zdCB0aWxlQXV0aG9yID0gYm9va1RpbGUucXVlcnlTZWxlY3RvcignLnRpbGUtYXV0aG9yJyk7XG5cdFx0XHRjb25zdCB0aWxlUGFnZUNvdW50ID0gYm9va1RpbGUucXVlcnlTZWxlY3RvcignLnRpbGUtcGFnZUNvdW50Jyk7XG5cdFx0XHRjb25zdCB0aWxlUmVhZFN0YXRlID0gYm9va1RpbGUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cblx0XHRcdHRpbGVUaXRsZS50ZXh0Q29udGVudCA9IGJvb2sudGl0bGU7XG5cdFx0XHR0aWxlQXV0aG9yLnRleHRDb250ZW50ID0gYm9vay5hdXRob3I7XG5cdFx0XHR0aWxlUGFnZUNvdW50LnRleHRDb250ZW50ID0gYm9vay5wYWdlQ291bnQ7XG5cdFx0XHR0aWxlUmVhZFN0YXRlLmNoZWNrZWQgPSBib29rLnJlYWQ7XG5cblx0XHRcdGJvb2tUaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBvcGVuTW9kYWwoYm9vaywgYm9va1RpbGUpKTtcblxuXHRcdFx0bGV0IHJlYWRTd2l0Y2ggPSBib29rVGlsZS5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLXdpZGdldCBpbnB1dFtuYW1lPVwiYm9va1JlYWRcIl0nKTtcblx0XHRcdHJlYWRTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuXHRcdFx0cmVhZFN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHRvZ2dsZVJlYWQoZSwgYm9vaykpO1xuXG5cdFx0XHRyZXR1cm4gYm9va1RpbGU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdG9nZ2xlUmVhZChlLCBib29rT2JqKSB7XG5cdFx0XHRsZXQgYm9va0RlbHRhID0gYm9vaygpO1xuXHRcdFx0Ym9va0RlbHRhLnJlYWQgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZDtcblx0XHRcdGxpYnJhcnkudXBkYXRlKGJvb2tPYmosIGJvb2tEZWx0YSk7XG5cblx0XHRcdGJvb2tPYmoucmVhZCA9IGUuY3VycmVudFRhcmdldC5jaGVja2VkO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGluc2VydEJvb2tUaWxlKGJvb2tUaWxlKSB7XG5cdFx0XHRsaWJyYXJ5RWxlbWVudC5pbnNlcnRCZWZvcmUoYm9va1RpbGUsIGFkZEJvb2tCdXR0b24pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9wZW5Nb2RhbChib29rT2JqLCBib29rVGlsZSkge1xuXHRcdFx0Y29uc3QgbW9kYWxEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblx0XHRcdGNvbnN0IG1vZGFsRGlhbG9nVGl0bGUgPSBtb2RhbERpYWxvZy5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtdGl0bGUnKTtcblx0XHRcdGNvbnN0IG1vZGFsRGlhbG9nRm9ybSA9IG1vZGFsRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCBmb3JtJyk7XG5cdFx0XHRcblx0XHRcdGFkZE1vZGFsQnV0dG9ucyhib29rT2JqLCBtb2RhbERpYWxvZ0Zvcm0pO1xuXHRcdFx0aW5pdGlhbGlzZUNhbmNlbEJ1dHRvbihtb2RhbERpYWxvZ0Zvcm0pO1xuXHRcdFx0XG5cdFx0XHRpZiAoYm9va09iaiAhPT0gdW5kZWZpbmVkKSB7XHQvLyB1cGRhdGUgYm9va1xuXHRcdFx0XHRtb2RhbERpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gJ1VwZGF0ZSBCb29rJztcblx0XHRcdFx0cG9wdWxhdGVGb3JtSW5wdXRzKGJvb2tPYmosIG1vZGFsRGlhbG9nRm9ybSk7XG5cblx0XHRcdFx0aW5pdGlhbGlzZVJlbW92ZUJ1dHRvbihtb2RhbERpYWxvZywgYm9va09iaiwgYm9va1RpbGUpO1xuXG5cdFx0XHRcdG1vZGFsRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcblx0XHRcdFx0XHRsZXQgYm9va0RlbHRhID0gdXBkYXRlQm9va09iaihtb2RhbERpYWxvZ0Zvcm0sIGJvb2tPYmopO1xuXHRcdFx0XHRcdGxpYnJhcnkudXBkYXRlKGJvb2tPYmosIGJvb2tEZWx0YSk7XG5cdFxuXHRcdFx0XHRcdGxldCB1cGRhdGVkQm9va1RpbGUgPSBjcmVhdGVCb29rVGlsZShib29rT2JqKTtcblx0XHRcdFx0XHRib29rVGlsZS5yZXBsYWNlV2l0aCh1cGRhdGVkQm9va1RpbGUpO1xuXHRcblx0XHRcdFx0XHRjbG9zZU1vZGFsKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcdC8vIGFkZCBib29rXG5cdFx0XHRcdG1vZGFsRGlhbG9nVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIEJvb2snO1xuXHRcdFx0XHRwb3B1bGF0ZUZvcm1JbnB1dHMoYm9vaygnJywnJyksIG1vZGFsRGlhbG9nRm9ybSk7XG5cblx0XHRcdFx0bW9kYWxEaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuXHRcdFx0XHRcdGFkZEJvb2sobW9kYWxEaWFsb2dGb3JtKTtcblx0XHRcdFx0XHRjbG9zZU1vZGFsKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRtb2RhbERpYWxvZy5zaG93TW9kYWwoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhZGRNb2RhbEJ1dHRvbnMoYm9va09iaiwgZm9ybSkge1xuXHRcdFx0Y29uc3QgbW9kYWxCdXR0b25zQ29udGFpbmVyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYnV0dG9ucycpO1xuXG5cdFx0XHRpZiAoYm9va09iaiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG1vZGFsQnV0dG9uc0NvbnRhaW5lciA9PT0gbnVsbCA/IGZvcm0uYXBwZW5kQ2hpbGQobmV3QWRkTW9kYWxCdXR0b25zKCkpOiBtb2RhbEJ1dHRvbnNDb250YWluZXIucmVwbGFjZVdpdGgobmV3QWRkTW9kYWxCdXR0b25zKCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bW9kYWxCdXR0b25zQ29udGFpbmVyID09PSBudWxsID8gZm9ybS5hcHBlbmRDaGlsZChuZXdVcGRhdGVNb2RhbEJ1dHRvbnMoKSk6IG1vZGFsQnV0dG9uc0NvbnRhaW5lci5yZXBsYWNlV2l0aChuZXdVcGRhdGVNb2RhbEJ1dHRvbnMoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcG9wdWxhdGVGb3JtSW5wdXRzKGJvb2tPYmosIGZvcm0pIHtcblx0XHRcdGNvbnN0IHRpdGxlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJib29rVGl0bGVcIl0nKTtcblx0XHRcdGNvbnN0IGF1dGhvcklucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va0F1dGhvclwiXScpO1xuXHRcdFx0Y29uc3QgcGFnZUNvdW50SW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJib29rUGFnZUNvdW50XCJdJyk7XG5cdFx0XHRjb25zdCByZWFkU3RhdHVzQ2hlY2tCb3ggPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJib29rUmVhZFwiXScpO1xuXG5cdFx0XHR0aXRsZUlucHV0LnZhbHVlID0gYm9va09iai50aXRsZTtcblx0XHRcdGF1dGhvcklucHV0LnZhbHVlID0gYm9va09iai5hdXRob3I7XG5cdFx0XHRwYWdlQ291bnRJbnB1dC52YWx1ZSA9IGJvb2tPYmoucGFnZUNvdW50O1xuXHRcdFx0cmVhZFN0YXR1c0NoZWNrQm94LmNoZWNrZWQgPSBib29rT2JqLnJlYWQ7XG5cblx0XHRcdGFkZFZhbGlkYXRpb25NZXNzYWdlcyhmb3JtKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbml0aWFsaXNlUmVtb3ZlQnV0dG9uKG1vZGFsRWxlbWVudCwgYm9vaywgYm9va1RpbGUpIHtcblx0XHRcdGNvbnN0IHJlbW92ZUJ1dHRvbiA9IG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtcmVtb3ZlQm9vaycpO1xuXG5cblx0XHRcdHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0XHRsaWJyYXJ5LnJlbW92ZShib29rKTtcblx0XHRcdFx0Ym9va1RpbGUucmVtb3ZlKCk7XG5cdFx0XHRcdGNsb3NlTW9kYWwoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpc2VDYW5jZWxCdXR0b24oZm9ybSkge1xuXHRcdFx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY2FuY2VsJyk7XG5cdFx0XHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGNsb3NlTW9kYWwoKSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkQm9vayhmb3JtKSB7XG5cdFx0XHRjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1RpdGxlXCJdJyk7XG5cdFx0XHRjb25zdCBhdXRob3JJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tBdXRob3JcIl0nKTtcblx0XHRcdGNvbnN0IHBhZ2VDb3VudElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1BhZ2VDb3VudFwiXScpO1xuXHRcdFx0Y29uc3QgcmVhZFN0YXR1c0NoZWNrQm94ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1JlYWRcIl0nKTtcblxuXHRcdFx0bGV0IG5ld0Jvb2sgPSBib29rKHRpdGxlSW5wdXQudmFsdWUsIGF1dGhvcklucHV0LnZhbHVlLCBwYXJzZUludChwYWdlQ291bnRJbnB1dC52YWx1ZSksIHJlYWRTdGF0dXNDaGVja0JveC5jaGVja2VkKTtcblx0XHRcdGxpYnJhcnkuYWRkKG5ld0Jvb2spO1xuXG5cdFx0XHRsZXQgbmV3Qm9va1RpbGUgPSBjcmVhdGVCb29rVGlsZShuZXdCb29rKTtcblx0XHRcdGluc2VydEJvb2tUaWxlKG5ld0Jvb2tUaWxlKTtcblx0XHR9XG5cdFx0XG5cdFx0ZnVuY3Rpb24gdXBkYXRlQm9va09iaihmb3JtLCBib29rT2JqKSB7XG5cdFx0XHRjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1RpdGxlXCJdJyk7XG5cdFx0XHRjb25zdCBhdXRob3JJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tBdXRob3JcIl0nKTtcblx0XHRcdGNvbnN0IHBhZ2VDb3VudElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1BhZ2VDb3VudFwiXScpO1xuXHRcdFx0Y29uc3QgcmVhZFN0YXR1c0NoZWNrQm94ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1JlYWRcIl0nKTtcblxuXHRcdFx0Y29uc3QgYm9va0RlbHRhID0gYm9vaygpO1xuXHRcdFx0XG5cdFx0XHRib29rRGVsdGEudGl0bGUgPSBib29rT2JqLnRpdGxlICE9PSB0aXRsZUlucHV0LnZhbHVlID9cblx0XHRcdFx0dGl0bGVJbnB1dC52YWx1ZSA6IHVuZGVmaW5lZDtcblx0XHRcdGJvb2tEZWx0YS5hdXRob3IgPSBib29rT2JqLmF1dGhvciAhPT0gYXV0aG9ySW5wdXQudmFsdWUgP1xuXHRcdFx0XHRhdXRob3JJbnB1dC52YWx1ZSA6IHVuZGVmaW5lZDtcblx0XHRcdGJvb2tEZWx0YS5wYWdlQ291bnQgPSBib29rT2JqLnBhZ2VDb3VudCAhPT0gcGFyc2VJbnQocGFnZUNvdW50SW5wdXQudmFsdWUpID9cblx0XHRcdFx0cGFyc2VJbnQocGFnZUNvdW50SW5wdXQudmFsdWUpIDogdW5kZWZpbmVkO1xuXHRcdFx0Ym9va0RlbHRhLnJlYWQgPSBib29rT2JqLnJlYWQgIT09IHJlYWRTdGF0dXNDaGVja0JveC5jaGVja2VkID9cblx0XHRcdFx0cmVhZFN0YXR1c0NoZWNrQm94LmNoZWNrZWQgOiB1bmRlZmluZWQ7XG5cblx0XHRcdHJldHVybiBib29rRGVsdGE7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkVmFsaWRhdGlvbk1lc3NhZ2VzKGZvcm0pIHtcblx0XHRcdGNvbnN0IHRpdGxlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJib29rVGl0bGVcIl0nKTtcblx0XHRcdGNvbnN0IGF1dGhvcklucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va0F1dGhvclwiXScpO1xuXHRcdFx0Y29uc3QgcGFnZUNvdW50SW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJib29rUGFnZUNvdW50XCJdJyk7XG5cblx0XHRcdGFkZFRpdGxlVmFsaWRhdGlvbk1lc3NhZ2UodGl0bGVJbnB1dCk7XG5cdFx0XHRhZGRBdXRob3JWYWxpZGF0aW9uTWVzc2FnZShhdXRob3JJbnB1dCk7XG5cdFx0XHRhZGRQYWdlQ291bnRWYWxpZGF0aW9uTWVzc2FnZShwYWdlQ291bnRJbnB1dCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkVGl0bGVWYWxpZGF0aW9uTWVzc2FnZSh0aXRsZUlucHV0KSB7XG5cdFx0XHRpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gdW5kZWZpbmVkKSBcblx0XHRcdFx0dGl0bGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIHRoZSBib29rIHRpdGxlLicpO1xuXG5cdFx0XHR0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuXHRcdFx0XHRpZiAodGl0bGVJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcblx0XHRcdFx0XHR0aXRsZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgdGhlIGJvb2sgdGl0bGUuJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZEF1dGhvclZhbGlkYXRpb25NZXNzYWdlKGF1dGhvcklucHV0KSB7XG5cdFx0XHRpZiAoYXV0aG9ySW5wdXQudmFsdWUgPT09IHVuZGVmaW5lZClcblx0XHRcdFx0YXV0aG9ySW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhbiBhdXRob3IuJyk7XG5cblx0XHRcdGF1dGhvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuXHRcdFx0XHRpZiAoYXV0aG9ySW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG5cdFx0XHRcdFx0YXV0aG9ySW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhbiBhdXRob3IuJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYXV0aG9ySW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG5cdFx0XHRcdFx0YXV0aG9ySW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0F1dGhvciBuYW1lIGNhbm5vdCBjb250YWluIG51bWJlcnMuJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXV0aG9ySW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhZGRQYWdlQ291bnRWYWxpZGF0aW9uTWVzc2FnZShwYWdlQ291bnRJbnB1dCkge1xuXHRcdFx0aWYgKHBhZ2VDb3VudElucHV0LnZhbHVlID09PSB1bmRlZmluZWQpXG5cdFx0XHRcdHBhZ2VDb3VudElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgdGhlIG51bWJlciBvZiBwYWdlcy4nKTtcblxuXHRcdFx0cGFnZUNvdW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG5cdFx0XHRcdGlmIChwYWdlQ291bnRJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcblx0XHRcdFx0XHRwYWdlQ291bnRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIHRoZSBudW1iZXIgb2YgcGFnZXMuJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGFnZUNvdW50SW5wdXQudmFsaWRpdHkucmFuZ2VVbmRlcmZsb3cpIHtcblx0XHRcdFx0XHRwYWdlQ291bnRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwLicpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhZ2VDb3VudElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcblx0XHRcdGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cblx0XHRcdG1vZGFsRGlhbG9nLmNsb3NlKCk7XG5cdFx0fVxuXHR9KSgpO1xufVxuIiwiaW1wb3J0IHsgYm9vayBhcyBuZXdCb29rIH0gZnJvbSAnLi9tb2R1bGVzL2Jvb2snO1xuXG5jb25zdCBib29rTGlzdCA9IFtcIkhhcnJ5IFBvdHRlciBhbmQgdGhlIFBoaWxvc29waGVyJ3MgU3RvbmVcIiwgXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBDaGFtYmVyIG9mIFNlY3JldHNcIiwgXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBQcmlzb25lciBvZiBBemthYmFuXCIsIFwiSGFycnkgUG90dGVyIGFuZCB0aGUgR29ibGV0IG9mIEZpcmVcIiwgXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBPcmRlciBvZiB0aGUgUGhlb25peFwiLCBcIkhhcnJ5IFBvdHRlciBhbmQgdGhlIEhhbGYgQm9vZC1QcmluY2VcIiwgXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBEZWF0aGx5IEhhbGxvd3NcIl07XG5cbmNvbnN0IHBhZ2VDb3VudHMgPSBbMzA5LCAzNDEsIDQzNSwgNzM0LCA4NzAsIDY1MiwgNzU5XTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRlc3REYXRhKGFwcCkge1xuXHRjb25zb2xlLmxvZygnQ3JlYXRpbmcgdGVzdCBkYXRhLi4uJyk7XG5cblx0Ym9va0xpc3QuZm9yRWFjaCh0aXRsZSA9PiB7XG5cdFx0bGV0IGJvb2sgPSBuZXdCb29rKHRpdGxlLCAnSi5LIFJvd2xpbmcnLCBwYWdlQ291bnRzW2Jvb2tMaXN0LmluZGV4T2YodGl0bGUpXSwgZmFsc2UpO1xuXG5cdFx0YXBwLmFkZChib29rKTtcblx0fSk7XG5cblx0Y29uc29sZS5sb2coJ1Rlc3QgZGF0YSBjcmVhdGVkIScpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=