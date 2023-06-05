/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Footer, Navbar } from "../page";

function page() {
  return (
    <>

<link rel="shortcut icon" href="logo.png" type="image/x-icon" />


      <div className="m-20 mt-40" id="maindiv">
        {/* Navabar */}
    <Navbar />
        <div className="" id="">
          <h1 className="text-2xl font-bold text-black" id="">Shopping Cart</h1>
          <center>
            <img src="bag.png" alt="" className="" id="bag" />
          <h1 className="text-3xl font-bold text-black" id="">Your shopping bag is empty</h1>
          </center>
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br />
        
         {/* footer */}

        <Footer />
      </div>
    </>
  );
}

export default page;
