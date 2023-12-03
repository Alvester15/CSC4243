import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useAuth } from "../context/authContext";
import { useAppContext } from '../context/appContext';

const track = {
  "album": {
      "album_type": "ALBUM",
      "artists": [
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0UF7XLthtbSF2Eur7559oV"
              },
              "href": "https://api.spotify.com/v1/artists/0UF7XLthtbSF2Eur7559oV",
              "id": "0UF7XLthtbSF2Eur7559oV",
              "name": "Kavinsky",
              "type": "artist",
              "uri": "spotify:artist:0UF7XLthtbSF2Eur7559oV"
          }
      ],
      "available_markets": [
          "AE",
          "AT",
          "AU",
          "BA",
          "BD",
          "BE",
          "BF",
          "BH",
          "BJ",
          "BR",
          "CA",
          "CG",
          "CH",
          "CI",
          "CM",
          "CR",
          "CW",
          "DE",
          "DK",
          "DZ",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GN",
          "HR",
          "HU",
          "IE",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LK",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "ME",
          "MG",
          "MK",
          "ML",
          "MU",
          "MX",
          "MY",
          "NE",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PH",
          "PK",
          "PL",
          "PT",
          "QA",
          "RS",
          "RW",
          "SA",
          "SE",
          "SI",
          "SN",
          "TD",
          "TN",
          "US",
          "XK"
      ],
      "external_urls": {
          "spotify": "https://open.spotify.com/album/07nBld9enf1PyRysZAVSqJ"
      },
      "href": "https://api.spotify.com/v1/albums/07nBld9enf1PyRysZAVSqJ",
      "id": "07nBld9enf1PyRysZAVSqJ",
      "images": [
          {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d6d8c2eaa1f9031b62f7a3f7",
              "width": 640
          },
          {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d6d8c2eaa1f9031b62f7a3f7",
              "width": 300
          },
          {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d6d8c2eaa1f9031b62f7a3f7",
              "width": 64
          }
      ],
      "name": "Nightcall",
      "release_date": "2010",
      "release_date_precision": "year",
      "total_tracks": 7,
      "type": "album",
      "uri": "spotify:album:07nBld9enf1PyRysZAVSqJ"
  },
  "artists": [
      {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/0UF7XLthtbSF2Eur7559oV"
          },
          "href": "https://api.spotify.com/v1/artists/0UF7XLthtbSF2Eur7559oV",
          "id": "0UF7XLthtbSF2Eur7559oV",
          "name": "Kavinsky",
          "type": "artist",
          "uri": "spotify:artist:0UF7XLthtbSF2Eur7559oV"
      }
  ],
  "available_markets": [
      "AE",
      "AT",
      "AU",
      "BA",
      "BD",
      "BF",
      "BH",
      "BJ",
      "BR",
      "CA",
      "CG",
      "CH",
      "CI",
      "CM",
      "CR",
      "CW",
      "DE",
      "DK",
      "DZ",
      "EE",
      "EG",
      "ES",
      "FI",
      "FR",
      "GB",
      "GN",
      "HR",
      "HU",
      "IE",
      "IN",
      "IQ",
      "IS",
      "IT",
      "JO",
      "JP",
      "KW",
      "LB",
      "LK",
      "LT",
      "LV",
      "LY",
      "MA",
      "ME",
      "MG",
      "MK",
      "ML",
      "MU",
      "MX",
      "MY",
      "NE",
      "NL",
      "NO",
      "NZ",
      "OM",
      "PH",
      "PK",
      "PL",
      "PT",
      "QA",
      "RS",
      "RW",
      "SA",
      "SE",
      "SI",
      "SN",
      "TD",
      "TN",
      "US",
      "XK"
  ],
  "disc_number": 1,
  "duration_ms": 258413,
  "explicit": false,
  "external_ids": {
      "isrc": "FRS710900410"
  },
  "external_urls": {
      "spotify": "https://open.spotify.com/track/0U0ldCRmgCqhVvD6ksG63j"
  },
  "href": "https://api.spotify.com/v1/tracks/0U0ldCRmgCqhVvD6ksG63j",
  "id": "0U0ldCRmgCqhVvD6ksG63j",
  "is_local": false,
  "name": "Nightcall",
  "popularity": 76,
  "preview_url": null,
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:0U0ldCRmgCqhVvD6ksG63j"
}

export default function MusicPlayer(props) {
  const { accessToken } = useAuth();
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [current_track, setTrack] = useState(track);
  const { state } = useAppContext();
  const { currentTrack } = state;
  const theme = useTheme();
    useEffect(() => {

      if (!accessToken) {
        // Access token is not available yet, you can wait or return an error state.
        console.log("Access token is not available.");
        return;
      }

      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;

      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {

          const player = new window.Spotify.Player({
              name: 'Web Playback SDK',
              getOAuthToken: cb => { cb(accessToken); },
              volume: 0.5
          });

          setPlayer(player);

          player.addListener('ready', ({ device_id }) => {
              console.log('Ready with Device ID', device_id);
          });

          player.addListener('not_ready', ({ device_id }) => {
              console.log('Device ID has gone offline', device_id);
          });

          player.addListener('player_state_changed', ( state => {

              if (!state) {
                  return;
              }

              setTrack(state.track_window.currentTrack);
              setPaused(state.paused);

              player.getCurrentState().then( state => { 
                  (!state)? setActive(false) : setActive(true) 
              });

          }));

          player.connect();

      };
  }, [accessToken]);

    if (!currentTrack) {
      return null;
    }
    return (
      <Card sx={{ display: 'flex', flexDirection: 'row', height: '16vh', width: '18vw', background: "#f0f0f0", borderRadius: "0px 0px 8px 8px", boxShadow: "5px 5px 10px #bebebe", borderTop: 3, borderTopColor: "#bebebe", justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',}}>
              {currentTrack.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {currentTrack.artists[0].name}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={() => { player.togglePlay() }}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
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
