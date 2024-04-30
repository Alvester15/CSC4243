import "./App.css";
import PlaylistBox from "./src/components/playlistBox";
import Sidebar from "./src/components/sidebar";
import FriendPage from "./src/pages/friends";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Profile from "./src/pages/profile";
import Discover from "./src/pages/discover";
import News from "./src/pages/news";
import MainNavbar from "./src/components/mainNavbar";
import Callback from "./src/pages/callback";
import { useAuth } from "./src/context/authContext";
import LoginModal from "./src/components/loginModal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "0",
          width: "100%",
          flexDirection: "row",
          overflow: "hidden",
          backgroundColor: "#f0f0f0", // Neumorphic background color
        }}
      >
        {showLoginModal && (
          <LoginModal
            open={true}
            onClose={() => {
              /* Handle close */
            }}
          />
        )}
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
  );
}

export default App;
