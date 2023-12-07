import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const CreatePost = ({ onAddPost }) => {
  const [openModal, setOpenModal] = useState(false);
  const { accessToken } = useAuth();
  const [formData, setFormData] = useState({
    songName: '',
    artistName: '',
    caption: '',
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

  const handleAddPost = async () => {
      try {
        if (!accessToken) {
          throw new Error("Access token is not available.");
        }
        // Make a request to the Spotify API to search for the track
        const response = await axios.get('https://api.spotify.com/v1/search', {
          params: {
            q: `${formData.songName} ${formData.artistName}`,
            type: 'track',
          },
          headers: {
            Authorization: `Bearer ${accessToken}`, // Replace with your actual access token
          },
        });
        console.log(response)
        // Extract relevant data from the Spotify API response
        const firstResult = response.data.tracks.items[0];
        const newFormData = {
          songName: firstResult.name,
          artistName: firstResult.artists[0].name,
          caption: formData.caption,
          songId: firstResult.id,
          imageUrl: firstResult.album.images[0].url,
        };

        // Add validation or checks for empty fields before adding
        onAddPost(newFormData);
        setFormData({
          songName: '',
          artistName: '',
          caption: '',
          songId: '',
          imageUrl: '',
        });
        handleModalClose();
      } catch (error) {
        console.error('Error querying Spotify API:', error);
        // Handle the error as needed
      }
  };


  return (
    <div>
      {/* Button to open modal */}
      <div
        style={{
          position: 'absolute', // Position button at the bottom right of the screen
          top: '0',
          zIndex: '1000', // Ensure the button appears above other content
        }}
      >
        <Button sx={{border: "2px solid #bebebe", background: "#f0f0f0",}} onClick={handleModalOpen}>
          Create a Post
        </Button>
      </div>


      {/* Modal */}
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>Create a Post</DialogTitle>
        <DialogContent>
          <TextField variant="filled" label="Song Name" name="songName" value={formData.songName} onChange={handleInputChange} fullWidth />
          <TextField variant="filled" label="Artist Name" name="artistName" value={formData.artistName} onChange={handleInputChange} fullWidth />
          <TextField variant="filled" label="Caption" name="caption" value={formData.caption} onChange={handleInputChange} fullWidth />
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
