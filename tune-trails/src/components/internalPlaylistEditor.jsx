import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const InternalPlaylistEditor = (props) => {
  const playlistNames = props.buttons;
  return (
    <Box>
      <Typography variant="h4" borderBottom={1}>
        {playlistNames}
      </Typography>
      <Stack sx={{ height: "65vh", border: 1, overflowY: "auto" }}>
        <Typography variant="h5" sx={{ margin: "30px" }}>
          Click and Drag to add photo to add to playlist
        </Typography>
      </Stack>
    </Box>
  );
};

export default InternalPlaylistEditor;
