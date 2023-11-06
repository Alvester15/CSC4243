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
    <Box sx={{ width: "75%" }}>
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
            <Tab sx={{ maxWidth: "150px" }} label="TuneTrail" value="1" />
            <Tab sx={{ maxWidth: "150px" }} label="Discover" value="2" />
            <Tab sx={{ maxWidth: "150px" }} label="Friends" value="3" />
            <Tab sx={{ maxWidth: "150px" }} label="News" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">TuneTrail</TabPanel>
        <TabPanel sx={{ overflowY: "auto" }} value="2">
          Discover
        </TabPanel>
        <TabPanel
          sx={{
            overflowY: "auto",
            height: "1000px",
            mt: "10px",
            border: "2px solid black",
            borderRadius: "8px",
          }} //handles all the Friends Post
          value="3"
        >
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
        </TabPanel>
        <TabPanel sx={{ overflowY: "auto" }} value="4">
          News
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MainNavbar;
