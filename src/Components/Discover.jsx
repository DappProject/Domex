import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { ApiGetBackendRequest } from "../axios/BackendRequest";
import Loading from "./Loading";

function Discover() {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [agents, setAgents] = useState([])

  
  useEffect(()=>{
    setLoading(true)
    const fetch = () =>{
      ApiGetBackendRequest(`https://domex-mw1q.onrender.com/agent`)
        .then((res)=>{
          // console.log(res.data)
          if(res.data.statusCode == 200){
            setAgents(res.data.data.results)
            setLoading(false)
          }
        })
    }
    
    fetch()
  },[])

  const itemsPerPage = 8; // Number of cards per page

  // Calculate start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAgents = agents?.slice(startIndex, endIndex);

  // Handle pagination change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

 
  return (
    <>
    {
      loading? <Loading/> : (
        <div className="lg:w-[80%] mb-5 text-white ">
      {/* Header Section */}
      <header className=" py-10">
        <h1 className="sm:text-4xl text-2xl font-bold">Welcome to Domex</h1>
        <p className="text-gray-400 sm:text-base text-sm mt-2">
          The framework to create, manage and integrate AI Agents.
        </p>  
      </header>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {/* Cards Section */}
        {currentAgents.map((cardData, index) => (
          <NavLink to="/Discover/ai-agent" state={{
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
            created={cardData.created}
            isPublic={cardData.isPublic}
            createdAt={cardData.createdAt}
          />
          </NavLink>
          
        ))}
      </div>

      {/* Pagination */}
      {agents.length > 0&&<Stack spacing={2} className="mt-8 items-center">
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
      </Stack>}
    </div>
      )
    }
    </>
  );
}

export default Discover;
