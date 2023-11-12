import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="w-[95%] mt-16 pb-4 mx-auto border-t-[1px] border-white border-opacity-50">
      <div className="h-80 border-b-[1px] border-white border-opacity-50 flex flex-row gap-0">
          <div className="w-[70%] h-full flex items-center border-r-[1px] border-white border-opacity-50 justify-start ">
            <div className="w-[30%] ">
              <img src="/kbfc_logo.svg" alt="" width={200}/>
            </div>
            <div  className="w-[70%] ">
              <h2 className="text-white w-[90%] text-3xl mb-3">Subscribe to our newsletter for daily updates and news regarding the club</h2>
             <div>
             <input type="email" name="email" placeholder="example@gmail.com" className="input"/>
            
             </div>
              <div className="flex justify-start ">
                <input type="checkbox" className="checkbox" />
                <p className="text-white opacity-60 font-extralight pl-2 pt-4 text-sm w-[80%]">I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.</p>
              </div>
              <div className="mt-3 ">
                <button className="border-white border text-white  hover:bg-white hover:text-[#0a0a0a] mt-5 text-lg px-4 py-2 ">Subscribe</button>
             </div>
            </div>
          </div>
          <div className="w-[30%]  h-full px-3  text-white text-lg font-light flex justify-between">
              <div className="flex flex-col h-full justify-center gap-7">
              <Link href="/" passHref className="linkf">Home</Link>
              <Link href="./team" passHref className="linkf">Team</Link>
            
              <Link href="./news" passHref className="linkf">News</Link>
              <Link href="./fans" passHref className="linkf">Fans</Link>
              <Link href="./about" passHref className="linkf">About</Link>
              </div>
              <div >
                  <ul className="flex flex-col pt-8 px-3 gap-7 ">
                    <a href="https://www.facebook.com/keralablasters/" target="_blank" className="linker">Facebook</a>
                    <a href="https://www.instagram.com/keralablasters/?hl=en" target="_blank"className="linker">Instagram</a>
                    <a href="https://twitter.com/KeralaBlasters" target="_blank"className="linker">X</a>
                    <a href="https://www.youtube.com/channel/UCCRfkpYF70QoUffbC5emuyw" target="_blank"className="linker">Youtube</a>
                  </ul>
              </div>
          </div>
      </div>
      <div className="h-32 w-full flex flex-row gap-0">
          <div className="w-[70%] h-full flex items-center border-r-[1px] border-white border-opacity-50 justify-center uppercase font-roadRage text-[60px] text-[#fff212] text-center align-middle hover:text-[#0a0a0a] hover:bg-[#fff212] transition-all duration-200 ease-in-out">#Yennum Yellow
          </div>
         <div className="flex w-[30%] font-extralight h-full text-white flex-col px-3 pt-3 gap-8 ">
         <div className=" flex justify-between">
                <div className="w-[60%] ">
                    Designed and Developed by <span className="font-familjen text-lg">Ferwin Lopez</span>
                  </div>
                  <div className="flex flex-col">
                    <a href="https://www.linkedin.com/in/ferwin-lopez/" target="_blank" className="linker">LinkedIn</a>
                    <a href="https://github.com/Fer-Win" target="_blank" className="linker">Github</a>
                  </div>
         </div>
         <div className="flex justify-between">
          <p>© 2023</p>
          <p>All rights reserved.</p>
         </div>
         </div>
      </div>
    </main>
  );
}


export default Footer;
