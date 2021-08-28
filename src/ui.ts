import './ui.css'
/*
document.getElementById('create').onclick = () => {
  console.log("sarsarrs")
  const textbox = document.getElementById('count') as HTMLInputElement
  const count = parseInt(textbox.value, 10)
  parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
*/
document.addEventListener('keypress', function (e) {
  if (e.key == "Enter") {
    window["createTracking"]()
  }
}, false)

window['changeVisibilityTKSucesso'] = function (rdButton) {
  var trackingsSucesso = document.querySelectorAll<HTMLElement>('.trackingsSucesso')[0];
  var actionsTrackings = document.querySelectorAll<HTMLElement>('.actionsTrackings')[0];
  var actions = document.querySelectorAll<HTMLElement>('.acoesCheck')[0];
  var value = rdButton.checked
  var name = rdButton.name
  console.log(rdButton.name);  
  if (value) {
    name=="sucesso"?trackingsSucesso.style.display = 'inline-block':actionsTrackings.style.display='inline-block'
    name=="origin"?actions.style.margin = '0 0 5px 0':null
  } else {
    name=="sucesso"?trackingsSucesso.style.display = 'none':actionsTrackings.style.display='none'
    name=="origin"?actions.style.margin = '0 0 0 0':null
  }
  var message={
    canExpand:value,
    size:name=="sucesso"?80:50
  }
  parent.postMessage({ pluginMessage: { type: 'changeWindowSize', message } }, '*')
}
function getHtmlElement(className:string){
  return document.querySelector<HTMLInputElement>(`.${className}`).checked
}
function getRadioSelection(className:string){
  var colorsOptions = document.querySelectorAll<HTMLInputElement>(`.${className}>input`) 
  for(var i=0; i<colorsOptions.length;i++){
    if(colorsOptions[i].checked)
      return colorsOptions[i].id
  }
}
function getPrincipal(){
  return[
    getHtmlElement("exibition"),
    getHtmlElement("selection"),
    getHtmlElement("unexpected"),
  ]
}

window["createTracking"]=function() {
  var trackData={
    direction:getHtmlElement("left"),
    trackColor:getRadioSelection("type"),
    origin:getHtmlElement("origeCategory"),
    originCategory:getHtmlElement("origeOption"),
    principal:getPrincipal(),
    input:getHtmlElement("inputC"),
    validation:getHtmlElement("validation"),
    sucess:getHtmlElement("TkSucesso"),
    sucessFlow:getHtmlElement("sucessBot"),
    sucessSearch:getRadioSelection("sS")
  }
  console.log(trackData);
  parent.postMessage({ pluginMessage: { type: 'createTracking', trackData } }, '*')
  
}
