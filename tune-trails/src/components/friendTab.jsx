import React, { useState, useEffect } from "react";
import FriendSearch from "./friendSearch";
import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveIcon from "@mui/icons-material/Remove";
import friendsJson from "../data/friends.json";

function FriendsTab() {
  const [friends, setFriends] = useState([]);
  const [friendsEdit, setFriendsEdit] = useState(false);

  useEffect(() => {
    setFriends(friendsJson);
  }, []);

  const manageFriends = () => {
    if (friendsEdit) {
      setFriendsEdit(false);
    } else {
      setFriendsEdit(true);
    }
  };

  const removeFriend = (userName) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove ${userName} as a friend?`
    );

    if (confirmed) {
      const updatedFriends = friends.map((friend) =>
        friend.user === userName ? { ...friend, hidden: true } : friend
      );
      setFriends(updatedFriends);
      alert(`${userName} has been removed.`);
    }
  };
  const UserBox = ({ userName, hidden }) => (
    <Grid item xs={3} key={userName}>
      {!hidden && (
        <Box
          sx={{
            width: "100%",
            background: "#f0f0f0",
            borderRadius: "0px 0px 0px 0px",
            borderTop: "1px solid #bebebe",
            boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "black",
          }}
        >
          <Avatar></Avatar>
          <Typography sx={{ mr: "5px", textAlign: "center" }}>
            {userName}
          </Typography>
          {friendsEdit ? (
            <IconButton
              sx={{ color: "red" }}
              onClick={() => removeFriend(userName)}
            >
              <RemoveIcon />
            </IconButton>
          ) : (
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          )}
        </Box>
      )}
    </Grid>
  );

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: "5vh",
        bottom: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "18vw" }}>
        <FriendSearch />
      </Box>
      <Box
        sx={{ top: "5vh", height: "64vh", width: "100%", overflowY: "scroll" }}
      >
        {friends.map((friend) => (
          <UserBox
            key={friend.user}
            userName={friend.user}
            hidden={friend.hidden}
          />
        ))}
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "auto",
          width: "100%",
          borderTop: 1,
          borderBottom: 1,
          borderColor: "#bebebe",
        }}
      >
        <Button sx={{ width: "100%" }} onClick={manageFriends}>
          {friendsEdit ? (
            <Typography sx={{ color: "green" }}>Save Friends</Typography>
          ) : (
            "Manage Friends"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default FriendsTab;
