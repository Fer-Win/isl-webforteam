'use client'

import { useState } from "react";
import NavList from "./NavList"
import Image from "next/image"


const NavBar = () => {

  const [navBar, setNavBar] = useState(false);

  return (

     
      <div className="  h-28 flex flex-row justify-between items-center sm:px-24 py-2 px-2 bg-slate-100">
        <Image src="/kbfc_logo.svg" alt="KFC Logo" height={100} width={100} className="w-16 sm:w-24"/>
        <NavList></NavList>
      </div>
   
  )
}
export default NavBar