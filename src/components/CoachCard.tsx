
interface CoachCardProps {
  image: string;
  name: string;
  position: string;
  nationality: string;
}


const CoachCard: React.FC<CoachCardProps> =({image,name,position,nationality})=>{
  return (
    <a href="" className='group'>
       <div className='border-2 border-black  w-64 rounded-md '>
     <div className="image-container bg-blue-700 h-56 overflow-hidden items-center flex justify-center group" >
       <img src={image} alt={`${name} picture`} className=' mx-0 my-auto group-hover:mb-14' />
     </div>
     <div className='flex flex-col px-3 py-2'>
     <h1 className='text-lg'>{name}</h1>
      <ul>
        <li>Position: {position}</li>
        <li>Nationality: {nationality}</li>
      </ul>
     </div>
    </div>
    </a>
   
  );

}
export default CoachCard