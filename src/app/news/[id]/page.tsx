
import { data } from "@/components/news"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"

const page = ({params}:any) => {
  return (
    <main>
      <NavBar></NavBar>
      {
        data.map((news)=>{
          if(news.id == params.id){
            return (
              <main className="flex flex-col text-white px-7 font-familjen" key={news.id}>
                <div className="w-[80%] my-8 text-3xl ">{news.title}</div>
                <div className="w-[80%] bg-[#013ca6] overflow-hidden relative " >
      
                <img src={news.url} alt="" className="z-40 absolute" />
                                 
                </div>
                <div className="font-sans">{news.description}</div>
                <div>{news.date}</div>
                
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