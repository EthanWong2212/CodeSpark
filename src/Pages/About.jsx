import React from 'react';
import Header from './components/Page_header_img/About.png'

function About(){
    return(
        <div>
            <img className="Headergif" src={Header}/>
            <div className="text_cont">
                <p>
                We are a team of 2 students from National University of Singapore with an aim to make coding fun and attractive to kids. Through animated videos and games that incorporate block coding using Google Blockly, we encourage kids to pick up key coding concepts that will set a strong foundation for their future coding eandeavours. 
                <br/>
                <br/>
                We believe that every child should learn to code. Coding could develop computational and logical skills and even soft skills such as communication and resilience. 
                <br/>
                <br/>
                CodeSpark offers all these activities free and hopes that users would find these activities useful.
                <br/>
                <br/>
                Have a great time using CodeSpark!
                </p>
            </div>
        </div>
        
    )
}

export default About;