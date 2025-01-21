import React from 'react';
import { IoMdPerson } from "react-icons/io";
import { PiDevicesFill } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu"
import gpt from "../assets/openai.png";
import gemma from "../assets/gemma.png";
import meta from "../assets/meta.png";

const Card = ({name, introduction, owner, modeProvider, modeName, isPublic, createdAt }) => {

  const createdDate = new Date(createdAt); 
  const now = new Date(); 

  const diffInMs = now - createdDate;

  const msInMinute = 60 * 1000;
  const msInHour = 60 * msInMinute;
  const msInDay = 24 * msInHour;
  const msInWeek = 7 * msInDay;
  const msInMonth = 30.44 * msInDay; 

  const minutes = Math.floor(diffInMs / msInMinute);
  const hours = Math.floor(diffInMs / msInHour);
  const days = Math.floor(diffInMs / msInDay);
  const weeks = Math.floor(diffInMs / msInWeek);
  const months = Math.floor(diffInMs / msInMonth);

  
  return (
    <div className="bg-darkprimary rounded-lg shadow-lg sm:p-4 p-3 min-h-[300px] xs:min-w-72 border-[1px] border-darksecondary hover:border-1 hover:border-primary hover:scale-105 duration-200">
      
      <div className="flex items-center justify-between">
        {modeProvider == "OPENAI"&&<img
          src = {gpt}
          alt={name}
          className="sm:h-10 h-8 rounded-full ms-[-10px]"
        />}
        {modeProvider == "GEMMA"&&<img
          src = {gemma}
          alt={name}
          className="sm:w-10 w-8 sm:h-10 h-8 rounded-full mr-3"
        />}
        {modeProvider == "LAMA"&&<img
          src = {meta}
          alt={name}
          className="sm:w-10 w-8 sm:h-10 h-8 rounded-full mr-3"
        />}
        <div className={`${isPublic ? "block" : "hidden"} bg-darksecondary border  border-primary text-primary sm:text-xs text-[10px] px-3 py-1 rounded-full`}>
        Published
      </div>

      </div>
        <h2 className="text-base font-bold text-white mb-2">{name}</h2>

      <p className="text-zinc-300 sm:text-sm text-xs mb-4 truncate">{introduction}</p>

      <div className=" text-sm space-y-2 border-t-[1px] border-darksecondary py-5">
        {window.location.pathname == "/Discover"&&<p className='sm:text-base text-sm flex justify-between items-center'>
          <span className="flex items-center space-x-2 text-zinc-400">
            <i className="material-icons sm:text-lg text-base"><IoMdPerson/></i>
            <span className="font-semibold sm:text-base text-sm">Owner</span>
          </span>
          <span className='text-sm w-24 truncate'>

             {owner}
          </span>
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
          {months < 1
                      ? weeks < 1
                        ? days < 1
                          ? hours < 1
                            ? minutes
                            : hours + " hours"
                          : days + " day"
                        : weeks + " weeks"
                      : months}{" "}
                    ago
        </p>
      </div>
    </div>
  );
};

export default Card;
