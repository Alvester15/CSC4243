import React, { useState } from 'react';
import { Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';


const PlaylistMoreMenu = ({ anchorEl, onClose, onMenuAction }) => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');

  const handleMenuItemClick = (action) => {
    if (action === 'delete') {
      setDeleteDialogOpen(true);
    } else {
      onMenuAction(action);
      onClose();
    }
  };

  const handleDeleteConfirm = () => {
    // Check if the confirmation text matches the playlist name
    if (deleteConfirmation.toLowerCase() === 'confirm') {
      onMenuAction('delete');
    }
    setDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
  };

  return (
    <>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem onClick={() => handleMenuItemClick('edit')}>Edit</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('delete')}>Delete</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('share')}>Share</MenuItem>
      </Menu>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Delete Playlist</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete the playlist?</p>
          <TextField
            label="Type 'confirm' to delete"
            variant="outlined"
            fullWidth
            onChange={(e) => setDeleteConfirmation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDeleteConfirm}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PlaylistMoreMenu;

