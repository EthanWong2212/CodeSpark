import React, { Component } from 'react';
import Header from './components/Page_header_img/Curriculum.png';
import Loop from './components/Game2/Loop';
import Dropdown from "react-bootstrap/Dropdown";
import VideoSelector from"./components/VideoSelector";
import ReactPlayer from "react-player";
import Youtubebg from './components/youtube_bg2.png';
import Pick_chap from './components/Pick_chap.png';
import Lesson_head from './components/Lesson_head.png';
import Game_head from './components/Game_head.png';

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
                    <img src={Pick_chap}/>
                    <div className="chap_dropdown">
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
                <img className="curr_cont" src={Lesson_head}/>
                <div className="main_comp">
                    <div className="youtubebg_cont">
                        <img src={Youtubebg}/>
                        <div className="youtube_cont">
                        {/* <img className="video" src={Header}/> */}
                            <ReactPlayer className="video" width='100%' height="100%" controls={true} url={videoLink.chooselink()}/>
                        </div>
                    </div>
                    <div classNaame="gamebg_cont">
                        <img className="curr_cont" src={Game_head}/>
                    </div>
                    <Loop/>
                </div>
            </div>
        );  
    }
}

export default Curriculum;