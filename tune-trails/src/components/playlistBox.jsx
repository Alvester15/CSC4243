import * as React from "react";
import { Typography, Box, Button, IconButton, Input } from "@mui/material";
import { List, ListItem, ListItemText, ListItemButton, ListItemAvatar, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PlaylistAddSharpIcon from "@mui/icons-material/PlaylistAddSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import InternalPlaylistEditor from "./internalPlaylistEditor";
import { usePlaylistsData } from "../data/playlistsData";
import { useModifyPlaylist } from "../data/modifyPlaylists";
import PlaylistMoreMenu from "./playlistMoreMenu";

export default function PlaylistBox() {
  const [isClicked, setClick] = useState(false);
  const [playListNameEdit, setPlayListNameEdit] = useState(false);
  const [newPlaylistName, setPlaylistName] = useState("New Playlist");
  const [playlistEditor, setPlaylistEditor] = useState(false);
  const [selectButton, setSelectButton] = useState([]);
  const { playlists } = usePlaylistsData();
  const [playlistButtons, setPlaylistButtons] = useState([]);
  const { createPlaylist } = useModifyPlaylist();
  const [moreMenuAnchors, setMoreMenuAnchors] = useState({});
  const [playlistId, setplaylistId] = useState("");

  useEffect(() => {
    setPlaylistButtons(playlists);
  }, [playlists]);

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

  // want this function to open new window for adding to playlist
  const internalPlaylist = (event, index, buttonName) => {
    if (playlistEditor === false) {
      event.stopPropagation();
      setSelectButton(buttonName);
      setPlayListNameEdit(false);
      setPlaylistEditor(true);
      setplaylistId(playlistButtons.find((playlist) => playlist.id === index));
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
      setPlaylistButtons((prevButtons) => [newPlaylist, ...prevButtons]);
      setPlayListNameEdit(false);

    } catch (error) {
      console.error("Error creating a playlist:", error);
      // Handle the error as needed
    }
  };

  const openMoreMenu = (event, playlistId) => {
    setMoreMenuAnchors((prevAnchors) => ({
      ...prevAnchors,
      [playlistId]: event.currentTarget,
    }));
  };

  const closeMoreMenu = (playlistId) => {
    setMoreMenuAnchors((prevAnchors) => ({
      ...prevAnchors,
      [playlistId]: null,
    }));
  };

  const handleMenuAction = async (action, playlistId) => {
    if (action === 'delete') {
      // Perform the delete action, update the state, or call the necessary API
      try {
        // Call the deletePlaylist function with the playlistId
        // Update the state or perform any necessary actions
        // For example:
        // await deletePlaylist(playlistId);
        setPlaylistButtons((prevButtons) => prevButtons.filter((playlist) => playlist.id !== playlistId));
      } catch (error) {
        console.error("Error deleting playlist:", error);
        // Handle the error as needed
      }
    }  else if (action === 'edit') {
      const playlist = playlistButtons.find((playlist) => playlist.id === playlistId);
      internalPlaylist(event, playlistId, playlist.name);
    } else {
      // Handle other actions
      console.log(`Performing ${action} on playlist: ${playlistId}`);
    }
    closeMoreMenu(playlistId);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "18vw",
        typography: "body1",
        height: "94vh",
        background: "#f0f0f0",
        borderRadius: "0px 0px 8px 8px",
        boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
        overflowY: "auto",
      }}
    >
      <Button
        startIcon={isClicked ? <MenuOpenIcon /> : <MenuIcon />}
        fullWidth={true}
        sx={{
          background: "#f0f0f0",
          borderRadius: "0px 0px 8px 8px",
          boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
        }}
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
            <InternalPlaylistEditor
              playlistName={selectButton}
              playlistId={playlistId}
              onSaveAndClose={internalPlaylist}
              onCancel={internalPlaylist}
            />
          </>
        ) : (
          <>
            <Button
              startIcon={<PlaylistAddSharpIcon />}
              onClick={editStatus}
              sx={{ width: "100%", background: "#f0f0f0" }}
            >
              <Typography
                variant="p"
                sx={{ textAlign: "center", color: "black" }}
              >
                New Playlist
              </Typography>
            </Button>
            {playListNameEdit ? playlistNamerWrite() : playlistNamerRead()}
            {/* add buttons dynamically */}
            <List>
            {playlistButtons.map((playlist) => (
              <ListItem
                key={playlist.id}
                sx={{
                  width: "100%",
                  background: "#f0f0f0",
                  borderRadius: "0px 0px 0px 0px",
                  borderTop: "1px solid #bebebe",
                  boxShadow: "2px 2px 4px 2px #bebebe, -2px -2px 4px 2px #ffffff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "black",
                  padding: "0", // Adjust padding as needed
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent propagation
                      openMoreMenu(event, playlist.id);
                    }}
                    onDoubleClick={(event) => event.stopPropagation()}
                    onMouseDown={(event) => event.stopPropagation()}
                  >
                    <MoreVertIcon />
                  </IconButton>
                }
                onDoubleClick={(event) =>
                  internalPlaylist(event, playlist.id, playlist.name)
                }
              >
                <ListItemButton>
                {playlist.images && playlist.images.length > 0 && (
                  <ListItemAvatar>
                    <img
                      src={playlist.images[0].url}
                      alt={playlist.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                    />
                  </ListItemAvatar>
                )}
                <ListItemText primary={playlist.name} />
                </ListItemButton>
                <PlaylistMoreMenu
                anchorEl={moreMenuAnchors[playlist.id]}
                onClose={() => closeMoreMenu(playlist.id)}
                onMenuAction={(action) => handleMenuAction(action, playlist.id)}
              />
              </ListItem>
            ))}
          </List>
          </>
        )}
      </Box>
    </Box>
  );
}