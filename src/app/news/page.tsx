import {data} from "./news"

import Footer from "@/components/Footer";
import NavBar from "../../components/NavBar";
import NewsCard from "@/components/NewCard";


const News = () => {


  
  return (
    <main>
      <NavBar />
     <div className="w-full flex justify-center items-center my-9">
     {data?.map((news, index) => (
       <NewsCard title={news.title} key={news.id} cut={news.cut} date={news.date} image={news.url}></NewsCard>
      ))}
     </div>
      <Footer />
    </main>
  );
};

export default News;
