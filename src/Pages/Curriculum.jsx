import React, { Component } from 'react';
import Header from './components/Page_header_img/Curriculum.png';
import Dropdown from "react-bootstrap/Dropdown";
import VideoSelector from"./components/VideoSelector";
import ReactPlayer from "react-player";
import Youtubebg from './components/youtube_bg2.png';
import Pick_chap from './components/Pick_chap.png';
import Lesson_head from './components/Lesson_head.png';
import Game_head from './components/Game_head.png';
import GameSelector from './components/GameSelector';
import Answer_Selector from './components/Answer_Selector';

class Curriculum extends Component{
    state = {
        selectedContent:'1) Intro',
        videoLink: "",
        ans_shown:false,
        ans_txt:"Show Answer"
    }

    handleSelect=(e)=>{
        this.setState({selectedContent:e});
        this.setState({ans_shown:false});
        this.setState({ans_txt:"Show Answer"});
    }
    handleClick=()=>{
        this.setState(prevState => ({
            ans_shown: !prevState.ans_shown
        })
        );
        if(this.state.ans_shown){this.setState({ans_txt:"Show Answer"})}
        else{this.setState({ans_txt:"Hide Answer"})}

    }

    render(){
        console.log(this.state.ans_shown);
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
                                <Dropdown.Item eventKey="1) Intro">1) Intro</Dropdown.Item>
                                <Dropdown.Item eventKey="2) Loops">2) Loops</Dropdown.Item>
                                <Dropdown.Item eventKey="3) Functions">3) Functions</Dropdown.Item>
                                <Dropdown.Item eventKey="4) Conditions">4) Conditions</Dropdown.Item>
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
                    <div className="gamebg_cont">
                        <img className="curr_cont" src={Game_head}/>
                        <div className="game_cont">
                            < GameSelector lesson={this.state.selectedContent}/>
                        </div>
                    </div>
                    <div className="ans_cont">
                        <h1 onClick={this.handleClick} className="ans_but">{this.state.ans_txt}</h1>
                        <Answer_Selector lesson={this.state.selectedContent} show_img={this.state.ans_shown}/>
                    </div>
                </div>
            </div>
        );  
    }
}

export default Curriculum;