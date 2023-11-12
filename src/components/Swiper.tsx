import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className='w-[full] h-[300px]'>
                    <img src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/144089-lgkkdqctzr-1594230223.jpg" height={300} />
                    
                </div>
                <div>
                    <img src="https://www.mathrubhumi.com/image/contentid/policy:1.8925508:1695357909/New%20Project(5).jpg?$p=c8a05f8&f=16x9&w=1080&q=0.8" />

                </div>
                <div>
                    <img src="https://www.eastcoastdaily.in/wp-content/uploads/2017/11/manja-pada.jpg" />
                   
                </div>
            </Carousel>
        );
    }
};