var rgbJson = {
  "type": "colour_rgb",
  "message0": "red %1 green %2 blue %3",
  "args0": [
    {
      "type": "input_value",
      "name": "red",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number"
    }
  ],
  "output": "String",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['colour_rgb'] = {
  init: function() {
    this.jsonInit(rgbJson);
  }
};



var printJson = {
  "type": "print",
  "message0": "RGB %1 Hexadecimal %2",
  "args0": [
    {
      "type": "input_value",
      "name": "rgb"
    },
    {
      "type": "input_value",
      "name": "hexadecimal"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['print'] = {
  init: function() {
    this.jsonInit(printJson);
  }
};
