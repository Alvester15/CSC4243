import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SettingsIcon from '@mui/icons-material/Settings';
import UserTab from './userTab';
import FriendsTab from './friendTab';
import Button from '@mui/material/Button';
import { useAuth } from '../context/authContext';
import { Box } from "@mui/material";

export default function Sidebar() {
  const [value, setValue] = React.useState('2');
  const { reset } = useAuth();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    reset();
  };

  return (
    <Box sx={{ position: 'relative', width: '18vw', typography: 'body1', minHeight: '94vh', background: "#f0f0f0",
    borderRadius: "8px",
    boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",}}>
      <TabContext value={value}> 
        <Box sx={{ borderBottom: 1, borderColor: 'divider', height: "5vh" }}>
          <TabList onChange={handleChange} variant='fullWidth' sx={{ height: "5vh", background: "#f0f0f0", "& .MuiTabs-indicator": {
                  backgroundColor: "#f0f0f0",
                },
        borderRadius: "0px 0px 8px 8px",
        boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff", }}>
            <Tab label="Friends" value="1" />
            <Tab label="User" value="2" />
            <Tab icon={<SettingsIcon />} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FriendsTab />
        </TabPanel>
        <TabPanel value="2">
          <UserTab />
        </TabPanel>
        <TabPanel value="3">
          <Button onClick={handleLogout}>
            Logout
          </Button>
        </TabPanel>
      </TabContext>
    </Box>
  );
}