'use client';

import React from 'react'
import Test from './Test'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function page(pageProps:any ) {
  return (
    <>
      <Test {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default page



// // your custom app
// //Toast container should be rendered on each page
// function MyApp({ Component, pageProps }) {
//   return (<>
//   <Component {...pageProps} />

//   </>)
// }
