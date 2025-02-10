import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  CardMedia,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import imag2 from "../../assets/myImage.jpg";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

import "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#FFFFFF" }}>
      <Paper
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens
          padding: "16px",
          backgroundColor: "#121212",
          color: "#FFFFFF",
        }}
      >
        {/* Profile Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" }, // Full width on small screens, 30% otherwise
            height: { xs: "auto", md: "100%" }, // Auto height for stacking on small screens
            margin: { xs: "0 auto 16px", md: "auto" }, // Centered margin for small screens
            backgroundColor: "#778899",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <Card
            sx={{
              maxWidth: "100%",
              boxShadow: "none",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <CardMedia
              sx={{
                height: { xs: 200, sm: 300, md: 350 }, // Adjust image size for different screens
                width: { xs: 200, sm: 300, md: 350 },
                display: "block",
                margin: "20px auto",
                borderRadius: "50%",
                border: "4px solid #f5f5f5",
              }}
              image={imag2}
              title="Profile Image"
            />
          <CardContent>
          <Typography
            variant="h5"
            sx={{
              color: "#000",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "'Permanent Marker', serif",
              cursor: "pointer",
            }}
          >
            Samiksha Kad
          </Typography>
          <Divider sx={{ backgroundColor: "#FFFFFF", marginY: "8px" }} />
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.3rem" },
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "'Permanent Marker', serif",
              color: "#708090",
            }}
          >
            Crafting seamless digital experiences with passion, precision, and a touch of creativity.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.2rem" },
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              marginTop: "10px",
              color: "#708090",
            }}
          >
            With a solid foundation in Software Engineering and hands-on experience in developing innovative solutions, I specialize in creating efficient, user-centric digital systems. My journey has taken me through roles as a Software Developer enthusiast, blending technical expertise with creative problem-solving.
          </Typography>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
  <a href="mailto:kadsamiksha347@gmail.com" style={{ textDecoration: "none" }}>
    <EmailIcon
      sx={{
        fontSize: { xs: "40px", md: "50px" },
        color: "#A52A2A",
        cursor: "pointer",
        "&:hover": { color: "#e91e63" },
      }}
    />
  </a>
  <a
    href="https://www.linkedin.com/in/samiksha-kad-ab66051a9/" 
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <LinkedInIcon
      sx={{
        fontSize: { xs: "40px", md: "50px" },
        color: "#0e76a8",
        cursor: "pointer",
        "&:hover": { color: "#0b5ea3" },
      }}
    />
  </a>
  <a
    href="https://www.instagram.com/__samiksha_kad___/" 
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <InstagramIcon
      sx={{
        fontSize: { xs: "40px", md: "50px" },
        color: "#e1306c",
        cursor: "pointer",
        "&:hover": { color: "#c13584" },
      }}
    />
  </a>
</Box>

        </CardContent>

          </Card>
        </Box>

        {/* Skills Section with Scroll Animation */}
        <Box
          sx={{
            width: { xs: "100%", md: "70%" }, // Full width on small screens, 70% otherwise
            overflowY: "auto",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#1E1E1E",
          }}
        >
          <Typography
            gutterBottom
            component="div"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "3rem", md: "5rem" }, // Adjust font size for headings
              fontWeight: "bold",
              lineHeight: "1.5",
              textAlign: "center",
              fontFamily: '"Permanent Marker", serif',
              fontStyle: "normal",
            }}
          >
            SOFTWARE
          </Typography>
          <Typography
            gutterBottom
            component="div"
            sx={{
              color: "#C0C0C0",
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: "bold",
              lineHeight: "1.5",
              textAlign: "center",
              fontFamily: '"Permanent Marker", serif',
              fontStyle: "normal",
            }}
          >
            DEVELOPER
          </Typography>

          <Box id="aboutme">
            <Aboutme />
          </Box>
          <Box id="skills">
            <Skills />
          </Box>
          <Box id="experience">
            <Experience />
          </Box>
          <Box id="projects">
            <Projects />
          </Box>
          <Box id="contact">
            <Contact />
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
