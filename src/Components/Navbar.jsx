import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MyDrawer from "./Drawer.jsx";
import axios from "axios";
import useAccess from "../context/accessTokenContext.js";
import { CiWallet } from "react-icons/ci";
import { AiFillFire } from "react-icons/ai";
const api_url = import.meta.env.API_URL

function Navbar() {
  const navigate = useNavigate()
 const {isAccessToken} = useAccess()
 const[loading, setLoading] = useState(false)


  const publicKey = {publicKey : "djkndfvjhbdfsjkvbdfjkvhbdfb"}

  const handleConnetWalletClick = async () =>{
    setLoading(true)
    try {
      const response = await axios.post(`https://domex-mw1q.onrender.com/auth/user/nonce`, publicKey)
      if(response.data.statusCode == 200){
        publicKey.nonce = response.data.data.nonce

        try {
          const response = await axios.post(`https://domex-mw1q.onrender.com/auth/user/verify-nonce`, publicKey)
          console.log(response)
          if(response.data.statusCode == 200){
            setLoading(false)
            localStorage.setItem("accessToken" , response.data.data.token)
            navigate(document.referrer)
          }
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleDiscnnectWalletClick =  async () => {
    try {
      
      console.log('called')
        localStorage.removeItem("accessToken")
      window.location.href = "/Discover/my-agent"
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <>
      <nav className="h-[74px] w-full bg-darkprimary flex items-center justify-center  text-white fixed top-0 border-b-[1px] border-darksecondary hover:border-1">

        <div className="w-[80%] md:flex hidden justify-between items-center">
          <div className="md:w-1/3 flex justify-between items-center">
            <NavLink className="text-2xl font-semibold" to={"/"}>Domex</NavLink>
            <div className="flex items-center gap-2">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-primary bg-darksecondary" : "text-white"} hover:text-primary duration-150 font-bold rounded-3xl px-5 py-2`
                }
                to="/Discover"
                end // Ensures exact match

              >
                Discover
              </NavLink>
              <NavLink
                className={({ isActive }) =>

                  `${
                    isActive ? "text-primary bg-darksecondary  " : "text-white"
                  } hover:text-primary text-nowrap duration-150 font-bold rounded-3xl px-5 py-2`
                }
                to="/Discover/my-agent"
              >
                My AI Agent
              </NavLink>
            </div>
          </div>
          <div className="md:w-1/2 flex  justify-end items-center gap-3">
          {
            isAccessToken? (
              <button className="bg-darksecondary px-8 py-2 rounded-3xl text-nowrap flex items-center gap-1">
              Credits : <AiFillFire className="text-primary text-lg"/> 99
            </button>
            ) : (
              <button className="bg-darksecondary px-8 py-2 rounded-3xl text-nowrap">
              Connect Wallet for Free Credits
            </button>
            )
          }
            
            {
              isAccessToken ?(
            <button className=" bg-gradient-to-b from-primary border-[1px] border-secondary text-nowrap duration-200 px-4 py-2 text-white rounded-3xl font-medium flex items-center gap-[5px]" onClick={()=>{handleDiscnnectWalletClick()}}>
              <CiWallet className="text-white text-lg"/> 9au...p3k 
            </button>
              ) : (
                <button className="bg-primary text-nowrap hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium" onClick={()=>handleConnetWalletClick()}>
                Connect Wallet
              </button>
              )
            }
          </div>
        </div>
        <div className="lg:w-[80%] w-[90%] md:hidden flex justify-between items-center">
          <NavLink className="sm:text-2xl text-xl font-semibold" to={"/"}>
            Domex
          </NavLink>
          <MyDrawer />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
