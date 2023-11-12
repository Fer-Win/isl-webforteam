
import React from 'react';

interface PlayerCardProps {
  image: string;
  name: string;
  stats: {
    position: string;
    nationality: string;
    age: number;
    height: string;
  };  
}

const PlayerCard: React.FC<PlayerCardProps> = ({  image, name, stats }) => {
  return (
    <a href={`/player/${name}`} className='group hover:rounded-md'>
       <div className='  overflow-hidden w-[270px] hover:rounded-md transition-all ease-out duration-300 group '>
     <div className="image-container bg-white h-56 overflow-hidden items-center flex justify-center" >
       <img src={image} alt={`${name} picture`} className=' transition-all h-[250px] duration-500 ease-in-out hover:h-[300px] mx-0 my-auto group-hover:mb-14' />
     </div>
     <div className='flex flex-col px-3 py-2 bg-[#013ca6] border-2 border-white font-familjen group-hover:rounded-b-md transition-all ease-in duration-300'>
     <h1 className='text-xl align-middle text-center  text-[#0a0a0a] font-bold'>{name}</h1>
      <ul>
        <li className='text-center'>{stats.position}</li>
  
      </ul>
     </div>
    </div>
    </a>
   
  );
};

export default PlayerCard;
