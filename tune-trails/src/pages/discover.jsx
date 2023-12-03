import React, { useEffect, useState } from "react";
import DiscoverScroller from "../components/discoverScroller";
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Autocomplete, Typography } from '@mui/material';
import useRecommendationsData from "../data/recommendations";
import { useAuth } from "../context/authContext";
import { Box } from "@mui/material";

const Discover = () => {
  const { user } = useAuth();
  const { fetchRecommendations } = useRecommendationsData();
  const [recommendations, setRecommendations] = useState([]);


  const fetchData = async () => {
    const data = await fetchRecommendations();
    if (data) {
      setRecommendations(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, [user]); // Empty dependency array means it runs once when the component mounts

  return (
    <Box sx={{
      position: "absolute",
      width: "60vw",
      overflowY: "auto",
      overflowX: "hidden",
      height: "94vh",
      left: "20vw",
      top: "5vh",
      background: "#f0f0f0",
      borderRadius: "0px 0px 8px 8px",
      boxShadow: "5px 5px 10px #bebebe",
      display: "flex",
      flexDirection: "column", // Set the display to 'flex' and column direction
      }}>
      <Box sx = {{ width: '55vw', height: '5vh', display: 'flex', alignItems:'center', border: 1, borderColor: "#bebebe"}}>
        <Autocomplete
        disabled
        freeSolo
        renderInput={(params) => <InputBase {...params} sx={{ ml: 1, flex: 1 }} placeholder=" Enter a specific genre, artist, or song to see custom recommendations"/>}
        sx={{ width: '100%'}}
        />
        <SearchIcon sx={{mr: 1, my: 0.5}}/>
      </Box>
      <Typography variant="h6" color={"grey"} sx={{ position: "relative", left: "5vw", mt: 2 }}>{`Here are recommendations based on your music taste`}</Typography>
      <DiscoverScroller tracks={recommendations}/>
      {/* <Typography variant="h6" color={"grey"} sx={{ position: "relative", left: "5vw", mt: 2 }}>{`We think you would like these artists:`}</Typography>
      <DiscoverScroller /> */}
    </Box>
  );
};

export default Discover;