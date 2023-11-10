import * as React from 'react';
import { Avatar, Typography, Button } from '@mui/material';
import Notification from './notification';
import { useAuth } from '../context/authContext';
import { Box } from "@mui/material";

const UserTab = () => {
    const { user } = useAuth();

    return (
        <Box sx={{ position: 'absolute', top: "5vh", left: 0, bottom: 0, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ position: 'absolute', top: '2vh', width: '100%', height: '20vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: 1 }}>
                <Avatar sx={{ width: 120, height: 120, mb: 2 }} alt="User Avatar" src={user?.images && user?.images.length > 0 ? user?.images[0].url : ''}/>
                <Typography variant='h6' sx={{ mb: 1 }}>{user?.display_name}</Typography>
                <Typography variant='body1' sx={{ mb: 2 }}>Karma</Typography>
            </Box>
            <Box sx={{ position: 'absolute', top: "22vh", width: '100%', height: '47.1vh', display: 'flex', flexDirection: 'column', overflowY: 'scroll'}}>
                <Notification />
                <Notification />
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '26.5vh', width: '100%', border: 1}}>
                <Button sx={{ width: '100%'}}>
                    Clear Notifications
                </Button>
            </Box>
        </Box>
    );
};

export default UserTab;