import React, { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Card from "./Card.jsx";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import useAccess from "../context/accessTokenContext.js";
import { ApiGetBackendRequest } from "../axios/BackendRequest.js";
import Loading from "./Loading.jsx";

import { useWallet } from "../axios/WalletContext.jsx";
import {handleConnectWallet} from "../axios/ConnectUtils.js"
import AutohideSnackbar from "./SnackBar.jsx";


function MyAIAgent() {
  const navigate = useNavigate()
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false)
  const {isAccessToken} = useAccess();
 const { connectWallet, publicKey, error } = useWallet();
  const [open, setOpen] = useState(false);
  const [agents, setAgents] = useState([])
  const [successMessage, setSuccessMessage] = useState()
  const location = useLocation()
  const {agentCreated} = location.state || false
  const {walletConnected} = location.state || false
  const {agentPublished} = location.state || false


  useEffect(()=>{
    setIsWalletConnected(walletConnected)
    if(agentCreated){
      setSuccessMessage("Agent Created SuccessFully")
      setOpen(true);

      setTimeout(() => {
        setOpen(false)
      }, 5000);
      }
    if(isWalletConnected){
      setSuccessMessage("Wallet Connected")
      setOpen(true);
      setTimeout(() => {
        setOpen(false)
      }, 5000);
      }
    if(agentPublished){
      setSuccessMessage("Agent Published")
      setOpen(true);
      setTimeout(() => {
        setOpen(false)
      }, 5000);
      }

    if(isAccessToken){
      fetch()
    } else {
      setAgents([])
      return
    }
    function fetch(){
      setLoading(true)
      ApiGetBackendRequest(`https://domex-mw1q.onrender.com/agent/my`)
    .then((res)=>{
      if(res.data.statusCode == 200){
        setAgents(res.data.data.agentData)
        setLoading(false)
      }
    })
    }
  }, [isAccessToken])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Number of cards per page
  
    // Calculate start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentAgents = agents.slice(startIndex, endIndex);
  
    // Handle pagination change
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };



      const handleConnetWalletClick = async () => {
         handleConnectWallet(connectWallet,navigate,setLoading)
       };

  return (
    <>
     { loading ? <Loading/> :  <div className="lg:w-[80%] mb-5 text-white h-full">
        <AutohideSnackbar
          open={open}
          message={successMessage}
          variant={"success"}
        />
        {/* Header Section */}
        <header className=" py-10">
          <h1 className="md:text-4xl text-3xl font-bold">My AI Agent</h1>
        </header>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {currentPage == 1&&<div className="bg-darkprimary rounded-lg shadow-lg p-4 border-[1px] border-darksecondary hover:border-1 flex flex-col items-center gap-5 cursor-pointer">

            <NavLink to="/Discover" className="h-16 w-16 flex items-center justify-center rounded-full bg-darksecondary">
              <HiOutlinePlus  className="text-3xl"/>
            </NavLink>
            <p className="text-lg">Create AI Agent</p>
            <p className="text-[14px] text-zinc-400 text-center">Craft and deploy intelligent AI agents tailored to your specific objectives.</p>

            {
              isAccessToken ? (
                <NavLink to="/Discover/create-agent" className="bg-primary w-full hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium text-center">Create Now</NavLink>
              ) : (
                <button className="bg-primary w-full hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium" onClick={()=>{handleConnetWalletClick()}}> {loading ? "Connecting..." : "Connect Wallet"}</button>
              )
            }

          </div>}
          {currentAgents.map((cardData, index) => (
          <NavLink to="/Discover/ai-agent" key={index} state={{
            id : cardData._id,
            href : window.location.href
          }
          }>
            <Card
            
            image={`https://psynova.s3.ap-southeast-1.amazonaws.com/model/${cardData?.modeProvider.toLowerCase()}.png`}
            name={cardData.name}
            introduction={cardData.introduction}
            owner={cardData.userId}
            modeProvider={cardData.modeProvider}
            modeName={cardData.modeName}
            createdAt={cardData.createdAt}
            isPublic={cardData.isPublic}
          />
          </NavLink>
          
        ))}
        </div>
        {agents.length > 0 &&<Stack spacing={2} className={`mt-8 items-center`}>
        <Pagination
          count={Math.ceil(agents.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff", // Default text color
              borderColor: "#262626", // Border color
              backgroundColor: "transparent", // Transparent background
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#222", // Background color on hover
            },
            "& .Mui-selected": {
              color: "#fff", // Text color for selected
              backgroundColor: "#74C0FA", // Orange background
              borderColor: "#74C0FA", // Border matching background
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "#fff", // Ellipsis color
            },
          }}
        />
      </Stack> }
      </div>}
    </>
  );
}

export default MyAIAgent;
