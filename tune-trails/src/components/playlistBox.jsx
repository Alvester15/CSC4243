import * as React from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function PlaylistBox() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "18vw",
        typography: "body1",
        height: "95vh",
        border: 1,
        borderRadius: 3,
      }}
    >
      <Typography>Playlist</Typography>
    </Box>
  );
}
