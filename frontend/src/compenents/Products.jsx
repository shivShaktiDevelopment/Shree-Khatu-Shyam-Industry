import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import {datas} from '../data/data'



function Products() {
  


  return (
    <div className='w-full text-center mt-10 sm:w-full'>
        <h1 className='uppercase sm:text-2xl lg:text-2xl lg:py-4 font-["Roboto"]'>Our Products</h1>
        <div className='w-full flex justify-center items-center gap-1 sm:gap-4'>
            <Link className='text-sm font-bold  sm:text-xs sm:text-yellow-600 lg:text-sm font-["Roboto"]'>Latest</Link>
            <Link className='text-sm font-bold sm:text-xs sm:text-yellow-600 lg:text-sm font-["Roboto"]'>Featured</Link>
        </div>
        {/* cards */}
       <div className="w-full px-20 py-10 flex snap-x snap-mandatory  overflow-x-auto overflow-y-hidden gap-20 ">
        {datas.map((pCard,i) => (
          <div key={i}>
            <span className='snap-center'><ProductCard name={pCard.name} btnText={pCard.Text}  img={pCard.img}  id={pCard.id} price={pCard.price} /></span>
          </div>

        ))}
       </div>
    </div>
  )
}

export default Products