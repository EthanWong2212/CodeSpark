Blockly.defineBlocksWithJsonArray([
    // Block creation
    {
        "type": "Up",
        "message0": "Up",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230
      }
  ]);

  Blockly.defineBlocksWithJsonArray([
    // Block creation
    {
        "type": "Down",
        "message0": "Down",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230
      }
  ]);

  Blockly.defineBlocksWithJsonArray([
    // Block creation
    {
        "type": "Left",
        "message0": "Left",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230
      }
  ]);

  Blockly.defineBlocksWithJsonArray([
    // Block creation
    {
        "type": "Right",
        "message0": "Right",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230
      }
  ]);

  // js code return for the block
  Blockly.JavaScript['Up'] = function() {
    return "Block_queue.queueControl('Up');\n";
  };
  
  Blockly.JavaScript['Down'] = function() {
    return "Block_queue.queueControl('Down');\n";
  };

  Blockly.JavaScript['Left'] = function() {
    return "Block_queue.queueControl('Left');\n";
  };

  Blockly.JavaScript['Right'] = function() {
     return "Block_queue.queueControl('Right');\n";
   };