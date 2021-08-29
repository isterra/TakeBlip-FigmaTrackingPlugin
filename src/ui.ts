import './ui.css'
var changeSelectionColors=false

document.addEventListener('keypress', function (e) {
  if (e.key == "Enter") {
    window["createTracking"]()
  }
}, false)

document.querySelector<HTMLButtonElement>('#mapear').onclick=()=>{
  window["createTracking"]()
}
document.querySelector<HTMLButtonElement>('#limpar').onclick=()=>{
  var inputs = document.querySelectorAll<HTMLInputElement>('input')
  inputs.forEach(input=>{
    input.checked=false
  })
  document.querySelector<HTMLInputElement>('.CtInput').value=''
}
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
    getHtmlElement("inputC")
  ]
}
function originValidate(){
  console.log(getHtmlElement("origeOption")||getHtmlElement("exceptionOption"));
  return getHtmlElement("origeOption")||getHtmlElement("exceptionOption");
}
function sucessFlowValidadte(){
  return getHtmlElement("sucessBot")||getHtmlElement("sucessHuman")
}

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

onmessage = (event) => {
  var msg= event.data.pluginMessage
  console.log(msg);
  if(msg.type=="change type"){
    document.querySelector<HTMLInputElement>(`#${msg.value}`).checked=true
  }
  if(msg.type=="changeSelection"){
    changeSelectionColors=false
  }
}
  