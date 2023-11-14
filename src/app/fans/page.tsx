'use client'

import Footer from "@/components/Footer"
import NavBar from "../../components/NavBar"
import ParallaxText from "@/components/ParallaxText"
import React from "react";
import DemoCarousel from "@/components/Swiper";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import {useState,useEffect} from 'react'

const Fans = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView:any = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(4); 
      }
    };
    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);


  return (
    <main><NavBar></NavBar>
 
  
       <div className='text-white mb-20 mt-5 flex justify-center align-middle h-[200px] sm:h-[500px] overflow-hidden  '>
       <DemoCarousel ></DemoCarousel>
     
      </div>

    <ParallaxText baseVelocity={-5} >#YENNUM YELLOW</ParallaxText>
      <ParallaxText baseVelocity={5}>#MANJAPPADA</ParallaxText>
      <div className='font-sans mt-1 text-white text-sm sm:text-2xl font-light ml-4 sm:ml-8 sm:mt-4'>
      Thank you for being a part of the Kerala Blasters family. <br></br>Let's roar together, because <span className='text-[#fff212] font-roadRage'>#YennumYellow</span>
      </div>
      <Footer></Footer>
      </main>
  )
}
export default Fans