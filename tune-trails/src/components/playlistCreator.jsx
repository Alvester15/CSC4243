import { Button, MenuItem, MenuList, Paper, Stack } from "@mui/material";
import React from "react";
import { useState, useRef, useEffect } from "react";

function playlistCreator() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <Stack>
      <Paper>
        <MenuList>
          <MenuItem>Open Playlist</MenuItem>
          <MenuItem>Share</MenuItem>
          <MenuItem>Rename</MenuItem>
        </MenuList>
      </Paper>
      <IconButton
        ref={anchorRef}
        id="playlist-options"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MoreVertIcon />
      </IconButton>
    </Stack>
  );
}

export default playlistCreator;
