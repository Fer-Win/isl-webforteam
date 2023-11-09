import NavList from "./NavList"
import Image from "next/image"
const NavBar = () => {
  return (

     
      <div className=" w-screen h-28 flex flex-row justify-around items-center px-4 py-2 bg-red-600">
        <Image src="/icon.svg" alt="KFC Logo" height={130} width={130} />
        <NavList></NavList>
      </div>
   
  )
}
export default NavBar