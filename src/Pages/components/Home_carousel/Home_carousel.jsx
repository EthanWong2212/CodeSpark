import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './Games.png';
import Image2 from './Lessons.png';
import Image3 from './Projects.png';
import Home_carousel_style from './Home_carousel_style.css';
import Image4 from './Test_img.JPG';

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
                    className="d-block w-100"
                    src={Image1}
                    />
                    <Carousel.Caption>
                        <h1> Games</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={Image4}
                    />
                    <Carousel.Caption>
                        <h1> Lessons</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={Image3}
                    />
                    <Carousel.Caption>
                        <h1> Projects</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
         );
    }
}
 
export default Home_carousel;