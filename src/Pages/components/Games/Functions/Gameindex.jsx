import React, { Component } from 'react';
import Unity from 'react-unity-webgl';

class Gameindex extends Component{
    render(){
        return (
            <div>
                <button>PLAY!</button>
                <Unity src='Build/Orbital_web3.json' loader='Build/UnityLoader.js'/>

            </div>
        );
    }
    
}

export default Gameindex;