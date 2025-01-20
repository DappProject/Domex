import React from 'react';
import { IoMdPerson } from "react-icons/io";
import { PiDevicesFill } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu"
const Card = ({ image, name, introduction, owner, modeProvider, modeName, created }) => {
  return (
    <div className="bg-darkprimary rounded-lg shadow-lg sm:p-4 p-3 xs:min-w-72 border-[1px] border-darksecondary hover:border-1 hover:border-primary hover:scale-105 duration-200">
      
      <div className="flex items-center justify-between">
        <img
          src={image}
          alt={name}
          className="sm:w-10 w-8 sm:h-10 h-8 rounded-full mr-3"
        />
        <div className=" bg-darksecondary border  border-primary text-primary sm:text-xs text-[10px] px-3 py-1 rounded-full">
        Published
      </div>

      </div>
        <h2 className="text-base font-bold text-white mb-2">{name}</h2>

      <p className="text-zinc-300 sm:text-sm text-xs mb-4">{introduction}</p>

      <div className=" text-sm space-y-2 border-t-[1px] border-darksecondary py-5">
        {window.location.href == "/Discover"&&<p className='sm:text-base text-sm flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons sm:text-lg text-base"><IoMdPerson/></i>
            <span className="font-semibold sm:text-base text-sm">Owner</span>
          </span>
             {owner}
        </p>}
        <p className='sm:text-base text-sm flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons sm:text-lg text-base"></i>
            <span className="font-semibold sm:text-base text-sm">Mode Provider</span>
          </span>
             {modeProvider}
        </p>
        <p className='sm:text-base text-sm flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons  sm:text-lg text-base"><PiDevicesFill/></i>
            <span className="font-semibold sm:text-base text-sm">Mode Name</span> 
          </span>
            {modeName}
        </p>
        <p className='sm:text-base text-sm flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons  sm:text-lg text-base"><LuCalendarDays/></i>
            <span className="font-semibold sm:text-base text-sm">Created</span> 
          </span>
            {created}
        </p>
      </div>
    </div>
  );
};

export default Card;
