import React from "react";
import { NavLink } from "react-router-dom";
import CustomDrawer from "./Drawer.jsx";

function Navbar() {
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
                  `${isActive ? "text-primary bg-darksecondary" : "text-white"} hover:text-primary duration-150 font-bold rounded-3xl px-5 py-2`
                }
                to="/Discover/my-agent"
              >
                My AI Agent
              </NavLink>

            </div>
          </div>
          <div className="w-1/2 flex  justify-end items-center gap-3">
            <button className="bg-darksecondary px-8 py-2 rounded-3xl text-nowrap">Connect Wallet for Free Credits</button>
            <button className="bg-primary hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium">Connect Wallet</button>
          </div>
        </div>
        <div className="w-[80%] md:hidden flex justify-between items-center">
          <NavLink className="text-2xl font-semibold" to={"/"}>Domex</NavLink>
          <CustomDrawer />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
