import React from "react";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Databox from "./databox";
import { TabList, TabContext, TabPanel } from "@mui/lab";

const MainNavbar = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", margin: "0" }}>
      <TabContext value={value}>
        <Box>
          <TabList
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab sx={{ width: "150px" }} label="TuneTrail" value="1" />
            <Tab sx={{ width: "150px" }} label="Discover" value="2" />
            <Tab sx={{ width: "150px" }} label="Friends" value="3" />
            <Tab sx={{ width: "150px" }} label="News" value="4" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            width: "60vw",
            overflowY: "auto",
            height: "90vh",
            mt: "10px",
            border: "2px solid black",
            borderRadius: "8px",
          }}
        >
          TuneTrail
        </TabPanel>
        <TabPanel
          sx={{
            width: "60vw",
            overflowY: "auto",
            height: "90vh",
            mt: "10px",
            border: "2px solid black",
            borderRadius: "8px",
          }}
          value="2"
        >
          Discover
        </TabPanel>
        <TabPanel
          sx={{
            width: "60vw",
            overflowY: "auto",
            height: "90vh",
            mt: "10px",
            border: "2px solid black",
            borderRadius: "8px",
          }} //handles all the Friends Post
          value="3"
        >
          <Box sx={{}}>
            <Databox />
            <Databox />
            <Databox />
            <Databox />
            <Databox />
            <Databox />
            <Databox />
            <Databox />
            <Databox />
            <Databox />
          </Box>
        </TabPanel>
        <TabPanel
          sx={{
            width: "60vw",
            overflowY: "auto",
            height: "90vh",
            mt: "10px",
            border: "2px solid black",
            borderRadius: "8px",
          }}
          value="4"
        >
          News
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MainNavbar;
