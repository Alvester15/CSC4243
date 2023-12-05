import axios from 'axios';
import { useAuth } from "../context/authContext";

export const useWebPlayer = () => {
    const { accessToken } = useAuth();

    const playTrack = async (trackUri, deviceId) => {
        try {
            if (!accessToken) {
                throw new Error("Access token is not available.");
            }
            const response = await axios.put(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
                uris: [trackUri],
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (response.status === 200) {
                console.log("Playback started");
            } else {
                throw new Error("Failed to play track");
            }

        } catch (error) {
            console.error(error);
        }
    }



    return { playTrack };
};