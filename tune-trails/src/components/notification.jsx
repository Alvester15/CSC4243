import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Notification = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ border: 1 }}>
      <Avatar sx={{ padding: 1}}/>
      <div>Friend sent you a message!</div>
    </Stack>
  );
}

export default Notification;
