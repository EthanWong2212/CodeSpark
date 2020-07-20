import React, { Component } from 'react';
import Header from './components/Page_header_img/Curriculum.png';
import Game from './components/Game/Blockly/Game';
import Dropdown from "react-bootstrap/Dropdown";
import VideoSelector from"./components/VideoSelector";
import ReactPlayer from "react-player";

class Curriculum extends Component{
    state = {
        selectedContent:'Chapter',
        videoLink: ""
    }

    handleSelect=(e)=>{
        this.setState({selectedContent:e})
    }


    render(){
        console.log(this.state.selectedContent);
        let videoLink= new VideoSelector(this.state.selectedContent);
        return(
            <div>
                <img className="Headergif" src={Header}/>
                <h1 className="Intro">
                    This is where you will start your coding journey!
                </h1>
                <div className="pick_chap_cont">
                    <div className="a">
                        <Dropdown  onSelect={this.handleSelect}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.state.selectedContent}
                            </Dropdown.Toggle>
    
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="Functions">Functions</Dropdown.Item>
                                <Dropdown.Item eventKey="Conditions">Conditions</Dropdown.Item>
                                <Dropdown.Item eventKey="Loops">Loops</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="main_comp">
                    <ReactPlayer url={videoLink.chooselink()}/>
                    <Game/>
                </div>
            </div>
        );  
    }
}

export default Curriculum;