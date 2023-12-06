import * as React from 'react';
import { Avatar, Typography, Button } from '@mui/material';
import Notification from './notification';
import { useAuth } from '../context/authContext';
import { Box } from "@mui/material";

const UserTab = () => {
    const { user } = useAuth();

    return (
        <Box sx={{ position: 'absolute', top: "5vh", left: 0, bottom: 0, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ position: 'absolute', top: '2vh', width: '100%', height: '20vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',background: "#f0f0f0"}}>
                <Avatar sx={{ width: 120, height: 120, mb: 2 }} alt="User Avatar" src={user?.images && user?.images.length > 0 ? user?.images[0].url : ''}/>
                <Typography variant='h6' sx={{ mb: 1 }}>{user?.display_name}</Typography>
                <Typography variant='body1' sx={{ mb: 2 }}>560 👍 70 🔥</Typography>
            </Box>
            <Box sx={{ position: 'absolute', top: "22vh", width: '100%', height: '47.2vh', display: 'flex', flexDirection: 'column', overflowY: 'scroll'}}>
                <Notification notif="Your Post has 100 Likes!"/>
                <Notification notif="50 people added a song you shared!"/>
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '26.6vh', width: '100%', borderTop: 2, borderBottom: 1, borderColor: "#bebebe"}}>
                <Button sx={{ width: '100%'}}>
                    Clear Notifications
                </Button>
            </Box>
        </Box>
    );
};

export default UserTab;