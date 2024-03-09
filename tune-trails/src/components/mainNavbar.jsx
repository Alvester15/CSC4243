import React from "react";
import { TabList, TabContext } from "@mui/lab";
import { Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const MainNavbar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        top: 2,
        left: "20vw",
        width: "60vw",
        flexDirection: "row",
        background: "#f0f0f0", // Neumorphic background color
        borderRadius: "8px 8px 0px 0px", // Adjust border radius as needed
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Box shadow for neumorphism
      }}
    >
      <Box sx={{ width: "100%", margin: "0" }}>
        <TabContext value={pathname}>
          <Box>
            <TabList
              value={pathname}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              centered
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#f0f0f0",
                },
                
              }}
            >
              <Tab
                sx={{ width: "15vw", boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff"}}
                label="TuneTrail"
                component={Link}
                to="/profile"
                value="/profile"
              />
              <Tab
                sx={{ width: "15vw", boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff"}}
                label="Discover"
                component={Link}
                to="/discover"
                value="/discover"
              />
              <Tab
                sx={{ width: "15vw", boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff"}}
                label="Friends"
                component={Link}
                to="/friends"
                value="/friends"
              />
              <Tab
                sx={{ width: "15vw", boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff"}}
                label="News"
                component={Link}
                to="/news"
                value="/news"
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default MainNavbar;
