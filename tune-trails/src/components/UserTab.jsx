import * as React from 'react';
import { Avatar, Typography, Button, Box } from '@mui/material';
import Notification from './notification';

const UserTab = () => {
    return (
        <Box sx={{ position: 'absolute', top: 48, left: 0, bottom: 0, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ position: 'absolute', top: '2vh', width: '100%', height: '20vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: 1 }}>
                <Avatar sx={{ width: 100, height: 100, mb: 2 }} alt="User Avatar" />
                <Typography variant='h6' sx={{ mb: 1 }}>Username</Typography>
                <Typography variant='body1' sx={{ mb: 2 }}>Karma</Typography>
            </Box>
            <Box sx={{ position: 'absolute', top: 'calc(22vh + 1px)', width: '100%', height: '47vh', display: 'flex', flexDirection: 'column', overflowY: 'scroll'}}>
                <Notification />
                <Notification />
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '26vh', width: '100%', border: 1}}>
                <Button sx={{ width: '100%'}}>
                    Clear Notifications
                </Button>
            </Box>
        </Box>
    );
};

export default UserTab;