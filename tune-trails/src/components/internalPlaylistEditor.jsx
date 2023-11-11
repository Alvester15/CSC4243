import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const InternalPlaylistEditor = (props) => {
  const playlistNames = props.buttons;
  return (
    <Box>
      <Typography variant="h4" borderBottom={1}>
        {playlistNames}
      </Typography>
      <Stack sx={{ height: "1000px", border: 1 }}>
        <Typography variant="h5" sx={{ margin: "30px" }}>
          Click and Drag to add photo to add to playlist
        </Typography>
      </Stack>
      <Box sx={{ mt: "50px" }}>
        <Button outined sx={{ border: 1, textAlign: "center", margin: "auto" }}>
          <Typography variant="h4">Save and Close</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default InternalPlaylistEditor;
