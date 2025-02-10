import React from "react";
import {
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion"; // Importing necessary framer-motion hooks

// Variants for animation
const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Skills() {
  const skills = [
    { skill: "JavaScript", color: "hsl(50, 100%, 50%)" },
    { skill: "React", color: "hsl(200, 100%, 50%)" },
    { skill: "Node.js", color: "hsl(140, 100%, 50%)" },
    { skill: "MongoDB", color: "hsl(100, 100%, 50%)" },
    { skill: "Material-UI", color: "hsl(280, 100%, 50%)" },
    { skill: "Mysql", color: "hsl(243, 90.10%, 39.60%)" },
    { skill: "AWS", color: "hsl(12, 89.40%, 48.00%)" },
  ];

  return (
    <>
      <Box
        sx={{
          width: "90%",
          overflowY: "auto",
          padding: "16px",
          borderRadius: "8px",
          margin: "20px auto",
          backgroundColor: "#1E1E1E",
          border: "2px solid #FFFFFF",
        }}
      >
        <Typography
          gutterBottom
          component="div"
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
            fontWeight: "bold",
            fontFamily: '"Permanent Marker", serif',
            fontStyle: "normal",
            marginLeft: "20px",
          }}
        >
          Skills
        </Typography>
      </Box>

      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          style={{
            marginBottom: "16px",
            padding: "16px",
            margin: "auto",
            width: "90%", // Full width for smaller screens
            maxWidth: "40rem", // Limit width on larger screens
            backgroundColor: "#2C2C2C",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
          variants={cardVariants}
        >
          <Box
            sx={{
              background: skill.color,
              height: "5px",
              width: "40px", // Slightly wider color bar
              margin: "0 auto",
              borderRadius: "8px",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "1.2rem", md: "1.5rem" }, // Responsive font size
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "'Permanent Marker', serif",
            }}
          >
            {skill.skill}
          </Typography>
          <Divider sx={{ backgroundColor: "#555", marginY: "8px" }} />
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#C0C0C0",
              fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive body text
            }}
          >
            {`Expertise in ${skill.skill} for building modern applications.`}
          </Typography>
        </motion.div>
      ))}
    </>
  );
}
