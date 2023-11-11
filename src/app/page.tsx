"use client"


import Footer from '@/components/Footer'
import NavBar from '../components/NavBar'
import ParallaxText from '@/components/ParallaxText'
import "./globals.css"

export default function Home() {
  return (
    <main>
    
      <NavBar></NavBar>
      {/* <div className="spinner-wrapper">
      <div className="spinner"></div>
    </div> */}
      <h2 className='h-96'>This is the Home Page of Kerala Blasters💛⭐💛⭐💛</h2>
      <ParallaxText baseVelocity={-5} >Kerala Blasters</ParallaxText>
      <ParallaxText baseVelocity={5}>Football Club</ParallaxText>
      <Footer></Footer>
    </main>
  )
}
