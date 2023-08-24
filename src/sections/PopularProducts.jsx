import  PopularProductCard  from "../components/PopularProductCard"
import { products } from "../constants"
const PopularProducts = () => {
  return (
    <section className="w=full   max-container max-sm:mt-12">
    <div className="font-montserrat text-4xl font-bold">Our <span className="text-coral-red">Popular</span> Products</div>
    <div>
      <span className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
      Experience top-notch quality and style with our sought-after <br></br>selections. Discover a world of comfort, design, and value
      </span>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-14">
      {products.map((product)=> (
        <PopularProductCard key={product.name} {...product}/>
      ))}

    </div>
    
    

   
    </section>
    )
}

export default PopularProducts