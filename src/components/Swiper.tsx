import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true}  dynamicHeight={false} infiniteLoop={true} showIndicators={true} showArrows={true} showStatus={true} showThumbs={false} swipeable={true}>
                <div className='w-[full] '>
                    <img src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/144089-lgkkdqctzr-1594230223.jpg" className='object-cover' />
                    
                </div>
                <div>
                    <img src="https://www.mathrubhumi.com/image/contentid/policy:1.8925508:1695357909/New%20Project(5).jpg?$p=c8a05f8&f=16x9&w=1080&q=0.8" height={300}/>

                </div>
                <div>
                    <img src="https://s01.sgp1.digitaloceanspaces.com/large/818631-43136-cfcxbtkobh-1476008658.jpg" height={300}/>
                   
                </div>
                <div>
                    <img src="https://www.eastcoastdaily.in/wp-content/uploads/2017/11/manja-pada.jpg"height={300} />
                   
                </div>
                <div>
                    <img src="https://thebridge.in/h-upload/2023/05/06/45940-fodw2zraiaadnou.jpg"height={300} />
                   
                </div>
                <div>
                    <img src="https://staticg.sportskeeda.com/editor/2022/10/b0642-16659075382455-1920.jpg"height={300} />
                   
                </div>
                <div>
                    <img src="https://data1.ibtimes.co.in/en/full/630341/kerala-blasters-team.jpg?h=450&l=50&t=40"height={300} />
                   
                </div>
                <div>
                    <img src="https://staticg.sportskeeda.com/editor/2023/03/96115-16781134397605-1920.jpg?w=840"height={300} />
                   
                </div>
                <div>
                    <img src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1007%2Fr1072318_1296x729_16%2D9.jpg"height={300} />
                   
                </div>


            </Carousel>
        );
    }
};