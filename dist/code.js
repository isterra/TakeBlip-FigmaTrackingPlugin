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

/***/ "./src/functions/editTracking.ts":
/*!***************************************!*\
  !*** ./src/functions/editTracking.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTrackColor": () => (/* binding */ editTrackColor),
/* harmony export */   "valueBasedOnRcolor": () => (/* binding */ valueBasedOnRcolor)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

function editTrackColor(nodes, color) {
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
/* harmony export */   "changeDirection": () => (/* binding */ changeDirection)
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
/* harmony import */ var _functions_editTracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/editTracking */ "./src/functions/editTracking.ts");
/* harmony import */ var _functions_supportFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/supportFunctions */ "./src/functions/supportFunctions.ts");
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
            node.children[0].fills[0].color = (0,_functions_supportFunctions__WEBPACK_IMPORTED_MODULE_2__.trackingColor)(msg.id);
        });
    }
};
figma.on("selectionchange", () => {
    console.log("sadas");
    if (auto) {
        var textValue = "";
        var nodes = figma.currentPage.selection;
        if (nodes.length > 0) {
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
                        node = node;
                        var text = node.children[0];
                        var textColor = text.fills[0].color;
                        console.log(textColor);
                        if (textColor.r != color.r)
                            sameColor = false;
                    }
                    else {
                        node = node;
                        var text = node.children[0];
                        color = text.fills[0].color;
                        console.log(color);
                    }
                }
            }
            console.log(sameColor);
            console.log(available);
            if (available) {
                if (sameColor) {
                    var msg = {
                        type: "change type",
                        value: _functions_editTracking__WEBPACK_IMPORTED_MODULE_1__.valueBasedOnRcolor(color.r)
                    };
                    figma.ui.postMessage(msg);
                }
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
        /* if (node.length > 0){
           if (node[0].type == "TEXT") {
             var textValue = node[0].characters.split(/exibicao|selecao|inesperado|input inesperado|question|answer|reason|origem|input|validacao/ig)[0]
           }
           if((node[0].type=="COMPONENT"||node[0].type == "INSTANCE")&&node[0].name.match(/track/ig)){
             var component=node[0]
             console.log("É component")
             console.log(component)
             var textComponent=component.children[0] as TextNode
             textValue= textComponent.characters.split(/exibicao|selecao|inesperado|input inesperado|question|answer|reason|origem|input|validacao/ig)[0]
           }
           node = null
           figma.ui.postMessage(textValue)
         }
         */
    }
    console.log(selecting);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7WUFDdkIsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBRyxTQUFTLEVBQUM7b0JBQ1gsSUFBSSxHQUFHLEdBQUM7d0JBQ04sSUFBSSxFQUFDLGFBQWE7d0JBQ2xCLEtBQUssRUFBQyx1RUFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7aUJBQzFCO2FBQ0Y7U0FDRjthQUFJO1lBQ0gsU0FBUyxHQUFDLEtBQUs7WUFDZixJQUFJLE1BQU0sR0FBQztnQkFDVCxJQUFJLEVBQUMsaUJBQWlCO2dCQUN0QixLQUFLLEVBQUMsS0FBSzthQUNaO1lBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzdCO1FBQ0Q7Ozs7Ozs7Ozs7Ozs7O1dBY0c7S0FDSjtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhY2tpbmdibGlwLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVRyYWNraW5nLnRzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9mdW5jdGlvbnMvZWRpdFRyYWNraW5nLnRzIiwid2VicGFjazovL3RyYWNraW5nYmxpcC8uL3NyYy9mdW5jdGlvbnMvc3VwcG9ydEZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJhY2tpbmdibGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmFja2luZ2JsaXAvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHM9e1xyXG5cclxuICAgIERFRkFVTFRfQ09MT1I6eyByOiAwLjkzNDQ5NzgzMzI1MTk1MzEsIGc6IDAuNjU5NjQ1NDk3Nzk4OTE5NywgYjogMCB9LFxyXG4gICAgRVJST1NfQ09MT1I6eyByOiAwLjgzMTM3MjU1OTA3MDU4NzIsIGc6IDAsIGI6IDAgfSxcclxuICAgIFZBTElEQURFRF9DT0xPUjp7IHI6IDAuMTI5NDExNzcxODkzNTAxMjgsIGc6IDAuNTg4MjM1MzE4NjYwNzM2MSwgYjogMC4zMjU0OTAyMDY0ODAwMjYyNSB9LFxyXG4gICAgU1VDRVNTX0NPTE9SOnsgcjogMC4yMDc4NDMxMzk3Njc2NDY4LCBnOiAwLjcxNzY0NzA3NTY1MzA3NjIsIGI6IDAuOTQ1MDk4MDQyNDg4MDk4MSB9LFxyXG4gICAgXHJcbiAgICBPUklHRU1fT1JJR0VNX0NBVEVHT1JJQTpcIm9yaWdlbVwiLFxyXG4gICAgT1JJR0VNX09SSUdFTV9BQ0FPOlwiW1tCb3QgZGUgb3JpZ2VtXV0gfCBbW2Jsb2NvIGRlIG9yaWdlbV1dXCIsXHJcbiAgICBcclxuICAgIE9SSUdFTV9FWENFQ0FPX0NBVEVHT1JJQTpcIm9yaWdlbVwiLFxyXG4gICAgT1JJR0VNX0VYQ0VDQU9fQUNBTzpcIltbQm90IGRlIG9yaWdlbV1dIHwgW1tibG9jbyBkZSBvcmlnZW1dXSB8IFtbSW5wdXQgZG8gdXN1YXJpbyBuYSBvcmlnZW1dXVwiLFxyXG4gICAgXHJcbiAgICBFWElCSUNBT19DQVRFR09SSUE6XCJleGliaWNhb1wiLFxyXG4gICAgRVhJQklDQU9fQUNBTzpcIkV4aWJpY2FvXCIsXHJcbiAgICBcclxuICAgIFNFTEVDQU9fQ0FURUdPUklBOlwic2VsZWNhb1wiLFxyXG4gICAgU0VMRUNBT19BQ0FPOlwiW1tPcGNvZXMgZG8gbWVudV1dOyBpbnB1dCBpbmVzcGVyYWRvXCIsXHJcbiAgICBcclxuICAgIElORVNQRVJBRE9fQ0FURUdPUklBOlwiaW5lc3BlcmFkb1wiLFxyXG4gICAgSU5FU1BFUkFET19BQ0FPOlwiW1tJbnB1dCBpbmVzcGVyYWRvXV1cIixcclxuICAgIFxyXG4gICAgSU5QVVRfQ0FURUdPUklBOlwiaW5wdXRcIixcclxuICAgIElOUFVUX0FDQU86XCJbW0lucHV0IGRvIHVzdWFyaW9dXSB8IGludmFsaWRvO3ZhbGlkb1wiLFxyXG5cclxuICAgIFZBTElEQUNBT19DQVRFR09SSUE6XCJ2YWxpZGFjYW9cIixcclxuICAgIFZBTElEQUNBT19BQ0FPOlwiU2ltOyBuYW9cIixcclxuICAgIFxyXG4gICAgU1RfUVVFU1RJT05fQ0FURUdPUlk6XCJTVCBzdXJ2ZXkgcXVlc3Rpb25cIixcclxuICAgIFNUX0FOU1dFUl9DQVRFR09SWTpcIlNUIHN1cnZleSBhbnN3ZXJcIixcclxuICAgIFNUX1JFQVNPTl9DQVRFR09SWTpcIlNUIHN1cnZleSByZWFzb25cIixcclxuXHJcbiAgICBTVF9QMTpcIkNTQVRcIixcclxuICAgIFNUX1AyOlwiQ0VTXCIsXHJcbiAgICBTVF9QMzpcIk5QU1wiLFxyXG5cclxuICAgIFNUX0hVTUFOOlwiSHVtYW5cIixcclxuICAgIFNUX0JPVDpcIkJvdFwiLFxyXG5cclxuICAgIFNUX1FVRVNUSU9OX0FDVElPTjpcIkNvdW50XCIsXHJcbiAgICBTVF9DU0FUX0FOU1dFUl9BQ1RJT046XCJWZXJ5IGRpc3NhdGlzZmllZCwgRGlzc2F0aXNmaWVkLCBOZXV0cmFsLCBTYXRpc2ZpZWQsIFZlcnkgc2F0aXNmaWVkXCIsXHJcbiAgICBTVF9DRVNfQU5TV0VSX0FDVElPTjpcIlZlcnkgZGlmZmljdWx0LCBEaWZmaWN1bHQsIE5ldXRyYWwsIEVhc3ksIFZlcnkgZWFzeSBcIixcclxuICAgIFNUX05QU19BTlNXRVJfQUNUSU9OOlwiRGV0cmFjdG9ycywgUGFzc2l2ZXMgb3IgUHJvbW90ZXJzXCIsXHJcblxyXG4gICAgU1RfUkVBU09OX0FDVElPTjpcIlNjb3JlIChzdXJ2ZXkgYW5zd2VyKXxVc2VyIGlucHV0XCJcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29uc3RhbnRzIiwiaW1wb3J0ICogYXMgc3VwcCBmcm9tICcuL3N1cHBvcnRGdW5jdGlvbnMnO1xyXG5cclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbnZhciBsYXN0RnJhbWVcclxuXHJcbmNvbnN0IGNyZWF0ZVRyYWNraW5ncyA9IGFzeW5jIGZ1bmN0aW9uICh0cmFja0RhdGEpIHtcclxuICAgIHZhciBwb3NpdGlvblggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueFxyXG4gICAgdmFyIHBvc2l0aW9uWUNhdGVnb3J5ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnlcclxuICAgIHZhciBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnROb2RlPiA9IFtdXHJcbiAgICB2YXIgY29sb3IgPSBzdXBwLnRyYWNraW5nQ29sb3IodHJhY2tEYXRhLnRyYWNrQ29sb3IpXHJcbiAgICB2YXIgdHJhY2tDYXRlZ29yeSA9IHRyYWNrRGF0YS5jYXRlZ29yeVxyXG5cclxuICAgIC8vT3JpZ2VUcmFja1xyXG4gICAgaWYgKHRyYWNrRGF0YS5vcmlnaW4pIHtcclxuICAgICAgICB2YXIgY2F0ZWdvcnlOYW1lID0gdHJhY2tEYXRhLm9yaWdpbkNhdGVnb3J5ID8gY29uc3RhbnRzLk9SSUdFTV9PUklHRU1fQ0FURUdPUklBIDogY29uc3RhbnRzLk9SSUdFTV9FWENFQ0FPX0NBVEVHT1JJQVxyXG4gICAgICAgIHZhciBhY3Rpb25OYW1lID0gdHJhY2tEYXRhLm9yaWdpbkNhdGVnb3J5ID8gY29uc3RhbnRzLk9SSUdFTV9PUklHRU1fQUNBTyA6IGNvbnN0YW50cy5PUklHRU1fRVhDRUNBT19BQ0FPXHJcbiAgICAgICAgdmFyIGNhdGVnb3J5OiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBjYXRlZ29yeU5hbWUsIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIGNvbG9yKVxyXG4gICAgICAgIHZhciBhY3Rpb246IFRleHROb2RlID0gYXdhaXQgc3VwcC5jcmVhdGVTdWJUZXh0KGFjdGlvbk5hbWUsIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnkgKyAxNSlcclxuICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDY1XHJcbiAgICAgICAgaWYgKHRyYWNrRGF0YS5pc1JpZ3RoKVxyXG4gICAgICAgICAgICBzdXBwLmNoYW5nZURpcmVjdGlvbihbY2F0ZWdvcnksIGFjdGlvbl0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9NZW51IFRyYWNraW5nc1xyXG4gICAgaWYgKHRyYWNrRGF0YS5wcmluY2lwYWwpIHtcclxuICAgICAgICB2YXIgb3B0TWVudSA9IHRyYWNrRGF0YS5wcmluY2lwYWxcclxuICAgICAgICB2YXIgb3B0Q2F0ZWdvcnkgPSBbY29uc3RhbnRzLkVYSUJJQ0FPX0NBVEVHT1JJQSwgY29uc3RhbnRzLlNFTEVDQU9fQ0FURUdPUklBLCBjb25zdGFudHMuSU5FU1BFUkFET19DQVRFR09SSUEsIGNvbnN0YW50cy5JTlBVVF9DQVRFR09SSUFdXHJcbiAgICAgICAgdmFyIG9wdEFjdGlvbiA9IFtjb25zdGFudHMuRVhJQklDQU9fQUNBTywgY29uc3RhbnRzLlNFTEVDQU9fQUNBTywgY29uc3RhbnRzLklORVNQRVJBRE9fQUNBTywgY29uc3RhbnRzLklOUFVUX0FDQU9dXHJcbiAgICAgICAgdmFyIG9wdE1lbnVDcmVhdGU6IEFycmF5PFRleHROb2RlPiA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBvcHRNZW51Lmxlbmd0aDsgaSsrLCBqKyspIHtcclxuICAgICAgICAgICAgaWYgKG9wdE1lbnVbaV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBvcHRDYXRlZ29yeVtqXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSwgY29sb3IpXHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYXdhaXQgc3VwcC5jcmVhdGVTdWJUZXh0KG9wdEFjdGlvbltqXSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSArIDE1KVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0cmFja0RhdGEuaXNSaWd0aClcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goc3VwcC5jcmVhdGVDb21wb25lbnQoW2NhdGVnb3J5LCBhY3Rpb25dLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBcIlRyYWNraW5nXCIpKVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0TWVudUNyZWF0ZS5wdXNoKGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdE1lbnVDcmVhdGUucHVzaChhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbllDYXRlZ29yeSArPSA0MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFja0RhdGEuaXNSaWd0aCkge1xyXG4gICAgICAgICAgICBpZiAob3B0TWVudUNyZWF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBwLmNoYW5nZURpcmVjdGlvbihvcHRNZW51Q3JlYXRlKVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRNZW51Q3JlYXRlLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKHN1cHAuY3JlYXRlQ29tcG9uZW50KFtvcHRNZW51Q3JlYXRlW2ldLCBvcHRNZW51Q3JlYXRlW2kgKyAxXV0sIG9wdE1lbnVDcmVhdGVbaV0ueCA8IG9wdE1lbnVDcmVhdGVbaSArIDFdLnggPyBvcHRNZW51Q3JlYXRlW2ldLnggOiBvcHRNZW51Q3JlYXRlW2kgKyAxXS54LCBvcHRNZW51Q3JlYXRlW2ldLnksIFwiVHJhY2tcIikpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1ZhbGlkYXRpb24gVHJhY2tcclxuICAgIGlmICh0cmFja0RhdGEudmFsaWRhdGlvbikge1xyXG4gICAgICAgIHBvc2l0aW9uWUNhdGVnb3J5ICs9IDM1XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5OiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlVGV4dCh0cmFja0NhdGVnb3J5LCBjb25zdGFudHMuVkFMSURBQ0FPX0NBVEVHT1JJQSwgcG9zaXRpb25YLCBwb3NpdGlvbllDYXRlZ29yeSlcclxuICAgICAgICB2YXIgYWN0aW9uOiBUZXh0Tm9kZSA9IGF3YWl0IHN1cHAuY3JlYXRlU3ViVGV4dChjb25zdGFudHMuVkFMSURBQ0FPX0FDQU8sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnkgKyAxNSlcclxuICAgICAgICBhY3Rpb24ueCA9IChjYXRlZ29yeS54ICsgY2F0ZWdvcnkud2lkdGggLyAyKSAtIChhY3Rpb24ud2lkdGggLyAyKVxyXG4gICAgICAgIGNvbXBvbmVudHMucHVzaChzdXBwLmNyZWF0ZUNvbXBvbmVudChbY2F0ZWdvcnksIGFjdGlvbl0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIFwiVHJhY2tpbmdcIikpXHJcbiAgICAgICAgcG9zaXRpb25ZQ2F0ZWdvcnkgKz0gNjVcclxuICAgIH1cclxuICAgIC8vU3VjZXNzIHRyYWNrXHJcbiAgICBpZiAodHJhY2tEYXRhLnN1Y2Vzcykge1xyXG4gICAgICAgIHZhciBvcHRUcmFja2luc1N1Y2Vzc28gPSBbY29uc3RhbnRzLlNUX1FVRVNUSU9OX0NBVEVHT1JZLCBjb25zdGFudHMuU1RfQU5TV0VSX0NBVEVHT1JZLCBjb25zdGFudHMuU1RfUkVBU09OX0NBVEVHT1JZXVxyXG4gICAgICAgIHZhciBhdHRlbmRhbnRBY3Rpb24gPSB0cmFja0RhdGEuc3VjZXNzRmxvdyA/IGNvbnN0YW50cy5TVF9CT1QgOiBjb25zdGFudHMuU1RfSFVNQU5cclxuICAgICAgICB2YXIgb3B0VEs7XHJcbiAgICAgICAgdmFyIGFjdGlvbkFuc3dlcjtcclxuICAgICAgICBvcHRNZW51Q3JlYXRlID0gW11cclxuICAgICAgICBpZiAodHJhY2tEYXRhLnN1Y2Vzc1NlYXJjaCA9PSBcIkNTQVRcIikge1xyXG4gICAgICAgICAgICBhY3Rpb25BbnN3ZXIgPSBjb25zdGFudHMuU1RfQ1NBVF9BTlNXRVJfQUNUSU9OXHJcbiAgICAgICAgICAgIG9wdFRLID0gY29uc3RhbnRzLlNUX1AxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRyYWNrRGF0YS5zdWNlc3NTZWFyY2ggPT0gXCJDRVNcIikge1xyXG4gICAgICAgICAgICBhY3Rpb25BbnN3ZXIgPSBjb25zdGFudHMuU1RfQ0VTX0FOU1dFUl9BQ1RJT05cclxuICAgICAgICAgICAgb3B0VEsgPSBjb25zdGFudHMuU1RfUDJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdGlvbkFuc3dlciA9IGNvbnN0YW50cy5TVF9OUFNfQU5TV0VSX0FDVElPTlxyXG4gICAgICAgICAgICBvcHRUSyA9IGNvbnN0YW50cy5TVF9QM1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWN0aW9uc1RLID0gW2Ake29wdFRLfSAke2F0dGVuZGFudEFjdGlvbn18Q291bnRgLCBgJHtvcHRUS30gJHthdHRlbmRhbnRBY3Rpb259fCR7YWN0aW9uQW5zd2VyfWAsIGAke29wdFRLfSAke2F0dGVuZGFudEFjdGlvbn18JHtjb25zdGFudHMuU1RfUkVBU09OX0FDVElPTn1gXVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0VHJhY2tpbnNTdWNlc3NvLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2F0ZWdvcnkgPSBhd2FpdCBzdXBwLmNyZWF0ZVN1Y2Vzc1RleHQob3B0VHJhY2tpbnNTdWNlc3NvW2ldLCBwb3NpdGlvblgsIHBvc2l0aW9uWUNhdGVnb3J5LCBjb2xvcilcclxuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGF3YWl0IHN1cHAuY3JlYXRlU3ViVGV4dChhY3Rpb25zVEtbaV0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnkgKyAxNSlcclxuICAgICAgICAgICAgaWYgKCF0cmFja0RhdGEuaXNSaWd0aClcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChzdXBwLmNyZWF0ZUNvbXBvbmVudChbY2F0ZWdvcnksIGFjdGlvbl0sIHBvc2l0aW9uWCwgcG9zaXRpb25ZQ2F0ZWdvcnksIFwiVHJhY2tpbmdcIikpXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0TWVudUNyZWF0ZS5wdXNoKGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgb3B0TWVudUNyZWF0ZS5wdXNoKGFjdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3NpdGlvbllDYXRlZ29yeSArPSA0MFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYWNrRGF0YS5pc1JpZ3RoKSB7XHJcbiAgICAgICAgICAgIHN1cHAuY2hhbmdlRGlyZWN0aW9uKG9wdE1lbnVDcmVhdGUpXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0TWVudUNyZWF0ZS5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKHN1cHAuY3JlYXRlQ29tcG9uZW50KFtvcHRNZW51Q3JlYXRlW2ldLCBvcHRNZW51Q3JlYXRlW2kgKyAxXV0sIG9wdE1lbnVDcmVhdGVbaV0ueCA8IG9wdE1lbnVDcmVhdGVbaSArIDFdLnggPyBvcHRNZW51Q3JlYXRlW2ldLnggOiBvcHRNZW51Q3JlYXRlW2kgKyAxXS54LCBvcHRNZW51Q3JlYXRlW2ldLnksIFwiVHJhY2tcIikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0RnJhbWUgPSBzdXBwLmFkZE5vZGVzVG9GcmFtZShjb21wb25lbnRzLCBsYXN0RnJhbWUpXHJcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBjb21wb25lbnRzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRyYWNraW5ncyIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZnVuY3Rpb24gZWRpdFRyYWNrQ29sb3Iobm9kZXM6IENvbXBvbmVudE5vZGUsIGNvbG9yKSB7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWx1ZUJhc2VkT25SY29sb3IoY29sb3IpIHsgICAgXHJcbiAgICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICAgICAgY2FzZSBjb25zdGFudHMuREVGQVVMVF9DT0xPUi5yOiByZXR1cm4gXCJuZXdcIlxyXG4gICAgICAgIGNhc2UgY29uc3RhbnRzLkVSUk9TX0NPTE9SLnI6IHJldHVybiBcImVycm9yXCJcclxuICAgICAgICBjYXNlIGNvbnN0YW50cy5WQUxJREFERURfQ09MT1IucjogcmV0dXJuIFwidmFsaWRhZGVkXCJcclxuICAgICAgICBjYXNlIGNvbnN0YW50cy5TVUNFU1NfQ09MT1IucjogcmV0dXJuIFwic3VjZXNzXCJcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gXCJuZXdcIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2VkaXRUcmFja0NvbG9yfVxyXG5leHBvcnR7dmFsdWVCYXNlZE9uUmNvbG9yfVxyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRleHQobmFtZSwgdGlwbywgcG9zaXRpb25YLCBwb3NpdGlvblksIGNvbG9yPykge1xyXG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH0pXHJcbiAgICB2YXIgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIHRleHQubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfVxyXG4gICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiBjb2xvciA/IGNvbG9yIDogeyByOiAwLjkxLCBnOiAwLjY3LCBiOiAwIH0gfV1cclxuICAgIHRleHQuZm9udFNpemUgPSAxNFxyXG4gICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiV0lEVEhfQU5EX0hFSUdIVFwiXHJcbiAgICB0ZXh0LnggPSAocG9zaXRpb25YKTtcclxuICAgIHRleHQueSA9IChwb3NpdGlvblkpO1xyXG4gICAgdGV4dC5jaGFyYWN0ZXJzID0gYCR7bmFtZX0gJHt0aXBvfWBcclxuICAgIHJldHVybiB0ZXh0O1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN1Y2Vzc1RleHQodGlwbywgcG9zaXRpb25YLCBwb3NpdGlvblksIGNvbG9yPykge1xyXG4gICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiQm9sZFwiIH0pXHJcbiAgICB2YXIgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIHRleHQubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gICAgdGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJCb2xkXCIgfVxyXG4gICAgdGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiBjb2xvciA/IGNvbG9yIDogeyByOiAwLjkxLCBnOiAwLjY3LCBiOiAwIH0gfV1cclxuICAgIHRleHQuZm9udFNpemUgPSAxNFxyXG4gICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiV0lEVEhfQU5EX0hFSUdIVFwiXHJcbiAgICB0ZXh0LnggPSAocG9zaXRpb25YKTtcclxuICAgIHRleHQueSA9IChwb3NpdGlvblkpO1xyXG4gICAgdGV4dC5jaGFyYWN0ZXJzID0gYCR7dGlwb31gXHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVTdWJUZXh0KG5hbWUsIHBvc2l0aW9uWCwgcG9zaXRpb25ZKSB7XHJcbiAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIlJvYm90b1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSlcclxuICAgIHZhciB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgdGV4dC5uYW1lID0gXCJtZXNzYWdlXCI7XHJcbiAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9XHJcbiAgICB0ZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMC40OSwgZzogMC40NywgYjogMC40NyB9IH1dXHJcbiAgICB0ZXh0LmZvbnRTaXplID0gOVxyXG4gICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiV0lEVEhfQU5EX0hFSUdIVFwiXHJcbiAgICB0ZXh0LnggPSAocG9zaXRpb25YKTtcclxuICAgIHRleHQueSA9IChwb3NpdGlvblkpO1xyXG4gICAgdGV4dC5jaGFyYWN0ZXJzID0gYCR7bmFtZX1gXHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQobm9kZXNUb0NvbXBvbmVudCwgcG9zaXRpb25YLCBwb3NpdGlvblksIElEKSB7XHJcbiAgICBjb25zdCBub2RlczogQXJyYXk8VGV4dE5vZGU+ID0gbm9kZXNUb0NvbXBvbmVudDtcclxuICAgIHZhciBjb21wb25lbnQgPSBmaWdtYS5jcmVhdGVDb21wb25lbnQoKVxyXG4gICAgY29tcG9uZW50Lm5hbWUgPSBJRDtcclxuICAgIGNvbXBvbmVudC54ID0gcG9zaXRpb25YO1xyXG4gICAgY29tcG9uZW50LnkgPSBwb3NpdGlvblk7XHJcbiAgICB2YXIgd2lkdGggPSBub2Rlc1swXS53aWR0aCA+IG5vZGVzWzFdLndpZHRoID8gbm9kZXNbMF0ud2lkdGggOiBub2Rlc1sxXS53aWR0aFxyXG4gICAgdmFyIGhlaWd0aCA9IG5vZGVzWzBdLmhlaWdodCArIG5vZGVzWzFdLmhlaWdodFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlc1RvQ29tcG9uZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29tcG9uZW50LmFwcGVuZENoaWxkKG5vZGVzW2ldKVxyXG4gICAgICAgIG5vZGVzW2ldLnggLT0gY29tcG9uZW50LnhcclxuICAgICAgICBub2Rlc1tpXS55IC09IGNvbXBvbmVudC55XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnQucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKHdpZHRoLCBoZWlndGgpO1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROb2Rlc1RvRnJhbWUobm9kZXM6IEFycmF5PENvbXBvbmVudE5vZGU+LCBsYXN0RnJhbWU/OiBzdHJpbmcpIHtcclxuICAgIGlmIChsYXN0RnJhbWUpIHtcclxuICAgICAgICB2YXIgZnJhbWUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kT25lKGUgPT4gZS5uYW1lID09IGxhc3RGcmFtZSkgYXMgRnJhbWVOb2RlXHJcbiAgICAgICAgaWYgKGJldHdlbihmcmFtZSwgbm9kZXNbMF0pKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGMpXHJcbiAgICAgICAgICAgICAgICBjLnggLT0gZnJhbWUueFxyXG4gICAgICAgICAgICAgICAgYy55IC09IGZyYW1lLnlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZyYW1lLm5hbWVcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGZyYW1lc0luUGFnZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwobiA9PiBuLnR5cGUgPT09IFwiRlJBTUVcIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lc0luUGFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBmcmFtZXNJblBhZ2VbaV0gYXMgRnJhbWVOb2RlXHJcbiAgICAgICAgICAgIGlmIChiZXR3ZW4oZnJhbWUsIG5vZGVzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZXMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGMpXHJcbiAgICAgICAgICAgICAgICAgICAgYy54IC09IGZyYW1lLnhcclxuICAgICAgICAgICAgICAgICAgICBjLnkgLT0gZnJhbWUueVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZS5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBiZXR3ZW4oZnJhbWU6IEZyYW1lTm9kZSwgbm9kZTogQ29tcG9uZW50Tm9kZSkge1xyXG4gICAgaWYgKG5vZGUueSA+PSBmcmFtZS55ICYmIG5vZGUueSA8PSBmcmFtZS55ICsgZnJhbWUuaGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKG5vZGUueCA+PSBmcmFtZS54ICYmIG5vZGUueCA8PSBmcmFtZS54ICsgZnJhbWUud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIHRyYWNraW5nQ29sb3IodHlwZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibmV3XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHMuREVGQVVMVF9DT0xPUjtcclxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0YW50cy5FUlJPU19DT0xPUjtcclxuICAgICAgICBjYXNlIFwidmFsaWRhZGVkXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdGFudHMuVkFMSURBREVEX0NPTE9SO1xyXG4gICAgICAgIGNhc2UgXCJzdWNlc3NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0YW50cy5TVUNFU1NfQ09MT1I7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0YW50cy5ERUZBVUxUX0NPTE9SO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbihlbGVtZW50czogQXJyYXk8VGV4dE5vZGU+KSB7XHJcbiAgICB2YXIgcG9zTWFpb3I7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBwb3NNYWlvciA9IGk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldLndpZHRoID4gZWxlbWVudHNbcG9zTWFpb3JdLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NNYWlvciA9IGlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciB4UmVmID0gZWxlbWVudHNbcG9zTWFpb3JdLnggKyBlbGVtZW50c1twb3NNYWlvcl0ud2lkdGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgIT0gcG9zTWFpb3IpIHtcclxuICAgICAgICAgICAgZWxlbWVudHNbaV0ueCA9IHhSZWYgLSBlbGVtZW50c1tpXS53aWR0aFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBjcmVhdGVUZXh0IH1cclxuZXhwb3J0IHsgY3JlYXRlU3VjZXNzVGV4dCB9XHJcbmV4cG9ydCB7IGNyZWF0ZVN1YlRleHQgfVxyXG5leHBvcnQgeyBjcmVhdGVDb21wb25lbnQgfVxyXG5leHBvcnQgeyBhZGROb2Rlc1RvRnJhbWUgfVxyXG5leHBvcnQgeyBiZXR3ZW4gfVxyXG5leHBvcnQgeyB0cmFja2luZ0NvbG9yIH1cclxuZXhwb3J0IHsgY2hhbmdlRGlyZWN0aW9uIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciB1aVdpZHRoID0gNDAwXG52YXIgdWlIZWlndGggPSAzOTBcbnZhciBhdXRvID0gdHJ1ZTtcbnZhciBzZWxlY3RpbmcgPSBmYWxzZVxudmFyIG5vZGVzU2VsZWN0ZWRzPVtdXG5pbXBvcnQgY3JlYXRlVHJhY2tpbmdzIGZyb20gJy4vZnVuY3Rpb25zL2NyZWF0ZVRyYWNraW5nJ1xuaW1wb3J0ICogYXMgZWRpdCBmcm9tICcuL2Z1bmN0aW9ucy9lZGl0VHJhY2tpbmcnXG5pbXBvcnQge3RyYWNraW5nQ29sb3J9IGZyb20gJy4vZnVuY3Rpb25zL3N1cHBvcnRGdW5jdGlvbnMnXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkucmVzaXplKHVpV2lkdGgsIHVpSGVpZ3RoKVxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlVHJhY2tpbmcnKSB7XG4gICAgY3JlYXRlVHJhY2tpbmdzKG1zZy50cmFja0RhdGEpXG4gIH1cbiAgaWYgKG1zZy50eXBlID09PSAnY2hhbmdlV2luZG93U2l6ZScpIHtcbiAgICB2YXIgeyBjYW5FeHBhbmQsIHNpemUgfSA9IG1zZy5tZXNzYWdlXG4gICAgaWYgKGNhbkV4cGFuZCkge1xuICAgICAgdWlIZWlndGggKz0gc2l6ZVxuICAgICAgZmlnbWEudWkucmVzaXplKHVpV2lkdGgsIHVpSGVpZ3RoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVpSGVpZ3RoIC09IHNpemVcbiAgICAgIGZpZ21hLnVpLnJlc2l6ZSh1aVdpZHRoLCB1aUhlaWd0aClcbiAgICB9XG4gIH1cbiAgaWYobXNnLnR5cGU9PT1cImNoYW5nZVNlbGVjdGlvbkNvbG9yc1wiKXtcbiAgICBub2Rlc1NlbGVjdGVkcy5mb3JFYWNoKG5vZGU9PntcbiAgICAgIG5vZGUuY2hpbGRyZW5bMF0uZmlsbHNbMF0uY29sb3I9dHJhY2tpbmdDb2xvcihtc2cuaWQpXG4gICAgfSlcbiAgfVxufTtcblxuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcInNhZGFzXCIpO1xuICBcbiAgaWYgKGF1dG8pIHtcbiAgICB2YXIgdGV4dFZhbHVlID0gXCJcIlxuICAgIHZhciBub2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBzZWxlY3Rpbmc9dHJ1ZVxuICAgICAgdmFyIGF2YWlsYWJsZSA9IHRydWVcbiAgICAgIHZhciBzYW1lQ29sb3IgPSB0cnVlXG4gICAgICB2YXIgY29sb3JcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXVxuICAgICAgICBub2Rlc1NlbGVjdGVkcy5wdXNoKG5vZGUpXG4gICAgICAgIGlmICghKChub2RlLnR5cGUgPT0gXCJDT01QT05FTlRcIiB8fCBub2RlLnR5cGUgPT0gXCJJTlNUQU5DRVwiKSAmJiBub2RlLm5hbWUubWF0Y2goL3RyYWNrL2lnKSkpIHtcbiAgICAgICAgICBhdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmKHNhbWVDb2xvcil7XG4gICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUgYXMgQ29tcG9uZW50Tm9kZVxuICAgICAgICAgICAgdmFyIHRleHQgPSBub2RlLmNoaWxkcmVuWzBdIGFzIFRleHROb2RlXG4gICAgICAgICAgICB2YXIgdGV4dENvbG9yID0gdGV4dC5maWxsc1swXS5jb2xvclxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dENvbG9yKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGV4dENvbG9yLnIhPWNvbG9yLnIpXG4gICAgICAgICAgICAgIHNhbWVDb2xvcj1mYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUgYXMgQ29tcG9uZW50Tm9kZVxuICAgICAgICAgICAgdmFyIHRleHQgPSBub2RlLmNoaWxkcmVuWzBdIGFzIFRleHROb2RlXG4gICAgICAgICAgICBjb2xvciA9IHRleHQuZmlsbHNbMF0uY29sb3JcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gICBcbiAgICAgIGNvbnNvbGUubG9nKHNhbWVDb2xvcik7XG4gICAgICBjb25zb2xlLmxvZyhhdmFpbGFibGUpO1xuICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICAgICAgICBpZihzYW1lQ29sb3Ipe1xuICAgICAgICAgIHZhciBtc2c9e1xuICAgICAgICAgICAgdHlwZTpcImNoYW5nZSB0eXBlXCIsXG4gICAgICAgICAgICB2YWx1ZTplZGl0LnZhbHVlQmFzZWRPblJjb2xvcihjb2xvci5yKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShtc2cpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHNlbGVjdGluZz1mYWxzZVxuICAgICAgdmFyIGNoYW5nZT17XG4gICAgICAgIHR5cGU6XCJjaGFuZ2VTZWxlY3Rpb25cIixcbiAgICAgICAgdmFsdWU6ZmFsc2VcbiAgICAgIH1cbiAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGNoYW5nZSlcbiAgICB9XG4gICAgLyogaWYgKG5vZGUubGVuZ3RoID4gMCl7XG4gICAgICAgaWYgKG5vZGVbMF0udHlwZSA9PSBcIlRFWFRcIikge1xuICAgICAgICAgdmFyIHRleHRWYWx1ZSA9IG5vZGVbMF0uY2hhcmFjdGVycy5zcGxpdCgvZXhpYmljYW98c2VsZWNhb3xpbmVzcGVyYWRvfGlucHV0IGluZXNwZXJhZG98cXVlc3Rpb258YW5zd2VyfHJlYXNvbnxvcmlnZW18aW5wdXR8dmFsaWRhY2FvL2lnKVswXVxuICAgICAgIH1cbiAgICAgICBpZigobm9kZVswXS50eXBlPT1cIkNPTVBPTkVOVFwifHxub2RlWzBdLnR5cGUgPT0gXCJJTlNUQU5DRVwiKSYmbm9kZVswXS5uYW1lLm1hdGNoKC90cmFjay9pZykpe1xuICAgICAgICAgdmFyIGNvbXBvbmVudD1ub2RlWzBdXG4gICAgICAgICBjb25zb2xlLmxvZyhcIsOJIGNvbXBvbmVudFwiKVxuICAgICAgICAgY29uc29sZS5sb2coY29tcG9uZW50KVxuICAgICAgICAgdmFyIHRleHRDb21wb25lbnQ9Y29tcG9uZW50LmNoaWxkcmVuWzBdIGFzIFRleHROb2RlXG4gICAgICAgICB0ZXh0VmFsdWU9IHRleHRDb21wb25lbnQuY2hhcmFjdGVycy5zcGxpdCgvZXhpYmljYW98c2VsZWNhb3xpbmVzcGVyYWRvfGlucHV0IGluZXNwZXJhZG98cXVlc3Rpb258YW5zd2VyfHJlYXNvbnxvcmlnZW18aW5wdXR8dmFsaWRhY2FvL2lnKVswXVxuICAgICAgIH1cbiAgICAgICBub2RlID0gbnVsbFxuICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHRleHRWYWx1ZSlcbiAgICAgfVxuICAgICAqL1xuICB9XG4gIGNvbnNvbGUubG9nKHNlbGVjdGluZyk7XG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=