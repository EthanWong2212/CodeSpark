import React, { Component } from 'react';
import Loop from './Games/Loop';
import Intro from './Games/Intro';
class GameSelector extends Component{
    constructor(lesson){
        super();
    }
    render(){
        console.log(this.props.lesson);
        switch(this.props.lesson){
            case "Intro":
                return(<Intro/>);
            case"Loops":
                return(<Loop/>);
            default:
                return(<Intro/>);
        }
        
    }
    
}

export default GameSelector;