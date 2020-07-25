import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['Up'] = function() {
    return "this.unityContent.send('Player','appendArrList', 'Up');\n";
};
  
Blockly.JavaScript['Down'] = function() {
    return "this.unityContent.send('Player','appendArrList', 'Down');\n";
};

Blockly.JavaScript['Left'] = function() {
    return "this.unityContent.send('Player','appendArrList', 'Left');\n";
};

Blockly.JavaScript['Right'] = function() {
    return "this.unityContent.send('Player','appendArrList', 'Right');\n console.log('1');\n";
};