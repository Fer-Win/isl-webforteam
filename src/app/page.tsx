"use client"


import Footer from '@/components/Footer'
import NavBar from '../components/NavBar'
import ParallaxText from '@/components/ParallaxText'

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <h2 className='h-96'>This is the Home Page of Kerala Blasters💛⭐💛⭐💛</h2>
      <ParallaxText baseVelocity={-5} >Kerala Blasters</ParallaxText>
      <ParallaxText baseVelocity={5}>Football Club</ParallaxText>
      <Footer></Footer>
    </main>
  )
}
