import axios from 'axios';
import { useAuth } from '../context/authContext';

const useRecommendationsData = () => {
    const { accessToken } = useAuth();

    // Function to fetch the top 5 tracks
    const getTopTracks = async () => {
        try {
            if (!accessToken) {
              throw new Error("Access token is not available.");
            }

            const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    limit: 5,
                    time_range: 'medium_term'
                }
            });

            if (response.status === 200) {
                return response.data.items.map(item => item.id);
            } else {
                throw new Error("Failed to fetch top top tracks");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Function to get recommendations based on top tracks
    const getRecommendations = async (topTracks) => {
        const response = await axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                seed_tracks: topTracks.join(','),
                limit: 20
            }
        });
        return response.data.tracks;
    };

    // Example usage
    const fetchRecommendations = async () => {
        try {
            const topTracks = await getTopTracks();
            const recommendations = await getRecommendations(topTracks);
            console.log(recommendations);
            return recommendations;
        } catch (error) {
            console.error(error);
        }
    };

    return { fetchRecommendations };
};

export default useRecommendationsData;