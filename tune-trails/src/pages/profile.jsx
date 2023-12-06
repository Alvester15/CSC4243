import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import TuneTrail from "../data/tuneTrail";
import { Box, Button, Grid, Stack, Avatar, Typography } from "@mui/material"; // Import Grid from MUI

const Profile = (props) => {
  const { user } = useAuth();
  const { fetchTopData } = TuneTrail();
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  // State to keep track of the selected time period (Month, Last 6 months, All time)
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Month");
  const [topGenre, setTopGenre] = useState("N/A");

  useEffect(() => {
    fetchData("Month");
  }, [user]); // Empty dependency array means it runs once when the component mounts

  const fetchData = async (timePeriod) => {
    const data = await fetchTopData(timePeriod);
    if (data) {
      setTopArtists(data.topArtists);
      setTopTracks(data.topTracks);
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
        background: "#f0f0f0",
        borderRadius: "0px 0px 8px 8px",
        boxShadow: "5px 5px 10px #bebebe",
        display: "flex",
        flexDirection: "column", // Set the display to 'flex' and column direction
      }}
    >
      <Box sx={{ position: "relative", left: "4vw", margin: "16px" }}>
        <Typography variant="h3" color={"grey"}>{`${user?.display_name}`}</Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          background: "#f0f0f0", // Neumorphic background color
          borderRadius: "8px",
          boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff", // Neumorphic shadow
          width: "52vw",
          left: "4vw",
        }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              padding: "16px",
              height: "50vh",
              width: "18vw",
            }}
          >
              <Typography variant="h5" mt={2} mb={2}>
                Top Artists
              </Typography>
            <Stack spacing={2}>
              {topArtists.map((artist) => (
                <Stack direction="horizontal" alignItems="center" key={artist.id}
                  sx={{
                    background: "#f0f0f0", // Neumorphic background color
                    boxShadow: "3px 3px 5px #bebebe, -3px -3px 5px #ffffff", // Neumorphic shadow
                    borderRadius: "4px",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                  <Avatar
                    alt={artist.name}
                    src={
                      artist.images && artist.images.length > 0
                        ? artist.images[0].url
                        : ""
                    }
                    sx={{ width: "50px", height: "50px", marginRight: "10px" }}
                  />
                  <div style={{ width: "calc(100% - 60px)" }}>{artist.name}</div>
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
              width: "18vw",
            }}
          >
              <Typography variant="h5" mt={2} mb={2}>
                Top Songs
              </Typography>
            <Stack spacing={2}>
              {topTracks.map((track) => (
                <Stack direction="horizontal" alignItems="center" key={track.id}
                  sx={{
                    background: "#f0f0f0", // Neumorphic background color
                    boxShadow: "3px 3px 5px #bebebe, -3px -3px 5px #ffffff", // Neumorphic shadow
                    borderRadius: "4px",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                  <img
                    alt={track.name}
                    src={
                      track.album.images && track.album.images.length > 0
                        ? track.album.images[0].url
                        : ""
                    }
                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                  />
                  <div style={{ width: "calc(100% - 60px)" }}>{track.name}</div>
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
              <Typography variant="h5" mt={2} mb={2}>
                Top Genre
              </Typography>
              <Typography variant="body1">
                Rap
              </Typography>
          </Box>
        </Grid>
      </Box>

      <Box sx={{ position: "relative", display: "flex", justifyContent: "left", left: "4vw", margin: 0, borderRadius: "0px 0px 8px 8px" }}>
        <Button
          variant={selectedTimePeriod === "Month" ? "plain" : "outlined"}
          onClick={() => handleTimePeriodChange("Month")}
          sx={{
            background: "#f0f0f0",
            borderRadius: "0px 0px 0px 8px",
            boxShadow: "3px 3px 5px #bebebe, -3px -3px 5px #ffffff",
            borderColor: "#bebebe",
            color: "black",
          }}
        >
          Month
        </Button>
        <Button
          variant={selectedTimePeriod === "Last 6 months" ? "plain" : "outlined"}
          onClick={() => handleTimePeriodChange("Last 6 months")}
          sx={{
            background: "#f0f0f0",
            borderRadius: "0px 0px 0px 0px",
            boxShadow: "3px 3px 5px #bebebe, -3px -3px 5px #ffffff",
            borderColor: "#bebebe",
            color: "black",
          }}
        >
          Last 6 months
        </Button>
        <Button
          variant={selectedTimePeriod === "All time" ? "plain" : "outlined"}
          onClick={() => handleTimePeriodChange("All time")}
          sx={{
            background: "#f0f0f0",
            borderRadius: "0px 0px 8px 0px",
            boxShadow: "3px 3px 5px #bebebe, -3px -3px 5px #ffffff",
            borderColor: "#bebebe",
            color: "black",
          }}
        >
          All time
        </Button>
      </Box>

      {/* Bottom Box for User's Bio */}
      <Box sx={{ paddingLeft: "4vw", marginTop: "16px", borderTop: "2px solid #bebebe" }}>
      <Typography variant="h4" marginTop={2} color={"grey"}>
        Bio
      </Typography>
      <Typography variant="body1" marginTop={2} color={"grey"}>
        <Typography>About me: I like music</Typography>
        <Typography>Member since: 12/15/20</Typography>
        <Typography>Playlists contributions: 10</Typography>
        <Typography>Unique songs listened to: 3482 </Typography>
        <Typography>Unique genres listened to: 163</Typography>
      </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
