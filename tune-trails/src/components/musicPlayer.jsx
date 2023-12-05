import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import { useAuth } from "../context/authContext";
import { useAppContext } from '../context/appContext';
import { useWebPlayer } from '../data/player';
import Box from '@mui/material/Box';

export default function MusicPlayer(props) {
  const { accessToken } = useAuth();
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [deviceId, setDeviceId] = useState(undefined);
  const { state } = useAppContext();
  const { currentTrack } = state;
  const [isInitialized, setInitialized] = useState(false);
  const { playTrack } = useWebPlayer();
  const theme = useTheme();

    const initializePlayer = () => {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);
      if (!isInitialized && accessToken) {
          window.onSpotifyWebPlaybackSDKReady = () => {
              const playerInstance = new window.Spotify.Player({
                  name: 'Web Playback SDK',
                  getOAuthToken: cb => { cb(accessToken); },
                  volume: 0.3
              });
              
              setPlayer(playerInstance);
              
              playerInstance.addListener('ready', ({ device_id }) => {
                  console.log('Ready with Device ID', device_id);
                  setDeviceId(device_id);
              });
    
              playerInstance.addListener('not_ready', ({ device_id }) => {
                  console.log('Device ID has gone offline', device_id);
              });

              playerInstance.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }
                
                setPaused(state.paused);

                playerInstance.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });

            }));
              playerInstance.connect();
              setInitialized(true);
          };
        }
    };

    useEffect(() => {
      if (!currentTrack || !accessToken) {
          return;
      }
      playTrack(currentTrack.uri, deviceId);
    }, [currentTrack, player]);

    useEffect(() => {
      if (!accessToken) {
          return;
      }
      initializePlayer();
    }, [accessToken]);

    if (!currentTrack) {
      return null;
    }
    return (
      <Card sx={{ display: 'flex', flexDirection: 'row', height: '16vh', width: '18vw', background: "#f0f0f0", borderRadius: "0px 0px 8px 8px", boxShadow: "5px 5px 10px #bebebe", borderTop: 3, borderTopColor: "#bebebe", justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: 'calc(18vw - 16vh)'}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {currentTrack.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {currentTrack.artists[0].name}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={() => player && player.togglePlay()}>
              { is_paused ? <PlayArrowIcon sx={{ height: 38, width: 38 }} /> : <PauseIcon sx={{ height: 38, width: 38 }} /> }
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: '16vh', right: 0 }}
          image={currentTrack.album.images[0].url}
          alt="Live from space album cover"
        />
      </Card>
    );
}
