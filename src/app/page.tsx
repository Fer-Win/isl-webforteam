"use client"


import Footer from '@/components/Footer'
import NavBar from '../components/NavBar'
import ParallaxText from '@/components/ParallaxText'
import "./globals.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';



export default function Home() {
  return (
    <main>
    
      <NavBar></NavBar>
      {/* <div className="spinner-wrapper">
      <div className="spinner"></div>
    </div> */}
    <div className='w-full h-[500px] bg-blue-400 my-14'></div>
    <div className="title text-[60px] font-familjen">Gallery</div>
      <div className='text-white mb-20 mt-5 ml-7'>
      <Swiper
      spaceBetween={30}
      slidesPerView={2 }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="/kbfc/main.jpeg" alt="" width={300} className='rounded-sm'/></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
      </div>
      <ParallaxText baseVelocity={-5} >Kerala Blasters</ParallaxText>
      <ParallaxText baseVelocity={5}>Football Club</ParallaxText>
      <Footer></Footer>
    </main>
  )
}
