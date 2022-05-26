/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 858:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 506:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ 713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 354:
/***/ ((module) => {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ 860:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 884:
/***/ ((module) => {

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

/***/ 521:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 206:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 769:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(858);

var iterableToArrayLimit = __webpack_require__(884);

var unsupportedIterableToArray = __webpack_require__(323);

var nonIterableRest = __webpack_require__(521);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 655:
/***/ ((module) => {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;

/***/ }),

/***/ 319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(646);

var iterableToArray = __webpack_require__(860);

var unsupportedIterableToArray = __webpack_require__(323);

var nonIterableSpread = __webpack_require__(206);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 8:
/***/ ((module) => {

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

/***/ 323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

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

/***/ 997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".rule__input{border:1px solid #ddd;box-shadow:inset 0 1px 2px rgba(0,0,0,.07);background-color:#fff;color:#32373c;outline:none;transition:.05s border-color ease-in-out;font-size:.8rem;padding:.3rem}.rule__input--select{max-width:100%;line-height:28px;vertical-align:middle;width:100%;height:2.2rem}.rule__param{width:40%}.rule__operator{width:20%}.rule__value{width:40%}.rule__input__async-select{font-size:.8rem}.rule__input__async-select .rule__input__async-select__control{border-radius:0}.rule__input__async-select__value-container{align-items:flex-start}", "",{"version":3,"sources":["webpack://./js/src/components/SchemaRule.scss"],"names":[],"mappings":"AAAA,aAAa,qBAAqB,CAAC,0CAA0C,CAAC,qBAAqB,CAAC,aAAa,CAAC,YAAY,CAAC,wCAAwC,CAAC,eAAe,CAAC,aAAa,CAAC,qBAAqB,cAAc,CAAC,gBAAgB,CAAC,qBAAqB,CAAC,UAAU,CAAC,aAAa,CAAC,aAAa,SAAS,CAAC,gBAAgB,SAAS,CAAC,aAAa,SAAS,CAAC,2BAA2B,eAAe,CAAC,+DAA+D,eAAe,CAAC,4CAA4C,sBAAsB","sourcesContent":[".rule__input{border:1px solid #ddd;box-shadow:inset 0 1px 2px rgba(0,0,0,.07);background-color:#fff;color:#32373c;outline:none;transition:.05s border-color ease-in-out;font-size:.8rem;padding:.3rem}.rule__input--select{max-width:100%;line-height:28px;vertical-align:middle;width:100%;height:2.2rem}.rule__param{width:40%}.rule__operator{width:20%}.rule__value{width:40%}.rule__input__async-select{font-size:.8rem}.rule__input__async-select .rule__input__async-select__control{border-radius:0}.rule__input__async-select__value-container{align-items:flex-start}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 99:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".schema-ruleset{width:100%;border:1px solid #e5e5e5;border-spacing:0;clear:both}.schema-ruleset td{padding:.5rem}.schema-ruleset tr:nth-child(odd) td{background-color:#f9f9f9}.schema-ruleset__save{text-align:right}", "",{"version":3,"sources":["webpack://./js/src/components/SchemaRuleset.scss"],"names":[],"mappings":"AAAA,gBAAgB,UAAU,CAAC,wBAAwB,CAAC,gBAAgB,CAAC,UAAU,CAAC,mBAAmB,aAAa,CAAC,qCAAqC,wBAAwB,CAAC,sBAAsB,gBAAgB","sourcesContent":[".schema-ruleset{width:100%;border:1px solid #e5e5e5;border-spacing:0;clear:both}.schema-ruleset td{padding:.5rem}.schema-ruleset tr:nth-child(odd) td{background-color:#f9f9f9}.schema-ruleset__save{text-align:right}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".accordion{margin:0 0 2rem 0;border:1px solid #ddd}.accordion__content{padding:.5rem 1rem 1rem 1rem}.accordion__content__closed{text-align:right}.accordion--close{display:none}.accordion legend{cursor:pointer;display:block}.--hidden{display:none}", "",{"version":3,"sources":["webpack://./js/src/components/general/Accordion.scss"],"names":[],"mappings":"AAAA,WAAW,iBAAiB,CAAC,qBAAqB,CAAC,oBAAoB,4BAA4B,CAAC,4BAA4B,gBAAgB,CAAC,kBAAkB,YAAY,CAAC,kBAAkB,cAAc,CAAC,aAAa,CAAC,UAAU,YAAY","sourcesContent":[".accordion{margin:0 0 2rem 0;border:1px solid #ddd}.accordion__content{padding:.5rem 1rem 1rem 1rem}.accordion__content__closed{text-align:right}.accordion--close{display:none}.accordion legend{cursor:pointer;display:block}.--hidden{display:none}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loader__loading{animation:rotation 2s infinite linear;margin:0 .5rem}.loader--hidden{display:none !important}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}", "",{"version":3,"sources":["webpack://./js/src/components/general/Loader.scss"],"names":[],"mappings":"AAAA,iBAAiB,qCAAqC,CAAC,cAAc,CAAC,gBAAgB,uBAAuB,CAAC,oBAAoB,GAAG,sBAAsB,CAAC,KAAK,wBAAwB,CAAC","sourcesContent":[".loader__loading{animation:rotation 2s infinite linear;margin:0 .5rem}.loader--hidden{display:none !important}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".individual-properties--table{width:100%;border:1px solid #d3d3d3;border-collapse:collapse}.individual-properties--table th,.individual-properties--table td{padding:.5rem}.individual-properties--table .schema-property--highlighted~.schema-property--option th,.individual-properties--table .schema-property--highlighted~.schema-property--option td{border:1px solid #2a9bd9}.individual-properties--table .schema-property--highlighted~.schema-property{opacity:.2}.individual-properties--table .schema-property__name{min-width:150px}", "",{"version":3,"sources":["webpack://./js/src/components/setup-wizard/IndividualProperties.scss"],"names":[],"mappings":"AAAA,8BAA8B,UAAU,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,kEAAkE,aAAa,CAAC,gLAAgL,wBAAwB,CAAC,6EAA6E,UAAU,CAAC,qDAAqD,eAAe","sourcesContent":[".individual-properties--table{width:100%;border:1px solid #d3d3d3;border-collapse:collapse}.individual-properties--table th,.individual-properties--table td{padding:.5rem}.individual-properties--table .schema-property--highlighted~.schema-property--option th,.individual-properties--table .schema-property--highlighted~.schema-property--option td{border:1px solid #2a9bd9}.individual-properties--table .schema-property--highlighted~.schema-property{opacity:.2}.individual-properties--table .schema-property__name{min-width:150px}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 11:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".schemaChooser ul{list-style:none}.schemaChooser ul li{border-bottom:1px solid #ddd;margin-bottom:1rem}.schemaChooser ul li:last-child{border-bottom:0 none}.schemaChooser ul .dashicons{vertical-align:middle;font-size:1rem}", "",{"version":3,"sources":["webpack://./js/src/components/setup-wizard/SchemaChooser.scss"],"names":[],"mappings":"AAAA,kBAAkB,eAAe,CAAC,qBAAqB,4BAA4B,CAAC,kBAAkB,CAAC,gCAAgC,oBAAoB,CAAC,6BAA6B,qBAAqB,CAAC,cAAc","sourcesContent":[".schemaChooser ul{list-style:none}.schemaChooser ul li{border-bottom:1px solid #ddd;margin-bottom:1rem}.schemaChooser ul li:last-child{border-bottom:0 none}.schemaChooser ul .dashicons{vertical-align:middle;font-size:1rem}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".schemaSelection .previewBox{display:flex;width:100%;align-items:center;margin-top:2rem;min-height:870px}.schemaSelection .previewBox fieldset{flex:1 1 30%}.schemaSelection .previewBox fieldset label{display:block;margin:.5rem 0;cursor:pointer}.schemaSelection .previewBox .preview{flex:1 1 70%;text-align:center;min-height:964px}.schemaSelection .previewBox .preview a{display:inline-block}.schemaSelection .previewBox .preview img{max-width:100%}.schemaSelection .previewBox .preview .preview__inner{position:relative}.schemaSelection .previewBox .preview .preview__inner span{position:absolute;top:24rem;color:#fff;left:0;width:100%}.schemaSelection .previewBox .detectedPlugins{font-size:.8rem;margin:2rem 0 0 0}.schemaSelection .previewBox .detectedPlugins li{font-size:.8rem}", "",{"version":3,"sources":["webpack://./js/src/components/setup-wizard/SchemaSelection.scss"],"names":[],"mappings":"AAAA,6BAA6B,YAAY,CAAC,UAAU,CAAC,kBAAkB,CAAC,eAAe,CAAC,gBAAgB,CAAC,sCAAsC,YAAY,CAAC,4CAA4C,aAAa,CAAC,cAAc,CAAC,cAAc,CAAC,sCAAsC,YAAY,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,wCAAwC,oBAAoB,CAAC,0CAA0C,cAAc,CAAC,sDAAsD,iBAAiB,CAAC,2DAA2D,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,MAAM,CAAC,UAAU,CAAC,8CAA8C,eAAe,CAAC,iBAAiB,CAAC,iDAAiD,eAAe","sourcesContent":[".schemaSelection .previewBox{display:flex;width:100%;align-items:center;margin-top:2rem;min-height:870px}.schemaSelection .previewBox fieldset{flex:1 1 30%}.schemaSelection .previewBox fieldset label{display:block;margin:.5rem 0;cursor:pointer}.schemaSelection .previewBox .preview{flex:1 1 70%;text-align:center;min-height:964px}.schemaSelection .previewBox .preview a{display:inline-block}.schemaSelection .previewBox .preview img{max-width:100%}.schemaSelection .previewBox .preview .preview__inner{position:relative}.schemaSelection .previewBox .preview .preview__inner span{position:absolute;top:24rem;color:#fff;left:0;width:100%}.schemaSelection .previewBox .detectedPlugins{font-size:.8rem;margin:2rem 0 0 0}.schemaSelection .previewBox .detectedPlugins li{font-size:.8rem}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 38:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html{min-height:100vh;display:flex;align-items:center}.wpb-rs-setupwizard{margin-top:1rem;width:100%;max-width:800px;min-height:50vh;border-radius:1%}.wpb-rs-setupwizard .logo{text-align:center}.wpb-rs-setupwizard .logo img{vertical-align:middle;width:115px;height:45px}.wpb-rs-setupwizard .navigation{display:flex;justify-content:space-between}.wpb-rs-setupwizard .navigation button .dashicons{margin:4px 3px 0 0}.wpb-rs-setupwizard .schema-icon{margin-top:3px}.wpb-rs-setupwizard .SetupWizard{display:flex;flex-direction:column;justify-content:space-between;min-height:50vh}.wpb-rs-setupwizard p{font-size:16px}.wpb-rs-setupwizard p.SetupWizard--center{text-align:center}.wpb-rs-setupwizard p.SetupWizard--under-headline{margin:-3rem 0 3rem 6rem}.wpb-rs-setupwizard p.SetupWizard--grayscale{font-size:.7rem;color:#a1a1a1}.wpb-rs-setupwizard p.SetupWizard--grayscale a{color:#a1a1a1}.wpb-rs-setupwizard hr{border:0 none;border-top:1px solid #ddd}.wpb-rs-setupwizard h2{border:0 none;position:relative;background-color:#f1f1f1;padding:.5rem 1rem;display:inline-block;margin:0 0 4rem 6rem}.wpb-rs-setupwizard h2:before{content:\"\";position:absolute;left:-6rem;top:0;background:url(\"http://2.gravatar.com/avatar/b91b96c4ece6410bf6871ce516830513?s=250&d=mm&r=g\") no-repeat;background-size:contain;width:5rem;height:5rem;border-radius:50%;border:1px solid #1d1b1d}.wpb-rs-setupwizard h2:after{content:\"\";position:absolute;left:0;top:50%;width:0;height:0;border:15px solid transparent;border-right-color:#f1f1f1;border-left:0;border-bottom:0;margin-top:-5px;margin-left:-15px}.wpb-rs-setupwizard .SetupWizard--intro h2{margin-left:0}.wpb-rs-setupwizard .SetupWizard--intro h2:before{display:none}.wpb-rs-setupwizard .SetupWizard--content{padding:1rem 0;flex:1 1 auto}.wpb-rs-setupwizard .SetupWizard--content.SetupWizard--content--centered h2{text-align:center}.wpb-rs-setupwizard .SetupWizard--content p.small{font-size:.8rem}.wpb-rs-setupwizard .SetupWizard--input-text{margin:1rem 0 1rem 6rem;font-size:1.2rem;display:inline-block}.wpb-rs-setupwizard .SetupWizard--checkbox-list label{display:block;margin-top:1rem}.wpb-rs-setupwizard input.SetupWizard--centered{display:block;margin:0 auto}.wpb-rs-setupwizard #newsletter_subscription{display:flex;align-items:center}.wpb-rs-setupwizard #newsletter_subscription input[type=submit]{margin-left:1rem}.logo--wizard{font-size:3rem;vertical-align:middle}.SetupWizard--image{text-align:center;margin:2rem 0}.SetupWizard--image img{width:80%}.SetupWizard--table{display:flex}.SetupWizard--table .SetupWizard--table--row{margin-right:2rem}.SetupWizard--table .SetupWizard--table--row:last-child{margin:0}.SetupWizard--intro--author-image{width:250px;height:250px;border:1px solid #000;border-radius:50%}progress{width:100%;height:5px;overflow:hidden;border:0}progress::-moz-progress-bar{background-color:#00b894;transition:width 1s ease-out}progress::-webkit-progress-value{background-color:#00b894;transition:width 1s ease-out}", "",{"version":3,"sources":["webpack://./js/src/components/setup-wizard/SetupWizard.scss"],"names":[],"mappings":"AAAA,KAAK,gBAAgB,CAAC,YAAY,CAAC,kBAAkB,CAAC,oBAAoB,eAAe,CAAC,UAAU,CAAC,eAAe,CAAC,eAAe,CAAC,gBAAgB,CAAC,0BAA0B,iBAAiB,CAAC,8BAA8B,qBAAqB,CAAC,WAAW,CAAC,WAAW,CAAC,gCAAgC,YAAY,CAAC,6BAA6B,CAAC,kDAAkD,kBAAkB,CAAC,iCAAiC,cAAc,CAAC,iCAAiC,YAAY,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,eAAe,CAAC,sBAAsB,cAAc,CAAC,0CAA0C,iBAAiB,CAAC,kDAAkD,wBAAwB,CAAC,6CAA6C,eAAe,CAAC,aAAa,CAAC,+CAA+C,aAAa,CAAC,uBAAuB,aAAa,CAAC,yBAAyB,CAAC,uBAAuB,aAAa,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,8BAA8B,UAAU,CAAC,iBAAiB,CAAC,UAAU,CAAC,KAAK,CAAC,wGAAwG,CAAC,uBAAuB,CAAC,UAAU,CAAC,WAAW,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,6BAA6B,UAAU,CAAC,iBAAiB,CAAC,MAAM,CAAC,OAAO,CAAC,OAAO,CAAC,QAAQ,CAAC,6BAA6B,CAAC,0BAA0B,CAAC,aAAa,CAAC,eAAe,CAAC,eAAe,CAAC,iBAAiB,CAAC,2CAA2C,aAAa,CAAC,kDAAkD,YAAY,CAAC,0CAA0C,cAAc,CAAC,aAAa,CAAC,4EAA4E,iBAAiB,CAAC,kDAAkD,eAAe,CAAC,6CAA6C,uBAAuB,CAAC,gBAAgB,CAAC,oBAAoB,CAAC,sDAAsD,aAAa,CAAC,eAAe,CAAC,gDAAgD,aAAa,CAAC,aAAa,CAAC,6CAA6C,YAAY,CAAC,kBAAkB,CAAC,gEAAgE,gBAAgB,CAAC,cAAc,cAAc,CAAC,qBAAqB,CAAC,oBAAoB,iBAAiB,CAAC,aAAa,CAAC,wBAAwB,SAAS,CAAC,oBAAoB,YAAY,CAAC,6CAA6C,iBAAiB,CAAC,wDAAwD,QAAQ,CAAC,kCAAkC,WAAW,CAAC,YAAY,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,SAAS,UAAU,CAAC,UAAU,CAAC,eAAe,CAAC,QAAQ,CAAC,4BAA4B,wBAAwB,CAAC,4BAA4B,CAAC,iCAAiC,wBAAwB,CAAC,4BAA4B","sourcesContent":["html{min-height:100vh;display:flex;align-items:center}.wpb-rs-setupwizard{margin-top:1rem;width:100%;max-width:800px;min-height:50vh;border-radius:1%}.wpb-rs-setupwizard .logo{text-align:center}.wpb-rs-setupwizard .logo img{vertical-align:middle;width:115px;height:45px}.wpb-rs-setupwizard .navigation{display:flex;justify-content:space-between}.wpb-rs-setupwizard .navigation button .dashicons{margin:4px 3px 0 0}.wpb-rs-setupwizard .schema-icon{margin-top:3px}.wpb-rs-setupwizard .SetupWizard{display:flex;flex-direction:column;justify-content:space-between;min-height:50vh}.wpb-rs-setupwizard p{font-size:16px}.wpb-rs-setupwizard p.SetupWizard--center{text-align:center}.wpb-rs-setupwizard p.SetupWizard--under-headline{margin:-3rem 0 3rem 6rem}.wpb-rs-setupwizard p.SetupWizard--grayscale{font-size:.7rem;color:#a1a1a1}.wpb-rs-setupwizard p.SetupWizard--grayscale a{color:#a1a1a1}.wpb-rs-setupwizard hr{border:0 none;border-top:1px solid #ddd}.wpb-rs-setupwizard h2{border:0 none;position:relative;background-color:#f1f1f1;padding:.5rem 1rem;display:inline-block;margin:0 0 4rem 6rem}.wpb-rs-setupwizard h2:before{content:\"\";position:absolute;left:-6rem;top:0;background:url(\"http://2.gravatar.com/avatar/b91b96c4ece6410bf6871ce516830513?s=250&d=mm&r=g\") no-repeat;background-size:contain;width:5rem;height:5rem;border-radius:50%;border:1px solid #1d1b1d}.wpb-rs-setupwizard h2:after{content:\"\";position:absolute;left:0;top:50%;width:0;height:0;border:15px solid transparent;border-right-color:#f1f1f1;border-left:0;border-bottom:0;margin-top:-5px;margin-left:-15px}.wpb-rs-setupwizard .SetupWizard--intro h2{margin-left:0}.wpb-rs-setupwizard .SetupWizard--intro h2:before{display:none}.wpb-rs-setupwizard .SetupWizard--content{padding:1rem 0;flex:1 1 auto}.wpb-rs-setupwizard .SetupWizard--content.SetupWizard--content--centered h2{text-align:center}.wpb-rs-setupwizard .SetupWizard--content p.small{font-size:.8rem}.wpb-rs-setupwizard .SetupWizard--input-text{margin:1rem 0 1rem 6rem;font-size:1.2rem;display:inline-block}.wpb-rs-setupwizard .SetupWizard--checkbox-list label{display:block;margin-top:1rem}.wpb-rs-setupwizard input.SetupWizard--centered{display:block;margin:0 auto}.wpb-rs-setupwizard #newsletter_subscription{display:flex;align-items:center}.wpb-rs-setupwizard #newsletter_subscription input[type=submit]{margin-left:1rem}.logo--wizard{font-size:3rem;vertical-align:middle}.SetupWizard--image{text-align:center;margin:2rem 0}.SetupWizard--image img{width:80%}.SetupWizard--table{display:flex}.SetupWizard--table .SetupWizard--table--row{margin-right:2rem}.SetupWizard--table .SetupWizard--table--row:last-child{margin:0}.SetupWizard--intro--author-image{width:250px;height:250px;border:1px solid #000;border-radius:50%}progress{width:100%;height:5px;overflow:hidden;border:0}progress::-moz-progress-bar{background-color:#00b894;transition:width 1s ease-out}progress::-webkit-progress-value{background-color:#00b894;transition:width 1s ease-out}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ 703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(703)();
}


/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(804);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.Z = AutosizeInput;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 804:
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(804);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
;// CONCATENATED MODULE: external "ReactDOM"
const external_ReactDOM_namespaceObject = ReactDOM;
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/setup-wizard/SetupWizard.scss
var SetupWizard = __webpack_require__(38);
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/SetupWizard.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(SetupWizard/* default */.Z, options);



/* harmony default export */ const setup_wizard_SetupWizard = (SetupWizard/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/setup-wizard/SchemaSelection.scss
var SchemaSelection = __webpack_require__(268);
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/SchemaSelection.scss

            

var SchemaSelection_options = {};

SchemaSelection_options.insert = "head";
SchemaSelection_options.singleton = false;

var SchemaSelection_update = injectStylesIntoStyleTag_default()(SchemaSelection/* default */.Z, SchemaSelection_options);



/* harmony default export */ const setup_wizard_SchemaSelection = (SchemaSelection/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/schemas.js
var __ = wp.i18n.__;
var SCHEMAS = {
  'article': {
    't9n': __('Articles (Blog Posts, etc.)', 'rich-snippets-schema'),
    'schema': 'http://schema.org/Article',
    'hasImage': true,
    'availability': 'free'
  },
  'book': {
    't9n': __('Books', 'rich-snippets-schema'),
    'schema': 'http://schema.org/Book',
    'hasImage': true,
    'availability': 'pro'
  },
  'carousel': {
    't9n': __('Carousel', 'rich-snippets-schema'),
    'schema': 'http://schema.org/ItemList',
    'hasImage': true,
    'availability': 'pro'
  },
  'course': {
    't9n': __('Courses', 'rich-snippets-schema'),
    'schema': 'http://schema.org/Course',
    'hasImage': true,
    'availability': 'pro'
  },
  'event': {
    't9n': __('Events', 'rich-snippets-schema'),
    'schema': 'http://schema.org/Event',
    'hasImage': true,
    'availability': 'free'
  },
  'review': {
    't9n': __('Reviews', 'rich-snippets-schema'),
    'schema': 'http://schema.org/Review',
    'hasImage': true,
    'availability': 'free'
  },
  'faq': {
    't9n': __('FAQs', 'rich-snippets-schema'),
    'schema': 'http://schema.org/FAQPage',
    'hasImage': true,
    'availability': 'free'
  },
  'howto': {
    't9n': __('How-Tos', 'rich-snippets-schema'),
    'schema': 'http://schema.org/HowTo',
    'hasImage': true,
    'availability': 'free'
  },
  'qa': {
    't9n': __('Q&As', 'rich-snippets-schema'),
    'schema': 'http://schema.org/QAPage',
    'hasImage': true,
    'availability': 'free'
  },
  'product': {
    't9n': __('Products', 'rich-snippets-schema'),
    'schema': 'http://schema.org/Product',
    'hasImage': true,
    'availability': 'free'
  },
  'recipe': {
    't9n': __('Recipes', 'rich-snippets-schema'),
    'schema': 'http://schema.org/Recipe',
    'hasImage': true,
    'availability': 'free'
  },
  'breadcrumbs': {
    't9n': __('Breadcrumbs', 'rich-snippets-schema'),
    'schema': 'http://schema.org/BreadcrumbList',
    'hasImage': true,
    'availability': 'pro'
  },
  'jobposting': {
    't9n': __('Job Postings', 'rich-snippets-schema'),
    'schema': 'http://schema.org/JobPosting',
    'hasImage': true,
    'availability': 'pro'
  }
};
/* harmony default export */ const schemas = ((/* unused pure expression or super */ null && (SCHEMAS)));
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/SchemaSelection.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _wp$i18n = wp.i18n,
    SchemaSelection_ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;

var SchemaSelection_SchemaSelection = /*#__PURE__*/function (_React$Component) {
  _inherits(SchemaSelection, _React$Component);

  var _super = _createSuper(SchemaSelection);

  function SchemaSelection(props) {
    var _this;

    _classCallCheck(this, SchemaSelection);

    _this = _super.call(this, props);
    _this.state = {
      'currentCursor': '',
      'isLoading': false,
      'detectedPlugins': []
    };
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SchemaSelection, [{
    key: "handleMouseOver",
    value: function handleMouseOver(e) {
      var snippet;

      if ('LABEL' === e.target.nodeName) {
        snippet = e.target.control.attributes.name.nodeValue;
      } else {
        snippet = e.target.attributes.name.nodeValue;
      }

      this.setState({
        'currentCursor': snippet
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var value = e.target.attributes.name.nodeValue;

      if (e.target.checked) {
        this.props.selectSnippet(value);
      } else {
        this.props.unselectSnippet(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var previewImageUrl,
          previewImage,
          imageText = '';

      if (SCHEMAS.hasOwnProperty(this.state.currentCursor) && SCHEMAS[this.state.currentCursor].hasImage) {
        previewImageUrl = SetupWizardConfig.imagePath + 'img/examples/' + this.state.currentCursor + '.png';
        previewImage = wp.element.createElement("img", {
          className: "preview__preview",
          src: previewImageUrl,
          alt: sprintf(SchemaSelection_('Preview of %s'), SCHEMAS[this.state.currentCursor].t9n)
        });
      } else {
        previewImage = wp.element.createElement("img", {
          src: SetupWizardConfig.imagePath + 'img/examples/preview.png',
          alt: SchemaSelection_('Choose a schema from the left.')
        });
        imageText = SchemaSelection_('Choose a schema from the left.', 'rich-snippets-schema');
      }

      return wp.element.createElement("div", {
        className: "schemaSelection"
      }, wp.element.createElement("h2", null, SchemaSelection_('What search results do you want to get?', 'rich-snippets-schema')), wp.element.createElement("div", {
        className: "previewBox"
      }, wp.element.createElement("fieldset", null, Object.keys(SCHEMAS).map(function (k, i) {
        var o = SCHEMAS[k];

        var checked = _this2.props.selectedSnippets.hasOwnProperty(k);

        return wp.element.createElement("label", {
          key: 'main-' + i,
          onMouseOver: _this2.handleMouseOver
        }, wp.element.createElement("input", {
          name: k,
          type: "checkbox",
          checked: checked,
          disabled: !(o.availability === 'free' && !SetupWizardConfig.isPro || SetupWizardConfig.isPro),
          onChange: _this2.onChange
        }), " ", o.t9n + ' ' + (o.availability === 'pro' && !SetupWizardConfig.isPro ? SchemaSelection_('[PRO Version]', 'rich-snippets-schema') : ''));
      })), wp.element.createElement("div", {
        className: "preview"
      }, wp.element.createElement("div", {
        className: "preview__inner"
      }, previewImage, '' !== imageText ? wp.element.createElement("span", null, imageText) : null))));
    }
  }]);

  return SchemaSelection;
}((external_React_default()).Component);

/* harmony default export */ const components_setup_wizard_SchemaSelection = (SchemaSelection_SchemaSelection);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/general/Loader.scss
var Loader = __webpack_require__(945);
;// CONCATENATED MODULE: ./js/src/components/general/Loader.scss

            

var Loader_options = {};

Loader_options.insert = "head";
Loader_options.singleton = false;

var Loader_update = injectStylesIntoStyleTag_default()(Loader/* default */.Z, Loader_options);



/* harmony default export */ const general_Loader = (Loader/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/src/components/general/Loader.js
function Loader_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Loader_typeof = function _typeof(obj) { return typeof obj; }; } else { Loader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Loader_typeof(obj); }

function Loader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Loader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Loader_createClass(Constructor, protoProps, staticProps) { if (protoProps) Loader_defineProperties(Constructor.prototype, protoProps); if (staticProps) Loader_defineProperties(Constructor, staticProps); return Constructor; }

function Loader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Loader_setPrototypeOf(subClass, superClass); }

function Loader_setPrototypeOf(o, p) { Loader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Loader_setPrototypeOf(o, p); }

function Loader_createSuper(Derived) { var hasNativeReflectConstruct = Loader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Loader_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Loader_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Loader_possibleConstructorReturn(this, result); }; }

function Loader_possibleConstructorReturn(self, call) { if (call && (Loader_typeof(call) === "object" || typeof call === "function")) { return call; } return Loader_assertThisInitialized(self); }

function Loader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Loader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Loader_getPrototypeOf(o) { Loader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Loader_getPrototypeOf(o); }




var Loader_Loader = /*#__PURE__*/function (_React$Component) {
  Loader_inherits(Loader, _React$Component);

  var _super = Loader_createSuper(Loader);

  function Loader(props) {
    Loader_classCallCheck(this, Loader);

    return _super.call(this, props);
  }

  Loader_createClass(Loader, [{
    key: "render",
    value: function render() {
      var cssClasses = ['dashicons', 'dashicons-admin-generic', 'loader__loading'];

      if (!this.props.isLoading) {
        cssClasses.push('loader--hidden');
      }

      if (this.props.className) {
        cssClasses.push(this.props.className);
      }

      return wp.element.createElement("span", {
        className: cssClasses.join(' ')
      });
    }
  }]);

  return Loader;
}((external_React_default()).Component);

/* harmony default export */ const components_general_Loader = (Loader_Loader);
;// CONCATENATED MODULE: ./js/src/objects/builder-helpers.js
var removeSchemaUrl = function removeSchemaUrl(str) {
  return str.replace(new RegExp('http[s]?:\\/\\/schema.org\\/', 'gi'), '');
};

var removeUrlScheme = function removeUrlScheme(url) {
  return url.replace(new RegExp('http[s]?:\\/\\/', 'gi'), '');
};

var blankify = function blankify(htmlCode) {
  return htmlCode.replace('<a', '<a target="_blank"');
};


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/setup-wizard/SchemaChooser.scss
var SchemaChooser = __webpack_require__(11);
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/SchemaChooser.scss

            

var SchemaChooser_options = {};

SchemaChooser_options.insert = "head";
SchemaChooser_options.singleton = false;

var SchemaChooser_update = injectStylesIntoStyleTag_default()(SchemaChooser/* default */.Z, SchemaChooser_options);



/* harmony default export */ const setup_wizard_SchemaChooser = (SchemaChooser/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/general/Accordion.scss
var Accordion = __webpack_require__(892);
;// CONCATENATED MODULE: ./js/src/components/general/Accordion.scss

            

var Accordion_options = {};

Accordion_options.insert = "head";
Accordion_options.singleton = false;

var Accordion_update = injectStylesIntoStyleTag_default()(Accordion/* default */.Z, Accordion_options);



/* harmony default export */ const general_Accordion = (Accordion/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/src/components/general/Accordion.js
function Accordion_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Accordion_typeof = function _typeof(obj) { return typeof obj; }; } else { Accordion_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Accordion_typeof(obj); }

function Accordion_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Accordion_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Accordion_createClass(Constructor, protoProps, staticProps) { if (protoProps) Accordion_defineProperties(Constructor.prototype, protoProps); if (staticProps) Accordion_defineProperties(Constructor, staticProps); return Constructor; }

function Accordion_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Accordion_setPrototypeOf(subClass, superClass); }

function Accordion_setPrototypeOf(o, p) { Accordion_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Accordion_setPrototypeOf(o, p); }

function Accordion_createSuper(Derived) { var hasNativeReflectConstruct = Accordion_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Accordion_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Accordion_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Accordion_possibleConstructorReturn(this, result); }; }

function Accordion_possibleConstructorReturn(self, call) { if (call && (Accordion_typeof(call) === "object" || typeof call === "function")) { return call; } return Accordion_assertThisInitialized(self); }

function Accordion_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Accordion_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Accordion_getPrototypeOf(o) { Accordion_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Accordion_getPrototypeOf(o); }




var Accordion_ = wp.i18n.__;

var Accordion_Accordion = /*#__PURE__*/function (_React$Component) {
  Accordion_inherits(Accordion, _React$Component);

  var _super = Accordion_createSuper(Accordion);

  function Accordion(props) {
    var _this;

    Accordion_classCallCheck(this, Accordion);

    _this = _super.call(this, props);
    _this.state = {
      'open': _this.props.isOpen
    };
    _this.handleOpenClose = _this.handleOpenClose.bind(Accordion_assertThisInitialized(_this));
    return _this;
  }

  Accordion_createClass(Accordion, [{
    key: "handleOpenClose",
    value: function handleOpenClose(e) {
      if (this.state.open) {
        this.setState({
          'open': false
        });

        if (this.props.onClose && typeof this.props.onClose === 'function') {
          this.props.onClose();
        }
      } else {
        this.setState({
          'open': true
        });

        if (this.props.onOpen && typeof this.props.onOpen === 'function') {
          this.props.onOpen();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return wp.element.createElement("fieldset", {
        className: "accordion"
      }, wp.element.createElement("legend", {
        onClick: this.handleOpenClose
      }, wp.element.createElement("span", {
        className: 'dashicons  ' + (this.state.open ? 'dashicons-arrow-down' : 'dashicons-arrow-right')
      }), this.props.headline, wp.element.createElement(components_general_Loader, {
        isLoading: this.props.isLoading
      })), wp.element.createElement("div", {
        className: 'accordion__content ' + (this.state.open ? '' : 'accordion--close')
      }, this.props.children), wp.element.createElement("div", {
        className: 'accordion__content accordion__content__closed ' + (this.state.open ? 'accordion--close' : '')
      }, wp.element.createElement("button", {
        className: "button button-small",
        onClick: this.handleOpenClose
      }, this.props.buttonLabel ? this.props.buttonLabel : Accordion_('Open', 'rich-snippets-schema'))));
    }
  }]);

  return Accordion;
}((external_React_default()).Component);

/* harmony default export */ const components_general_Accordion = (Accordion_Accordion);
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/SchemaChooser.js
function SchemaChooser_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SchemaChooser_typeof = function _typeof(obj) { return typeof obj; }; } else { SchemaChooser_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SchemaChooser_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SchemaChooser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SchemaChooser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SchemaChooser_createClass(Constructor, protoProps, staticProps) { if (protoProps) SchemaChooser_defineProperties(Constructor.prototype, protoProps); if (staticProps) SchemaChooser_defineProperties(Constructor, staticProps); return Constructor; }

function SchemaChooser_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SchemaChooser_setPrototypeOf(subClass, superClass); }

function SchemaChooser_setPrototypeOf(o, p) { SchemaChooser_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SchemaChooser_setPrototypeOf(o, p); }

function SchemaChooser_createSuper(Derived) { var hasNativeReflectConstruct = SchemaChooser_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SchemaChooser_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SchemaChooser_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SchemaChooser_possibleConstructorReturn(this, result); }; }

function SchemaChooser_possibleConstructorReturn(self, call) { if (call && (SchemaChooser_typeof(call) === "object" || typeof call === "function")) { return call; } return SchemaChooser_assertThisInitialized(self); }

function SchemaChooser_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SchemaChooser_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SchemaChooser_getPrototypeOf(o) { SchemaChooser_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SchemaChooser_getPrototypeOf(o); }






var _wp = wp,
    data = _wp.data;
var SchemaChooser_wp$i18n = wp.i18n,
    SchemaChooser_ = SchemaChooser_wp$i18n.__,
    SchemaChooser_sprintf = SchemaChooser_wp$i18n.sprintf;
var _wp2 = wp,
    apiFetch = _wp2.apiFetch;

var SchemaChooser_SchemaChooser = /*#__PURE__*/function (_React$Component) {
  SchemaChooser_inherits(SchemaChooser, _React$Component);

  var _super = SchemaChooser_createSuper(SchemaChooser);

  function SchemaChooser(props) {
    var _this;

    SchemaChooser_classCallCheck(this, SchemaChooser);

    _this = _super.call(this, props);
    _this.state = {
      'currentCursor': '',
      'isLoading': false,
      'options': [],
      'selected': []
    };
    _this.searchSchemas = _this.searchSchemas.bind(SchemaChooser_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(SchemaChooser_assertThisInitialized(_this));
    return _this;
  }

  SchemaChooser_createClass(SchemaChooser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.searchSchemas();
    }
  }, {
    key: "searchSchemas",
    value: function searchSchemas() {
      var _this2 = this;

      this.setState({
        'isLoading': true
      });
      apiFetch({
        'path': '/wpbuddy/rich_snippets/v1/schema/examples?type=' + removeUrlScheme(this.props.schema),
        'method': 'GET'
      }).then(function (results) {
        var selected = _this2.state.selected;
        results.map(function (v) {
          if (-1 !== _this2.props.snips.indexOf(v.id) && -1 === _this2.state.selected.indexOf(v.id)) {
            selected.push(v.id);
          }
        });

        if (results.length <= 0) {
          _this2.props.onSkip();
        } // If there is only one item found, select it


        if (1 === results.length) {
          var postId = parseInt(results[0].id);
          selected.push(postId);

          _this2.props.onSelect(postId);
        }

        _this2.props.updatePossibleSnippets(results.length);

        _this2.setState({
          'isLoading': false,
          'options': results,
          'selected': _toConsumableArray(new Set(selected)) // removes duplicates

        });
      })["catch"](function (error) {
        console.error(error);
        data.dispatch('core/notices').createErrorNotice(SchemaChooser_sprintf(SchemaChooser_('Could not fetch possible value options. Got error: %s', 'rich-snippets-schema'), error.message), {
          isDismissible: true
        });

        _this2.setState({
          'isLoading': false
        });
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var selected = this.state.selected;
      var postId = parseInt(e.target.value);

      if (e.target.checked) {
        selected.push(postId);
        this.props.onSelect(postId);
      } else {
        var index = selected.indexOf(postId);

        if (-1 !== index) {
          selected.splice(index, 1);
          this.props.onDeselect(postId);
        }
      }

      this.setState({
        'selected': selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.options.length <= 1) {
        if (this.state.isLoading) {
          return wp.element.createElement("div", null, wp.element.createElement(components_general_Loader, {
            isLoading: this.state.isLoading
          }), SchemaChooser_sprintf(SchemaChooser_('Checking if there is more than one %s schema...', 'rich-snippets-schema'), removeSchemaUrl(this.props.schema)));
        } else {
          return null;
        }
      }

      return wp.element.createElement(components_general_Accordion, {
        headline: this.props.headline,
        isLoading: this.state.isLoading,
        buttonLabel: SchemaChooser_('Search and Choose ...', 'rich-snippets-schema')
      }, wp.element.createElement("div", {
        className: "schemaChooser"
      }, wp.element.createElement("ul", null, this.state.options.map(function (v) {
        var checked = -1 !== _this3.state.selected.indexOf(v.id);

        return wp.element.createElement("li", {
          key: 'chooser-' + v.id
        }, wp.element.createElement("label", null, wp.element.createElement("input", {
          checked: checked,
          type: "checkbox",
          onChange: _this3.onChange,
          value: v.id
        }), v.title, wp.element.createElement("a", {
          href: v.link,
          target: "_blank"
        }, wp.element.createElement("span", {
          className: "dashicons dashicons-external"
        })), wp.element.createElement("p", null, wp.element.createElement("small", null, v.excerpt))));
      }))));
    }
  }]);

  return SchemaChooser;
}((external_React_default()).Component);

/* harmony default export */ const components_setup_wizard_SchemaChooser = (SchemaChooser_SchemaChooser);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/setup-wizard/IndividualProperties.scss
var IndividualProperties = __webpack_require__(574);
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/IndividualProperties.scss

            

var IndividualProperties_options = {};

IndividualProperties_options.insert = "head";
IndividualProperties_options.singleton = false;

var IndividualProperties_update = injectStylesIntoStyleTag_default()(IndividualProperties/* default */.Z, IndividualProperties_options);



/* harmony default export */ const setup_wizard_IndividualProperties = (IndividualProperties/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/IndividualProperties.js
function IndividualProperties_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { IndividualProperties_typeof = function _typeof(obj) { return typeof obj; }; } else { IndividualProperties_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return IndividualProperties_typeof(obj); }

function IndividualProperties_toConsumableArray(arr) { return IndividualProperties_arrayWithoutHoles(arr) || IndividualProperties_iterableToArray(arr) || IndividualProperties_unsupportedIterableToArray(arr) || IndividualProperties_nonIterableSpread(); }

function IndividualProperties_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function IndividualProperties_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return IndividualProperties_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return IndividualProperties_arrayLikeToArray(o, minLen); }

function IndividualProperties_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function IndividualProperties_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return IndividualProperties_arrayLikeToArray(arr); }

function IndividualProperties_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function IndividualProperties_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function IndividualProperties_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function IndividualProperties_createClass(Constructor, protoProps, staticProps) { if (protoProps) IndividualProperties_defineProperties(Constructor.prototype, protoProps); if (staticProps) IndividualProperties_defineProperties(Constructor, staticProps); return Constructor; }

function IndividualProperties_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) IndividualProperties_setPrototypeOf(subClass, superClass); }

function IndividualProperties_setPrototypeOf(o, p) { IndividualProperties_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return IndividualProperties_setPrototypeOf(o, p); }

function IndividualProperties_createSuper(Derived) { var hasNativeReflectConstruct = IndividualProperties_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = IndividualProperties_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = IndividualProperties_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return IndividualProperties_possibleConstructorReturn(this, result); }; }

function IndividualProperties_possibleConstructorReturn(self, call) { if (call && (IndividualProperties_typeof(call) === "object" || typeof call === "function")) { return call; } return IndividualProperties_assertThisInitialized(self); }

function IndividualProperties_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function IndividualProperties_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function IndividualProperties_getPrototypeOf(o) { IndividualProperties_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return IndividualProperties_getPrototypeOf(o); }




var IndividualProperties_wp = wp,
    IndividualProperties_data = IndividualProperties_wp.data;
var IndividualProperties_wp$i18n = wp.i18n,
    IndividualProperties_ = IndividualProperties_wp$i18n.__,
    IndividualProperties_sprintf = IndividualProperties_wp$i18n.sprintf;
var IndividualProperties_wp2 = wp,
    IndividualProperties_apiFetch = IndividualProperties_wp2.apiFetch;
var _snip = snip,
    SchemaProperty = _snip.SchemaProperty;

var IndividualProperties_IndividualProperties = /*#__PURE__*/function (_React$Component) {
  IndividualProperties_inherits(IndividualProperties, _React$Component);

  var _super = IndividualProperties_createSuper(IndividualProperties);

  function IndividualProperties(props) {
    var _this;

    IndividualProperties_classCallCheck(this, IndividualProperties);

    _this = _super.call(this, props);
    _this.state = {
      'loaders': 0,
      'snips': [],
      'props': {}
    };
    _this.checkProperties = _this.checkProperties.bind(IndividualProperties_assertThisInitialized(_this));
    _this.fetchSchemas = _this.fetchSchemas.bind(IndividualProperties_assertThisInitialized(_this));
    _this.wasSchemaFetched = _this.wasSchemaFetched.bind(IndividualProperties_assertThisInitialized(_this));
    _this.fetchPropertiesWithManualData = _this.fetchPropertiesWithManualData.bind(IndividualProperties_assertThisInitialized(_this));
    return _this;
  }

  IndividualProperties_createClass(IndividualProperties, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkProperties();
    }
  }, {
    key: "wasSchemaFetched",
    value: function wasSchemaFetched(id) {
      var snips = this.state.snips;

      for (var i = 0; i < snips.length; i++) {
        if (snips[i].id === id) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "fetchSchemas",
    value: function fetchSchemas(ids) {
      var _this2 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      ids = ids.filter(function (id) {
        return !_this2.wasSchemaFetched(id);
      });

      if (ids.length <= 0) {
        return;
      }

      var url_parameter = '';
      ids.forEach(function (id) {
        url_parameter += '&ids[]=' + id;
      });
      this.setState({
        'loaders': this.state.loaders + 1
      });
      IndividualProperties_apiFetch({
        'path': '/wpbuddy/rich_snippets/v1/schema/examples?' + url_parameter,
        'method': 'GET'
      }).then(function (results) {
        var snips = _this2.state.snips;

        _this2.setState({
          'loaders': _this2.state.loaders - 1,
          'snips': [].concat(IndividualProperties_toConsumableArray(snips), IndividualProperties_toConsumableArray(results))
        });

        results.forEach(function (result) {
          if (result.dependencies.length > 0) {
            _this2.fetchSchemas(result.dependencies, callback);
          }
        });

        if (_this2.state.loaders <= 0) {
          callback();
        }
      })["catch"](function (error) {
        console.error(error);
        IndividualProperties_data.dispatch('core/notices').createErrorNotice(IndividualProperties_sprintf(IndividualProperties_('Could not fetch schemas. Got error: %s', 'rich-snippets-schema'), error.message), {
          isDismissible: true
        });

        _this2.setState({
          'loaders': _this2.state.loaders - 1
        });
      });
    }
  }, {
    key: "checkProperties",
    value: function checkProperties() {
      this.setState({
        'loaders': this.state.loaders + 1
      });
      this.fetchSchemas(this.props.snips, this.fetchPropertiesWithManualData);
    }
  }, {
    key: "fetchPropertiesWithManualData",
    value: function fetchPropertiesWithManualData() {
      var _this3 = this;

      var snips = this.state.snips;
      var propertiesWithManualData = {};
      var currentSchemaTitle = '';

      var hasSubSchema = function hasSubSchema(prop) {
        return prop[0].indexOf('://schema.org') >= 0 && IndividualProperties_typeof(prop[1]) === 'object' && prop[1] !== null;
      };

      var hasManualData = function hasManualData(prop) {
        return prop.hasOwnProperty('manual_data_expected') && prop.manual_data_expected;
      };

      var getManualProperties = function getManualProperties(snip, snipId) {
        var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        // run through all properties
        Object.keys(snip).forEach(function (key) {
          var prop = snip[key]; // filter all non-properties

          if (!(IndividualProperties_typeof(prop) === 'object' && prop !== null)) {
            return;
          }

          if (hasSubSchema(prop)) {
            getManualProperties(prop[1], snipId, depth++);
            return;
          }

          if (!hasManualData(prop)) {
            return;
          }

          prop['schemaTitle'] = currentSchemaTitle;
          prop['snipId'] = snipId;
          propertiesWithManualData[key] = prop;
        });
      };

      snips.forEach(function (snip) {
        currentSchemaTitle = snip.title;
        getManualProperties(snip.snip_code, snip.id);
      });

      if (Object.keys(propertiesWithManualData).length <= 0) {
        this.props.onSkip();
      }
      /* Merge the current properties */


      Object.keys(this.props.properties).map(function (snipId) {
        var properties = _this3.props.properties[snipId];

        if (Object.keys(properties).length <= 0) {
          return;
        }

        Object.keys(properties).map(function (propId) {
          if (propertiesWithManualData.hasOwnProperty(propId)) {
            propertiesWithManualData[propId] = {
              0: properties[propId].selection,
              1: -1 !== properties[propId].selection.indexOf('textfield') ? properties[propId].textValue : null,
              'schemaTitle': propertiesWithManualData[propId].schemaTitle
            };
          }
        });
      });
      this.setState({
        'props': propertiesWithManualData
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.state.loaders > 0) {
        return wp.element.createElement("div", null, wp.element.createElement(components_general_Loader, {
          isLoading: true
        }), IndividualProperties_('Checking for properties...', 'rich-snippets-schema'));
      }

      if (Object.keys(this.state.props).length <= 0) {
        return wp.element.createElement("div", null, wp.element.createElement(components_general_Loader, {
          isLoading: true
        }), IndividualProperties_('Building property list...', 'rich-snippets-schema'));
      }

      var schemaTitleBefore = '';
      return wp.element.createElement("table", {
        className: "individual-properties--table"
      }, wp.element.createElement("tbody", null, Object.keys(this.state.props).map(function (prop_id, i) {
        var prop = _this4.state.props[prop_id];
        var prop_name = prop_id.substr(0, prop_id.indexOf('-prop-'));
        var valueObject = {
          'label': prop[0].indexOf('textfield') >= 0 ? IndividualProperties_('Individual Text', 'rich-snippets-schema') : prop[0],
          'selection': prop[0],
          'textValue': prop[1],
          'subSchemaProps': {},
          'typeObject': {
            'label': IndividualProperties_('Text', 'rich-snippets-schema'),
            'value': 'http://schema.org/Text'
          }
        };
        var schemaTitle = schemaTitleBefore !== prop.schemaTitle ? IndividualProperties_sprintf(IndividualProperties_('The %s schema needs a value for the ...', 'rich-snippets-schema'), prop.schemaTitle) : '';
        schemaTitleBefore = prop.schemaTitle;
        return wp.element.createElement(SchemaProperty, {
          key: 'schema-property-' + i,
          property: 'http://schema.org/' + prop_name,
          valueObject: valueObject,
          schemaTitle: schemaTitle,
          displayDeleteButton: false,
          onUpdate: function onUpdate(propName, value) {
            _this4.props.onChangeProperty(propName, value, prop_id, prop.snipId);
          }
        });
      })));
    }
  }]);

  return IndividualProperties;
}((external_React_default()).Component);

/* harmony default export */ const components_setup_wizard_IndividualProperties = (IndividualProperties_IndividualProperties);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/SchemaRuleset.scss
var SchemaRuleset = __webpack_require__(567);
;// CONCATENATED MODULE: ./js/src/components/SchemaRuleset.scss

            

var SchemaRuleset_options = {};

SchemaRuleset_options.insert = "head";
SchemaRuleset_options.singleton = false;

var SchemaRuleset_update = injectStylesIntoStyleTag_default()(SchemaRuleset/* default */.Z, SchemaRuleset_options);



/* harmony default export */ const components_SchemaRuleset = (SchemaRuleset/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/SchemaRuleGroup.scss
var SchemaRuleGroup = __webpack_require__(99);
;// CONCATENATED MODULE: ./js/src/components/SchemaRuleGroup.scss

            

var SchemaRuleGroup_options = {};

SchemaRuleGroup_options.insert = "head";
SchemaRuleGroup_options.singleton = false;

var SchemaRuleGroup_update = injectStylesIntoStyleTag_default()(SchemaRuleGroup/* default */.Z, SchemaRuleGroup_options);



/* harmony default export */ const components_SchemaRuleGroup = (SchemaRuleGroup/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./js/src/components/SchemaRule.scss
var SchemaRule = __webpack_require__(997);
;// CONCATENATED MODULE: ./js/src/components/SchemaRule.scss

            

var SchemaRule_options = {};

SchemaRule_options.insert = "head";
SchemaRule_options.singleton = false;

var SchemaRule_update = injectStylesIntoStyleTag_default()(SchemaRule/* default */.Z, SchemaRule_options);



/* harmony default export */ const components_SchemaRule = (SchemaRule/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(769);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(319);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(713);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function createClass_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function createClass_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) createClass_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) createClass_defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(506);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function setPrototypeOf_setPrototypeOf(o, p) {
  setPrototypeOf_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return setPrototypeOf_setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function inherits_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf_setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function typeof_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return typeof_typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function assertThisInitialized_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function possibleConstructorReturn_possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized_assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
;// CONCATENATED MODULE: ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const stylis_browser_esm = (stylis_min);

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/cache.browser.esm.js




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_browser_esm(stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ const cache_browser_esm = (createCache);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(354);
;// CONCATENATED MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};



;// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const hash_browser_esm = (murmur2);

;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const unitless_browser_esm = (unitlessKeys);

;// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const memoize_browser_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize_browser_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serialize_browser_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};



;// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js






var emotion_element_57a3a7a3_browser_esm_hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/(0,external_React_.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? cache_browser_esm() : null);
var emotion_element_57a3a7a3_browser_esm_ThemeContext = /*#__PURE__*/(0,external_React_.createContext)({});
var CacheProvider = EmotionCacheContext.Provider;

var emotion_element_57a3a7a3_browser_esm_withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/(0,external_React_.createElement)(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/(0,external_React_.forwardRef)(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (false) { var match, error; }

  return newProps;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serialize_browser_esm_serializeStyles(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/(0,external_React_.createElement)(type, newProps);

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */emotion_element_57a3a7a3_browser_esm_withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/(0,external_React_.createElement)(emotion_element_57a3a7a3_browser_esm_ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (false) {}



;// CONCATENATED MODULE: ./node_modules/@emotion/css/dist/css.browser.esm.js


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serialize_browser_esm_serializeStyles(args);
}

/* harmony default export */ const css_browser_esm = (css);

;// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js











var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return external_React_.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return external_React_.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/createElement(ThemeContext.Consumer, null, function (theme) {
      var serialized = serializeStyles([styles(theme)]);
      return /*#__PURE__*/createElement(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = serializeStyles([styles]);
  return /*#__PURE__*/createElement(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
})));

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      insertStyles(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(external_React_.Component);

var keyframes = function keyframes() {
  var insertable = css_browser_esm.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = emotion_element_57a3a7a3_browser_esm_withEmotionCache(function (props, context) {
  return /*#__PURE__*/(0,external_React_.createElement)(emotion_element_57a3a7a3_browser_esm_ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = serialize_browser_esm_serializeStyles(args, context.registered);

      {
        insertStyles(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(8);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function defineProperty_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
// EXTERNAL MODULE: ./node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__(639);
;// CONCATENATED MODULE: ./node_modules/react-select/dist/index-4b37608a.browser.esm.js
















// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof_typeof(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function index_4b37608a_browser_esm_createSuper(Derived) { var hasNativeReflectConstruct = index_4b37608a_browser_esm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_possibleConstructorReturn(this, result); }; }

function index_4b37608a_browser_esm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, defineProperty_defineProperty(_ref3, alignToControl(placement), '100%'), defineProperty_defineProperty(_ref3, "backgroundColor", colors.neutral0), defineProperty_defineProperty(_ref3, "borderRadius", borderRadius), defineProperty_defineProperty(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), defineProperty_defineProperty(_ref3, "marginBottom", spacing.menuGutter), defineProperty_defineProperty(_ref3, "marginTop", spacing.menuGutter), defineProperty_defineProperty(_ref3, "position", 'absolute'), defineProperty_defineProperty(_ref3, "width", '100%'), defineProperty_defineProperty(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/(0,external_React_.createContext)({
  getPortalPlacement: null
}); // NOTE: internal only

var MenuPlacer = /*#__PURE__*/function (_Component) {
  inherits_inherits(MenuPlacer, _Component);

  var _super = index_4b37608a_browser_esm_createSuper(MenuPlacer);

  function MenuPlacer() {
    var _this;

    classCallCheck_classCallCheck(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread(_objectSpread({}, _this.props), {}, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  createClass_createClass(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(external_React_.Component);
MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return jsx("div", {
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /*#__PURE__*/function (_Component2) {
  inherits_inherits(MenuPortal, _Component2);

  var _super2 = index_4b37608a_browser_esm_createSuper(MenuPortal);

  function MenuPortal() {
    var _this2;

    classCallCheck_classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  createClass_createClass(MenuPortal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = jsx("div", {
        css: getStyles('menuPortal', state)
      }, children);
      return jsx(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /*#__PURE__*/(0,external_ReactDOM_namespaceObject.createPortal)(menuWrapper, appendTo) : menuWrapper);
    }
  }]);

  return MenuPortal;
}(external_React_.Component);

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof_typeof(a) == 'object' && typeof_typeof(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return jsx("div", _extends({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return jsx("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return jsx("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 =  true ? {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;"
} : 0;

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || jsx(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("span", _extends({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = keyframes(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return jsx("span", {
    css: /*#__PURE__*/css_browser_esm({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  true ? "" : 0)
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return jsx("div", _extends({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var index_4b37608a_browser_esm_css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return jsx("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, jsx(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), jsx("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutProperties(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return jsx("div", _extends({
    css: getStyles('groupHeading', _objectSpread$1({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutProperties(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return jsx("div", {
    css: getStyles('input', _objectSpread$2({
      theme: theme
    }, props))
  }, jsx(AutosizeInput/* default */.Z, _extends({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return jsx("div", innerProps, children || jsx(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return jsx(ClassNames, null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return jsx(Container, {
      data: data,
      innerProps: _objectSpread$3(_objectSpread$3({}, innerProps), {}, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, jsx(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), jsx(Remove, {
      data: data,
      innerProps: _objectSpread$3({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread$4(_objectSpread$4({}, components), props.components);
};



;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
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
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function arrayLikeToArray_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function unsupportedIterableToArray_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray_arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || unsupportedIterableToArray_unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function arrayWithoutHoles_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray_arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function iterableToArray_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function nonIterableSpread_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function toConsumableArray_toConsumableArray(arr) {
  return arrayWithoutHoles_arrayWithoutHoles(arr) || iterableToArray_iterableToArray(arr) || unsupportedIterableToArray_unsupportedIterableToArray(arr) || nonIterableSpread_nonIterableSpread();
}
;// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const memoize_one_esm = (memoizeOne);

;// CONCATENATED MODULE: ./node_modules/react-select/dist/Select-5d18b8d9.browser.esm.js


















var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};

for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];

  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

function Select_5d18b8d9_browser_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Select_5d18b8d9_browser_esm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Select_5d18b8d9_browser_esm_ownKeys(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Select_5d18b8d9_browser_esm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = Select_5d18b8d9_browser_esm_objectSpread({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function Select_5d18b8d9_browser_esm_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref =  true ? {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;"
} : 0;

var A11yText = function A11yText(props) {
  return jsx("span", _extends({
    css: _ref
  }, props));
};

function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = _objectWithoutProperties(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return jsx("input", _extends({
    ref: innerRef
  }, props, {
    css: /*#__PURE__*/css_browser_esm({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  true ? "" : 0)
  }));
}

function Select_5d18b8d9_browser_esm_createSuper(Derived) { var hasNativeReflectConstruct = Select_5d18b8d9_browser_esm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_possibleConstructorReturn(this, result); }; }

function Select_5d18b8d9_browser_esm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NodeResolver = /*#__PURE__*/function (_Component) {
  inherits_inherits(NodeResolver, _Component);

  var _super = Select_5d18b8d9_browser_esm_createSuper(NodeResolver);

  function NodeResolver() {
    classCallCheck_classCallCheck(this, NodeResolver);

    return _super.apply(this, arguments);
  }

  createClass_createClass(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef((0,external_ReactDOM_namespaceObject.findDOMNode)(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(external_React_.Component);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var canUseDOM = !!( window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock = /*#__PURE__*/function (_Component) {
  inherits_inherits(ScrollLock, _Component);

  var _super = _createSuper$1(ScrollLock);

  function ScrollLock() {
    var _this;

    classCallCheck_classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.originalStyles = {};
    _this.listenerOptions = {
      capture: false,
      passive: false
    };
    return _this;
  }

  createClass_createClass(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(external_React_.Component);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _ref$1 =  true ? {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;"
} : 0;

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock = /*#__PURE__*/function (_PureComponent) {
  inherits_inherits(ScrollBlock, _PureComponent);

  var _super = _createSuper$2(ScrollBlock);

  function ScrollBlock() {
    var _this;

    classCallCheck_classCallCheck(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      touchScrollTarget: null
    };

    _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    };

    _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };

    return _this;
  }

  createClass_createClass(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return jsx("div", null, jsx("div", {
        onClick: this.blurSelectInput,
        css: _ref$1
      }), jsx(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? jsx(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(external_React_.PureComponent);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = getPrototypeOf_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ScrollCaptor = /*#__PURE__*/function (_Component) {
  inherits_inherits(ScrollCaptor, _Component);

  var _super = _createSuper$3(ScrollCaptor);

  function ScrollCaptor() {
    var _this;

    classCallCheck_classCallCheck(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.isBottom = false;
    _this.isTop = false;
    _this.scrollTarget = void 0;
    _this.touchStart = void 0;

    _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };

    _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    };

    _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    };

    _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    };

    _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    };

    _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    };

    return _this;
  }

  createClass_createClass(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no element is available to attach to
      if (!el) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      // all the if statements are to appease Flow 😢
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(external_React_.Component);

function ScrollCaptorSwitch(_ref) {
  var _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
      props = _objectWithoutProperties(_ref, ["isEnabled"]);

  return isEnabled ? /*#__PURE__*/external_React_default().createElement(ScrollCaptor, props) : props.children;
}

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu, press Tab to select the option and exit the menu.");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function Select_5d18b8d9_browser_esm_ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Select_5d18b8d9_browser_esm_objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Select_5d18b8d9_browser_esm_ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Select_5d18b8d9_browser_esm_ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: index_4b37608a_browser_esm_css,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$1,
  valueContainer: valueContainerCSS
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = Select_5d18b8d9_browser_esm_objectSpread$1({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

function Select_5d18b8d9_browser_esm_ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Select_5d18b8d9_browser_esm_objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Select_5d18b8d9_browser_esm_ownKeys$2(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Select_5d18b8d9_browser_esm_ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = getPrototypeOf_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select = /*#__PURE__*/function (_Component) {
  inherits_inherits(Select, _Component);

  var _super = _createSuper$4(Select);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    classCallCheck_classCallCheck(this, Select);

    _this = _super.call(this, _props);
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.clearFocusValueOnUpdate = false;
    _this.commonProps = void 0;
    _this.components = void 0;
    _this.hasGroups = false;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.inputIsHiddenAfterUpdate = void 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.cacheComponents = function (components) {
      _this.components = defaultComponents({
        components: components
      });
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, Select_5d18b8d9_browser_esm_objectSpread$2(Select_5d18b8d9_browser_esm_objectSpread$2({}, actionMeta), {}, {
        name: name
      }));
    };

    _this.setValue = function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(toConsumableArray_toConsumableArray(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getOptionLabel = function (data) {
      return _this.props.getOptionLabel(data);
    };

    _this.getOptionValue = function (data) {
      return _this.props.getOptionValue(data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getActiveDescendentId = function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, Select_5d18b8d9_browser_esm_objectSpread$2(Select_5d18b8d9_browser_esm_objectSpread$2({}, context), {}, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    };

    _this.onKeyDown = function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.buildMenuOptions = function (props, selectValue) {
      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this.isOptionDisabled(option, selectValue);

        var isSelected = _this.isOptionSelected(option, selectValue);

        var label = _this.getOptionLabel(option);

        var value = _this.getOptionValue(option);

        if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this.selectOption(option);
        };
        var optionId = "".concat(_this.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this.hasGroups) _this.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    };

    var _value = _props.value;
    _this.cacheComponents = memoize_one_esm(_this.cacheComponents, exportedEqual).bind(assertThisInitialized_assertThisInitialized(_this));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = cleanValue(_value);

    _this.buildMenuOptions = memoize_one_esm(_this.buildMenuOptions, function (newArgs, lastArgs) {
      var _ref6 = newArgs,
          _ref7 = _slicedToArray(_ref6, 2),
          newProps = _ref7[0],
          newSelectValue = _ref7[1];

      var _ref8 = lastArgs,
          _ref9 = _slicedToArray(_ref8, 2),
          lastProps = _ref9[0],
          lastSelectValue = _ref9[1];

      return exportedEqual(newSelectValue, lastSelectValue) && exportedEqual(newProps.inputValue, lastProps.inputValue) && exportedEqual(newProps.options, lastProps.options);
    }).bind(assertThisInitialized_assertThisInitialized(_this));

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  createClass_createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          menuIsOpen = _this$props8.menuIsOpen,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
        var selectValue = cleanValue(nextProps.value);
        var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
          render: [],
          focusable: []
        };
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var menuOptions = this.buildMenuOptions(this.props, selectValue);
      var isMulti = this.props.isMulti;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.setState({
        menuOptions: menuOptions,
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      }, function () {
        _this2.onMenuOpen();

        _this2.announceAriaLiveContext({
          event: 'menu'
        });
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          isSearchable = _this$props11.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu'
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus])
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return Select_5d18b8d9_browser_esm_objectSpread$2(Select_5d18b8d9_browser_esm_objectSpread$2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;
      var hasValue = this.hasValue();

      var getValue = function getValue() {
        return selectValue;
      };

      var cx = classNames.bind(null, classNamePrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this3 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this3.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "constructAriaLiveMessage",
    // ==============================
    // Renderers
    // ==============================
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex,
          form = _this$props14.form;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/external_React_default().createElement(DummyInput, _extends({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          form: form,
          value: ""
        }, ariaAttributes));
      }

      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return /*#__PURE__*/external_React_default().createElement(Input, _extends({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/external_React_default().createElement(Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return /*#__PURE__*/external_React_default().createElement(MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: _this4.getOptionValue(opt),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /*#__PURE__*/external_React_default().createElement(SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/external_React_default().createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/external_React_default().createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/external_React_default().createElement(IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/external_React_default().createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu = _this$components3.Menu,
          MenuList = _this$components3.MenuList,
          MenuPortal = _this$components3.MenuPortal,
          LoadingMessage = _this$components3.LoadingMessage,
          NoOptionsMessage = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return /*#__PURE__*/external_React_default().createElement(Option, _extends({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = _objectWithoutProperties(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return /*#__PURE__*/external_React_default().createElement(Group, _extends({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/external_React_default().createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = /*#__PURE__*/external_React_default().createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/external_React_default().createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref10) {
        var ref = _ref10.ref,
            _ref10$placerProps = _ref10.placerProps,
            placement = _ref10$placerProps.placement,
            maxHeight = _ref10$placerProps.maxHeight;
        return /*#__PURE__*/external_React_default().createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/external_React_default().createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, /*#__PURE__*/external_React_default().createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, /*#__PURE__*/external_React_default().createElement(MenuList, _extends({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/external_React_default().createElement(MenuPortal, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/external_React_default().createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/external_React_default().createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : /*#__PURE__*/external_React_default().createElement("input", {
            name: name,
            type: "hidden"
          });
          return /*#__PURE__*/external_React_default().createElement("div", null, input);
        }
      } else {
        var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return /*#__PURE__*/external_React_default().createElement("input", {
          name: name,
          type: "hidden",
          value: _value2
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return /*#__PURE__*/external_React_default().createElement(A11yText, {
        "aria-live": "polite"
      }, /*#__PURE__*/external_React_default().createElement("span", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), /*#__PURE__*/external_React_default().createElement("span", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/external_React_default().createElement(SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/external_React_default().createElement(Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/external_React_default().createElement(ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/external_React_default().createElement(IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(external_React_.Component);

Select.defaultProps = defaultProps;



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(655);
;// CONCATENATED MODULE: ./node_modules/react-select/dist/stateManager-2f2b6f5b.browser.esm.js









function stateManager_2f2b6f5b_browser_esm_createSuper(Derived) { var hasNativeReflectConstruct = stateManager_2f2b6f5b_browser_esm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_possibleConstructorReturn(this, result); }; }

function stateManager_2f2b6f5b_browser_esm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var stateManager_2f2b6f5b_browser_esm_defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    inherits_inherits(StateManager, _Component);

    var _super = stateManager_2f2b6f5b_browser_esm_createSuper(StateManager);

    function StateManager() {
      var _this;

      classCallCheck_classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    createClass_createClass(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = _objectWithoutProperties(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return /*#__PURE__*/external_React_default().createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(external_React_.Component), _class.defaultProps = stateManager_2f2b6f5b_browser_esm_defaultProps, _temp;
};



;// CONCATENATED MODULE: ./node_modules/react-select/async/dist/react-select.browser.esm.js























function react_select_browser_esm_createSuper(Derived) { var hasNativeReflectConstruct = react_select_browser_esm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_possibleConstructorReturn(this, result); }; }

function react_select_browser_esm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var react_select_browser_esm_defaultProps = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null,
  isLoading: false
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    inherits_inherits(Async, _Component);

    var _super = react_select_browser_esm_createSuper(Async);

    function Async(props) {
      var _this;

      classCallCheck_classCallCheck(this, Async);

      _this = _super.call(this);
      _this.select = void 0;
      _this.lastRequest = void 0;
      _this.mounted = false;
      _this.optionsCache = {};

      _this.handleInputChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = handleInputChange(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      };

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    createClass_createClass(Async, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            isLoadingProp = _this$props2.isLoading,
            props = _objectWithoutProperties(_this$props2, ["loadOptions", "isLoading"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return /*#__PURE__*/external_React_default().createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading || isLoadingProp,
          onInputChange: this.handleInputChange
        }));
      }
    }]);

    return Async;
  }(external_React_.Component), _class.defaultProps = react_select_browser_esm_defaultProps, _temp;
};
var SelectState = manageState(Select);
var Async = makeAsyncSelect(SelectState);

/* harmony default export */ const react_select_browser_esm = (Async);


;// CONCATENATED MODULE: ./js/src/objects/rules.js
function rules_toConsumableArray(arr) { return rules_arrayWithoutHoles(arr) || rules_iterableToArray(arr) || rules_unsupportedIterableToArray(arr) || rules_nonIterableSpread(); }

function rules_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function rules_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return rules_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rules_arrayLikeToArray(o, minLen); }

function rules_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function rules_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return rules_arrayLikeToArray(arr); }

function rules_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function rules_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function rules_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function rules_createClass(Constructor, protoProps, staticProps) { if (protoProps) rules_defineProperties(Constructor.prototype, protoProps); if (staticProps) rules_defineProperties(Constructor, staticProps); return Constructor; }

function rules_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Ruleset = /*#__PURE__*/function () {
  function Ruleset() {
    rules_classCallCheck(this, Ruleset);

    rules_defineProperty(this, "ruleGroups", {});
  }

  rules_createClass(Ruleset, [{
    key: "addRuleGroup",
    value: function addRuleGroup(ruleGroup) {
      var numbers = Object.keys(this.ruleGroups);

      if (numbers.length <= 0) {
        numbers = [-1];
      } else {
        numbers = numbers.map(function (x) {
          return parseInt(x);
        });
      }

      var no = Math.max.apply(Math, rules_toConsumableArray(numbers));
      this.ruleGroups[no + 1] = ruleGroup;
    }
  }, {
    key: "getRuleGroups",
    value: function getRuleGroups() {
      return this.ruleGroups;
    }
  }, {
    key: "removeRuleGroup",
    value: function removeRuleGroup(i) {
      i = parseInt(i);
      delete this.ruleGroups[i];
    }
  }, {
    key: "updateRuleGroup",
    value: function updateRuleGroup(i, ruleGroup) {
      i = parseInt(i);
      this.ruleGroups[i] = ruleGroup;
    }
    /**
     * @deprecated
     * @returns {boolean}
     */

  }, {
    key: "hasRules",
    value: function hasRules() {
      return Object.keys(this.ruleGroups).length > 0;
    }
  }, {
    key: "hasRuleGroups",
    value: function hasRuleGroups() {
      return Object.keys(this.ruleGroups).length > 0;
    }
  }]);

  return Ruleset;
}();

var RuleGroup = /*#__PURE__*/function () {
  function RuleGroup() {
    rules_classCallCheck(this, RuleGroup);

    rules_defineProperty(this, "rules", []);
  }

  rules_createClass(RuleGroup, [{
    key: "getRules",
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: "addRule",
    value: function addRule(rule) {
      this.rules.push(rule);
    }
  }, {
    key: "removeRule",
    value: function removeRule(id) {
      id = parseInt(id);

      if (this.rules.length <= 0) {
        return;
      }

      this.rules.splice(id, 1);
    }
  }, {
    key: "updateRule",
    value: function updateRule(id, rule) {
      this.rules[id] = rule;
    }
  }]);

  return RuleGroup;
}();

var Rule = function Rule(param, operator, value) {
  rules_classCallCheck(this, Rule);

  rules_defineProperty(this, "param", '');

  rules_defineProperty(this, "operator", '');

  rules_defineProperty(this, "value", '');

  this.param = param;
  this.operator = operator;
  this.value = value;
};


;// CONCATENATED MODULE: ./js/src/components/SchemaRule.js
function SchemaRule_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SchemaRule_typeof = function _typeof(obj) { return typeof obj; }; } else { SchemaRule_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SchemaRule_typeof(obj); }

function SchemaRule_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SchemaRule_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SchemaRule_ownKeys(Object(source), true).forEach(function (key) { SchemaRule_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SchemaRule_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SchemaRule_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SchemaRule_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SchemaRule_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SchemaRule_createClass(Constructor, protoProps, staticProps) { if (protoProps) SchemaRule_defineProperties(Constructor.prototype, protoProps); if (staticProps) SchemaRule_defineProperties(Constructor, staticProps); return Constructor; }

function SchemaRule_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SchemaRule_setPrototypeOf(subClass, superClass); }

function SchemaRule_setPrototypeOf(o, p) { SchemaRule_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SchemaRule_setPrototypeOf(o, p); }

function SchemaRule_createSuper(Derived) { var hasNativeReflectConstruct = SchemaRule_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SchemaRule_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SchemaRule_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SchemaRule_possibleConstructorReturn(this, result); }; }

function SchemaRule_possibleConstructorReturn(self, call) { if (call && (SchemaRule_typeof(call) === "object" || typeof call === "function")) { return call; } return SchemaRule_assertThisInitialized(self); }

function SchemaRule_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SchemaRule_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SchemaRule_getPrototypeOf(o) { SchemaRule_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SchemaRule_getPrototypeOf(o); }






var SchemaRule_wp = wp,
    SchemaRule_data = SchemaRule_wp.data;
var SchemaRule_wp$i18n = wp.i18n,
    SchemaRule_ = SchemaRule_wp$i18n.__,
    SchemaRule_sprintf = SchemaRule_wp$i18n.sprintf;

var SchemaRule_SchemaRule = /*#__PURE__*/function (_React$Component) {
  SchemaRule_inherits(SchemaRule, _React$Component);

  var _super = SchemaRule_createSuper(SchemaRule);

  function SchemaRule(props) {
    var _this;

    SchemaRule_classCallCheck(this, SchemaRule);

    _this = _super.call(this, props);
    _this.state = {
      'param': _this.props.rule.param,
      'operator': _this.props.rule.operator,
      'value': _this.props.rule.value,
      'isLoading': false,
      'possibleValues': {},
      'asyncSelectValue': '',
      'defaultOptions': [],
      'label': ''
    };
    _this.createRule = _this.createRule.bind(SchemaRule_assertThisInitialized(_this));
    _this.removeRule = _this.removeRule.bind(SchemaRule_assertThisInitialized(_this));
    _this.changeParam = _this.changeParam.bind(SchemaRule_assertThisInitialized(_this));
    _this.changeValue = _this.changeValue.bind(SchemaRule_assertThisInitialized(_this));
    _this.changeOperator = _this.changeOperator.bind(SchemaRule_assertThisInitialized(_this));
    _this.fetchValueOptions = _this.fetchValueOptions.bind(SchemaRule_assertThisInitialized(_this));
    _this.handleAsyncSelectChange = _this.handleAsyncSelectChange.bind(SchemaRule_assertThisInitialized(_this));
    _this.fetchPossibleValueOptions = _this.fetchPossibleValueOptions.bind(SchemaRule_assertThisInitialized(_this));
    _this.handleAsyncSelectInputChange = _this.handleAsyncSelectInputChange.bind(SchemaRule_assertThisInitialized(_this));
    _this.getFirstValueFromResults = _this.getFirstValueFromResults.bind(SchemaRule_assertThisInitialized(_this));
    return _this;
  }

  SchemaRule_createClass(SchemaRule, [{
    key: "createRule",
    value: function createRule() {
      if (this.props.onRuleCreation && typeof this.props.onRuleCreation === 'function') {
        this.props.onRuleCreation();
      }
    }
  }, {
    key: "removeRule",
    value: function removeRule() {
      if (this.props.onRuleDelete && typeof this.props.onRuleDelete === 'function') {
        this.props.onRuleDelete(this.props.id);
      }
    }
  }, {
    key: "changeParam",
    value: function changeParam(e) {
      this.setState({
        'param': e.target.value,
        'value': ''
      });
      this.fetchValueOptions(e.target.value);
    }
  }, {
    key: "changeOperator",
    value: function changeOperator(e) {
      this.setState({
        'operator': e.target.value
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(e) {
      this.setState({
        'value': e.target.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var isSelect2 = 'page_parent' === this.state.param || 'post' === this.state.param;

      if (isSelect2) {
        this.fetchPossibleValueOptions('id:' + parseInt(this.state.value), function (possibleValues) {
          if (possibleValues.length <= 0) {
            return;
          }

          _this2.setState({
            'defaultOptions': possibleValues,
            'label': possibleValues[0].label
          });
        });
      } else {
        this.fetchValueOptions(this.state.param, false);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.param !== this.state.param || prevState.operator !== this.state.operator || prevState.value !== this.state.value) {
        this.props.onUpdateRule(this.props.id, new Rule(this.state.param, this.state.operator, this.state.value));
      }

      if (this.props.rule.param !== prevProps.rule.param || this.props.rule.operator !== prevProps.rule.operator || this.props.rule.value !== prevProps.rule.value) {
        this.setState({
          'param': this.props.rule.param,
          'operator': this.props.rule.operator,
          'value': this.props.rule.value
        });
      }
    }
  }, {
    key: "getFirstValueFromResults",
    value: function getFirstValueFromResults(results) {
      var first = Object.keys(results).find(function (x) {
        return x !== undefined;
      });
      var value;

      if (undefined === first) {
        value = '';
      } else {
        value = first;

        if ('[object Object]' === Object.prototype.toString.call(results[first])) {
          if (results[first].hasOwnProperty('values') && Object.keys(results[first].values).length > 0) {
            var firstFromSubSelect = Object.keys(results[first].values).find(function (x) {
              return x !== undefined;
            });

            if ('[object String]' === Object.prototype.toString.call(firstFromSubSelect)) {
              value = firstFromSubSelect;
            } else {
              value = '';
            }
          } else {
            value = '';
          }
        }
      }

      return value;
    }
  }, {
    key: "fetchValueOptions",
    value: function fetchValueOptions(param) {
      var _this3 = this;

      var setDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.setState({
        'isLoading': true
      });
      wp.apiFetch({
        'path': '/wpbuddy/rich_snippets/v2/positions/value-select/?param=' + param,
        'method': 'GET'
      }).then(function (results) {
        if (setDefaultValue) {
          _this3.setState({
            'value': _this3.getFirstValueFromResults(results)
          });
        }
        /* Does the current value exist in the results? If not, select the first */


        var exists = Object.keys(results).find(function (x) {
          if (x === _this3.state.value) {
            return true;
          }

          if ('[object Object]' === Object.prototype.toString.call(results[x])) {
            if (results[x].hasOwnProperty('values') && Object.keys(results[x].values).length > 0) {
              return Object.keys(results[x].values).filter(function (x) {
                return x === _this3.state.value;
              }).length >= 1;
            }
          }

          return false;
        });

        if (!exists) {
          _this3.setState({
            'value': _this3.getFirstValueFromResults(results)
          });
        }

        _this3.setState({
          'isLoading': false,
          'possibleValues': SchemaRule_objectSpread({}, results)
        });
      })["catch"](function (error) {
        console.error(error);
        SchemaRule_data.dispatch('core/notices').createErrorNotice(SchemaRule_sprintf(SchemaRule_('Could not fetch position value select options. Got error: %s', 'rich-snippets-schema'), error.message), {
          isDismissible: true
        });

        _this3.setState({
          'isLoading': false
        });
      });
    }
  }, {
    key: "fetchPossibleValueOptions",
    value: function fetchPossibleValueOptions(inputValue, callback) {
      if (inputValue.length < 3) {
        callback();
        return;
      }

      wp.apiFetch({
        'path': '/wpbuddy/rich_snippets/v1/positions/value-possibilities?q=' + inputValue,
        'method': 'GET'
      }).then(function (results) {
        var possibleValues = Object.keys(results.values).map(function (k) {
          return {
            'value': k,
            'label': results.values[k]
          };
        });
        callback(possibleValues);
      })["catch"](function (error) {
        console.error(error);
        SchemaRule_data.dispatch('core/notices').createErrorNotice(SchemaRule_sprintf(SchemaRule_('Could not fetch possible position values. Got error: %s', 'rich-snippets-schema'), error.message), {
          isDismissible: true
        });
      });
    }
  }, {
    key: "handleAsyncSelectInputChange",
    value: function handleAsyncSelectInputChange(v) {
      this.setState({
        'asyncSelectValue': v
      });
    }
  }, {
    key: "handleAsyncSelectChange",
    value: function handleAsyncSelectChange(o) {
      if (o.hasOwnProperty('value')) {
        this.setState({
          'value': o.value,
          'label': o.label
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var isSelect2 = 'page_parent' === this.state.param || 'post' === this.state.param;
      var valueBlock = this.state.isLoading ? wp.element.createElement(components_general_Loader, {
        isLoading: true
      }) : '';

      if (isSelect2) {
        valueBlock = wp.element.createElement(react_select_browser_esm, {
          cacheOptions: true,
          defaultOptions: this.state.defaultOptions,
          noOptionsMessage: function noOptionsMessage() {
            return SchemaRule_('No results. Type at least three letters to perform a search...', 'rich-snippets-schema');
          },
          loadOptions: this.fetchPossibleValueOptions,
          onInputChange: this.handleAsyncSelectInputChange,
          onChange: this.handleAsyncSelectChange,
          className: "rule__input__async-select",
          classNamePrefix: "rule__input__async-select",
          inputValue: this.state.asyncSelectValue,
          value: {
            'value': this.state.value,
            'label': this.state.label
          }
        });
      } else {
        if (Object.keys(this.state.possibleValues).length > 0) {
          valueBlock = wp.element.createElement("select", {
            className: "rule__input rule__input--select",
            onChange: this.changeValue,
            value: this.state.value
          }, Object.keys(this.state.possibleValues).map(function (k, i) {
            var value = _this4.state.possibleValues[k];

            if ('[object Object]' === Object.prototype.toString.call(value)) {
              if (value.hasOwnProperty('values') && Object.keys(value.values).length > 0) {
                return wp.element.createElement("optgroup", {
                  key: i,
                  label: value.label
                }, Object.keys(value.values).map(function (k2, i2) {
                  return wp.element.createElement("option", {
                    key: i + '-' + i2,
                    value: k2
                  }, value.values[k2]);
                }));
              }
            } else {
              return wp.element.createElement("option", {
                key: i,
                value: k
              }, value);
            }
          }));
        } else {
          valueBlock = wp.element.createElement("input", {
            className: "rule__input",
            onChange: this.changeValue,
            type: "text",
            value: this.state.value
          });
        }
      }

      return wp.element.createElement("tr", {
        className: "rule"
      }, wp.element.createElement("td", {
        className: "rule__param"
      }, wp.element.createElement("select", {
        className: "rule__input rule__input--select",
        value: this.state.param,
        onChange: this.changeParam
      }, wp.element.createElement("optgroup", {
        label: SchemaRule_('Built-in Parameters', 'rich-snippets-schema')
      }, wp.element.createElement("option", {
        value: "post_type"
      }, SchemaRule_('Post Type', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "post"
      }, SchemaRule_('Post, Page, Custom Post Type', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "post_template"
      }, SchemaRule_('Post Template', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "post_status"
      }, SchemaRule_('Post Status', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "post_format"
      }, SchemaRule_('Post format', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "post_category"
      }, SchemaRule_('Post Category', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "child_terms"
      }, SchemaRule_('Child Terms of', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "post_taxonomy"
      }, SchemaRule_('Post Taxonomy', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "page_template"
      }, SchemaRule_('Page Template', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "page_type"
      }, SchemaRule_('Page Type', 'rich-snippets-schema')), wp.element.createElement("option", {
        value: "page_parent"
      }, SchemaRule_('Page Parent', 'rich-snippets-schema'))))), wp.element.createElement("td", {
        className: "rule__operator"
      }, wp.element.createElement("select", {
        className: "rule__input rule__input--select",
        value: this.state.operator,
        onChange: this.changeOperator
      }, wp.element.createElement("option", {
        value: "=="
      }, "is equal to"), wp.element.createElement("option", {
        value: "!="
      }, "is not equal to"))), wp.element.createElement("td", {
        className: "rule__value"
      }, valueBlock), wp.element.createElement("td", {
        className: "rule__action"
      }, wp.element.createElement("button", {
        onClick: this.createRule,
        className: "button"
      }, SchemaRule_('and', 'rich-snippets-schema'))), wp.element.createElement("td", {
        className: "rule__action"
      }, this.props.displayDeleteButton ? wp.element.createElement("button", {
        onClick: this.removeRule,
        className: "button"
      }, wp.element.createElement("span", {
        className: "dashicons dashicons-trash schema-icon"
      })) : ''));
    }
  }]);

  return SchemaRule;
}((external_React_default()).Component);

/* harmony default export */ const src_components_SchemaRule = (SchemaRule_SchemaRule);
;// CONCATENATED MODULE: ./js/src/components/SchemaRulegroup.js
function SchemaRulegroup_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SchemaRulegroup_typeof = function _typeof(obj) { return typeof obj; }; } else { SchemaRulegroup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SchemaRulegroup_typeof(obj); }

function SchemaRulegroup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SchemaRulegroup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SchemaRulegroup_createClass(Constructor, protoProps, staticProps) { if (protoProps) SchemaRulegroup_defineProperties(Constructor.prototype, protoProps); if (staticProps) SchemaRulegroup_defineProperties(Constructor, staticProps); return Constructor; }

function SchemaRulegroup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SchemaRulegroup_setPrototypeOf(subClass, superClass); }

function SchemaRulegroup_setPrototypeOf(o, p) { SchemaRulegroup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SchemaRulegroup_setPrototypeOf(o, p); }

function SchemaRulegroup_createSuper(Derived) { var hasNativeReflectConstruct = SchemaRulegroup_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SchemaRulegroup_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SchemaRulegroup_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SchemaRulegroup_possibleConstructorReturn(this, result); }; }

function SchemaRulegroup_possibleConstructorReturn(self, call) { if (call && (SchemaRulegroup_typeof(call) === "object" || typeof call === "function")) { return call; } return SchemaRulegroup_assertThisInitialized(self); }

function SchemaRulegroup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SchemaRulegroup_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SchemaRulegroup_getPrototypeOf(o) { SchemaRulegroup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SchemaRulegroup_getPrototypeOf(o); }





var SchemaRulegroup_ = wp.i18n.__;

var SchemaRulegroup_SchemaRuleGroup = /*#__PURE__*/function (_React$Component) {
  SchemaRulegroup_inherits(SchemaRuleGroup, _React$Component);

  var _super = SchemaRulegroup_createSuper(SchemaRuleGroup);

  function SchemaRuleGroup(props) {
    var _this;

    SchemaRulegroup_classCallCheck(this, SchemaRuleGroup);

    _this = _super.call(this, props);
    _this.state = {
      'ruleGroup': props.ruleGroup
    };
    _this.createRule = _this.createRule.bind(SchemaRulegroup_assertThisInitialized(_this));
    _this.removeRuleGroup = _this.removeRuleGroup.bind(SchemaRulegroup_assertThisInitialized(_this));
    _this.removeRule = _this.removeRule.bind(SchemaRulegroup_assertThisInitialized(_this));
    _this.updateRule = _this.updateRule.bind(SchemaRulegroup_assertThisInitialized(_this));
    return _this;
  }

  SchemaRulegroup_createClass(SchemaRuleGroup, [{
    key: "createRule",
    value: function createRule() {
      var ruleGroup = this.state.ruleGroup;
      var rule = new Rule('post_type', '==', 'post');
      ruleGroup.addRule(rule);
      this.setState({
        'ruleGroup': ruleGroup
      });
      this.props.onRuleGroupUpdate(ruleGroup, this.props.id);
    }
  }, {
    key: "removeRuleGroup",
    value: function removeRuleGroup() {
      if (this.props.onRuleGroupRemove && typeof this.props.onRuleGroupRemove === 'function') {
        this.props.onRuleGroupRemove(this.props.id);
      }
    }
  }, {
    key: "removeRule",
    value: function removeRule(id) {
      var ruleGroup = this.state.ruleGroup;
      ruleGroup.removeRule(id);
      this.setState({
        'ruleGroup': ruleGroup
      });
      this.props.onRuleGroupUpdate(ruleGroup, this.props.id);
    }
  }, {
    key: "updateRule",
    value: function updateRule(id, rule) {
      var ruleGroup = this.state.ruleGroup;
      ruleGroup.updateRule(id, rule);
      this.setState({
        'ruleGroup': ruleGroup
      });
      this.props.onRuleGroupUpdate(ruleGroup, this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var rules = this.state.ruleGroup.getRules();
      return wp.element.createElement((external_React_default()).Fragment, null, rules.map(function (rule, i) {
        return wp.element.createElement(src_components_SchemaRule, {
          id: i,
          onRuleCreation: _this2.createRule,
          onRuleDelete: _this2.removeRule,
          displayDeleteButton: rules.length > 1,
          onUpdateRule: _this2.updateRule,
          rule: rule,
          key: i
        });
      }), wp.element.createElement("tr", {
        className: "wpb-rs-rule-group-break"
      }, wp.element.createElement("td", {
        colSpan: "4"
      }, SchemaRulegroup_('or', 'rich-snippets-schema')), wp.element.createElement("td", {
        className: "wpb-rs-rule-action wpb-rs-rulegroup-remove"
      }, wp.element.createElement("button", {
        onClick: this.removeRuleGroup,
        className: "button"
      }, wp.element.createElement("span", {
        className: "dashicons dashicons-trash schema-icon"
      })))));
    }
  }]);

  return SchemaRuleGroup;
}((external_React_default()).Component);

/* harmony default export */ const SchemaRulegroup = (SchemaRulegroup_SchemaRuleGroup);
;// CONCATENATED MODULE: ./js/src/components/SchemaRuleset.js
function SchemaRuleset_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SchemaRuleset_typeof = function _typeof(obj) { return typeof obj; }; } else { SchemaRuleset_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SchemaRuleset_typeof(obj); }

function SchemaRuleset_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SchemaRuleset_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SchemaRuleset_createClass(Constructor, protoProps, staticProps) { if (protoProps) SchemaRuleset_defineProperties(Constructor.prototype, protoProps); if (staticProps) SchemaRuleset_defineProperties(Constructor, staticProps); return Constructor; }

function SchemaRuleset_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SchemaRuleset_setPrototypeOf(subClass, superClass); }

function SchemaRuleset_setPrototypeOf(o, p) { SchemaRuleset_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SchemaRuleset_setPrototypeOf(o, p); }

function SchemaRuleset_createSuper(Derived) { var hasNativeReflectConstruct = SchemaRuleset_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SchemaRuleset_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SchemaRuleset_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SchemaRuleset_possibleConstructorReturn(this, result); }; }

function SchemaRuleset_possibleConstructorReturn(self, call) { if (call && (SchemaRuleset_typeof(call) === "object" || typeof call === "function")) { return call; } return SchemaRuleset_assertThisInitialized(self); }

function SchemaRuleset_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SchemaRuleset_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SchemaRuleset_getPrototypeOf(o) { SchemaRuleset_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SchemaRuleset_getPrototypeOf(o); }





var SchemaRuleset_ = wp.i18n.__;

var SchemaRuleset_SchemaRuleset = /*#__PURE__*/function (_React$Component) {
  SchemaRuleset_inherits(SchemaRuleset, _React$Component);

  var _super = SchemaRuleset_createSuper(SchemaRuleset);

  function SchemaRuleset(props) {
    var _this;

    SchemaRuleset_classCallCheck(this, SchemaRuleset);

    _this = _super.call(this, props);
    _this.state = {
      'ruleset': _this.props.ruleset
    };
    _this.createRuleGroup = _this.createRuleGroup.bind(SchemaRuleset_assertThisInitialized(_this));
    _this.removeRuleGroup = _this.removeRuleGroup.bind(SchemaRuleset_assertThisInitialized(_this));
    _this.onRuleGroupUpdate = _this.onRuleGroupUpdate.bind(SchemaRuleset_assertThisInitialized(_this));
    return _this;
  }

  SchemaRuleset_createClass(SchemaRuleset, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.ruleset.hasRuleGroups()) {
        return;
      }

      this.createRuleGroup();
    }
  }, {
    key: "createRuleGroup",
    value: function createRuleGroup() {
      var ruleGroup = new RuleGroup();
      ruleGroup.addRule(new Rule('post_type', '==', 'post'));
      var ruleset = this.state.ruleset;
      ruleset.addRuleGroup(ruleGroup);
      this.setState({
        'ruleset': ruleset
      });
      this.props.onRulesetUpdate(ruleset);
    }
  }, {
    key: "removeRuleGroup",
    value: function removeRuleGroup(i) {
      var ruleset = this.state.ruleset;
      ruleset.removeRuleGroup(i);
      this.setState({
        'ruleset': ruleset
      });
      this.props.onRulesetUpdate(ruleset);
    }
  }, {
    key: "onRuleGroupUpdate",
    value: function onRuleGroupUpdate(ruleGroup, id) {
      var ruleset = this.state.ruleset;
      ruleset.updateRuleGroup(id, ruleGroup);
      this.setState({
        'ruleset': ruleset
      });
      this.props.onRulesetUpdate(ruleset);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return wp.element.createElement("table", {
        className: "schema-ruleset"
      }, wp.element.createElement("tbody", null, Object.keys(this.state.ruleset.getRuleGroups()).map(function (key, i) {
        var ruleGroup = _this2.state.ruleset.getRuleGroups()[key];

        return wp.element.createElement(SchemaRulegroup, {
          key: i,
          id: key,
          onRuleGroupUpdate: _this2.onRuleGroupUpdate,
          onRuleGroupRemove: _this2.removeRuleGroup,
          ruleGroup: ruleGroup
        });
      })), wp.element.createElement("tfoot", null, wp.element.createElement("tr", null, wp.element.createElement("td", {
        colSpan: "5"
      }, wp.element.createElement("button", {
        className: "button",
        onClick: this.createRuleGroup
      }, SchemaRuleset_('Add rulegroup', 'rich-snippets-schema'))))));
    }
  }]);

  return SchemaRuleset;
}((external_React_default()).Component);

/* harmony default export */ const src_components_SchemaRuleset = (SchemaRuleset_SchemaRuleset);
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/IndividualRules.js
function IndividualRules_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { IndividualRules_typeof = function _typeof(obj) { return typeof obj; }; } else { IndividualRules_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return IndividualRules_typeof(obj); }

function IndividualRules_toConsumableArray(arr) { return IndividualRules_arrayWithoutHoles(arr) || IndividualRules_iterableToArray(arr) || IndividualRules_unsupportedIterableToArray(arr) || IndividualRules_nonIterableSpread(); }

function IndividualRules_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function IndividualRules_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return IndividualRules_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return IndividualRules_arrayLikeToArray(o, minLen); }

function IndividualRules_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function IndividualRules_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return IndividualRules_arrayLikeToArray(arr); }

function IndividualRules_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function IndividualRules_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function IndividualRules_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function IndividualRules_createClass(Constructor, protoProps, staticProps) { if (protoProps) IndividualRules_defineProperties(Constructor.prototype, protoProps); if (staticProps) IndividualRules_defineProperties(Constructor, staticProps); return Constructor; }

function IndividualRules_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) IndividualRules_setPrototypeOf(subClass, superClass); }

function IndividualRules_setPrototypeOf(o, p) { IndividualRules_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return IndividualRules_setPrototypeOf(o, p); }

function IndividualRules_createSuper(Derived) { var hasNativeReflectConstruct = IndividualRules_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = IndividualRules_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = IndividualRules_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return IndividualRules_possibleConstructorReturn(this, result); }; }

function IndividualRules_possibleConstructorReturn(self, call) { if (call && (IndividualRules_typeof(call) === "object" || typeof call === "function")) { return call; } return IndividualRules_assertThisInitialized(self); }

function IndividualRules_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function IndividualRules_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function IndividualRules_getPrototypeOf(o) { IndividualRules_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return IndividualRules_getPrototypeOf(o); }







var IndividualRules_wp = wp,
    IndividualRules_data = IndividualRules_wp.data;
var IndividualRules_wp$i18n = wp.i18n,
    IndividualRules_ = IndividualRules_wp$i18n.__,
    IndividualRules_sprintf = IndividualRules_wp$i18n.sprintf;
var IndividualRules_wp2 = wp,
    IndividualRules_apiFetch = IndividualRules_wp2.apiFetch;

var IndividualRules = /*#__PURE__*/function (_React$Component) {
  IndividualRules_inherits(IndividualRules, _React$Component);

  var _super = IndividualRules_createSuper(IndividualRules);

  function IndividualRules(props) {
    var _this;

    IndividualRules_classCallCheck(this, IndividualRules);

    _this = _super.call(this, props);
    _this.state = {
      'loaders': 0,
      'snips': [],
      'rulesets': _this.props.rulesets,
      properties: {}
    };
    _this.fetchSchemas = _this.fetchSchemas.bind(IndividualRules_assertThisInitialized(_this));
    _this.wasSchemaFetched = _this.wasSchemaFetched.bind(IndividualRules_assertThisInitialized(_this));
    _this.onRulesetUpdate = _this.onRulesetUpdate.bind(IndividualRules_assertThisInitialized(_this));
    return _this;
  }

  IndividualRules_createClass(IndividualRules, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSchemas(this.props.snips);
    }
  }, {
    key: "wasSchemaFetched",
    value: function wasSchemaFetched(id) {
      var snips = this.state.snips;

      for (var i = 0; i < snips.length; i++) {
        if (snips[i].id === id) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "fetchSchemas",
    value: function fetchSchemas(ids) {
      var _this2 = this;

      ids = ids.filter(function (id) {
        return !_this2.wasSchemaFetched(id);
      });

      if (ids.length <= 0) {
        return;
      }

      var url_parameter = '';
      ids.forEach(function (id) {
        url_parameter += '&ids[]=' + id;
      });
      this.setState({
        'loaders': this.state.loaders + 1
      });
      IndividualRules_apiFetch({
        'path': '/wpbuddy/rich_snippets/v1/schema/examples?' + url_parameter,
        'method': 'GET'
      }).then(function (results) {
        var snips = _this2.state.snips;
        results.forEach(function (result) {
          if (result.snip_code.hasOwnProperty('_manual_rules_expected') && result.snip_code._manual_rules_expected) {
            snips = [].concat(IndividualRules_toConsumableArray(snips), IndividualRules_toConsumableArray(results));
          }
        });

        if (snips.length <= 0) {
          _this2.props.onSkip();
        }

        Object.keys(snips).map(function (k) {
          var snip = snips[k];
          snips[snip.id] = snip;
          delete snips[k];
        });

        _this2.setState({
          'loaders': _this2.state.loaders - 1,
          'snips': snips
        });

        var rulesets = {};
        snips.forEach(function (snip) {
          rulesets[snip.id] = new Ruleset();
          snip.snip_code['@ruleset'].map(function (unprocessedRulegroup) {
            var rulegroup = new RuleGroup();
            unprocessedRulegroup.map(function (unprocessedRule) {
              var rule = new Rule(unprocessedRule.param, unprocessedRule.operator, unprocessedRule.value);
              rulegroup.addRule(rule);
            });
            rulesets[snip.id].addRuleGroup(rulegroup);
          });
        });

        _this2.setState({
          'rulesets': rulesets
        });
      })["catch"](function (error) {
        console.error(error);
        IndividualRules_data.dispatch('core/notices').createErrorNotice(IndividualRules_sprintf(IndividualRules_('Could not fetch schemas. Got error: %s', 'rich-snippets-schema'), error.message), {
          isDismissible: true
        });

        _this2.setState({
          'loaders': _this2.state.loaders - 1
        });
      });
    }
  }, {
    key: "onRulesetUpdate",
    value: function onRulesetUpdate(ruleset, snipId) {
      var rulesets = this.state.rulesets;
      rulesets[snipId] = ruleset;
      this.setState({
        'rulesets': rulesets
      });
      this.props.onRulesetUpdate(rulesets);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.loaders > 0) {
        return wp.element.createElement("div", null, wp.element.createElement(components_general_Loader, {
          isLoading: true
        }), IndividualRules_('Check schemas for which the position must be set manually ...', 'rich-snippets-schema'));
      }

      if (Object.keys(this.state.snips).length <= 0) {
        return wp.element.createElement("div", null, wp.element.createElement(components_general_Loader, {
          isLoading: true
        }), IndividualRules_('Building rule list ...', 'rich-snippets-schema'));
      }

      return Object.keys(this.state.rulesets).map(function (snipId, i) {
        var snip = _this3.state.snips[snipId];
        var ruleset = _this3.state.rulesets[snipId];
        return wp.element.createElement(components_general_Accordion, {
          headline: IndividualRules_sprintf(IndividualRules_('The %s schema should be visible to search engines on the following pages:', 'rich-snippets-schema'), snip.title),
          buttonLabel: IndividualRules_('Edit rules', 'rich-snippets-schema'),
          key: 'schema-ruleset-' + i
        }, wp.element.createElement(src_components_SchemaRuleset, {
          ruleset: ruleset,
          onRulesetUpdate: function onRulesetUpdate(newRuleset) {
            _this3.onRulesetUpdate(newRuleset, snipId);
          }
        }));
      });
    }
  }]);

  return IndividualRules;
}((external_React_default()).Component);

/* harmony default export */ const setup_wizard_IndividualRules = (IndividualRules);
;// CONCATENATED MODULE: ./js/src/components/setup-wizard/SetupWizard.js
function SetupWizard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SetupWizard_typeof = function _typeof(obj) { return typeof obj; }; } else { SetupWizard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SetupWizard_typeof(obj); }

function SetupWizard_toConsumableArray(arr) { return SetupWizard_arrayWithoutHoles(arr) || SetupWizard_iterableToArray(arr) || SetupWizard_unsupportedIterableToArray(arr) || SetupWizard_nonIterableSpread(); }

function SetupWizard_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SetupWizard_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SetupWizard_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SetupWizard_arrayLikeToArray(o, minLen); }

function SetupWizard_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function SetupWizard_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return SetupWizard_arrayLikeToArray(arr); }

function SetupWizard_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SetupWizard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SetupWizard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SetupWizard_createClass(Constructor, protoProps, staticProps) { if (protoProps) SetupWizard_defineProperties(Constructor.prototype, protoProps); if (staticProps) SetupWizard_defineProperties(Constructor, staticProps); return Constructor; }

function SetupWizard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SetupWizard_setPrototypeOf(subClass, superClass); }

function SetupWizard_setPrototypeOf(o, p) { SetupWizard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SetupWizard_setPrototypeOf(o, p); }

function SetupWizard_createSuper(Derived) { var hasNativeReflectConstruct = SetupWizard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SetupWizard_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SetupWizard_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SetupWizard_possibleConstructorReturn(this, result); }; }

function SetupWizard_possibleConstructorReturn(self, call) { if (call && (SetupWizard_typeof(call) === "object" || typeof call === "function")) { return call; } return SetupWizard_assertThisInitialized(self); }

function SetupWizard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SetupWizard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function SetupWizard_getPrototypeOf(o) { SetupWizard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SetupWizard_getPrototypeOf(o); }

 // import { hot } from 'react-hot-loader';








var SetupWizard_wp$i18n = wp.i18n,
    SetupWizard_ = SetupWizard_wp$i18n.__,
    SetupWizard_sprintf = SetupWizard_wp$i18n.sprintf;
var SetupWizard_wp = wp,
    SetupWizard_data = SetupWizard_wp.data;
var NoticeList = wp.components.NoticeList;

var SetupWizard_SetupWizard = /*#__PURE__*/function (_React$Component) {
  SetupWizard_inherits(SetupWizard, _React$Component);

  var _super = SetupWizard_createSuper(SetupWizard);

  function SetupWizard(props) {
    var _this;

    SetupWizard_classCallCheck(this, SetupWizard);

    _this = _super.call(this, props);
    _this.state = {
      'step': 1,
      'readyForNextStep': true,
      'readyForPrevStep': false,
      'selectedSnippets': {},
      'possibleSnippetsCount': 0,
      'rulesets': {},
      'schemas': {},
      'loaders': 0,
      'saveMessages': [],
      'notices': [],
      'snips': [],
      'userName': SetupWizardConfig.userName,
      'levelOfExpertise': '',
      'newsSignup': false,
      'schemaProperties': {}
    };
    SetupWizard_data.subscribe(function () {
      var notices = SetupWizard_data.select('core/notices').getNotices();

      if (notices.length !== _this.state.notices.length) {
        _this.setState({
          'notices': notices
        });
      }
    });
    _this.handleNextStep = _this.handleNextStep.bind(SetupWizard_assertThisInitialized(_this));
    _this.handlePrevStep = _this.handlePrevStep.bind(SetupWizard_assertThisInitialized(_this));
    _this.selectSnip = _this.selectSnip.bind(SetupWizard_assertThisInitialized(_this));
    _this.deselectSnip = _this.deselectSnip.bind(SetupWizard_assertThisInitialized(_this));
    _this.selectSnippet = _this.selectSnippet.bind(SetupWizard_assertThisInitialized(_this));
    _this.unselectSnippet = _this.unselectSnippet.bind(SetupWizard_assertThisInitialized(_this));
    _this.updatePossibleSnippets = _this.updatePossibleSnippets.bind(SetupWizard_assertThisInitialized(_this));
    _this.onChangeProperty = _this.onChangeProperty.bind(SetupWizard_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Jumps to the next step if there is nothing to do on this screen.
   *
   * @param no
   */


  SetupWizard_createClass(SetupWizard, [{
    key: "updatePossibleSnippets",
    value: function updatePossibleSnippets(no) {
      var _this2 = this;

      var possibleSnippetsCount = this.state.possibleSnippetsCount + no;
      this.setState({
        'possibleSnippetsCount': possibleSnippetsCount
      });

      if (possibleSnippetsCount >= Object.keys(this.state.selectedSnippets).length && possibleSnippetsCount === this.state.snips.length) {
        this.setState({
          'readyForNextStep': true
        }, function () {
          return _this2.handleNextStep();
        });
      }
    }
  }, {
    key: "selectSnippet",
    value: function selectSnippet(value) {
      var selectedSnippets = this.state.selectedSnippets;
      selectedSnippets[value] = true;
      this.setState({
        'selectedSnippets': selectedSnippets,
        'readyForNextStep': Object.keys(selectedSnippets).length > 0
      });
    }
  }, {
    key: "unselectSnippet",
    value: function unselectSnippet(value) {
      var selectedSnippets = this.state.selectedSnippets;
      delete selectedSnippets[value];
      this.setState({
        'selectedSnippets': selectedSnippets,
        'readyForNextStep': Object.keys(selectedSnippets).length > 0,
        'readyForPrevStep': false
      });
    }
  }, {
    key: "handleNextStep",
    value: function handleNextStep() {
      if (!this.state.readyForNextStep) {
        return;
      }

      var step = this.state.step + 1;
      var readyForNextStep = true;

      switch (step) {
        case 3:
          readyForNextStep = this.state.levelOfExpertise !== '';
          break;

        case 5:
          readyForNextStep = Object.keys(this.state.selectedSnippets).length > 0;
          break;

        case 6:
          readyForNextStep = this.state.snips.length > 0;
          break;

        case 4:
        case 9:
        case 11:
          readyForNextStep = false;
          break;
      }

      this.setState({
        'step': step,
        'readyForNextStep': readyForNextStep,
        'readyForPrevStep': step !== 11
      });

      if (step === 11) {
        this.saveSnips();
      }
    }
  }, {
    key: "handlePrevStep",
    value: function handlePrevStep() {
      if (!this.state.readyForPrevStep) {
        return;
      }

      var step = this.state.step - 1;
      this.setState({
        'step': step,
        'readyForNextStep': true,
        'readyForPrevStep': step > 1
      });
    }
  }, {
    key: "saveSnips",
    value: function saveSnips() {
      var _this3 = this;

      this.setState({
        'loaders': this.state.loaders + 1
      });
      wp.apiFetch({
        'path': 'wpbuddy/rich_snippets/v1/snips/import',
        'method': 'POST',
        'cache': 'no-cache',
        'data': {
          'snips': this.state.snips,
          'properties': this.state.schemaProperties,
          'rulesets': this.state.rulesets
        }
      }).then(function (messages) {
        messages = Object.values(messages);
        messages.push(SetupWizard_('Success! You\'re done. You can now close this wizard.', 'rich-snippets-schema'));
        confetti();

        _this3.setState({
          'loaders': _this3.state.loaders - 1,
          'saveMessages': messages
        });
      })["catch"](function (error) {
        console.error(error);
        SetupWizard_data.dispatch('core/notices').createErrorNotice(SetupWizard_sprintf(SetupWizard_('Could not save SNIPs. Got error: %s', 'rich-snippets-schema'), error.message), {
          isDismissible: true
        });

        _this3.setState({
          'loaders': _this3.state.loaders - 1,
          'readyForPrevStep': true,
          'saveMessages': [SetupWizard_('Oops. It seems that something went wrong.', 'rich-snippets-schema')]
        });
      });
    }
  }, {
    key: "selectSnip",
    value: function selectSnip(snipId) {
      var snips = this.state.snips;
      snips.push(snipId);
      snips = SetupWizard_toConsumableArray(new Set(snips));
      this.setState({
        'snips': snips,
        'readyForNextStep': snips.length > 0
      });
    }
  }, {
    key: "deselectSnip",
    value: function deselectSnip(snipId) {
      var snips = this.state.snips;
      var index = snips.indexOf(snipId);

      if (-1 !== index) {
        snips.splice(index, 1);
      }

      this.setState({
        'snips': snips,
        'readyForNextStep': snips.length > 0
      });
    }
  }, {
    key: "onChangeProperty",
    value: function onChangeProperty(propName, value, propId, snipId) {
      var schemaProperties = this.state.schemaProperties;
      schemaProperties[snipId] = schemaProperties[snipId] || {};
      schemaProperties[snipId][propId] = value;
      this.setState({
        'schemaProperties': schemaProperties
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var block;

      switch (this.state.step) {
        case 11:
          block = wp.element.createElement("div", null, wp.element.createElement("h2", null, SetupWizard_('Finishing up', 'rich-snippets-schema')), this.state.loaders > 0 ? wp.element.createElement("p", null, SetupWizard_('Alright! Your schemas are now being processed. Please wait.', 'rich-snippets-schema')) : null, wp.element.createElement(components_general_Loader, {
            isLoading: this.state.loaders > 0
          }), this.state.saveMessages.map(function (k, i) {
            return wp.element.createElement("p", {
              key: 'savemessage' + i
            }, k);
          }), wp.element.createElement("p", {
            className: "SetupWizard--image"
          }, wp.element.createElement("img", {
            src: SetupWizardConfig.imagePath + 'img/people.svg'
          })));
          break;

        case 10:
          block = wp.element.createElement("div", {
            className: "SetupWizard--content"
          }, wp.element.createElement("h2", null, SetupWizard_('Can you help me spread the word?', 'rich-snippets-schema')), wp.element.createElement("p", null, SetupWizard_sprintf(SetupWizard_('Please take a moment and give me a 5-star rating on %s. Great ratings ensure future plugin sales and allow me to keep the plugin Up-To-Date.'), SetupWizardConfig.isPro ? 'CodeCanyon' : 'WordPress.org')), wp.element.createElement("a", {
            className: "button button-primary button-hero",
            target: "_blank",
            href: SetupWizardConfig.isPro ? 'https://codecanyon.net/downloads#item-3464341' : 'https://wordpress.org/support/plugin/snip-structured-data/reviews/#new-post'
          }, SetupWizard_('I\'m happy to help!')));
          break;

        case 9:
          block = wp.element.createElement("div", {
            className: "SetupWizard--content"
          }, wp.element.createElement("h2", null, SetupWizard_('To which email address should I send structured data updates?', 'rich-snippets-schema')), wp.element.createElement("p", {
            className: "SetupWizard--grayscale SetupWizard--under-headline"
          }, SetupWizard_('I respect your privacy. Unsubscribe at any time.', 'rich-snippets-schema'), " ", wp.element.createElement("a", {
            href: "#",
            onClick: function onClick(e) {
              e.preventDefault();

              _this4.setState({
                'readyForNextStep': true
              }, function () {
                return _this4.handleNextStep();
              });
            }
          }, SetupWizard_('I\'m not interested. Thank you.'))), wp.element.createElement("form", {
            action: "https://app.convertkit.com/forms/1969603/subscriptions",
            target: "_blank",
            id: "newsletter_subscription",
            method: "post"
          }, wp.element.createElement("input", {
            name: "fields[first_name]",
            type: "hidden",
            defaultValue: this.state.userName
          }), wp.element.createElement("input", {
            type: "hidden",
            name: "tags[]",
            value: "2195573",
            "data-tag": "general-newsletter"
          }), 'de' === SetupWizardConfig.userLanguage ? wp.element.createElement("input", {
            type: "hidden",
            name: "tags[]",
            value: "2195575",
            "data-tag": "german-speaking"
          }) : null, 'en' === SetupWizardConfig.userLanguage ? wp.element.createElement("input", {
            type: "hidden",
            name: "tags[]",
            value: "2195594",
            "data-tag": "native-english"
          }) : null, SetupWizardConfig.isPro ? wp.element.createElement("input", {
            type: "hidden",
            name: "tags[]",
            value: "2195685",
            "data-tag": "purchased-snip-pro-codecanyon"
          }) : null, wp.element.createElement("input", {
            className: "SetupWizard--input-text",
            name: "email_address",
            placeholder: "Email Address",
            required: true,
            type: "email",
            defaultValue: SetupWizardConfig.userEMail
          }), wp.element.createElement("input", {
            className: "button button-primary button-hero",
            type: "submit",
            value: SetupWizard_('Count me in!', 'rich-snippets-schema'),
            onClick: function onClick() {
              document.querySelector('#newsletter_subscription').submit();

              _this4.setState({
                'readyForNextStep': true
              });
            }
          })));
          break;

        case 8:
          block = wp.element.createElement("div", {
            className: "SetupWizard--content"
          }, wp.element.createElement("h2", null, SetupWizard_('Where should the schemas be included?', 'rich-snippets-schema')), wp.element.createElement("p", null, SetupWizard_('Of course, not all schemas should be included on all pages. You should therefore choose on which pages they should be visible to search engines.', 'rich-snippets-schema')), wp.element.createElement(setup_wizard_IndividualRules, {
            snips: this.state.snips,
            rulesets: this.state.rulesets,
            onSkip: function onSkip() {
              return _this4.handleNextStep();
            },
            onRulesetUpdate: function onRulesetUpdate(rulesets) {
              return _this4.setState({
                'rulesets': rulesets
              });
            }
          }));
          break;

        case 7:
          block = wp.element.createElement("div", {
            className: "SetupWizard--content"
          }, wp.element.createElement("h2", null, SetupWizard_('Some of the properties need your attention!', 'rich-snippets-schema')), wp.element.createElement("p", null, SetupWizard_('Some schemas have properties that need to be filled in individually, as they do not always comply with my suggestions. For example the name of an organization is different within every company and website. You should change the values here if they do not fit your needs.', 'rich-snippets-schema')), wp.element.createElement(components_setup_wizard_IndividualProperties, {
            snips: this.state.snips,
            properties: this.state.schemaProperties,
            onSkip: this.handleNextStep,
            onChangeProperty: this.onChangeProperty
          }));
          break;

        case 6:
          block = wp.element.createElement("div", {
            className: "SetupWizard--content"
          }, wp.element.createElement("h2", null, SetupWizard_('Choose from ready-to-use Schemas', 'rich-snippets-schema')), wp.element.createElement("p", null, SetupWizard_('For some schemas I provide several different templates. Please choose the schema that fits the most.', 'rich-snippets-schema')), Object.keys(this.state.selectedSnippets).map(function (k, i) {
            return wp.element.createElement(components_setup_wizard_SchemaChooser, {
              key: k,
              headline: SCHEMAS[k].t9n,
              schema: SCHEMAS[k].schema,
              snips: _this4.state.snips,
              onSelect: _this4.selectSnip,
              onDeselect: _this4.deselectSnip,
              updatePossibleSnippets: _this4.updatePossibleSnippets,
              onSkip: _this4.handleNextStep
            });
          }));
          break;

        case 5:
          block = wp.element.createElement(components_setup_wizard_SchemaSelection, {
            selectedSnippets: this.state.selectedSnippets,
            unselectSnippet: this.unselectSnippet,
            selectSnippet: this.selectSnippet
          });
          break;

        case 4:
          block = wp.element.createElement("div", {
            className: "SetupWizard--content"
          }, wp.element.createElement("h2", null, SetupWizard_('Did you backup your Global Snippets?', 'rich-snippets-schema')), wp.element.createElement("p", null, SetupWizard_('The Setup Wizard may overwrite existing Global Snippets / Schema Templates that have previously been created with this Wizard. So please make sure you have a backup of your existing snippets. Just in case!', 'rich-snippets-schema')), wp.element.createElement("div", {
            className: "SetupWizard--checkbox-list"
          }, wp.element.createElement("label", null, wp.element.createElement("input", {
            type: "checkbox",
            onClick: function onClick() {
              return _this4.setState({
                'readyForNextStep': true
              });
            }
          }), SetupWizard_('Got it! I have a backup.', 'rich-snippets-schema'))));
          break;

        case 3:
          block = wp.element.createElement("div", {
            className: "SetupWizard--content"
          }, wp.element.createElement("h2", null, SetupWizard_('Please let me know your level of expertise:', 'rich-snippets-schema')), wp.element.createElement("div", {
            className: "SetupWizard--checkbox-list"
          }, wp.element.createElement("label", null, wp.element.createElement("input", {
            type: "radio",
            name: "level_of_expertise",
            value: "amateur",
            checked: this.state.levelOfExpertise === 'amateur',
            onChange: function onChange(event) {
              return _this4.setState({
                'levelOfExpertise': event.target.value,
                'readyForNextStep': true
              });
            }
          }), SetupWizard_('I understand roughly what it\'s all about, but more guidance would be helpful.', 'rich-snippets-schema')), wp.element.createElement("label", null, wp.element.createElement("input", {
            type: "radio",
            name: "level_of_expertise",
            value: "amateur",
            checked: this.state.levelOfExpertise === 'amateur',
            onChange: function onChange(event) {
              return _this4.setState({
                'levelOfExpertise': event.target.value,
                'readyForNextStep': true
              });
            }
          }), SetupWizard_('I have a basic understanding of Structured Data but I have no clue how to create it.', 'rich-snippets-schema')), wp.element.createElement("label", null, wp.element.createElement("input", {
            type: "radio",
            name: "level_of_expertise",
            value: "pro",
            checked: this.state.levelOfExpertise === 'pro',
            onChange: function onChange(event) {
              return _this4.setState({
                'levelOfExpertise': event.target.value,
                'readyForNextStep': true
              });
            }
          }), SetupWizard_('I am a PRO and know what I am doing.', 'rich-snippets-schema'))));
          break;

        case 2:
          block = wp.element.createElement("div", {
            className: "SetupWizard--intro"
          }, wp.element.createElement("div", {
            className: "SetupWizard--table"
          }, wp.element.createElement("div", {
            className: "SetupWizard--table--row"
          }, wp.element.createElement("img", {
            src: SetupWizardConfig.avatar.url,
            width: "500",
            height: "500",
            className: "SetupWizard--intro--author-image"
          })), wp.element.createElement("div", {
            className: "SetupWizard--table--row"
          }, wp.element.createElement("h2", null, SetupWizard_sprintf(SetupWizard_('Hey %s! Nice that you\'re here!', 'rich-snippets-schema'), this.state.userName)), wp.element.createElement("p", null, SetupWizard_('My name is Florian but you can call me Flo.', 'rich-snippets-schema')), wp.element.createElement("p", null, SetupWizard_('I am the one behind SNIP. I maintain it for more than 8 years. And as you might expect: I’m really passionate about what I do (who else can truly say that?).', 'rich-snippets-schema')), wp.element.createElement("p", null, SetupWizard_('This plugin will skyrocket structured data on your site! And this Setup Wizard will help you set up SNIP as quickly as possible.', 'rich-snippets-schema')), wp.element.createElement("p", null, SetupWizard_('Let\'s go!', 'rich-snippets-schema')))));
          break;

        default:
          block = wp.element.createElement("div", {
            className: "SetupWizard--content"
          }, wp.element.createElement("h2", null, SetupWizard_('What\'s your name?', 'rich-snippets-schema')), wp.element.createElement("input", {
            className: "SetupWizard--input-text",
            type: "text",
            onChange: function onChange(event) {
              return _this4.setState({
                'userName': event.target.value.trim(),
                'readyForNextStep': event.target.value.trim().length >= 1
              });
            },
            value: this.state.userName
          }));
      }

      return wp.element.createElement("div", {
        className: "SetupWizard"
      }, wp.element.createElement(NoticeList, {
        notices: this.state.notices,
        onRemove: function onRemove(id) {
          SetupWizard_data.dispatch('core/notices').removeNotice(id);
        }
      }), block, wp.element.createElement("footer", {
        className: "SetupWizard--footer"
      }, wp.element.createElement("p", {
        className: "navigation"
      }, wp.element.createElement("button", {
        className: "button",
        onClick: this.handlePrevStep,
        disabled: this.state.readyForPrevStep ? null : 'disabled'
      }, wp.element.createElement("span", {
        className: "dashicons dashicons-arrow-left-alt"
      }), SetupWizard_('Prev', 'rich-snippets-schema')), wp.element.createElement("a", {
        className: "button",
        href: SetupWizardConfig.globalSnippetsUrl
      }, SetupWizard_('Close/Cancel Wizard', 'rich-snippets-schema')), wp.element.createElement("button", {
        className: "button",
        onClick: this.handleNextStep,
        disabled: this.state.readyForNextStep ? null : 'disabled'
      }, wp.element.createElement("span", {
        className: "dashicons dashicons-arrow-right-alt"
      }), SetupWizard_('Next', 'rich-snippets-schema'))), wp.element.createElement("progress", {
        max: "11",
        value: this.state.step
      }), wp.element.createElement("hr", null), wp.element.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: SetupWizard_sprintf(SetupWizard_('Graphics by Pablo Stanley and his project: <a href="https://www.humaaans.com/">Humaaans</a>. Licenced under <a href="https://creativecommons.org/licenses/by/4.0/">CC Attribution 4.0</a> International License.', 'rich-snippets-manager'))
        },
        className: "SetupWizard--copyright SetupWizard--grayscale SetupWizard--center"
      })));
    }
  }]);

  return SetupWizard;
}((external_React_default()).Component);

/* harmony default export */ const components_setup_wizard_SetupWizard = (SetupWizard_SetupWizard);
;// CONCATENATED MODULE: ./js/src/admin-setupwizard.js



document.addEventListener('DOMContentLoaded', function () {
  var entry = document.querySelector('#setupwizard');
  (0,external_ReactDOM_namespaceObject.render)(wp.element.createElement(components_setup_wizard_SetupWizard, null), entry);
});
})();

/******/ })()
;
//# sourceMappingURL=admin-setupwizard.js.map