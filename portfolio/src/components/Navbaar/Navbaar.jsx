import React from "react";
import { Box, Button, AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function Navbar() {
  const StyledHeader = styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "2rem",
    color: "#FF6F61", // Accent color for the name
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    letterSpacing: "2px",
    cursor: "pointer",
  }));

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#121212",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", // Stack toolbar for smaller screens
    },
  }));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <Box display="flex" alignItems="center">
          <StyledHeader variant="h6">Samiksha Kad</StyledHeader>
        </Box>
        <Button color="inherit" onClick={() => scrollToSection("aboutme")}>
          About Me
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("skills")}>
          Skills
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("experience")}>
          Experience
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("projects")}>
          Projects
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("contact")}>
          Contact
        </Button>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;
