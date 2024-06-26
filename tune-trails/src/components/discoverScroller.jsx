import React, { useState } from 'react';
import { useAppContext, setCurrentTrack } from '../context/appContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DraggableCardMedia from './draggableCardMedia';
import { Box, Card, IconButton, Typography, CardContent, Slide } from '@mui/material';

function DiscoverScroller({ tracks }) {
  const [startIndex, setStartIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('right');
  const { dispatch } = useAppContext();

  const handleDoubleClick = (track) => {
    setCurrentTrack(dispatch, track);
  };

  const handleNext = () => {
    if (startIndex + 4 < tracks.length) {
      setSlideDirection('right');
      setSlideIn(false);
      setTimeout(() => {
        setStartIndex((prevIndex) => prevIndex + 4);
        setSlideDirection('left');
        setSlideIn(true);
      }, 210); // Match this with the Slide timeout duration
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setSlideDirection('left');
      setSlideIn(false);
      setTimeout(() => {
        setStartIndex((prevIndex) => prevIndex - 4);
        setSlideDirection('right');
        setSlideIn(true);
      }, 210); // Match this with the Slide timeout duration
    }
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50vw', left: '5vw', height: '30vh', my: 1 }} >
      <IconButton onClick={handlePrev} disabled={startIndex === 0}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box sx={{ width: '50vw', overflow: 'hidden' }}>
        <Slide direction={slideDirection} in={slideIn} mountOnEnter unmountOnExit timeout={200}>
          <Box sx={{ display: 'flex', overflow: 'none' }}>
            {tracks.slice(startIndex, startIndex + 4).map((track, index) => (
              <Card key={index} sx={{ width: 200, mx: 2, my: 1, height: '30vh', border: 3, borderColor: "#bebebe", background: "#f0f0f0"}}>
                  <DraggableCardMedia
                    track={track}
                    onDoubleClick={handleDoubleClick}
                    size={200} // Set your custom height here
                  />
                <CardContent>
                  <Typography>
                    {track.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Slide>
      </Box>
      <IconButton onClick={handleNext} disabled={startIndex + 4 >= tracks.length}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default DiscoverScroller;
