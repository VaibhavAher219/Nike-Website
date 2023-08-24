import {star} from '../assets/icons'
import {customer1} from '../assets/images'
import {customer2} from '../assets/images'


const CustomerReviews = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center">
          <h1 className='font-bold text-4xl font-montserrat'>What Our <span className='text-coral-red'>Customers</span> Say?</h1>
          <p className='text-slate-gray leading-normal font-palanquin'>Hear genuine stories from our satisfied customers about</p>
          <p className='text-slate-gray leading-normal font-palanquin'>their exceptional experiences with us.</p>
      </div>
      <div className='flex justify-around mt-8'>
        <div className='flex flex-col justify-center items-center gap-3'>        
          <img src={customer1} width={100} height={100} className='rounded-full' />
          <div className='text-slate-gray leading-normal font-montserrat text-xl'>          <p>The attention to detail and the quality of<br></br> the product exceeded my expectations.<br></br> Highly recommended!</p>
</div>
          <div className='flex'>
          <img src={star} alt="" className=""/>
          <p className='text-slate-gray font-montserrat text-xl leading-normal'>(4.5)</p>
          </div>
          <h1 className='text-2xl font-montserrat font-semibold'>Alex Hormozi</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
        <img src={customer2} width={100} height={100} className='rounded-full' />
        <div className='text-slate-gray leading-normal font-montserrat text-xl' >        <p>The product not only met but exceeded<br></br> my expectations. I'll definitely be a<br></br> returning customer!</p>
</div>
        <div className='flex'>
        <img src={star} alt="" className=""/>
        <p className='text-slate-gray font-montserrat text-xl leading-normal'>(4.5)</p>
        </div>
        <h1 className='text-2xl font-montserrat font-semibold'>Laura Wolf</h1>

        


        </div>
      </div>

    </section>
  )
}

export default CustomerReviews