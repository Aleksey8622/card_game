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
    { img: './static/deck-cards/cross/6.png' },
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
//# sourceMappingURL=bundle.js.map