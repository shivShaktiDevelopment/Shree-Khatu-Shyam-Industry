import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdDelete} from "react-icons/md";
import { useDispatch } from 'react-redux';
import {removeFromCart,inCreamentQuantity,inDecreamentQuantity} from '../store/Slices/CartSlice'


function ItemCArt({id,price,img,qnty,name}) {
    const dispatch = useDispatch()

  return (
    <>  
    <div className=' w-[40vw] flex  shadow-md rounded-lg gap-2 p-2 mb-5' >
        <img className='w-[50px] h-[50px] ' src= {img} alt="Product Image" />
        <div className='w-full leading-5'>
            <h2 className='font-bold text-gray-800'>{name}</h2>
            <div className='flex justify-between gap-5 ' >
                <span className='text-green-500 font-bold' >₹ {price}</span>
                <div className='flex justify-center items-center gap-3'>
                    <FaMinus onClick={()=> qnty > 1 ? dispatch(inDecreamentQuantity({id})) : (qnty=1)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                    <span>{qnty}</span>
                    <FaPlus onClick={()=> qnty >=1  ? dispatch(inCreamentQuantity({id})) : qnty=1} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                </div>
                <button onClick={()=>dispatch(removeFromCart({id,price,img,name,qnty}))} className='text-gray-600 cursor-pointer hover:text-zinc-800' ><MdDelete /></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemCArt