
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

const PlayerCard: React.FC<PlayerCardProps> = ({ image, name, stats }) => {
  return (
    <a href="" className='group'>
       <div className='border-2 border-black  w-64 rounded-md '>
     <div className="image-container bg-blue-700 h-56 overflow-hidden items-center flex justify-center group" >
       <img src={image} alt={`${name} picture`} className='h-[300px] w-auto mx-0 my-auto group-hover:mb-14' />
     </div>
     <div className='flex flex-col px-3 py-2'>
     <h1 className='text-lg'>{name}</h1>
      <ul>
        <li>Position: {stats.position}</li>
        <li>Nationality: {stats.nationality}</li>
        <li>Age: {stats.age}</li>
        <li>Height: {stats.height}</li>
      </ul>
     </div>
    </div>
    </a>
   
  );
};

export default PlayerCard;
