import PlayerCard from './PlayerCard';
import {data} from './players.js';

const PlayerSection = () => {
  return (
    <div className='flex gap-5 justify-center items-center flex-wrap'>
      {data.map((player)=>{
        return <PlayerCard key={player.id}  image={player.image} name={player.name} stats={player.stats}></PlayerCard>
      })}
    </div>
      

  )
}
export default PlayerSection;