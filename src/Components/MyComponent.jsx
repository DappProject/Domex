import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FaArrowRightLong } from "react-icons/fa6";

const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    setIsDrawerOpen(false); // Close the drawer after navigation
    navigate(path);
  };

  return (
    <div>
      {/* Responsive Bar button for all screen sizes */}
      <div className="flex md:hidden items-center">
        <IconButton
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon fontSize="medium" style={{color:"white"}} 

           />
        </IconButton>
      </div>

      {/* Drawer opening from the right */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            backgroundImage: "linear-gradient(to bottom, black, #1e3a8a)",
          },
        }}
      >
        <div
          className="w-64"
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          {/* Close Button */}
          <div className="flex justify-end p-2">
            <IconButton
              onClick={toggleDrawer(false)}
              className="text-white hover:text-gray-400"
            >
              <CloseIcon style={{color:"white"}}  />
            </IconButton>
          </div>

          {/* Drawer Content */}
          <List>
            <ListItem button onClick={() => handleNavigation("/discover")}>
              <a
                 onClick={toggleDrawer(false)}
                href="#Discover"
                // primary="Discover"
                className ="text-white font-bold"
                >Discover</a>
            </ListItem>
            <ListItem button>
            <a
                 onClick={toggleDrawer(false)}
                href="#Features"
                // primary="Discover"
                className ="text-white font-bold"
                >Features</a>
            </ListItem>
            <ListItem button>
            <a
                 onClick={toggleDrawer(false)}
                href="#Create AI Agent"
                // primary="Discover"
                className ="text-white font-bold"
                >Create AI Agent</a>
            </ListItem>
            <ListItem button>
            <a
                 onClick={toggleDrawer(false)}
                href="#FAQs"
                // primary="Discover"
                className ="text-white font-bold"
                >FAQs</a>
            </ListItem>
          </List>
        </div>
      </Drawer>

      {/* Try Your Tool button */}
      <div className="hidden md:block">
        <button
          onClick={() => handleNavigation("/discover")}
          className="cta-button px-5 sm:px-6 py-2 font-semibold text-zinc-300 hover:bg-primary bg-[#2f4f7f]  rounded-md  transition-all duration-300 flex items-center gap-2"
        >
         Login <FaArrowRightLong className="text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
