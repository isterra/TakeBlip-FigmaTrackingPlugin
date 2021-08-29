var uiWidth = 400
var uiHeigth = 390
var auto = true;
var selecting = false
var nodesSelecteds = []
import createTrackings from './functions/createTracking'
import { trackingColor, valueBasedOnRcolor } from './functions/supportFunctions'
figma.showUI(__html__);
figma.ui.resize(uiWidth, uiHeigth)
figma.ui.onmessage = msg => {
  if (msg.type === 'createTracking') {
    createTrackings(msg.trackData)
  }
  if (msg.type === 'changeWindowSize') {
    var { canExpand, size } = msg.message
    if (canExpand) {
      uiHeigth += size
      figma.ui.resize(uiWidth, uiHeigth)
    }
    else {
      uiHeigth -= size
      figma.ui.resize(uiWidth, uiHeigth)
    }
  }
  if (msg.type === "changeSelectionColors") {
    nodesSelecteds.forEach(node => {
      var textNode = node.children[0] as TextNode
      var textNodeCloned = textNode.clone()
      textNodeCloned.fills = [{ type: 'SOLID', color: trackingColor(msg.id) }]
      node.children[0].fills = textNodeCloned.fills
    })
  }
  if (msg.type === "changeAuto") {
    auto = msg.auto
    if(!auto){
      nodesSelecteds=[]
    }
  }
};

figma.on("selectionchange", () => {
  if (auto) {
    nodesSelecteds = []
    var nodes = figma.currentPage.selection.slice()
    if (nodes.length > 0) {
      if (nodes.length == 1) {
        if ((nodes[0].type == "COMPONENT" || nodes[0].type == "INSTANCE") && nodes[0].name.match(/track/ig)) {
          node = nodes[0] as ComponentNode
          var textNode = node.children[0] as TextNode
          var changeCategory = {
            type: "change Category",
            value: textNode.characters.split(/exibicao|selecao|inesperado|input inesperado|question|answer|reason|origem|input|validacao/ig)[0]
          }
          figma.ui.postMessage(changeCategory)
        }
      }
      selecting = true
      var available = true
      var sameColor = true
      var color
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i]
        nodesSelecteds.push(node)
        if (!((node.type == "COMPONENT" || node.type == "INSTANCE") && node.name.match(/track/ig))) {
          available = false;
          break;
        } else if (sameColor) {
          if (i != 0) {
            var textNode = node.children[0] as TextNode
            if (textNode.fills[0].color.r != color.r)
              sameColor = false;
          } else {
            var textNode = node.children[0] as TextNode
            color = textNode.fills[0].color
          }
        }
      }
      if (available) {
        if (sameColor) {
          var msg = {
            type: "change type",
            value: valueBasedOnRcolor(color.r)
          }
          figma.ui.postMessage(msg)
        } else {
          var diffMessage = {
            type: "change diff colors",
          }
          figma.ui.postMessage(diffMessage)
        }
      } else {
        nodesSelecteds = []
      }
    } else {
      selecting = false
      var change = {
        type: "changeSelection",
        value: false
      }
      figma.ui.postMessage(change)
    }
  }
})

