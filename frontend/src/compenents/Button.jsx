import React from 'react'

function Button({btnText}) {
  return (
    <div>
        <button className=' mt-3 bg-[#f2bb09] hover:bg-[#cfa109] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  px-3 py-2 text-[2.3vw] font-semibold tracking-tighter leading-none text-zinc-900 rounded sm:text-sm sm:mt-2 sm:w-[18vw] md:w-[14vw]  md:px-3 lg:w-[8vw]  lg:mt-5 lg:text-[1vw] xl:w-[7vw] xl:text-xs font-["Roboto"] ' >{btnText}</button>
    </div>
  )
}

export default Button