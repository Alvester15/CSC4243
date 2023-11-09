import React, { useState } from 'react';
import { Avatar, Typography, Button, Box } from '@mui/material';
import FriendSearch from './friendSearch';

function FriendsTab() {
  
    return (
        <Box sx={{ position: 'absolute', margin: -3, bottom: 'auto', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ width: '18vw'}}>
            <FriendSearch />
            </Box>
            <Box sx={{ height: '64vh', width: '100%', overflowY: 'scroll' }}>
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', top: 'auto', width: '100%', border: 1}}>
                <Button sx={{ width: '100%'}}>
                    Manage Friends
                </Button>
            </Box>
        </Box>
    );
  };

export default FriendsTab;
