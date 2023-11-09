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
          >
            <Tab sx={{ width: "15vw" }} label="TuneTrail" component={Link} to="/profile" value="/profile" />
            <Tab sx={{ width: "15vw" }} label="Discover" component={Link} to="/discover" value="/discover" />
            <Tab sx={{ width: "15vw" }} label="Friends" component={Link} to="/friends" value="/friends" />
            <Tab sx={{ width: "15vw" }} label="News" component={Link} to="/news" value="/news" />
          </TabList>
        </Box>
      </TabContext>
      </Box>
    </Box>
  );
};

export default MainNavbar;
