import * as React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  IconButton,
  Input,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PlaylistAddSharpIcon from "@mui/icons-material/PlaylistAddSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

export default function PlaylistBox() {
  const [isClicked, setClick] = useState(false);
  const [buttons, setButtons] = useState([]);
  const [playListNameEdit, setPlayListNameEdit] = useState(false);
  const [newPlaylistName, setPlaylistName] = useState("New Playlist");

  const handleClick = () => {
    if (isClicked) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  const editStatus = () => {
    if (playListNameEdit) {
      setPlayListNameEdit(false);
      setPlaylistName("New PlayList");
    } else {
      setPlayListNameEdit(true);
    }
  };
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const playlistNamerRead = () => {
    <Input defaultValue="New Playlist" inputProps={{ readOnly: true }} />;
  };
  const playlistNamerWrite = () => {
    return (
      <Box
        sx={{
          display: "flex",
          margin: 0,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Input
          defaultValue="New Playlist"
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <IconButton onClick={editStatus}>
          <CloseIcon />
        </IconButton>
        <IconButton onClick={addNewPlaylist}>
          <CheckIcon />
        </IconButton>
      </Box>
    );
  };

  const addNewPlaylist = () => {
    const newButtons = [...buttons];
    newButtons.push(
      <Button
        key={newButtons.length}
        sx={{ textAlign: "center", width: "100%" }}
      >
        {newPlaylistName}
      </Button>
    );
    setButtons(newButtons);
    setPlayListNameEdit(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "18vw",
        typography: "body1",
        height: "94vh",
        border: 1,
        borderRadius: 3,
        overflowY: "auto",
      }}
    >
      <Button
        startIcon={isClicked ? <MenuOpenIcon /> : <MenuIcon />}
        fullWidth={true}
        sx={{ border: 1, borderRadius: 3 }}
        onClick={handleClick}
      >
        <Typography variant="h6" sx={{ textAlign: "center", color: "black" }}>
          Playlists
        </Typography>
      </Button>
      <Box
        sx={{
          my: "15px",
          visibility: isClicked ? "visible" : "hidden",
          textAlign: "center",
        }}
      >
        <Button
          startIcon={<PlaylistAddSharpIcon />}
          onClick={editStatus}
          sx={{ width: "75%", borderBottom: "1px solid black" }}
        >
          New Playlist
        </Button>
        {playListNameEdit ? playlistNamerWrite() : playlistNamerRead()}
        {/* add buttons dynamically */}
        {buttons.map((button, index) => (
          <Button
            key={index}
            sx={{
              width: "75%",
              borderBottom: "1px solid black",
            }}
          >
            {button}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
