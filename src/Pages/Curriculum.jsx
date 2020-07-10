import React from 'react';
import Header from './components/Page_header_gif/Curriculum.gif';
import Gameindex from './components/Games/Functions/Gameindex';
function Curriculum(){
    return(
        <div>
            <img className="Headergif" src={Header}/>
            <span className="GameContainer"> 
                <Gameindex/>
            </span>
        </div>
        
    )
    
}

export default Curriculum;