import React, { useState } from 'react';
import FriendSearch from './friendSearch';
import { Button } from '@mui/material';
import { Box } from "@mui/material";

function FriendsTab() {
  
    return (
        <Box sx={{ position: 'absolute', left: 0, top: "5vh", bottom: 'auto', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ width: '18vw'}}>
            <FriendSearch />
            </Box>
            <Box sx={{ top: "5vh", height: "64vh", width: '100%', overflowY: 'scroll' }}>
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', top: 'auto', width: '100%',  borderTop: 1, borderBottom: 1, borderColor: "#bebebe"}}>
                <Button sx={{ width: '100%'}}>
                    Manage Friends
                </Button>
            </Box>
        </Box>
    );
  };

export default FriendsTab;
