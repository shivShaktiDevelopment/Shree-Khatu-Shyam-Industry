import React from 'react'
import { NavLink } from 'react-router-dom';
// import {useDispatch, useSelector} from 'react-redux'
// import { addToCart } from '../store/Slices/CartSlice'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { addToCart } from '../store/Slices/AuthSlice';



function Cards({id,price,img,name}) {
  
  
  return (
    <>
    {/* <div className='w-full px-10 py-10 sm:w-full sm:px-20 md:w-full md:flex md:flex-wrap md:px-[9vw]  md:gap-4  lg:gap-5  xl:w-full xl:px-4 ' > */}
        {/* {datas.map((item,i)=>( */}
            <div  className="card  w-[80vw] h-[85vw]  shadow-2xl flex items-center justify-center  flex-col-reverse bg-zinc-200 rounded-xl mt-10 sm:gap-10  md:w-[40vw] md:h-[30vw] md:gap-2 md:px-0 lg:w-[35vw] lg:h-[25vw] lg:p-1 xl:w-[25vw] xl:h-[15vw] gap-1 xl:px-5 " >
            <div className='w-full flex justify-center items-center gap-1 md:w-full lg:gap-1'>
                <div className="top w-[30vw] mt-4">
                    <h1 className='text-sm md:text-xs font-bold px-2 lg:text-xs xl:text-[.9vw] xl:tracking-tighter font-["Roboto"]'>{name}</h1>
                    <h4 className='text-xs  md:text-xs font-bold px-2 py-1 lg:text-xs xl:text-[.8vw] font-["Roboto"]'>₹ {price}  EXCLUDING GST PACKING,TRANSPORTATION</h4>
                </div>
                <div className="w-1/2 flex justify-center items-center mb-3 gap-1 px-2 md:w-full  xl:mb-0 xl:px-0">
                   <NavLink to={"https://api.whatsapp.com/send?phone=919431658493&text=Hello,%20I%20am%20interested%20in%20your%20services."} target='_blank'> <button className="bg-yellow-500 px-4 py-2 text-[3vw] rounded-md hover:bg-yellow-600 font-bold font-['Roboto'] sm:text-[1.6vw] xl:text-[.7vw]" onClick={() => handleAddToCart(product)} >Add to Cart</button></NavLink>
                </div>
            </div>
            <div className="pic  w-full bg-zinc-300 px-3 h-[35vw] overflow-hidden md:w-full md:mb-1 md:h-[17vw] lg:h-[10vw] lg:w-full xl:w-full xl:h-[14vw] xl:flex justify-center rounded-xl cursor-pointer">
                <img src={img} className='w-full h-full xl:w-[60%] xl:h-[100%] hover:scale-[1.3] px-2  ease-in duration-200  rounded-md object-cover mix-blend-multiply ' alt="" />
            </div>
            <ToastContainer />
        </div>
        {/* ))} */}
    {/* </div>   */}
    </>
  )
}

export default Cards