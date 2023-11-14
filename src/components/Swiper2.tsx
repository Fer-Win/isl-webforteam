import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 export default class DemoCarousel2 extends Component {
    render() {
        return (
            <Carousel autoPlay={true}  dynamicHeight={false} infiniteLoop={true} showIndicators={false} showArrows={true} showStatus={true} showThumbs={false} swipeable={true}>
                <div className=''>
                    <img src="https://thebridge.in/h-upload/2022/02/04/22923-thambnail-kbfc.webp" height={300} />
                    
                </div>
                <div>
                    <img src="https://thebridge.in/h-upload/2022/02/26/23976-copy-of-thumbnailkbfccfc.webp" />

                </div>
                <div>
                    <img src="https://keralakaumudi.com/web-news/en/2023/02/NMAN0393906/image/-kerala-blasters.1.2038814.jpg" />
                   
                </div>
                <div>
                    <img src="https://keralablastersfc.in/wp-content/uploads/2022/10/KBFC-vs-MCFC.jpg" />
                   
                </div>
                <div>
                    <img src="https://www.sportskpi.com/wp-content/uploads/2019/10/1-6.jpg" />
                   
                </div>
                <div>
                    <img src="https://www.sportstrumpet.com/wp-content/uploads/2022/03/138-scaled.jpg" />
                   
                </div>
                <div>
                    <img src="https://www.indiansuperleague.com/static-assets/waf-images/29/9a/e9/16-9/kOZbi2dYak.JPG?v=100.02&w=600" />
                   
                </div>
                <div>
                    <img src="https://www.indiansuperleague.com/static-assets/waf-images/4c/b3/74/16-9/hR7m7fC4aZ.jpg?v=100.24&w=600" />
                   
                </div>
                <div>
                    <img src="https://static.footballcounter.com/wp-content/uploads/2023/09/22042019/Adrian-Luna-of-Kerala-Blasters-FC-after-scoring-goal-against-BFC-during-the-1st-match-of-Indian-Super-League-ISL-2023-24-season-today-e1695318205429.jpg" />
                   
                </div>
                <div>
                    <img src="https://gumlet.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2FKeralaBlasters_Facebook_271022_1200.jpg?auto=format%2Ccompress&fit=max&w=1200" />
                   
                </div>
                {/* <div>
                    <img src="" />
                   
                </div>
                <div>
                    <img src="" />
                   
                </div> */}
            </Carousel>
        );
    }
};