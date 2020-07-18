import React from 'react';
import Header from './components/Page_header_img/Curriculum.png';
import Game from './components/Game/Blockly/Game';
function Curriculum(){
    return(
        <div>
            <img className="Headergif" src={Header}/>
            <div className="main_comp">
                <Game/>
            </div>
        </div>
        
    );
    
}

export default Curriculum;