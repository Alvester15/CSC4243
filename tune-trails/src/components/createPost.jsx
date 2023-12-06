import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';


const CreatePost = ({ onAddPost }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    songName: '',
    artistName: '',
    caption: '',
    postedBy: '',
    songId: '',
    imageUrl: '',
  });

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPost = () => {
    // Add validation or checks for empty fields before adding
    onAddPost(formData);
    setFormData({
      songName: '',
      artistName: '',
      caption: '',
      postedBy: '',
      songId: '',
      imageUrl: '',
    });
    handleModalClose();
  };

  return (
    <div>
      {/* Button to open modal */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px', // Adjust as needed
          right: '20px', // Adjust as needed
          zIndex: '1000', // Ensure the button appears above other content
        }}
      >
        <Button variant="contained" color="primary" onClick={handleModalOpen}>
          Add Post
        </Button>
      </div>

      {/* Modal */}
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <TextField label="Song Name" name="songName" value={formData.songName} onChange={handleInputChange} fullWidth />
          <TextField label="Artist Name" name="artistName" value={formData.artistName} onChange={handleInputChange} fullWidth />
          <TextField label="Caption" name="caption" value={formData.caption} onChange={handleInputChange} fullWidth />
          <TextField label="Posted By" name="postedBy" value={formData.postedBy} onChange={handleInputChange} fullWidth />
          <TextField label="Song ID" name="songId" value={formData.songId} onChange={handleInputChange} fullWidth />
          <TextField label="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="error"> {/* Using color='error' makes it red */}
            Cancel
          </Button>
          <Button onClick={handleAddPost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreatePost;
