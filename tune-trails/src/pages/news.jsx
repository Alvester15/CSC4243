import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Link} from "@mui/material";

const News = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "60vw",
        height: "94vh",
        left: "20vw",
        top: "5vh",
        background: "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "5px 5px 10px #bebebe",
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
      }}
    >
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{  }}>
          {/* Music News Column */}
          <Link href="https://www.billboard.com/music/music-news/julia-roberts-taylor-swift-fan-betty-1235543875/" target="_blank" rel="noopener noreferrer" underline="none">
            <Card sx={{display: 'flex', mx: 5, my: 5, height: '20vh', border: 3, borderColor: "#bebebe", background: "#f0f0f0"}}>
                <CardMedia
                  component="img"
                  image="https://www.billboard.com/wp-content/uploads/2023/12/Julia-Roberts-tonight-show-billboard-1548.jpg"
                  sx={{
                    width: "300px",
                    objectFit: "cover",
                    borderRadius: "0px 0px 0px 0px",
                  }}
                />
                <CardContent>
                  <Typography variant='h4'>
                    Julia Roberts Reveals the Sweet Reason She Loves Taylor Swift’s ‘Betty’
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ml: 1, mt: 1}}>
                    By Rania Aniftos | Source: Billboard | 12-6-2023
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://www.billboard.com/music/music-news/ice-spice-celebrity-crush-close-friends-only-podcast-doja-cat-1235543773/" target="_blank" rel="noopener noreferrer" underline="none">
              <Card sx={{display: 'flex', mx: 5, my: 5, height: '20vh', border: 3, borderColor: "#bebebe", background: "#f0f0f0"}}>
                <CardMedia
                  component="img"
                  image="https://www.billboard.com/wp-content/uploads/2023/12/Doja-Cat-and-Ice-Spice-close-friends-only-billboard-1548.jpg?w=942&h=623&crop=1"
                  sx={{
                    width: "300px",
                    objectFit: "cover",
                    borderRadius: "0px 0px 0px 0px",
                  }}
                />
                <CardContent>
                  <Typography variant='h4'>
                    Ice Spice Says This ‘Gorgeous Man’ Was Her First Celebrity Crush
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ml: 1, mt: 1}}>
                      By Rania Aniftos | Source: Billboard | 12-6-2023
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://www.billboard.com/lists/taylor-swift-kanye-west-relationship-timeline/" target="_blank" rel="noopener noreferrer" underline="none">
              <Card sx={{display: 'flex', mx: 5, my: 5, height: '20vh', border: 3, borderColor: "#bebebe", background: "#f0f0f0"}}>
                <CardMedia
                  component="img"
                  image="https://www.billboard.com/wp-content/uploads/media/kanye-west-taylor-swift-2015-vmas-v-billboard-1548.jpg?w=942&h=623&crop=1"
                  sx={{
                    width: "300px",
                    objectFit: "cover",
                    borderRadius: "0px 0px 0px 0px",
                  }}
                />
                <CardContent>
                  <Typography variant='h4'>
                    A Timeline of Kanye West & Taylor Swift’s Relationship
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ml: 1, mt: 1}}>
                  By Heran Mamo, Anna Chan | Source: Billboard | 12-6-2023
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://www.billboard.com/music/music-news/nicki-minaj-watch-what-happens-live-episode-1235543160/" target="_blank" rel="noopener noreferrer" underline="none">
              <Card sx={{display: 'flex', mx: 5, my: 5, height: '20vh', border: 3, borderColor: "#bebebe", background: "#f0f0f0"}}>
                <CardMedia
                  component="img"
                  image="https://www.billboard.com/wp-content/uploads/2023/07/nicki-minaj-barbie-la-premiere-2023-billboard-esp-1548.jpg?w=942&h=623&crop=1"
                  sx={{
                    width: "300px",
                    objectFit: "cover",
                    borderRadius: "0px 0px 0px 0px",
                  }}
                />
                <CardContent>
                  <Typography variant='h4'>
                    Nicki Minaj to Appear on Upcoming ‘Watch What Happens Live’ Episode
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ml: 1, mt: 1}}>
                      By Rania Aniftos | Source: Billboard | 12-6-2023
                  </Typography>
                </CardContent>
              </Card>
            </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
