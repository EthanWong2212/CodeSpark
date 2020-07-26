
import * as Blockly from 'blockly/core';
import 'blockly/javascript';

var functioncode='';

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
    return "this.unityContent.send(\'Player\',\'appendArrList\', \'Right\');\n";
};

Blockly.JavaScript['Function_Declaration'] = function(block) {
    functioncode=Blockly.JavaScript.statementToCode(block, 'CODE_FUNC');
    return '';
};
Blockly.JavaScript['Function'] = function() {
    try {return '' + functioncode + '';}
    finally{functioncode='';}
};
