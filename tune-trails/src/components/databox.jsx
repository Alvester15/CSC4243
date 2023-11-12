import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import album from "../assets/pexels-dids-1616470.jpg";
import React from "react";



const Databox = () => {
  const [fireButtonState, setFireButtonState] = React.useState("outlined")
  const [thumbButtonState, setThumbButtonState] = React.useState("outlined")
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
              <Button className="reaction" id="thumb" onClick={()=> handleReaction("thumb")} variant={thumbButtonState} color="primary">
                👍
              </Button>
              <Button className="reaction" id="fire" onClick={() => handleReaction("fire")} variant={fireButtonState} color="primary" sx={{ ml: "10px" }}>
                🔥
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
            <Typography sx={{ mt: "10px", textAlign: "left" }}>
              Caption:One of my favorite songs to listen to while doing
              HomeWork!
            </Typography>
            <Box
              sx={{
                border: "4px solid black",
                borderRadius: "3px",
                width: "200px",
                mt: "200px",
                ml: "60%",
              }}
            >
              <Typography variant="h5">Posted by: Kanye </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );

  function handleReaction(id){
    if(id === "fire"){
      if(fireButtonState === "outlined"){
        setFireButtonState("contained")
      }
      else{
        setFireButtonState("outlined")
      }
    }
    else if(id === "thumb"){
      if(thumbButtonState === "outlined"){
        setThumbButtonState("contained")
      }
      else{
        setThumbButtonState("outlined")
      }
    }
  }
};


export default Databox;
