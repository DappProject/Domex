import React, { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Card from "./Card.jsx";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import useAccess from "../context/accessTokenContext.js";

function MyAIAgent() {
  const {isAccessToken} = useAccess();

  const cards = [
    {
      image : "https://psynova.s3.ap-southeast-1.amazonaws.com/model/gemma.png",
      title: "zeebot",
      description: "im here to stay",
      owner: "cgjo...6wjj",
      modeProvider: "Gemma",
      modeName: "Chat (67B)",
      created: "4 hours ago",
    },
    {
      image : "https://psynova.s3.ap-southeast-1.amazonaws.com/model/meta.png",
      title: "zee",
      description: "im here to stay",
      owner: "cgjo...6wjj",
      modeProvider: "Meta LLama",
      modeName: "Chat (67B)",
      created: "4 hours ago",
    },
    {
      image : "https://psynova.s3.ap-southeast-1.amazonaws.com/model/gemma.png",
      title: "bot",
      description: "im here to stay",
      owner: "cgjo...6wjj",
      modeProvider: "Gemma",
      modeName: "Chat (67B)",
      created: "4 hours ago",
    },
    {
      image : "https://psynova.s3.ap-southeast-1.amazonaws.com/model/gemma.png",
      title: "zeebot",
      description: "im here to stay",
      owner: "cgjo...6wjj",
      modeProvider: "Gemma",
      modeName: "Chat (67B)",
      created: "4 hours ago",
    },
    {
      image : "https://psynova.s3.ap-southeast-1.amazonaws.com/model/meta.png",
      title: "zeebot",
      description: "im here to stay",
      owner: "cgjo...6wjj",
      modeProvider: "Meta LLama",
      modeName: "Chat (67B)",
      created: "4 hours ago",
    },
  ];


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Number of cards per page
  
    // Calculate start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCards = cards.slice(startIndex, endIndex);
  
    // Handle pagination change
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };

    const publicKey = {publicKey : "djkndfvjhbdfsjkvbdfjkvhbdfb"}

    const handleConnetWalletClick = async () =>{
      try {
        const response = await axios.post(`https://domex-mw1q.onrender.com/auth/user/nonce`, publicKey)
        if(response.data.statusCode == 200){
          publicKey.nonce = response.data.data.nonce
  
          try {
            const response = await axios.post(`https://domex-mw1q.onrender.com/auth/user/verify-nonce`, publicKey)
            console.log(response)
            if(response.data.statusCode == 200){
              localStorage.setItem("accessToken" , response.data.data.token)
            }
          } catch (error) {
            console.log(error)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
      <div className="lg:w-[80%] mb-5 text-white h-full">
        {/* Header Section */}
        <header className=" py-10">
          <h1 className="md:text-4xl text-3xl font-bold">My AI Agent</h1>
        </header>
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          <div className="bg-darkprimary rounded-lg shadow-lg p-4  border-[1px] border-darksecondary hover:border-1 flex flex-col items-center gap-5 cursor-pointer">

            <NavLink to="/Discover" className="h-16 w-16 flex items-center justify-center rounded-full bg-darksecondary">
              <HiOutlinePlus  className="text-3xl"/>
            </NavLink>
            <h1>Create AI Agent</h1>
            <p className="text-[14px] text-zinc-400 text-center">Craft and deploy intelligent AI agents tailored to your specific objectives.</p>

            {
              isAccessToken ? (
                <NavLink to="/Discover/create-agent" className="bg-primary w-full hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium text-center">Create Now</NavLink>
              ) : (
                <button className="bg-primary w-full hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium" onClick={()=>{handleConnetWalletClick()}}>Connect Wallet</button>
              )
            }

          </div>
          {currentCards.map((cardData, index) => (
          <NavLink to="/ai-agent" state={{
            image: cardData.image,
            title : cardData.title,
            description : cardData.description,
            owner : cardData.owner,
            modeProvider : cardData.modeProvider,
            modeName : cardData.modeName,
            created : cardData.created
          }
          }>
            <Card
            key={index}
            image={cardData.image}
            title={cardData.title}
            description={cardData.description}
            owner={cardData.owner}
            modeProvider={cardData.modeProvider}
            modeName={cardData.modeName}
            created={cardData.created}
          />
          </NavLink>
          
        ))}
        </div>
        <Stack spacing={2} className="mt-8 items-center">
        <Pagination
          count={Math.ceil(cards.length / itemsPerPage)}
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
      </Stack>
        
      </div>
    </>
  );
}

export default MyAIAgent;
