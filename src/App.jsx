import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer.jsx'
import { AccessProvider } from './context/accessTokenContext.js'
import { WalletProvider } from './axios/WalletContext.jsx'


function App() {
  const [isAccessToken, setIsAccessToken] = useState(false)
  
    useEffect(()=>{
      const accessToken = localStorage.getItem("accessToken")
      if(accessToken){
        setIsAccessToken(true)
      }
    }, [isAccessToken])

  return (
    <>
    <WalletProvider>

      <AccessProvider value={{isAccessToken}}>
      <Navbar/>
        <div className='bg-black bg-bg-main bg-cover bg-center bg-fixed min-h-[85vh] w-full py-2 scrollbar-hide mt-[74px] mb-16 flex justify-center md:px-5 px-3'>
          <Outlet/>
        </div>
      <Footer/>
      </AccessProvider>
    </WalletProvider>

    </>
  )
}

export default App