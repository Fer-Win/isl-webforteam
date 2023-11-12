
import { data } from "@/components/coaches"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"

const page = ({params}:any) => {
  return (
    <main>
      <NavBar></NavBar>
      {
        data.map((coach)=>{
          if(coach.name == decodeURIComponent(params.id)){
            return (
             <main>
              <div className="title text-[60px] font-familjen">Coach Info</div>
               <div className="flex h-[550px] my-10 mx-28" key={coach.id}>
                
                <div className="w-[60%] border-2 border-r-0 border-stone-50 flex flex-col justify-evenly ">
                    <div className="info-section">
                      <div>{coach.name}</div>
                    </div>
                    <div className="info-section">
                    <p className="text-lg label">Country</p>
                      {coach.nationality}
                      </div>
                    <div className="info-section">
                    <p className="text-lg label">Position</p>
                      {coach.position}</div>
                </div>
  
  
                  <div className="w-[40%] bg-[#013ca6] border-2 border-stone-50 overflow-hidden transition-all ease-in-out duration-500 hover:bg-[#fff212]  relative group " >
                  <img src="/kbfc_logo.svg" alt="" className="player-bg w-96 opacity-50 group-hover:scale-0 transition-all ease-in-out duration-300" />
                  <img src={coach.image} alt="" width={700} className="z-40 absolute object-cover bottom-0 mx-auto" />
                                   
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