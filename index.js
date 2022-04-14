var toolbox = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type": "text"
    },
    {
      "kind": "block",
      "type": "colour_rgb"
    },
    {
      "kind": "block",
      "type": "print"
    },
    {
      "kind": "block",
      "type": "math_number"
    }
  ]
}

var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});




