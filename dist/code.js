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
var selecting = false;
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
            selecting = true;
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
            selecting = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzdCO0tBQ0Y7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlVHJhY2tpbmcudHMiLCJ3ZWJwYWNrOi8vdHJhY2tpbmdibGlwLy4vc3JjL2Z1bmN0aW9ucy9zdXBwb3J0RnVuY3Rpb25zLnRzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyYWNraW5nYmxpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnN0YW50cz17XHJcblxyXG4gICAgREVGQVVMVF9DT0xPUjp7IHI6IDAuOTM0NDk3ODMzMjUxOTUzMSwgZzogMC42NTk2NDU0OTc3OTg5MTk3LCBiOiAwIH0sXHJcbiAgICBFUlJPU19DT0xPUjp7IHI6IDAuODMxMzcyNTU5MDcwNTg3MiwgZzogMCwgYjogMCB9LFxyXG4gICAgVkFMSURBREVEX0NPTE9SOnsgcjogMC4xMjk0MTE3NzE4OTM1MDEyOCwgZzogMC41ODgyMzUzMTg2NjA3MzYxLCBiOiAwLjMyNTQ5MDIwNjQ4MDAyNjI1IH0sXHJcbiAgICBTVUNFU1NfQ09MT1I6eyByOiAwLjIwNzg0MzEzOTc2NzY0NjgsIGc6IDAuNzE3NjQ3MDc1NjUzMDc2MiwgYjogMC45NDUwOTgwNDI0ODgwOTgxIH0sXHJcbiAgICBcclxuICAgIE9SSUdFTV9PUklHRU1fQ0FURUdPUklBOlwib3JpZ2VtXCIsXHJcbiAgICBPUklHRU1fT1JJR0VNX0FDQU86XCJbW0JvdCBkZSBvcmlnZW1dXSB8IFtbYmxvY28gZGUgb3JpZ2VtXV1cIixcclxuICAgIFxyXG4gICAgT1JJR0VNX0VYQ0VDQU9fQ0FURUdPUklBOlwib3JpZ2VtXCIsXHJcbiAgICBPUklHRU1fRVhDRUNBT19BQ0FPOlwiW1tCb3QgZGUgb3JpZ2VtXV0gfCBbW2Jsb2NvIGRlIG9yaWdlbV1dIHwgW1tJbnB1dCBkbyB1c3VhcmlvIG5hIG9yaWdlbV1dXCIsXHJcbiAgICBcclxuICAgIEVYSUJJQ0FPX0NBVEVHT1JJQTpcImV4aWJpY2FvXCIsXHJcbiAgICBFWElCSUNBT19BQ0FPOlwiRXhpYmljYW9cIixcclxuICAgIFxyXG4gICAgU0VMRUNBT19DQVRFR09SSUE6XCJzZWxlY2FvXCIsXHJcbiAgICBTRUxFQ0FPX0FDQU86XCJbW09wY29lcyBkbyBtZW51XV07IGlucHV0IGluZXNwZXJhZG9cIixcclxuICAgIFxyXG4gICAgSU5FU1BFUkFET19DQVRFR09SSUE6XCJpbmVzcGVyYWRvXCIsXHJcbiAgICBJTkVTUEVSQURPX0FDQU86XCJbW0lucHV0IGluZXNwZXJhZG9dXVwiLFxyXG4gICAgXHJcbiAgICBJTlBVVF9DQVRFR09SSUE6XCJpbnB1dFwiLFxyXG4gICAgSU5QVVRfQUNBTzpcIltbSW5wdXQgZG8gdXN1YXJpb11dIHwgaW52YWxpZG87dmFsaWRvXCIsXHJcblxyXG4gICAgVkFMSURBQ0FPX0NBVEVHT1JJQTpcInZhbGlkYWNhb1wiLFxyXG4gICAgVkFMSURBQ0FPX0FDQU86XCJTaW07IG5hb1wiLFxyXG4gICAgXHJcbiAgICBTVF9RVUVTVElPTl9DQVRFR09SWTpcIlNUIHN1cnZleSBxdWVzdGlvblwiLFxyXG4gICAgU1RfQU5TV0VSX0NBVEVHT1JZOlwiU1Qgc3VydmV5IGFuc3dlclwiLFxyXG4gICAgU1RfUkVBU09OX0NBVEVHT1JZOlwiU1Qgc3VydmV5IHJlYXNvblwiLFxyXG5cclxuICAgIFNUX1AxOlwiQ1NBVFwiLFxyXG4gICAgU1RfUDI6XCJDRVNcIixcclxuICAgIFNUX1AzOlwiTlBTXCIsXHJcblxyXG4gICAgU1RfSFVNQU46XCJIdW1hblwiLFxyXG4gICAgU1RfQk9UOlwiQm90XCIsXHJcblxyXG4gICAgU1RfUVVFU1RJT05fQUNUSU9OOlwiQ291bnRcIixcclxuICAgIFNUX0NTQVRfQU5TV0VSX0FDVElPTjpcIlZlcnkgZGlzc2F0aXNmaWVkLCBEaXNzYXRpc2ZpZWQsIE5ldXRyYWwsIFNhdGlzZmllZCwgVmVyeSBzYXRpc2ZpZWRcIixcclxuICAgIFNUX0NFU19BTlNXRVJfQUNUSU9OOlwiVmVyeSBkaWZmaWN1bHQsIERpZmZpY3VsdCwgTmV1dHJhbCwgRWFzeSwgVmVyeSBlYXN5IFwiLFxyXG4gICAgU1RfTlBTX0FOU1dFUl9BQ1RJT046XCJEZXRyYWN0b3JzLCBQYXNzaXZlcyBvciBQcm9tb3RlcnNcIixcclxuXHJcbiAgICBTVF9SRUFTT05fQUNUSU9OOlwiU2NvcmUgKHN1cnZleSBhbnN3ZXIpfFVzZXIgaW5wdXRcIlxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHMiLCJpbXBvcnQgKiBhcyBzdXBwIGZyb20gJy4vc3VwcG9ydEZ1bmN0aW9ucyc7XHJcblxyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxudmFyIGxhc3RGcmFtZVxyXG5cclxuY29uc3QgY3JlYXRlVHJhY2tpbmdzID0gYXN5bmMgZnVuY3Rpb24gKHRyYWNrRGF0YSkge1xyXG4gICAgdmFyIHBvc2l0aW9uWCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54XHJcbiAgICB2YXIgcG9zaXRpb25ZQ2F0ZWdvcnkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueVxyXG4gICAgdmFyIGNvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudE5vZGU+ID0gW11cclxuICAgIHZhciBjb2xvciA9IHN1cHAudHJhY2tpbmdDb2xvcih0cmFja0RhdGEudHJhY2tDb2xvcilcclxuICAgIHZhciB0cmFja0NhdGVnb3J5ID0gdHJhY2tEYXRhLmNhdGVnb3J5XHJcblxyXG4gICAgLy9PcmlnZVRyYWNrXHJcbiAgICBpZiAodHJhY2tEYXRhLm9yaWdpbikge1xyXG4gICAgICAgIHZhciBjYXRlZ29yeU5hbWUgPSB0cmFja0RhdGEub3JpZ2luQ2F0ZWdvcnkgPyBjb25zdGFudHMuT1JJR0VNX09SSUdFTV9DQVRFR09SSUEgOiBjb25zdGFudHMuT1JJR0VNX0VYQ0VDQU9fQ0FURUdPUklBXHJcbiAgICAgICAgdmFyIGFjdGlvbk5hbWUgPSB0cmFja0RhdGEub3JpZ2luQ2F0ZWdvcnkgPyBjb25zdGFudHMuT1JJR0VNX09SSUdFTV9BQ0FPIDogY29uc3RhbnRzLk9SSUdFTV9FWENFQ0FPX0FDQU9cclxuICAgICAgICB2YXIgY2F0ZWdvcnk6IFRleHROb2RlID0gYXdhaXQgc3VwcC5jcmVhdGVUZXh0KHRyYWNrQ2F0ZWdvcnksIGNhdGVnb3J5TmFtZSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSwgY29sb3IpXHJcbiAgICAgICAgdmFyIGFjdGlvbjogVGV4dE5vZGUgPSBhd2FpdCBzdXBwLmNyZWF0ZVN1YlRleHQoYWN0aW9uTmFtZSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSArIDE1KVxyXG4gICAgICAgIGNvbXBvbmVudHMucHVzaChzdXBwLmNyZWF0ZUNvbXBvbmVudChbY2F0ZWdvcnksIGFjdGlvbl0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIFwiVHJhY2tpbmdcIikpXHJcbiAgICAgICAgcG9zaXRpb25ZQ2F0ZWdvcnkgKz0gNjVcclxuICAgICAgICBpZiAodHJhY2tEYXRhLmlzUmlndGgpXHJcbiAgICAgICAgICAgIHN1cHAuY2hhbmdlRGlyZWN0aW9uKFtjYXRlZ29yeSwgYWN0aW9uXSlcclxuICAgIH1cclxuXHJcbiAgICAvL01lbnUgVHJhY2tpbmdzXHJcbiAgICBpZiAodHJhY2tEYXRhLnByaW5jaXBhbCkge1xyXG4gICAgICAgIHZhciBvcHRNZW51ID0gdHJhY2tEYXRhLnByaW5jaXBhbFxyXG4gICAgICAgIHZhciBvcHRDYXRlZ29yeSA9IFtjb25zdGFudHMuRVhJQklDQU9fQ0FURUdPUklBLCBjb25zdGFudHMuU0VMRUNBT19DQVRFR09SSUEsIGNvbnN0YW50cy5JTkVTUEVSQURPX0NBVEVHT1JJQSwgY29uc3RhbnRzLklOUFVUX0NBVEVHT1JJQV1cclxuICAgICAgICB2YXIgb3B0QWN0aW9uID0gW2NvbnN0YW50cy5FWElCSUNBT19BQ0FPLCBjb25zdGFudHMuU0VMRUNBT19BQ0FPLCBjb25zdGFudHMuSU5FU1BFUkFET19BQ0FPLCBjb25zdGFudHMuSU5QVVRfQUNBT11cclxuICAgICAgICB2YXIgb3B0TWVudUNyZWF0ZTogQXJyYXk8VGV4dE5vZGU+ID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG9wdE1lbnUubGVuZ3RoOyBpKyssIGorKykge1xyXG4gICAgICAgICAgICBpZiAob3B0TWVudVtpXSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5ID0gYXdhaXQgc3VwcC5jcmVhdGVUZXh0KHRyYWNrQ2F0ZWdvcnksIG9wdENhdGVnb3J5W2pdLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBjb2xvcilcclxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhd2FpdCBzdXBwLmNyZWF0ZVN1YlRleHQob3B0QWN0aW9uW2pdLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5ICsgMTUpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRyYWNrRGF0YS5pc1JpZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChzdXBwLmNyZWF0ZUNvbXBvbmVudChbY2F0ZWdvcnksIGFjdGlvbl0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIFwiVHJhY2tpbmdcIikpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRNZW51Q3JlYXRlLnB1c2goY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0TWVudUNyZWF0ZS5wdXNoKGFjdGlvbilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDQwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYWNrRGF0YS5pc1JpZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRNZW51Q3JlYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHN1cHAuY2hhbmdlRGlyZWN0aW9uKG9wdE1lbnVDcmVhdGUpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdE1lbnVDcmVhdGUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW29wdE1lbnVDcmVhdGVbaV0sIG9wdE1lbnVDcmVhdGVbaSArIDFdXSwgb3B0TWVudUNyZWF0ZVtpXS54IDwgb3B0TWVudUNyZWF0ZVtpICsgMV0ueCA/IG9wdE1lbnVDcmVhdGVbaV0ueCA6IG9wdE1lbnVDcmVhdGVbaSArIDFdLngsIG9wdE1lbnVDcmVhdGVbaV0ueSwgXCJUcmFja1wiKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vVmFsaWRhdGlvbiBUcmFja1xyXG4gICAgaWYgKHRyYWNrRGF0YS52YWxpZGF0aW9uKSB7XHJcbiAgICAgICAgcG9zaXRpb25ZQ2F0ZWdvcnkgKz0gMzVcclxuICAgICAgICB2YXIgY2F0ZWdvcnk6IFRleHROb2RlID0gYXdhaXQgc3VwcC5jcmVhdGVUZXh0KHRyYWNrQ2F0ZWdvcnksIGNvbnN0YW50cy5WQUxJREFDQU9fQ0FURUdPUklBLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5KVxyXG4gICAgICAgIHZhciBhY3Rpb246IFRleHROb2RlID0gYXdhaXQgc3VwcC5jcmVhdGVTdWJUZXh0KGNvbnN0YW50cy5WQUxJREFDQU9fQUNBTywgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSArIDE1KVxyXG4gICAgICAgIGFjdGlvbi54ID0gKGNhdGVnb3J5LnggKyBjYXRlZ29yeS53aWR0aCAvIDIpIC0gKGFjdGlvbi53aWR0aCAvIDIpXHJcbiAgICAgICAgY29tcG9uZW50cy5wdXNoKHN1cHAuY3JlYXRlQ29tcG9uZW50KFtjYXRlZ29yeSwgYWN0aW9uXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSwgXCJUcmFja2luZ1wiKSlcclxuICAgICAgICBwb3NpdGlvbllDYXRlZ29yeSArPSA2NVxyXG4gICAgfVxyXG4gICAgLy9TdWNlc3MgdHJhY2tcclxuICAgIGlmICh0cmFja0RhdGEuc3VjZXNzKSB7XHJcbiAgICAgICAgdmFyIG9wdFRyYWNraW5zU3VjZXNzbyA9IFtjb25zdGFudHMuU1RfUVVFU1RJT05fQ0FURUdPUlksIGNvbnN0YW50cy5TVF9BTlNXRVJfQ0FURUdPUlksIGNvbnN0YW50cy5TVF9SRUFTT05fQ0FURUdPUlldXHJcbiAgICAgICAgdmFyIGF0dGVuZGFudEFjdGlvbiA9IHRyYWNrRGF0YS5zdWNlc3NGbG93ID8gY29uc3RhbnRzLlNUX0JPVCA6IGNvbnN0YW50cy5TVF9IVU1BTlxyXG4gICAgICAgIHZhciBvcHRUSztcclxuICAgICAgICB2YXIgYWN0aW9uQW5zd2VyO1xyXG4gICAgICAgIG9wdE1lbnVDcmVhdGUgPSBbXVxyXG4gICAgICAgIGlmICh0cmFja0RhdGEuc3VjZXNzU2VhcmNoID09IFwiQ1NBVFwiKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbkFuc3dlciA9IGNvbnN0YW50cy5TVF9DU0FUX0FOU1dFUl9BQ1RJT05cclxuICAgICAgICAgICAgb3B0VEsgPSBjb25zdGFudHMuU1RfUDFcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHJhY2tEYXRhLnN1Y2Vzc1NlYXJjaCA9PSBcIkNFU1wiKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbkFuc3dlciA9IGNvbnN0YW50cy5TVF9DRVNfQU5TV0VSX0FDVElPTlxyXG4gICAgICAgICAgICBvcHRUSyA9IGNvbnN0YW50cy5TVF9QMlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uQW5zd2VyID0gY29uc3RhbnRzLlNUX05QU19BTlNXRVJfQUNUSU9OXHJcbiAgICAgICAgICAgIG9wdFRLID0gY29uc3RhbnRzLlNUX1AzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhY3Rpb25zVEsgPSBbYCR7b3B0VEt9ICR7YXR0ZW5kYW50QWN0aW9ufXxDb3VudGAsIGAke29wdFRLfSAke2F0dGVuZGFudEFjdGlvbn18JHthY3Rpb25BbnN3ZXJ9YCwgYCR7b3B0VEt9ICR7YXR0ZW5kYW50QWN0aW9ufXwke2NvbnN0YW50cy5TVF9SRUFTT05fQUNUSU9OfWBdXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRUcmFja2luc1N1Y2Vzc28ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjYXRlZ29yeSA9IGF3YWl0IHN1cHAuY3JlYXRlU3VjZXNzVGV4dChvcHRUcmFja2luc1N1Y2Vzc29baV0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIGNvbG9yKVxyXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gYXdhaXQgc3VwcC5jcmVhdGVTdWJUZXh0KGFjdGlvbnNUS1tpXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSArIDE1KVxyXG4gICAgICAgICAgICBpZiAoIXRyYWNrRGF0YS5pc1JpZ3RoKVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKHN1cHAuY3JlYXRlQ29tcG9uZW50KFtjYXRlZ29yeSwgYWN0aW9uXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSwgXCJUcmFja2luZ1wiKSlcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcHRNZW51Q3JlYXRlLnB1c2goY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICBvcHRNZW51Q3JlYXRlLnB1c2goYWN0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDQwXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhY2tEYXRhLmlzUmlndGgpIHtcclxuICAgICAgICAgICAgc3VwcC5jaGFuZ2VEaXJlY3Rpb24ob3B0TWVudUNyZWF0ZSlcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRNZW51Q3JlYXRlLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW29wdE1lbnVDcmVhdGVbaV0sIG9wdE1lbnVDcmVhdGVbaSArIDFdXSwgb3B0TWVudUNyZWF0ZVtpXS54IDwgb3B0TWVudUNyZWF0ZVtpICsgMV0ueCA/IG9wdE1lbnVDcmVhdGVbaV0ueCA6IG9wdE1lbnVDcmVhdGVbaSArIDFdLngsIG9wdE1lbnVDcmVhdGVbaV0ueSwgXCJUcmFja1wiKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxhc3RGcmFtZSA9IHN1cHAuYWRkTm9kZXNUb0ZyYW1lKGNvbXBvbmVudHMsIGxhc3RGcmFtZSlcclxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IGNvbXBvbmVudHNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVHJhY2tpbmdzIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVUZXh0KG5hbWUsIHRpcG8sIHBvc2l0aW9uWCwgcG9zaXRpb25ZLCBjb2xvcj8pIHtcclxuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9KVxyXG4gICAgdmFyIHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICB0ZXh0Lm5hbWUgPSBcIm1lc3NhZ2VcIjtcclxuICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH1cclxuICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogY29sb3IgPyBjb2xvciA6IHsgcjogMC45MSwgZzogMC42NywgYjogMCB9IH1dXHJcbiAgICB0ZXh0LmZvbnRTaXplID0gMTRcclxuICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIldJRFRIX0FORF9IRUlHSFRcIlxyXG4gICAgdGV4dC54ID0gKHBvc2l0aW9uWCk7XHJcbiAgICB0ZXh0LnkgPSAocG9zaXRpb25ZKTtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IGAke25hbWV9ICR7dGlwb31gXHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVTdWNlc3NUZXh0KHRpcG8sIHBvc2l0aW9uWCwgcG9zaXRpb25ZLCBjb2xvcj8pIHtcclxuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIkJvbGRcIiB9KVxyXG4gICAgdmFyIHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICB0ZXh0Lm5hbWUgPSBcIm1lc3NhZ2VcIjtcclxuICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH1cclxuICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogY29sb3IgPyBjb2xvciA6IHsgcjogMC45MSwgZzogMC42NywgYjogMCB9IH1dXHJcbiAgICB0ZXh0LmZvbnRTaXplID0gMTRcclxuICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIldJRFRIX0FORF9IRUlHSFRcIlxyXG4gICAgdGV4dC54ID0gKHBvc2l0aW9uWCk7XHJcbiAgICB0ZXh0LnkgPSAocG9zaXRpb25ZKTtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IGAke3RpcG99YFxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3ViVGV4dChuYW1lLCBwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xyXG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pXHJcbiAgICB2YXIgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIHRleHQubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfVxyXG4gICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAuNDksIGc6IDAuNDcsIGI6IDAuNDcgfSB9XVxyXG4gICAgdGV4dC5mb250U2l6ZSA9IDlcclxuICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBcIldJRFRIX0FORF9IRUlHSFRcIlxyXG4gICAgdGV4dC54ID0gKHBvc2l0aW9uWCk7XHJcbiAgICB0ZXh0LnkgPSAocG9zaXRpb25ZKTtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IGAke25hbWV9YFxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KG5vZGVzVG9Db21wb25lbnQsIHBvc2l0aW9uWCwgcG9zaXRpb25ZLCBJRCkge1xyXG4gICAgY29uc3Qgbm9kZXM6IEFycmF5PFRleHROb2RlPiA9IG5vZGVzVG9Db21wb25lbnQ7XHJcbiAgICB2YXIgY29tcG9uZW50ID0gZmlnbWEuY3JlYXRlQ29tcG9uZW50KClcclxuICAgIGNvbXBvbmVudC5uYW1lID0gSUQ7XHJcbiAgICBjb21wb25lbnQueCA9IHBvc2l0aW9uWDtcclxuICAgIGNvbXBvbmVudC55ID0gcG9zaXRpb25ZO1xyXG4gICAgdmFyIHdpZHRoID0gbm9kZXNbMF0ud2lkdGggPiBub2Rlc1sxXS53aWR0aCA/IG5vZGVzWzBdLndpZHRoIDogbm9kZXNbMV0ud2lkdGhcclxuICAgIHZhciBoZWlndGggPSBub2Rlc1swXS5oZWlnaHQgKyBub2Rlc1sxXS5oZWlnaHRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXNUb0NvbXBvbmVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZChub2Rlc1tpXSlcclxuICAgICAgICBub2Rlc1tpXS54IC09IGNvbXBvbmVudC54XHJcbiAgICAgICAgbm9kZXNbaV0ueSAtPSBjb21wb25lbnQueVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyh3aWR0aCwgaGVpZ3RoKTtcclxuICAgIHJldHVybiBjb21wb25lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTm9kZXNUb0ZyYW1lKG5vZGVzOiBBcnJheTxDb21wb25lbnROb2RlPiwgbGFzdEZyYW1lPzogc3RyaW5nKSB7XHJcbiAgICBpZiAobGFzdEZyYW1lKSB7XHJcbiAgICAgICAgdmFyIGZyYW1lID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZShlID0+IGUubmFtZSA9PSBsYXN0RnJhbWUpIGFzIEZyYW1lTm9kZVxyXG4gICAgICAgIGlmIChiZXR3ZW4oZnJhbWUsIG5vZGVzWzBdKSkge1xyXG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjKVxyXG4gICAgICAgICAgICAgICAgYy54IC09IGZyYW1lLnhcclxuICAgICAgICAgICAgICAgIGMueSAtPSBmcmFtZS55XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmcmFtZS5uYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmcmFtZXNJblBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKG4gPT4gbi50eXBlID09PSBcIkZSQU1FXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmFtZXNJblBhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gZnJhbWVzSW5QYWdlW2ldIGFzIEZyYW1lTm9kZVxyXG4gICAgICAgICAgICBpZiAoYmV0d2VuKGZyYW1lLCBub2Rlc1swXSkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGVzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjKVxyXG4gICAgICAgICAgICAgICAgICAgIGMueCAtPSBmcmFtZS54XHJcbiAgICAgICAgICAgICAgICAgICAgYy55IC09IGZyYW1lLnlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWUubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYmV0d2VuKGZyYW1lOiBGcmFtZU5vZGUsIG5vZGU6IENvbXBvbmVudE5vZGUpIHtcclxuICAgIGlmIChub2RlLnkgPj0gZnJhbWUueSAmJiBub2RlLnkgPD0gZnJhbWUueSArIGZyYW1lLmhlaWdodCkge1xyXG4gICAgICAgIGlmIChub2RlLnggPj0gZnJhbWUueCAmJiBub2RlLnggPD0gZnJhbWUueCArIGZyYW1lLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiB0cmFja2luZ0NvbG9yKHR5cGU6IHN0cmluZykge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIm5ld1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzLkRFRkFVTFRfQ09MT1I7XHJcbiAgICAgICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHMuRVJST1NfQ09MT1I7XHJcbiAgICAgICAgY2FzZSBcInZhbGlkYWRlZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RhbnRzLlZBTElEQURFRF9DT0xPUjtcclxuICAgICAgICBjYXNlIFwic3VjZXNzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHMuU1VDRVNTX0NPTE9SO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHMuREVGQVVMVF9DT0xPUjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24oZWxlbWVudHM6IEFycmF5PFRleHROb2RlPikge1xyXG4gICAgdmFyIHBvc01haW9yO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgcG9zTWFpb3IgPSBpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS53aWR0aCA+IGVsZW1lbnRzW3Bvc01haW9yXS53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgcG9zTWFpb3IgPSBpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgeFJlZiA9IGVsZW1lbnRzW3Bvc01haW9yXS54ICsgZWxlbWVudHNbcG9zTWFpb3JdLndpZHRoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpICE9IHBvc01haW9yKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLnggPSB4UmVmIC0gZWxlbWVudHNbaV0ud2lkdGhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsdWVCYXNlZE9uUmNvbG9yKGNvbG9yKSB7ICAgIFxyXG4gICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgIGNhc2UgY29uc3RhbnRzLkRFRkFVTFRfQ09MT1IucjogcmV0dXJuIFwibmV3XCJcclxuICAgICAgICBjYXNlIGNvbnN0YW50cy5FUlJPU19DT0xPUi5yOiByZXR1cm4gXCJlcnJvclwiXHJcbiAgICAgICAgY2FzZSBjb25zdGFudHMuVkFMSURBREVEX0NPTE9SLnI6IHJldHVybiBcInZhbGlkYWRlZFwiXHJcbiAgICAgICAgY2FzZSBjb25zdGFudHMuU1VDRVNTX0NPTE9SLnI6IHJldHVybiBcInN1Y2Vzc1wiXHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIFwibmV3XCJcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBjcmVhdGVUZXh0IH1cclxuZXhwb3J0IHsgY3JlYXRlU3VjZXNzVGV4dCB9XHJcbmV4cG9ydCB7IGNyZWF0ZVN1YlRleHQgfVxyXG5leHBvcnQgeyBjcmVhdGVDb21wb25lbnQgfVxyXG5leHBvcnQgeyBhZGROb2Rlc1RvRnJhbWUgfVxyXG5leHBvcnQgeyBiZXR3ZW4gfVxyXG5leHBvcnQgeyB0cmFja2luZ0NvbG9yIH1cclxuZXhwb3J0IHsgY2hhbmdlRGlyZWN0aW9uIH1cclxuZXhwb3J0IHt2YWx1ZUJhc2VkT25SY29sb3J9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgdWlXaWR0aCA9IDQwMFxudmFyIHVpSGVpZ3RoID0gMzkwXG52YXIgYXV0byA9IHRydWU7XG52YXIgc2VsZWN0aW5nID0gZmFsc2VcbnZhciBub2Rlc1NlbGVjdGVkcyA9IFtdXG5pbXBvcnQgY3JlYXRlVHJhY2tpbmdzIGZyb20gJy4vZnVuY3Rpb25zL2NyZWF0ZVRyYWNraW5nJ1xuaW1wb3J0IHsgdHJhY2tpbmdDb2xvciwgdmFsdWVCYXNlZE9uUmNvbG9yIH0gZnJvbSAnLi9mdW5jdGlvbnMvc3VwcG9ydEZ1bmN0aW9ucydcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5yZXNpemUodWlXaWR0aCwgdWlIZWlndGgpXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICBpZiAobXNnLnR5cGUgPT09ICdjcmVhdGVUcmFja2luZycpIHtcbiAgICBjcmVhdGVUcmFja2luZ3MobXNnLnRyYWNrRGF0YSlcbiAgfVxuICBpZiAobXNnLnR5cGUgPT09ICdjaGFuZ2VXaW5kb3dTaXplJykge1xuICAgIHZhciB7IGNhbkV4cGFuZCwgc2l6ZSB9ID0gbXNnLm1lc3NhZ2VcbiAgICBpZiAoY2FuRXhwYW5kKSB7XG4gICAgICB1aUhlaWd0aCArPSBzaXplXG4gICAgICBmaWdtYS51aS5yZXNpemUodWlXaWR0aCwgdWlIZWlndGgpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdWlIZWlndGggLT0gc2l6ZVxuICAgICAgZmlnbWEudWkucmVzaXplKHVpV2lkdGgsIHVpSGVpZ3RoKVxuICAgIH1cbiAgfVxuICBpZiAobXNnLnR5cGUgPT09IFwiY2hhbmdlU2VsZWN0aW9uQ29sb3JzXCIpIHtcbiAgICBub2Rlc1NlbGVjdGVkcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdmFyIHRleHROb2RlID0gbm9kZS5jaGlsZHJlblswXSBhcyBUZXh0Tm9kZVxuICAgICAgdmFyIHRleHROb2RlQ2xvbmVkID0gdGV4dE5vZGUuY2xvbmUoKVxuICAgICAgdGV4dE5vZGVDbG9uZWQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogdHJhY2tpbmdDb2xvcihtc2cuaWQpIH1dXG4gICAgICBub2RlLmNoaWxkcmVuWzBdLmZpbGxzID0gdGV4dE5vZGVDbG9uZWQuZmlsbHNcbiAgICB9KVxuICB9XG4gIGlmIChtc2cudHlwZSA9PT0gXCJjaGFuZ2VBdXRvXCIpIHtcbiAgICBhdXRvID0gbXNnLmF1dG9cbiAgICBpZighYXV0byl7XG4gICAgICBub2Rlc1NlbGVjdGVkcz1bXVxuICAgIH1cbiAgfVxufTtcblxuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICBpZiAoYXV0bykge1xuICAgIG5vZGVzU2VsZWN0ZWRzID0gW11cbiAgICB2YXIgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uc2xpY2UoKVxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgaWYgKChub2Rlc1swXS50eXBlID09IFwiQ09NUE9ORU5UXCIgfHwgbm9kZXNbMF0udHlwZSA9PSBcIklOU1RBTkNFXCIpICYmIG5vZGVzWzBdLm5hbWUubWF0Y2goL3RyYWNrL2lnKSkge1xuICAgICAgICAgIG5vZGUgPSBub2Rlc1swXSBhcyBDb21wb25lbnROb2RlXG4gICAgICAgICAgdmFyIHRleHROb2RlID0gbm9kZS5jaGlsZHJlblswXSBhcyBUZXh0Tm9kZVxuICAgICAgICAgIHZhciBjaGFuZ2VDYXRlZ29yeSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiY2hhbmdlIENhdGVnb3J5XCIsXG4gICAgICAgICAgICB2YWx1ZTogdGV4dE5vZGUuY2hhcmFjdGVycy5zcGxpdCgvZXhpYmljYW98c2VsZWNhb3xpbmVzcGVyYWRvfGlucHV0IGluZXNwZXJhZG98cXVlc3Rpb258YW5zd2VyfHJlYXNvbnxvcmlnZW18aW5wdXR8dmFsaWRhY2FvL2lnKVswXVxuICAgICAgICAgIH1cbiAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShjaGFuZ2VDYXRlZ29yeSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZWN0aW5nID0gdHJ1ZVxuICAgICAgdmFyIGF2YWlsYWJsZSA9IHRydWVcbiAgICAgIHZhciBzYW1lQ29sb3IgPSB0cnVlXG4gICAgICB2YXIgY29sb3JcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXVxuICAgICAgICBub2Rlc1NlbGVjdGVkcy5wdXNoKG5vZGUpXG4gICAgICAgIGlmICghKChub2RlLnR5cGUgPT0gXCJDT01QT05FTlRcIiB8fCBub2RlLnR5cGUgPT0gXCJJTlNUQU5DRVwiKSAmJiBub2RlLm5hbWUubWF0Y2goL3RyYWNrL2lnKSkpIHtcbiAgICAgICAgICBhdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChzYW1lQ29sb3IpIHtcbiAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgdGV4dE5vZGUgPSBub2RlLmNoaWxkcmVuWzBdIGFzIFRleHROb2RlXG4gICAgICAgICAgICBpZiAodGV4dE5vZGUuZmlsbHNbMF0uY29sb3IuciAhPSBjb2xvci5yKVxuICAgICAgICAgICAgICBzYW1lQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRleHROb2RlID0gbm9kZS5jaGlsZHJlblswXSBhcyBUZXh0Tm9kZVxuICAgICAgICAgICAgY29sb3IgPSB0ZXh0Tm9kZS5maWxsc1swXS5jb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICAgICAgICBpZiAoc2FtZUNvbG9yKSB7XG4gICAgICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiY2hhbmdlIHR5cGVcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZUJhc2VkT25SY29sb3IoY29sb3IucilcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UobXNnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBkaWZmTWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiY2hhbmdlIGRpZmYgY29sb3JzXCIsXG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGRpZmZNZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlc1NlbGVjdGVkcyA9IFtdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGluZyA9IGZhbHNlXG4gICAgICB2YXIgY2hhbmdlID0ge1xuICAgICAgICB0eXBlOiBcImNoYW5nZVNlbGVjdGlvblwiLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH1cbiAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGNoYW5nZSlcbiAgICB9XG4gIH1cbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==