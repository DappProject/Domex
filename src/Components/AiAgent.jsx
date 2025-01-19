import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import AutohideSnackbar from "./SnackBar";

function AiAgent() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("")
  const location = useLocation();
  const [agentData, setAgentData] = useState(location.state);
  const currentUrl = window.location.href;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    .then(()=>{
      setOpen(true)
    }
    )
  };

  return (
    <>
      <div className="lg:w-[80%] w-[100%] h-full pt-14 text-white">
      <AutohideSnackbar open={open} message={"Copy to Clipboard successfully"}/>
        <button
          className="flex items-center gap-2 mb-1 group hover:text-primary duration-150"
          onClick={() => window.history.back()}
        >
          <span className="p-1 bg-darksecondary rounded-full">
            <IoChevronBack className="group-hover:text-primary" />
          </span>
          Back
        </button>
        <div className="min-w-full min-h-[90vh] flex md:flex-row flex-col-reverse justify-between md:gap-0 gap-2">
          <div className="md:w-[35%] w-full rounded-xl bg-gradient-to-tr from-darksecondary to-[#2c6795] p-5 space-y-5">
            <div className=" space-y-5">
              <img
                src={agentData?.image}
                alt="logo"
                className="md:h-28 h-20 md:w-28 w-20 rounded-full"
              />
              <div>
                <h1 className="bg-gradient-to-r from-white to-[#478ec4] bg-clip-text text-transparent md:text-2xl text-xl font-bold">
                  {agentData?.title}
                </h1>
                <p className="text-sm text-zinc-400 ">Best alert for Games</p>
              </div>
            </div>
            <div className="py-5 border-t-[1px] border-b-[1px] border-zinc-500 space-y-3">
              <div className=" text-sm md:space-y-2 space-y-1">
                <p className="flex justify-between items-center md:text-base text-sm">
                  <span className="flex items-center space-x-2 text-zinc-400">
                    <span className="font-semibold md:text-base text-sm">Owner</span>
                  </span>
                  <span className="flex items-center gap-1">
                  {agentData?.owner}
                  <i className="">
                  <IoCopyOutline  className="cursor-pointer" onClick={()=>{handleCopy(agentData?.owner)}}/>
                </i>
                  </span>
                </p>
                <p className="flex justify-between items-center md:text-base text-sm">
                  <span className="flex items-center space-x-2 text-zinc-400">
                    <span className="font-semibold md:text-base text-sm">Created</span>
                  </span>
                  {agentData?.created}
                </p>
                <p className="flex justify-between items-center md:text-base text-sm">
                  <span className="flex items-center space-x-2 text-zinc-400">
                    <span className="font-semibold md:text-base text-sm">Terminal</span>
                  </span>
                  {}
                </p>
              </div>
              <div className="bg-darksecondary py-3 px-5  flex items-center justify-between gap-5 rounded-lg border-[1px] border-zinc-700">
                <div className="truncate w-[60%]">
                  <a
                    href={currentUrl}
                    target="blank"
                    className=" text-sm "
                  >
                    {currentUrl}
                  </a>
                </div>
                <i className="">
                  <IoCopyOutline  className="cursor-pointer" onClick={()=>{handleCopy(currentUrl)}}/>
                </i>
              </div>
            </div>
            <div className=" text-sm space-y-2">
              <p className="flex items-center md:text-lg text-sm">
                Mode Provider: &nbsp;
                <img
                  src={agentData?.image}
                  alt="logo"
                  className="h-8 w-8 rounded-full"
                /> &nbsp;
                {agentData?.modeProvider}
              </p>

              <p className="flex items-center md:text-lg text-sm">
                Mode Name: {agentData?.modeName}
              </p>

              <p className="flex items-center md:text-lg text-sm">Plugins: API</p>

              <p className="flex items-center md:text-lg text-sm">
                Quota: A50/100 messages
              </p>
            </div>
          </div>
          <div className="md:w-[64%] min-h-[90vh] h-full w-full rounded-xl bg-darkprimary p-5">
          <div className="min-h-[68%] h-[58vh]  w-full bg-transparent"></div>
          <input type="text" className="w-full bg-darksecondary md:text-base text-sm py-3 px-2 border-[1px] border-zinc-700 rounded-lg static bottom-10 outline-none text-zinc-400" placeholder="Type your message here..."/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiAgent;
