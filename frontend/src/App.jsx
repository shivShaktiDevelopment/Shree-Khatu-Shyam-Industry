import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./compenents/Home";
// import Allproduct from "./compenents/Allproduct";
import Contact from "./compenents/Contact";
import Navbar from "./compenents/Navbar";
import Footer from "./compenents/Footer";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io";
import Aboutus from "./compenents/Aboutus";
import Allproduct from "./compenents/Allproduct";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-screen">
      <div className="w-full">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprocduct" element={<Allproduct />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/about" element={<Aboutus />} />
        {/* <Route path='/logout' element={<Logout />}/> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>

      <footer className="w-full bg-zinc-800">
        <Footer />
        <hr className=" bg-zinc-600" />
        <div  className="w-full flex justify-between items-center gap-2 p-2 ">
          <div className="w-[23%] sm:w-[30%]">
          <span className="text-zinc-200 text-[1.5vw] px-3 font-semibold tracking-tighter leading-none xl:text-[.8vw]">All rights reserved ©2024</span>
          </div>
          <div className="w-[31%] sm:w-[17%] flex">
            <Link
              to={"https://www.facebook.com/"}
              className="text-xl p-2 text-zinc-200 "
            >
              <FaFacebook />
            </Link>
            <Link
              to={"https://www.facebook.com/"}
              className="text-xl p-2 text-zinc-200 "
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to={"https://www.twitter.com/"}
              className="text-xl p-2 text-zinc-200"
            >
              <FaXTwitter />
            </Link>
            <Link
              to={"https://www.whatsapp.com/"}
              className="text-xl p-2 text-zinc-200"
            >
              <IoLogoWhatsapp />
            </Link>
          </div>
          <div className="w-[30%] sm:w-[20vw] flex justify-center items-center">
            <span className="text-center text-zinc-200 text-[1.4vw] px-3 font-semibold tracking-tighter lg:text-[1vw] xl:text-[.8vw]">This Website is created and maintained by <a href="#">Shiv Shakti Software Solutions</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
