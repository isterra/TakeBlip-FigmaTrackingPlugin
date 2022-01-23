/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/colors.ts":
/*!*********************************!*\
  !*** ./src/constants/colors.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var colors = {
    DEFAULT_COLOR: { r: 0.9344978332519531, g: 0.6596454977989197, b: 0 },
    ERROS_COLOR: { r: 0.8313725590705872, g: 0, b: 0 },
    VALIDADED_COLOR: { r: 0.12941177189350128, g: 0.5882353186607361, b: 0.32549020648002625 },
    SUCESS_COLOR: { r: 0.2078431397676468, g: 0.7176470756530762, b: 0.9450980424880981 },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);


/***/ }),

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const constantsBR = {
    ORIGEM_ORIGEM_CATEGORIA: "origem",
    ORIGEM_ORIGEM_ACAO: "[[Bot de origem]] | [[bloco de origem]]",
    ORIGEM_ORIGEM_ACAO_BUILDER: "[[Bloco de origem]]",
    ORIGEM_EXCECAO_CATEGORIA: "origem",
    ORIGEM_EXCECAO_ACAO: "[[Bot de origem]] | [[bloco de origem]] | [[Input do usuario na origem]]",
    ORIGEM_EXCECAO_ACAO_BUILDER: "[[Bloco de origem]] | [[input do usuario na origem]]",
    EXIBICAO_CATEGORIA: "exibicao",
    EXIBICAO_ACAO: "Exibicao",
    SELECAO_CATEGORIA: "selecao",
    SELECAO_ACAO: "[[Opcoes do menu]]; input inesperado",
    INESPERADO_CATEGORIA: "inesperado",
    INESPERADO_ACAO: "[[Input inesperado]]",
    INPUT_CATEGORIA: "input",
    INPUT_ACAO: "[[Input do usuario]] | invalido;valido",
    VALIDACAO_CATEGORIA: "validacao",
    VALIDACAO_ACAO: "Sim; nao",
    ST_QUESTION_CATEGORY: "ST survey question",
    ST_ANSWER_CATEGORY: "ST survey answer",
    ST_REASON_CATEGORY: "ST survey reason",
    ST_P1: "CSAT",
    ST_P2: "CES",
    ST_P3: "NPS",
    ST_HUMAN: "Human",
    ST_BOT: "Bot",
    ST_QUESTION_ACTION: "Count",
    ST_CSAT_ANSWER_ACTION: "Very dissatisfied, Dissatisfied, Neutral, Satisfied, Very satisfied",
    ST_CES_ANSWER_ACTION: "Very difficult, Difficult, Neutral, Easy, Very easy ",
    ST_NPS_ANSWER_ACTION: "Detractors, Passives or Promoters",
    ST_REASON_ACTION: "Score (survey answer)|User input",
    LINK_CATEGORY: "link",
    LINK_ACTION: "[[Cliques]]",
};
const constantsEN = {
    ORIGEM_ORIGEM_CATEGORIA: "source",
    ORIGEM_ORIGEM_ACAO: "[[Bot source]] | [[block source]]",
    ORIGEM_ORIGEM_ACAO_BUILDER: "[[Block source]]",
    ORIGEM_EXCECAO_CATEGORIA: "source",
    ORIGEM_EXCECAO_ACAO: "[[Bot source]] | [[block source]] | [[user input]]",
    ORIGEM_EXCECAO_ACAO_BUILDER: "[[Block source]] | [[user input]]",
    EXIBICAO_CATEGORIA: "display",
    EXIBICAO_ACAO: "Display",
    SELECAO_CATEGORIA: "selection",
    SELECAO_ACAO: "[[Menu options]]; unexpected answer",
    INESPERADO_CATEGORIA: "unexpected",
    INESPERADO_ACAO: "[[Unexpected answer]]",
    INPUT_CATEGORIA: "input",
    INPUT_ACAO: "[[User input]] | invalid;valid",
    VALIDACAO_CATEGORIA: "validation",
    VALIDACAO_ACAO: "True; false",
    ST_QUESTION_CATEGORY: "ST survey question",
    ST_ANSWER_CATEGORY: "ST survey answer",
    ST_REASON_CATEGORY: "ST survey reason",
    ST_P1: "CSAT",
    ST_P2: "CES",
    ST_P3: "NPS",
    ST_HUMAN: "Human",
    ST_BOT: "Bot",
    ST_QUESTION_ACTION: "Count",
    ST_CSAT_ANSWER_ACTION: "Very dissatisfied, Dissatisfied, Neutral, Satisfied, Very satisfied",
    ST_CES_ANSWER_ACTION: "Very difficult, Difficult, Neutral, Easy, Very easy ",
    ST_NPS_ANSWER_ACTION: "Detractors, Passives or Promoters",
    ST_REASON_ACTION: "Score (survey answer)|User input",
    LINK_CATEGORY: "link",
    LINK_ACTION: "[[Click]]",
};
const constantsES = {
    ORIGEM_ORIGEM_CATEGORIA: "origen",
    ORIGEM_ORIGEM_ACAO: "[[Bot de origen]] | [[bloque de origen]]",
    ORIGEM_ORIGEM_ACAO_BUILDER: "[[Bloque de origen]]",
    ORIGEM_EXCECAO_CATEGORIA: "origen",
    ORIGEM_EXCECAO_ACAO: "[[Bot de origen]] | [[bloque de origen]] | [[mensaje del usuario]]",
    ORIGEM_EXCECAO_ACAO_BUILDER: "[[Bloque de origen]] | [[mensaje del usuario]]",
    EXIBICAO_CATEGORIA: "exposicion",
    EXIBICAO_ACAO: "Exposicion",
    SELECAO_CATEGORIA: "seleccion",
    SELECAO_ACAO: "[[Opciones del menu]]; Input inesperado",
    INESPERADO_CATEGORIA: "inesperado",
    INESPERADO_ACAO: "[[Input inesperado]]",
    INPUT_CATEGORIA: "mensaje",
    INPUT_ACAO: "[[Mensaje del usuario]] | valido;invalido",
    VALIDACAO_CATEGORIA: "validacion",
    VALIDACAO_ACAO: "Si;no",
    ST_QUESTION_CATEGORY: "ST survey question",
    ST_ANSWER_CATEGORY: "ST survey answer",
    ST_REASON_CATEGORY: "ST survey reason",
    ST_P1: "CSAT",
    ST_P2: "CES",
    ST_P3: "NPS",
    ST_HUMAN: "Human",
    ST_BOT: "Bot",
    ST_QUESTION_ACTION: "Count",
    ST_CSAT_ANSWER_ACTION: "Very dissatisfied, Dissatisfied, Neutral, Satisfied, Very satisfied",
    ST_CES_ANSWER_ACTION: "Very difficult, Difficult, Neutral, Easy, Very easy ",
    ST_NPS_ANSWER_ACTION: "Detractors, Passives or Promoters",
    ST_REASON_ACTION: "Score (survey answer)|User input",
    LINK_CATEGORY: "link",
    LINK_ACTION: "[[Clics]]",
};
function retrieveLanguage(lenguage) {
    switch (lenguage) {
        case "BR":
            return constantsBR;
        case "EN":
            return constantsEN;
        case "ES":
            return constantsES;
        default:
            break;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveLanguage);


/***/ }),

/***/ "./src/functions/createTracking.ts":
/*!*****************************************!*\
  !*** ./src/functions/createTracking.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supportFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supportFunctions */ "./src/functions/supportFunctions.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


var lastFrame;
const createTrackings = function (trackData) {
    return __awaiter(this, void 0, void 0, function* () {
        var positionX = figma.viewport.center.x;
        var positionYCategory = figma.viewport.center.y;
        var components = [];
        var color = _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.trackingColor(trackData.trackColor);
        var trackCategory = trackData.category;
        var constants = (0,_constants_constants__WEBPACK_IMPORTED_MODULE_1__.default)(trackData.lenguage);
        //OrigeTrack
        if (trackData.origin) {
            var actionName;
            if (trackData.originCategory) {
                if (trackData.originBot) {
                    actionName = constants.ORIGEM_ORIGEM_ACAO;
                }
                else {
                    actionName = constants.ORIGEM_ORIGEM_ACAO_BUILDER;
                }
            }
            else {
                if (trackData.originBot) {
                    actionName = constants.ORIGEM_EXCECAO_ACAO;
                }
                else {
                    actionName = constants.ORIGEM_EXCECAO_ACAO_BUILDER;
                }
            }
            var categoryName = trackData.originCategory ? constants.ORIGEM_ORIGEM_CATEGORIA : constants.ORIGEM_EXCECAO_CATEGORIA;
            var category = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createText(trackCategory, categoryName, positionX, positionYCategory, color);
            var action = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createSubText(actionName, positionX, positionYCategory + 15);
            components.push(_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createComponent([category, action], positionX, positionYCategory, "Tracking"));
            positionYCategory += 65;
            if (trackData.isRigth)
                _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.changeDirection([category, action]);
        }
        //Menu Trackings
        if (trackData.principal) {
            var optMenu = trackData.principal;
            var optCategory = [constants.EXIBICAO_CATEGORIA, constants.SELECAO_CATEGORIA, constants.INESPERADO_CATEGORIA, constants.INPUT_CATEGORIA];
            var optAction = [constants.EXIBICAO_ACAO, constants.SELECAO_ACAO, constants.INESPERADO_ACAO, constants.INPUT_ACAO];
            var optMenuCreate = [];
            for (var i = 0, j = 0; i < optMenu.length; i++, j++) {
                if (optMenu[i]) {
                    var category = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createText(trackCategory, optCategory[j], positionX, positionYCategory, color);
                    var action = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createSubText(optAction[j], positionX, positionYCategory + 15);
                    if (!trackData.isRigth)
                        components.push(_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createComponent([category, action], positionX, positionYCategory, "Tracking"));
                    else {
                        optMenuCreate.push(category);
                        optMenuCreate.push(action);
                    }
                    positionYCategory += 40;
                }
            }
            if (trackData.isRigth) {
                if (optMenuCreate.length > 0) {
                    _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.changeDirection(optMenuCreate);
                    for (var i = 0; i < optMenuCreate.length; i += 2) {
                        components.push(_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createComponent([optMenuCreate[i], optMenuCreate[i + 1]], optMenuCreate[i].x < optMenuCreate[i + 1].x ? optMenuCreate[i].x : optMenuCreate[i + 1].x, optMenuCreate[i].y, "Track"));
                    }
                }
            }
        }
        //Validation Track
        if (trackData.validation) {
            positionYCategory += 35;
            var category = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createText(trackCategory, constants.VALIDACAO_CATEGORIA, positionX, positionYCategory, color);
            var action = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createSubText(constants.VALIDACAO_ACAO, positionX, positionYCategory + 15);
            action.x = (category.x + category.width / 2) - (action.width / 2);
            components.push(_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createComponent([category, action], positionX, positionYCategory, "Tracking"));
            positionYCategory += 65;
        }
        //Sucess track
        if (trackData.sucess) {
            var optTrackinsSucesso = [constants.ST_QUESTION_CATEGORY, constants.ST_ANSWER_CATEGORY, constants.ST_REASON_CATEGORY];
            var attendantAction = trackData.sucessFlow ? constants.ST_BOT : constants.ST_HUMAN;
            var optTK;
            var actionAnswer;
            optMenuCreate = [];
            if (trackData.sucessSearch == "CSAT") {
                actionAnswer = constants.ST_CSAT_ANSWER_ACTION;
                optTK = constants.ST_P1;
            }
            else if (trackData.sucessSearch == "CES") {
                actionAnswer = constants.ST_CES_ANSWER_ACTION;
                optTK = constants.ST_P2;
            }
            else {
                actionAnswer = constants.ST_NPS_ANSWER_ACTION;
                optTK = constants.ST_P3;
            }
            var actionsTK = [`${optTK} ${attendantAction}|Count`, `${optTK} ${attendantAction}|${actionAnswer}`, `${optTK} ${attendantAction}|${constants.ST_REASON_ACTION}`];
            for (var i = 0; i < optTrackinsSucesso.length; i++) {
                var category = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createSucessText(optTrackinsSucesso[i], positionX, positionYCategory, color);
                var action = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createSubText(actionsTK[i], positionX, positionYCategory + 15);
                if (!trackData.isRigth)
                    components.push(_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createComponent([category, action], positionX, positionYCategory, "Tracking"));
                else {
                    optMenuCreate.push(category);
                    optMenuCreate.push(action);
                }
                positionYCategory += 40;
            }
            if (trackData.isRigth) {
                _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.changeDirection(optMenuCreate);
                for (var i = 0; i < optMenuCreate.length; i += 2) {
                    components.push(_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createComponent([optMenuCreate[i], optMenuCreate[i + 1]], optMenuCreate[i].x < optMenuCreate[i + 1].x ? optMenuCreate[i].x : optMenuCreate[i + 1].x, optMenuCreate[i].y, "Track"));
                }
            }
        }
        if (trackData.link) {
            positionYCategory += 35;
            var category = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createText(trackCategory, constants.LINK_CATEGORY, positionX, positionYCategory, color);
            var action = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createSubText(constants.LINK_ACTION, positionX, positionYCategory + 15);
            if (trackData.isRigth) {
                var baseX = components[0] ? components[0].x + components[0].width : positionX;
                _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.changeDirection([category, action]);
                positionX = baseX - category.width;
                category.x = positionX;
                action.x = baseX - action.width;
            }
            components.push(_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createComponent([category, action], positionX, positionYCategory, "Tracking"));
            positionYCategory += 65;
        }
        lastFrame = _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.addNodesToFrame(components, lastFrame);
        figma.currentPage.selection = components;
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTrackings);


/***/ }),

/***/ "./src/functions/supportFunctions.ts":
/*!*******************************************!*\
  !*** ./src/functions/supportFunctions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createText": () => (/* binding */ createText),
/* harmony export */   "createSucessText": () => (/* binding */ createSucessText),
/* harmony export */   "createSubText": () => (/* binding */ createSubText),
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "addNodesToFrame": () => (/* binding */ addNodesToFrame),
/* harmony export */   "betwen": () => (/* binding */ betwen),
/* harmony export */   "trackingColor": () => (/* binding */ trackingColor),
/* harmony export */   "changeDirection": () => (/* binding */ changeDirection),
/* harmony export */   "valueBasedOnRcolor": () => (/* binding */ valueBasedOnRcolor)
/* harmony export */ });
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/colors */ "./src/constants/colors.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function createText(name, tipo, positionX, positionY, color) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
        var text = figma.createText();
        text.name = "message";
        text.fontName = { family: "Roboto", style: "Bold" };
        text.fills = [{ type: 'SOLID', color: color ? color : _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_COLOR }];
        text.fontSize = 14;
        text.textAutoResize = "WIDTH_AND_HEIGHT";
        text.x = (positionX);
        text.y = (positionY);
        text.characters = `${name} ${tipo}`;
        return text;
    });
}
function createSucessText(tipo, positionX, positionY, color) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
        var text = figma.createText();
        text.name = "message";
        text.fontName = { family: "Roboto", style: "Bold" };
        text.fills = [{ type: 'SOLID', color: color ? color : _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_COLOR }];
        text.fontSize = 14;
        text.textAutoResize = "WIDTH_AND_HEIGHT";
        text.x = (positionX);
        text.y = (positionY);
        text.characters = `${tipo}`;
        return text;
    });
}
function createSubText(name, positionX, positionY) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
        var text = figma.createText();
        text.name = "message";
        text.fontName = { family: "Roboto", style: "Regular" };
        text.fills = [{ type: 'SOLID', color: { r: 0.49, g: 0.47, b: 0.47 } }];
        text.fontSize = 9;
        text.textAutoResize = "WIDTH_AND_HEIGHT";
        text.x = (positionX);
        text.y = (positionY);
        text.characters = `${name}`;
        return text;
    });
}
function createComponent(nodesToComponent, positionX, positionY, ID) {
    const nodes = nodesToComponent;
    var component = figma.createComponent();
    component.name = ID;
    component.x = positionX;
    component.y = positionY;
    var width = nodes[0].width > nodes[1].width ? nodes[0].width : nodes[1].width;
    var heigth = nodes[0].height + nodes[1].height;
    for (var i = 0; i < nodesToComponent.length; i++) {
        component.appendChild(nodes[i]);
        nodes[i].x -= component.x;
        nodes[i].y -= component.y;
    }
    component.resizeWithoutConstraints(width, heigth);
    return component;
}
function addNodesToFrame(nodes, lastFrame) {
    if (lastFrame) {
        var frame = figma.currentPage.findOne(e => e.name == lastFrame);
        if (betwen(frame, nodes[0])) {
            nodes.forEach((c) => {
                frame.appendChild(c);
                c.x -= frame.x;
                c.y -= frame.y;
            });
            return frame.name;
        }
    }
    else {
        const framesInPage = figma.currentPage.findAll(n => n.type === "FRAME");
        for (var i = 0; i < framesInPage.length; i++) {
            var frame = framesInPage[i];
            if (betwen(frame, nodes[0])) {
                nodes.forEach((c) => {
                    frame.appendChild(c);
                    c.x -= frame.x;
                    c.y -= frame.y;
                });
                return frame.name;
            }
        }
    }
}
function betwen(frame, node) {
    if (node.y >= frame.y && node.y <= frame.y + frame.height) {
        if (node.x >= frame.x && node.x <= frame.x + frame.width) {
            return true;
        }
    }
    return false;
}
function trackingColor(type) {
    switch (type) {
        case "new":
            return _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_COLOR;
        case "error":
            return _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.ERROS_COLOR;
        case "validaded":
            return _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.VALIDADED_COLOR;
        case "sucess":
            return _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.SUCESS_COLOR;
        default:
            return _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_COLOR;
    }
}
function changeDirection(elements) {
    var posMaior;
    for (var i = 0; i < elements.length; i++) {
        if (i == 0) {
            posMaior = i;
        }
        else {
            if (elements[i].width > elements[posMaior].width) {
                posMaior = i;
            }
        }
    }
    var xRef = elements[posMaior].x + elements[posMaior].width;
    for (var i = 0; i < elements.length; i++) {
        if (i != posMaior) {
            elements[i].x = xRef - elements[i].width;
        }
    }
}
function valueBasedOnRcolor(color) {
    switch (color) {
        case _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_COLOR.r: return "new";
        case _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.ERROS_COLOR.r: return "error";
        case _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.VALIDADED_COLOR.r: return "validaded";
        case _constants_colors__WEBPACK_IMPORTED_MODULE_0__.default.SUCESS_COLOR.r: return "sucess";
        default: return "new";
    }
}











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
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_createTracking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/createTracking */ "./src/functions/createTracking.ts");
/* harmony import */ var _functions_supportFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/supportFunctions */ "./src/functions/supportFunctions.ts");
var uiWidth = 400;
var uiHeigth = 390;
var auto = true;
var nodesSelecteds = [];


figma.showUI(__html__);
figma.ui.resize(uiWidth, uiHeigth);
figma.ui.onmessage = msg => {
    if (msg.type === 'createTracking') {
        (0,_functions_createTracking__WEBPACK_IMPORTED_MODULE_0__.default)(msg.trackData);
    }
    if (msg.type === 'changeWindowSize') {
        var { canExpand, size } = msg.message;
        if (canExpand) {
            uiHeigth += size;
            figma.ui.resize(uiWidth, uiHeigth);
        }
        else {
            uiHeigth -= size;
            figma.ui.resize(uiWidth, uiHeigth);
        }
    }
    if (msg.type === "changeSelectionColors") {
        nodesSelecteds.forEach(node => {
            var textNode = node.children[0];
            var textNodeCloned = textNode.clone();
            textNodeCloned.fills = [{ type: 'SOLID', color: (0,_functions_supportFunctions__WEBPACK_IMPORTED_MODULE_1__.trackingColor)(msg.id) }];
            node.children[0].fills = textNodeCloned.fills;
            textNodeCloned.remove();
        });
    }
    if (msg.type === "changeAuto") {
        auto = msg.auto;
        if (!auto) {
            nodesSelecteds = [];
        }
    }
};
figma.on("selectionchange", () => {
    if (auto) {
        nodesSelecteds = [];
        var nodes = figma.currentPage.selection.slice();
        if (nodes.length > 0) {
            if (nodes.length == 1) {
                if ((nodes[0].type == "COMPONENT" || nodes[0].type == "INSTANCE") && nodes[0].name.match(/track/ig)) {
                    node = nodes[0];
                    var textNode = node.children[0];
                    var changeCategory = {
                        type: "change Category",
                        value: textNode.characters.split(/exibicao|selecao|inesperado|input inesperado|question|answer|reason|origem|input|validacao/ig)[0]
                    };
                    figma.ui.postMessage(changeCategory);
                }
            }
            var available = true;
            var sameColor = true;
            var color;
            for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                nodesSelecteds.push(node);
                if (!((node.type == "COMPONENT" || node.type == "INSTANCE") && node.name.match(/track/ig))) {
                    available = false;
                    break;
                }
                else if (sameColor) {
                    if (i != 0) {
                        var textNode = node.children[0];
                        if (textNode.fills[0].color.r != color.r)
                            sameColor = false;
                    }
                    else {
                        var textNode = node.children[0];
                        color = textNode.fills[0].color;
                    }
                }
            }
            if (available) {
                if (sameColor) {
                    var msg = {
                        type: "change type",
                        value: (0,_functions_supportFunctions__WEBPACK_IMPORTED_MODULE_1__.valueBasedOnRcolor)(color.r)
                    };
                    figma.ui.postMessage(msg);
                }
                else {
                    var diffMessage = {
                        type: "change diff colors",
                    };
                    figma.ui.postMessage(diffMessage);
                }
            }
            else {
                nodesSelecteds = [];
            }
        }
        else {
            var change = {
                type: "changeSelection",
                value: false
            };
            figma.ui.postMessage(change);
        }
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2lCQUNsQzthQUNGO2lCQUFNO2dCQUNMLGNBQWMsR0FBRyxFQUFFO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLElBQUksTUFBTSxHQUFHO2dCQUNYLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDN0I7S0FDRjtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9jb25zdGFudHMvY29sb3JzLnRzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlVHJhY2tpbmcudHMiLCJ3ZWJwYWNrOi8vdHJhY2tpbmdibGlwLy4vc3JjL2Z1bmN0aW9ucy9zdXBwb3J0RnVuY3Rpb25zLnRzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyYWNraW5nYmxpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb2xvcnMgPSB7XHJcbiAgICBERUZBVUxUX0NPTE9SOnsgcjogMC45MzQ0OTc4MzMyNTE5NTMxLCBnOiAwLjY1OTY0NTQ5Nzc5ODkxOTcsIGI6IDAgfSxcclxuICAgIEVSUk9TX0NPTE9SOnsgcjogMC44MzEzNzI1NTkwNzA1ODcyLCBnOiAwLCBiOiAwIH0sXHJcbiAgICBWQUxJREFERURfQ09MT1I6eyByOiAwLjEyOTQxMTc3MTg5MzUwMTI4LCBnOiAwLjU4ODIzNTMxODY2MDczNjEsIGI6IDAuMzI1NDkwMjA2NDgwMDI2MjUgfSxcclxuICAgIFNVQ0VTU19DT0xPUjp7IHI6IDAuMjA3ODQzMTM5NzY3NjQ2OCwgZzogMC43MTc2NDcwNzU2NTMwNzYyLCBiOiAwLjk0NTA5ODA0MjQ4ODA5ODEgfSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcnMiLCJjb25zdCBjb25zdGFudHNCUj17XHJcblxyXG4gICAgT1JJR0VNX09SSUdFTV9DQVRFR09SSUE6XCJvcmlnZW1cIixcclxuICAgIE9SSUdFTV9PUklHRU1fQUNBTzpcIltbQm90IGRlIG9yaWdlbV1dIHwgW1tibG9jbyBkZSBvcmlnZW1dXVwiLFxyXG4gICAgT1JJR0VNX09SSUdFTV9BQ0FPX0JVSUxERVI6XCJbW0Jsb2NvIGRlIG9yaWdlbV1dXCIsXHJcbiAgICBcclxuICAgIE9SSUdFTV9FWENFQ0FPX0NBVEVHT1JJQTpcIm9yaWdlbVwiLFxyXG4gICAgT1JJR0VNX0VYQ0VDQU9fQUNBTzpcIltbQm90IGRlIG9yaWdlbV1dIHwgW1tibG9jbyBkZSBvcmlnZW1dXSB8IFtbSW5wdXQgZG8gdXN1YXJpbyBuYSBvcmlnZW1dXVwiLFxyXG4gICAgT1JJR0VNX0VYQ0VDQU9fQUNBT19CVUlMREVSOlwiW1tCbG9jbyBkZSBvcmlnZW1dXSB8IFtbaW5wdXQgZG8gdXN1YXJpbyBuYSBvcmlnZW1dXVwiLFxyXG4gICAgXHJcbiAgICBFWElCSUNBT19DQVRFR09SSUE6XCJleGliaWNhb1wiLFxyXG4gICAgRVhJQklDQU9fQUNBTzpcIkV4aWJpY2FvXCIsXHJcbiAgICBcclxuICAgIFNFTEVDQU9fQ0FURUdPUklBOlwic2VsZWNhb1wiLFxyXG4gICAgU0VMRUNBT19BQ0FPOlwiW1tPcGNvZXMgZG8gbWVudV1dOyBpbnB1dCBpbmVzcGVyYWRvXCIsXHJcbiAgICBcclxuICAgIElORVNQRVJBRE9fQ0FURUdPUklBOlwiaW5lc3BlcmFkb1wiLFxyXG4gICAgSU5FU1BFUkFET19BQ0FPOlwiW1tJbnB1dCBpbmVzcGVyYWRvXV1cIixcclxuICAgIFxyXG4gICAgSU5QVVRfQ0FURUdPUklBOlwiaW5wdXRcIixcclxuICAgIElOUFVUX0FDQU86XCJbW0lucHV0IGRvIHVzdWFyaW9dXSB8IGludmFsaWRvO3ZhbGlkb1wiLFxyXG5cclxuICAgIFZBTElEQUNBT19DQVRFR09SSUE6XCJ2YWxpZGFjYW9cIixcclxuICAgIFZBTElEQUNBT19BQ0FPOlwiU2ltOyBuYW9cIixcclxuICAgIFxyXG4gICAgU1RfUVVFU1RJT05fQ0FURUdPUlk6XCJTVCBzdXJ2ZXkgcXVlc3Rpb25cIixcclxuICAgIFNUX0FOU1dFUl9DQVRFR09SWTpcIlNUIHN1cnZleSBhbnN3ZXJcIixcclxuICAgIFNUX1JFQVNPTl9DQVRFR09SWTpcIlNUIHN1cnZleSByZWFzb25cIixcclxuXHJcbiAgICBTVF9QMTpcIkNTQVRcIixcclxuICAgIFNUX1AyOlwiQ0VTXCIsXHJcbiAgICBTVF9QMzpcIk5QU1wiLFxyXG5cclxuICAgIFNUX0hVTUFOOlwiSHVtYW5cIixcclxuICAgIFNUX0JPVDpcIkJvdFwiLFxyXG5cclxuICAgIFNUX1FVRVNUSU9OX0FDVElPTjpcIkNvdW50XCIsXHJcbiAgICBTVF9DU0FUX0FOU1dFUl9BQ1RJT046XCJWZXJ5IGRpc3NhdGlzZmllZCwgRGlzc2F0aXNmaWVkLCBOZXV0cmFsLCBTYXRpc2ZpZWQsIFZlcnkgc2F0aXNmaWVkXCIsXHJcbiAgICBTVF9DRVNfQU5TV0VSX0FDVElPTjpcIlZlcnkgZGlmZmljdWx0LCBEaWZmaWN1bHQsIE5ldXRyYWwsIEVhc3ksIFZlcnkgZWFzeSBcIixcclxuICAgIFNUX05QU19BTlNXRVJfQUNUSU9OOlwiRGV0cmFjdG9ycywgUGFzc2l2ZXMgb3IgUHJvbW90ZXJzXCIsXHJcblxyXG4gICAgU1RfUkVBU09OX0FDVElPTjpcIlNjb3JlIChzdXJ2ZXkgYW5zd2VyKXxVc2VyIGlucHV0XCIsXHJcblxyXG4gICAgTElOS19DQVRFR09SWTpcImxpbmtcIixcclxuICAgIExJTktfQUNUSU9OOlwiW1tDbGlxdWVzXV1cIixcclxuXHJcblxyXG59XHJcbmNvbnN0IGNvbnN0YW50c0VOPXtcclxuXHJcbiAgICBPUklHRU1fT1JJR0VNX0NBVEVHT1JJQTpcInNvdXJjZVwiLFxyXG4gICAgT1JJR0VNX09SSUdFTV9BQ0FPOlwiW1tCb3Qgc291cmNlXV0gfCBbW2Jsb2NrIHNvdXJjZV1dXCIsXHJcbiAgICBPUklHRU1fT1JJR0VNX0FDQU9fQlVJTERFUjpcIltbQmxvY2sgc291cmNlXV1cIixcclxuICAgIFxyXG4gICAgT1JJR0VNX0VYQ0VDQU9fQ0FURUdPUklBOlwic291cmNlXCIsXHJcbiAgICBPUklHRU1fRVhDRUNBT19BQ0FPOlwiW1tCb3Qgc291cmNlXV0gfCBbW2Jsb2NrIHNvdXJjZV1dIHwgW1t1c2VyIGlucHV0XV1cIixcclxuICAgIE9SSUdFTV9FWENFQ0FPX0FDQU9fQlVJTERFUjpcIltbQmxvY2sgc291cmNlXV0gfCBbW3VzZXIgaW5wdXRdXVwiLFxyXG4gICAgXHJcbiAgICBFWElCSUNBT19DQVRFR09SSUE6XCJkaXNwbGF5XCIsXHJcbiAgICBFWElCSUNBT19BQ0FPOlwiRGlzcGxheVwiLFxyXG4gICAgXHJcbiAgICBTRUxFQ0FPX0NBVEVHT1JJQTpcInNlbGVjdGlvblwiLFxyXG4gICAgU0VMRUNBT19BQ0FPOlwiW1tNZW51IG9wdGlvbnNdXTsgdW5leHBlY3RlZCBhbnN3ZXJcIixcclxuICAgIFxyXG4gICAgSU5FU1BFUkFET19DQVRFR09SSUE6XCJ1bmV4cGVjdGVkXCIsXHJcbiAgICBJTkVTUEVSQURPX0FDQU86XCJbW1VuZXhwZWN0ZWQgYW5zd2VyXV1cIixcclxuICAgIFxyXG4gICAgSU5QVVRfQ0FURUdPUklBOlwiaW5wdXRcIixcclxuICAgIElOUFVUX0FDQU86XCJbW1VzZXIgaW5wdXRdXSB8IGludmFsaWQ7dmFsaWRcIixcclxuXHJcbiAgICBWQUxJREFDQU9fQ0FURUdPUklBOlwidmFsaWRhdGlvblwiLFxyXG4gICAgVkFMSURBQ0FPX0FDQU86XCJUcnVlOyBmYWxzZVwiLFxyXG4gICAgXHJcbiAgICBTVF9RVUVTVElPTl9DQVRFR09SWTpcIlNUIHN1cnZleSBxdWVzdGlvblwiLFxyXG4gICAgU1RfQU5TV0VSX0NBVEVHT1JZOlwiU1Qgc3VydmV5IGFuc3dlclwiLFxyXG4gICAgU1RfUkVBU09OX0NBVEVHT1JZOlwiU1Qgc3VydmV5IHJlYXNvblwiLFxyXG5cclxuICAgIFNUX1AxOlwiQ1NBVFwiLFxyXG4gICAgU1RfUDI6XCJDRVNcIixcclxuICAgIFNUX1AzOlwiTlBTXCIsXHJcblxyXG4gICAgU1RfSFVNQU46XCJIdW1hblwiLFxyXG4gICAgU1RfQk9UOlwiQm90XCIsXHJcblxyXG4gICAgU1RfUVVFU1RJT05fQUNUSU9OOlwiQ291bnRcIixcclxuICAgIFNUX0NTQVRfQU5TV0VSX0FDVElPTjpcIlZlcnkgZGlzc2F0aXNmaWVkLCBEaXNzYXRpc2ZpZWQsIE5ldXRyYWwsIFNhdGlzZmllZCwgVmVyeSBzYXRpc2ZpZWRcIixcclxuICAgIFNUX0NFU19BTlNXRVJfQUNUSU9OOlwiVmVyeSBkaWZmaWN1bHQsIERpZmZpY3VsdCwgTmV1dHJhbCwgRWFzeSwgVmVyeSBlYXN5IFwiLFxyXG4gICAgU1RfTlBTX0FOU1dFUl9BQ1RJT046XCJEZXRyYWN0b3JzLCBQYXNzaXZlcyBvciBQcm9tb3RlcnNcIixcclxuXHJcbiAgICBTVF9SRUFTT05fQUNUSU9OOlwiU2NvcmUgKHN1cnZleSBhbnN3ZXIpfFVzZXIgaW5wdXRcIixcclxuXHJcbiAgICBMSU5LX0NBVEVHT1JZOlwibGlua1wiLFxyXG4gICAgTElOS19BQ1RJT046XCJbW0NsaWNrXV1cIixcclxuXHJcbn1cclxuY29uc3QgY29uc3RhbnRzRVM9e1xyXG4gICAgXHJcbiAgICBPUklHRU1fT1JJR0VNX0NBVEVHT1JJQTpcIm9yaWdlblwiLFxyXG4gICAgT1JJR0VNX09SSUdFTV9BQ0FPOlwiW1tCb3QgZGUgb3JpZ2VuXV0gfCBbW2Jsb3F1ZSBkZSBvcmlnZW5dXVwiLFxyXG4gICAgT1JJR0VNX09SSUdFTV9BQ0FPX0JVSUxERVI6XCJbW0Jsb3F1ZSBkZSBvcmlnZW5dXVwiLFxyXG4gICAgXHJcbiAgICBPUklHRU1fRVhDRUNBT19DQVRFR09SSUE6XCJvcmlnZW5cIixcclxuICAgIE9SSUdFTV9FWENFQ0FPX0FDQU86XCJbW0JvdCBkZSBvcmlnZW5dXSB8IFtbYmxvcXVlIGRlIG9yaWdlbl1dIHwgW1ttZW5zYWplIGRlbCB1c3VhcmlvXV1cIixcclxuICAgIE9SSUdFTV9FWENFQ0FPX0FDQU9fQlVJTERFUjpcIltbQmxvcXVlIGRlIG9yaWdlbl1dIHwgW1ttZW5zYWplIGRlbCB1c3VhcmlvXV1cIixcclxuICAgIFxyXG4gICAgRVhJQklDQU9fQ0FURUdPUklBOlwiZXhwb3NpY2lvblwiLFxyXG4gICAgRVhJQklDQU9fQUNBTzpcIkV4cG9zaWNpb25cIixcclxuICAgIFxyXG4gICAgU0VMRUNBT19DQVRFR09SSUE6XCJzZWxlY2Npb25cIixcclxuICAgIFNFTEVDQU9fQUNBTzpcIltbT3BjaW9uZXMgZGVsIG1lbnVdXTsgSW5wdXQgaW5lc3BlcmFkb1wiLFxyXG4gICAgXHJcbiAgICBJTkVTUEVSQURPX0NBVEVHT1JJQTpcImluZXNwZXJhZG9cIixcclxuICAgIElORVNQRVJBRE9fQUNBTzpcIltbSW5wdXQgaW5lc3BlcmFkb11dXCIsXHJcbiAgICBcclxuICAgIElOUFVUX0NBVEVHT1JJQTpcIm1lbnNhamVcIixcclxuICAgIElOUFVUX0FDQU86XCJbW01lbnNhamUgZGVsIHVzdWFyaW9dXSB8IHZhbGlkbztpbnZhbGlkb1wiLFxyXG5cclxuICAgIFZBTElEQUNBT19DQVRFR09SSUE6XCJ2YWxpZGFjaW9uXCIsXHJcbiAgICBWQUxJREFDQU9fQUNBTzpcIlNpO25vXCIsXHJcbiAgICBcclxuICAgIFNUX1FVRVNUSU9OX0NBVEVHT1JZOlwiU1Qgc3VydmV5IHF1ZXN0aW9uXCIsXHJcbiAgICBTVF9BTlNXRVJfQ0FURUdPUlk6XCJTVCBzdXJ2ZXkgYW5zd2VyXCIsXHJcbiAgICBTVF9SRUFTT05fQ0FURUdPUlk6XCJTVCBzdXJ2ZXkgcmVhc29uXCIsXHJcblxyXG4gICAgU1RfUDE6XCJDU0FUXCIsXHJcbiAgICBTVF9QMjpcIkNFU1wiLFxyXG4gICAgU1RfUDM6XCJOUFNcIixcclxuXHJcbiAgICBTVF9IVU1BTjpcIkh1bWFuXCIsXHJcbiAgICBTVF9CT1Q6XCJCb3RcIixcclxuXHJcbiAgICBTVF9RVUVTVElPTl9BQ1RJT046XCJDb3VudFwiLFxyXG4gICAgU1RfQ1NBVF9BTlNXRVJfQUNUSU9OOlwiVmVyeSBkaXNzYXRpc2ZpZWQsIERpc3NhdGlzZmllZCwgTmV1dHJhbCwgU2F0aXNmaWVkLCBWZXJ5IHNhdGlzZmllZFwiLFxyXG4gICAgU1RfQ0VTX0FOU1dFUl9BQ1RJT046XCJWZXJ5IGRpZmZpY3VsdCwgRGlmZmljdWx0LCBOZXV0cmFsLCBFYXN5LCBWZXJ5IGVhc3kgXCIsXHJcbiAgICBTVF9OUFNfQU5TV0VSX0FDVElPTjpcIkRldHJhY3RvcnMsIFBhc3NpdmVzIG9yIFByb21vdGVyc1wiLFxyXG5cclxuICAgIFNUX1JFQVNPTl9BQ1RJT046XCJTY29yZSAoc3VydmV5IGFuc3dlcil8VXNlciBpbnB1dFwiLFxyXG5cclxuICAgIExJTktfQ0FURUdPUlk6XCJsaW5rXCIsXHJcbiAgICBMSU5LX0FDVElPTjpcIltbQ2xpY3NdXVwiLFxyXG5cclxufVxyXG5mdW5jdGlvbiByZXRyaWV2ZUxhbmd1YWdlKGxlbmd1YWdlKXtcclxuICAgIHN3aXRjaCAobGVuZ3VhZ2UpIHtcclxuICAgICAgICBjYXNlIFwiQlJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0YW50c0JSXHJcbiAgICAgICAgY2FzZSBcIkVOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHNFTlxyXG4gICAgICAgIGNhc2UgXCJFU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzRVNcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJldHJpZXZlTGFuZ3VhZ2UiLCJpbXBvcnQgKiBhcyBzdXBwIGZyb20gJy4vc3VwcG9ydEZ1bmN0aW9ucyc7XHJcblxyXG5pbXBvcnQgbGVuZ3VhZ2VzIGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XHJcbnZhciBsYXN0RnJhbWVcclxuXHJcbmNvbnN0IGNyZWF0ZVRyYWNraW5ncyA9IGFzeW5jIGZ1bmN0aW9uICh0cmFja0RhdGEpIHtcclxuICAgIHZhciBwb3NpdGlvblggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueFxyXG4gICAgdmFyIHBvc2l0aW9uWUNhdGVnb3J5ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnlcclxuICAgIHZhciBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnROb2RlPiA9IFtdXHJcbiAgICB2YXIgY29sb3IgPSBzdXBwLnRyYWNraW5nQ29sb3IodHJhY2tEYXRhLnRyYWNrQ29sb3IpXHJcbiAgICB2YXIgdHJhY2tDYXRlZ29yeSA9IHRyYWNrRGF0YS5jYXRlZ29yeVxyXG4gICAgdmFyIGNvbnN0YW50cyA9IGxlbmd1YWdlcyh0cmFja0RhdGEubGVuZ3VhZ2UpO1xyXG4gICAgLy9PcmlnZVRyYWNrXHJcbiAgICBpZiAodHJhY2tEYXRhLm9yaWdpbikge1xyXG4gICAgICAgIHZhciBhY3Rpb25OYW1lXHJcbiAgICAgICAgaWYodHJhY2tEYXRhLm9yaWdpbkNhdGVnb3J5KXtcclxuICAgICAgICAgICAgaWYodHJhY2tEYXRhLm9yaWdpbkJvdCl7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lPWNvbnN0YW50cy5PUklHRU1fT1JJR0VNX0FDQU9cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lPWNvbnN0YW50cy5PUklHRU1fT1JJR0VNX0FDQU9fQlVJTERFUlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHRyYWNrRGF0YS5vcmlnaW5Cb3Qpe1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZT1jb25zdGFudHMuT1JJR0VNX0VYQ0VDQU9fQUNBTyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lPSBjb25zdGFudHMuT1JJR0VNX0VYQ0VDQU9fQUNBT19CVUlMREVSXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjYXRlZ29yeU5hbWUgPSB0cmFja0RhdGEub3JpZ2luQ2F0ZWdvcnkgPyBjb25zdGFudHMuT1JJR0VNX09SSUdFTV9DQVRFR09SSUEgOiBjb25zdGFudHMuT1JJR0VNX0VYQ0VDQU9fQ0FURUdPUklBXHJcbiAgICAgICAgdmFyIGNhdGVnb3J5OiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBjYXRlZ29yeU5hbWUsIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIGNvbG9yKVxyXG4gICAgICAgIHZhciBhY3Rpb246IFRleHROb2RlID0gYXdhaXQgc3VwcC5jcmVhdGVTdWJUZXh0KGFjdGlvbk5hbWUsIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnkgKyAxNSlcclxuICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDY1XHJcbiAgICAgICAgaWYgKHRyYWNrRGF0YS5pc1JpZ3RoKVxyXG4gICAgICAgICAgICBzdXBwLmNoYW5nZURpcmVjdGlvbihbY2F0ZWdvcnksIGFjdGlvbl0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9NZW51IFRyYWNraW5nc1xyXG4gICAgaWYgKHRyYWNrRGF0YS5wcmluY2lwYWwpIHtcclxuICAgICAgICB2YXIgb3B0TWVudSA9IHRyYWNrRGF0YS5wcmluY2lwYWxcclxuICAgICAgICB2YXIgb3B0Q2F0ZWdvcnkgPSBbY29uc3RhbnRzLkVYSUJJQ0FPX0NBVEVHT1JJQSwgY29uc3RhbnRzLlNFTEVDQU9fQ0FURUdPUklBLCBjb25zdGFudHMuSU5FU1BFUkFET19DQVRFR09SSUEsIGNvbnN0YW50cy5JTlBVVF9DQVRFR09SSUFdXHJcbiAgICAgICAgdmFyIG9wdEFjdGlvbiA9IFtjb25zdGFudHMuRVhJQklDQU9fQUNBTywgY29uc3RhbnRzLlNFTEVDQU9fQUNBTywgY29uc3RhbnRzLklORVNQRVJBRE9fQUNBTywgY29uc3RhbnRzLklOUFVUX0FDQU9dXHJcbiAgICAgICAgdmFyIG9wdE1lbnVDcmVhdGU6IEFycmF5PFRleHROb2RlPiA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBvcHRNZW51Lmxlbmd0aDsgaSsrLCBqKyspIHtcclxuICAgICAgICAgICAgaWYgKG9wdE1lbnVbaV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBvcHRDYXRlZ29yeVtqXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSwgY29sb3IpXHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYXdhaXQgc3VwcC5jcmVhdGVTdWJUZXh0KG9wdEFjdGlvbltqXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSArIDE1KVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0cmFja0RhdGEuaXNSaWd0aClcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0TWVudUNyZWF0ZS5wdXNoKGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdE1lbnVDcmVhdGUucHVzaChhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbllDYXRlZ29yeSArPSA0MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFja0RhdGEuaXNSaWd0aCkge1xyXG4gICAgICAgICAgICBpZiAob3B0TWVudUNyZWF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBwLmNoYW5nZURpcmVjdGlvbihvcHRNZW51Q3JlYXRlKVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRNZW51Q3JlYXRlLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKHN1cHAuY3JlYXRlQ29tcG9uZW50KFtvcHRNZW51Q3JlYXRlW2ldLCBvcHRNZW51Q3JlYXRlW2kgKyAxXV0sIG9wdE1lbnVDcmVhdGVbaV0ueCA8IG9wdE1lbnVDcmVhdGVbaSArIDFdLnggPyBvcHRNZW51Q3JlYXRlW2ldLnggOiBvcHRNZW51Q3JlYXRlW2kgKyAxXS54LCBvcHRNZW51Q3JlYXRlW2ldLnksIFwiVHJhY2tcIikpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1ZhbGlkYXRpb24gVHJhY2tcclxuICAgIGlmICh0cmFja0RhdGEudmFsaWRhdGlvbikge1xyXG4gICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDM1XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5OiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBjb25zdGFudHMuVkFMSURBQ0FPX0NBVEVHT1JJQSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSwgY29sb3IpXHJcbiAgICAgICAgdmFyIGFjdGlvbjogVGV4dE5vZGUgPSBhd2FpdCBzdXBwLmNyZWF0ZVN1YlRleHQoY29uc3RhbnRzLlZBTElEQUNBT19BQ0FPLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5ICsgMTUpXHJcbiAgICAgICAgYWN0aW9uLnggPSAoY2F0ZWdvcnkueCArIGNhdGVnb3J5LndpZHRoIC8gMikgLSAoYWN0aW9uLndpZHRoIC8gMilcclxuICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDY1XHJcbiAgICB9XHJcbiAgICAvL1N1Y2VzcyB0cmFja1xyXG4gICAgaWYgKHRyYWNrRGF0YS5zdWNlc3MpIHtcclxuICAgICAgICB2YXIgb3B0VHJhY2tpbnNTdWNlc3NvID0gW2NvbnN0YW50cy5TVF9RVUVTVElPTl9DQVRFR09SWSwgY29uc3RhbnRzLlNUX0FOU1dFUl9DQVRFR09SWSwgY29uc3RhbnRzLlNUX1JFQVNPTl9DQVRFR09SWV1cclxuICAgICAgICB2YXIgYXR0ZW5kYW50QWN0aW9uID0gdHJhY2tEYXRhLnN1Y2Vzc0Zsb3cgPyBjb25zdGFudHMuU1RfQk9UIDogY29uc3RhbnRzLlNUX0hVTUFOXHJcbiAgICAgICAgdmFyIG9wdFRLO1xyXG4gICAgICAgIHZhciBhY3Rpb25BbnN3ZXI7XHJcbiAgICAgICAgb3B0TWVudUNyZWF0ZSA9IFtdXHJcbiAgICAgICAgaWYgKHRyYWNrRGF0YS5zdWNlc3NTZWFyY2ggPT0gXCJDU0FUXCIpIHtcclxuICAgICAgICAgICAgYWN0aW9uQW5zd2VyID0gY29uc3RhbnRzLlNUX0NTQVRfQU5TV0VSX0FDVElPTlxyXG4gICAgICAgICAgICBvcHRUSyA9IGNvbnN0YW50cy5TVF9QMVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0cmFja0RhdGEuc3VjZXNzU2VhcmNoID09IFwiQ0VTXCIpIHtcclxuICAgICAgICAgICAgYWN0aW9uQW5zd2VyID0gY29uc3RhbnRzLlNUX0NFU19BTlNXRVJfQUNUSU9OXHJcbiAgICAgICAgICAgIG9wdFRLID0gY29uc3RhbnRzLlNUX1AyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhY3Rpb25BbnN3ZXIgPSBjb25zdGFudHMuU1RfTlBTX0FOU1dFUl9BQ1RJT05cclxuICAgICAgICAgICAgb3B0VEsgPSBjb25zdGFudHMuU1RfUDNcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFjdGlvbnNUSyA9IFtgJHtvcHRUS30gJHthdHRlbmRhbnRBY3Rpb259fENvdW50YCwgYCR7b3B0VEt9ICR7YXR0ZW5kYW50QWN0aW9ufXwke2FjdGlvbkFuc3dlcn1gLCBgJHtvcHRUS30gJHthdHRlbmRhbnRBY3Rpb259fCR7Y29uc3RhbnRzLlNUX1JFQVNPTl9BQ1RJT059YF1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdFRyYWNraW5zU3VjZXNzby5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNhdGVnb3J5ID0gYXdhaXQgc3VwcC5jcmVhdGVTdWNlc3NUZXh0KG9wdFRyYWNraW5zU3VjZXNzb1tpXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSwgY29sb3IpXHJcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhd2FpdCBzdXBwLmNyZWF0ZVN1YlRleHQoYWN0aW9uc1RLW2ldLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5ICsgMTUpXHJcbiAgICAgICAgICAgIGlmICghdHJhY2tEYXRhLmlzUmlndGgpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wdE1lbnVDcmVhdGUucHVzaChjYXRlZ29yeSlcclxuICAgICAgICAgICAgICAgIG9wdE1lbnVDcmVhdGUucHVzaChhY3Rpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zaXRpb25ZQ2F0ZWdvcnkgKz0gNDBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFja0RhdGEuaXNSaWd0aCkge1xyXG4gICAgICAgICAgICBzdXBwLmNoYW5nZURpcmVjdGlvbihvcHRNZW51Q3JlYXRlKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdE1lbnVDcmVhdGUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChzdXBwLmNyZWF0ZUNvbXBvbmVudChbb3B0TWVudUNyZWF0ZVtpXSwgb3B0TWVudUNyZWF0ZVtpICsgMV1dLCBvcHRNZW51Q3JlYXRlW2ldLnggPCBvcHRNZW51Q3JlYXRlW2kgKyAxXS54ID8gb3B0TWVudUNyZWF0ZVtpXS54IDogb3B0TWVudUNyZWF0ZVtpICsgMV0ueCwgb3B0TWVudUNyZWF0ZVtpXS55LCBcIlRyYWNrXCIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRyYWNrRGF0YS5saW5rKSB7XHJcbiAgICAgICAgcG9zaXRpb25ZQ2F0ZWdvcnkgKz0gMzVcclxuICAgICAgICB2YXIgY2F0ZWdvcnk6IFRleHROb2RlID0gYXdhaXQgc3VwcC5jcmVhdGVUZXh0KHRyYWNrQ2F0ZWdvcnksIGNvbnN0YW50cy5MSU5LX0NBVEVHT1JZLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBjb2xvcilcclxuICAgICAgICB2YXIgYWN0aW9uOiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlU3ViVGV4dChjb25zdGFudHMuTElOS19BQ1RJT04sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnkgKyAxNSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAodHJhY2tEYXRhLmlzUmlndGgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2VYPWNvbXBvbmVudHNbMF0/Y29tcG9uZW50c1swXS54K2NvbXBvbmVudHNbMF0ud2lkdGg6cG9zaXRpb25YXHJcbiAgICAgICAgICAgIHN1cHAuY2hhbmdlRGlyZWN0aW9uKFtjYXRlZ29yeSwgYWN0aW9uXSlcclxuICAgICAgICAgICAgcG9zaXRpb25YPWJhc2VYLWNhdGVnb3J5LndpZHRoXHJcbiAgICAgICAgICAgIGNhdGVnb3J5Lng9cG9zaXRpb25YXHJcbiAgICAgICAgICAgIGFjdGlvbi54PWJhc2VYLWFjdGlvbi53aWR0aFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDY1XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdEZyYW1lID0gc3VwcC5hZGROb2Rlc1RvRnJhbWUoY29tcG9uZW50cywgbGFzdEZyYW1lKVxyXG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gY29tcG9uZW50c1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUcmFja2luZ3MiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHMvY29sb3JzXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVUZXh0KG5hbWUsIHRpcG8sIHBvc2l0aW9uWCwgcG9zaXRpb25ZLCBjb2xvcj8pIHtcclxuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9KVxyXG4gICAgdmFyIHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICB0ZXh0Lm5hbWUgPSBcIm1lc3NhZ2VcIjtcclxuICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH1cclxuICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogY29sb3IgPyBjb2xvciA6IGNvbnN0YW50cy5ERUZBVUxUX0NPTE9SIH1dXHJcbiAgICB0ZXh0LmZvbnRTaXplID0gMTRcclxuICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIldJRFRIX0FORF9IRUlHSFRcIlxyXG4gICAgdGV4dC54ID0gKHBvc2l0aW9uWCk7XHJcbiAgICB0ZXh0LnkgPSAocG9zaXRpb25ZKTtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IGAke25hbWV9ICR7dGlwb31gXHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVTdWNlc3NUZXh0KHRpcG8sIHBvc2l0aW9uWCwgcG9zaXRpb25ZLCBjb2xvcj8pIHtcclxuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9KVxyXG4gICAgdmFyIHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICB0ZXh0Lm5hbWUgPSBcIm1lc3NhZ2VcIjtcclxuICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH1cclxuICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogY29sb3IgPyBjb2xvciA6IGNvbnN0YW50cy5ERUZBVUxUX0NPTE9SIH1dXHJcbiAgICB0ZXh0LmZvbnRTaXplID0gMTRcclxuICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIldJRFRIX0FORF9IRUlHSFRcIlxyXG4gICAgdGV4dC54ID0gKHBvc2l0aW9uWCk7XHJcbiAgICB0ZXh0LnkgPSAocG9zaXRpb25ZKTtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IGAke3RpcG99YFxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3ViVGV4dChuYW1lLCBwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xyXG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pXHJcbiAgICB2YXIgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIHRleHQubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfVxyXG4gICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNDksIGc6IDAuNDcsIGI6IDAuNDcgfSB9XVxyXG4gICAgdGV4dC5mb250U2l6ZSA9IDlcclxuICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIldJRFRIX0FORF9IRUlHSFRcIlxyXG4gICAgdGV4dC54ID0gKHBvc2l0aW9uWCk7XHJcbiAgICB0ZXh0LnkgPSAocG9zaXRpb25ZKTtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IGAke25hbWV9YFxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KG5vZGVzVG9Db21wb25lbnQsIHBvc2l0aW9uWCwgcG9zaXRpb25ZLCBJRCkge1xyXG4gICAgY29uc3Qgbm9kZXM6IEFycmF5PFRleHROb2RlPiA9IG5vZGVzVG9Db21wb25lbnQ7XHJcbiAgICB2YXIgY29tcG9uZW50ID0gZmlnbWEuY3JlYXRlQ29tcG9uZW50KClcclxuICAgIGNvbXBvbmVudC5uYW1lID0gSUQ7XHJcbiAgICBjb21wb25lbnQueCA9IHBvc2l0aW9uWDtcclxuICAgIGNvbXBvbmVudC55ID0gcG9zaXRpb25ZO1xyXG4gICAgdmFyIHdpZHRoID0gbm9kZXNbMF0ud2lkdGggPiBub2Rlc1sxXS53aWR0aCA/IG5vZGVzWzBdLndpZHRoIDogbm9kZXNbMV0ud2lkdGhcclxuICAgIHZhciBoZWlndGggPSBub2Rlc1swXS5oZWlnaHQgKyBub2Rlc1sxXS5oZWlnaHRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXNUb0NvbXBvbmVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChub2Rlc1tpXSlcclxuICAgICAgICBub2Rlc1tpXS54IC09IGNvbXBvbmVudC54XHJcbiAgICAgICAgbm9kZXNbaV0ueSAtPSBjb21wb25lbnQueVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyh3aWR0aCwgaGVpZ3RoKTtcclxuICAgIHJldHVybiBjb21wb25lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTm9kZXNUb0ZyYW1lKG5vZGVzOiBBcnJheTxDb21wb25lbnROb2RlPiwgbGFzdEZyYW1lPzogc3RyaW5nKSB7XHJcbiAgICBpZiAobGFzdEZyYW1lKSB7XHJcbiAgICAgICAgdmFyIGZyYW1lID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZShlID0+IGUubmFtZSA9PSBsYXN0RnJhbWUpIGFzIEZyYW1lTm9kZVxyXG4gICAgICAgIGlmIChiZXR3ZW4oZnJhbWUsIG5vZGVzWzBdKSkge1xyXG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjKVxyXG4gICAgICAgICAgICAgICAgYy54IC09IGZyYW1lLnhcclxuICAgICAgICAgICAgICAgIGMueSAtPSBmcmFtZS55XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmcmFtZS5uYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmcmFtZXNJblBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKG4gPT4gbi50eXBlID09PSBcIkZSQU1FXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmFtZXNJblBhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gZnJhbWVzSW5QYWdlW2ldIGFzIEZyYW1lTm9kZVxyXG4gICAgICAgICAgICBpZiAoYmV0d2VuKGZyYW1lLCBub2Rlc1swXSkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGVzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjKVxyXG4gICAgICAgICAgICAgICAgICAgIGMueCAtPSBmcmFtZS54XHJcbiAgICAgICAgICAgICAgICAgICAgYy55IC09IGZyYW1lLnlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWUubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYmV0d2VuKGZyYW1lOiBGcmFtZU5vZGUsIG5vZGU6IENvbXBvbmVudE5vZGUpIHtcclxuICAgIGlmIChub2RlLnkgPj0gZnJhbWUueSAmJiBub2RlLnkgPD0gZnJhbWUueSArIGZyYW1lLmhlaWdodCkge1xyXG4gICAgICAgIGlmIChub2RlLnggPj0gZnJhbWUueCAmJiBub2RlLnggPD0gZnJhbWUueCArIGZyYW1lLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiB0cmFja2luZ0NvbG9yKHR5cGU6IHN0cmluZykge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIm5ld1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzLkRFRkFVTFRfQ09MT1I7XHJcbiAgICAgICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHMuRVJST1NfQ09MT1I7XHJcbiAgICAgICAgY2FzZSBcInZhbGlkYWRlZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzLlZBTElEQURFRF9DT0xPUjtcclxuICAgICAgICBjYXNlIFwic3VjZXNzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHMuU1VDRVNTX0NPTE9SO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHMuREVGQVVMVF9DT0xPUjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24oZWxlbWVudHM6IEFycmF5PFRleHROb2RlPikge1xyXG4gICAgdmFyIHBvc01haW9yO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgcG9zTWFpb3IgPSBpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS53aWR0aCA+IGVsZW1lbnRzW3Bvc01haW9yXS53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgcG9zTWFpb3IgPSBpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgeFJlZiA9IGVsZW1lbnRzW3Bvc01haW9yXS54ICsgZWxlbWVudHNbcG9zTWFpb3JdLndpZHRoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpICE9IHBvc01haW9yKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLnggPSB4UmVmIC0gZWxlbWVudHNbaV0ud2lkdGhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsdWVCYXNlZE9uUmNvbG9yKGNvbG9yKSB7ICAgIFxyXG4gICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgIGNhc2UgY29uc3RhbnRzLkRFRkFVTFRfQ09MT1IucjogcmV0dXJuIFwibmV3XCJcclxuICAgICAgICBjYXNlIGNvbnN0YW50cy5FUlJPU19DT0xPUi5yOiByZXR1cm4gXCJlcnJvclwiXHJcbiAgICAgICAgY2FzZSBjb25zdGFudHMuVkFMSURBREVEX0NPTE9SLnI6IHJldHVybiBcInZhbGlkYWRlZFwiXHJcbiAgICAgICAgY2FzZSBjb25zdGFudHMuU1VDRVNTX0NPTE9SLnI6IHJldHVybiBcInN1Y2Vzc1wiXHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIFwibmV3XCJcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBjcmVhdGVUZXh0IH1cclxuZXhwb3J0IHsgY3JlYXRlU3VjZXNzVGV4dCB9XHJcbmV4cG9ydCB7IGNyZWF0ZVN1YlRleHQgfVxyXG5leHBvcnQgeyBjcmVhdGVDb21wb25lbnQgfVxyXG5leHBvcnQgeyBhZGROb2Rlc1RvRnJhbWUgfVxyXG5leHBvcnQgeyBiZXR3ZW4gfVxyXG5leHBvcnQgeyB0cmFja2luZ0NvbG9yIH1cclxuZXhwb3J0IHsgY2hhbmdlRGlyZWN0aW9uIH1cclxuZXhwb3J0IHt2YWx1ZUJhc2VkT25SY29sb3J9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgdWlXaWR0aCA9IDQwMFxyXG52YXIgdWlIZWlndGggPSAzOTBcclxudmFyIGF1dG8gPSB0cnVlO1xyXG52YXIgbm9kZXNTZWxlY3RlZHMgPSBbXVxyXG5cclxuaW1wb3J0IGNyZWF0ZVRyYWNraW5ncyBmcm9tICcuL2Z1bmN0aW9ucy9jcmVhdGVUcmFja2luZydcclxuaW1wb3J0IHsgdHJhY2tpbmdDb2xvciwgdmFsdWVCYXNlZE9uUmNvbG9yIH0gZnJvbSAnLi9mdW5jdGlvbnMvc3VwcG9ydEZ1bmN0aW9ucydcclxuXHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XHJcbmZpZ21hLnVpLnJlc2l6ZSh1aVdpZHRoLCB1aUhlaWd0aClcclxuXHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XHJcbiAgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlVHJhY2tpbmcnKSB7XHJcbiAgICBjcmVhdGVUcmFja2luZ3MobXNnLnRyYWNrRGF0YSlcclxuICB9XHJcbiAgaWYgKG1zZy50eXBlID09PSAnY2hhbmdlV2luZG93U2l6ZScpIHtcclxuICAgIHZhciB7IGNhbkV4cGFuZCwgc2l6ZSB9ID0gbXNnLm1lc3NhZ2VcclxuICAgIGlmIChjYW5FeHBhbmQpIHtcclxuICAgICAgdWlIZWlndGggKz0gc2l6ZVxyXG4gICAgICBmaWdtYS51aS5yZXNpemUodWlXaWR0aCwgdWlIZWlndGgpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdWlIZWlndGggLT0gc2l6ZVxyXG4gICAgICBmaWdtYS51aS5yZXNpemUodWlXaWR0aCwgdWlIZWlndGgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChtc2cudHlwZSA9PT0gXCJjaGFuZ2VTZWxlY3Rpb25Db2xvcnNcIikge1xyXG4gICAgbm9kZXNTZWxlY3RlZHMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgdmFyIHRleHROb2RlID0gbm9kZS5jaGlsZHJlblswXSBhcyBUZXh0Tm9kZVxyXG4gICAgICB2YXIgdGV4dE5vZGVDbG9uZWQgPSB0ZXh0Tm9kZS5jbG9uZSgpXHJcbiAgICAgIHRleHROb2RlQ2xvbmVkLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHRyYWNraW5nQ29sb3IobXNnLmlkKSB9XVxyXG4gICAgICBub2RlLmNoaWxkcmVuWzBdLmZpbGxzID0gdGV4dE5vZGVDbG9uZWQuZmlsbHNcclxuICAgICAgdGV4dE5vZGVDbG9uZWQucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgfVxyXG4gIGlmIChtc2cudHlwZSA9PT0gXCJjaGFuZ2VBdXRvXCIpIHtcclxuICAgIGF1dG8gPSBtc2cuYXV0b1xyXG4gICAgaWYoIWF1dG8pe1xyXG4gICAgICBub2Rlc1NlbGVjdGVkcz1bXVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcclxuICBpZiAoYXV0bykge1xyXG4gICAgbm9kZXNTZWxlY3RlZHMgPSBbXVxyXG4gICAgdmFyIG5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLnNsaWNlKClcclxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChub2Rlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGlmICgobm9kZXNbMF0udHlwZSA9PSBcIkNPTVBPTkVOVFwiIHx8IG5vZGVzWzBdLnR5cGUgPT0gXCJJTlNUQU5DRVwiKSAmJiBub2Rlc1swXS5uYW1lLm1hdGNoKC90cmFjay9pZykpIHtcclxuICAgICAgICAgIG5vZGUgPSBub2Rlc1swXSBhcyBDb21wb25lbnROb2RlXHJcbiAgICAgICAgICB2YXIgdGV4dE5vZGUgPSBub2RlLmNoaWxkcmVuWzBdIGFzIFRleHROb2RlXHJcbiAgICAgICAgICB2YXIgY2hhbmdlQ2F0ZWdvcnkgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiY2hhbmdlIENhdGVnb3J5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0ZXh0Tm9kZS5jaGFyYWN0ZXJzLnNwbGl0KC9leGliaWNhb3xzZWxlY2FvfGluZXNwZXJhZG98aW5wdXQgaW5lc3BlcmFkb3xxdWVzdGlvbnxhbnN3ZXJ8cmVhc29ufG9yaWdlbXxpbnB1dHx2YWxpZGFjYW8vaWcpWzBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShjaGFuZ2VDYXRlZ29yeSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGF2YWlsYWJsZSA9IHRydWVcclxuICAgICAgdmFyIHNhbWVDb2xvciA9IHRydWVcclxuICAgICAgdmFyIGNvbG9yXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldXHJcbiAgICAgICAgbm9kZXNTZWxlY3RlZHMucHVzaChub2RlKVxyXG4gICAgICAgIGlmICghKChub2RlLnR5cGUgPT0gXCJDT01QT05FTlRcIiB8fCBub2RlLnR5cGUgPT0gXCJJTlNUQU5DRVwiKSAmJiBub2RlLm5hbWUubWF0Y2goL3RyYWNrL2lnKSkpIHtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzYW1lQ29sb3IpIHtcclxuICAgICAgICAgIGlmIChpICE9IDApIHtcclxuICAgICAgICAgICAgdmFyIHRleHROb2RlID0gbm9kZS5jaGlsZHJlblswXSBhcyBUZXh0Tm9kZVxyXG4gICAgICAgICAgICBpZiAodGV4dE5vZGUuZmlsbHNbMF0uY29sb3IuciAhPSBjb2xvci5yKVxyXG4gICAgICAgICAgICAgIHNhbWVDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHRleHROb2RlID0gbm9kZS5jaGlsZHJlblswXSBhcyBUZXh0Tm9kZVxyXG4gICAgICAgICAgICBjb2xvciA9IHRleHROb2RlLmZpbGxzWzBdLmNvbG9yXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhdmFpbGFibGUpIHtcclxuICAgICAgICBpZiAoc2FtZUNvbG9yKSB7XHJcbiAgICAgICAgICB2YXIgbXNnID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBcImNoYW5nZSB0eXBlXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZUJhc2VkT25SY29sb3IoY29sb3IucilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG1zZylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIGRpZmZNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBcImNoYW5nZSBkaWZmIGNvbG9yc1wiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoZGlmZk1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGVzU2VsZWN0ZWRzID0gW11cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNoYW5nZSA9IHtcclxuICAgICAgICB0eXBlOiBcImNoYW5nZVNlbGVjdGlvblwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGNoYW5nZSlcclxuICAgIH1cclxuICB9XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9