
import { data } from "@/components/coaches"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import Image from "next/image"

const page = ({params}:any) => {
  return (
    <main>
      <NavBar></NavBar>
      {
        data.map((coach)=>{
          if(coach.name == decodeURIComponent(params.id)){
            return (
             <main>
              <div className="title text-[30px] sm:text-[60px] ml-10 sm:ml-28  font-familjen" key={coach.id}>Coach Info</div>
               <div className="flex sm:flex-row  h-auto sm:h-[550px] my-10 flex-col-reverse sm:mx-28" key={coach.id}>
                
                <div className="w-full sm:w-[60%] border-2 border-r-0 border-stone-50 flex flex-col justify-evenly ">
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
  
  
                  <div className="w-full sm:w-[40%] bg-[#013ca6] border-2 h-52 sm:h-auto border-stone-50 overflow-hidden transition-all ease-in-out duration-500 hover:bg-[#fff212]  relative group  " >
                  <Image src="/kbfc_logo.svg" alt="" width={384} height={384} className="player-bg w-96 opacity-50 group-hover:scale-0 transition-all ease-in-out duration-300 pb-80 sm:pb-0" />
                  <Image src={coach.image} alt="" width={700} height={384} className="z-40 absolute object-cover  mx-auto" />
                                   
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