
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
                <div className="w-[80%] h-[400px] overflow-hidden  " >
      
                <img src={news.url} alt="" className="z-40 w-[900px] rounded-sm my-4 object-contain" />
                                 
                </div>
                <div className="font-sans mt-8">{news.description}</div>
                <div className="text-lg my-5">{news.date}</div>
                
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