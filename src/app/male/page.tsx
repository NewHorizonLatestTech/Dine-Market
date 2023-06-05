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
          <div className="flex gap-[126px]" id="maingirlsimage">
            <img
              src="https://cdn.sanity.io/images/dow10h3v/production/4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png"
              className="w-[275px]"
              height="400"
              id="firstfirstgirls"
            />
            <img
              src="https://cdn.sanity.io/images/dow10h3v/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png"
              className="w-[275px]"
              height="400"
              id="secondsecognhndgirls"
            />
          </div>

          <div className="flex" id="maingirlstext">
            <center>
              <a href="brushedraglansweatshirt">
                <h1 className="text-2xl ml-14" id="raglanffh">
                  Brushed Raglan Sweatshirt
                  <br />
                  $195
                </h1>
              </a>
            </center>

            <center>
              <a href="brushedraglansweatshirt">
                <h1 className="text-2xl ml-32" id="raglanffhuu">
                  Cameryn Sash Tie Dress
                  <br />
                  $5
                </h1>
              </a>
            </center>
          </div>
          <br />
          <br />

        
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
         {/* footer */}

       <Footer />
      </div>
    </>
  );
}

export default page;
