/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/helpers.js":
/*!***************************!*\
  !*** ./module/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrCard: () => (/* binding */ arrCard)
/* harmony export */ });
let arrCard = [
    { img: './img/deck-cards/cross/6.png' },
    { img: './img/deck-cards/cross/7.png' },
    { img: './img/deck-cards/cross/8.png' },
    { img: './img/deck-cards/cross/9.png' },
    { img: './img/deck-cards/cross/10.png' },
    { img: './img/deck-cards/cross/J.png' },
    { img: './img/deck-cards/cross/Q.png' },
    { img: './img/deck-cards/cross/K.png' },
    { img: './img/deck-cards/cross/A.png' },
    { img: './img/deck-cards/peaks/6.png' },
    { img: './img/deck-cards/peaks/7.png' },
    { img: './img/deck-cards/peaks/8.png' },
    { img: './img/deck-cards/peaks/9.png' },
    { img: './img/deck-cards/peaks/10.png' },
    { img: './img/deck-cards/peaks/J.png' },
    { img: './img/deck-cards/peaks/Q.png' },
    { img: './img/deck-cards/peaks/K.png' },
    { img: './img/deck-cards/peaks/A.png' },
    { img: './img/deck-cards/worms/6.png' },
    { img: './img/deck-cards/worms/7.png' },
    { img: './img/deck-cards/worms/8.png' },
    { img: './img/deck-cards/worms/9.png' },
    { img: './img/deck-cards/worms/10.png' },
    { img: './img/deck-cards/worms/J.png' },
    { img: './img/deck-cards/worms/Q.png' },
    { img: './img/deck-cards/worms/K.png' },
    { img: './img/deck-cards/worms/A.png' },
    { img: './img/deck-cards/booby/6.png' },
    { img: './img/deck-cards/booby/7.png' },
    { img: './img/deck-cards/booby/8.png' },
    { img: './img/deck-cards/booby/9.png' },
    { img: './img/deck-cards/booby/10.png' },
    { img: './img/deck-cards/booby/J.png' },
    { img: './img/deck-cards/booby/Q.png' },
    { img: './img/deck-cards/booby/K.png' },
    { img: './img/deck-cards/booby/A.png' },
]

let arrCardShirt = [
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
    { img: './img/deck-cards/shirt/card-shirt.png' },
]
console.log(arrCardShirt)


/***/ }),

/***/ "./module/level-game.js":
/*!******************************!*\
  !*** ./module/level-game.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRenderCard: () => (/* binding */ getRenderCard),
/* harmony export */   getRenderLevel: () => (/* binding */ getRenderLevel)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./module/helpers.js");


const conteinerElement = document.querySelector('.app-game')

function getRenderCard() {
    const htmlCards = _helpers_js__WEBPACK_IMPORTED_MODULE_0__.arrCard
        .map((card) => {
            return `<img src="${card.img}" alt="card"></img>`
        })
        .join('')
    const conteinerCards = document.querySelector('.app-card')
    conteinerCards.insertAdjacentHTML('afterbegin', htmlCards)
}

function getRenderLevel() {
    const levelHtml = ` <div class="navi center-card">
        <div class="time">
            <div class="report">
                <p class="minuts">min</p>
                <p class="seconds">sek</p>
            </div>
            <p class="counter">00.00</p>
        </div>
        <button class="start-over">Начать заново</button>
    </div>
    <div class="app-card center-card"> </div>
    `

    conteinerElement.innerHTML = levelHtml
}


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/stratosskyengweb-regular.woff'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/stratosskyengweb-regular.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: StratosSkyeng;
    src:
        url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
    font-weight: normal;
}

* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

body {
    font-family: StratosSkyeng, sans-serif;
    background: #004980;
}

.center {
    padding-left: calc(50% - 240px);
    padding-right: calc(50% - 240px);
}

.center-card {
    padding-left: calc(50% - 463px);
    padding-right: calc(50% - 463px);
}

.container {
    display: flex;
    align-items: center;
    padding-top: 158px;
    padding-bottom: 157px;
    min-height: 774px;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 48px;
    width: 480px;
    height: 459px;
    border-radius: 12px;
    background: #c2f5ff;
}

.title {
    width: 208px;
    height: 96px;
    color: #004980;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    padding-top: 52px;
    text-align: center;
}

/* .radio-button {
    width: 97px;
    height: 98px;
    flex-shrink: 0;
    color: #0080C1;
    text-align: center;
    font-family: StratosSkyeng;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    border-radius: 12px;
    background: #FFF;

} */

.button-start {
    display: flex;
    width: 246px;
    height: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    color: #fff;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    border-radius: 12px;
    background: var(--salad-60, #7ac100);
}

/* Стили для кнопок выбора сложности с параметром radio */

.radio-toolbar {
    display: flex;
    column-gap: 26px;
    justify-content: center;
}

.radio-toolbar input[type='radio'] {
    display: none;
}

.prod_checbox strong {
    font-size: 14px;
    color: #333;
    display: inline-block;
    margin-right: 10px;
    letter-spacing: 0.5px;
}

.radio-toolbar label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 9px;
    cursor: pointer;
    border: 1px solid #00c2ff;
    border-radius: 5px;
    width: 97px;
    height: 98px;
    flex-shrink: 0;
    color: #0080c1;
    text-align: center;
    font-family: StratosSkyeng;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    border-radius: 12px;
    background: #fff;
}

.radio-toolbar input[type='radio']:checked + label {
    background-color: #00c2ff;
    border: 1px solid #00c2ff;
    color: #fff;
}

.radio-toolbar label:hover {
    background-color: #b9ea2c;
    border: 1px solid #b9ea2c;
}

/* Стили страницы с самой игрой */

.navi {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 975px;
    margin-top: 22px;

    /* padding-left: 23px;
    padding-right: 23px; */
}

.report {
    width: 155px;
    display: flex;
    justify-content: flex-end;
    column-gap: 57px;
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
}

.counter {
    width: 155px;
    color: #fff;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
}

.start-over {
    display: flex;
    width: 246px;
    height: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    border-radius: 12px;
    background: var(--salad-60, #7ac100);
}

.app-card {
    width: 975px;
    padding-top: 40px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}
`, "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B;;+DAEiE;IACjE,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,kBAAkB;IAClB,mDAAmD;IACnD,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA,yDAAyD;;AAEzD;IACI,aAAa;IACb,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA,iCAAiC;;AAEjC;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;;IAEhB;0BACsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,WAAW;IACX,mDAAmD;IACnD,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,mDAAmD;IACnD,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: StratosSkyeng;\n    src:\n        url('./fonts/stratosskyengweb-regular.woff') format('woff'),\n        url('./fonts/stratosskyengweb-regular.woff2') format('woff2');\n    font-weight: normal;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    text-decoration: none;\n}\n\nbody {\n    font-family: StratosSkyeng, sans-serif;\n    background: #004980;\n}\n\n.center {\n    padding-left: calc(50% - 240px);\n    padding-right: calc(50% - 240px);\n}\n\n.center-card {\n    padding-left: calc(50% - 463px);\n    padding-right: calc(50% - 463px);\n}\n\n.container {\n    display: flex;\n    align-items: center;\n    padding-top: 158px;\n    padding-bottom: 157px;\n    min-height: 774px;\n}\n\n.box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 48px;\n    width: 480px;\n    height: 459px;\n    border-radius: 12px;\n    background: #c2f5ff;\n}\n\n.title {\n    width: 208px;\n    height: 96px;\n    color: #004980;\n    font-size: 40px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 48px;\n    padding-top: 52px;\n    text-align: center;\n}\n\n/* .radio-button {\n    width: 97px;\n    height: 98px;\n    flex-shrink: 0;\n    color: #0080C1;\n    text-align: center;\n    font-family: StratosSkyeng;\n    font-size: 64px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 72px;\n    border-radius: 12px;\n    background: #FFF;\n\n} */\n\n.button-start {\n    display: flex;\n    width: 246px;\n    height: 48px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 32px;\n    color: #fff;\n    text-align: center;\n    font-variant-numeric: lining-nums proportional-nums;\n    border-radius: 12px;\n    background: var(--salad-60, #7ac100);\n}\n\n/* Стили для кнопок выбора сложности с параметром radio */\n\n.radio-toolbar {\n    display: flex;\n    column-gap: 26px;\n    justify-content: center;\n}\n\n.radio-toolbar input[type='radio'] {\n    display: none;\n}\n\n.prod_checbox strong {\n    font-size: 14px;\n    color: #333;\n    display: inline-block;\n    margin-right: 10px;\n    letter-spacing: 0.5px;\n}\n\n.radio-toolbar label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 9px;\n    cursor: pointer;\n    border: 1px solid #00c2ff;\n    border-radius: 5px;\n    width: 97px;\n    height: 98px;\n    flex-shrink: 0;\n    color: #0080c1;\n    text-align: center;\n    font-family: StratosSkyeng;\n    font-size: 64px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 72px;\n    border-radius: 12px;\n    background: #fff;\n}\n\n.radio-toolbar input[type='radio']:checked + label {\n    background-color: #00c2ff;\n    border: 1px solid #00c2ff;\n    color: #fff;\n}\n\n.radio-toolbar label:hover {\n    background-color: #b9ea2c;\n    border: 1px solid #b9ea2c;\n}\n\n/* Стили страницы с самой игрой */\n\n.navi {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    align-items: center;\n    width: 975px;\n    margin-top: 22px;\n\n    /* padding-left: 23px;\n    padding-right: 23px; */\n}\n\n.report {\n    width: 155px;\n    display: flex;\n    justify-content: flex-end;\n    column-gap: 57px;\n    color: #fff;\n    font-variant-numeric: lining-nums proportional-nums;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 32px;\n}\n\n.counter {\n    width: 155px;\n    color: #fff;\n    font-size: 64px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 72px;\n}\n\n.start-over {\n    display: flex;\n    width: 246px;\n    height: 48px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    color: #fff;\n    text-align: center;\n    font-variant-numeric: lining-nums proportional-nums;\n    font-family: StratosSkyeng;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 32px;\n    border-radius: 12px;\n    background: var(--salad-60, #7ac100);\n}\n\n.app-card {\n    width: 975px;\n    padding-top: 40px;\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./module/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRender: () => (/* binding */ getRender)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _level_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-game.js */ "./module/level-game.js");


const conteinerElement = document.querySelector('.app-game')
const conteinerCards = document.querySelector('.app-card')
let gameLavel = ''

function getRender() {
    let blokHtml = `           <div class="container center">
    <div class="box">
        <div class="title">Выбери сложность</div>
        <div class="radio-toolbar">
            <input type="radio" id="radio1" name="radios" value="easy" checked>
            <label for="radio1">1</label>

            <input type="radio" id="radio2" name="radios" value="medium">
            <label for="radio2">2</label>

            <input type="radio" id="radio3" name="radios" value="hard">
            <label for="radio3">3</label>
        </div>
        <button class="button-start">Старт</button>
    </div>
</div>

`

    conteinerElement.innerHTML = blokHtml

    const buttonElements = document.getElementsByName('radios')
    const buttonStart = document.querySelector('.button-start')
    console.log(buttonElements)

    buttonStart.addEventListener('click', () => {
        for (const buttonElement of buttonElements) {
            if (buttonElement.checked) {
                gameLavel = buttonElement.value
                ;(0,_level_game_js__WEBPACK_IMPORTED_MODULE_1__.getRenderLevel)({ conteinerElement })
                ;(0,_level_game_js__WEBPACK_IMPORTED_MODULE_1__.getRenderCard)({ conteinerCards })
                console.log(gameLavel)
            }
        }
    })
}

getRender()

})();

/******/ })()
;
//# sourceMappingURL=main.js.map