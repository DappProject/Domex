import React from 'react'
import { Link } from 'react-router-dom'
import { RiTwitterXFill } from "react-icons/ri";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
        <footer className=' w-full bg-black min-h-16 flex items-center py-2 justify-center text-white fixed bottom-0'>
        <div className="w-[80%] flex justify-between items-center">
            <div className="w-full flex md:flex-row flex-col justify-between items-center">
            <div>
                <Link className="text-[21px] font-semibold" to={"/"}>Domex</Link>
                <p className='text-xs text-gray-500'>@2025 Domex | All rights reserved</p>
            </div>
                <div className='flex items-center gap-8'>
                    <i className='text-2xl'><RiTwitterXFill/></i>
                    <i className='text-2xl'><RiTelegram2Fill/></i>
                    <i className='text-2xl'><FaGithub/></i>
                </div>
                
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer