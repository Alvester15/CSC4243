import React from "react";
import { Box, AppBar, Tabs, Tab, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { MusicNote, Share } from "@mui/icons-material";

const Sidebar = () => {
  const [value, setValue] = React.useState(0); // state to control the tabs

  const handleChange = (event, newValue) => {
    setValue(newValue); // change the tabs
  };

  return (
    <Box sx={{ width: 300, height: "100%" }}>
      <AppBar position="static" color="primary">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" centered>
          <Tab label="Friends" sx={{ color: value === 0 ? '#000' : '#fff' }} />
          <Tab label="Profile" sx={{ color: value === 1 ? '#000' : '#fff' }} />
          <Tab label="Logout" sx={{ color: value === 2 ? '#000' : '#fff' }} />
        </Tabs>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2, borderBottom: '1px solid #ccc' }}>
          <Avatar sx={{ width: 64, height: 64, border: '2px solid #000' }} />
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            Username
          </Typography>
        </Box>
        <List sx={{ marginTop: 2 }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ border: '2px solid #000' }} />
            </ListItemAvatar>
            <ListItemText primary="Friend reacted to your post" secondary="2 hours ago" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ border: '2px solid #000' }} />
            </ListItemAvatar>
            <ListItemText primary="Friend shared a new playlist" secondary="3 hours ago" />
          </ListItem>
        </List>
        <Card sx={{ marginTop: 2, border: '2px solid #000' }}>
          <CardMedia
            component="img"
            height="140"
            alt="Album Cover"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Song Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Artist Name
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" startIcon={<MusicNote />}>
              Play
            </Button>
            <Button size="small" color="primary" startIcon={<Share />}>
              Create Post
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Sidebar;
