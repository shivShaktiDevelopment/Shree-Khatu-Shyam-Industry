import React from 'react'

function Aboutus() {
  return (
    <div className='w-full  bg-zinc-200  '>
      <div className='w-full h-60 md:h-96 lg:h-[35vw] relative ' >
        <div className='w-full h-full bg-[#0000005e] absolute text-zinc-100 font-["sedan"] flex justify-center items-center text-4xl md:text-6xl'>
          <p className='xl:text-[2vw] w-[60vw] xl:w-[65vw] text-center text-[3vw] leading-none lg:text-[2.3vw]'>Welcome to <span className='text-yellow-500 font-["sedan"] shadow font-bold text-[3vw] xl:text-[3vw]'>SHREE KHATU SHYAM INDUSTRY</span>, your premier destination for top-quality construction nails, wires, and manufacturing machines. Based in the industrious heart of West Bengal, we pride ourselves on being a leading provider in the nail and wire manufacturing industry.</p>
        </div>
        <img className='w-full h-full object-cover '  src="https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='w-full px-3 text-center py-3 leading-none tracking-tighter font-["sedan"] text-xl md:w-[70vw] md:mx-32 lg:mt-4 lg:px-32 xl:mx-60'> <span className='text-yellow-600 text-5xl italic'>B</span>uilding Dreams, Hammering Ideas: Your Trusted Source for Creative Project <span className=' text-4xl text-yellow-700 italic'>Nails</span>.</div>
      <div className='w-full flex mt-10 md:flex-col  '>
        <div className='w-60 border border-zinc-800 shadow-2xl md:w-full xl:h-96  '>
          <img className='w-full h-full object-cover shadow-2xl shrink-zinc-900 hover:translate-x-2 hover:translate-y-2 hover:transition-all hover:ease-in-out hover:duration-300  ' src="https://images.unsplash.com/photo-1526714719019-b3032b5b5aac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>  
        <div className='w-52 flex justify-end items-start gap-5 flex-col px-3 py-3 md:w-full md:items-center  md:gap-1 md:py-5'>
            <h6 className='text-xs font-["sedan"] md:text-sm xl:text-xl lg:py-2 '>Our value</h6>
            <h4 className='text-sm font-["sedan"] font-bold md:text-lg xl:text-xl '>Pioneering Quality Nail Production</h4>
            <p className='text-xs leading-none tracking-tighter font-["sedan"] text-yellow-600 font-semibold md:w-[50vw] md:text-center md:text-sm xl:text-xl xl:leading-2 xl:tracking-tight xl:py-4' >At Shree Khatu Shyam Industries, we excel in quality nail production, ensuring precision and durability. Our commitment to excellence guarantees structural integrity and project success in every meticulously crafted nail.</p>
        </div>
      </div>
      <div className='w-full  mt-10 xl:h-[30vw]'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1584677191047-38f48d0db64e?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default Aboutus