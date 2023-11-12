
import { data } from "@/components/players"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"

const page = ({params}:any) => {
  return (
    <main>
      <NavBar></NavBar>
      {
        data.map((player)=>{
          if(player.name == decodeURIComponent(params.id)){
            return (
              <main className="flex h-[550px] my-10 mx-28" key={player.id}>
                 {/* <div className="title font-familjen font-bold text-[5rem] opacity-80">Player Info</div> */}
                <div className="w-[60%] border-2 border-r-0 border-stone-50 flex flex-col justify-evenly ">
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
                  <div className="h-40 text-[55px] px-3 bg-slate-300 font-familjen flex flex-col justify-center">
                  
                <div className="flex flex-row  w-full justify-start items-center gap-20"><div><p className="text-lg label">Age</p>  {player.stats.age} </div>
                <div className="w-[2px] bg-stone-50 h-[150px]"></div>
                  <div><p className="text-lg label">Height</p>{player.stats.height}</div></div>
                    </div>
                </div>
                <div className="w-[40%] bg-[#013ca6] border-2 border-stone-50 overflow-hidden transition-all ease-in-out duration-500 hover:bg-[#fff212]  relative group " >
                <img src="/kbfc_logo.svg" alt="" className="player-bg w-96 opacity-50 group-hover:scale-0 transition-all ease-in-out duration-300" />
                <img src={player.image} alt="" className="z-40 absolute" />
                                 
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