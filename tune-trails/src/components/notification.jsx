import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Notification = (props) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{background: "#f0f0f0", borderTop: 1, borderColor: "#bebebe", padding: 1,
    boxShadow: "-5px -5px 10px #ffffff, 5px 5px 10px #bebebe", }}>
      <div>{props.notif}</div>
    </Stack>
  );
}

export default Notification;
