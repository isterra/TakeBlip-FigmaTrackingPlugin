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


window['changeVisibilityTKSucesso'] = function (rdButton) {
  var trackingsSucesso = document.querySelectorAll<HTMLElement>('.trackingsSucesso')[0];
  console.log("To aqui ")
  console.log("ssdsad")
  console.log("dsfaadfghui")
  var value = rdButton.checked
  if (value) {
    trackingsSucesso.style.display = 'inline-block'
  } else {
    trackingsSucesso.style.display = 'none'
  }
  parent.postMessage({ pluginMessage: { type: 'changeWindowSize', value } }, '*')
}
