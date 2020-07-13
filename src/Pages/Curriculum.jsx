import React from 'react';
import Header from './components/Page_header_gif/Curriculum.gif';
import Game from './components/Game';
function Curriculum(){
    return(
        <div>
            <img className="Headergif" src={Header}/>
            <Game/>
        </div>
        
    );
    
}

export default Curriculum;