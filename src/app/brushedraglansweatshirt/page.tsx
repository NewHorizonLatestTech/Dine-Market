'use client';
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Footer, Navbar } from "../page";
import Test from '../empty/toast/Test';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function page(pageProps:any) {
  return (
    <>

<link rel="shortcut icon" href="logo.png" type="image/x-icon" />


      <div className="m-20 mt-40" id="maindiv">
        {/* Navabar */}
       <Navbar />

     <div className="flex gap-8" id="">
        <img src="s.png" alt="s" className="w-24 h-24" id="" />
        <img src="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png" alt="s" className="w-6/12" id="" />
        <h1 className="mt-20 font-medium text-2xl text-black" id="">Brushed Raglan <br /> Sweatshirt</h1>
     </div>
     <br />
        <h1 className="font-medium text-black relative bottom-[432px] left-[712px]" id="">SELECT SIZE</h1>
        <br />
     <div className="flex gap-8 relative bottom-[432px] left-[712px]" id="">
        <h1 className="font-bold text-gray-400" id="">XS</h1>
        <h1 className="font-bold text-gray-400" id="">S</h1>
        <h1 className="font-bold text-gray-400" id="">M</h1>
        <h1 className="font-bold text-gray-400" id="">L</h1>
        <h1 className="font-bold text-gray-400" id="">XL</h1>
        <br /><br />
     </div>
     <div className="flex gap-2 relative bottom-[432px] left-[712px]" id="">
        <h1 className="font-bold text-black mt-" id="">Quantity: </h1>
<button className="text-lg font-bold bg-slate-200 p-2 h-9 rounded-2xl" id="">-1</button>
<button className="text-lg font-bold ring-1 ring-black p-2 h-9 rounded-2xl" id="">+</button>
     </div>
     <div className="flex gap-2 relative bottom-[432px] left-[712px]" id="">
     <button
          id="buttonbalckvcvbf"
          className="flex bg-black text-white mt-5 w-40 h-10 rounded-sm ring-1 ring-red-300"
        >
          <img
            src="shopp.png"
            id="shoppddd"
            className="w-8 h-8 mr-2 ml-4 mt-1 mb-4"
            alt=""
          />
          <a>
          <h1 className="text-white mt-2 font-bold" id="shoppingrrr">
          <Test {...pageProps} />
      <ToastContainer />
          </h1>
          </a>
      
        </button>
        <h1 className="font-bold text-black mt-5 text-3xl" id="">$195.00</h1>
     </div>
    
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
         {/* footer */}

<Footer />
      </div>
    </>
  );
}

export default page;