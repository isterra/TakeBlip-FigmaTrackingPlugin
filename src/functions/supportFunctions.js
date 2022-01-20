var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import constants from "../constants/colors";
function createText(name, tipo, positionX, positionY, color) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync({ family: "Roboto", style: "Bold" });
        var text = figma.createText();
        text.name = "message";
        text.fontName = { family: "Roboto", style: "Bold" };
        text.fills = [{ type: 'SOLID', color: color ? color : constants.DEFAULT_COLOR }];
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
        text.fills = [{ type: 'SOLID', color: color ? color : constants.DEFAULT_COLOR }];
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
            return constants.DEFAULT_COLOR;
        case "error":
            return constants.ERROS_COLOR;
        case "validaded":
            return constants.VALIDADED_COLOR;
        case "sucess":
            return constants.SUCESS_COLOR;
        default:
            return constants.DEFAULT_COLOR;
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
        case constants.DEFAULT_COLOR.r: return "new";
        case constants.ERROS_COLOR.r: return "error";
        case constants.VALIDADED_COLOR.r: return "validaded";
        case constants.SUCESS_COLOR.r: return "sucess";
        default: return "new";
    }
}
export { createText };
export { createSucessText };
export { createSubText };
export { createComponent };
export { addNodesToFrame };
export { betwen };
export { trackingColor };
export { changeDirection };
export { valueBasedOnRcolor };
//# sourceMappingURL=supportFunctions.js.map