import React from "react";
import {
  Typography,
  Box,
  Paper
} from "@mui/material";


export default function Experience() {


  return (
    <>

        <Box  
              sx={{
                width: "90%",
                overflowY: "auto",
                padding: "16px",
                borderRadius: "8px",
                marginTop:"15rem",
                marginLeft:"20px",
                marginRight:"20px",
                marginBottom:"20px",
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
              Experience
            </Typography>
          </Box>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#1E1E1E",
          borderRadius: "8px",
          margin: "20px",
        }}
      >

        <Box sx={{ width: "100%", marginBottom: "20px" }}>
          {/* Kingston University */}
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>
              Kingston University (Jan 2025 - Present)
            </Typography>
            <Typography sx={{ color: "#C0C0C0" }}>
              <strong>Postgraduate Student</strong>
            </Typography>
            <Typography sx={{ color: "#FFFFFF" }}>
              Pursuing a Master's degree in Software Engineering with Management Studies, gaining advanced knowledge in Agile Project Development, Software Architecture, and Software Quality.
            </Typography>
          </Box>

          {/* iProgrammer Solutions */}
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>
              iProgrammer Solutions (Oct 2023 - Dec 2024)
            </Typography>
            <Typography sx={{ color: "#C0C0C0" }}>
              <strong>Software Developer</strong>
            </Typography>
            <Typography sx={{ color: "#FFFFFF" }}>
              Worked as a full-time backend software developer, utilizing technologies like Node.js, AWS to build scalable backe applications. Collaborated with teams to improve system performance and integrate back-end components.
            </Typography>
          </Box>

          {/* NeoSOFT Technologies */}
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>
              NeoSOFT Technologies (Jun 2021 - Oct 2023)
            </Typography>
            <Typography sx={{ color: "#C0C0C0" }}>
              <strong>Software Trainee</strong>
            </Typography>
            <Typography sx={{ color: "#FFFFFF" }}>
              Started as a Software Trainee at a CMMi Level 5 organization, gaining hands-on experience in React.js, Node.js, and Express.js. Developed key problem-solving skills and worked in an agile environment to deliver high-quality code.
            </Typography>
          </Box>
        </Box>
      </Paper>
        </>
  );
}
