import {star} from '../assets/icons'
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt="" className=""/>
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="" className=""/>
            <p className='text-slate-gray font-montserrat text-xl leading-normal'>(4.5)</p>
        </div>
        <h3 className='text-2xl leading-normal font-semibold '>{name}</h3>
        <p className='font-montserrat text-coral-red leading-normal'>{price}</p>
        </div> 
  )
}

export default PopularProductCard