import Link from "next/link"
import {RxHamburgerMenu} from "react-icons/rx";
import {Familjen_Grotesk } from 'next/font/google'
const fam = Familjen_Grotesk({ subsets: ['latin'] })

const NavList = () => {
  
  return (
    <div >
         <div className=" hidden md:flex flex-row gap-12 items-center  font-familjen">
          <Link href="/" passHref className="link ">Home</Link>
        <Link href="./team" passHref className="link">Team</Link>
      
        <Link href="./news" passHref className="link">News</Link>
        <Link href="./fans" passHref className="link">Fans</Link>
        <Link href="./about" passHref className="link">About</Link>
         </div>
        <div className="lg:hidden md:hidden  xl:hidden px-4">
        <RxHamburgerMenu size={30} className="text-black cursor-pointer" />
        </div>
    </div>
  )
}
export default NavList