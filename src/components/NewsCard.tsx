
interface NewsCardProps {
  id:number,
  title: string;
  cut: string;
  date: string;
  image:string;
}


const NewsCard: React.FC<NewsCardProps>=({id,title,cut,date,image})=>{
  return (
    <a href={`/news/${id}`} className=" text-white flex flex-col sm:flex-row justify-center items-center  py-6 rounded-sm gap-7 hover:bg-[#013ca6] hover:bg-opacity-20 transition-all duration-100 group ease-in">
      <div className="w-[95%] px-5 sm:w-3/5">
          <h1 className="sm:text-2xl text-sm w-full font-familjen font-bold mb-3">{title}</h1>
          <p className="opacity-80 overflow-clip sm:overflow-auto h-[100px] sm:h-auto  ">{cut}</p>
          <h3 className="sm:text-lg text-sm opacity-80  font-familjen pt-1 sm:pt-3">{date}</h3>
      </div>
      <div>
        <img src={image} alt="" className="sm:w-[350px] w-[250px] rounded-[1px] sm:rounded-none object-cover  group-hover:rounded-lg group-hover:scale-105 transition-all duration-100 ease-in"/>
      </div>
    </a>
  )
}
export default NewsCard