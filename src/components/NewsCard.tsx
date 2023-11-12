
interface NewsCardProps {
  title: string;
  cut: string;
  date: string;
  image:string;
}


const NewsCard: React.FC<NewsCardProps>=({title,cut,date,image})=>{
  return (
    <a href={``} className=" text-white flex justify-center items-center bg-slate-500 py-6 rounded-sm gap-7">
      <div className="w-3/5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{cut}</p>
      <h3 className="text-lg font-semibold pt-5">{date}</h3>
      </div>
      <div className="bg-red-500">
        <img src={image} alt="" className="w-[350px]  object-cover"/>
      </div>
    </a>
  )
}
export default NewsCard