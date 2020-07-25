import React, { Component } from 'react';
import Unity, {UnityContent} from "react-unity-webgl";
import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';
import BlocklyJS from 'blockly/javascript';
import './customblocks.js';
import './JsGenerator.js';
import './Game.css';

class Loop extends Component{
    constructor(props){
        super(props);
        this.simpleWorkspace = React.createRef();
        this.unityContent= new UnityContent(
            "Games/Orbital_web3/Build/Orbital_web3.json",
            "Games/Orbital_web3/Build/UnityLoader.js"
        );
    }
    
    
    runCode=()=>{
        var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
        code+='this.unityContent.send(\'Player\',\'ArrList_Arr\');';
        eval(code);
    }
    render(){
        return(
            <div>
                <div className="GameWrapper">
                    <BlocklyComponent ref={this.simpleWorkspace}
                    readOnly={false} trashcan={true} media={'media/'}
                    move={{
                        scrollbars: true,
                        drag: true,
                        wheel: true
                    }}
                    initialXml={`
                        <xml xmlns="http://www.w3.org/1999/xhtml">
                        </xml>
                    `}>
                        <Block type="Up" />
                        <Block type="Down" />
                        <Block type="Left" />
                        <Block type="Right" />
                    </BlocklyComponent>

                    <div className="game">
                        <Unity unityContent={this.unityContent} height="300px" width="400px"/>
                    </div>
                    <button onClick={this.runCode.bind(this)}>Run</button>
                </div>
            </div>
        );
    }
}


export default Loop;