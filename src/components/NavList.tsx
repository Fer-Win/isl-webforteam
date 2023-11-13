'use client'

import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { Familjen_Grotesk } from 'next/font/google'
const fam = Familjen_Grotesk({ subsets: ['latin'] })
import { useState } from "react"

const NavList = () => {
  const [toggle, setToggle] = useState(false);
  const closeToggle = () => {
    setToggle(false);
  };
  const preventClickPropagation = (e:any) => {
    e.stopPropagation();
  };
  return (
    <div>

      <div className="hidden md:flex flex-row gap-12 items-center font-familjen" onClick={()=>closeToggle()}>
        <Link href="/" passHref className="link">Home</Link>
        <Link href="/team" passHref className="link">Team</Link>
        <Link href="/news" passHref className="link">News</Link>
        <Link href="/fans" passHref className="link">Fans</Link>
      </div>


      <div className="lg:hidden md:hidden xl:hidden px-4" onClick={() => setToggle(!toggle)}>
        <RxHamburgerMenu color="white" size={30} className="text-black cursor-pointer" />
      </div>


      {toggle && (
        <div
        className="fixed inset-0 bg-transparent z-50"
        onClick={closeToggle}
      >
        <div className="sm:w-full w-[300px] h-[400px] absolute top-0 right-0 bg-slate-300 z-1000 font-familjen rounded-sm">
          <div className="p-4 flex flex-col justify-around h-full text-3xl">
            <Link href="/" passHref className="block hey mb-2">Home</Link>
            <Link href="/team" passHref className="block hey mb-2">Team</Link>
            <Link href="/news" passHref className="block hey mb-2">News</Link>
            <Link href="/fans" passHref className="block hey mb-2">Fans</Link>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default NavList;
