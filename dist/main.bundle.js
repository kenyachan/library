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
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
	margin: auto;
	border: none;
	border-radius: 18px;
	padding: 2rem;
	box-shadow: 2px 4px 12px #00000014;

	width: 275px;
}

.modal::backdrop {
	backdrop-filter: blur(2px);
}

#modal-title {
	margin-bottom: 1rem;

	font-weight: bold;
}

.modal form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.modal input[type="text"] {
	height: 2rem;
	border: none;
	border-bottom: 2px solid lightgrey;
	transition: border-bottom .25s ease-in-out;

	text-overflow: ellipsis;
	outline: none;
	padding: 5px;
}

.modal input[type="text"]:focus {
	border-bottom: 2px solid orange;
}

.modal button {
	width: 80px;

	align-self: center;
}

.modal button:hover {
	background-color: orange;
	color: whitesmoke;	
}
`, "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,YAAY;CACZ,mBAAmB;CACnB,aAAa;CACb,kCAAkC;;CAElC,YAAY;AACb;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,mBAAmB;;CAEnB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,kCAAkC;CAClC,0CAA0C;;CAE1C,uBAAuB;CACvB,aAAa;CACb,YAAY;AACb;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,WAAW;;CAEX,kBAAkB;AACnB;;AAEA;CACC,wBAAwB;CACxB,iBAAiB;AAClB","sourcesContent":[".modal {\n\tmargin: auto;\n\tborder: none;\n\tborder-radius: 18px;\n\tpadding: 2rem;\n\tbox-shadow: 2px 4px 12px #00000014;\n\n\twidth: 275px;\n}\n\n.modal::backdrop {\n\tbackdrop-filter: blur(2px);\n}\n\n#modal-title {\n\tmargin-bottom: 1rem;\n\n\tfont-weight: bold;\n}\n\n.modal form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.modal input[type=\"text\"] {\n\theight: 2rem;\n\tborder: none;\n\tborder-bottom: 2px solid lightgrey;\n\ttransition: border-bottom .25s ease-in-out;\n\n\ttext-overflow: ellipsis;\n\toutline: none;\n\tpadding: 5px;\n}\n\n.modal input[type=\"text\"]:focus {\n\tborder-bottom: 2px solid orange;\n}\n\n.modal button {\n\twidth: 80px;\n\n\talign-self: center;\n}\n\n.modal button:hover {\n\tbackground-color: orange;\n\tcolor: whitesmoke;\t\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	font-family: Arial, Helvetica, sans-serif;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/* 
 * Site page arrangement
 */

body {
	display: flex;
	flex-direction: column;
	min-height: 100svh;

	gap: 2rem;
}

body {
	background-color: whitesmoke;
}

main {
	display: flex;
	flex: 1 1 auto;
}

/* main body */

main {
	display: flex;
	
	flex-direction: column;

	gap: 3rem;

	align-items: center;
}

#library {
	width: 95vw;
	justify-content: center;
	display: grid;
	grid-template-columns: repeat(auto-fill, 250px);
	grid-auto-rows: max-content;
	grid-gap: 1.5rem;
}

header {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	border-bottom: 1px solid lightgrey;

	user-select: none;
}

footer {
	padding: 2rem 4rem;
	border-top: 1px solid lightgrey;

	display: flex;
	justify-content: space-between;
	align-items: center;
}

#attributions {
	display: flex;
	flex-direction: column;
}

#attributions p {
	font-weight: bold;
}

.title {
	font-size: 3rem;
	text-align: center;
	margin-bottom: 1rem;
	cursor: default;
}

button {
	padding: 5px 15px;
	border-radius: 18px;
	border: none;
	color: grey;
	background-color: lightgrey;
}

#open-modal-btn:hover {
	background-color: green;
	color: whitesmoke;
}

#open-modal-btn:active {
	background-color: lightgreen;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;CACC,yCAAyC;AAC1C;;AAEA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;;EAEE;;AAEF;CACC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;;CAElB,SAAS;AACV;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,aAAa;CACb,cAAc;AACf;;AAEA,cAAc;;AAEd;CACC,aAAa;;CAEb,sBAAsB;;CAEtB,SAAS;;CAET,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,uBAAuB;CACvB,aAAa;CACb,+CAA+C;CAC/C,2BAA2B;CAC3B,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,aAAa;CACb,kCAAkC;;CAElC,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,+BAA+B;;CAE/B,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;CACnB,YAAY;CACZ,WAAW;CACX,2BAA2B;AAC5B;;AAEA;CACC,uBAAuB;CACvB,iBAAiB;AAClB;;AAEA;CACC,4BAA4B;AAC7B","sourcesContent":[":root {\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n/* \n * Site page arrangement\n */\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100svh;\n\n\tgap: 2rem;\n}\n\nbody {\n\tbackground-color: whitesmoke;\n}\n\nmain {\n\tdisplay: flex;\n\tflex: 1 1 auto;\n}\n\n/* main body */\n\nmain {\n\tdisplay: flex;\n\t\n\tflex-direction: column;\n\n\tgap: 3rem;\n\n\talign-items: center;\n}\n\n#library {\n\twidth: 95vw;\n\tjustify-content: center;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 250px);\n\tgrid-auto-rows: max-content;\n\tgrid-gap: 1.5rem;\n}\n\nheader {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: 1rem;\n\tborder-bottom: 1px solid lightgrey;\n\n\tuser-select: none;\n}\n\nfooter {\n\tpadding: 2rem 4rem;\n\tborder-top: 1px solid lightgrey;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#attributions {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#attributions p {\n\tfont-weight: bold;\n}\n\n.title {\n\tfont-size: 3rem;\n\ttext-align: center;\n\tmargin-bottom: 1rem;\n\tcursor: default;\n}\n\nbutton {\n\tpadding: 5px 15px;\n\tborder-radius: 18px;\n\tborder: none;\n\tcolor: grey;\n\tbackground-color: lightgrey;\n}\n\n#open-modal-btn:hover {\n\tbackground-color: green;\n\tcolor: whitesmoke;\n}\n\n#open-modal-btn:active {\n\tbackground-color: lightgreen;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/switch.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/switch.css ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * SWITCH WIDGET
 */

.switch-widget {
    display: flex;
    align-items: center;
	flex-direction: row-reverse;
	justify-content: space-between;
}

.switch-widget > label {
    display: flex;
    align-items: center;
}

.switch-widget input[type="checkbox"] {
    appearance: none;
    width: 37px;
    height: 12px;
    border-radius: 15px;
    background-color: lightgrey;
    position: relative;
    transition: background-color 400ms ease;
	cursor: pointer;
}

.switch-widget input[type="checkbox"]:checked {
	background-color: orange;
    transition: background-color 400ms ease;
	cursor: pointer;
}

/* slider pseudo element */
.switch-widget input[type="checkbox"]:checked::before {
    left: 19px;
	background-color: white;
    transition: left 200ms ease-in-out;
	cursor: pointer;
}

.switch-widget input[type="checkbox"]::before {
    width: 16px;
    height: 16px;
    border: 1px solid lightgrey;
    border-radius: 50%;
    background-color: white;
    content: '';
    position: absolute;
    top: -3px;
    left: 0px;
    transition: left 200ms ease-in-out;
	cursor: pointer;
}

.switch-widget input[type="checkbox"] ~ label .off,
.switch-widget input[type="checkbox"]:checked ~ label .on {
    opacity: 1;
    transition: opacity 100ms;
}

.switch-widget input[type="checkbox"] ~ label .on,
.switch-widget input[type="checkbox"]:checked ~ label .off {
    opacity: 0;
    transition: opacity 100ms;
}

.switch-widget label span {
    position: absolute;
	/*cursor: pointer;*/
}
`, "",{"version":3,"sources":["webpack://./src/css/switch.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,aAAa;IACb,mBAAmB;CACtB,2BAA2B;CAC3B,8BAA8B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,uCAAuC;CAC1C,eAAe;AAChB;;AAEA;CACC,wBAAwB;IACrB,uCAAuC;CAC1C,eAAe;AAChB;;AAEA,0BAA0B;AAC1B;IACI,UAAU;CACb,uBAAuB;IACpB,kCAAkC;CACrC,eAAe;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,kCAAkC;CACrC,eAAe;AAChB;;AAEA;;IAEI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;;IAEI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;CACrB,mBAAmB;AACpB","sourcesContent":["/*\n * SWITCH WIDGET\n */\n\n.switch-widget {\n    display: flex;\n    align-items: center;\n\tflex-direction: row-reverse;\n\tjustify-content: space-between;\n}\n\n.switch-widget > label {\n    display: flex;\n    align-items: center;\n}\n\n.switch-widget input[type=\"checkbox\"] {\n    appearance: none;\n    width: 37px;\n    height: 12px;\n    border-radius: 15px;\n    background-color: lightgrey;\n    position: relative;\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]:checked {\n\tbackground-color: orange;\n    transition: background-color 400ms ease;\n\tcursor: pointer;\n}\n\n/* slider pseudo element */\n.switch-widget input[type=\"checkbox\"]:checked::before {\n    left: 19px;\n\tbackground-color: white;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"]::before {\n    width: 16px;\n    height: 16px;\n    border: 1px solid lightgrey;\n    border-radius: 50%;\n    background-color: white;\n    content: '';\n    position: absolute;\n    top: -3px;\n    left: 0px;\n    transition: left 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .off,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .on {\n    opacity: 1;\n    transition: opacity 100ms;\n}\n\n.switch-widget input[type=\"checkbox\"] ~ label .on,\n.switch-widget input[type=\"checkbox\"]:checked ~ label .off {\n    opacity: 0;\n    transition: opacity 100ms;\n}\n\n.switch-widget label span {\n    position: absolute;\n\t/*cursor: pointer;*/\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `.tile {
	border-radius: 18px;

	display: flex;
	flex-direction: column;

	background-color: white;
	box-shadow: 2px 4px 12px #00000014;
}

.tile {
	transition: transform .3;
}

.tile:hover {
	transform: scale(1.02);

}

.tile p {
	cursor: default;
}

.tile-padding {
	padding: 1.5rem;
}

/* text overflow */
.tile-title {
	overflow: hidden;
	text-overflow: ellipsis;

	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}

.tile-title {
	font-weight: bold;
}

.tile>button {
	border-radius: 18px;
	border: none;
	padding: 5px 15px;
	width: fit-content;
	align-self: end;

	cursor: pointer;

	background-color: whitesmoke;
	color: lightgrey;
}

.tile>button:hover {
	background-color: red;
	color: whitesmoke;
}

.tile-author {
	font-size: .75rem;
	text-transform: uppercase;
}

.tile-author {
	margin-bottom: 1rem;
}

.tile-pages {
	font-size: .75rem;
	text-transform: uppercase;
}

.tile-pages {
	margin-bottom: 1rem;
}

.switch-widget {
	margin-bottom: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/css/tile.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;;CAEnB,aAAa;CACb,sBAAsB;;CAEtB,uBAAuB;CACvB,kCAAkC;AACnC;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,sBAAsB;;AAEvB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA,kBAAkB;AAClB;CACC,gBAAgB;CAChB,uBAAuB;;CAEvB,oBAAoB;CACpB,4BAA4B;CAC5B,qBAAqB;AACtB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,YAAY;CACZ,iBAAiB;CACjB,kBAAkB;CAClB,eAAe;;CAEf,eAAe;;CAEf,4BAA4B;CAC5B,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB","sourcesContent":[".tile {\n\tborder-radius: 18px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tbackground-color: white;\n\tbox-shadow: 2px 4px 12px #00000014;\n}\n\n.tile {\n\ttransition: transform .3;\n}\n\n.tile:hover {\n\ttransform: scale(1.02);\n\n}\n\n.tile p {\n\tcursor: default;\n}\n\n.tile-padding {\n\tpadding: 1.5rem;\n}\n\n/* text overflow */\n.tile-title {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\n\tdisplay: -webkit-box;\n\t-webkit-box-orient: vertical;\n\t-webkit-line-clamp: 3;\n}\n\n.tile-title {\n\tfont-weight: bold;\n}\n\n.tile>button {\n\tborder-radius: 18px;\n\tborder: none;\n\tpadding: 5px 15px;\n\twidth: fit-content;\n\talign-self: end;\n\n\tcursor: pointer;\n\n\tbackground-color: whitesmoke;\n\tcolor: lightgrey;\n}\n\n.tile>button:hover {\n\tbackground-color: red;\n\tcolor: whitesmoke;\n}\n\n.tile-author {\n\tfont-size: .75rem;\n\ttext-transform: uppercase;\n}\n\n.tile-author {\n\tmargin-bottom: 1rem;\n}\n\n.tile-pages {\n\tfont-size: .75rem;\n\ttext-transform: uppercase;\n}\n\n.tile-pages {\n\tmargin-bottom: 1rem;\n}\n\n.switch-widget {\n\tmargin-bottom: 1rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/switch.css":
/*!****************************!*\
  !*** ./src/css/switch.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_switch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./switch.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/switch.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_switch_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_switch_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_switch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_switch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/app/book.js":
/*!*************************!*\
  !*** ./src/app/book.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Book: () => (/* binding */ Book)
/* harmony export */ });
class Book {
	constructor(title, author, pages, read = false) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}




/***/ }),

/***/ "./src/app/bookGenerator.js":
/*!**********************************!*\
  !*** ./src/app/bookGenerator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookGenerator: () => (/* binding */ BookGenerator)
/* harmony export */ });
/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ "./src/app/book.js");


class BookGenerator {
	static generateBooks(library) {
		const books = [
				{
					title : "Harry Potter and the Philosopher's Stone",
					author : "J.K. Rowling",
					pages : 223
				},
				{
					title : "Harry Potter and the Chamber of Secrets",
					author : "J.K. Rowling",
					pages : 251
				},
				{
					title : "Harry Potter and the Prisoner of Azkaban",
					author : "J.K. Rowling",
					pages : 317
				},
				{
					title : "Harry Potter and the Goblet of Fire",
					author : "J.K. Rowling",
					pages : 636
				},
				{
					title: "Harry Potter an the Order of the Phoenix",
					author : "J.K.Rowling",
					pages : 766
				},
				{
					title: "Harry Potter and the Half-Blood Prince",
					author : "J.K. Rowling",
					pages : 607
				},
				{
					title: "Harry Potter and the Deathly Hallows",
					author : "J.K. Rowling",
					pages : 607
				}
			]

		books.forEach(book => 
			library.add(new _book_js__WEBPACK_IMPORTED_MODULE_0__.Book(book.title, book.author, book.pages))
		);
	}
}




/***/ }),

/***/ "./src/app/library.js":
/*!****************************!*\
  !*** ./src/app/library.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Library: () => (/* binding */ Library)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/app/storage.js");


class Library {
	constructor() {
		this.bookCollection = _storage_js__WEBPACK_IMPORTED_MODULE_0__.getBookCollection();
	}

	add(book) {
		if (!this.bookCollection.has(book.title)) {
			this.bookCollection.set(book.title, book);

			console.log(`Book added to the library: ${book.title} by ${book.author}`);
			_storage_js__WEBPACK_IMPORTED_MODULE_0__.save(this.bookCollection);
		}
	}

	get(title) {
		return this.bookCollection.get(title);
	}

	remove(title) {
		const deletedBook = this.bookCollection.delete(title);
		if (deletedBook) {
			console.log(`Book removed from the library : ${title}`);
			_storage_js__WEBPACK_IMPORTED_MODULE_0__.save(this.bookCollection);
		}

		return deletedBook;
	}

	getBooks() {
		return this.bookCollection;
	}
}




/***/ }),

/***/ "./src/app/storage.js":
/*!****************************!*\
  !*** ./src/app/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBookCollection: () => (/* binding */ getBookCollection),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
function save(bookCollection) {
	localStorage.setItem('bookCollection', JSON.stringify([...bookCollection]));
}

function getBookCollection() {
	return new Map(JSON.parse(localStorage.getItem('bookCollection')));
}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_switch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/switch.css */ "./src/css/switch.css");
/* harmony import */ var _css_tile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/tile.css */ "./src/css/tile.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _app_book_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/book.js */ "./src/app/book.js");
/* harmony import */ var _app_library_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/library.js */ "./src/app/library.js");
/* harmony import */ var _app_bookGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/bookGenerator.js */ "./src/app/bookGenerator.js");
/* harmony import */ var _ui_screenController_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/screenController.js */ "./src/ui/screenController.js");










const library = new _app_library_js__WEBPACK_IMPORTED_MODULE_5__.Library();
//BookGenerator.generateBooks(library);

const screenController = new _ui_screenController_js__WEBPACK_IMPORTED_MODULE_7__.ScreenController(library);


/***/ }),

/***/ "./src/ui/bookTile.js":
/*!****************************!*\
  !*** ./src/ui/bookTile.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookTile: () => (/* binding */ BookTile)
/* harmony export */ });
class BookTile {
	constructor(book) {
		this.book = book;

		this.element = document.createElement('div');
		this.element.classList.add('book', 'tile', 'tile-padding');

		this.element.appendChild(this.#createTitleElement(book.title));
		this.element.appendChild(this.#createAuthorElement(book.author));
		this.element.appendChild(this.#createPagesElement(book.pages))
		this.element.appendChild(this.#createReadSwitch(book.read));
		this.element.appendChild(this.#createRemoveButton());
	}

	#createTitleElement(titleText) {
		const element = document.createElement('p');
		element.classList.add('tile-title');
		element.textContent = titleText;

		return element;
	}

	#createAuthorElement(authorText) {
		const element = document.createElement('p');
		element.classList.add('tile-author');
		element.textContent = authorText;

		return element;
	}

	#createPagesElement(pagesText) {
		const element = document.createElement('p');
		element.classList.add('tile-pages');
		element.textContent = `${pagesText} pages`;

		return element;
	}

	#createReadSwitch(read) {
		const switchElement = document.createElement('div');
		const input = document.createElement('input');
		const label = document.createElement('label');
		const readLabel = document.createElement('span');
		const notReadLabel = document.createElement('span');

		switchElement.classList.add('switch-widget');

		input.setAttribute('type', 'checkbox');
		input.setAttribute('name', 'bookRead');
		input.checked = read ? true : false;

		readLabel.textContent = 'Read';
		readLabel.classList.add('on');

		notReadLabel.textContent = 'Not read';
		notReadLabel.classList.add('off');
	
		label.appendChild(readLabel);
		label.appendChild(notReadLabel);

		switchElement.appendChild(input);
		switchElement.appendChild(label);
		
		return switchElement;
	}

	#createRemoveButton() {
		const button = document.createElement('button');
		button.setAttribute('type', 'button');
		button.classList.add('remove-book-btn');
		button.textContent = 'Remove';

		return button;
	}
}




/***/ }),

/***/ "./src/ui/screenController.js":
/*!************************************!*\
  !*** ./src/ui/screenController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenController: () => (/* binding */ ScreenController)
/* harmony export */ });
/* harmony import */ var _bookTile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookTile.js */ "./src/ui/bookTile.js");
/* harmony import */ var _app_book_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/book.js */ "./src/app/book.js");
/* harmony import */ var _odin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./odin.png */ "./src/ui/odin.png");
/* harmony import */ var _library_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library.png */ "./src/ui/library.png");





class ScreenController {
	constructor(library) {
		this.#loadHeaderIcon();

		this.library = library;
		this.libraryElement = document.querySelector('#library');
		this.modal = document.querySelector('.modal');

		document.querySelector('#open-modal-btn').
			addEventListener('click', () => this.modal.showModal());
		document.querySelector('#close-modal-btn').
			addEventListener('click', () => this.modal.close());
		document.querySelector('#add-book-btn').
			addEventListener('click', (event) => {
				event.preventDefault();
				this.#addBookToLibrary()
			});

		this.library.getBooks().forEach(book => this.#createBookTile(book));
	}

	#loadHeaderIcon() {
		const headerElement = document.querySelector('#icon-container');

		const odinLogo = new Image();
		odinLogo.src = _odin_png__WEBPACK_IMPORTED_MODULE_2__;

		const libraryLogo = new Image();
		libraryLogo.src = _library_png__WEBPACK_IMPORTED_MODULE_3__;

		headerElement.appendChild(odinLogo);
		headerElement.appendChild(libraryLogo);
	}

	#createBookTile(book) {
		const bookTile = new _bookTile_js__WEBPACK_IMPORTED_MODULE_0__.BookTile(book);

		bookTile.element.querySelector('.remove-book-btn').addEventListener(
			'click', () => this.#removeBook(bookTile)
		);

		this.libraryElement.appendChild(bookTile.element);
	}

	#removeBook(bookTile) {
		this.library.remove(bookTile.book.title);
		bookTile.element.remove();
	}

	#addBookToLibrary() {
		const title = document.querySelector('#book-title').value;
		const author= document.querySelector('#book-author').value;
		const pages = document.querySelector('#book-pages').value;
		const read = document.querySelector('#book-read').checked;

		const book = new _app_book_js__WEBPACK_IMPORTED_MODULE_1__.Book(title, author, pages, read);

		this.library.add(book);
		this.#createBookTile(book);

		document.querySelector('#new-book-form').reset();

		this.modal.close();
	}
}




/***/ }),

/***/ "./src/ui/library.png":
/*!****************************!*\
  !*** ./src/ui/library.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e36a75549deca0ae622.png";

/***/ }),

/***/ "./src/ui/odin.png":
/*!*************************!*\
  !*** ./src/ui/odin.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc8dfc2e0b48f51a4c81.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIsc0NBQVE7O0FBRXpCO0FBQ0Esb0JBQW9CLHlDQUFXOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsa0RBQVE7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDhDQUFJOztBQUV2QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3NzL3N3aXRjaC5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9jc3MvdGlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3NzL21vZGFsLmNzcz9mMzgxIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3NzL3N3aXRjaC5jc3M/MmE5NSIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2Nzcy90aWxlLmNzcz9iM2ZiIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9hcHAvYm9vay5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2FwcC9ib29rR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvYXBwL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9hcHAvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvdWkvYm9va1RpbGUuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy91aS9zY3JlZW5Db250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwge1xuXHRtYXJnaW46IGF1dG87XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMThweDtcblx0cGFkZGluZzogMnJlbTtcblx0Ym94LXNoYWRvdzogMnB4IDRweCAxMnB4ICMwMDAwMDAxNDtcblxuXHR3aWR0aDogMjc1cHg7XG59XG5cbi5tb2RhbDo6YmFja2Ryb3Age1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbn1cblxuI21vZGFsLXRpdGxlIHtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcblxuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1vZGFsIGZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG59XG5cbi5tb2RhbCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG5cdGhlaWdodDogMnJlbTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xuXHR0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIC4yNXMgZWFzZS1pbi1vdXQ7XG5cblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHBhZGRpbmc6IDVweDtcbn1cblxuLm1vZGFsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIG9yYW5nZTtcbn1cblxuLm1vZGFsIGJ1dHRvbiB7XG5cdHdpZHRoOiA4MHB4O1xuXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1vZGFsIGJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcblx0Y29sb3I6IHdoaXRlc21va2U7XHRcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0NBQWtDOztDQUVsQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxtQkFBbUI7O0NBRW5CLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQ0FBa0M7Q0FDbEMsMENBQTBDOztDQUUxQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLFlBQVk7QUFDYjs7QUFFQTtDQUNDLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLFdBQVc7O0NBRVgsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwge1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMThweDtcXG5cXHRwYWRkaW5nOiAycmVtO1xcblxcdGJveC1zaGFkb3c6IDJweCA0cHggMTJweCAjMDAwMDAwMTQ7XFxuXFxuXFx0d2lkdGg6IDI3NXB4O1xcbn1cXG5cXG4ubW9kYWw6OmJhY2tkcm9wIHtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG59XFxuXFxuI21vZGFsLXRpdGxlIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLm1vZGFsIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcblxcdHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gLjI1cyBlYXNlLWluLW91dDtcXG5cXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1vZGFsIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuLm1vZGFsIGJ1dHRvbiB7XFxuXFx0d2lkdGg6IDgwcHg7XFxuXFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwgYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFx0XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogXG4gKiBTaXRlIHBhZ2UgYXJyYW5nZW1lbnRcbiAqL1xuXG5ib2R5IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWluLWhlaWdodDogMTAwc3ZoO1xuXG5cdGdhcDogMnJlbTtcbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbm1haW4ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4OiAxIDEgYXV0bztcbn1cblxuLyogbWFpbiBib2R5ICovXG5cbm1haW4ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRnYXA6IDNyZW07XG5cblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xpYnJhcnkge1xuXHR3aWR0aDogOTV2dztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjUwcHgpO1xuXHRncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XG5cdGdyaWQtZ2FwOiAxLjVyZW07XG59XG5cbmhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG5cblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmZvb3RlciB7XG5cdHBhZGRpbmc6IDJyZW0gNHJlbTtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhdHRyaWJ1dGlvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jYXR0cmlidXRpb25zIHAge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlIHtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdGN1cnNvcjogZGVmYXVsdDtcbn1cblxuYnV0dG9uIHtcblx0cGFkZGluZzogNXB4IDE1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDE4cHg7XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6IGdyZXk7XG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuI29wZW4tbW9kYWwtYnRuOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG5cdGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4jb3Blbi1tb2RhbC1idG46YWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyx5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2Qjs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsa0JBQWtCOztDQUVsQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsY0FBYztBQUNmOztBQUVBLGNBQWM7O0FBRWQ7Q0FDQyxhQUFhOztDQUViLHNCQUFzQjs7Q0FFdEIsU0FBUzs7Q0FFVCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYiwrQ0FBK0M7Q0FDL0MsMkJBQTJCO0NBQzNCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixrQ0FBa0M7O0NBRWxDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiwrQkFBK0I7O0NBRS9CLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0NBQ1gsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFxcbiAqIFNpdGUgcGFnZSBhcnJhbmdlbWVudFxcbiAqL1xcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtaW4taGVpZ2h0OiAxMDBzdmg7XFxuXFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5tYWluIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4vKiBtYWluIGJvZHkgKi9cXG5cXG5tYWluIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0Z2FwOiAzcmVtO1xcblxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsaWJyYXJ5IHtcXG5cXHR3aWR0aDogOTV2dztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjUwcHgpO1xcblxcdGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG5cXHRncmlkLWdhcDogMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG5cXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRwYWRkaW5nOiAycmVtIDRyZW07XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYXR0cmlidXRpb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNhdHRyaWJ1dGlvbnMgcCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiA1cHggMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxOHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjb2xvcjogZ3JleTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbiNvcGVuLW1vZGFsLWJ0bjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0Y29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNvcGVuLW1vZGFsLWJ0bjphY3RpdmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiAqIFNXSVRDSCBXSURHRVRcbiAqL1xuXG4uc3dpdGNoLXdpZGdldCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnN3aXRjaC13aWRnZXQgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGVhc2U7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcyBlYXNlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIHNsaWRlciBwc2V1ZG8gZWxlbWVudCAqL1xuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgbGVmdDogMTlweDtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAyMDBtcyBlYXNlLWluLW91dDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAyMDBtcyBlYXNlLWluLW91dDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gfiBsYWJlbCAub2ZmLFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBsYWJlbCAub24ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcztcbn1cblxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIH4gbGFiZWwgLm9uLFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBsYWJlbCAub2ZmIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXM7XG59XG5cbi5zd2l0Y2gtd2lkZ2V0IGxhYmVsIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0LypjdXJzb3I6IHBvaW50ZXI7Ki9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zd2l0Y2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFOztBQUVGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtDQUN0QiwyQkFBMkI7Q0FDM0IsOEJBQThCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHVDQUF1QztDQUMxQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msd0JBQXdCO0lBQ3JCLHVDQUF1QztDQUMxQyxlQUFlO0FBQ2hCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFVBQVU7Q0FDYix1QkFBdUI7SUFDcEIsa0NBQWtDO0NBQ3JDLGVBQWU7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxrQ0FBa0M7Q0FDckMsZUFBZTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7Q0FDckIsbUJBQW1CO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICogU1dJVENIIFdJREdFVFxcbiAqL1xcblxcbi5zd2l0Y2gtd2lkZ2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCA+IGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAzN3B4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGVhc2U7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXdpZGdldCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcyBlYXNlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogc2xpZGVyIHBzZXVkbyBlbGVtZW50ICovXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICBsZWZ0OiAxOXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDIwMG1zIGVhc2UtaW4tb3V0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAyMDBtcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gfiBsYWJlbCAub2ZmLFxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGxhYmVsIC5vbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXM7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gfiBsYWJlbCAub24sXFxuLnN3aXRjaC13aWRnZXQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gbGFiZWwgLm9mZiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXM7XFxufVxcblxcbi5zd2l0Y2gtd2lkZ2V0IGxhYmVsIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0LypjdXJzb3I6IHBvaW50ZXI7Ki9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGlsZSB7XG5cdGJvcmRlci1yYWRpdXM6IDE4cHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym94LXNoYWRvdzogMnB4IDRweCAxMnB4ICMwMDAwMDAxNDtcbn1cblxuLnRpbGUge1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM7XG59XG5cbi50aWxlOmhvdmVyIHtcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcblxufVxuXG4udGlsZSBwIHtcblx0Y3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udGlsZS1wYWRkaW5nIHtcblx0cGFkZGluZzogMS41cmVtO1xufVxuXG4vKiB0ZXh0IG92ZXJmbG93ICovXG4udGlsZS10aXRsZSB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHQtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG59XG5cbi50aWxlLXRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aWxlPmJ1dHRvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDE4cHg7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogNXB4IDE1cHg7XG5cdHdpZHRoOiBmaXQtY29udGVudDtcblx0YWxpZ24tc2VsZjogZW5kO1xuXG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuXHRjb2xvcjogbGlnaHRncmV5O1xufVxuXG4udGlsZT5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGlsZS1hdXRob3Ige1xuXHRmb250LXNpemU6IC43NXJlbTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRpbGUtYXV0aG9yIHtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRpbGUtcGFnZXMge1xuXHRmb250LXNpemU6IC43NXJlbTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRpbGUtcGFnZXMge1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc3dpdGNoLXdpZGdldCB7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxtQkFBbUI7O0NBRW5CLGFBQWE7Q0FDYixzQkFBc0I7O0NBRXRCLHVCQUF1QjtDQUN2QixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxzQkFBc0I7O0FBRXZCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0NBQ0MsZ0JBQWdCO0NBQ2hCLHVCQUF1Qjs7Q0FFdkIsb0JBQW9CO0NBQ3BCLDRCQUE0QjtDQUM1QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZUFBZTs7Q0FFZixlQUFlOztDQUVmLDRCQUE0QjtDQUM1QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpbGUge1xcblxcdGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJveC1zaGFkb3c6IDJweCA0cHggMTJweCAjMDAwMDAwMTQ7XFxufVxcblxcbi50aWxlIHtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM7XFxufVxcblxcbi50aWxlOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcblxcbn1cXG5cXG4udGlsZSBwIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi50aWxlLXBhZGRpbmcge1xcblxcdHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLyogdGV4dCBvdmVyZmxvdyAqL1xcbi50aWxlLXRpdGxlIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1saW5lLWNsYW1wOiAzO1xcbn1cXG5cXG4udGlsZS10aXRsZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50aWxlPmJ1dHRvbiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMThweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogNXB4IDE1cHg7XFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcblxcdGFsaWduLXNlbGY6IGVuZDtcXG5cXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG5cXHRjb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4udGlsZT5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXHRjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLnRpbGUtYXV0aG9yIHtcXG5cXHRmb250LXNpemU6IC43NXJlbTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4udGlsZS1hdXRob3Ige1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50aWxlLXBhZ2VzIHtcXG5cXHRmb250LXNpemU6IC43NXJlbTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4udGlsZS1wYWdlcyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnN3aXRjaC13aWRnZXQge1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3dpdGNoLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N3aXRjaC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgQm9vayB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkID0gZmFsc2UpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdFx0dGhpcy5wYWdlcyA9IHBhZ2VzO1xuXHRcdHRoaXMucmVhZCA9IHJlYWQ7XG5cdH1cbn1cblxuZXhwb3J0IHsgQm9vayB9O1xuIiwiaW1wb3J0IHsgQm9vayB9IGZyb20gJy4vYm9vay5qcyc7XG5cbmNsYXNzIEJvb2tHZW5lcmF0b3Ige1xuXHRzdGF0aWMgZ2VuZXJhdGVCb29rcyhsaWJyYXJ5KSB7XG5cdFx0Y29uc3QgYm9va3MgPSBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aXRsZSA6IFwiSGFycnkgUG90dGVyIGFuZCB0aGUgUGhpbG9zb3BoZXIncyBTdG9uZVwiLFxuXHRcdFx0XHRcdGF1dGhvciA6IFwiSi5LLiBSb3dsaW5nXCIsXG5cdFx0XHRcdFx0cGFnZXMgOiAyMjNcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlIDogXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBDaGFtYmVyIG9mIFNlY3JldHNcIixcblx0XHRcdFx0XHRhdXRob3IgOiBcIkouSy4gUm93bGluZ1wiLFxuXHRcdFx0XHRcdHBhZ2VzIDogMjUxXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aXRsZSA6IFwiSGFycnkgUG90dGVyIGFuZCB0aGUgUHJpc29uZXIgb2YgQXprYWJhblwiLFxuXHRcdFx0XHRcdGF1dGhvciA6IFwiSi5LLiBSb3dsaW5nXCIsXG5cdFx0XHRcdFx0cGFnZXMgOiAzMTdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlIDogXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBHb2JsZXQgb2YgRmlyZVwiLFxuXHRcdFx0XHRcdGF1dGhvciA6IFwiSi5LLiBSb3dsaW5nXCIsXG5cdFx0XHRcdFx0cGFnZXMgOiA2MzZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiBcIkhhcnJ5IFBvdHRlciBhbiB0aGUgT3JkZXIgb2YgdGhlIFBob2VuaXhcIixcblx0XHRcdFx0XHRhdXRob3IgOiBcIkouSy5Sb3dsaW5nXCIsXG5cdFx0XHRcdFx0cGFnZXMgOiA3NjZcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiBcIkhhcnJ5IFBvdHRlciBhbmQgdGhlIEhhbGYtQmxvb2QgUHJpbmNlXCIsXG5cdFx0XHRcdFx0YXV0aG9yIDogXCJKLksuIFJvd2xpbmdcIixcblx0XHRcdFx0XHRwYWdlcyA6IDYwN1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6IFwiSGFycnkgUG90dGVyIGFuZCB0aGUgRGVhdGhseSBIYWxsb3dzXCIsXG5cdFx0XHRcdFx0YXV0aG9yIDogXCJKLksuIFJvd2xpbmdcIixcblx0XHRcdFx0XHRwYWdlcyA6IDYwN1xuXHRcdFx0XHR9XG5cdFx0XHRdXG5cblx0XHRib29rcy5mb3JFYWNoKGJvb2sgPT4gXG5cdFx0XHRsaWJyYXJ5LmFkZChuZXcgQm9vayhib29rLnRpdGxlLCBib29rLmF1dGhvciwgYm9vay5wYWdlcykpXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgeyBCb29rR2VuZXJhdG9yIH07XG4iLCJpbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmNsYXNzIExpYnJhcnkge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJvb2tDb2xsZWN0aW9uID0gc3RvcmFnZS5nZXRCb29rQ29sbGVjdGlvbigpO1xuXHR9XG5cblx0YWRkKGJvb2spIHtcblx0XHRpZiAoIXRoaXMuYm9va0NvbGxlY3Rpb24uaGFzKGJvb2sudGl0bGUpKSB7XG5cdFx0XHR0aGlzLmJvb2tDb2xsZWN0aW9uLnNldChib29rLnRpdGxlLCBib29rKTtcblxuXHRcdFx0Y29uc29sZS5sb2coYEJvb2sgYWRkZWQgdG8gdGhlIGxpYnJhcnk6ICR7Ym9vay50aXRsZX0gYnkgJHtib29rLmF1dGhvcn1gKTtcblx0XHRcdHN0b3JhZ2Uuc2F2ZSh0aGlzLmJvb2tDb2xsZWN0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRnZXQodGl0bGUpIHtcblx0XHRyZXR1cm4gdGhpcy5ib29rQ29sbGVjdGlvbi5nZXQodGl0bGUpO1xuXHR9XG5cblx0cmVtb3ZlKHRpdGxlKSB7XG5cdFx0Y29uc3QgZGVsZXRlZEJvb2sgPSB0aGlzLmJvb2tDb2xsZWN0aW9uLmRlbGV0ZSh0aXRsZSk7XG5cdFx0aWYgKGRlbGV0ZWRCb29rKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgQm9vayByZW1vdmVkIGZyb20gdGhlIGxpYnJhcnkgOiAke3RpdGxlfWApO1xuXHRcdFx0c3RvcmFnZS5zYXZlKHRoaXMuYm9va0NvbGxlY3Rpb24pO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWxldGVkQm9vaztcblx0fVxuXG5cdGdldEJvb2tzKCkge1xuXHRcdHJldHVybiB0aGlzLmJvb2tDb2xsZWN0aW9uO1xuXHR9XG59XG5cbmV4cG9ydCB7IExpYnJhcnkgfTtcbiIsImZ1bmN0aW9uIHNhdmUoYm9va0NvbGxlY3Rpb24pIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb2tDb2xsZWN0aW9uJywgSlNPTi5zdHJpbmdpZnkoWy4uLmJvb2tDb2xsZWN0aW9uXSkpO1xufVxuXG5mdW5jdGlvbiBnZXRCb29rQ29sbGVjdGlvbigpIHtcblx0cmV0dXJuIG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va0NvbGxlY3Rpb24nKSkpO1xufVxuXG5cbmV4cG9ydCB7IHNhdmUsIGdldEJvb2tDb2xsZWN0aW9uIH07XG4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vY3NzL3N3aXRjaC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy90aWxlLmNzcyc7XG5pbXBvcnQgJy4vY3NzL21vZGFsLmNzcyc7XG5cbmltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2FwcC9ib29rLmpzJztcbmltcG9ydCB7IExpYnJhcnkgfSBmcm9tICcuL2FwcC9saWJyYXJ5LmpzJztcbmltcG9ydCB7IEJvb2tHZW5lcmF0b3IgfSBmcm9tICcuL2FwcC9ib29rR2VuZXJhdG9yLmpzJztcbmltcG9ydCB7IFNjcmVlbkNvbnRyb2xsZXIgfSBmcm9tICcuL3VpL3NjcmVlbkNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcbi8vQm9va0dlbmVyYXRvci5nZW5lcmF0ZUJvb2tzKGxpYnJhcnkpO1xuXG5jb25zdCBzY3JlZW5Db250cm9sbGVyID0gbmV3IFNjcmVlbkNvbnRyb2xsZXIobGlicmFyeSk7XG4iLCJjbGFzcyBCb29rVGlsZSB7XG5cdGNvbnN0cnVjdG9yKGJvb2spIHtcblx0XHR0aGlzLmJvb2sgPSBib29rO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jvb2snLCAndGlsZScsICd0aWxlLXBhZGRpbmcnKTtcblxuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiNjcmVhdGVUaXRsZUVsZW1lbnQoYm9vay50aXRsZSkpO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiNjcmVhdGVBdXRob3JFbGVtZW50KGJvb2suYXV0aG9yKSk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuI2NyZWF0ZVBhZ2VzRWxlbWVudChib29rLnBhZ2VzKSlcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4jY3JlYXRlUmVhZFN3aXRjaChib29rLnJlYWQpKTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4jY3JlYXRlUmVtb3ZlQnV0dG9uKCkpO1xuXHR9XG5cblx0I2NyZWF0ZVRpdGxlRWxlbWVudCh0aXRsZVRleHQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGlsZS10aXRsZScpO1xuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdCNjcmVhdGVBdXRob3JFbGVtZW50KGF1dGhvclRleHQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGlsZS1hdXRob3InKTtcblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gYXV0aG9yVGV4dDtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0I2NyZWF0ZVBhZ2VzRWxlbWVudChwYWdlc1RleHQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGlsZS1wYWdlcycpO1xuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtwYWdlc1RleHR9IHBhZ2VzYDtcblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0I2NyZWF0ZVJlYWRTd2l0Y2gocmVhZCkge1xuXHRcdGNvbnN0IHN3aXRjaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdGNvbnN0IHJlYWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRjb25zdCBub3RSZWFkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cblx0XHRzd2l0Y2hFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N3aXRjaC13aWRnZXQnKTtcblxuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdib29rUmVhZCcpO1xuXHRcdGlucHV0LmNoZWNrZWQgPSByZWFkID8gdHJ1ZSA6IGZhbHNlO1xuXG5cdFx0cmVhZExhYmVsLnRleHRDb250ZW50ID0gJ1JlYWQnO1xuXHRcdHJlYWRMYWJlbC5jbGFzc0xpc3QuYWRkKCdvbicpO1xuXG5cdFx0bm90UmVhZExhYmVsLnRleHRDb250ZW50ID0gJ05vdCByZWFkJztcblx0XHRub3RSZWFkTGFiZWwuY2xhc3NMaXN0LmFkZCgnb2ZmJyk7XG5cdFxuXHRcdGxhYmVsLmFwcGVuZENoaWxkKHJlYWRMYWJlbCk7XG5cdFx0bGFiZWwuYXBwZW5kQ2hpbGQobm90UmVhZExhYmVsKTtcblxuXHRcdHN3aXRjaEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdHN3aXRjaEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFxuXHRcdHJldHVybiBzd2l0Y2hFbGVtZW50O1xuXHR9XG5cblx0I2NyZWF0ZVJlbW92ZUJ1dHRvbigpIHtcblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtYm9vay1idG4nKTtcblx0XHRidXR0b24udGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcblxuXHRcdHJldHVybiBidXR0b247XG5cdH1cbn1cblxuZXhwb3J0IHsgQm9va1RpbGUgfTtcbiIsImltcG9ydCB7IEJvb2tUaWxlIH0gZnJvbSAnLi9ib29rVGlsZS5qcyc7XG5pbXBvcnQgeyBCb29rIH0gZnJvbSAnLi4vYXBwL2Jvb2suanMnO1xuaW1wb3J0IE9kaW5JY29uIGZyb20gJy4vb2Rpbi5wbmcnO1xuaW1wb3J0IExpYnJhcnlJY29uIGZyb20gJy4vbGlicmFyeS5wbmcnO1xuXG5jbGFzcyBTY3JlZW5Db250cm9sbGVyIHtcblx0Y29uc3RydWN0b3IobGlicmFyeSkge1xuXHRcdHRoaXMuI2xvYWRIZWFkZXJJY29uKCk7XG5cblx0XHR0aGlzLmxpYnJhcnkgPSBsaWJyYXJ5O1xuXHRcdHRoaXMubGlicmFyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlicmFyeScpO1xuXHRcdHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW1vZGFsLWJ0bicpLlxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm1vZGFsLnNob3dNb2RhbCgpKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtbW9kYWwtYnRuJykuXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubW9kYWwuY2xvc2UoKSk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1ib29rLWJ0bicpLlxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy4jYWRkQm9va1RvTGlicmFyeSgpXG5cdFx0XHR9KTtcblxuXHRcdHRoaXMubGlicmFyeS5nZXRCb29rcygpLmZvckVhY2goYm9vayA9PiB0aGlzLiNjcmVhdGVCb29rVGlsZShib29rKSk7XG5cdH1cblxuXHQjbG9hZEhlYWRlckljb24oKSB7XG5cdFx0Y29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpY29uLWNvbnRhaW5lcicpO1xuXG5cdFx0Y29uc3Qgb2RpbkxvZ28gPSBuZXcgSW1hZ2UoKTtcblx0XHRvZGluTG9nby5zcmMgPSBPZGluSWNvbjtcblxuXHRcdGNvbnN0IGxpYnJhcnlMb2dvID0gbmV3IEltYWdlKCk7XG5cdFx0bGlicmFyeUxvZ28uc3JjID0gTGlicmFyeUljb247XG5cblx0XHRoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKG9kaW5Mb2dvKTtcblx0XHRoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGxpYnJhcnlMb2dvKTtcblx0fVxuXG5cdCNjcmVhdGVCb29rVGlsZShib29rKSB7XG5cdFx0Y29uc3QgYm9va1RpbGUgPSBuZXcgQm9va1RpbGUoYm9vayk7XG5cblx0XHRib29rVGlsZS5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtYm9vay1idG4nKS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2NsaWNrJywgKCkgPT4gdGhpcy4jcmVtb3ZlQm9vayhib29rVGlsZSlcblx0XHQpO1xuXG5cdFx0dGhpcy5saWJyYXJ5RWxlbWVudC5hcHBlbmRDaGlsZChib29rVGlsZS5lbGVtZW50KTtcblx0fVxuXG5cdCNyZW1vdmVCb29rKGJvb2tUaWxlKSB7XG5cdFx0dGhpcy5saWJyYXJ5LnJlbW92ZShib29rVGlsZS5ib29rLnRpdGxlKTtcblx0XHRib29rVGlsZS5lbGVtZW50LnJlbW92ZSgpO1xuXHR9XG5cblx0I2FkZEJvb2tUb0xpYnJhcnkoKSB7XG5cdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay10aXRsZScpLnZhbHVlO1xuXHRcdGNvbnN0IGF1dGhvcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stYXV0aG9yJykudmFsdWU7XG5cdFx0Y29uc3QgcGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay1wYWdlcycpLnZhbHVlO1xuXHRcdGNvbnN0IHJlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay1yZWFkJykuY2hlY2tlZDtcblxuXHRcdGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZCk7XG5cblx0XHR0aGlzLmxpYnJhcnkuYWRkKGJvb2spO1xuXHRcdHRoaXMuI2NyZWF0ZUJvb2tUaWxlKGJvb2spO1xuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1ib29rLWZvcm0nKS5yZXNldCgpO1xuXG5cdFx0dGhpcy5tb2RhbC5jbG9zZSgpO1xuXHR9XG59XG5cbmV4cG9ydCB7IFNjcmVlbkNvbnRyb2xsZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==