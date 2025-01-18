import React from 'react'
import Navbar from './Components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer.jsx'


function App() {
  return (
    <>

      <Navbar/>
        <div className='bg-black bg-bg-main bg-cover bg-center min-h-[100vh] w-full py-2 scrollbar-hide mt-[74px] mb-16 px-36'>
          <Outlet/>
        </div>
      <Footer/>

    </>
  )
}

export default App