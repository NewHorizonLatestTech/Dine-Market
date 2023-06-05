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

     

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

         {/* footer */}

       <Footer />
      </div>
    </>
  );
}

export default page;