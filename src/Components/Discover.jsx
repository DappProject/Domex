import React, { useState } from "react";
import Card from "./Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

function Discover() {
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
    {
      image : "https://psynova.s3.ap-southeast-1.amazonaws.com/model/meta.png",
      title: "zeebot",
      description: "im here to stay",
      owner: "cgjo...6wjj",
      modeProvider: "Meta LLama",
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
    {
      image : "https://psynova.s3.ap-southeast-1.amazonaws.com/model/meta.png",
      title: "zeebot",
      description: "im here to stay",
      owner: "cgjo...6wjj",
      modeProvider: "Meta LLama",
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
  const itemsPerPage = 8; // Number of cards per page

  // Calculate start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cards.slice(startIndex, endIndex);

  // Handle pagination change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="min-h-[100vh] mb-5 text-white ">
      {/* Header Section */}
      <header className=" py-10">
        <h1 className="text-4xl font-bold">Welcome to Domex</h1>
        <p className="text-gray-400 mt-2">
          The framework to create, manage and integrate AI Agents.
        </p>  
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  ">
        {/* Cards Section */}
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

      {/* Pagination */}
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
  );
}

export default Discover;
