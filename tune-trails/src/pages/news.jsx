import React from "react";
import { Box } from "@mui/material";

const News = () => {
  return (
    <Box  
        sx={{
          position: "absolute",
          width: "60vw",
          overflow: "hidden",
          height: "94vh",
          left: "20vw",
          top: "5vh",
          background: "#f0f0f0",
          borderRadius: "0px 0px 8px 8px",
          boxShadow: "5px 5px 10px #bebebe",
          display: "flex",
      }}>
      News
    </Box>
  );
};

export default News;