/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gap:{
        '126px':'126px',
      },
      left: {
        '174px': '174px',
        '110px': '110px',
        '45px': '45px',
        '40px': '40px',
        '20px': '20px',
        '74px': '74px',
      },
      bottom: {
        '-40px': '-40px',
        '-20px': '-20px',
        '6px': '6px',
        '68px': '68px',
        '432px': '432px',
        '45px': '45px',
        '334px': '334px',
        '168px': '168px',
        '415px': '415px',
        '138px': '138px',
        '584px': '584px',
        '436px': '436px',
        '212px': '212px',
        '-91px': '-91px',
      },
      

      right: {
        '-40px': '-40px',
        '-24px': '-24px',
        '66px': '66px',
        '712px': '712px',
        '-92px': '-92px',
        '86px': '86px',
        '248px': '248px',
        '-226px': '-226px',
        '-91px': '-91px',
        '-160px': '-160px',
        '-207px': '-207px',
        '-385px': '-385px',
        '-511px': '-511px',
        '-41px': '-41px',
      },
      letterSpacing: {
        widest: '.25em',
      },
      colors: {
        'regal-blue': '#474747',
      },
      width: {
        '260px': '260px',
        '275px': '275px',
        '380px': '380px',
        '430px': '430px',
      },
      height: {
        '422px': '422px',
        '338px': '338px',
      },
    },
  },
  plugins: [],
}
