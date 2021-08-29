var uiWidth = 400
var uiHeigth = 390
var auto = true;
var selecting = false
var nodesSelecteds=[]
import createTrackings from './functions/createTracking'
import * as edit from './functions/editTracking'
import {trackingColor} from './functions/supportFunctions'
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
  if(msg.type==="changeSelectionColors"){
    nodesSelecteds.forEach(node=>{
      node.children[0].fills[0].color=trackingColor(msg.id)
    })
  }
};

figma.on("selectionchange", () => {
  console.log("sadas");
  
  if (auto) {
    var textValue = ""
    var nodes = figma.currentPage.selection
    if (nodes.length > 0) {
      selecting=true
      var available = true
      var sameColor = true
      var color
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i]
        nodesSelecteds.push(node)
        if (!((node.type == "COMPONENT" || node.type == "INSTANCE") && node.name.match(/track/ig))) {
          available = false;
          break;
        } else if(sameColor){
          if (i != 0) {
            node = node as ComponentNode
            var text = node.children[0] as TextNode
            var textColor = text.fills[0].color
            console.log(textColor);
            
            if(textColor.r!=color.r)
              sameColor=false;
          } else {
            node = node as ComponentNode
            var text = node.children[0] as TextNode
            color = text.fills[0].color
            console.log(color);
          }
        }
      }   
      console.log(sameColor);
      console.log(available);
      if (available) {
        if(sameColor){
          var msg={
            type:"change type",
            value:edit.valueBasedOnRcolor(color.r)
          }
          figma.ui.postMessage(msg)
        }
      }
    }else{
      selecting=false
      var change={
        type:"changeSelection",
        value:false
      }
      figma.ui.postMessage(change)
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
})

