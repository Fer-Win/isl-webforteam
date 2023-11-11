
import CoachCard from '@/components/CoachCard';
import {data} from './coaches.js';

const CoachSection = () => {
  return (
    <div className='flex gap-5 justify-center items-center flex-wrap my-11'>
      {data.map((player)=>{
        return <CoachCard key={player.id} image={player.image} name={player.name} position={player.position} nationality={player.nationality}></CoachCard>
      })}
    </div>
      

  )
}
export default CoachSection;