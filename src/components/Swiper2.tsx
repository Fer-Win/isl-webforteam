import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 export default class DemoCarousel2 extends Component {
    render() {
        return (
            <Carousel autoPlay={true}  dynamicHeight={true} infiniteLoop={true} showIndicators={true} showArrows={true} showStatus={false} showThumbs={false} swipeable={true}>
                <div className=''>
                    <img src="/kbfc/main.jpeg" height={300} />
                    
                </div>
                <div>
                    <img src="" />

                </div>
                <div>
                    <img src="" />
                   
                </div>
            </Carousel>
        );
    }
};