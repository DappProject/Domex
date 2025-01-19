import React from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function MyAIAgent() {
  return (
    <>
      <div className="min-w-[80%] text-white h-full">
        {/* Header Section */}
        <header className=" py-10">
          <h1 className="text-4xl font-bold">My AI Agent</h1>
        </header>
        <div className=" lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="bg-darkprimary rounded-lg shadow-lg p-4 w-72 border-[1px] border-darksecondary hover:border-1 flex flex-col items-center gap-5 cursor-pointer">

            <NavLink to="/Discover" className="h-16 w-16 flex items-center justify-center rounded-full bg-darksecondary">
              <HiOutlinePlus  className="text-3xl"/>
            </NavLink>
            <h1>Create AI Agent</h1>
            <p className="text-[14px] text-zinc-400 text-center">Craft and deploy intelligent AI agents tailored to your specific objectives.</p>
            {/* <button className="bg-primary w-full hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium">Connect Wallet</button> */}

            <NavLink to="/Discover/create-agent" className="bg-primary w-full hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium text-center">Create Now</NavLink>

          </div>
        </div>
        
      </div>
    </>
  );
}

export default MyAIAgent;
