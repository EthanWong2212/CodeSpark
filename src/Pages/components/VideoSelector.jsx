import { Component } from 'react';
class VideoSelector extends Component{
    constructor(lesson){
        super();
        this.lesson=lesson;
    }
    chooselink(){
        switch(this.lesson){
            case "3) Functions":
                return "https://www.youtube.com/watch?v=mlF_mRVky4k";
            case "2) Loops":
                return "https://www.youtube.com/watch?v=1WMWw5iC3Tk";
            case "4) Conditions":
                return "https://www.youtube.com/watch?v=b0zZg3n4VcQ";
            default:
                return "https://www.youtube.com/watch?v=oC0OPmfs3uo&feature=youtu.be";
        }
    }
    
}

export default VideoSelector;