"use client"


import Footer from '@/components/Footer'
import NavBar from '../components/NavBar'
import ParallaxText from '@/components/ParallaxText'
import "./globals.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useState,useEffect} from 'react'
import Image from 'next/image'
import DemoCarousel from '@/components/Swiper'
import DemoCarousel2 from '@/components/Swiper2'


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
      
    <div className='w-full sm:h-[500px] font-familjen  sm:my-14'>
      <img src="/kbfc/Header.png" alt=""  className=' object-contain'/>
    </div>
    <div className="title text-[30px] sm:text-[60px] sm:ml-8 ml-4 font-familjen">Gallery</div>
      <div className='text-white mb-20 mt-5 flex justify-center  h-[600px] overflow-hidden'>
     
    <DemoCarousel2></DemoCarousel2>
      </div>
      <ParallaxText baseVelocity={-5} >Kerala Blasters</ParallaxText>
      <ParallaxText baseVelocity={5}>Football Club</ParallaxText>
      <div className="title text-[30px] sm:text-[60px] sm:ml-8 ml-4 font-familjen">Young Blasters</div>
     <div className='sm:ml-8 ml-4 flex sm:flex-row flex-col items-center justify-center'>
       <img src="https://keralablastersfc.in/wp-content/uploads/2022/08/Hero-Side-1536x1083.jpg" width={400} alt="" className='rounded-sm'/>
     <div className='flex flex-col'>
     <div className=' font-sans  text-white text-md sm:text-2xl font-light  sm:ml-8 sm:mt-4 mt-2 mb-5 sm:mr-8'><span className='font-light text-[#fff212]'>Kerala Blasters FC</span> kick started the <span className='font-medium'>‘KBFC Young Blasters’</span> program, a Grassroots and Youth development initiative for budding and passionate talents across the state in November 2019 with the launch of their Parkway Football Centre. With an objective to spread the KBFC style of football across Kerala, the Young Blasters program will be completely organized and coordinated by Kerala Blasters FC.</div>
     <div className=' font-sans  text-white  sm:text-2xl font-light ml-0  sm:ml-8 sm:mt-4 mr-8' >
      <h2 className='font-familjen mb-1 sm:text-2xl '>Highlights :</h2>
      <ul className='text-md sm:text-lg'>
        <li>Licensed Coaches</li>
        <li>KBFC Curriculm</li>
        <li>Holistic Development</li>
        <li>Helath & Safety</li>
      </ul>
     </div>
     </div>

       </div>
       <div className="title text-[30px] sm:text-[60px] sm:ml-8 ml-4 font-familjen">For the Fans</div>
       <a href="/fans" className=''><img src="/kbfc/fans.png" alt=""  className=' object-contain my-[-150px]'/></a>
      <div className="title text-[30px] sm:text-[60px] sm:ml-8 ml-4 font-familjen">About Us</div>
      <div className='font-sans mt-1 text-white text-md sm:text-2xl font-light ml-4 sm:ml-8 sm:mt-4'>
        <div >
        <span className='font-light text-[#fff212]'>Kerala Blasters FC</span>  was founded on 27th May 2014 as one of the 8 teams that is a part of the Indian Super League.
        </div>
      Our identity, the crest is reflective of the cultural and sporting legacy of Kerala. Basis an extensive and thorough research, the logo of <span className='font-light text-[#fff212]'>Kerala Blasters FC</span> was inspired by the state animal as the starting point and built around the true spirit of Kerala.
              The elephant is a symbol of strength, unity, power and pride. It symbolizes heritage, culture and spirit. Rooted in its family and community, the humble elephant showcases the aspiration and spirit of Kerala Blasters.The football held by the elephant with its trunk, is representative of the state’s deep connection with the sport.
      </div>
      <div className='font-sans mt-1 text-white text-md sm:text-2xl font-light ml-4 sm:ml-8 sm:mt-4'>
      <p className='para'><span className="font-light text-[#fff212]">Yellow</span>, our primary colour and the most luminous of all colours in the spectrum, symbolizes determination, optimism and faith It is also a prominent hue connecting various aspects that is core to the state of Kerala. Our skin is representative of our strong passion towards the game of football and also strongly symbolizes our pride to be one with Kerala in reinforcing the state’s legacy. We are and will always be <span className='text-[#fff212] font-roadRage'>#YennumYellow</span></p>
      </div>
      
      <Footer></Footer>
    </main>
  )
}
