import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import album from "../assets/pexels-dids-1616470.jpg";
import React from "react";

const Databox = () => {
  return (
    <Box sx={{ my: "50px", display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: "75%",
          height: "350px",
          display: "flex",
          border: "6px solid #FFD700",
        }}
      >
        <Box sx={{ ml: "5%" }}>
          <CardMedia
            component="img"
            sx={{
              width: "250px",
              height: "250px",
              mt: "20px",
            }}
            image={album}
            alt="placeholderIMG"
          ></CardMedia>
          <Box sx={{ textAlign: "center", mt: "10%" }}>
            <Button variant="contained" color="primary">
              Button 1
            </Button>
            <Button variant="contained" color="secondary" sx={{ ml: "10px" }}>
              Button 2
            </Button>
          </Box>
        </Box>
        <CardContent sx={{ ml: "5%" }}>
          <Typography
            sx={{ borderBottom: "1px solid black", textAlign: "Center" }}
            variant="h4"
          >
            Song Name - Artist Name
          </Typography>
          <Typography sx={{ mt: "5%" }}>
            Caption:One of my favorite songs to listen to while doing HomeWork!
          </Typography>
          <Box
            sx={{
              border: "4px solid black",
              borderRadius: "3px",
              width: "200px",
              mt: "42%",
              ml: "65%",
            }}
          >
            <Typography variant="h5">Posted by: Kanye </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Databox;
