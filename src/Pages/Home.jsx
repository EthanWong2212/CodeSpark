import React from 'react';
import Home_carousel from "./components/Home_carousel/Home_carousel";
import Header from "./components/Page_header_img/Home.png";
import "./DefStyle.css";

function Home(){
    return(
        <div>
            <img className="Headergif" src={Header}/>
            <div className="main_comp">
                <Home_carousel/>
            </div>
        </div>


    );
}

export default Home;