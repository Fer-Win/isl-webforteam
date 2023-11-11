import Link from "next/link"
import {RxHamburgerMenu} from "react-icons/rx";

const NavList = () => {
  return (
    <div >
         <div className=" hidden md:flex flex-row gap-9 items-center">
          <Link href="/" passHref className="link">Home</Link>
        <Link href="./team" passHref className="link">Team</Link>
        <Link href="./about" passHref className="link">About</Link>
        <Link href="./news" passHref className="link">News</Link>
        <Link href="./fans" passHref className="link">Fans</Link>
         </div>
        <div className="lg:hidden md:hidden  xl:hidden px-4">
        <RxHamburgerMenu size={30} className="text-black cursor-pointer" />
        </div>
    </div>
  )
}
export default NavList