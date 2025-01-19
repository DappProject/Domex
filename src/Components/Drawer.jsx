import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import useAccess from "../context/accessTokenContext";
import { AiFillFire } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
const api_url = import.meta.env.API_URL;

export default function MyDrawer() {
  const { isAccessToken } = useAccess();
  const [open, setOpen] = React.useState(false);
  const publicKey = {
    publicKey: "djkndfvjhbdfsjkvbdfjkvhbdfb",
    nonce: "",
  };

  const handleConnetWalletClick = async () => {
    try {
      const response = await axios.post(
        `https://domex-mw1q.onrender.com/auth/user/nonce`,
        publicKey
      );
      if (response.data.statusCode == 200) {
        publicKey.nonce = response.data.data.nonce;

        try {
          const response = await axios.post(
            `https://domex-mw1q.onrender.com/auth/user/verify-nonce`,
            publicKey
          );
          console.log(response);
          if (response.data.statusCode == 200) {
            localStorage.setItem("accessToken", response.data.data.token);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      className="w-[100%] h-full flex flex-col justify-center items-center p-5"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <RxCross1
        className=" text-white text-[25px] self-end"
        onClick={toggleDrawer(false)}
      />
      <div className="h-full flex flex-col justify-between py-8">
        <div className="w-full  flex justify-between items-center">
          <div className="w-full flex flex-col items-center gap-2">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-primary bg-darksecondary " : "text-white"
                } hover:text-primary duration-150 font-bold rounded-3xl px-5 py-2 w-full text-center`
              }
              to="/"
            >
              Discover
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-primary bg-darksecondary  " : "text-white"
                } hover:text-primary duration-150 font-bold rounded-3xl px-5 py-2 w-full text-center`
              }
              to={"/my-agent"}
            >
              My AI Agent
            </NavLink>
          </div>
        </div>
        <div className="w-full flex flex-col justify-end items-center gap-3">
          {isAccessToken ? (
            <button className="w-64 bg-gradient-to-b from-primary border-[1px] border-secondary text-nowrap duration-200 px-4 py-2 text-white rounded-3xl font-medium flex items-center justify-center gap-2">
              <CiWallet /> 9au...pgsk
            </button>
          ) : (
            <button
              className="w-full bg-primary hover:bg-secondary duration-200 px-4 py-2 sm:text-base text-sm text-black rounded-3xl font-medium"
              onClick={() => handleConnetWalletClick()}
            >
              Connect Wallet
            </button>
          )}
          {isAccessToken ? (
            <button className="w-full bg-primary hover:bg-secondary duration-200 px-4 py-2 sm:text-base text-sm text-black rounded-3xl font-medium flex items-center justify-center gap-1">
              Credits : <AiFillFire className="text-black text-lg" /> 99
            </button>
          ) : (
            <button className="w-auto bg-darksecondary px-8 py-2 rounded-3xl sm:text-base text-sm text-nowrap text-white">
              Connect Wallet for Free Credits
            </button>
          )}
        </div>
      </div>
    </Box>
  );

  return (
    <div className="lg:hidden block">
      <Button onClick={toggleDrawer(true)}>
        <RxHamburgerMenu className="text-2xl text-primary" />
      </Button>
      <Drawer
        anchor="right"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#171717", // Set your desired background color
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
