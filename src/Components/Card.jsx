import React from 'react';
import { IoMdPerson } from "react-icons/io";
import { PiDevicesFill } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu"
const Card = ({ image, title, description, owner, modeProvider, modeName, created }) => {
  return (
    <div className="bg-darkprimary rounded-lg shadow-lg p-4 w-72 border-[1px] border-darksecondary hover:border-1 hover:border-primary duration-150">
      
      <div className="flex items-center justify-between">
        <img
          src={"https://psynova.s3.ap-southeast-1.amazonaws.com/model/meta.png"}
          alt={title}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className=" bg-darksecondary border border-primary text-primary text-xs px-3 py-1 rounded-full">
        Published
      </div>

      </div>
        <h2 className="text-base font-bold text-white mb-2">{title}</h2>

      <p className="text-zinc-300 text-sm mb-4">{description}</p>

      <div className=" text-sm space-y-2 border-t-[1px] border-darksecondary py-5">
        <p className='flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons text-lg"><IoMdPerson/></i>
            <span className="font-semibold">Owner</span>
          </span>
             {owner}
        </p>
        <p className='flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons text-lg"></i>
            <span className="font-semibold">Mode Provider</span>
          </span>
             {modeProvider}
        </p>
        <p className='flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons  text-lg"><PiDevicesFill/></i>
            <span className="font-semibold">Mode Name</span> 
          </span>
            {modeName}
        </p>
        <p className='flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons  text-lg"><LuCalendarDays/></i>
            <span className="font-semibold">Created</span> 
          </span>
            {created}
        </p>
      </div>
    </div>
  );
};

export default Card;
