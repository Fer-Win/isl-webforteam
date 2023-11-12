
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
                <div className="w-[60%] border-2 border-stone-50  ">
                  <div className="">
                    <div>{player.stats.position}</div>
                    <div>{player.name}</div>
                  </div>
                  <div>{player.stats.nationality}</div>
                  <div>{player.stats.age}</div>
                  <div>{player.stats.height}</div>
                </div>
                <div className="w-[40%] bg-[#013ca6] border-2 border-stone-50 overflow-hidden relative " >
                <img src="/kbfc_logo.svg" alt="" className="player-bg w-96 opacity-50" />
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