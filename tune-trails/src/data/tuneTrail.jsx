import axios from 'axios';
import { useAuth } from '../context/authContext';

const TuneTrail = () => {
  const { accessToken } = useAuth();
  const SPOTIFY_API_URL = `https://api.spotify.com/v1/me/top`;

  const fetchTopData = async (timePeriod) => {
    try {
      if (!accessToken) {
        throw new Error("Access token is not available.");
      }

      const timeRange =
        timePeriod === "Month"
          ? "short_term"
          : timePeriod === "Last 6 months"
          ? "medium_term"
          : "long_term";

      const artistResponse = await axios.get(
        `${SPOTIFY_API_URL}/artists?limit=5&time_range=${timeRange}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const trackResponse = await axios.get(
        `${SPOTIFY_API_URL}/tracks?limit=5&time_range=${timeRange}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (artistResponse.status === 200 && trackResponse.status === 200) {
        return {
          topArtists: artistResponse.data.items,
          topTracks: trackResponse.data.items,
        };
      } else {
        throw new Error("Failed to fetch top artists or top tracks");
      }
    } catch (error) {
      console.error(error);
      return {
        topArtists: [],
        topTracks: [],
      }
    }
  };

  return { fetchTopData };
};

export default TuneTrail;
