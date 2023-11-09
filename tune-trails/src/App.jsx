import "./App.css";
import PlaylistBox from "./components/playlistBox";
import Sidebar from "./components/sidebar";
import { Box } from "@mui/material";
import FriendPage from "./pages/friends";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Profile from "./pages/profile";
import Discover from "./pages/discover";
import News from "./pages/news";
import MainNavbar from "./components/mainNavbar";


function App() {

  return (
    <Box sx={{        
    display: "flex",
    alignItems: "center",
    margin: "0",
    width: "100%",
    flexDirection: "row", 
    overflow: "hidden",
    }}>
      <Box sx={{ position: "absolute", left: 20, top: "5vh" }}>
        <PlaylistBox />
      </Box>
        <MainNavbar />
      <Box sx={{ position: "absolute", right: 20, top: "5vh" }}>
        <Sidebar />
      </Box>

    <Routes>
      <Route index element={<Navigate to="/profile" />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/friends" element={<FriendPage />} />
      <Route path="/news" element={<News />} />
    </Routes>
    </Box>
  );
}

export default App;
