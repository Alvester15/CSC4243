import { Box } from "@mui/material";
import "./App.css";
import PlaylistBox from "./components/playlistBox";
import Sidebar from "./components/Sidebar";

import FriendPage from "./pages/friends";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "0",
        width: "100%",
        flexDirection: "row",
      }}
    >
      <Box sx={{ mt: "6vh" }}>
        <PlaylistBox />
      </Box>
      <FriendPage />
      <Box sx={{ mt: "6vh" }}>
        <Sidebar />
      </Box>
    </Box>
  );
}

export default App;
