'use client'

import { useState } from "react";
import NavList from "./NavList"
import Image from "next/image"


const NavBar = () => {

  const [navBar, setNavBar] = useState(false);

  return (

     
     <div className="flex flex-col w-full items-center sticky  h-fit">
       <div className="  h-28 flex w-[90%] flex-row justify-between items-center sm:px-24 py-2 px-2">
       <a href="/"> <Image src="/kbfc_logo.svg" alt="KFC Logo" height={100} width={100} className="w-16 sm:w-24"/></a>
        <NavList></NavList>
      </div>
      <div className="w-[95%] h-[1px] bg-white text-cente mt-3 opacity-50"></div>
     </div>
   
  )
}
export default NavBar