import "./App.css";
import PlaylistBox from "./components/playlistBox";
import Sidebar from "./components/sidebar";
import FriendPage from "./pages/friends";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Profile from "./pages/profile";
import Discover from "./pages/discover";
import News from "./pages/news";
import MainNavbar from "./components/mainNavbar";
import Callback from "./pages/callback";
import { useAuth } from "./context/authContext";
import LoginModal from "./components/loginModal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Box } from "@mui/material";

const customTheme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", // Replace "Your-Preferred-Font" with the desired font
  },
});

function App() {
  const { authorization, refreshToken, user } = useAuth();
  const showLoginModal = !authorization && !refreshToken;

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={customTheme}>
        <Box sx={{        
        display: "flex",
        alignItems: "center",
        margin: "0",
        width: "100%",
        flexDirection: "row", 
        overflow: "hidden",
        backgroundColor: "#f0f0f0", // Neumorphic background color
        }}>
          {showLoginModal && <LoginModal open={true} onClose={() => { /* Handle close */ }} />}
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
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </DndProvider>
  );
}

export default App;
