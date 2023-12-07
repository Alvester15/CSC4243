import React, { useState, useEffect } from "react";
import FriendSearch from "./friendSearch";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Typography,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveIcon from "@mui/icons-material/Remove";
import friendsJson from "../data/friends.json";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";

function FriendsTab() {
  const [friends, setFriends] = useState([]);
  const [friendsEdit, setFriendsEdit] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [removedFriendName, setRemovedFriendName] = useState("");
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [friendToRemove, setFriendToRemove] = useState("");

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
    setFriendToRemove(userName);
    setConfirmationOpen(true);
  };

  const handleRemoveConfirmation = (confirmed) => {
    setConfirmationOpen(false);

    if (confirmed) {
      const updatedFriends = friends.map((friend) =>
        friend.user === friendToRemove ? { ...friend, hidden: true } : friend
      );
      setFriends(updatedFriends);
      setRemovedFriendName(friendToRemove);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
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
            <IconButton disabled>
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
        sx={{ top: "5vh", height: "63.05vh", width: "100%", overflowY: "scroll" }}
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
          borderTop: 2,
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3500}
        onClose={handleSnackbarClose}
        message={`Friend ${removedFriendName} has been removed.`}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent={Slide}
        TransitionProps={{ direction: "left" }}
        style={{ bottom: "300px", right: "75px" }}
      />

      <Dialog
        open={confirmationOpen}
        onClose={() => handleRemoveConfirmation(false)}
      >
        <DialogTitle>{"Remove Friend?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove {friendToRemove} as a friend?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleRemoveConfirmation(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleRemoveConfirmation(true)}
            color="primary"
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default FriendsTab;
