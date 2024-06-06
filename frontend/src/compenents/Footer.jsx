import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';





function Footer() {
  return (
    <div className='w-full bg-zinc-800 text-center text-zinc-200 pb-3 flex flex-col items-center md:flex-row md:justify-center md:items-baseline md:gap-0 xl:text-sm '>
     <div className='w-[90%] py-5 flex justify-center items-center flex-col sm:gap-30 lg:flex lg:justify-center xl:flex-row xl:items-baseline '>
          <div className='w-1/2'>
            <h3 className='text-[#efbb10] font-black py-3 sm:text-xl lg:text-sm text-center'>PRODUCTS</h3>
            <p className='text-center hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Nails</p>
            <p className='text-center hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Steel wires</p>
            <Link to={'/'} className='text-center hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Machines</Link>
            <p><Link to={'/'} className='text-center hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Buy Now</Link></p>
          </div>
          <div className='w-1/2'>
            <h3 className='text-[#efbb10] font-black py-3 sm:text-xl lg:text-sm text-center'>OUR COMPANY</h3>
            <NavLink to={"https://api.whatsapp.com/send?phone=919934119958&text=Hello,%20I%20am%20interested%20in%20your%20services."} target='_blank'><p className='text-center hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>Terms And Conditions </p></NavLink>
            <Link to={'/about'} className='text-center hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'>About us</Link>
          </div>
          <div className='w-1/2 '>
            <h3 className='text-[#efbb10] font-black py-3 sm:text-xl lg:text-sm text-center'>CONTACT INFO</h3>
            <Link to={'/contact'} className='flex justify-center items-center gap-5 py-1 hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'><span className='text-[#efbb10] text-xl font-bold '><MdHome /></span>Paschim Balichuka,Goalpokhar, West Bengal</Link>
            <p className='flex justify-center items-center  py-1 hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'><span className= 'flex justify-center items-center gap-7 text-[#efbb10] w-full font-bold '><FaPhoneAlt />+91 87893 59905 , 9431658493 </span>
             </p>
            <Link to={'/contact'} className='flex justify-center items-center gap-5 py-1 hover:underline hover:text-yellow-400 hover:transition-all hover:ease-in hover:duration-300 cursor-pointer'><span className='text-[#efbb10] text-xl font-bold'><MdOutlineMailOutline /></span> shreekhatushyamindustry1@gmail.com</Link>
          </div>
    </div>
      
  
    </div>
  )
}

export default Footer