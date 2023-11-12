'use client'

import Footer from "@/components/Footer"
import NavBar from "../../components/NavBar"
import ParallaxText from "@/components/ParallaxText"
import React from "react";
import DemoCarousel from "@/components/Swiper";
// import Slider from "react-slick";

const Fans = () => {



  return (
    <main><NavBar></NavBar>
    <div>Hey There buddy</div>
    <DemoCarousel></DemoCarousel>
    <ParallaxText baseVelocity={-5} >#YENNUM YELLOW</ParallaxText>
      <ParallaxText baseVelocity={5}>#MANJAPPADA</ParallaxText>
      <Footer></Footer>
      </main>
  )
}
export default Fans