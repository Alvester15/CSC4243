import album from "../assets/pexels-dids-1616470.jpg";
import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";

const Databox = () => {
  return (
    <Container>
      <Box sx={{ my: "50px", display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "1000px",
            height: "350px",
            display: "flex",
            border: "6px solid #bebebe",
            background: "#f0f0f0",
            borderRadius: "0px 0px 8px 8px",
            boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
          }}
        >
          <Box sx={{}}>
            <CardMedia
              component="img"
              sx={{
                margin: "0",
                width: "250px",
                height: "250px",
                border: "1px solid #bebebe",
              }}
              image={album}
              alt="placeholderIMG"
            ></CardMedia>
            <Box
              sx={{
                textAlign: "center",
                mt: "10%",
                height: "66px",
              }}
            >
              <Button variant="contained" color="primary">
                Like
              </Button>
              <Button variant="contained" color="secondary" sx={{ ml: "10px" }}>
                Dislike
              </Button>
            </Box>
          </Box>
          <CardContent
            sx={{
              width: "100%",

              textAlign: "center",
            }}
          >
            <Typography
              sx={{ borderBottom: "1px solid #bebebe", textAlign: "Center" }}
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
                border: "4px solid #bebebe",
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
