import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="w-[95%] h-full mt-16 sm:pb-2 pb-20 mx-auto border-t-[1px] border-white border-opacity-50 ">
      <div className="sm:h-80  border-b-[1px] border-white border-opacity-50 flex flex-col sm:flex-row gap-0">
          <div className="w-[100%] sm:w-[70%] sm:flex-row h-full flex flex-col items-center sm:border-b-0 border-b-[1px] sm:border-r-[1px] border-white border-opacity-50 sm:justify-start pb-8 sm:pb-0">
            <div className="w-[30%] my-8">
              <img src="/kbfc_logo.svg" alt="" width={200}/>
            </div>
            <div  className="pl-3 sm:pl-0 sm:w-[70%] ">
              <h2 className="text-white sm:text-3xl font-light mb-2">Subscribe to our newsletter for daily updates and news regarding the club</h2>
             <div>
             <input type="email" name="email" placeholder="example@gmail.com" className="input"/>
            
             </div>
              <div className="flex justify-start ">
                <input type="checkbox" className="checkbox" />
                <p className="text-white opacity-60 font-extralight pl-2 pt-4 text-sm sm:w-[80%] w-full ">I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy.</p>
              </div>
              <div className="mt-3 ">
                <button className="border-white border text-white  hover:bg-white hover:text-[#0a0a0a] hover:rounded-sm transition-all duration-300 ease-in-out mt-5 text-lg px-4 py-2 ">Subscribe</button>
             </div>
            </div>
          </div>
          <div className="py-8 sm:py-0 sm:w-[30%]  h-full px-3  text-white text-lg font-light flex justify-around sm:justify-between">
              <div className="flex flex-col h-full justify-center gap-7">
              <Link href="/" passHref className="linker">Home</Link>
              <Link href="/team" passHref className="linker">Team</Link>
            
              <Link href="/news" passHref className="linker">News</Link>
              <Link href="/fans" passHref className="linker">Fans</Link>
        
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
      <div className="h-32 w-full flex sm:flex-row flex-col  gap-0">
          <div className=" h-full flex items-center sm:w-[70%] sm:border-b-0 border-b-[1px]  sm:border-r-[1px] border-white border-opacity-50 justify-center uppercase font-roadRage text-[35px] sm:text-[60px] text-[#fff212] text-center align-middle hover:text-[#0a0a0a] hover:bg-[#fff212] transition-all duration-200 ease-in-out py-3 sm:py-0 ">#Yennum Yellow
          </div>
         <div className="flex sm:w-[30%] font-extralight h-full text-white flex-col px-3 pt-3 gap-8 bg-[#0a0a0a] pb-20">
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
