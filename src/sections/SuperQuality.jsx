import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <section  className="`w-full flex flex-1">
        <div className="flex-col">
          <h1 className="font-montserrat text-4xl font-bold">We Provide You <span className="text-coral-red">Super<br></br> Quality</span> Shoes</h1>
          <p className="text-slate-gray mt-3 text-xl font-montserrat leading-normal">Ensuring premium comfort and style, our meticulously<br></br> crafted footwear is designed to elevate your experience,<br></br> providing you with unmatched quality, innovation, and a<br></br> touch of elegance.</p>
          <p className="text-slate-gray mt-5 text-xl font-montserrat leading-normal">Our dedication to detail and excellence ensures your <br></br>satisfaction</p>
          <div className='mt-4'>
          <Button  label='View Details' iconURL={arrowRight} />
          </div>
        </div>
        <div className='ml-60'>
          <img src={shoe8}/>
       </div>

        
    </section>
  )
}

export default SuperQuality