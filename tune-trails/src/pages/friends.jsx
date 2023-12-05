import React, { useState } from "react";
import Databox from "../components/databox";
import { useAppContext, actionTypes } from "../context/appContext";
import { Tooltip, Button, Box } from "@mui/material";

const tracks = [
  {
    name: "Better Days",
    artists: [{ name: "NEIKED" }, { name: "Mae Muller" }, { name: "Polo G" }],
    caption: "Better Days is such a bop, can't stop listening to it!",
    postedBy: "legomario",
    id: "6f5ExP43esnvdKPddwKXJH",
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b2736b742298f7f36717855c4caf" }]},
  },
  {
    name: "Forever",
    artists: [{ name: "Drake" }, { name: "Kanye West" }, { name: "Lil Wayne" }, {  name: "Eminem" }],
    caption: "This has to be one of the best rap songs of all time, has all the GOATs!",
    postedBy: "number1drakefan",
    id: "6HSqyfGnsHYw9MmIpa9zlZ",
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b2737c22c8b9a5cfe27cd9914c4c" }]},
  },
  {
    name: "NO TRENDS",
    artists: [{ name: "Mike Dimes" }],
    caption: "Mike Dimes is definitely underrated, check him out!",
    postedBy: "hiphopfanatic",
    id: "7oAN2D1k9Qz8qh2JaNcZrj",
    album: { images: [{ url: "https://i.scdn.co/image/ab67616d0000b273dce40e711acba2ddb7612856" }]},
  },
];

const FriendPage = () => {
  const { state, dispatch } = useAppContext();
  const { openPlaylist } = state;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const saveToPlaylist = async (playlist, track) => {
    try {
      if (playlist) {
        // Check if the song with the given songId is already in newSongs
        const isSongAlreadyAdded = state.newSongs.some(song => song.id === track.id);
  
        if (!isSongAlreadyAdded) {
          // Perform the save operation using the playlist.id
          console.log(`Saved ${track.id} to playlist: ${playlist.name}`);
          
          // Dispatch the ADD_NEW_SONG action to add the song to newSongs
          dispatch({ type: actionTypes.ADD_NEW_SONG, payload: tracks.find(song => song.id === track.id) });
        } else {
          console.warn(`Song with id ${track.id} is already in the playlist.`);
        }
      } else {
        setTooltipOpen(true);
        setTimeout(() => setTooltipOpen(false), 3000); // Close the tooltip after 3 seconds
      }
    } catch (error) {
      console.error("Error saving to playlist:", error);
      // Handle the error as needed
    }
  };
  

  return (
    <Box sx={{
      position: "absolute",
      width: "60vw",
      overflowY: "auto",
      height: "94vh",
      left: "20vw",
      top: "5vh",
      background: "#f0f0f0",
      borderRadius: "0px 0px 8px 8px",
      boxShadow: "5px 5px 10px #bebebe",
    }}>
      <Tooltip
        open={tooltipOpen}
        title="Double-click a playlist to open it and then add the song"
        // place the tooltip to the right of the icon
        placement="bottom-start"
      ></Tooltip>
      {tracks.map((track, index) => (
        <Databox
          key={index}
          track={track}
          caption={track.caption}
          postedBy={track.postedBy}
          onSave={() => saveToPlaylist(openPlaylist, track)}
        />
      ))}
    </Box>
  );
};

export default FriendPage;
