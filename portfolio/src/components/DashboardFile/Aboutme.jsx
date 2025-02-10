import React from "react";
import {
  Typography,
  Box,
} from "@mui/material";

export default function Aboutme() {

  return (
<>
          <Box  
            sx={{
              width: "90%",
              overflowY: "auto",
              padding: "16px",
              borderRadius: "8px",
              margin:"20px",
              backgroundColor: "#1E1E1E",
              border: "2px solid #FFFFFF", 
            }}>
            <Typography
              gutterBottom
              component="div"
              sx={{
                color: "#FFFFFF",
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: '"Permanent Marker", serif',
                fontWeight: 400,
                fontStyle: "normal",
                marginLeft:"20px"
              }}
            >
              About Me
            </Typography>
           
          </Box>
                    <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#FFFFFF",
              lineHeight: 1.6,
            }}
          >
            Skilled web developer with proficiency in HTML, CSS, JavaScript, and other front-end technologies.
            <br />
            ● Passionate about staying up-to-date with the latest web development trends and technologies to deliver cutting-edge solutions.
            <br />
            ● Proficient in utilizing modern web frameworks and libraries, such as React and Express, to build dynamic web applications.
            <br />
            ● Strong understanding of back-end development, including server-side scripting languages like Node.js and database management.
            <br />
            ● Appreciation from the client and also got nominated for the best employee of the month.
          </Typography>

          
          </>
        
  );
}
