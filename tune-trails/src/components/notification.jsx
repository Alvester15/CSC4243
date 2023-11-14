import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Notification = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{background: "#f0f0f0", borderTop: 1, borderColor: "#bebebe",
    boxShadow: "-5px -5px 10px #ffffff, 5px 5px 10px #bebebe", }}>
      <Avatar sx={{ padding: 1}}/>
      <div>Friend sent you a message!</div>
    </Stack>
  );
}

export default Notification;
