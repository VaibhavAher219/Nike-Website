import {truckFast} from '../assets/icons'
const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 flex-wrap sm:w-[350px] sm:min-w-[350px] w-full rounded-20px shadow-3xl px-10 py-16'>
        <div className='w-11 h-11  flex justify-center items-center bg-coral-red rounded-full'>
            <img src={imgURL} alt="" width={24} height={24}/>
        </div>
        <h3 className='font-bold text-xl mt-8 font-montserrat'>{label}</h3>
        <p className='mt-4 text-xl text-slate-gray font-montserrat'>{subtext}</p>
    </div>
  )}

export default ServiceCard