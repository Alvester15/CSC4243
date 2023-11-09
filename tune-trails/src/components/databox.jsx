import album from "../assets/pexels-dids-1616470.jpg";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const Databox = () => {
  return (
    <Container>
      <Box sx={{ my: "50px", display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "1000px",
            height: "350px",
            display: "flex",
            border: "6px solid black",
          }}
        >
          <Box sx={{}}>
            <CardMedia
              component="img"
              sx={{
                margin: "0",
                width: "250px",
                height: "250px",
                borderBottom: "solid 3px black",
                borderTop: "solid 3px black",
              }}
              image={album}
              alt="placeholderIMG"
            ></CardMedia>
            <Box
              sx={{
                textAlign: "center",
                mt: "10%",
                borderBottom: "solid 3px black",
                height: "66px",
              }}
            >
              <Button variant="contained" color="primary">
                Button 1
              </Button>
              <Button variant="contained" color="secondary" sx={{ ml: "10px" }}>
                Button 2
              </Button>
            </Box>
          </Box>
          <CardContent
            sx={{
              width: "100%",

              textAlign: "center",
              border: "3px black solid",
            }}
          >
            <Typography
              sx={{ borderBottom: "1px solid black", textAlign: "Center" }}
              variant="h4"
            >
              Song Name - Artist Name
            </Typography>
            <Typography sx={{ mt: "10px" }}>
              Caption:One of my favorite songs to listen to while doing
              HomeWork!
            </Typography>
            <Box
              sx={{
                border: "4px solid black",
                borderRadius: "3px",
                width: "200px",
                mt: "200px",
                ml: "475px",
              }}
            >
              <Typography variant="h5">Posted by: Kanye </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Databox;
