import React, { useState } from "react";
import Databox from "../components/databox";
import { useAppContext, actionTypes } from "../context/appContext";
import { Tooltip, Button, Box } from "@mui/material";
import CreatePost from "../components/createPost"

const FriendPage = () => {
  const { state, dispatch } = useAppContext();
  const { openPlaylist } = state;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      songName: "Better Days",
      artistName: "NEIKED, Mae Muller, Polo G",
      caption: "Better Days is such a bop, can't stop listening to it!",
      postedBy: "legomario",
      songId: "6f5ExP43esnvdKPddwKXJH",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b2736b742298f7f36717855c4caf",
    },
    {
      id: 2,
      songName: "Forever",
      artistName: "Drake, Kanye West, Lil Wayne, Eminem",
      caption: "This has to be one of the best rap songs of all time, has all the GOATs!",
      postedBy: "number1drakefan",
      songId: "6HSqyfGnsHYw9MmIpa9zlZ",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b2737c22c8b9a5cfe27cd9914c4c",
    },
    {
      id: 3,
      songName: "NO TRENDS",
      artistName: "Mike Dimes",
      caption: "Mike Dimes is definitely underrated, check him out!",
      postedBy: "hiphopfanatic",
      songId: "7oAN2D1k9Qz8qh2JaNcZrj",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273dce40e711acba2ddb7612856",
    },
  ])

  const saveToPlaylist = async (playlist, songId) => {
    try {
      if (playlist) {
        // Check if the song with the given songId is already in newSongs
        const isSongAlreadyAdded = state.newSongs.some(song => song.songId === songId);
  
        if (!isSongAlreadyAdded) {
          // Perform the save operation using the playlist.id
          console.log(`Saved ${songId} to playlist: ${playlist.name}`);
          
          // Dispatch the ADD_NEW_SONG action to add the song to newSongs
          dispatch({ type: actionTypes.ADD_NEW_SONG, payload: dummyData.find(song => song.songId === songId) });
        } else {
          console.warn(`Song with id ${songId} is already in the playlist.`);
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

  const addNewPost = (postData) => {
    // Add the new post data to your dummyData array
    const newPost = {
      id: dummyData.length + 1, // Generate a unique ID here; you might use a library like `uuid` for this
      ...postData,
    };

    // Update state or perform any necessary action with the new post
    setDummyData([...dummyData, newPost]); // Assuming `setDummyData` is your state setter function

    // Other actions you might want to perform after adding the new post
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
      boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
    }}>
      <Tooltip
        open={tooltipOpen}
        title="Double-click a playlist to open it and then add the song"
        // place the tooltip to the right of the icon
        placement="bottom-start"
      ></Tooltip>
      {dummyData.map((data) => (
        <Databox
          key={data.id}
          songName={data.songName}
          artistName={data.artistName}
          caption={data.caption}
          postedBy={data.postedBy}
          imageUrl={data.imageUrl}
          onSave={() => saveToPlaylist(openPlaylist, data.songId)}
        />
      ))}
      
      <CreatePost onAddPost={addNewPost}/>
    
    </Box>

    
  );
};

export default FriendPage;
