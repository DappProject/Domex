import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
              <ListItemText
                primary="Discover"
                primaryTypographyProps={{ className: "text-white" }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Features"
                primaryTypographyProps={{ className: "text-white" }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Create Ai Agent"
                primaryTypographyProps={{ className: "text-white" }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="FAQ"
                primaryTypographyProps={{ className: "text-white" }}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>

      {/* Try Your Tool button */}
      <div className="hidden md:block">
        <button
          onClick={() => handleNavigation("/discover")}
          className="cta-button border border-[#0f0f0f] px-4 sm:px-5 py-2 font-semibold text-gray-400 rounded-md hover:from-white hover:to-blue-400 transition-all duration-300"
        >
          Try Your Tool
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
