import { Component } from 'react';
class VideoSelector extends Component{
    constructor(lesson){
        super();
        this.lesson=lesson;
    }
    chooselink(){
        switch(this.lesson){
            case "Functions":
                return "https://www.youtube.com/watch?v=lDK9QqIzhwk";
            case "Loops":
                return "https://www.youtube.com/watch?v=1WMWw5iC3Tk";
            case "Conditions":
                return "https://www.youtube.com/watch?v=HK7SPnGSxLM";
            default:
                return "https://www.youtube.com/watch?v=bu7nU9Mhpyo";
        }
    }
}

export default VideoSelector;