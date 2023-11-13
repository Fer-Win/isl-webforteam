
import { data } from "@/components/players"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import Image from "next/image"

const page = ({params}:any) => {
  return (
    <main>
      <NavBar></NavBar>
      {
        data.map((player)=>{
          if(player.name == decodeURIComponent(params.id)){
            return (
             <main>
              <div className="title text-[30px] sm:text-[60px] font-familjen">Player Info</div>
               <div className="flex sm:flex-row  h-auto sm:h-[550px] my-10 flex-col-reverse sm:mx-28" key={player.id}>
                
                <div className=" w-full sm:w-[60%] border-2 border-r-0 border-stone-50 flex flex-col justify-evenly ">
                    <div className="info-section">
                      <div>{player.name}</div>
                    </div>
                    <div className="info-section">
                    <p className="text-lg label">Country</p>
                      {player.stats.nationality}
                      </div>
                    <div className="info-section">
                    <p className="text-lg label">Position</p>
                      {player.stats.position}</div>
                    <div className="h-40 text-[55px] px-3 bg-slate-300 font-familjen flex flex-col justify-center  hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 ease-in-out">
                    
                  <div className="flex flex-row  w-full justify-start items-center gap-10 sm:gap-20   ">
                    <div className="text-[45px] sm:text-[55]">
                    <p className="text-lg label ">Age</p>  
                    {player.stats.age} 
                    </div>
                  <div className="w-[2px] bg-stone-50 h-[150px] "></div>
                    <div className="text-[45px] sm:text-[55px]" >
                      <p className="text-lg label">Height</p>
                      {player.stats.height}</div>
                    </div>
                  </div>
                </div>
  
  
                  <div className="w-full sm:w-[40%] bg-[#013ca6] border-2 h-52 sm:h-auto border-stone-50 overflow-hidden transition-all ease-in-out duration-500 hover:bg-[#fff212]  relative group " >
                  <Image src="/kbfc_logo.svg" alt="" width={384} height={384} className="player-bg w-96 opacity-50 group-hover:scale-0 transition-all ease-in-out duration-300 pb-80 sm:pb-0" />
                  <Image src={player.image} alt="" width={700} height={200} className="z-40 absolute" />
                                   
                  </div>
                  
                </div>
             </main>
            )
          }
        })
      }
      <Footer></Footer>
    </main>
  )
}
export default page