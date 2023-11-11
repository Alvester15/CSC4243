import React from "react";
import { Box } from "@mui/material";

const News = () => {
  return (
    <Box  
        sx={{
        position: "absolute",
        width: "60vw",
        overflowY: "auto",
        height: "94vh",
        left: "20vw",
        top : "5vh",
        border: "2px solid black",
        borderRadius: "8px",
      }}>
      News
    </Box>
  );
};

export default News;