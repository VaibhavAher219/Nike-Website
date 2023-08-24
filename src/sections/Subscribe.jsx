import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
const Subscribe = () => {
  return (
   <section className='flex justify-between items-center max-lg:flex-col'>
      <div>
        <h1 className="text-4xl font-montserrat font-bold"><span className="text-coral-red ">Subscribe</span> to Our<br></br>Newsletter</h1>
      </div>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text"  placeholder="Subscribe" className='input ml-1 '/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full p-2 max-sm-justify-end '>
          <Button label='SignUp' iconURL={arrowRight} />
        </div>
      </div>
     

   </section>
  )
}

export default Subscribe