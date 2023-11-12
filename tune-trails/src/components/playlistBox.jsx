import * as React from "react";
import { Typography, Box, Button, IconButton, Input } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PlaylistAddSharpIcon from "@mui/icons-material/PlaylistAddSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import InternalPlaylistEditor from "./internalPlaylistEditor";

export default function PlaylistBox() {
  const [isClicked, setClick] = useState(false);
  const [buttons, setButtons] = useState([]);
  const [playListNameEdit, setPlayListNameEdit] = useState(false);
  const [newPlaylistName, setPlaylistName] = useState("New Playlist");
  const [playlistEditor, setPlaylistEditor] = useState(false);
  const [selectButton, setSelectButton] = useState([]);

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

  //Current just a test button in the name
  const testButton = (event) => {
    event.stopPropagation();
    alert("button test");
  };

  // want this function to open new window for adding to playlist
  const internalPlaylist = (event, index, buttonName) => {
    if (playlistEditor == false) {
      event.stopPropagation();
      setSelectButton(buttonName);
      setPlayListNameEdit(false);
      setPlaylistEditor(true);
    } else {
      setPlayListNameEdit(false);
      setPlaylistName("New PlayList");
      setPlaylistEditor(false);
    }
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
        sx={{ textAlign: "center", width: "100%", color: "black" }}
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
        {playlistEditor ? (
          <>
            <InternalPlaylistEditor buttons={selectButton} />
            <Box sx={{ mt: "50px" }}>
              <Button
                outlined
                onClick={internalPlaylist}
                sx={{
                  border: 1,
                  textAlign: "center",
                  margin: "auto",
                  padding: "2vh",
                }}
              >
                <Typography variant="h5">Save and Close</Typography>
              </Button>
            </Box>
          </>
        ) : (
          <>
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
                onClick={(event) =>
                  internalPlaylist(event, index, button.props.children)
                }
              >
                {button}
                <IconButton onClick={testButton}>
                  <MoreVertIcon />
                </IconButton>
              </Button>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
}
