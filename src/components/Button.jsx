
const Button = ({label,iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none rounded-full bg-coral-red text-white font-montserrat ">
         {label}
         <img className='ml-2 rounded-full w-5 h-5 ' src={iconURL} ></img>
    </button>
  )
}

export default Button