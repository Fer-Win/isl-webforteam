import Link from "next/link"
import {RxHamburgerMenu} from "react-icons/rx";

const NavList = () => {
  return (
    <div >
         <div className=" hidden md:flex flex-row gap-9 items-center">
          <Link href="/" className="link">Home</Link>
        <Link href="./team" className="link">Team</Link>
        <Link href="./about" className="link">About</Link>
        <Link href="./news" className="link">News</Link>
        <Link href="./fans" className="link">Fans</Link>
         </div>
        <div className="lg:hidden md:hidden  xl:hidden px-4">
        <RxHamburgerMenu size={30} className="text-black cursor-pointer" />
        </div>
    </div>
  )
}
export default NavList