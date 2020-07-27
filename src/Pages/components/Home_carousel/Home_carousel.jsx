import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Games from './Games.JPG';
import Lessons from './Lessons.png';
// import Image3 from './Projects.png';
import Block_coding from './Block_coding.png'
import './Home_carousel_style.css';

class Home_carousel extends Component {
    constructor(props){
        super(props);
        this.state={
            nextIcon: <span className="carousel-control-next-icon"></span>,
            prevIcon: <span className="carousel-control-prev-icon"></span>,
            interval:2000
        }
    }

    render() {
        return ( 
            <Carousel className='carousel_container' 
            interval={this.state.interval} 
            nextIcon={this.state.nextIcon}
            prevIcon={this.state.prevIcon}>
                <Carousel.Item>
                    <img
                    className="img_cont"
                    src={Games}
                    />
                    <Carousel.Caption>
                        <h1 className="Carousel_cap"> Games</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="img_cont"
                    src={Lessons}
                    />
                    <Carousel.Caption>
                        <h1 className="Carousel_cap"> Lessons</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="img_cont"
                    src={Block_coding}
                    />
                    <Carousel.Caption>
                        <h1 className="Carousel_cap"> Block Coding</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
         );
    }
}
 
export default Home_carousel;