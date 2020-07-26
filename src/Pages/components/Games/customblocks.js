import * as Blockly from 'blockly/core';

var up = 
{
    "type": "Up",
    "message0": "Up",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
};

var down =
{
    "type": "Down",
    "message0": "Down",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
};

var left = 
{
    "type": "Left",
    "message0": "Left",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
}

var right = 
{
    "type": "Right",
    "message0": "Right",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
}

var func = 
{
    "type": "Function",
    "message0": "Function",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
}

var func_decl =
{
    "type": "Function_Declaration",
    "message0": "Function %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CODE_FUNC"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,

  }



Blockly.Blocks['Function_Declaration']={
    init: function(){
        this.jsonInit(func_decl);
        this.setStyle('loop_blocks');
    }
}

Blockly.Blocks['Function']={
    init: function(){
        this.jsonInit(func);
        this.setStyle('loop_blocks');
    }
}
Blockly.Blocks['Up']={
    init: function(){
        this.jsonInit(up);
    }
};
Blockly.Blocks['Down']={
    init: function(){
        this.jsonInit(down);
    }
};
Blockly.Blocks['Left']={
    init: function(){
        this.jsonInit(left);
    }
};
Blockly.Blocks['Right']={
    init: function(){
        this.jsonInit(right);
    }
};