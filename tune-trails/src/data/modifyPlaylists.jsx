import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";

export const useModifyPlaylist = () => {
  const { accessToken, user } = useAuth();
  const userId = user?.id;
  
  const addTracks = async (playlistId, trackUris) => {
    try {
      console.log(playlistId);
      console.log(trackUris);
      const response = await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          uris: trackUris,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error adding tracks to playlist:", error);
      throw error;
    }
  };

  const createPlaylist = async (playlistName) => {
    try {
      const response = await axios.post(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          name: playlistName,
          public: false,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating a playlist:", error);
      throw error;
    }
  };

  return { createPlaylist, addTracks };
};
