"use strict";
(self["webpackChunklibrary"] = self["webpackChunklibrary"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t--color-purple: #004aad;\n\t--color-fushia: #cb6ce6;\n\t--color-green: rgb(147, 220, 0);\n\t--bg-gradient: linear-gradient(to right, var(--color-purple), var(--color-fushia));\n\t--accent-font-color: #f1f1f1;\n\t--font-link-color: #ff914d;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100svh;\n}\n\nmain {\n\tdisplay: flex;\n\tflex: 1 1 auto;\n}\n\n/* PAGE */\n.page {\n\twidth: clamp(350px, 80vw, 1200px);\n}\n\nheader,\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 2rem;\n}\n\n/* END - PAGE */\n/* HEADER */\n\nheader,\nfooter {\n\tbackground: var(--bg-gradient);\n\tcolor: var(--accent-font-color);\n}\n\nheader .page {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\nheader .header-title {\n\tfont-size: 3rem;\n\tfont-weight: bold;\n}\n\nheader .header-tagline {\n\tfont-size: 1.5rem;\n}\n\n/* END - HEADER */\n/* FOOTER */\n\nfooter a {\n\tcolor: var(--font-link-color);\n\ttext-decoration: none;\n}\n\n/* END - FOOTER */\n\n/* BOOK TILE */\n\n.tile {\n\tborder: 3px solid var(--color-purple);\n\tborder-radius: 10px;\n\tpadding: 1rem;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\t/* need to make this more dynamic */\n\theight: 200px;\n\twidth: 200px;\n}\n\n.tile:hover {\n\tborder: 3px solid var(--color-fushia);\n\tcursor: pointer;\n}\n\n.tileFont-title {\n\tfont-weight: bolder;\n\tfont-size: 1.2rem;\n\theight: 4rem;\n}\n\n.tileFont-normal {\n\tfont-weight: normal;\n\tfont-size: 1rem;\n}\n\n/* END - BOOK TILE */\n/* ADD BOOK TILE */\n.addButton {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\n\tborder: 3px solid lightgrey;\n\n\tfont-size: 3rem;\n\tcolor: lightgrey;\n}\n\n.addButton:hover {\n\tborder: 3px solid var(--color-fushia);\n\tcolor: var(--color-fushia);\n\tcursor: pointer;\n}\n\n/* END - ADD BOOK TILE */\n/* MAIN */\nmain>.page {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 200px);\n\tgrid-auto-rows: max-content;\n\tgrid-gap: 2rem;\n\n\tjustify-content: center;\n}\n\n/* MODAL WIDGET */\n.modal-widget {\n\tposition: fixed;\n\theight: 100vh;\n\twidth: 100vw;\n\tz-index: 1;\t\n}\n\n.modal-widget .overlay {\n\tbackdrop-filter: blur(3px) opacity(1);\n\theight: 100%;\n\twidth: 100%;\n}\n\n.modal-dialog {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\t/* width: 25vw; */\n\twidth: clamp(400px, 25vw, 600px);\n\tz-index: 2;\n\tpadding: 1rem 2rem;\n\n\tborder: 3px solid var(--color-purple);\n\ttransition: border 500ms ease-in-out;\n\tborder-radius: 10px;\n\tbackground-color: white;\n}\n\n.modal-dialog:hover {\n\tborder: 3px solid var(--color-fushia);\n}\n\n\n.modal-widget .dialog.title {\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n}\n\n.modal-widget form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.modal-widget .inputItem {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.inputItem input {\n\twidth: 60%;\n\theight: 2rem;\n\n\tfont-size: 1rem;\n\tpadding: 5px;\n\tborder: none;\n\tborder-bottom: 2px solid var(--color-purple);\n\ttransition: border-bottom 250ms ease-in-out;\n\ttext-overflow: ellipsis;\n\toutline: none;\n\n\t-moz-appearance: textfield;\n}\n\n.inputItem input:focus {\n\tborder-bottom: 2px solid var(--color-fushia);\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n}\n\n/* END - MODAL WIDGET */\n/* SWITCH WIDGET */\n.switch-widget {\n    display: flex;\n    align-items: center;\n\tflex-direction: row-reverse;\n\tjustify-content: space-between;\n}\n\n.switch-widget > label {\n    display: flex;\n    align-items: center;\n}\n\n.switch-widget input[type=\"checkbox\"] {\n    appearance: none;\n    width: 37px;\n    height: 12px;\n    border-radius: 15px;\n    background-color: lightgrey;\n    position: relative;\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]:checked {\n\tbackground-color: var(--color-fushia);\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n/* slider pseudo element */\n.switch-widget input[type=\"checkbox\"]:checked::before {\n    left: 19px;\n\tbackground-color: white;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]::before {\n    width: 16px;\n    height: 16px;\n    border: 1px solid lightgrey;\n    border-radius: 50%;\n    background-color: white;\n    content: '';\n    position: absolute;\n    top: -3px;\n    left: 0px;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .off,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .on {\n    opacity: 1;\n    transition: opacity 100ms;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .on,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .off {\n    opacity: 0;\n    transition: opacity 100ms;\n}\n\n.switch-widget label span {\n    position: absolute;\n\t/*cursor: pointer;*/\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;CACC,mJAAmJ;CACnJ,uBAAuB;CACvB,uBAAuB;CACvB,+BAA+B;CAC/B,kFAAkF;CAClF,4BAA4B;CAC5B,0BAA0B;AAC3B;;AAEA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,cAAc;AACf;;AAEA,SAAS;AACT;CACC,iCAAiC;AAClC;;AAEA;;;CAGC,aAAa;CACb,uBAAuB;CACvB,aAAa;AACd;;AAEA,eAAe;AACf,WAAW;;AAEX;;CAEC,8BAA8B;CAC9B,+BAA+B;AAChC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA,iBAAiB;AACjB,WAAW;;AAEX;CACC,6BAA6B;CAC7B,qBAAqB;AACtB;;AAEA,iBAAiB;;AAEjB,cAAc;;AAEd;CACC,qCAAqC;CACrC,mBAAmB;CACnB,aAAa;;CAEb,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,mCAAmC;CACnC,aAAa;CACb,YAAY;AACb;;AAEA;CACC,qCAAqC;CACrC,eAAe;AAChB;;AAEA;CACC,mBAAmB;CACnB,iBAAiB;CACjB,YAAY;AACb;;AAEA;CACC,mBAAmB;CACnB,eAAe;AAChB;;AAEA,oBAAoB;AACpB,kBAAkB;AAClB;CACC,aAAa;CACb,kBAAkB;CAClB,uBAAuB;;CAEvB,2BAA2B;;CAE3B,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,qCAAqC;CACrC,0BAA0B;CAC1B,eAAe;AAChB;;AAEA,wBAAwB;AACxB,SAAS;AACT;CACC,aAAa;CACb,+CAA+C;CAC/C,2BAA2B;CAC3B,cAAc;;CAEd,uBAAuB;AACxB;;AAEA,iBAAiB;AACjB;CACC,eAAe;CACf,aAAa;CACb,YAAY;CACZ,UAAU;AACX;;AAEA;CACC,qCAAqC;CACrC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,eAAe;CACf,QAAQ;CACR,SAAS;CACT,gCAAgC;CAChC,iBAAiB;CACjB,gCAAgC;CAChC,UAAU;CACV,kBAAkB;;CAElB,qCAAqC;CACrC,oCAAoC;CACpC,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,qCAAqC;AACtC;;;AAGA;CACC,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,UAAU;CACV,YAAY;;CAEZ,eAAe;CACf,YAAY;CACZ,YAAY;CACZ,4CAA4C;CAC5C,2CAA2C;CAC3C,uBAAuB;CACvB,aAAa;;CAEb,0BAA0B;AAC3B;;AAEA;CACC,4CAA4C;AAC7C;;AAEA;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA,uBAAuB;AACvB,kBAAkB;AAClB;IACI,aAAa;IACb,mBAAmB;CACtB,2BAA2B;CAC3B,8BAA8B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,uCAAuC;CAC1C,eAAe;AAChB;;AAEA;CACC,qCAAqC;IAClC,uCAAuC;CAC1C,eAAe;AAChB;;AAEA,0BAA0B;AAC1B;IACI,UAAU;CACb,uBAAuB;IACpB,kCAAkC;CACrC,eAAe;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,kCAAkC;CACrC,eAAe;AAChB;;AAEA;;IAEI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;;IAEI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;CACrB,mBAAmB;AACpB","sourcesContent":[":root {\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t--color-purple: #004aad;\n\t--color-fushia: #cb6ce6;\n\t--color-green: rgb(147, 220, 0);\n\t--bg-gradient: linear-gradient(to right, var(--color-purple), var(--color-fushia));\n\t--accent-font-color: #f1f1f1;\n\t--font-link-color: #ff914d;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100svh;\n}\n\nmain {\n\tdisplay: flex;\n\tflex: 1 1 auto;\n}\n\n/* PAGE */\n.page {\n\twidth: clamp(350px, 80vw, 1200px);\n}\n\nheader,\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 2rem;\n}\n\n/* END - PAGE */\n/* HEADER */\n\nheader,\nfooter {\n\tbackground: var(--bg-gradient);\n\tcolor: var(--accent-font-color);\n}\n\nheader .page {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\nheader .header-title {\n\tfont-size: 3rem;\n\tfont-weight: bold;\n}\n\nheader .header-tagline {\n\tfont-size: 1.5rem;\n}\n\n/* END - HEADER */\n/* FOOTER */\n\nfooter a {\n\tcolor: var(--font-link-color);\n\ttext-decoration: none;\n}\n\n/* END - FOOTER */\n\n/* BOOK TILE */\n\n.tile {\n\tborder: 3px solid var(--color-purple);\n\tborder-radius: 10px;\n\tpadding: 1rem;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\t/* need to make this more dynamic */\n\theight: 200px;\n\twidth: 200px;\n}\n\n.tile:hover {\n\tborder: 3px solid var(--color-fushia);\n\tcursor: pointer;\n}\n\n.tileFont-title {\n\tfont-weight: bolder;\n\tfont-size: 1.2rem;\n\theight: 4rem;\n}\n\n.tileFont-normal {\n\tfont-weight: normal;\n\tfont-size: 1rem;\n}\n\n/* END - BOOK TILE */\n/* ADD BOOK TILE */\n.addButton {\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n\n\tborder: 3px solid lightgrey;\n\n\tfont-size: 3rem;\n\tcolor: lightgrey;\n}\n\n.addButton:hover {\n\tborder: 3px solid var(--color-fushia);\n\tcolor: var(--color-fushia);\n\tcursor: pointer;\n}\n\n/* END - ADD BOOK TILE */\n/* MAIN */\nmain>.page {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 200px);\n\tgrid-auto-rows: max-content;\n\tgrid-gap: 2rem;\n\n\tjustify-content: center;\n}\n\n/* MODAL WIDGET */\n.modal-widget {\n\tposition: fixed;\n\theight: 100vh;\n\twidth: 100vw;\n\tz-index: 1;\t\n}\n\n.modal-widget .overlay {\n\tbackdrop-filter: blur(3px) opacity(1);\n\theight: 100%;\n\twidth: 100%;\n}\n\n.modal-dialog {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\t/* width: 25vw; */\n\twidth: clamp(400px, 25vw, 600px);\n\tz-index: 2;\n\tpadding: 1rem 2rem;\n\n\tborder: 3px solid var(--color-purple);\n\ttransition: border 500ms ease-in-out;\n\tborder-radius: 10px;\n\tbackground-color: white;\n}\n\n.modal-dialog:hover {\n\tborder: 3px solid var(--color-fushia);\n}\n\n\n.modal-widget .dialog.title {\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n}\n\n.modal-widget form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.modal-widget .inputItem {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.inputItem input {\n\twidth: 60%;\n\theight: 2rem;\n\n\tfont-size: 1rem;\n\tpadding: 5px;\n\tborder: none;\n\tborder-bottom: 2px solid var(--color-purple);\n\ttransition: border-bottom 250ms ease-in-out;\n\ttext-overflow: ellipsis;\n\toutline: none;\n\n\t-moz-appearance: textfield;\n}\n\n.inputItem input:focus {\n\tborder-bottom: 2px solid var(--color-fushia);\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n}\n\n/* END - MODAL WIDGET */\n/* SWITCH WIDGET */\n.switch-widget {\n    display: flex;\n    align-items: center;\n\tflex-direction: row-reverse;\n\tjustify-content: space-between;\n}\n\n.switch-widget > label {\n    display: flex;\n    align-items: center;\n}\n\n.switch-widget input[type=\"checkbox\"] {\n    appearance: none;\n    width: 37px;\n    height: 12px;\n    border-radius: 15px;\n    background-color: lightgrey;\n    position: relative;\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]:checked {\n\tbackground-color: var(--color-fushia);\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n/* slider pseudo element */\n.switch-widget input[type=\"checkbox\"]:checked::before {\n    left: 19px;\n\tbackground-color: white;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]::before {\n    width: 16px;\n    height: 16px;\n    border: 1px solid lightgrey;\n    border-radius: 50%;\n    background-color: white;\n    content: '';\n    position: absolute;\n    top: -3px;\n    left: 0px;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .off,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .on {\n    opacity: 1;\n    transition: opacity 100ms;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .on,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .off {\n    opacity: 0;\n    transition: opacity 100ms;\n}\n\n.switch-widget label span {\n    position: absolute;\n\t/*cursor: pointer;*/\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/book */ "./src/modules/book.js");


//app controller
function library() {
	const bookCollection = [];

	const add = (book) => {
		if (bookCollection.some(b => b.title === book.title))
			throw new Error(`Book with title "${book.title}" already exists in library.`);

		bookCollection.push(book);

		console.log(`Book added to library. ${book.getDetails()}`);
	}
	
	const remove = (book) => {
		let bookIndex = bookCollection.indexOf(book);

		if (bookIndex < 0) return;

		bookCollection.splice(bookIndex, 1);

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

		// storage.save
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
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _testData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testData */ "./src/testData.js");





let app = (0,_app__WEBPACK_IMPORTED_MODULE_2__.library)();
(0,_testData__WEBPACK_IMPORTED_MODULE_3__.createTestData)(app);

let sc = (0,_screenController__WEBPACK_IMPORTED_MODULE_1__.screenController)(app);



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
				throw new Error(`Page Count invalid. Expected positive number, recieved ${newPageCount}`);
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

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookTileElement": () => (/* binding */ bookTileElement),
/* harmony export */   "footerElement": () => (/* binding */ footerElement),
/* harmony export */   "headerElement": () => (/* binding */ headerElement),
/* harmony export */   "libraryElement": () => (/* binding */ libraryElement),
/* harmony export */   "modifyBookModal": () => (/* binding */ modifyBookModal)
/* harmony export */ });
const headerElement = () => {
	const element = document.createElement('header');

	const page = document.createElement('div');
	page.classList.add('page');
	element.appendChild(page);

	const headerTitle = document.createElement('p');
	headerTitle.textContent = 'My Library';
	headerTitle.classList.add('header-title');
	page.appendChild(headerTitle);

	const headerTagline = document.createElement('p');
	headerTagline.textContent = 'Books I have read and planned to read';
	headerTagline.classList.add('header-tagline');
	page.appendChild(headerTagline);

	return element;
}

const libraryElement = () => {
	const element = document.createElement('main');

	const page = document.createElement('div');
	page.classList.add('page');
	element.appendChild(page);

	const addBookTile = document.createElement('div');
	addBookTile.classList.add('tile', 'addButton');
	addBookTile.textContent = '+';
	page.appendChild(addBookTile);

	return element;
}

const footerElement = () => {
	const element = document.createElement('footer');

	const page = document.createElement('div');
	page.classList.add('page');
	element.appendChild(page);

	const authorWidget = document.createElement('div');
	authorWidget.classList.add('author-widget');

	const authorTextElement = document.createElement('p');
	authorTextElement.textContent = 'Created by ';

	const authorLink = document.createElement('a');
	const link = 'https://github.com/kenyachan';
	const author = 'Kenya Chan';
	authorLink.setAttribute('href', link);
	authorLink.setAttribute('target', '_blank');
	authorLink.setAttribute('rel', 'noopener noreferrer');
	authorLink.textContent = author;
	authorTextElement.appendChild(authorLink);

	authorWidget.appendChild(authorTextElement);

	page.appendChild(authorWidget);

	return element;
}

const bookTileElement = (title, author, pageCount, read) => {
	const element = document.createElement('div');
	element.classList.add('book', 'tile');

	const titleText = document.createElement('p');
	titleText.classList.add('tileFont-title');
	titleText.textContent = title;
	element.appendChild(titleText);

	const authorText = document.createElement('p');
	authorText.classList.add('tileFont-normal');
	authorText.textContent = author;
	element.appendChild(authorText);

	const pageCountText = document.createElement('p');
	pageCountText.classList.add('tileFont-normal');
	pageCountText.textContent = pageCount;
	element.appendChild(pageCountText);

	element.appendChild(readSwitchWidget(read));

	return element;
}

const modifyBookModal = (type) => {
	const modalWidget = document.createElement('div');
	modalWidget.classList.add('modal-widget');

	modalWidget.appendChild(modalOverlay());
	modalWidget.appendChild(modalDialog(type));

	function modalOverlay() {
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');

		return overlay;
	}

	function modalDialog(type) {
		let modalTitleText;

		if (type === 'add')
			modalTitleText = 'Add a book';

		if (type === 'update')
			modalTitleText = "Update book's details";

		const modalDialog = document.createElement('div');
		modalDialog.classList.add('modal-dialog');

		// dialog stuff here
		const modalTitle = document.createElement('p');
		modalTitle.classList.add('dialog', 'title');
		modalTitle.textContent = modalTitleText;
		modalDialog.appendChild(modalTitle);

		const addBookForm = document.createElement('form');
		modalDialog.appendChild(addBookForm);

		addBookForm.appendChild(createBookTitleInput());
		addBookForm.appendChild(createAuthorInput());
		addBookForm.appendChild(createPageCountInput());
		addBookForm.appendChild(readSwitchWidget());

		addBookForm.appendChild(createSubmitButton(type));
		addBookForm.appendChild(createCancelButton());
		if (type === 'update')
			addBookForm.appendChild(createRemoveButton());
		
		return modalDialog;
	}

	function createBookTitleInput() {
		const element = document.createElement('div');
		element.classList.add('inputItem');

		const label = document.createElement('label');
		label.setAttribute('for', 'bookTitle');
		label.textContent = 'Title: ';
		element.appendChild(label);

		const input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('name', 'bookTitle');
		input.setAttribute('placeholder', "Harry Potter and the Philisopher's Stone");
		input.id = 'bookTitle';
		input.required = true;
		element.appendChild(input);

		return element;
	}

	function createAuthorInput() {
		const element = document.createElement('div');
		element.classList.add('inputItem');

		const label = document.createElement('label');
		label.setAttribute('for', 'bookAuthor');
		label.textContent = 'Author: ';
		element.appendChild(label);

		const input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('name', 'bookAuthor');
		input.setAttribute('placeholder', 'J.K Rowling');
		input.id = 'bookAuthor';
		input.required = true;
		input.setAttribute('pattern', '[^0-9]+');
		element.appendChild(input);

		return element;
	}

	function createPageCountInput() {
		const element = document.createElement('div');
		element.classList.add('inputItem');

		const label = document.createElement('label');
		label.setAttribute('for', 'bookPageCount');
		label.textContent = 'Page Count: ';
		element.appendChild(label);

		const input = document.createElement('input');
		input.setAttribute('type', 'number');
		input.setAttribute('name', 'bookPageCount');
		input.setAttribute('placeholder', '256');
		input.setAttribute('min', '1');
		input.id = 'bookPageCount';
		input.required = 'required';
		element.appendChild(input);

		return element;
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

	return modalWidget;
}

const readSwitchWidget = (switchState) => {
	const switchWidget = document.createElement('div');
	switchWidget.classList.add('switch-widget');

	const switchInput = document.createElement('input');
	switchInput.setAttribute('type', 'checkbox');
	switchInput.setAttribute('name', 'readBook');
	switchInput.checked = switchState;
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

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "screenController": () => (/* binding */ screenController)
/* harmony export */ });
/* harmony import */ var _modules_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/elements */ "./src/modules/elements.js");
/* harmony import */ var _modules_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/book */ "./src/modules/book.js");



const screenController = (application) => {
	const library = application;
	const bodyElement = document.querySelector('body');

	const header = (() => {
		const headerElement = _modules_elements__WEBPACK_IMPORTED_MODULE_0__.headerElement();
		bodyElement.appendChild(headerElement);
	})();

	const main = (() => {
		const libraryElement = _modules_elements__WEBPACK_IMPORTED_MODULE_0__.libraryElement();
		bodyElement.appendChild(libraryElement);

		const addBookButton = libraryElement.querySelector('.tile.addButton');
		addBookButton.addEventListener('click', e => openModal());

		library.getBookCollection().forEach(book => {
			let bookTile = createBookTile(book);
			insertBookTile(bookTile);
		});

		function createBookTile(book) {
			let bookTile = _modules_elements__WEBPACK_IMPORTED_MODULE_0__.bookTileElement(book.title, book.author, book.pageCount, book.read);
			bookTile.addEventListener('click', e => openModal(book, bookTile));

			let readSwitch = bookTile.querySelector('.switch-widget input[name="readBook"]');
			readSwitch.addEventListener('click', e => e.stopPropagation());
			readSwitch.addEventListener('change', e => toggleRead(e, book, bookTile));

			return bookTile;
		}

		function toggleRead(e, bookObj, bookTile) {
			let bookDelta = (0,_modules_book__WEBPACK_IMPORTED_MODULE_1__.book)();
			bookDelta.read = e.currentTarget.checked;
			library.update(bookObj, bookDelta);

			bookObj.read = e.currentTarget.checked;
		}

		function insertBookTile(bookTile) {
			const pageElement = libraryElement.querySelector('.page');
			pageElement.insertBefore(bookTile, addBookButton);
		}

		function openModal(book, bookTile) {
			let type = book === undefined ? 'add' : 'update';
			
			const modalElement = _modules_elements__WEBPACK_IMPORTED_MODULE_0__.modifyBookModal(type);
			bodyElement.appendChild(modalElement);

			document.addEventListener('keydown', e => {
				if (event.key === 'Escape')
					closeModal();
			}, { once: true });

			initialiseOverlay(modalElement);

			const form = modalElement.querySelector('form');
			initialiseCancelButton(form);
			
			if (type === 'add')	initialiseAddForm(form);
			if (type === 'update') {
				initialiseRemoveButton(form, book, bookTile);
				initialiseUpdateForm(form, book, bookTile);
			}

			return modalElement;
		}

		function initialiseOverlay(modalElement) {
			const overlay = modalElement.querySelector('.overlay');
			overlay.addEventListener('click', e => closeModal());
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

		function initialiseAddForm(form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');

			addValidationMessages(form);
			titleInput.focus();

			form.addEventListener('submit', e => {
				e.preventDefault(); // stop submit action

				addBook(form);
				closeModal();
			});
		}

		function addBook(form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="readBook"]');

			let newBook = (0,_modules_book__WEBPACK_IMPORTED_MODULE_1__.book)(titleInput.value, authorInput.value, parseInt(pageCountInput.value), readStatusCheckBox.checked);
			library.add(newBook);

			let newBookTile = createBookTile(newBook);
			insertBookTile(newBookTile);
		}

		function initialiseUpdateForm(form, bookObj, bookTile) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="readBook"]');

			titleInput.value = bookObj.title;
			authorInput.value = bookObj.author;
			pageCountInput.value = bookObj.pageCount;
			readStatusCheckBox.checked = bookObj.read;

			addValidationMessages(form);

			form.addEventListener('submit', e => {
				e.preventDefault();
				
				let bookDelta = updateBookObj(form, bookObj);
				library.update(bookObj, bookDelta);

				let updatedBookTile = createBookTile(bookObj);
				bookTile.replaceWith(updatedBookTile);

				closeModal();
			});
		}
		
		function updateBookObj(form, bookObj) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="readBook"]');

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
			const modalElement = bodyElement.querySelector('.modal-widget');

			if (modalElement) modalElement.remove();
		}
	})();

	const footer = (() => {
		const footerElement = _modules_elements__WEBPACK_IMPORTED_MODULE_0__.footerElement();
		bodyElement.appendChild(footerElement);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxPQUFPLGFBQWEsWUFBWSxLQUFLLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLGFBQWEsTUFBTSxVQUFVLFlBQVksY0FBYyxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxZQUFZLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGlDQUFpQyx3SkFBd0os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OztBQUVBO0FBQ0EsOEVBQThFLGFBQWE7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BRNkM7QUFDUDs7QUFFL0I7QUFDUDtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDREQUFvQjtBQUM1QztBQUNBLEVBQUU7O0FBRUY7QUFDQSx5QkFBeUIsNkRBQXFCO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQiw4REFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbURBQUk7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBc0I7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLFlBQVk7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtREFBSTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1EQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSx3QkFBd0IsNERBQW9CO0FBQzVDO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDdE9pRDs7QUFFakQ7O0FBRUE7O0FBRU87QUFDUDs7QUFFQTtBQUNBLGFBQWEsbURBQU87O0FBRXBCO0FBQ0EsRUFBRTs7QUFFRjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9tb2R1bGVzL2Jvb2suanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9tb2R1bGVzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3Rlc3REYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG5cXHQtLWNvbG9yLXB1cnBsZTogIzAwNGFhZDtcXG5cXHQtLWNvbG9yLWZ1c2hpYTogI2NiNmNlNjtcXG5cXHQtLWNvbG9yLWdyZWVuOiByZ2IoMTQ3LCAyMjAsIDApO1xcblxcdC0tYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY29sb3ItcHVycGxlKSwgdmFyKC0tY29sb3ItZnVzaGlhKSk7XFxuXFx0LS1hY2NlbnQtZm9udC1jb2xvcjogI2YxZjFmMTtcXG5cXHQtLWZvbnQtbGluay1jb2xvcjogI2ZmOTE0ZDtcXG59XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG59XFxuXFxubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuLyogUEFHRSAqL1xcbi5wYWdlIHtcXG5cXHR3aWR0aDogY2xhbXAoMzUwcHgsIDgwdncsIDEyMDBweCk7XFxufVxcblxcbmhlYWRlcixcXG5tYWluLFxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4vKiBFTkQgLSBQQUdFICovXFxuLyogSEVBREVSICovXFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmctZ3JhZGllbnQpO1xcblxcdGNvbG9yOiB2YXIoLS1hY2NlbnQtZm9udC1jb2xvcik7XFxufVxcblxcbmhlYWRlciAucGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuaGVhZGVyIC5oZWFkZXItdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaGVhZGVyIC5oZWFkZXItdGFnbGluZSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIEVORCAtIEhFQURFUiAqL1xcbi8qIEZPT1RFUiAqL1xcblxcbmZvb3RlciBhIHtcXG5cXHRjb2xvcjogdmFyKC0tZm9udC1saW5rLWNvbG9yKTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEVORCAtIEZPT1RFUiAqL1xcblxcbi8qIEJPT0sgVElMRSAqL1xcblxcbi50aWxlIHtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1wdXJwbGUpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcblxcdC8qIG5lZWQgdG8gbWFrZSB0aGlzIG1vcmUgZHluYW1pYyAqL1xcblxcdGhlaWdodDogMjAwcHg7XFxuXFx0d2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4udGlsZTpob3ZlciB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZnVzaGlhKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aWxlRm9udC10aXRsZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxufVxcblxcbi50aWxlRm9udC1ub3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBFTkQgLSBCT09LIFRJTEUgKi9cXG4vKiBBREQgQk9PSyBUSUxFICovXFxuLmFkZEJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Ym9yZGVyOiAzcHggc29saWQgbGlnaHRncmV5O1xcblxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRjb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uYWRkQnV0dG9uOmhvdmVyIHtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1mdXNoaWEpO1xcblxcdGNvbG9yOiB2YXIoLS1jb2xvci1mdXNoaWEpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRU5EIC0gQUREIEJPT0sgVElMRSAqL1xcbi8qIE1BSU4gKi9cXG5tYWluPi5wYWdlIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjAwcHgpO1xcblxcdGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG5cXHRncmlkLWdhcDogMnJlbTtcXG5cXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogTU9EQUwgV0lER0VUICovXFxuLm1vZGFsLXdpZGdldCB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdHotaW5kZXg6IDE7XFx0XFxufVxcblxcbi5tb2RhbC13aWRnZXQgLm92ZXJsYXkge1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpIG9wYWNpdHkoMSk7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kYWwtZGlhbG9nIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0Lyogd2lkdGg6IDI1dnc7ICovXFxuXFx0d2lkdGg6IGNsYW1wKDQwMHB4LCAyNXZ3LCA2MDBweCk7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRwYWRkaW5nOiAxcmVtIDJyZW07XFxuXFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItcHVycGxlKTtcXG5cXHR0cmFuc2l0aW9uOiBib3JkZXIgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZzpob3ZlciB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZnVzaGlhKTtcXG59XFxuXFxuXFxuLm1vZGFsLXdpZGdldCAuZGlhbG9nLnRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vZGFsLXdpZGdldCBmb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwtd2lkZ2V0IC5pbnB1dEl0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dEl0ZW0gaW5wdXQge1xcblxcdHdpZHRoOiA2MCU7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wdXJwbGUpO1xcblxcdHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMjUwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXG5cXHQtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXFxuLmlucHV0SXRlbSBpbnB1dDpmb2N1cyB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWZ1c2hpYSk7XFxufVxcblxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG5cXHRcXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBFTkQgLSBNT0RBTCBXSURHRVQgKi9cXG4vKiBTV0lUQ0ggV0lER0VUICovXFxuLnN3aXRjaC13aWRnZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0ID4gbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDM3cHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXMgZWFzZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZnVzaGlhKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcyBlYXNlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogc2xpZGVyIHBzZXVkbyBlbGVtZW50ICovXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBsZWZ0OiAxOXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDIwMG1zIGVhc2UtaW4tb3V0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAyMDBtcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gfiBsYWJlbCAub2ZmLFxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGxhYmVsIC5vbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXM7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gfiBsYWJlbCAub24sXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gbGFiZWwgLm9mZiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXM7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGxhYmVsIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0LypjdXJzb3I6IHBvaW50ZXI7Ki9cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxtSkFBbUo7Q0FDbkosdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QiwrQkFBK0I7Q0FDL0Isa0ZBQWtGO0NBQ2xGLDRCQUE0QjtDQUM1QiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUND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OztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFVBQVU7Q0FDYix1QkFBdUI7SUFDcEIsa0NBQWtDO0NBQ3JDLGVBQWU7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxrQ0FBa0M7Q0FDckMsZUFBZTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7Q0FDckIsbUJBQW1CO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG5cXHRmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuXFx0LS1jb2xvci1wdXJwbGU6ICMwMDRhYWQ7XFxuXFx0LS1jb2xvci1mdXNoaWE6ICNjYjZjZTY7XFxuXFx0LS1jb2xvci1ncmVlbjogcmdiKDE0NywgMjIwLCAwKTtcXG5cXHQtLWJnLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNvbG9yLXB1cnBsZSksIHZhcigtLWNvbG9yLWZ1c2hpYSkpO1xcblxcdC0tYWNjZW50LWZvbnQtY29sb3I6ICNmMWYxZjE7XFxuXFx0LS1mb250LWxpbmstY29sb3I6ICNmZjkxNGQ7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxufVxcblxcbm1haW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleDogMSAxIGF1dG87XFxufVxcblxcbi8qIFBBR0UgKi9cXG4ucGFnZSB7XFxuXFx0d2lkdGg6IGNsYW1wKDM1MHB4LCA4MHZ3LCAxMjAwcHgpO1xcbn1cXG5cXG5oZWFkZXIsXFxubWFpbixcXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMnJlbTtcXG59XFxuXFxuLyogRU5EIC0gUEFHRSAqL1xcbi8qIEhFQURFUiAqL1xcblxcbmhlYWRlcixcXG5mb290ZXIge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJnLWdyYWRpZW50KTtcXG5cXHRjb2xvcjogdmFyKC0tYWNjZW50LWZvbnQtY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgLnBhZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbmhlYWRlciAuaGVhZGVyLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmhlYWRlciAuaGVhZGVyLXRhZ2xpbmUge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBFTkQgLSBIRUFERVIgKi9cXG4vKiBGT09URVIgKi9cXG5cXG5mb290ZXIgYSB7XFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtbGluay1jb2xvcik7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBFTkQgLSBGT09URVIgKi9cXG5cXG4vKiBCT09LIFRJTEUgKi9cXG5cXG4udGlsZSB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItcHVycGxlKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG5cXHQvKiBuZWVkIHRvIG1ha2UgdGhpcyBtb3JlIGR5bmFtaWMgKi9cXG5cXHRoZWlnaHQ6IDIwMHB4O1xcblxcdHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnRpbGU6aG92ZXIge1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWZ1c2hpYSk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGlsZUZvbnQtdGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0aGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4udGlsZUZvbnQtbm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogRU5EIC0gQk9PSyBUSUxFICovXFxuLyogQUREIEJPT0sgVElMRSAqL1xcbi5hZGRCdXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Z3JleTtcXG5cXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Y29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmFkZEJ1dHRvbjpob3ZlciB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZnVzaGlhKTtcXG5cXHRjb2xvcjogdmFyKC0tY29sb3ItZnVzaGlhKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEVORCAtIEFERCBCT09LIFRJTEUgKi9cXG4vKiBNQUlOICovXFxubWFpbj4ucGFnZSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDIwMHB4KTtcXG5cXHRncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuXFx0Z3JpZC1nYXA6IDJyZW07XFxuXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIE1PREFMIFdJREdFVCAqL1xcbi5tb2RhbC13aWRnZXQge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHR6LWluZGV4OiAxO1xcdFxcbn1cXG5cXG4ubW9kYWwtd2lkZ2V0IC5vdmVybGF5IHtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KSBvcGFjaXR5KDEpO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGFsLWRpYWxvZyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdC8qIHdpZHRoOiAyNXZ3OyAqL1xcblxcdHdpZHRoOiBjbGFtcCg0MDBweCwgMjV2dywgNjAwcHgpO1xcblxcdHotaW5kZXg6IDI7XFxuXFx0cGFkZGluZzogMXJlbSAycmVtO1xcblxcblxcdGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXB1cnBsZSk7XFxuXFx0dHJhbnNpdGlvbjogYm9yZGVyIDUwMG1zIGVhc2UtaW4tb3V0O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2RhbC1kaWFsb2c6aG92ZXIge1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWZ1c2hpYSk7XFxufVxcblxcblxcbi5tb2RhbC13aWRnZXQgLmRpYWxvZy50aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbC13aWRnZXQgZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLm1vZGFsLXdpZGdldCAuaW5wdXRJdGVtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXRJdGVtIGlucHV0IHtcXG5cXHR3aWR0aDogNjAlO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItcHVycGxlKTtcXG5cXHR0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDI1MG1zIGVhc2UtaW4tb3V0O1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFxuXFx0LW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbi5pbnB1dEl0ZW0gaW5wdXQ6Zm9jdXMge1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1mdXNoaWEpO1xcbn1cXG5cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuXFx0XFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyogRU5EIC0gTU9EQUwgV0lER0VUICovXFxuLyogU1dJVENIIFdJREdFVCAqL1xcbi5zd2l0Y2gtd2lkZ2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCA+IGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAzN3B4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGVhc2U7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZ1c2hpYSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXMgZWFzZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHNsaWRlciBwc2V1ZG8gZWxlbWVudCAqL1xcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgbGVmdDogMTlweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAyMDBtcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtM3B4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGxlZnQgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIH4gbGFiZWwgLm9mZixcXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBsYWJlbCAub24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIH4gbGFiZWwgLm9uLFxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGxhYmVsIC5vZmYge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBsYWJlbCBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcdC8qY3Vyc29yOiBwb2ludGVyOyovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBib29rIGFzIG5ld0Jvb2sgfSBmcm9tICcuL21vZHVsZXMvYm9vayc7XG5cbi8vYXBwIGNvbnRyb2xsZXJcbmV4cG9ydCBmdW5jdGlvbiBsaWJyYXJ5KCkge1xuXHRjb25zdCBib29rQ29sbGVjdGlvbiA9IFtdO1xuXG5cdGNvbnN0IGFkZCA9IChib29rKSA9PiB7XG5cdFx0aWYgKGJvb2tDb2xsZWN0aW9uLnNvbWUoYiA9PiBiLnRpdGxlID09PSBib29rLnRpdGxlKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQm9vayB3aXRoIHRpdGxlIFwiJHtib29rLnRpdGxlfVwiIGFscmVhZHkgZXhpc3RzIGluIGxpYnJhcnkuYCk7XG5cblx0XHRib29rQ29sbGVjdGlvbi5wdXNoKGJvb2spO1xuXG5cdFx0Y29uc29sZS5sb2coYEJvb2sgYWRkZWQgdG8gbGlicmFyeS4gJHtib29rLmdldERldGFpbHMoKX1gKTtcblx0fVxuXHRcblx0Y29uc3QgcmVtb3ZlID0gKGJvb2spID0+IHtcblx0XHRsZXQgYm9va0luZGV4ID0gYm9va0NvbGxlY3Rpb24uaW5kZXhPZihib29rKTtcblxuXHRcdGlmIChib29rSW5kZXggPCAwKSByZXR1cm47XG5cblx0XHRib29rQ29sbGVjdGlvbi5zcGxpY2UoYm9va0luZGV4LCAxKTtcblxuXHRcdGNvbnNvbGUubG9nKGBCb29rIHJlbW92ZWQgZnJvbSBsaWJyYXJ5LiAke2Jvb2suZ2V0RGV0YWlscygpfWApO1xuXHR9XG5cblx0Y29uc3QgdXBkYXRlID0gKGJvb2ssIGRlbHRhKSA9PiB7XG5cdFx0aWYgKGRlbHRhLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBVcGRhdGluZyB0aXRsZSBcIiR7Ym9vay50aXRsZX1cIiB0byBcIiR7ZGVsdGEudGl0bGV9XCJgKTtcblx0XHRcdGJvb2sudGl0bGUgPSBkZWx0YS50aXRsZTtcblx0XHR9XG5cblx0XHRpZiAoZGVsdGEuYXV0aG9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBVcGRhdGluZyBhdXRob3IgXCIke2Jvb2suYXV0aG9yfVwiIHRvIFwiJHtkZWx0YS5hdXRob3J9XCJgKTtcblx0XHRcdGJvb2suYXV0aG9yID0gZGVsdGEuYXV0aG9yO1xuXHRcdH1cblxuXHRcdGlmIChkZWx0YS5wYWdlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29uc29sZS5sb2coYFVwZGF0aW5nIHBhZ2UgY291bnQgXCIke2Jvb2sucGFnZUNvdW50fVwiIHRvIFwiJHtkZWx0YS5wYWdlQ291bnR9XCJgKTtcblx0XHRcdGJvb2sucGFnZUNvdW50ID0gZGVsdGEucGFnZUNvdW50O1xuXHRcdH1cblxuXHRcdGlmIChkZWx0YS5yZWFkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBVcGRhdGluZyBib29rIHJlYWQgc3RhdHVzIFwiJHtib29rLnJlYWR9XCIgdG8gXCIke2RlbHRhLnJlYWR9XCJgKTtcblx0XHRcdGJvb2sucmVhZCA9IGRlbHRhLnJlYWQ7XG5cdFx0fVxuXG5cdFx0Ly8gc3RvcmFnZS5zYXZlXG5cdH1cblxuXHRjb25zdCBwcmludENvbGxlY3Rpb24gPSAoKSA9PiB7XG5cdFx0aWYgKGJvb2tDb2xsZWN0aW9uIDw9IDApIHtcblx0XHRcdGNvbnNvbGUubG9nKCdMaWJyYXJ5IGlzIGVtcHR5IScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKCdwcmludGluZyBsaWJyYXJ5Li4uJyk7XG5cdFx0Ym9va0NvbGxlY3Rpb24uZm9yRWFjaChib29rID0+IGNvbnNvbGUubG9nKGBcIiR7Ym9vay50aXRsZX1cIiBieSAke2Jvb2suYXV0aG9yfWApKTtcblx0fVxuXG5cdGNvbnN0IGdldEJvb2tDb2xsZWN0aW9uID0gKCkgPT4ge1xuXHRcdHJldHVybiBib29rQ29sbGVjdGlvbjtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0YWRkLFxuXHRcdHJlbW92ZSxcblx0XHR1cGRhdGUsXG5cdFx0cHJpbnRDb2xsZWN0aW9uLFxuXHRcdGdldEJvb2tDb2xsZWN0aW9uLFxuXHR9XG59XG5cbiIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7IHNjcmVlbkNvbnRyb2xsZXIgfSBmcm9tICcuL3NjcmVlbkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJy4vYXBwJztcbmltcG9ydCB7IGNyZWF0ZVRlc3REYXRhIH0gZnJvbSAnLi90ZXN0RGF0YSc7XG5cbmxldCBhcHAgPSBsaWJyYXJ5KCk7XG5jcmVhdGVUZXN0RGF0YShhcHApO1xuXG5sZXQgc2MgPSBzY3JlZW5Db250cm9sbGVyKGFwcCk7XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBib29rKHRpdGxlLCBhdXRob3IsIHBhZ2VDb3VudCwgcmVhZCkge1xuXHRjb25zdCBnZXREZXRhaWxzID0gKCkgPT4ge1xuXHRcdHJldHVybiBgVGl0bGU6IFwiJHt0aXRsZX1cIiwgQXV0aG9yOiBcIiR7YXV0aG9yfVwiLCBQYWdlIENvdW50OiAke3BhZ2VDb3VudH1gO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRnZXREZXRhaWxzLFxuXG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRpdGxlO1xuXHRcdH0sXG5cblx0XHRnZXQgYXV0aG9yKCkge1xuXHRcdFx0cmV0dXJuIGF1dGhvcjtcblx0XHR9LFxuXG5cdFx0Z2V0IHBhZ2VDb3VudCgpIHtcblx0XHRcdHJldHVybiBwYWdlQ291bnQ7XG5cdFx0fSxcblxuXHRcdGdldCByZWFkKCkge1xuXHRcdFx0cmV0dXJuIHJlYWQ7XG5cdFx0fSxcblxuXHRcdHNldCB0aXRsZShuZXdUaXRsZSkge1xuXHRcdFx0aWYgKCFuZXdUaXRsZSkgcmV0dXJuO1xuXHRcdFx0aWYgKG5ld1RpdGxlID09PSAnJykgcmV0dXJuO1xuXG5cdFx0XHR0aXRsZSA9IG5ld1RpdGxlO1xuXHRcdH0sXG5cblx0XHRzZXQgYXV0aG9yKG5ld0F1dGhvcikge1xuXHRcdFx0aWYgKCFuZXdBdXRob3IpIHJldHVybjtcblx0XHRcdGlmIChuZXdBdXRob3IgPT09ICcnKSByZXR1cm47XG5cblx0XHRcdGF1dGhvciA9IG5ld0F1dGhvcjtcblx0XHR9LFxuXG5cdFx0c2V0IHBhZ2VDb3VudChuZXdQYWdlQ291bnQpIHtcblx0XHRcdGlmICh0eXBlb2YgbmV3UGFnZUNvdW50ICE9PSAnbnVtYmVyJyAmJiBuZXdQYWdlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFBhZ2UgQ291bnQgaW52YWxpZC4gRXhwZWN0ZWQgJ251bWJlcicsIHJlY2VpdmVkICR7dHlwZW9mIG5ld1BhZ2VDb3VudH1gKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3UGFnZUNvdW50IDwgMCkgIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBQYWdlIENvdW50IGludmFsaWQuIEV4cGVjdGVkIHBvc2l0aXZlIG51bWJlciwgcmVjaWV2ZWQgJHtuZXdQYWdlQ291bnR9YCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cGFnZUNvdW50ID0gbmV3UGFnZUNvdW50O1xuXHRcdH0sXG5cblx0XHRzZXQgcmVhZChyZWFkU3RhdHVzKSB7XG5cdFx0XHRyZWFkID0gcmVhZFN0YXR1cztcblx0XHR9LFxuXHR9XG59XG4iLCJleHBvcnQgY29uc3QgaGVhZGVyRWxlbWVudCA9ICgpID0+IHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG5cdGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG5cblx0Y29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ015IExpYnJhcnknO1xuXHRoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGl0bGUnKTtcblx0cGFnZS5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cblx0Y29uc3QgaGVhZGVyVGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0aGVhZGVyVGFnbGluZS50ZXh0Q29udGVudCA9ICdCb29rcyBJIGhhdmUgcmVhZCBhbmQgcGxhbm5lZCB0byByZWFkJztcblx0aGVhZGVyVGFnbGluZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGFnbGluZScpO1xuXHRwYWdlLmFwcGVuZENoaWxkKGhlYWRlclRhZ2xpbmUpO1xuXG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgbGlicmFyeUVsZW1lbnQgPSAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cblx0Y29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChwYWdlKTtcblxuXHRjb25zdCBhZGRCb29rVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRhZGRCb29rVGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJywgJ2FkZEJ1dHRvbicpO1xuXHRhZGRCb29rVGlsZS50ZXh0Q29udGVudCA9ICcrJztcblx0cGFnZS5hcHBlbmRDaGlsZChhZGRCb29rVGlsZSk7XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBmb290ZXJFbGVtZW50ID0gKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cblx0Y29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChwYWdlKTtcblxuXHRjb25zdCBhdXRob3JXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0YXV0aG9yV2lkZ2V0LmNsYXNzTGlzdC5hZGQoJ2F1dGhvci13aWRnZXQnKTtcblxuXHRjb25zdCBhdXRob3JUZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0YXV0aG9yVGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSAnO1xuXG5cdGNvbnN0IGF1dGhvckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdGNvbnN0IGxpbmsgPSAnaHR0cHM6Ly9naXRodWIuY29tL2tlbnlhY2hhbic7XG5cdGNvbnN0IGF1dGhvciA9ICdLZW55YSBDaGFuJztcblx0YXV0aG9yTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rKTtcblx0YXV0aG9yTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0YXV0aG9yTGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdGF1dGhvckxpbmsudGV4dENvbnRlbnQgPSBhdXRob3I7XG5cdGF1dGhvclRleHRFbGVtZW50LmFwcGVuZENoaWxkKGF1dGhvckxpbmspO1xuXG5cdGF1dGhvcldpZGdldC5hcHBlbmRDaGlsZChhdXRob3JUZXh0RWxlbWVudCk7XG5cblx0cGFnZS5hcHBlbmRDaGlsZChhdXRob3JXaWRnZXQpO1xuXG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgYm9va1RpbGVFbGVtZW50ID0gKHRpdGxlLCBhdXRob3IsIHBhZ2VDb3VudCwgcmVhZCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYm9vaycsICd0aWxlJyk7XG5cblx0Y29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHR0aXRsZVRleHQuY2xhc3NMaXN0LmFkZCgndGlsZUZvbnQtdGl0bGUnKTtcblx0dGl0bGVUZXh0LnRleHRDb250ZW50ID0gdGl0bGU7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuXHRjb25zdCBhdXRob3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRhdXRob3JUZXh0LmNsYXNzTGlzdC5hZGQoJ3RpbGVGb250LW5vcm1hbCcpO1xuXHRhdXRob3JUZXh0LnRleHRDb250ZW50ID0gYXV0aG9yO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKGF1dGhvclRleHQpO1xuXG5cdGNvbnN0IHBhZ2VDb3VudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHBhZ2VDb3VudFRleHQuY2xhc3NMaXN0LmFkZCgndGlsZUZvbnQtbm9ybWFsJyk7XG5cdHBhZ2VDb3VudFRleHQudGV4dENvbnRlbnQgPSBwYWdlQ291bnQ7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFnZUNvdW50VGV4dCk7XG5cblx0ZWxlbWVudC5hcHBlbmRDaGlsZChyZWFkU3dpdGNoV2lkZ2V0KHJlYWQpKTtcblxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IG1vZGlmeUJvb2tNb2RhbCA9ICh0eXBlKSA9PiB7XG5cdGNvbnN0IG1vZGFsV2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1vZGFsV2lkZ2V0LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpZGdldCcpO1xuXG5cdG1vZGFsV2lkZ2V0LmFwcGVuZENoaWxkKG1vZGFsT3ZlcmxheSgpKTtcblx0bW9kYWxXaWRnZXQuYXBwZW5kQ2hpbGQobW9kYWxEaWFsb2codHlwZSkpO1xuXG5cdGZ1bmN0aW9uIG1vZGFsT3ZlcmxheSgpIHtcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0b3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cblx0XHRyZXR1cm4gb3ZlcmxheTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1vZGFsRGlhbG9nKHR5cGUpIHtcblx0XHRsZXQgbW9kYWxUaXRsZVRleHQ7XG5cblx0XHRpZiAodHlwZSA9PT0gJ2FkZCcpXG5cdFx0XHRtb2RhbFRpdGxlVGV4dCA9ICdBZGQgYSBib29rJztcblxuXHRcdGlmICh0eXBlID09PSAndXBkYXRlJylcblx0XHRcdG1vZGFsVGl0bGVUZXh0ID0gXCJVcGRhdGUgYm9vaydzIGRldGFpbHNcIjtcblxuXHRcdGNvbnN0IG1vZGFsRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bW9kYWxEaWFsb2cuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGlhbG9nJyk7XG5cblx0XHQvLyBkaWFsb2cgc3R1ZmYgaGVyZVxuXHRcdGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0bW9kYWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnLCAndGl0bGUnKTtcblx0XHRtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gbW9kYWxUaXRsZVRleHQ7XG5cdFx0bW9kYWxEaWFsb2cuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XG5cblx0XHRjb25zdCBhZGRCb29rRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblx0XHRtb2RhbERpYWxvZy5hcHBlbmRDaGlsZChhZGRCb29rRm9ybSk7XG5cblx0XHRhZGRCb29rRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVCb29rVGl0bGVJbnB1dCgpKTtcblx0XHRhZGRCb29rRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVBdXRob3JJbnB1dCgpKTtcblx0XHRhZGRCb29rRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlQ291bnRJbnB1dCgpKTtcblx0XHRhZGRCb29rRm9ybS5hcHBlbmRDaGlsZChyZWFkU3dpdGNoV2lkZ2V0KCkpO1xuXG5cdFx0YWRkQm9va0Zvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlU3VibWl0QnV0dG9uKHR5cGUpKTtcblx0XHRhZGRCb29rRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVDYW5jZWxCdXR0b24oKSk7XG5cdFx0aWYgKHR5cGUgPT09ICd1cGRhdGUnKVxuXHRcdFx0YWRkQm9va0Zvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlQnV0dG9uKCkpO1xuXHRcdFxuXHRcdHJldHVybiBtb2RhbERpYWxvZztcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUJvb2tUaXRsZUlucHV0KCkge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0SXRlbScpO1xuXG5cdFx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Jvb2tUaXRsZScpO1xuXHRcdGxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG5cdFx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Jvb2tUaXRsZScpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIkhhcnJ5IFBvdHRlciBhbmQgdGhlIFBoaWxpc29waGVyJ3MgU3RvbmVcIik7XG5cdFx0aW5wdXQuaWQgPSAnYm9va1RpdGxlJztcblx0XHRpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUF1dGhvcklucHV0KCkge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0SXRlbScpO1xuXG5cdFx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Jvb2tBdXRob3InKTtcblx0XHRsYWJlbC50ZXh0Q29udGVudCA9ICdBdXRob3I6ICc7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cblx0XHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYm9va0F1dGhvcicpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnSi5LIFJvd2xpbmcnKTtcblx0XHRpbnB1dC5pZCA9ICdib29rQXV0aG9yJztcblx0XHRpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgJ1teMC05XSsnKTtcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGlucHV0KTtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlUGFnZUNvdW50SW5wdXQoKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRJdGVtJyk7XG5cblx0XHRjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYm9va1BhZ2VDb3VudCcpO1xuXHRcdGxhYmVsLnRleHRDb250ZW50ID0gJ1BhZ2UgQ291bnQ6ICc7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cblx0XHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdib29rUGFnZUNvdW50Jyk7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcyNTYnKTtcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcxJyk7XG5cdFx0aW5wdXQuaWQgPSAnYm9va1BhZ2VDb3VudCc7XG5cdFx0aW5wdXQucmVxdWlyZWQgPSAncmVxdWlyZWQnO1xuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24odHlwZSkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdFx0YnV0dG9uLmlkID0gJ21vZGFsLWFkZEJvb2snO1xuXG5cdFx0aWYgKHR5cGUgPT09ICdhZGQnKSB7XG5cdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcblx0XHR9XG5cblx0XHRpZiAodHlwZSA9PT0gJ3VwZGF0ZScpIHtcblx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xuXHRcdH1cblxuXHRcdHJldHVybiBidXR0b247XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDYW5jZWxCdXR0b24oKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblx0XHRidXR0b24uaWQgPSAnbW9kYWwtY2FuY2VsJztcblx0XHRidXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblx0XHRcblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKCkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cdFx0YnV0dG9uLmlkID0gJ21vZGFsLXJlbW92ZUJvb2snO1xuXHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZW1vdmUnO1xuXG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxuXG5cdHJldHVybiBtb2RhbFdpZGdldDtcbn1cblxuY29uc3QgcmVhZFN3aXRjaFdpZGdldCA9IChzd2l0Y2hTdGF0ZSkgPT4ge1xuXHRjb25zdCBzd2l0Y2hXaWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0c3dpdGNoV2lkZ2V0LmNsYXNzTGlzdC5hZGQoJ3N3aXRjaC13aWRnZXQnKTtcblxuXHRjb25zdCBzd2l0Y2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdHN3aXRjaElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXHRzd2l0Y2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmVhZEJvb2snKTtcblx0c3dpdGNoSW5wdXQuY2hlY2tlZCA9IHN3aXRjaFN0YXRlO1xuXHRzd2l0Y2hXaWRnZXQuYXBwZW5kQ2hpbGQoc3dpdGNoSW5wdXQpO1xuXG5cdGNvbnN0IHN3aXRjaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuXHRjb25zdCByZWFkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdHJlYWRMYWJlbC50ZXh0Q29udGVudCA9ICdSZWFkJztcblx0cmVhZExhYmVsLmNsYXNzTGlzdC5hZGQoJ29uJyk7XG5cdHN3aXRjaExhYmVsLmFwcGVuZENoaWxkKHJlYWRMYWJlbCk7XG5cblx0Y29uc3Qgbm90UmVhZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRub3RSZWFkTGFiZWwudGV4dENvbnRlbnQgPSAnTm90IHJlYWQnO1xuXHRub3RSZWFkTGFiZWwuY2xhc3NMaXN0LmFkZCgnb2ZmJyk7XG5cdHN3aXRjaExhYmVsLmFwcGVuZENoaWxkKG5vdFJlYWRMYWJlbCk7XG5cblx0c3dpdGNoV2lkZ2V0LmFwcGVuZENoaWxkKHN3aXRjaExhYmVsKTtcblxuXHRyZXR1cm4gc3dpdGNoV2lkZ2V0O1xufVxuIiwiaW1wb3J0ICogYXMgY3JlYXRlIGZyb20gJy4vbW9kdWxlcy9lbGVtZW50cyc7XG5pbXBvcnQgeyBib29rIH0gZnJvbSAnLi9tb2R1bGVzL2Jvb2snO1xuXG5leHBvcnQgY29uc3Qgc2NyZWVuQ29udHJvbGxlciA9IChhcHBsaWNhdGlvbikgPT4ge1xuXHRjb25zdCBsaWJyYXJ5ID0gYXBwbGljYXRpb247XG5cdGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgaGVhZGVyRWxlbWVudCA9IGNyZWF0ZS5oZWFkZXJFbGVtZW50KCk7XG5cdFx0Ym9keUVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XG5cdH0pKCk7XG5cblx0Y29uc3QgbWFpbiA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgbGlicmFyeUVsZW1lbnQgPSBjcmVhdGUubGlicmFyeUVsZW1lbnQoKTtcblx0XHRib2R5RWxlbWVudC5hcHBlbmRDaGlsZChsaWJyYXJ5RWxlbWVudCk7XG5cblx0XHRjb25zdCBhZGRCb29rQnV0dG9uID0gbGlicmFyeUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbGUuYWRkQnV0dG9uJyk7XG5cdFx0YWRkQm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gb3Blbk1vZGFsKCkpO1xuXG5cdFx0bGlicmFyeS5nZXRCb29rQ29sbGVjdGlvbigpLmZvckVhY2goYm9vayA9PiB7XG5cdFx0XHRsZXQgYm9va1RpbGUgPSBjcmVhdGVCb29rVGlsZShib29rKTtcblx0XHRcdGluc2VydEJvb2tUaWxlKGJvb2tUaWxlKTtcblx0XHR9KTtcblxuXHRcdGZ1bmN0aW9uIGNyZWF0ZUJvb2tUaWxlKGJvb2spIHtcblx0XHRcdGxldCBib29rVGlsZSA9IGNyZWF0ZS5ib29rVGlsZUVsZW1lbnQoYm9vay50aXRsZSwgYm9vay5hdXRob3IsIGJvb2sucGFnZUNvdW50LCBib29rLnJlYWQpO1xuXHRcdFx0Ym9va1RpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IG9wZW5Nb2RhbChib29rLCBib29rVGlsZSkpO1xuXG5cdFx0XHRsZXQgcmVhZFN3aXRjaCA9IGJvb2tUaWxlLnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtd2lkZ2V0IGlucHV0W25hbWU9XCJyZWFkQm9va1wiXScpO1xuXHRcdFx0cmVhZFN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XG5cdFx0XHRyZWFkU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gdG9nZ2xlUmVhZChlLCBib29rLCBib29rVGlsZSkpO1xuXG5cdFx0XHRyZXR1cm4gYm9va1RpbGU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdG9nZ2xlUmVhZChlLCBib29rT2JqLCBib29rVGlsZSkge1xuXHRcdFx0bGV0IGJvb2tEZWx0YSA9IGJvb2soKTtcblx0XHRcdGJvb2tEZWx0YS5yZWFkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XG5cdFx0XHRsaWJyYXJ5LnVwZGF0ZShib29rT2JqLCBib29rRGVsdGEpO1xuXG5cdFx0XHRib29rT2JqLnJlYWQgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbnNlcnRCb29rVGlsZShib29rVGlsZSkge1xuXHRcdFx0Y29uc3QgcGFnZUVsZW1lbnQgPSBsaWJyYXJ5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpO1xuXHRcdFx0cGFnZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGJvb2tUaWxlLCBhZGRCb29rQnV0dG9uKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvcGVuTW9kYWwoYm9vaywgYm9va1RpbGUpIHtcblx0XHRcdGxldCB0eXBlID0gYm9vayA9PT0gdW5kZWZpbmVkID8gJ2FkZCcgOiAndXBkYXRlJztcblx0XHRcdFxuXHRcdFx0Y29uc3QgbW9kYWxFbGVtZW50ID0gY3JlYXRlLm1vZGlmeUJvb2tNb2RhbCh0eXBlKTtcblx0XHRcdGJvZHlFbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsRWxlbWVudCk7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpXG5cdFx0XHRcdFx0Y2xvc2VNb2RhbCgpO1xuXHRcdFx0fSwgeyBvbmNlOiB0cnVlIH0pO1xuXG5cdFx0XHRpbml0aWFsaXNlT3ZlcmxheShtb2RhbEVsZW1lbnQpO1xuXG5cdFx0XHRjb25zdCBmb3JtID0gbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblx0XHRcdGluaXRpYWxpc2VDYW5jZWxCdXR0b24oZm9ybSk7XG5cdFx0XHRcblx0XHRcdGlmICh0eXBlID09PSAnYWRkJylcdGluaXRpYWxpc2VBZGRGb3JtKGZvcm0pO1xuXHRcdFx0aWYgKHR5cGUgPT09ICd1cGRhdGUnKSB7XG5cdFx0XHRcdGluaXRpYWxpc2VSZW1vdmVCdXR0b24oZm9ybSwgYm9vaywgYm9va1RpbGUpO1xuXHRcdFx0XHRpbml0aWFsaXNlVXBkYXRlRm9ybShmb3JtLCBib29rLCBib29rVGlsZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtb2RhbEVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGlzZU92ZXJsYXkobW9kYWxFbGVtZW50KSB7XG5cdFx0XHRjb25zdCBvdmVybGF5ID0gbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cdFx0XHRvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBjbG9zZU1vZGFsKCkpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpc2VSZW1vdmVCdXR0b24obW9kYWxFbGVtZW50LCBib29rLCBib29rVGlsZSkge1xuXHRcdFx0Y29uc3QgcmVtb3ZlQnV0dG9uID0gbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1yZW1vdmVCb29rJyk7XG5cblx0XHRcdHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0XHRsaWJyYXJ5LnJlbW92ZShib29rKTtcblx0XHRcdFx0Ym9va1RpbGUucmVtb3ZlKCk7XG5cdFx0XHRcdGNsb3NlTW9kYWwoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpc2VDYW5jZWxCdXR0b24oZm9ybSkge1xuXHRcdFx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY2FuY2VsJyk7XG5cdFx0XHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGNsb3NlTW9kYWwoKSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGlzZUFkZEZvcm0oZm9ybSkge1xuXHRcdFx0Y29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tUaXRsZVwiXScpO1xuXG5cdFx0XHRhZGRWYWxpZGF0aW9uTWVzc2FnZXMoZm9ybSk7XG5cdFx0XHR0aXRsZUlucHV0LmZvY3VzKCk7XG5cblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBzdWJtaXQgYWN0aW9uXG5cblx0XHRcdFx0YWRkQm9vayhmb3JtKTtcblx0XHRcdFx0Y2xvc2VNb2RhbCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkQm9vayhmb3JtKSB7XG5cdFx0XHRjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1RpdGxlXCJdJyk7XG5cdFx0XHRjb25zdCBhdXRob3JJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tBdXRob3JcIl0nKTtcblx0XHRcdGNvbnN0IHBhZ2VDb3VudElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1BhZ2VDb3VudFwiXScpO1xuXHRcdFx0Y29uc3QgcmVhZFN0YXR1c0NoZWNrQm94ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicmVhZEJvb2tcIl0nKTtcblxuXHRcdFx0bGV0IG5ld0Jvb2sgPSBib29rKHRpdGxlSW5wdXQudmFsdWUsIGF1dGhvcklucHV0LnZhbHVlLCBwYXJzZUludChwYWdlQ291bnRJbnB1dC52YWx1ZSksIHJlYWRTdGF0dXNDaGVja0JveC5jaGVja2VkKTtcblx0XHRcdGxpYnJhcnkuYWRkKG5ld0Jvb2spO1xuXG5cdFx0XHRsZXQgbmV3Qm9va1RpbGUgPSBjcmVhdGVCb29rVGlsZShuZXdCb29rKTtcblx0XHRcdGluc2VydEJvb2tUaWxlKG5ld0Jvb2tUaWxlKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbml0aWFsaXNlVXBkYXRlRm9ybShmb3JtLCBib29rT2JqLCBib29rVGlsZSkge1xuXHRcdFx0Y29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tUaXRsZVwiXScpO1xuXHRcdFx0Y29uc3QgYXV0aG9ySW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJib29rQXV0aG9yXCJdJyk7XG5cdFx0XHRjb25zdCBwYWdlQ291bnRJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tQYWdlQ291bnRcIl0nKTtcblx0XHRcdGNvbnN0IHJlYWRTdGF0dXNDaGVja0JveCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInJlYWRCb29rXCJdJyk7XG5cblx0XHRcdHRpdGxlSW5wdXQudmFsdWUgPSBib29rT2JqLnRpdGxlO1xuXHRcdFx0YXV0aG9ySW5wdXQudmFsdWUgPSBib29rT2JqLmF1dGhvcjtcblx0XHRcdHBhZ2VDb3VudElucHV0LnZhbHVlID0gYm9va09iai5wYWdlQ291bnQ7XG5cdFx0XHRyZWFkU3RhdHVzQ2hlY2tCb3guY2hlY2tlZCA9IGJvb2tPYmoucmVhZDtcblxuXHRcdFx0YWRkVmFsaWRhdGlvbk1lc3NhZ2VzKGZvcm0pO1xuXG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgYm9va0RlbHRhID0gdXBkYXRlQm9va09iaihmb3JtLCBib29rT2JqKTtcblx0XHRcdFx0bGlicmFyeS51cGRhdGUoYm9va09iaiwgYm9va0RlbHRhKTtcblxuXHRcdFx0XHRsZXQgdXBkYXRlZEJvb2tUaWxlID0gY3JlYXRlQm9va1RpbGUoYm9va09iaik7XG5cdFx0XHRcdGJvb2tUaWxlLnJlcGxhY2VXaXRoKHVwZGF0ZWRCb29rVGlsZSk7XG5cblx0XHRcdFx0Y2xvc2VNb2RhbCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdGZ1bmN0aW9uIHVwZGF0ZUJvb2tPYmooZm9ybSwgYm9va09iaikge1xuXHRcdFx0Y29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tUaXRsZVwiXScpO1xuXHRcdFx0Y29uc3QgYXV0aG9ySW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJib29rQXV0aG9yXCJdJyk7XG5cdFx0XHRjb25zdCBwYWdlQ291bnRJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tQYWdlQ291bnRcIl0nKTtcblx0XHRcdGNvbnN0IHJlYWRTdGF0dXNDaGVja0JveCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInJlYWRCb29rXCJdJyk7XG5cblx0XHRcdGNvbnN0IGJvb2tEZWx0YSA9IGJvb2soKTtcblx0XHRcdFxuXHRcdFx0Ym9va0RlbHRhLnRpdGxlID0gYm9va09iai50aXRsZSAhPT0gdGl0bGVJbnB1dC52YWx1ZSA/XG5cdFx0XHRcdHRpdGxlSW5wdXQudmFsdWUgOiB1bmRlZmluZWQ7XG5cdFx0XHRib29rRGVsdGEuYXV0aG9yID0gYm9va09iai5hdXRob3IgIT09IGF1dGhvcklucHV0LnZhbHVlID9cblx0XHRcdFx0YXV0aG9ySW5wdXQudmFsdWUgOiB1bmRlZmluZWQ7XG5cdFx0XHRib29rRGVsdGEucGFnZUNvdW50ID0gYm9va09iai5wYWdlQ291bnQgIT09IHBhcnNlSW50KHBhZ2VDb3VudElucHV0LnZhbHVlKSA/XG5cdFx0XHRcdHBhcnNlSW50KHBhZ2VDb3VudElucHV0LnZhbHVlKSA6IHVuZGVmaW5lZDtcblx0XHRcdGJvb2tEZWx0YS5yZWFkID0gYm9va09iai5yZWFkICE9PSByZWFkU3RhdHVzQ2hlY2tCb3guY2hlY2tlZCA/XG5cdFx0XHRcdHJlYWRTdGF0dXNDaGVja0JveC5jaGVja2VkIDogdW5kZWZpbmVkO1xuXG5cdFx0XHRyZXR1cm4gYm9va0RlbHRhO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZFZhbGlkYXRpb25NZXNzYWdlcyhmb3JtKSB7XG5cdFx0XHRjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1RpdGxlXCJdJyk7XG5cdFx0XHRjb25zdCBhdXRob3JJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvb2tBdXRob3JcIl0nKTtcblx0XHRcdGNvbnN0IHBhZ2VDb3VudElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYm9va1BhZ2VDb3VudFwiXScpO1xuXG5cdFx0XHRhZGRUaXRsZVZhbGlkYXRpb25NZXNzYWdlKHRpdGxlSW5wdXQpO1xuXHRcdFx0YWRkQXV0aG9yVmFsaWRhdGlvbk1lc3NhZ2UoYXV0aG9ySW5wdXQpO1xuXHRcdFx0YWRkUGFnZUNvdW50VmFsaWRhdGlvbk1lc3NhZ2UocGFnZUNvdW50SW5wdXQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZFRpdGxlVmFsaWRhdGlvbk1lc3NhZ2UodGl0bGVJbnB1dCkge1xuXHRcdFx0aWYgKHRpdGxlSW5wdXQudmFsdWUgPT09IHVuZGVmaW5lZCkgXG5cdFx0XHRcdHRpdGxlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciB0aGUgYm9vayB0aXRsZS4nKTtcblxuXHRcdFx0dGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcblx0XHRcdFx0aWYgKHRpdGxlSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG5cdFx0XHRcdFx0dGl0bGVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIHRoZSBib29rIHRpdGxlLicpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhZGRBdXRob3JWYWxpZGF0aW9uTWVzc2FnZShhdXRob3JJbnB1dCkge1xuXHRcdFx0aWYgKGF1dGhvcklucHV0LnZhbHVlID09PSB1bmRlZmluZWQpXG5cdFx0XHRcdGF1dGhvcklucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYW4gYXV0aG9yLicpO1xuXG5cdFx0XHRhdXRob3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcblx0XHRcdFx0aWYgKGF1dGhvcklucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuXHRcdFx0XHRcdGF1dGhvcklucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYW4gYXV0aG9yLicpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGF1dGhvcklucHV0LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuXHRcdFx0XHRcdGF1dGhvcklucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdBdXRob3IgbmFtZSBjYW5ub3QgY29udGFpbiBudW1iZXJzLicpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGF1dGhvcklucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkUGFnZUNvdW50VmFsaWRhdGlvbk1lc3NhZ2UocGFnZUNvdW50SW5wdXQpIHtcblx0XHRcdGlmIChwYWdlQ291bnRJbnB1dC52YWx1ZSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRwYWdlQ291bnRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIHRoZSBudW1iZXIgb2YgcGFnZXMuJyk7XG5cblx0XHRcdHBhZ2VDb3VudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuXHRcdFx0XHRpZiAocGFnZUNvdW50SW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG5cdFx0XHRcdFx0cGFnZUNvdW50SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciB0aGUgbnVtYmVyIG9mIHBhZ2VzLicpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHBhZ2VDb3VudElucHV0LnZhbGlkaXR5LnJhbmdlVW5kZXJmbG93KSB7XG5cdFx0XHRcdFx0cGFnZUNvdW50SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIG51bWJlciBncmVhdGVyIHRoYW4gMC4nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYWdlQ291bnRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG5cdFx0XHRjb25zdCBtb2RhbEVsZW1lbnQgPSBib2R5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2lkZ2V0Jyk7XG5cblx0XHRcdGlmIChtb2RhbEVsZW1lbnQpIG1vZGFsRWxlbWVudC5yZW1vdmUoKTtcblx0XHR9XG5cdH0pKCk7XG5cblx0Y29uc3QgZm9vdGVyID0gKCgpID0+IHtcblx0XHRjb25zdCBmb290ZXJFbGVtZW50ID0gY3JlYXRlLmZvb3RlckVsZW1lbnQoKTtcblx0XHRib2R5RWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KTtcblx0fSkoKTtcbn1cbiIsImltcG9ydCB7IGJvb2sgYXMgbmV3Qm9vayB9IGZyb20gJy4vbW9kdWxlcy9ib29rJztcblxuY29uc3QgYm9va0xpc3QgPSBbXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBQaGlsb3NvcGhlcidzIFN0b25lXCIsIFwiSGFycnkgUG90dGVyIGFuZCB0aGUgQ2hhbWJlciBvZiBTZWNyZXRzXCIsIFwiSGFycnkgUG90dGVyIGFuZCB0aGUgUHJpc29uZXIgb2YgQXprYWJhblwiLCBcIkhhcnJ5IFBvdHRlciBhbmQgdGhlIEdvYmxldCBvZiBGaXJlXCIsIFwiSGFycnkgUG90dGVyIGFuZCB0aGUgT3JkZXIgb2YgdGhlIFBoZW9uaXhcIiwgXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBIYWxmIEJvb2QtUHJpbmNlXCIsIFwiSGFycnkgUG90dGVyIGFuZCB0aGUgRGVhdGhseSBIYWxsb3dzXCJdO1xuXG5jb25zdCBwYWdlQ291bnRzID0gWzMwOSwgMzQxLCA0MzUsIDczNCwgODcwLCA2NTIsIDc1OV07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0RGF0YShhcHApIHtcblx0Y29uc29sZS5sb2coJ0NyZWF0aW5nIHRlc3QgZGF0YS4uLicpO1xuXG5cdGJvb2tMaXN0LmZvckVhY2godGl0bGUgPT4ge1xuXHRcdGxldCBib29rID0gbmV3Qm9vayh0aXRsZSwgJ0ouSyBSb3dsaW5nJywgcGFnZUNvdW50c1tib29rTGlzdC5pbmRleE9mKHRpdGxlKV0sIGZhbHNlKTtcblxuXHRcdGFwcC5hZGQoYm9vayk7XG5cdH0pO1xuXG5cdGNvbnNvbGUubG9nKCdUZXN0IGRhdGEgY3JlYXRlZCEnKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9