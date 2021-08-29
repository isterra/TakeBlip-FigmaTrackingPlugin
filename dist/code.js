/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const constants = {
    DEFAULT_COLOR: { r: 0.9344978332519531, g: 0.6596454977989197, b: 0 },
    ERROS_COLOR: { r: 0.8313725590705872, g: 0, b: 0 },
    VALIDADED_COLOR: { r: 0.12941177189350128, g: 0.5882353186607361, b: 0.32549020648002625 },
    SUCESS_COLOR: { r: 0.2078431397676468, g: 0.7176470756530762, b: 0.9450980424880981 },
    ORIGEM_ORIGEM_CATEGORIA: "origem",
    ORIGEM_ORIGEM_ACAO: "[[Bot de origem]] | [[bloco de origem]]",
    ORIGEM_EXCECAO_CATEGORIA: "origem",
    ORIGEM_EXCECAO_ACAO: "[[Bot de origem]] | [[bloco de origem]] | [[Input do usuario na origem]]",
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
    ST_REASON_ACTION: "Score (survey answer)|User input"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constants);


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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
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
        //OrigeTrack
        if (trackData.origin) {
            var categoryName = trackData.originCategory ? _constants__WEBPACK_IMPORTED_MODULE_1__.default.ORIGEM_ORIGEM_CATEGORIA : _constants__WEBPACK_IMPORTED_MODULE_1__.default.ORIGEM_EXCECAO_CATEGORIA;
            var actionName = trackData.originCategory ? _constants__WEBPACK_IMPORTED_MODULE_1__.default.ORIGEM_ORIGEM_ACAO : _constants__WEBPACK_IMPORTED_MODULE_1__.default.ORIGEM_EXCECAO_ACAO;
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
            var optCategory = [_constants__WEBPACK_IMPORTED_MODULE_1__.default.EXIBICAO_CATEGORIA, _constants__WEBPACK_IMPORTED_MODULE_1__.default.SELECAO_CATEGORIA, _constants__WEBPACK_IMPORTED_MODULE_1__.default.INESPERADO_CATEGORIA, _constants__WEBPACK_IMPORTED_MODULE_1__.default.INPUT_CATEGORIA];
            var optAction = [_constants__WEBPACK_IMPORTED_MODULE_1__.default.EXIBICAO_ACAO, _constants__WEBPACK_IMPORTED_MODULE_1__.default.SELECAO_ACAO, _constants__WEBPACK_IMPORTED_MODULE_1__.default.INESPERADO_ACAO, _constants__WEBPACK_IMPORTED_MODULE_1__.default.INPUT_ACAO];
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
            var category = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createText(trackCategory, _constants__WEBPACK_IMPORTED_MODULE_1__.default.VALIDACAO_CATEGORIA, positionX, positionYCategory);
            var action = yield _supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createSubText(_constants__WEBPACK_IMPORTED_MODULE_1__.default.VALIDACAO_ACAO, positionX, positionYCategory + 15);
            action.x = (category.x + category.width / 2) - (action.width / 2);
            components.push(_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.createComponent([category, action], positionX, positionYCategory, "Tracking"));
            positionYCategory += 65;
        }
        //Sucess track
        if (trackData.sucess) {
            var optTrackinsSucesso = [_constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_QUESTION_CATEGORY, _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_ANSWER_CATEGORY, _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_REASON_CATEGORY];
            var attendantAction = trackData.sucessFlow ? _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_BOT : _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_HUMAN;
            var optTK;
            var actionAnswer;
            optMenuCreate = [];
            if (trackData.sucessSearch == "CSAT") {
                actionAnswer = _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_CSAT_ANSWER_ACTION;
                optTK = _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_P1;
            }
            else if (trackData.sucessSearch == "CES") {
                actionAnswer = _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_CES_ANSWER_ACTION;
                optTK = _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_P2;
            }
            else {
                actionAnswer = _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_NPS_ANSWER_ACTION;
                optTK = _constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_P3;
            }
            var actionsTK = [`${optTK} ${attendantAction}|Count`, `${optTK} ${attendantAction}|${actionAnswer}`, `${optTK} ${attendantAction}|${_constants__WEBPACK_IMPORTED_MODULE_1__.default.ST_REASON_ACTION}`];
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
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
        text.fills = [{ type: 'SOLID', color: color ? color : { r: 0.91, g: 0.67, b: 0 } }];
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
        text.fills = [{ type: 'SOLID', color: color ? color : { r: 0.91, g: 0.67, b: 0 } }];
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
            return _constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_COLOR;
        case "error":
            return _constants__WEBPACK_IMPORTED_MODULE_0__.default.ERROS_COLOR;
        case "validaded":
            return _constants__WEBPACK_IMPORTED_MODULE_0__.default.VALIDADED_COLOR;
        case "sucess":
            return _constants__WEBPACK_IMPORTED_MODULE_0__.default.SUCESS_COLOR;
        default:
            return _constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_COLOR;
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
        case _constants__WEBPACK_IMPORTED_MODULE_0__.default.DEFAULT_COLOR.r: return "new";
        case _constants__WEBPACK_IMPORTED_MODULE_0__.default.ERROS_COLOR.r: return "error";
        case _constants__WEBPACK_IMPORTED_MODULE_0__.default.VALIDADED_COLOR.r: return "validaded";
        case _constants__WEBPACK_IMPORTED_MODULE_0__.default.SUCESS_COLOR.r: return "sucess";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vdHJhY2tpbmdibGlwLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVRyYWNraW5nLnRzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9mdW5jdGlvbnMvc3VwcG9ydEZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJhY2tpbmdibGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHM9e1xyXG5cclxuICAgIERFRkFVTFRfQ09MT1I6eyByOiAwLjkzNDQ5NzgzMzI1MTk1MzEsIGc6IDAuNjU5NjQ1NDk3Nzk4OTE5NywgYjogMCB9LFxyXG4gICAgRVJST1NfQ09MT1I6eyByOiAwLjgzMTM3MjU1OTA3MDU4NzIsIGc6IDAsIGI6IDAgfSxcclxuICAgIFZBTElEQURFRF9DT0xPUjp7IHI6IDAuMTI5NDExNzcxODkzNTAxMjgsIGc6IDAuNTg4MjM1MzE4NjYwNzM2MSwgYjogMC4zMjU0OTAyMDY0ODAwMjYyNSB9LFxyXG4gICAgU1VDRVNTX0NPTE9SOnsgcjogMC4yMDc4NDMxMzk3Njc2NDY4LCBnOiAwLjcxNzY0NzA3NTY1MzA3NjIsIGI6IDAuOTQ1MDk4MDQyNDg4MDk4MSB9LFxyXG4gICAgXHJcbiAgICBPUklHRU1fT1JJR0VNX0NBVEVHT1JJQTpcIm9yaWdlbVwiLFxyXG4gICAgT1JJR0VNX09SSUdFTV9BQ0FPOlwiW1tCb3QgZGUgb3JpZ2VtXV0gfCBbW2Jsb2NvIGRlIG9yaWdlbV1dXCIsXHJcbiAgICBcclxuICAgIE9SSUdFTV9FWENFQ0FPX0NBVEVHT1JJQTpcIm9yaWdlbVwiLFxyXG4gICAgT1JJR0VNX0VYQ0VDQU9fQUNBTzpcIltbQm90IGRlIG9yaWdlbV1dIHwgW1tibG9jbyBkZSBvcmlnZW1dXSB8IFtbSW5wdXQgZG8gdXN1YXJpbyBuYSBvcmlnZW1dXVwiLFxyXG4gICAgXHJcbiAgICBFWElCSUNBT19DQVRFR09SSUE6XCJleGliaWNhb1wiLFxyXG4gICAgRVhJQklDQU9fQUNBTzpcIkV4aWJpY2FvXCIsXHJcbiAgICBcclxuICAgIFNFTEVDQU9fQ0FURUdPUklBOlwic2VsZWNhb1wiLFxyXG4gICAgU0VMRUNBT19BQ0FPOlwiW1tPcGNvZXMgZG8gbWVudV1dOyBpbnB1dCBpbmVzcGVyYWRvXCIsXHJcbiAgICBcclxuICAgIElORVNQRVJBRE9fQ0FURUdPUklBOlwiaW5lc3BlcmFkb1wiLFxyXG4gICAgSU5FU1BFUkFET19BQ0FPOlwiW1tJbnB1dCBpbmVzcGVyYWRvXV1cIixcclxuICAgIFxyXG4gICAgSU5QVVRfQ0FURUdPUklBOlwiaW5wdXRcIixcclxuICAgIElOUFVUX0FDQU86XCJbW0lucHV0IGRvIHVzdWFyaW9dXSB8IGludmFsaWRvO3ZhbGlkb1wiLFxyXG5cclxuICAgIFZBTElEQUNBT19DQVRFR09SSUE6XCJ2YWxpZGFjYW9cIixcclxuICAgIFZBTElEQUNBT19BQ0FPOlwiU2ltOyBuYW9cIixcclxuICAgIFxyXG4gICAgU1RfUVVFU1RJT05fQ0FURUdPUlk6XCJTVCBzdXJ2ZXkgcXVlc3Rpb25cIixcclxuICAgIFNUX0FOU1dFUl9DQVRFR09SWTpcIlNUIHN1cnZleSBhbnN3ZXJcIixcclxuICAgIFNUX1JFQVNPTl9DQVRFR09SWTpcIlNUIHN1cnZleSByZWFzb25cIixcclxuXHJcbiAgICBTVF9QMTpcIkNTQVRcIixcclxuICAgIFNUX1AyOlwiQ0VTXCIsXHJcbiAgICBTVF9QMzpcIk5QU1wiLFxyXG5cclxuICAgIFNUX0hVTUFOOlwiSHVtYW5cIixcclxuICAgIFNUX0JPVDpcIkJvdFwiLFxyXG5cclxuICAgIFNUX1FVRVNUSU9OX0FDVElPTjpcIkNvdW50XCIsXHJcbiAgICBTVF9DU0FUX0FOU1dFUl9BQ1RJT046XCJWZXJ5IGRpc3NhdGlzZmllZCwgRGlzc2F0aXNmaWVkLCBOZXV0cmFsLCBTYXRpc2ZpZWQsIFZlcnkgc2F0aXNmaWVkXCIsXHJcbiAgICBTVF9DRVNfQU5TV0VSX0FDVElPTjpcIlZlcnkgZGlmZmljdWx0LCBEaWZmaWN1bHQsIE5ldXRyYWwsIEVhc3ksIFZlcnkgZWFzeSBcIixcclxuICAgIFNUX05QU19BTlNXRVJfQUNUSU9OOlwiRGV0cmFjdG9ycywgUGFzc2l2ZXMgb3IgUHJvbW90ZXJzXCIsXHJcblxyXG4gICAgU1RfUkVBU09OX0FDVElPTjpcIlNjb3JlIChzdXJ2ZXkgYW5zd2VyKXxVc2VyIGlucHV0XCJcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29uc3RhbnRzIiwiaW1wb3J0ICogYXMgc3VwcCBmcm9tICcuL3N1cHBvcnRGdW5jdGlvbnMnO1xyXG5cclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbnZhciBsYXN0RnJhbWVcclxuXHJcbmNvbnN0IGNyZWF0ZVRyYWNraW5ncyA9IGFzeW5jIGZ1bmN0aW9uICh0cmFja0RhdGEpIHtcclxuICAgIHZhciBwb3NpdGlvblggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueFxyXG4gICAgdmFyIHBvc2l0aW9uWUNhdGVnb3J5ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnlcclxuICAgIHZhciBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnROb2RlPiA9IFtdXHJcbiAgICB2YXIgY29sb3IgPSBzdXBwLnRyYWNraW5nQ29sb3IodHJhY2tEYXRhLnRyYWNrQ29sb3IpXHJcbiAgICB2YXIgdHJhY2tDYXRlZ29yeSA9IHRyYWNrRGF0YS5jYXRlZ29yeVxyXG5cclxuICAgIC8vT3JpZ2VUcmFja1xyXG4gICAgaWYgKHRyYWNrRGF0YS5vcmlnaW4pIHtcclxuICAgICAgICB2YXIgY2F0ZWdvcnlOYW1lID0gdHJhY2tEYXRhLm9yaWdpbkNhdGVnb3J5ID8gY29uc3RhbnRzLk9SSUdFTV9PUklHRU1fQ0FURUdPUklBIDogY29uc3RhbnRzLk9SSUdFTV9FWENFQ0FPX0NBVEVHT1JJQVxyXG4gICAgICAgIHZhciBhY3Rpb25OYW1lID0gdHJhY2tEYXRhLm9yaWdpbkNhdGVnb3J5ID8gY29uc3RhbnRzLk9SSUdFTV9PUklHRU1fQUNBTyA6IGNvbnN0YW50cy5PUklHRU1fRVhDRUNBT19BQ0FPXHJcbiAgICAgICAgdmFyIGNhdGVnb3J5OiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBjYXRlZ29yeU5hbWUsIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIGNvbG9yKVxyXG4gICAgICAgIHZhciBhY3Rpb246IFRleHROb2RlID0gYXdhaXQgc3VwcC5jcmVhdGVTdWJUZXh0KGFjdGlvbk5hbWUsIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnkgKyAxNSlcclxuICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDY1XHJcbiAgICAgICAgaWYgKHRyYWNrRGF0YS5pc1JpZ3RoKVxyXG4gICAgICAgICAgICBzdXBwLmNoYW5nZURpcmVjdGlvbihbY2F0ZWdvcnksIGFjdGlvbl0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9NZW51IFRyYWNraW5nc1xyXG4gICAgaWYgKHRyYWNrRGF0YS5wcmluY2lwYWwpIHtcclxuICAgICAgICB2YXIgb3B0TWVudSA9IHRyYWNrRGF0YS5wcmluY2lwYWxcclxuICAgICAgICB2YXIgb3B0Q2F0ZWdvcnkgPSBbY29uc3RhbnRzLkVYSUJJQ0FPX0NBVEVHT1JJQSwgY29uc3RhbnRzLlNFTEVDQU9fQ0FURUdPUklBLCBjb25zdGFudHMuSU5FU1BFUkFET19DQVRFR09SSUEsIGNvbnN0YW50cy5JTlBVVF9DQVRFR09SSUFdXHJcbiAgICAgICAgdmFyIG9wdEFjdGlvbiA9IFtjb25zdGFudHMuRVhJQklDQU9fQUNBTywgY29uc3RhbnRzLlNFTEVDQU9fQUNBTywgY29uc3RhbnRzLklORVNQRVJBRE9fQUNBTywgY29uc3RhbnRzLklOUFVUX0FDQU9dXHJcbiAgICAgICAgdmFyIG9wdE1lbnVDcmVhdGU6IEFycmF5PFRleHROb2RlPiA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBvcHRNZW51Lmxlbmd0aDsgaSsrLCBqKyspIHtcclxuICAgICAgICAgICAgaWYgKG9wdE1lbnVbaV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBvcHRDYXRlZ29yeVtqXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSwgY29sb3IpXHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYXdhaXQgc3VwcC5jcmVhdGVTdWJUZXh0KG9wdEFjdGlvbltqXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSArIDE1KVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0cmFja0RhdGEuaXNSaWd0aClcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0TWVudUNyZWF0ZS5wdXNoKGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdE1lbnVDcmVhdGUucHVzaChhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbllDYXRlZ29yeSArPSA0MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFja0RhdGEuaXNSaWd0aCkge1xyXG4gICAgICAgICAgICBpZiAob3B0TWVudUNyZWF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBwLmNoYW5nZURpcmVjdGlvbihvcHRNZW51Q3JlYXRlKVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRNZW51Q3JlYXRlLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKHN1cHAuY3JlYXRlQ29tcG9uZW50KFtvcHRNZW51Q3JlYXRlW2ldLCBvcHRNZW51Q3JlYXRlW2kgKyAxXV0sIG9wdE1lbnVDcmVhdGVbaV0ueCA8IG9wdE1lbnVDcmVhdGVbaSArIDFdLnggPyBvcHRNZW51Q3JlYXRlW2ldLnggOiBvcHRNZW51Q3JlYXRlW2kgKyAxXS54LCBvcHRNZW51Q3JlYXRlW2ldLnksIFwiVHJhY2tcIikpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1ZhbGlkYXRpb24gVHJhY2tcclxuICAgIGlmICh0cmFja0RhdGEudmFsaWRhdGlvbikge1xyXG4gICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDM1XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5OiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBjb25zdGFudHMuVkFMSURBQ0FPX0NBVEVHT1JJQSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSlcclxuICAgICAgICB2YXIgYWN0aW9uOiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlU3ViVGV4dChjb25zdGFudHMuVkFMSURBQ0FPX0FDQU8sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnkgKyAxNSlcclxuICAgICAgICBhY3Rpb24ueCA9IChjYXRlZ29yeS54ICsgY2F0ZWdvcnkud2lkdGggLyAyKSAtIChhY3Rpb24ud2lkdGggLyAyKVxyXG4gICAgICAgIGNvbXBvbmVudHMucHVzaChzdXBwLmNyZWF0ZUNvbXBvbmVudChbY2F0ZWdvcnksIGFjdGlvbl0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIFwiVHJhY2tpbmdcIikpXHJcbiAgICAgICAgcG9zaXRpb25ZQ2F0ZWdvcnkgKz0gNjVcclxuICAgIH1cclxuICAgIC8vU3VjZXNzIHRyYWNrXHJcbiAgICBpZiAodHJhY2tEYXRhLnN1Y2Vzcykge1xyXG4gICAgICAgIHZhciBvcHRUcmFja2luc1N1Y2Vzc28gPSBbY29uc3RhbnRzLlNUX1FVRVNUSU9OX0NBVEVHT1JZLCBjb25zdGFudHMuU1RfQU5TV0VSX0NBVEVHT1JZLCBjb25zdGFudHMuU1RfUkVBU09OX0NBVEVHT1JZXVxyXG4gICAgICAgIHZhciBhdHRlbmRhbnRBY3Rpb24gPSB0cmFja0RhdGEuc3VjZXNzRmxvdyA/IGNvbnN0YW50cy5TVF9CT1QgOiBjb25zdGFudHMuU1RfSFVNQU5cclxuICAgICAgICB2YXIgb3B0VEs7XHJcbiAgICAgICAgdmFyIGFjdGlvbkFuc3dlcjtcclxuICAgICAgICBvcHRNZW51Q3JlYXRlID0gW11cclxuICAgICAgICBpZiAodHJhY2tEYXRhLnN1Y2Vzc1NlYXJjaCA9PSBcIkNTQVRcIikge1xyXG4gICAgICAgICAgICBhY3Rpb25BbnN3ZXIgPSBjb25zdGFudHMuU1RfQ1NBVF9BTlNXRVJfQUNUSU9OXHJcbiAgICAgICAgICAgIG9wdFRLID0gY29uc3RhbnRzLlNUX1AxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRyYWNrRGF0YS5zdWNlc3NTZWFyY2ggPT0gXCJDRVNcIikge1xyXG4gICAgICAgICAgICBhY3Rpb25BbnN3ZXIgPSBjb25zdGFudHMuU1RfQ0VTX0FOU1dFUl9BQ1RJT05cclxuICAgICAgICAgICAgb3B0VEsgPSBjb25zdGFudHMuU1RfUDJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdGlvbkFuc3dlciA9IGNvbnN0YW50cy5TVF9OUFNfQU5TV0VSX0FDVElPTlxyXG4gICAgICAgICAgICBvcHRUSyA9IGNvbnN0YW50cy5TVF9QM1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWN0aW9uc1RLID0gW2Ake29wdFRLfSAke2F0dGVuZGFudEFjdGlvbn18Q291bnRgLCBgJHtvcHRUS30gJHthdHRlbmRhbnRBY3Rpb259fCR7YWN0aW9uQW5zd2VyfWAsIGAke29wdFRLfSAke2F0dGVuZGFudEFjdGlvbn18JHtjb25zdGFudHMuU1RfUkVBU09OX0FDVElPTn1gXVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0VHJhY2tpbnNTdWNlc3NvLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2F0ZWdvcnkgPSBhd2FpdCBzdXBwLmNyZWF0ZVN1Y2Vzc1RleHQob3B0VHJhY2tpbnNTdWNlc3NvW2ldLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBjb2xvcilcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGF3YWl0IHN1cHAuY3JlYXRlU3ViVGV4dChhY3Rpb25zVEtbaV0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnkgKyAxNSlcclxuICAgICAgICAgICAgaWYgKCF0cmFja0RhdGEuaXNSaWd0aClcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChzdXBwLmNyZWF0ZUNvbXBvbmVudChbY2F0ZWdvcnksIGFjdGlvbl0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIFwiVHJhY2tpbmdcIikpXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0TWVudUNyZWF0ZS5wdXNoKGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgb3B0TWVudUNyZWF0ZS5wdXNoKGFjdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3NpdGlvbllDYXRlZ29yeSArPSA0MFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYWNrRGF0YS5pc1JpZ3RoKSB7XHJcbiAgICAgICAgICAgIHN1cHAuY2hhbmdlRGlyZWN0aW9uKG9wdE1lbnVDcmVhdGUpXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0TWVudUNyZWF0ZS5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKHN1cHAuY3JlYXRlQ29tcG9uZW50KFtvcHRNZW51Q3JlYXRlW2ldLCBvcHRNZW51Q3JlYXRlW2kgKyAxXV0sIG9wdE1lbnVDcmVhdGVbaV0ueCA8IG9wdE1lbnVDcmVhdGVbaSArIDFdLnggPyBvcHRNZW51Q3JlYXRlW2ldLnggOiBvcHRNZW51Q3JlYXRlW2kgKyAxXS54LCBvcHRNZW51Q3JlYXRlW2ldLnksIFwiVHJhY2tcIikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0RnJhbWUgPSBzdXBwLmFkZE5vZGVzVG9GcmFtZShjb21wb25lbnRzLCBsYXN0RnJhbWUpXHJcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBjb21wb25lbnRzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRyYWNraW5ncyIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGV4dChuYW1lLCB0aXBvLCBwb3NpdGlvblgsIHBvc2l0aW9uWSwgY29sb3I/KSB7XHJcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfSlcclxuICAgIHZhciB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgdGV4dC5uYW1lID0gXCJtZXNzYWdlXCI7XHJcbiAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9XHJcbiAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yID8gY29sb3IgOiB7IHI6IDAuOTEsIGc6IDAuNjcsIGI6IDAgfSB9XVxyXG4gICAgdGV4dC5mb250U2l6ZSA9IDE0XHJcbiAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJXSURUSF9BTkRfSEVJR0hUXCJcclxuICAgIHRleHQueCA9IChwb3NpdGlvblgpO1xyXG4gICAgdGV4dC55ID0gKHBvc2l0aW9uWSk7XHJcbiAgICB0ZXh0LmNoYXJhY3RlcnMgPSBgJHtuYW1lfSAke3RpcG99YFxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3VjZXNzVGV4dCh0aXBvLCBwb3NpdGlvblgsIHBvc2l0aW9uWSwgY29sb3I/KSB7XHJcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfSlcclxuICAgIHZhciB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgdGV4dC5uYW1lID0gXCJtZXNzYWdlXCI7XHJcbiAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9XHJcbiAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yID8gY29sb3IgOiB7IHI6IDAuOTEsIGc6IDAuNjcsIGI6IDAgfSB9XVxyXG4gICAgdGV4dC5mb250U2l6ZSA9IDE0XHJcbiAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJXSURUSF9BTkRfSEVJR0hUXCJcclxuICAgIHRleHQueCA9IChwb3NpdGlvblgpO1xyXG4gICAgdGV4dC55ID0gKHBvc2l0aW9uWSk7XHJcbiAgICB0ZXh0LmNoYXJhY3RlcnMgPSBgJHt0aXBvfWBcclxuICAgIHJldHVybiB0ZXh0O1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN1YlRleHQobmFtZSwgcG9zaXRpb25YLCBwb3NpdGlvblkpIHtcclxuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KVxyXG4gICAgdmFyIHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICB0ZXh0Lm5hbWUgPSBcIm1lc3NhZ2VcIjtcclxuICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH1cclxuICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjQ5LCBnOiAwLjQ3LCBiOiAwLjQ3IH0gfV1cclxuICAgIHRleHQuZm9udFNpemUgPSA5XHJcbiAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gXCJXSURUSF9BTkRfSEVJR0hUXCJcclxuICAgIHRleHQueCA9IChwb3NpdGlvblgpO1xyXG4gICAgdGV4dC55ID0gKHBvc2l0aW9uWSk7XHJcbiAgICB0ZXh0LmNoYXJhY3RlcnMgPSBgJHtuYW1lfWBcclxuICAgIHJldHVybiB0ZXh0O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChub2Rlc1RvQ29tcG9uZW50LCBwb3NpdGlvblgsIHBvc2l0aW9uWSwgSUQpIHtcclxuICAgIGNvbnN0IG5vZGVzOiBBcnJheTxUZXh0Tm9kZT4gPSBub2Rlc1RvQ29tcG9uZW50O1xyXG4gICAgdmFyIGNvbXBvbmVudCA9IGZpZ21hLmNyZWF0ZUNvbXBvbmVudCgpXHJcbiAgICBjb21wb25lbnQubmFtZSA9IElEO1xyXG4gICAgY29tcG9uZW50LnggPSBwb3NpdGlvblg7XHJcbiAgICBjb21wb25lbnQueSA9IHBvc2l0aW9uWTtcclxuICAgIHZhciB3aWR0aCA9IG5vZGVzWzBdLndpZHRoID4gbm9kZXNbMV0ud2lkdGggPyBub2Rlc1swXS53aWR0aCA6IG5vZGVzWzFdLndpZHRoXHJcbiAgICB2YXIgaGVpZ3RoID0gbm9kZXNbMF0uaGVpZ2h0ICsgbm9kZXNbMV0uaGVpZ2h0XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzVG9Db21wb25lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobm9kZXNbaV0pXHJcbiAgICAgICAgbm9kZXNbaV0ueCAtPSBjb21wb25lbnQueFxyXG4gICAgICAgIG5vZGVzW2ldLnkgLT0gY29tcG9uZW50LnlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMod2lkdGgsIGhlaWd0aCk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5vZGVzVG9GcmFtZShub2RlczogQXJyYXk8Q29tcG9uZW50Tm9kZT4sIGxhc3RGcmFtZT86IHN0cmluZykge1xyXG4gICAgaWYgKGxhc3RGcmFtZSkge1xyXG4gICAgICAgIHZhciBmcmFtZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRPbmUoZSA9PiBlLm5hbWUgPT0gbGFzdEZyYW1lKSBhcyBGcmFtZU5vZGVcclxuICAgICAgICBpZiAoYmV0d2VuKGZyYW1lLCBub2Rlc1swXSkpIHtcclxuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoYylcclxuICAgICAgICAgICAgICAgIGMueCAtPSBmcmFtZS54XHJcbiAgICAgICAgICAgICAgICBjLnkgLT0gZnJhbWUueVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gZnJhbWUubmFtZVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZnJhbWVzSW5QYWdlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChuID0+IG4udHlwZSA9PT0gXCJGUkFNRVwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWVzSW5QYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IGZyYW1lc0luUGFnZVtpXSBhcyBGcmFtZU5vZGVcclxuICAgICAgICAgICAgaWYgKGJldHdlbihmcmFtZSwgbm9kZXNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICBub2Rlcy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoYylcclxuICAgICAgICAgICAgICAgICAgICBjLnggLT0gZnJhbWUueFxyXG4gICAgICAgICAgICAgICAgICAgIGMueSAtPSBmcmFtZS55XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJldHdlbihmcmFtZTogRnJhbWVOb2RlLCBub2RlOiBDb21wb25lbnROb2RlKSB7XHJcbiAgICBpZiAobm9kZS55ID49IGZyYW1lLnkgJiYgbm9kZS55IDw9IGZyYW1lLnkgKyBmcmFtZS5oZWlnaHQpIHtcclxuICAgICAgICBpZiAobm9kZS54ID49IGZyYW1lLnggJiYgbm9kZS54IDw9IGZyYW1lLnggKyBmcmFtZS53aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gdHJhY2tpbmdDb2xvcih0eXBlOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJuZXdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0YW50cy5ERUZBVUxUX0NPTE9SO1xyXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzLkVSUk9TX0NPTE9SO1xyXG4gICAgICAgIGNhc2UgXCJ2YWxpZGFkZWRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0YW50cy5WQUxJREFERURfQ09MT1I7XHJcbiAgICAgICAgY2FzZSBcInN1Y2Vzc1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzLlNVQ0VTU19DT0xPUjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzLkRFRkFVTFRfQ09MT1I7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlRGlyZWN0aW9uKGVsZW1lbnRzOiBBcnJheTxUZXh0Tm9kZT4pIHtcclxuICAgIHZhciBwb3NNYWlvcjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHBvc01haW9yID0gaTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNbaV0ud2lkdGggPiBlbGVtZW50c1twb3NNYWlvcl0ud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHBvc01haW9yID0gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHhSZWYgPSBlbGVtZW50c1twb3NNYWlvcl0ueCArIGVsZW1lbnRzW3Bvc01haW9yXS53aWR0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPSBwb3NNYWlvcikge1xyXG4gICAgICAgICAgICBlbGVtZW50c1tpXS54ID0geFJlZiAtIGVsZW1lbnRzW2ldLndpZHRoXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHZhbHVlQmFzZWRPblJjb2xvcihjb2xvcikgeyAgICBcclxuICAgIHN3aXRjaCAoY29sb3IpIHtcclxuICAgICAgICBjYXNlIGNvbnN0YW50cy5ERUZBVUxUX0NPTE9SLnI6IHJldHVybiBcIm5ld1wiXHJcbiAgICAgICAgY2FzZSBjb25zdGFudHMuRVJST1NfQ09MT1IucjogcmV0dXJuIFwiZXJyb3JcIlxyXG4gICAgICAgIGNhc2UgY29uc3RhbnRzLlZBTElEQURFRF9DT0xPUi5yOiByZXR1cm4gXCJ2YWxpZGFkZWRcIlxyXG4gICAgICAgIGNhc2UgY29uc3RhbnRzLlNVQ0VTU19DT0xPUi5yOiByZXR1cm4gXCJzdWNlc3NcIlxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBcIm5ld1wiXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgY3JlYXRlVGV4dCB9XHJcbmV4cG9ydCB7IGNyZWF0ZVN1Y2Vzc1RleHQgfVxyXG5leHBvcnQgeyBjcmVhdGVTdWJUZXh0IH1cclxuZXhwb3J0IHsgY3JlYXRlQ29tcG9uZW50IH1cclxuZXhwb3J0IHsgYWRkTm9kZXNUb0ZyYW1lIH1cclxuZXhwb3J0IHsgYmV0d2VuIH1cclxuZXhwb3J0IHsgdHJhY2tpbmdDb2xvciB9XHJcbmV4cG9ydCB7IGNoYW5nZURpcmVjdGlvbiB9XHJcbmV4cG9ydCB7dmFsdWVCYXNlZE9uUmNvbG9yfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHVpV2lkdGggPSA0MDBcbnZhciB1aUhlaWd0aCA9IDM5MFxudmFyIGF1dG8gPSB0cnVlO1xudmFyIG5vZGVzU2VsZWN0ZWRzID0gW11cblxuaW1wb3J0IGNyZWF0ZVRyYWNraW5ncyBmcm9tICcuL2Z1bmN0aW9ucy9jcmVhdGVUcmFja2luZydcbmltcG9ydCB7IHRyYWNraW5nQ29sb3IsIHZhbHVlQmFzZWRPblJjb2xvciB9IGZyb20gJy4vZnVuY3Rpb25zL3N1cHBvcnRGdW5jdGlvbnMnXG5cbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5yZXNpemUodWlXaWR0aCwgdWlIZWlndGgpXG5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gIGlmIChtc2cudHlwZSA9PT0gJ2NyZWF0ZVRyYWNraW5nJykge1xuICAgIGNyZWF0ZVRyYWNraW5ncyhtc2cudHJhY2tEYXRhKVxuICB9XG4gIGlmIChtc2cudHlwZSA9PT0gJ2NoYW5nZVdpbmRvd1NpemUnKSB7XG4gICAgdmFyIHsgY2FuRXhwYW5kLCBzaXplIH0gPSBtc2cubWVzc2FnZVxuICAgIGlmIChjYW5FeHBhbmQpIHtcbiAgICAgIHVpSGVpZ3RoICs9IHNpemVcbiAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVdpZHRoLCB1aUhlaWd0aClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1aUhlaWd0aCAtPSBzaXplXG4gICAgICBmaWdtYS51aS5yZXNpemUodWlXaWR0aCwgdWlIZWlndGgpXG4gICAgfVxuICB9XG4gIGlmIChtc2cudHlwZSA9PT0gXCJjaGFuZ2VTZWxlY3Rpb25Db2xvcnNcIikge1xuICAgIG5vZGVzU2VsZWN0ZWRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICB2YXIgdGV4dE5vZGUgPSBub2RlLmNoaWxkcmVuWzBdIGFzIFRleHROb2RlXG4gICAgICB2YXIgdGV4dE5vZGVDbG9uZWQgPSB0ZXh0Tm9kZS5jbG9uZSgpXG4gICAgICB0ZXh0Tm9kZUNsb25lZC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB0cmFja2luZ0NvbG9yKG1zZy5pZCkgfV1cbiAgICAgIG5vZGUuY2hpbGRyZW5bMF0uZmlsbHMgPSB0ZXh0Tm9kZUNsb25lZC5maWxsc1xuICAgIH0pXG4gIH1cbiAgaWYgKG1zZy50eXBlID09PSBcImNoYW5nZUF1dG9cIikge1xuICAgIGF1dG8gPSBtc2cuYXV0b1xuICAgIGlmKCFhdXRvKXtcbiAgICAgIG5vZGVzU2VsZWN0ZWRzPVtdXG4gICAgfVxuICB9XG59O1xuXG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gIGlmIChhdXRvKSB7XG4gICAgbm9kZXNTZWxlY3RlZHMgPSBbXVxuICAgIHZhciBub2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5zbGljZSgpXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBpZiAoKG5vZGVzWzBdLnR5cGUgPT0gXCJDT01QT05FTlRcIiB8fCBub2Rlc1swXS50eXBlID09IFwiSU5TVEFOQ0VcIikgJiYgbm9kZXNbMF0ubmFtZS5tYXRjaCgvdHJhY2svaWcpKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGVzWzBdIGFzIENvbXBvbmVudE5vZGVcbiAgICAgICAgICB2YXIgdGV4dE5vZGUgPSBub2RlLmNoaWxkcmVuWzBdIGFzIFRleHROb2RlXG4gICAgICAgICAgdmFyIGNoYW5nZUNhdGVnb3J5ID0ge1xuICAgICAgICAgICAgdHlwZTogXCJjaGFuZ2UgQ2F0ZWdvcnlcIixcbiAgICAgICAgICAgIHZhbHVlOiB0ZXh0Tm9kZS5jaGFyYWN0ZXJzLnNwbGl0KC9leGliaWNhb3xzZWxlY2FvfGluZXNwZXJhZG98aW5wdXQgaW5lc3BlcmFkb3xxdWVzdGlvbnxhbnN3ZXJ8cmVhc29ufG9yaWdlbXxpbnB1dHx2YWxpZGFjYW8vaWcpWzBdXG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGNoYW5nZUNhdGVnb3J5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgYXZhaWxhYmxlID0gdHJ1ZVxuICAgICAgdmFyIHNhbWVDb2xvciA9IHRydWVcbiAgICAgIHZhciBjb2xvclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldXG4gICAgICAgIG5vZGVzU2VsZWN0ZWRzLnB1c2gobm9kZSlcbiAgICAgICAgaWYgKCEoKG5vZGUudHlwZSA9PSBcIkNPTVBPTkVOVFwiIHx8IG5vZGUudHlwZSA9PSBcIklOU1RBTkNFXCIpICYmIG5vZGUubmFtZS5tYXRjaCgvdHJhY2svaWcpKSkge1xuICAgICAgICAgIGF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHNhbWVDb2xvcikge1xuICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgIHZhciB0ZXh0Tm9kZSA9IG5vZGUuY2hpbGRyZW5bMF0gYXMgVGV4dE5vZGVcbiAgICAgICAgICAgIGlmICh0ZXh0Tm9kZS5maWxsc1swXS5jb2xvci5yICE9IGNvbG9yLnIpXG4gICAgICAgICAgICAgIHNhbWVDb2xvciA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGV4dE5vZGUgPSBub2RlLmNoaWxkcmVuWzBdIGFzIFRleHROb2RlXG4gICAgICAgICAgICBjb2xvciA9IHRleHROb2RlLmZpbGxzWzBdLmNvbG9yXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYXZhaWxhYmxlKSB7XG4gICAgICAgIGlmIChzYW1lQ29sb3IpIHtcbiAgICAgICAgICB2YXIgbXNnID0ge1xuICAgICAgICAgICAgdHlwZTogXCJjaGFuZ2UgdHlwZVwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlQmFzZWRPblJjb2xvcihjb2xvci5yKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShtc2cpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRpZmZNZXNzYWdlID0ge1xuICAgICAgICAgICAgdHlwZTogXCJjaGFuZ2UgZGlmZiBjb2xvcnNcIixcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoZGlmZk1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVzU2VsZWN0ZWRzID0gW11cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNoYW5nZSA9IHtcbiAgICAgICAgdHlwZTogXCJjaGFuZ2VTZWxlY3Rpb25cIixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShjaGFuZ2UpXG4gICAgfVxuICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==