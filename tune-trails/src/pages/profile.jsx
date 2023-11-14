import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Stack, Avatar } from "@mui/material"; // Import Grid from MUI
import { useAuth } from "../context/authContext";
import TuneTrail from "../data/tuneTrail";

const Profile = (props) => {
  const { user } = useAuth();
  const { fetchTopData } = TuneTrail();
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  // State to keep track of the selected time period (Month, Last 6 months, All time)
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Month");
  const [topGenre, setTopGenre] = useState("N/A");
  
  useEffect(() => {
    fetchData('Month');
  }, [user]); // Empty dependency array means it runs once when the component mounts

  const fetchData = async (timePeriod) => {
    const data = await fetchTopData(timePeriod);
    if (data) {
      setTopArtists(data.topArtists);
      setTopTracks(data.topTracks);
      console.log(topTracks);
      setSelectedTimePeriod(timePeriod);
    }
  };

  const handleTimePeriodChange = async (timePeriod) => {
    fetchData(timePeriod);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        width: "60vw",
        overflow: "hidden",
        height: "94vh",
        left: "20vw",
        top: "5vh",
        border: "2px solid black",
        borderRadius: "8px",
        display: 'flex',
        flexDirection: 'column', // Set the display to 'flex' and column direction
      }}
    >
      <Box sx={{ position: "relative", left: "4vw" }}>
        <h2>{`${user?.display_name}'s TuneTrail`}</h2>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: 'flex',
          justifyContent: 'space-between',
          border: 1,
          borderRadius: "8px",
          width: "52vw",
          left: "4vw",
        }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              padding: "16px",
              height: "50vh",
            }}
          >
              <h3>Top Artists</h3>
              <Stack spacing={2}>
                {topArtists.map((artist) => (
                  <Stack direction="horizontal" alignItems="center" key={artist.id}>
                    <Avatar alt={artist.name} src={artist.images && artist.images.length > 0 ? artist.images[0].url : ''} sx={{ width: "50px", height: "50px", marginRight: "10px" }}/>
                    <div>{artist.name}</div>
                  </Stack>
                ))}
              </Stack>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              padding: "16px",
              height: "50vh",
            }}
          >
              <h3>Top Songs</h3>
              <Stack spacing={2}>
                {topTracks.map((track) => (
                  <Stack direction="horizontal" alignItems="center" key={track.id}>
                    <img alt={track.name} src={track.album.images && track.album.images.length > 0 ? track.album.images[0].url : ''} style={{ width: "50px", height: "50px", marginRight: "10px" }}/>
                    <div>{track.name}</div>
                  </Stack>
                ))}
              </Stack>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              padding: "16px",
              height: "50vh",
            }}
          >
            <div>
              <h3>Top Genre</h3>
              <p>Rap</p>
            </div>
          </Box>
        </Grid>
      </Box>
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'left', left: "4vw" }}>
        <Button
          variant={selectedTimePeriod === "Month" ? "contained" : "outlined"}
          onClick={() => handleTimePeriodChange("Month")}
        >
          Month
        </Button>
        <Button
          variant={selectedTimePeriod === "Last 6 months" ? "contained" : "outlined"}
          onClick={() => handleTimePeriodChange("Last 6 months")}
        >
          Last 6 months
        </Button>
        <Button
          variant={selectedTimePeriod === "All time" ? "contained" : "outlined"}
          onClick={() => handleTimePeriodChange("All time")}
        >
          All time
        </Button>
      </Box>

      {/* Bottom Box for User's Bio */}
      <Box sx={{ padding: "16px", marginTop: "16px", borderTop: "2px solid black" }}>
        <h2>User's Bio</h2>
        {/* Add user's bio content here */}
      </Box>
    </Box>
  );
};

export default Profile;