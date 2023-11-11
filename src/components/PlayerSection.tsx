import PlayerCard from './PlayerCard.tsx';
import {data} from './players.js';

const PlayerSection = () => {
  return (
    <div className='flex gap-5 justify-center items-center flex-wrap'>
      {data.map((player)=>{
        return <PlayerCard image={player.image} name={player.name} stats={player.stats}></PlayerCard>
      })}
    </div>
      

  )
}
export default PlayerSection;