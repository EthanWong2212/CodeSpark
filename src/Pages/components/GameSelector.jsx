import React, { Component } from 'react';
import Loop from './Games/Loop';
import Intro from './Games/Intro';
import Functions from './Games/Functions';
class GameSelector extends Component{
    constructor(lesson){
        super();
    }
    render(){
        console.log(this.props.lesson);
        switch(this.props.lesson){
            case "1) Intro":
                return(<Intro/>);
            case"2) Loops":
                return(<Loop/>);
            case"3) Functions":
                return(<Functions/>);
            
            default:
                return(<Intro/>);
        }
        
    }
    
}

export default GameSelector;