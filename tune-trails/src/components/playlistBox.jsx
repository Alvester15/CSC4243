import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function PlaylistBox() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "18vw",
        typography: "body1",
        height: "94vh",
        border: 1,
        borderRadius: 3,
      }}
    >
      <Typography>Playlist</Typography>
    </Box>
  );
}
