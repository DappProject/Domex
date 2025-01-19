import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

function AiAgent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [agentData, setAgentData] = useState(location.state);
  return (
    <>
      <div className="w-[80%] h-full pt-14 text-white">
        <button
          className="flex items-center gap-2 mb-1 group hover:text-primary duration-150"
          onClick={() => window.history.back()}
        >
          <span className="p-1 bg-darksecondary rounded-full">
            <IoChevronBack className="group-hover:text-primary" />
          </span>
          Back
        </button>
        <div className="min-w-full h-[90vh] flex sm:flex-row flex-col justify-between">
          <div className="w-[35%] rounded-xl bg-gradient-to-tr from-darksecondary to-[#2c6795] p-5 space-y-5">
            <div className=" space-y-5">
              <img
                src={agentData.image}
                alt="logo"
                className="h-28 w-28 rounded-full"
              />
              <div>
                <h1 className="bg-gradient-to-r from-white to-[#478ec4] bg-clip-text text-transparent text-2xl font-bold">
                  {agentData.title}
                </h1>
                <p className="text-sm text-zinc-400 ">Best alert for Games</p>
              </div>
            </div>
            <div className="py-5 border-t-[1px] border-b-[1px] border-zinc-500 space-y-3">
              <div className=" text-sm space-y-2">
                <p className="flex justify-between items-center text-base">
                  <span className="flex items-center space-x-2 text-zinc-400">
                    <span className="font-semibold">Owner</span>
                  </span>
                  {agentData.owner}
                </p>
                <p className="flex justify-between items-center text-base">
                  <span className="flex items-center space-x-2 text-zinc-400">
                    <span className="font-semibold ">Created</span>
                  </span>
                  {agentData.created}
                </p>
                <p className="flex justify-between items-center text-base">
                  <span className="flex items-center space-x-2 text-zinc-400">
                    <span className="font-semibold">Terminal</span>
                  </span>
                  {}
                </p>
              </div>
              <div className="bg-darksecondary py-3 px-5  flex items-center justify-between gap-5 rounded-lg border-[1px] border-zinc-700">
                <div className="truncate w-[60%]">
                  <a
                    href="https://app.psynova.ai/public-agent/fIWxPUnrRzovXSJ"
                    target="blank"
                    className=" text-sm "
                  >
                    https://app.psynova.ai/public-agent/fIWxPUnrRzovXSJ
                  </a>
                </div>
                <i className="">
                  <IoCopyOutline />
                </i>
              </div>
            </div>
            <div className=" text-sm space-y-2">
              <p className="flex items-center text-lg">
                Mode Provider: &nbsp;
                <img
                  src={agentData.image}
                  alt="logo"
                  className="h-8 w-8 rounded-full"
                /> &nbsp;
                {agentData.modeProvider}
              </p>

              <p className="flex items-center text-lg">
                Mode Name: {agentData.modeName}
              </p>

              <p className="flex items-center text-lg">Plugins: API</p>

              <p className="flex items-center text-lg">
                Quota: A50/100 messages
              </p>
            </div>
          </div>
          <div className="w-[64%] rounded-xl bg-darkprimary p-5">
          <div className="h-[68%] w-full bg-transparent"></div>
          <input type="text" className="w-full bg-darksecondary py-3 px-2 border-[1px] border-zinc-700 rounded-lg static bottom-10 outline-none text-zinc-400" placeholder="Type your message here..."/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiAgent;
