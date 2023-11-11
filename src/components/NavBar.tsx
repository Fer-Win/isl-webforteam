'use client'

import { useState } from "react";
import NavList from "./NavList"
import Image from "next/image"


const NavBar = () => {

  const [navBar, setNavBar] = useState(false);

  return (

     
      <div className="  h-28 flex flex-row justify-between items-center sm:px-24 py-2 px-2 bg-slate-100">
        <Image src="/kbfc_logo.svg" alt="KFC Logo" height={130} width={130} className="w-20 sm:w-28"/>
        <NavList></NavList>
      </div>
   
  )
}
export default NavBar