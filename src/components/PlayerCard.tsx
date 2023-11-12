
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
    <a href={`/player/${name}`} className='group'>
       <div className='border-2 border-black  w-64 rounded-md '>
     <div className="image-container bg-white h-56 overflow-hidden items-center flex justify-center" >
       <img src={image} alt={`${name} picture`} className=' transition-all h-[250px] duration-500 ease-in-out hover:h-[300px] mx-0 my-auto group-hover:mb-14' />
     </div>
     <div className='flex flex-col px-3 py-2 bg-slate-400 font-familjen'>
     <h1 className='text-lg align-middle text-center'>{name}</h1>
      <ul>
        <li className='text-center'>{stats.position}</li>
  
      </ul>
     </div>
    </div>
    </a>
   
  );
};

export default PlayerCard;
