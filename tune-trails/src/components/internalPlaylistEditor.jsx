import React, { useState, useEffect } from "react";
import { useAppContext, actionTypes } from "../context/appContext";
import { useModifyPlaylist } from "../data/modifyPlaylists";
import { Box, Stack, Typography, Button } from "@mui/material";

const InternalPlaylistEditor = (props) => {
  const { state, dispatch } = useAppContext();
  const { newSongs } = state;
  const playlistId = props.playlistId;
  const playlistName = props.playlistName;
  const { addTracks } = useModifyPlaylist();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchPlaylistTracks = async (playlistId) => {
      setTracks(playlistId.tracks);
    };

    // Call the fetchPlaylistTracks function when the component mounts or when playlistId changes
    if (playlistId) {
      fetchPlaylistTracks(playlistId);
    }

    // Update openPlaylist in the context when playlistId changes
    dispatch({ type: actionTypes.SET_OPEN_PLAYLIST, payload: playlistId.id });
  }, [playlistId.id, dispatch ]);

  const handleSaveAndClose = async () => {
    // Extract the song IDs of the new songs
    const newSongIds = newSongs.map(song => song.songId);
    // Extract the song IDs of the existing tracks
    const existingSongIds = tracks.map(track => track.track.id);
  
    // Filter out the new songs that are already in the playlist
    const uniqueNewSongIds = newSongIds.filter(songId => !existingSongIds.includes(songId));
    // Convert unique new song IDs to Spotify track URIs
    const newSongUris = uniqueNewSongIds.map(songId => `spotify:track:${songId}`);
  
    try {
      if (newSongUris.length > 0) {
        // Call the addTracksToPlaylist function to add new songs to the playlist
        await addTracks(playlistId.id, newSongUris);
      }
  
      // Clear the newSongs array in the context
      dispatch({ type: actionTypes.CLEAR_NEW_SONGS });
  
      // Clear openPlaylist in the context
      dispatch({ type: actionTypes.CLEAR_OPEN_PLAYLIST });
  
      // Trigger onSaveAndClose callback
      props.onSaveAndClose();
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error("Error adding new songs to playlist:", error);
    }
  };
  
  
  

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        {playlistName}
      </Typography>
      <Stack
        sx={{
          height: "65vh",
          background: "#f0f0f0",
          borderRadius: "0px",
          boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
          overflowY: "scroll",
        }}
      >
        {tracks.map((track, index) => (
          <Button
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              "&:hover": {
                overflow: "visible",
                whiteSpace: "normal",
              },
              borderRadius: "0px",
              color: "black",
            }}
          >
            <img
              src={track.track.album.images[0].url}
              alt="album cover"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            {track.track.name}
          </Button>
        ))}
        {newSongs.map((song, index) => (
          <Button
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              "&:hover": {
                overflow: "visible",
                whiteSpace: "normal",
              },
              borderRadius: "0px",
              color: "black",
            }}
          >
            <img
              src={song.imageUrl}
              alt="album cover"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            {song.songName}
          </Button>
        ))}
      </Stack>
      <Button
          outlined="true"
          onClick={handleSaveAndClose}
          sx={{
            background: "#f0f0f0",
            borderRadius: "0px 0px 8px 0px",
            boxShadow: "3px 3px 5px #bebebe, -3px -3px 5px #ffffff",
            textAlign: "center",
            mt: "5vh",
            padding: "2vh",
          }}
        >
          <Typography variant="h5">Save and Close</Typography>
        </Button>
    </Box>
  );
};

export default InternalPlaylistEditor;
