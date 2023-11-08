import * as React from 'react';
import { Avatar, Typography, Button, Box } from '@mui/material';

const UserTab = () => {
    return (
        <Box sx={{ position: 'absolute', top: 48, left: -1, bottom: 0, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: 1 }}>
            <Box sx={{ position: 'absolute', top: '3%', width: '100%', height: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: 1 }}>
                <Avatar sx={{ width: 100, height: 100, mb: 2 }} alt="User Avatar" />
                <Typography variant='h6' sx={{ mb: 1 }}>Username</Typography>
                <Typography variant='body1' sx={{ mb: 2 }}>Karma</Typography>
            </Box>
            <Box sx={{ position: 'absolute', top: 'calc(23% + 1px)', width: '100%', height: '46vh', display: 'flex', flexDirection: 'column', overflowY: 'scroll'}}>
            </Box>
            <Button variant="soft" color="primary" sx = {{ width: '100%', position: 'absolute', bottom: '19vh', height: '4vh' }}>
                Clear Notifications
            </Button>
        </Box>
    );
};

export default UserTab;