var uiWidth = 400
var uiHeigth = 390
import createTrackings from './functions/createTracking'

figma.showUI(__html__);
figma.ui.resize(uiWidth, uiHeigth)
figma.ui.onmessage = msg => {
  if (msg.type === 'createTracking'){
    createTrackings(msg.trackData)
  } 
  if (msg.type === 'changeWindowSize') {
    var { canExpand, size } = msg.message
    if (canExpand){
      uiHeigth += size
      figma.ui.resize(uiWidth,uiHeigth)
    }
    else{
      uiHeigth -= size
      figma.ui.resize(uiWidth, uiHeigth)
    }
  }
};
