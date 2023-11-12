
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
              <main className="flex bg-black h-[600px]" key={player.id}>
                <div className="w-[60%] bg-red-700 "> hey there</div>
                <div className="w-[40%] bg-[#013ca6] overflow-hidden relative " >
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