import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";

const Databox = ({ songName, artistName, caption, postedBy, imageUrl, onSave, songId }) => {
  const [fireButtonState, setFireButtonState] = useState("outlined");
  const [thumbButtonState, setThumbButtonState] = useState("outlined");

  function handleReaction(id) {
    if (id === "fire") {
      if (fireButtonState === "outlined") {
        setFireButtonState("contained");
      } else {
        setFireButtonState("outlined");
      }
    } else if (id === "thumb") {
      if (thumbButtonState === "outlined") {
        setThumbButtonState("contained");
      } else {
        setThumbButtonState("outlined");
      }
    }
  }

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
              image={imageUrl}
              alt="placeholderIMG"
            ></CardMedia>
            <Box
              sx={{
                textAlign: "center",
                mt: "10%",
                height: "66px",
              }}
            >
              <Button
                className="reaction"
                id="thumb"
                onClick={() => handleReaction("thumb")}
                variant={thumbButtonState}
                color="primary"
              >
                👍
              </Button>
              <Button
                className="reaction"
                id="fire"
                onClick={() => handleReaction("fire")}
                variant={fireButtonState}
                color="primary"
                sx={{ ml: "10px" }}
              >
                🔥
              </Button>
              <Button
                id="save"
                variant="outlined"
                color="primary"
                sx={{ ml: "10px" }}
                onClick={() => onSave(songId)}
              >
                💾
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
              sx={{
                borderBottom: "1px solid #bebebe",
                textAlign: "left",
                whiteSpace: "nowrap", // Set to nowrap to prevent text from going to the second line
                overflow: "ellipsis", // Hide the overflow text if any
              }}
              variant="h4"
            >
              {songName} - {artistName}
            </Typography>
            <Typography sx={{ mt: "10px", textAlign: "left" }}>{caption}</Typography>
            <Box
              sx={{
                border: "4px solid #bebebe",
                borderRadius: "3px",
                width: "200px",
                mt: "200px",
                ml: "60%",
              }}
            >
              <Typography>Posted by: {postedBy}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Databox;
