import React from 'react'
import Button from './Button'
import Cards from './Cards'
import Products from './Products'
import { Link } from 'react-router-dom'
import {datas} from '../data/data'
import { FaArrowDown } from "react-icons/fa";
import Video from './Video'


function Home() {
    
  return (
    <div>
        <div className="hero w-full  bg-zinc-200 sm:w-full md:w-full md:h-full xl:w-full ">
        {/* center div */}
            <div className="image w-full  lg:w-full lg:h-full xl:h-full">
                <div className='w-full h-[57vw] bg-[#0000008d] absolute xl:h-[55.5vw]'></div>
                <Video />
            </div>
            <div className="text text-center pb-10 sm:pb-10 md:py-5 lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%]  lg:text-center">
                <h3 className=' pt-7  text-[4vw]  font-["abril"] font-bold tracking-tighter leading-none text-zinc-900  text-center sm:text-2xl sm:pt-5 md:text-1xl lg:text-center lg:text-3xl xl:text-3xl 2xl:text-4xl xl:text-zinc-200'>Crafting Quality, Building Trust, High Qualtiy tools</h3>
                <h1 className='text-sm mt-2 font-bold text-zinc-900 text-center flex justify-center  items-center sm:text-xl sm:pb-5 lg:text-center lg:mt-4 lg:text-xl xl:text-xl 2xl:text-3xl font-["Roboto"] xl:text-zinc-200'> Shree Khatu Shyam Industry </h1>
                <Button btnText={"Scroll Down"}  />
            </div>
        </div>
        {/* cards */}
        <div className='w-full '>
            <div className='flex justify-center items-center hover:underline transition-all ease-out duration-300 '><Link to={"/allprocduct"} className='text-2xl text-center py-5 capitilized font-bold font-["Roboto"]'>View more</Link></div>
            <div className='w-full flex justify-start items-center gap-10 px-[8vw] md:gap-6 flex-wrap lg:px-[13vw] xl:gap-15 xl:px-[10vw]'>
                {datas.map((item) => (
                    <Cards key={item.id} id={item.id} name={item.name} price={item.price} img={item.img}  />
                ))}
                
            </div>
        </div>
        {/* Products */}
        <div>
            <Products />
        </div>
        
    </div>
  )
}

export default Home