import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  TextField,
  Autocomplete,
  IconButton,
  Snackbar,
  Alert,
  Slide,
} from "@mui/material";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const SlideTransition = (props) => <Slide {...props} direction="left" />;

function FriendSearch() {
  const [addFriend, setAddFriend] = useState([]);
  const [friendSearchStatus, setFriendSearchStatus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleFriendSelect = (event, value) => {
    setInputValue(value);
    setAddFriend((prevAddFriend) => [...prevAddFriend, value]);
    setFriendSearchStatus(Boolean(value));
  };

  const friendAdd = () => {
    setSnackbarOpen(true);
    setFriendSearchStatus(false);
    setInputValue("");
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        width: "calc(18vw - 1px)",
        height: 60,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Autocomplete
        freeSolo
        disablePortal
        options={users.map((user) => user.user)}
        id="user-search"
        sx={{ width: "90%" }}
        noOptionsText={"No users found"}
        onInputChange={handleFriendSelect}
        value={inputValue}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for friends"
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
      {friendSearchStatus ? (
        <IconButton sx={{ color: "green" }} onClick={friendAdd}>
          <AddIcon />
        </IconButton>
      ) : (
        <IconButton>
          <SearchIcon sx={{ ml: 1, my: 0.5 }} />
        </IconButton>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent={SlideTransition}
        style={{ bottom: "300px", right: "75px" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "300px", fontSize: "16px" }}
        >
          Friend {inputValue} has been added!
        </Alert>
      </Snackbar>
    </Box>
  );
}

const users = [
  { user: "Shadow123" },
  { user: "TechGuru22" },
  { user: "CodeNinja99" },
  { user: "SleekCoder" },
  { user: "PixelPirate" },
  { user: "CryptoExplorer" },
  { user: "ByteMaster" },
  { user: "WebWizard77" },
  { user: "BinaryBard" },
  { user: "MUSICCheze" },
  { user: "YourMom" },
  { user: "KanyeWestLover911" },
  { user: "ApplebeesLover" },
  { user: "XxSniperManxX" },
];
export default FriendSearch;
