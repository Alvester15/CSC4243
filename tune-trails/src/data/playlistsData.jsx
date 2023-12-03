import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from "../context/authContext";

export const usePlaylistsData = () => {
  const { accessToken } = useAuth();
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  const fetchPlaylistTracks = async (playlistId) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        return response.data.items;
      } else {
        throw new Error("Failed to fetch playlist tracks");
      }
    } catch (error) {
      setError(error);
      return [];
    }
  };

  useEffect(() => {
    if (!accessToken) {
      // Access token is not available yet, you can wait or return an error state.
      setError("Access token is not available.");
      return;
    }

    const fetchPlaylists = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          const playlistsData = response.data.items;

          // Fetch cover images for each playlist
          const playlistsWithImages = await Promise.all(
            playlistsData.map(async (playlist) => {
              const imageResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/images`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });

              if (imageResponse.status === 200) {
                playlist.images = imageResponse.data;
              }

              // Fetch tracks for each playlist
              const tracks = await fetchPlaylistTracks(playlist.id);
              playlist.tracks = tracks;

              return playlist;
            })
          );

          setPlaylists(playlistsWithImages);
        } else {
          throw new Error("Failed to fetch Spotify playlists");
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchPlaylists();
  }, [accessToken] );

  return { playlists, error, fetchPlaylistTracks };
};
