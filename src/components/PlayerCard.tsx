
import React from 'react';

interface PlayerCardProps {
  picture: string;
  name: string;
  stats: {
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
  };
}

const PlayerCard: React.FC<PlayerCardProps> = ({ picture, name, stats }) => {
  return (
    <div className='border-2 border-black  w-64 rounded-md '>
     <div className="image-container bg-blue-700 h-56 overflow-hidden items-center flex justify-center" >
       <img src={picture} alt={`${name} picture`} className='h-[300px] w-auto mx-0 my-auto' />
     </div>
     <div className='flex flex-col px-3 py-2'>
     <h1 className='text-lg'>{name}</h1>
      <ul>
        <li>Goals: {stats.goals}</li>
        <li>Assists: {stats.assists}</li>
        <li>Yellow Cards: {stats.yellowCards}</li>
        <li>Red Cards: {stats.redCards}</li>
      </ul>
     </div>
    </div>
  );
};

export default PlayerCard;
