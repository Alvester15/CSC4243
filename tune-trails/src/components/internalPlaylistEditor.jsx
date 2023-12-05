import React, { useState, useEffect } from "react";
import { useAppContext, actionTypes, setCurrentTrack } from "../context/appContext";
import { useModifyPlaylist } from "../data/modifyPlaylists";
import CloseButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { usePlaylistsData } from "../data/playlistsData";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useDrop } from "react-dnd";

const InternalPlaylistEditor = (props) => {
  const { state, dispatch } = useAppContext();
  const { newSongs } = state;
  const playlistId = props.playlistId;
  const playlistName = props.playlistName;
  const { addTracks } = useModifyPlaylist();
  const { fetchPlaylistTracks } = usePlaylistsData();
  const [tracks, setTracks] = useState([]);

  const fetchTracks = async (playlistId) => {
    const tracks = await fetchPlaylistTracks(playlistId);
    setTracks(tracks);
  };

  useEffect(() => {
    if (playlistId.id) {
      fetchTracks(playlistId.id);
    }

    // Update openPlaylist in the context when playlistId changes
    dispatch({ type: actionTypes.SET_OPEN_PLAYLIST, payload: playlistId.id });
  }, [playlistId.id, dispatch ]);

  const handleDrop = (item) => {
    // Extract the dropped track from the item
    const droppedTrack = item.track;

    // Check if the song is already in newSongs or the playlist
    const isSongInNewSongs = newSongs.some((song) => song.id === droppedTrack.id);
    const isSongInPlaylist = tracks.some((track) => track.track.id === droppedTrack.id);

    if (!isSongInNewSongs && !isSongInPlaylist) {
      // Update the newSongs state with the dropped track
      dispatch({ type: actionTypes.ADD_NEW_SONG, payload: droppedTrack });
    } else {
      // Handle the case where the song is already in newSongs or the playlist
      alert('Song is already added.');
    }
  };

  const [, drop] = useDrop({
    accept: 'card',
    drop: (item) => handleDrop(item),
  });

  const handleSaveAndClose = async () => {
    // Extract the song IDs of the new songs
    const newSongIds = newSongs.map(song => song.id);
    // Extract the song IDs of the existing tracks
    const existingSongIds = tracks.map(track => track.track.id);
  
    // Filter out the new songs that are already in the playlist
    const uniqueNewSongIds = newSongIds.filter(songId => !existingSongIds.includes(songId));
    // Convert unique new song IDs to Spotify track URIs
    const newSongUris = uniqueNewSongIds.map(songId => `spotify:track:${songId}`);
  
    try {
      if (newSongUris.length > 0) {
        // Call the addTracksToPlaylist function to add new songs to the playlist
        const response = await addTracks(playlistId.id, newSongUris);

        // Check if the response status is 200 (OK)
        if (response.status === 200) {
          // Fetch updated tracks when the operation is successful
          fetchPlaylistTracks(playlistId);
        }
      }
  
      // Clear the newSongs array in the context
  
      // Clear openPlaylist in the context
  
      // Trigger onSaveAndClose callback
      props.onSaveAndClose();
      dispatch({ type: actionTypes.CLEAR_NEW_SONGS });
      dispatch({ type: actionTypes.CLEAR_OPEN_PLAYLIST });
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error("Error adding new songs to playlist:", error);
    }
  };
  
  const handleCancel = () => {
    // Clear the newSongs array in the context
    dispatch({ type: actionTypes.CLEAR_NEW_SONGS });

    // Clear openPlaylist in the context
    dispatch({ type: actionTypes.CLEAR_OPEN_PLAYLIST });

    // Trigger onCancel callback
    props.onCancel();
  };

  const handleDoubleClick = (track) => {
    setCurrentTrack(dispatch, track);
  };

  return (
    <Box ref={drop}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} ml={2}>
        <Typography variant="h4">{playlistName}</Typography>
        
        {/* Close button */}
        <CloseButton onClick={handleCancel}>
          <CloseIcon />
        </CloseButton>
      </Stack>
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
            onDoubleClick={() => handleDoubleClick(track.track)}
          >
            <img
              src={track.track.album.images[0].url}
              alt="album cover"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            {track.track.name}
          </Button>
        ))}
        {newSongs.map((track, index) => (
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
            onDoubleClick={() => handleDoubleClick(track)}
          >
            <img
              src={track.album.images[0].url}
              alt="album cover"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            {track.name}
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
