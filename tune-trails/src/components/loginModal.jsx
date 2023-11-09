import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import queryString from 'query-string';

const LoginModal = ({ open, onClose }) => {
  const authenticate = () => {
    const queries = {
        response_type: 'code',
        client_id: '',
        scope: 'user-read-email',
        redirect_uri: 'http://localhost:5173',
    };
    location.assign(
        `https://accounts.spotify.com/authorize?${queryString.stringify(queries)}`
    );
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login Required</DialogTitle>
      <DialogContent>
        {/* Add your login form or button to initiate the login process */}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;