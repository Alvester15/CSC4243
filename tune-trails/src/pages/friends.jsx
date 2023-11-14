import React from "react";
import Databox from "../components/databox";
import { Box } from "@mui/material";

const FriendPage = () => {
  return (
    <Box sx={{
      position: "absolute",
      width: "60vw",
      overflowY: "auto",
      height: "94vh",
      left: "20vw",
      top : "5vh",
      background: "#f0f0f0",
      borderRadius: "0px 0px 8px 8px",
      boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
    }}>
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
  );
};

export default FriendPage;
