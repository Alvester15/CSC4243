import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import UserTab from './UserTab';

export default function Sidebar() {
  const [value, setValue] = React.useState('2');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ position: 'relative', width: '18vw', typography: 'body1', height: '95vh', border: 1, borderRadius: 3 }}>
      <TabContext value={value}> 
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Friends" value="1" />
            <Tab label="User" value="2" />
            <Tab label="Logout" value="3" />
            <Tab icon={<SettingsIcon />} value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Friends</TabPanel>
        <TabPanel value="2">
          <UserTab />
        </TabPanel>
        <TabPanel value="3">Logout</TabPanel>
      </TabContext>
      <Box sx={{ position: 'absolute', bottom: '15vh', width: '100%', height: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: 1 }}>
        {/*Button*/}
      </Box>
      {/*Footer*/}
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', height: '15vh', borderTop: 1 }}>
          {/* Add your footer content here */}
      </Box>
    </Box>
  );
}