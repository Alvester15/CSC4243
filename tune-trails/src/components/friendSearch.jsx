import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Autocomplete, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function FriendSearch() {
  const [addFriend, setAddFriend] = useState([]);
  const [friendSearchStatus, setFriendSearchStatus] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Add state to track input value

  const handleFriendSelect = (event, value) => {
    setInputValue(value); // Update input value state
    // Add the selected user to the addFriend state
    setAddFriend((prevAddFriend) => [...prevAddFriend, value]);
    setFriendSearchStatus(Boolean(value));
  };

  const friendAdd = () => {
    alert("Friend request sent!");
    setFriendSearchStatus(false);
    setInputValue(""); // Clear input value
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
        value={inputValue} // Set the value prop to control the input value
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
