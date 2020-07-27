import React, { Component } from 'react';
import Loops from "./Answer_img/Loops.png";
import Functions from "./Answer_img/Functions.png";
import Intro from "./Answer_img/Intro.png";

class Answer_Selector extends Component {
    
    render() { 
        var answer=" ";
        console.log(this.props.show_img)
        if(this.props.show_img && this.props.lesson=="1) Intro"){answer= Intro}
        else if(this.props.show_img && this.props.lesson=="2) Loops"){answer=Loops}
        else if(this.props.show_img && this.props.lesson=="3) Functions"){answer=Functions}
        else{answer=" "}

        return (
        <div>
            <img src={answer}/>

        </div> 
        );
    }
}
 
export default Answer_Selector;