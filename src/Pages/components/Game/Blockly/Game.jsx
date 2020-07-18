import React from "react";
import Unity, { UnityContent }  from "react-unity-webgl";
import "./Game_style.css";

class Game extends React.Component {
  constructor(props) {
    super(props);

    // Next up create a new Unity Content object to 
    // initialise and define your WebGL build. The 
    // paths are relative from your index file.

    this.unityContent = new UnityContent(
      "Orbital_web3/Build/Orbital_web3.json",
      "Orbital_web3/Build/UnityLoader.js"
    );
  }
  render() {

    // Finally render the Unity component and pass 
    // the Unity content through the props.

    return (
      <div className="unitygame">
        <Unity unityContent={this.unityContent}/>
      </div>
    )
  }
}

export default Game;