/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo1 from "./Logo.jpeg";
import Logo2 from "./Logo_light.jpg";
import Welcome from "./Welcome.png"
import Logostyle from "./Logostyle.css"

class Logo extends Component {
    state={
        img:Logo1
    };
    logostyle={
        width:"30%",
        height: "auto",
        display: "inline-block"
    }
    welcomestyle={
        width: "70%",
        height:"auto",
        display:"inline-block",
    }
    render() { 
        return (
            <div className="Head" style={{backgroundColor:"#ff9d00"}}>
                <Link to ="/">
                    <img style={this.logostyle} 
                        src={this.state.img}
                        onMouseEnter={()=> {
                            this.setState({
                            img:Logo2
                        })
                        }
                    }
                        onMouseOut={()=>{
                            this.setState({
                            img:Logo1
                        })
                        }
                    }
                    />
                </Link>
                <img style={this.welcomestyle} src={Welcome}/>
            </div>
            
         );
    }
}
 
export default Logo;