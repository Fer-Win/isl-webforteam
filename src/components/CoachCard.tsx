
interface CoachCardProps {
  image: string;
  name: string;
  position: string;
  nationality: string;
}


const CoachCard: React.FC<CoachCardProps> =({image,name,position,nationality})=>{
  return (
    <a href="" className='group font-familjen'>
       <div className='border-2 border-black  w-64 rounded-md '>
     <div className="image-container bg-white h-56 overflow-hidden items-center flex justify-center group relative" >
       <img src={image} alt={`${name} picture`} className=' transition-all h-[220px] w-auto duration-500 ease-in-out absolute bottom-0' />
     </div>
     <div className='flex flex-col px-3 py-2 bg-slate-400 '>
     <h1 className='text-lg text-center'>{name}</h1>
      <ul>
        <li className="text-center">{position}</li>
        {/* <li>Nationality: {nationality}</li> */}
      </ul>
     </div>
    </div>
    </a>
   
  );

}
export default CoachCard