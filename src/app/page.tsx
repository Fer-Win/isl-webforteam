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
      <img src="/kbfc/main.jpeg" alt="" />
      <ParallaxText baseVelocity={-5} >Kerala Blasters</ParallaxText>
      <ParallaxText baseVelocity={5}>Football Club</ParallaxText>
      <Footer></Footer>
    </main>
  )
}
