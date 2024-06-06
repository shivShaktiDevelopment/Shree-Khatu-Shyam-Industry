import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

function ProductCard({name,id,price,img,btnText}) {
  
  return (
    <div className='shadow-2xl w-[60vw] h-[35vh] bg-zinc-200 rounded-xl   sm:w-[30vw] sm:h-[40vw]  lg:w-[20vw] lg:h-[25vw] xl:w-[15vw] xl:h-[22vw]'>
      <div className='w-full h-[35vw] overflow-hidden rounded-lg px-10 sm:h-[12vw] md:h-[20vw] lg:h-[10vw] bg-zinc-300' >
        <img className='w-full h-full xl:h-[100%] object-contain mix-blend-multiply ' src={img} alt="" />
      </div>    
      <div className='pl-2'><h3 className='text-start py-2 sm:mt-2 sm:py-3 lg:py-1 font-["Roboto"] xl:px-6'>{name}</h3></div>
      <h2 className='mt-5 text-start px-5 font-semibold text-xs sm:px-[5vw] sm:text-xs md:px-[5vw] md:-py-2 lg:px-8 lg:text-sm font-["Roboto"]'> ₹ {price}</h2>
      <NavLink to={"https://api.whatsapp.com/send?phone=919431658493&text=Hello,%20I%20am%20interested%20in%20your%20services."} target='_blank'><div className='text-start px-5 w-[80vw] sm:px-[10vw]  md:px-[7vw] lg:px-7'><Button btnText={"Buy now"} /> </div> </NavLink>
    </div>
  )
}

export default ProductCard