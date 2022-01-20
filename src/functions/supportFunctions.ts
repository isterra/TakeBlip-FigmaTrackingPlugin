import constants from "../constants/colors";

async function createText(name, tipo, positionX, positionY, color?) {
    await figma.loadFontAsync({ family: "Roboto", style: "Bold" })
    var text = figma.createText();
    text.name = "message";
    text.fontName = { family: "Roboto", style: "Bold" }
    text.fills = [{ type: 'SOLID', color: color ? color : constants.DEFAULT_COLOR }]
    text.fontSize = 14
    text.textAutoResize = "WIDTH_AND_HEIGHT"
    text.x = (positionX);
    text.y = (positionY);
    text.characters = `${name} ${tipo}`
    return text;
}
async function createSucessText(tipo, positionX, positionY, color?) {
    await figma.loadFontAsync({ family: "Roboto", style: "Bold" })
    var text = figma.createText();
    text.name = "message";
    text.fontName = { family: "Roboto", style: "Bold" }
    text.fills = [{ type: 'SOLID', color: color ? color : constants.DEFAULT_COLOR }]
    text.fontSize = 14
    text.textAutoResize = "WIDTH_AND_HEIGHT"
    text.x = (positionX);
    text.y = (positionY);
    text.characters = `${tipo}`
    return text;
}
async function createSubText(name, positionX, positionY) {
    await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
    var text = figma.createText();
    text.name = "message";
    text.fontName = { family: "Roboto", style: "Regular" }
    text.fills = [{ type: 'SOLID', color: { r: 0.49, g: 0.47, b: 0.47 } }]
    text.fontSize = 9
    text.textAutoResize = "WIDTH_AND_HEIGHT"
    text.x = (positionX);
    text.y = (positionY);
    text.characters = `${name}`
    return text;
}
function createComponent(nodesToComponent, positionX, positionY, ID) {
    const nodes: Array<TextNode> = nodesToComponent;
    var component = figma.createComponent()
    component.name = ID;
    component.x = positionX;
    component.y = positionY;
    var width = nodes[0].width > nodes[1].width ? nodes[0].width : nodes[1].width
    var heigth = nodes[0].height + nodes[1].height
    for (var i = 0; i < nodesToComponent.length; i++) {
        component.appendChild(nodes[i])
        nodes[i].x -= component.x
        nodes[i].y -= component.y
    }
    component.resizeWithoutConstraints(width, heigth);
    return component
}

function addNodesToFrame(nodes: Array<ComponentNode>, lastFrame?: string) {
    if (lastFrame) {
        var frame = figma.currentPage.findOne(e => e.name == lastFrame) as FrameNode
        if (betwen(frame, nodes[0])) {
            nodes.forEach((c) => {
                frame.appendChild(c)
                c.x -= frame.x
                c.y -= frame.y
            })
            return frame.name
        }
    } else {
        const framesInPage = figma.currentPage.findAll(n => n.type === "FRAME")
        for (var i = 0; i < framesInPage.length; i++) {
            var frame = framesInPage[i] as FrameNode
            if (betwen(frame, nodes[0])) {
                nodes.forEach((c) => {
                    frame.appendChild(c)
                    c.x -= frame.x
                    c.y -= frame.y
                })
                return frame.name
            }
        }
    }

}

function betwen(frame: FrameNode, node: ComponentNode) {
    if (node.y >= frame.y && node.y <= frame.y + frame.height) {
        if (node.x >= frame.x && node.x <= frame.x + frame.width) {
            return true;
        }
    }
    return false;
}
function trackingColor(type: string) {
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
function changeDirection(elements: Array<TextNode>) {
    var posMaior;
    for (var i = 0; i < elements.length; i++) {
        if (i == 0) {
            posMaior = i;
        } else {
            if (elements[i].width > elements[posMaior].width) {
                posMaior = i
            }
        }
    }
    var xRef = elements[posMaior].x + elements[posMaior].width;
    for (var i = 0; i < elements.length; i++) {
        if (i != posMaior) {
            elements[i].x = xRef - elements[i].width
        }
    }
}
function valueBasedOnRcolor(color) {    
    switch (color) {
        case constants.DEFAULT_COLOR.r: return "new"
        case constants.ERROS_COLOR.r: return "error"
        case constants.VALIDADED_COLOR.r: return "validaded"
        case constants.SUCESS_COLOR.r: return "sucess"
        default: return "new"
    }
}
export { createText }
export { createSucessText }
export { createSubText }
export { createComponent }
export { addNodesToFrame }
export { betwen }
export { trackingColor }
export { changeDirection }
export {valueBasedOnRcolor}