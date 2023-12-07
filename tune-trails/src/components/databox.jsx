import React, { useState } from "react";
import DraggableCardMedia from "./draggableCardMedia";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useAppContext, setCurrentTrack } from "../context/appContext";
import { Box } from "@mui/system";

const Databox = ({ track, caption, postedBy, onSave }) => {
  const [fireButtonState, setFireButtonState] = useState("outlined");
  const [thumbButtonState, setThumbButtonState] = useState("outlined");
  const { dispatch } = useAppContext();

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

  const handleDoubleClick = (track) => {
    setCurrentTrack(dispatch, track);
  };

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
          <Box 
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column", 
              width: "350px",
            }}
          >
            <DraggableCardMedia
              size={250}
              track={track}
              onDoubleClick={handleDoubleClick}
            ></DraggableCardMedia>
            <Box sx={{ display: "flex", flexDirection: 'row', mt: 1, justifyContent: 'space-around'}}>
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
              >
                🔥
              </Button>
              <Button
                id="save"
                variant="outlined"
                color="primary"
                onClick={() => onSave(track.id)}
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
              {track.name} - {track.artists[0].name}
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
