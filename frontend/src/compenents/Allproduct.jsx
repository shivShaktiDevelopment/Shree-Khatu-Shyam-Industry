import React from 'react'
import Button from './Button'
import {datas} from '../data/data'

import { useDispatch,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Allproduct() {
   
  
  return (
   
    <div className='w-full'>
      <h1 className='text-center text-2xl font-["Roboto"] py-5 '>All Products</h1>
      <div className='w-full py-10 md:flex md:flex-wrap lg:px-5 '> 
      {datas.map((item,i)=>(
            <div key={i} className="card ml-10  px-2 ease-in duration-300 w-[80vw] h-[65vw]  shadow-2xl flex items-center justify-center  flex-col-reverse bg-zinc-200 rounded-xl mt-5 sm:gap-10  md:w-[47vw] md:h-[35vw] md:ml-4 md:gap-2 md:px-0 lg:w-[30vw] lg:h-[25vw] lg:p-2 xl:w-[22vw] xl:h-[20vw] gap-1" >
            <div className='w-full flex justify-center items-center gap-1 md:w-full lg:gap-1 md:mt-2'>
                <div className="top w-1/2 mt-4">
                    <h1 className='text-md font-bold px-2 lg:text-xs lg:px-1 xl:text-xs'>{item.name}</h1>
                    <h4 className='text-xs  md:text-xs font-bold px-2 py-1 lg:text-xs xl:text-[.8vw] font-["Roboto"]'>₹ {item.price}  EXCLUDING GST PACKING, TRANSPORTATION</h4>
                </div>
                <div className="w-1/2 flex justify-center items-center mb-3 gap-1 px-2  md:w-full ">
                <NavLink to={"https://api.whatsapp.com/send?phone=919431658493&text=Hello,%20I%20am%20interested%20in%20your%20services."} target='_blank'><button className="bg-yellow-500 px-3 py-2 text-[.6vw] xl:text-[.8vw] rounded-md hover:bg-yellow-600 font-bold font-['Roboto'] xl:text-md" >Add to Cart</button></NavLink>
                </div>
            </div>
            <div className="pic w-full px-3 rounded-md overflow-hidden h-[35vw] md:w-full md:h-[17vw] lg:h-[11vw] xl:w-full xl:h-[16vw]">
                <img src={item.img} className='w-full h-full rounded-md object-cover mix-blend-multiply ' alt="" />
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Allproduct