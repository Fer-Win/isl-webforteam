
interface NewsCardProps {
  id:number,
  title: string;
  cut: string;
  date: string;
  image:string;
}


const NewsCard: React.FC<NewsCardProps>=({id,title,cut,date,image})=>{
  return (
    <a href={`/news/${id}`} className=" text-white flex justify-center items-center  py-6 rounded-sm gap-7 hover:bg-[#013ca6] hover:bg-opacity-20 transition-all duration-100 group ease-in">
      <div className="w-3/5">
      <h1 className="text-2xl font-familjen font-bold mb-3">{title}</h1>
      <p className="opacity-80">{cut}</p>
      <h3 className="text-lg opacity-80  font-familjen pt-3">{date}</h3>
      </div>
      <div>
        <img src={image} alt="" className="w-[350px]  object-cover  group-hover:rounded-lg group-hover:scale-105 transition-all duration-100 ease-in"/>
      </div>
    </a>
  )
}
export default NewsCard