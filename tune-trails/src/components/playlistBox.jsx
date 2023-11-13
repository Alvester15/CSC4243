import * as React from "react";
import { Typography, Box, Button, IconButton, Input } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PlaylistAddSharpIcon from "@mui/icons-material/PlaylistAddSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import InternalPlaylistEditor from "./internalPlaylistEditor";
import { usePlaylistsData } from "../data/playlistsData";
import {useModifyPlaylist } from "../data/modifyPlaylists";

export default function PlaylistBox() {
  const [isClicked, setClick] = useState(false);
  const [buttons, setButtons] = useState([]);
  const [playListNameEdit, setPlayListNameEdit] = useState(false);
  const [newPlaylistName, setPlaylistName] = useState("New Playlist");
  const [playlistEditor, setPlaylistEditor] = useState(false);
  const [selectButton, setSelectButton] = useState([]);
  const { playlists } = usePlaylistsData();
  const createPlaylist = useModifyPlaylist();

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

  const addNewPlaylist = async () => {
    try {
      // Call the createPlaylist function with the newPlaylistName
      const newPlaylist = await createPlaylist(newPlaylistName);
  
      // Update the state with the newly created playlist
      setButtons((prevButtons) => [
        ...prevButtons,
        <Button
          key={newPlaylist.id} // Use a unique key for each playlist
          sx={{ textAlign: "center", width: "100%", color: "black" }}
          onClick={(event) => internalPlaylist(event, newPlaylist.id, newPlaylist.name)}
        >
          {newPlaylist.name}
        </Button>
      ]);
  
      setPlayListNameEdit(false);

    } catch (error) {
      console.error('Error creating a playlist:', error);
      // Handle the error as needed
    }
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
            {playlists.map((playlist) => (
              <Button
                key={playlist.id}
                sx={{
                  width: "100%",
                  borderBottom: "1px solid black",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={(event) => internalPlaylist(event, playlist.id, playlist.name)}
              >
                {playlist.images && playlist.images.length > 0 && (
                <img src={playlist.images[0].url} alt={playlist.name} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                )}
                {playlist.name}
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
