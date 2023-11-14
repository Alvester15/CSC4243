// PlaylistMoreMenu.js

import React from 'react';
import { Menu, MenuItem } from '@mui/material';

const PlaylistMoreMenu = ({ anchorEl, onClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem >Edit</MenuItem>
      <MenuItem >Delete</MenuItem>
      <MenuItem >Share</MenuItem>
    </Menu>
  );
};

export default PlaylistMoreMenu;
