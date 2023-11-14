import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const InternalPlaylistEditor = (props) => {
  const { playlistName, tracks } = props;

  return (
    <Box>
      <Typography variant="h4" borderBottom={1}>
        {playlistName}
      </Typography>
      <Stack sx={{ height: "65vh", border: 1, overflowY: "auto" }}>
        {tracks.map((track) => (
          <Typography variant="h5" key={track.id}>
            {track.name}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default InternalPlaylistEditor;
