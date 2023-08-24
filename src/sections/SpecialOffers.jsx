import {offer} from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
const SpecialOffers = () => {
  return (
    <section className="flex items-center">
      <div>
        <img src={offer} />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-4xl'><span className='text-coral-red'>Special</span> Offer</h1>
        <p className='font-montserrat text-slate-gray'>Embark on a shopping journey that redefines your<br></br> experience with unbeatable deals. From premier<br></br> selections to incredible savings, we offer unparalleled<br></br> value that sets us apart.</p>
        <p className='font-montserrat text-slate-gray'>Navigate a realm of possibilities designed to fulfill your<br></br> unique desires, surpassing the loftiest expectations. Your<br></br> journey with us is nothing short of exceptional.</p>
      <div className='flex flex-row mt-4 gap-3'>
      <Button label='View Details' iconURL={arrowRight} />
      <Button label='Learn More' iconURL={arrowRight} />
      </div>
      
      </div>
     

    </section>
  )
}

export default SpecialOffers