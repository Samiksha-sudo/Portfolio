import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";

export default function Projects() {

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Developed a full-stack e-commerce application using React, Node.js, MongoDB, and Material-UI. Implemented features like product search, user authentication, and an admin dashboard.",
      techStack: "React, Node.js, MongoDB, Material-UI",
    },
    {
      title: "Portfolio Website",
      description:
        "Created a responsive portfolio website showcasing my skills, experience, and projects using React and Material-UI.",
      techStack: "React, Material-UI",
    },
      {
        title: "Windeep finance",
        description:
          "Personalized Financial Solutions: From custom investment plans to flexible credit options, we empower you to take control of your financial future with services designed specifically for you",
        techStack: "HTML, CSS, JavaScript, React, Express, Mysql",
        url:"https://windeepfinance.com/"
      },
      {
        title: "Utech",
        description:
          "Utech is a platform catering to engineers, architects, material providers, and contractors. It offers services like 2D, 3D, VR, and Vastu checks, along with various other construction-related services.",
        techStack: "JavaScript, NodeJS, ExpressJS, SQL, MongoDB, AWS",
        url: "https://admin.utecbuild.com/",
      },
  ];

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
              Projects
            </Typography>
          </Box>
          {projects.map((project, index) => (
    <Card
      key={index}
      sx={{
        marginBottom: "16px",
        padding: "16px",
        backgroundColor: "#2C2C2C",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        color: "#FFFFFF",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Permanent Marker', serif",
            cursor:"pointer"
          }}
        >
          {project.title}
        </Typography>
        <Divider sx={{ backgroundColor: "#FFFFFF", marginY: "8px" }} />
        <Typography variant="body1">{project.description}</Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "8px",
            fontStyle: "italic",
            color: "#C0C0C0",
          }}
        >
          Tech Stack: {project.techStack}
        </Typography>
        {project.url && (
          <Typography
            variant="body2"
            sx={{
              marginTop: "8px",
              color: "#FF6F61",
              textDecoration: "underline",
              cursor:"pointer"
            }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none",cursor:"pointer" }}
              
            >
              Visit Project
            </a>
          </Typography>
        )}
      </CardContent>
    </Card>
  ))}

            </>
  );
}
