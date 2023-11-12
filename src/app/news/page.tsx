import {data} from "@/components/news"

import Footer from "@/components/Footer";
import NavBar from "../../components/NavBar";
import NewsCard from "@/components/NewsCard";


const News = () => {


  
  return (
    <main>
      <NavBar />
     <div className="w-full flex justify-center flex-col items-center my-9">
     {data?.map((news, index) => (
       <NewsCard id={news.id} title={news.title} key={index} cut={news.cut} date={news.date} image={news.url}></NewsCard>
      ))}
     </div>
      <Footer />
    </main>
  );
};

export default News;
