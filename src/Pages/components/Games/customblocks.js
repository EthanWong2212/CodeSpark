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