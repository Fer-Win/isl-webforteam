import Link from "next/link"

const NavList = () => {
  return (
    <div className="flex flex-row gap-9">
         <Link href="/" className="link">Home</Link>
        <Link href="./team" className="link">Team</Link>
        <Link href="./about" className="link">About</Link>
        <Link href="./news" className="link">News</Link>
        <Link href="./fans" className="link" >Fans</Link>
    </div>
  )
}
export default NavList