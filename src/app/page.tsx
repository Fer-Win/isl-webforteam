"use client"


import Footer from '@/components/Footer'
import NavBar from '../components/NavBar'
import ParallaxText from '@/components/ParallaxText'
import "./globals.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useState,useEffect} from 'react'


export default function Home() {
  const [toggle, setToggle] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView:any = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3); 
      }
    };
    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    <main className='relative'>
    
      <NavBar></NavBar>
      
    <div className='w-full h-[500px]  bg-blue-400 my-14'></div>
    <div className="title text-[60px] font-familjen">Gallery</div>
      <div className='text-white mb-20 mt-5 flex justify-center '>
      <Swiper
      spaceBetween={20}
      autoplay={{
        delay: 2000,
      }}
      lazyPreloadPrevNext={2}
      slidesPerView={slidesPerView}
    >
      <SwiperSlide><div className='w-full h-[250px] my-auto overflow-hidden object-cover object-center'><img src="/kbfc/main.jpeg" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
      <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://thebridge.in/h-upload/2022/02/04/22923-thambnail-kbfc.webp" alt="" width={500} className='rounded-sm '/></div></SwiperSlide>
      <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://thebridge.in/h-upload/2022/02/26/23976-copy-of-thumbnailkbfccfc.webp" alt="" width={500} className='rounded-sm'/>
      </div></SwiperSlide>
      <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://keralakaumudi.com/web-news/en/2023/02/NMAN0393906/image/-kerala-blasters.1.2038814.jpg" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
      <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://keralablastersfc.in/wp-content/uploads/2022/10/KBFC-vs-MCFC.jpg" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
      <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://www.sportskpi.com/wp-content/uploads/2019/10/1-6.jpg" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
       <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://www.sportstrumpet.com/wp-content/uploads/2022/03/138-scaled.jpg" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
       <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://www.indiansuperleague.com/static-assets/waf-images/29/9a/e9/16-9/kOZbi2dYak.JPG?v=100.02&w=600" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
       <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://www.indiansuperleague.com/static-assets/waf-images/4c/b3/74/16-9/hR7m7fC4aZ.jpg?v=100.24&w=600" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
       <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://static.footballcounter.com/wp-content/uploads/2023/09/22042019/Adrian-Luna-of-Kerala-Blasters-FC-after-scoring-goal-against-BFC-during-the-1st-match-of-Indian-Super-League-ISL-2023-24-season-today-e1695318205429.jpg" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
       <SwiperSlide><div className='w-[400px] h-[250px] my-auto overflow-hidden object-cover object-center'><img src="https://gumlet.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2FKeralaBlasters_Facebook_271022_1200.jpg?auto=format%2Ccompress&fit=max&w=1200" alt="" width={500} className='rounded-sm'/></div></SwiperSlide>
    </Swiper>
      </div>
      <ParallaxText baseVelocity={-5} >Kerala Blasters</ParallaxText>
      <ParallaxText baseVelocity={5}>Football Club</ParallaxText>
      <Footer></Footer>
    </main>
  )
}
