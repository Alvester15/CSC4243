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
      border: "2px solid black",
      borderRadius: "8px",
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
