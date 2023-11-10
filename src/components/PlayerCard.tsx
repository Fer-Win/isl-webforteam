
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
    <div className='border-2 border-black'>
      <img src={picture} alt={`${name} picture`} />
      <h2>{name}</h2>
      <ul>
        <li>Goals: {stats.goals}</li>
        <li>Assists: {stats.assists}</li>
        <li>Yellow Cards: {stats.yellowCards}</li>
        <li>Red Cards: {stats.redCards}</li>
      </ul>
    </div>
  );
};

export default PlayerCard;
