import './ui.css'
var changeSelectionColors=false
var lastTypeSelected

//Create track on enter press
document.addEventListener('keypress', function (e) {
  if (e.key == "Enter") {
    window["createTracking"]()
  }
}, false)

//Create track on button click
document.querySelector<HTMLButtonElement>('#mapear').onclick=()=>{
  window["createTracking"]()
}

//Clear all inputs
document.querySelector<HTMLButtonElement>('#limpar').onclick=()=>{
  var inputs = document.querySelectorAll<HTMLInputElement>('input')
  inputs.forEach(input=>{
    input.checked=false
  })
  document.querySelector<HTMLInputElement>('.CtInput').value=''
}

//Change do color selected when select tracks
document.querySelectorAll<HTMLInputElement>('.type>input').forEach(
  radio=>{
    radio.onchange=()=>{
        if(changeSelectionColors){
          if(radio.checked){
            var id= radio.id
            parent.postMessage({ pluginMessage: { type: 'changeSelectionColors', id } }, '*')
          }
        }
    }
  }
)
//Change auto value
document.querySelector<HTMLInputElement>('#auto').onchange=()=>{
  var auto = document.querySelector<HTMLInputElement>('#auto').checked
  parent.postMessage({ pluginMessage: { type: 'changeAuto', auto } }, '*')
}

//Show aditional info track
window['changeVisibilityTKSucesso'] = function (rdButton) {
  var trackingsSucesso = document.querySelectorAll<HTMLElement>('.trackingsSucesso')[0];
  var actionsTrackings = document.querySelectorAll<HTMLElement>('.actionsTrackings')[0];
  var actions = document.querySelectorAll<HTMLElement>('.acoesCheck')[0];
  var value = rdButton.checked
  var name = rdButton.name
  if (value) {
    name=="sucesso"?trackingsSucesso.style.display = 'inline-block':actionsTrackings.style.display='inline-block'
    name=="origin"?actions.style.margin = '0 0 5px 0':null
  } else {
    name=="sucesso"?trackingsSucesso.style.display = 'none':actionsTrackings.style.display='none'
    name=="origin"?actions.style.margin = '0 0 0 0':null
  }
  var message={
    canExpand:value,
    size:name=="sucesso"?80:60
  }
  parent.postMessage({ pluginMessage: { type: 'changeWindowSize', message } }, '*')
}
//Create trackings
window["createTracking"]=function() {
  var trackData={
    category:document.querySelector<HTMLInputElement>('.CtInput').value,
    isRigth:getHtmlElement("left"),
    trackColor:getRadioSelection("type"),
    origin:getHtmlElement("origeCategory"),
    originCategory:getHtmlElement("origeOption"),
    principal:getPrincipal(),
    validation:getHtmlElement("validation"),
    sucess:getHtmlElement("TkSucesso"),
    sucessFlow:getHtmlElement("sucessBot"),
    sucessSearch:getRadioSelection("sS")
  }
  if(trackData.category||trackData.sucess){
    if(trackData.origin&&originValidate()||!trackData.origin)
      if(trackData.sucess&&sucessFlowValidadte()&&trackData.sucessSearch||!trackData.sucess)
        parent.postMessage({ pluginMessage: { type: 'createTracking', trackData } }, '*')
  }   
}

//Listen events of figma
onmessage = (event) => {
  var msg= event.data.pluginMessage
  if(msg.type=="change Category"){
    document.querySelector<HTMLInputElement>('.CtInput').value=msg.value
  }
  if(msg.type=="change diff colors"){
    setLastSelected()
    changeSelectionColors=true
    document.querySelectorAll<HTMLInputElement>('.type>input').forEach(rb=>rb.checked=false)
  }
  if(msg.type=="change type"){
    setLastSelected()
    changeSelectionColors=true
    document.querySelector<HTMLInputElement>(`#${msg.value}`).checked=true
  }
  if(msg.type=="changeSelection"){
    changeSelectionColors=false
    document.querySelector<HTMLInputElement>(`#${lastTypeSelected}`).checked=true
  }
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
    getHtmlElement("inputC")
  ]
}
function originValidate(){
  return getHtmlElement("origeOption")||getHtmlElement("exceptionOption");
}
function sucessFlowValidadte(){
  return getHtmlElement("sucessBot")||getHtmlElement("sucessHuman")
}
function setLastSelected(){
  var types = document.querySelectorAll<HTMLInputElement>('.type>input')
  for(var i=0;i<types.length;i++){
    if(types[i].checked){
      lastTypeSelected=types[i].id
      break;
    }
  }
}