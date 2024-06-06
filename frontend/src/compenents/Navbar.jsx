import { Link, NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';




function Navbar() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  return (
    <nav className=' w-full h-[15vw] bg-[#f2bb09] flex justify-between items-center py-0 px-3 sm:w-full md:h-[10vw] md:text-xs  lg:w-full   lg:h-[8vw] xl:w-full xl:gap-20 xl:h-[6vw] 2xl:h-[5vw]'>
        <div className="w-[20vw] h-[20vw] logo flex justify-center items-center sm:text-2xl sm:font-bold  md:w-[15vw] md:h-[15vw]  sm:w-[20vw] sm:h-[20vw] lg:h-[9vw] lg:w-[13vw] xl:w-[10vw] xl:h-[6vw]  ">
          <Link to={'/'} ><img className='w-full h-full object-cover mix-blend-multiply  sm:w-full sm:h-full md:w-full md:h-full' src='https://res.cloudinary.com/debkxazes/image/upload/v1715861366/Shree%20Khatu%20Shyam%20Industry%20-%20Assets/Website%20All%20Uploaded%20Assets/w95hqnkhmg2cmoasueal.webp' alt=""/></Link>
        </div>
        <div className="w-[50vw] ml-[8vw] links flex justify-center items-center gap-1 sm:gap-2 lg:flex lg:gap-5 2xl:w-[30%] ">
            <NavLink className={({isActive}) => `${isActive ? ' transition-all ease-in-out duration-100 before:bottom-0 before:h-[.1vw]  before:bg-zinc-800  shadow-md px-2 py-1 shadow-zinc-800 ' : 'before:w-0'} relative uppercase text-[2vw] font-bold  font-["Roboto"] sm:text-m md:text-xs lg:text-xs  xl:text-md 2xl:text-xs `} to={"/"} >Home</NavLink>
            <NavLink className={({isActive}) => `${isActive ? ' transition-all ease-in-out duration-100 before:bottom-0 before:h-[.1vw]  before:bg-zinc-800 shadow-md px-2 py-1 shadow-zinc-800' : 'before:w-0'} relative uppercase text-[2vw] font-bold  font-["Roboto"] sm:text-md md:text-xs lg:text-xs xl:text-md 2xl:text-xs `} to={"/about"}>About</NavLink>
            <NavLink className={({isActive}) => `${isActive ? ' transition-all ease-in-out duration-100 before:bottom-0 before:h-[.1vw]  before:bg-zinc-800 shadow-md px-2 py-1 shadow-zinc-800' : 'before:w-0'} relative uppercase text-[2vw] font-bold  font-["Roboto"] sm:text-md md:text-xs lg:text-xs xl:text-md 2xl:text-xs`}  to={"/allprocduct"}>Products</NavLink>
            <NavLink className={({isActive}) => `${isActive ? ' transition-all ease-in-out duration-100 before:bottom-0 before:h-[.1vw]  before:bg-zinc-800 shadow-md px-2 py-1 shadow-zinc-800' : 'before:w-0'} relative uppercase text-[2vw] font-bold  font-["Roboto"] sm:text-md md:text-xs lg:text-xs xl:text-md 2xl:text-xs`} to={"/contact"}>Contact Us</NavLink>
      
          </div>
        {/* <div className='w-[35vw]  px-0 flex  items-center justify-end gap-1 md:w-[25vw] md:gap-3 lg:w-[20vw] xl:w-[15vw] xl:px-5 2xl:gap-5 2xl:w-[20%] '>
           {!isAuthenticated ? <>
            {(<NavLink className={({isActive}) => `${isActive ? 'bg-transparent  text-zinc-800 border border-zinc-800 ' : ' bg-zinc-800 text-zinc-200 border '} border border-zinc-800 px-2 py-1 rounded-md relative uppercase text-[1.7vw] font-bold  font-["Roboto"] sm:text-md md:text-xs lg:text-[.8vw]  xl:text-md 2xl:text-xs 2xl:px-4 2xl:py-2`} to={"/signin"}>Register</NavLink>) }
            {((<NavLink className={({isActive}) => `${isActive ? 'bg-transparent  text-zinc-800 border border-zinc-800 ' : ' bg-zinc-800 text-zinc-200 border '} border border-zinc-800 px-2 py-1 rounded-md relative uppercase text-[1.7vw] font-bold  font-["Roboto"] sm:text-md md:text-xs lg:text-[.8vw] xl:text-md 2xl:text-xs 2xl:px-4 2xl:py-2 `} to={"/login"}>Log-in</NavLink>) )}
           </> : <>
           {<Link to={'/cart'}  className='sm:text-4xl  md:text-3xl lg:text-2xl xl:text-3xl '><span><FaCartPlus /></span></Link> }
          {<span className='' ><UserProfile /></span>}
           </> }    
        </div> */}
    </nav>
  )
}

export default Navbar