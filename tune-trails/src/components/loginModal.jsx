import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import queryString from 'query-string';

const LoginModal = ({ open, onClose }) => {
  const authenticate = () => {
    const queries = {
        response_type: 'code',
        client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        scope: 'user-read-email playlist-read-private playlist-modify-public playlist-modify-private',
        redirect_uri: 'http://localhost:5173/callback',
    };
    location.assign(
        `https://accounts.spotify.com/authorize?${queryString.stringify(queries)}`
    );
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Welcome to TuneTrail</DialogTitle>
      <DialogContent>
        <Button onClick={authenticate}>
          Login with Spotify
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;