import React, { Component } from 'react';
import Unity, {UnityContent} from "react-unity-webgl";
import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';
import BlocklyJS from 'blockly/javascript';
import './customblocks.js';
import './JsGenerator.js';
import './Game.css';
class Functions extends Component{
    constructor(props){
        super(props);
        this.simpleWorkspace = React.createRef();
        this.unityContent= new UnityContent(
            "Games/Functions_game/Build/Functions_Game.json",
            "Games/Functions_game/Build/UnityLoader.js",{
                adjustOnWindowResize: false 
              }
        );
    }
    
    // refresh(){
    //     this.forceUpdate();
    // }
    
    runCode=()=>{
        var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
        code+='this.unityContent.send(\'Player\',\'ArrList_Arr\');\n';
        // console.log(code);
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
                        <Block type="controls_repeat_ext">
                        <Value name="TIMES">
                            <Shadow type="math_number">
                            <Field name="NUM">10</Field>
                            </Shadow>
                        </Value>
                        </Block>
                        <Block type="Function_Declaration"/>
                        <Block type="Function"/>
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


export default Functions;