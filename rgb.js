/* Recebe valores no bloco rgb */
let rgb = [
  inputRed = {
    id: '',
    valor: null,
  },
  inputGreen = {
    id: '',
    valor: null,
  },
  inputBlue = {
    id: '',
    valor: null,
  }
]

function getRgbValues(event) {
  if(event.type == Blockly.Events.BLOCK_CHANGE){
    novoValor = event.newValue
    for (let i = 0; i < rgb.length; i++) {
      if (event.blockId == rgb[i].id) {
        rgb[i].valor = novoValor
      }
    }
  }

  if(event.type == Blockly.Events.BLOCK_MOVE){    
    if(event.newInputName == 'red'){
      inputRed.id = event.blockId
    }
    if(event.newInputName == 'green'){
      inputGreen.id = event.blockId
    }
    if(event.newInputName == 'blue'){
      inputBlue.id = event.blockId
    }
  }
}
workspace.addChangeListener(getRgbValues);


/* muda texto para hexadecimal */
let textoHexa = {
  id: ''
}

function changeHexaName(event) {
  
  if(event.type == Blockly.Events.BLOCK_CREATE && event.json.type == 'text'){
    textoHexa.id = event.blockId
  }

  if(rgb[0].valor != null && rgb[1].valor != null && rgb[2].valor != null){
    let valorHexa = rgbToHex(rgb[0].valor, rgb[1].valor, rgb[2].valor)
    workspace.getBlockById(textoHexa.id).inputList[0].fieldRow[1].value_ = valorHexa
    workspace.getBlockById(textoHexa.id).inputList[0].fieldRow[1].textElement_.innerHTML = valorHexa

  }

}
workspace.addChangeListener(changeHexaName);

/* Converte para hexadecimal */
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

