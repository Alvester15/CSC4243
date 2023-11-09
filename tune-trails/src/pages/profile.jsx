import React from "react";
import { Box } from "@mui/material";

const Profile = () => {
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
      Profile
    </Box>
  );
};

export default Profile;