import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { ContactData } from "../../config/LoginService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    }); 
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 3) {
      newErrors.message = "Message must be at least 3 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("formData", formData);
      ContactData(formData)
        .then((result) => {
          console.log("-result------------------------>", JSON.stringify(result));
        })
        .catch((error) => console.error("API Error in listMembers:", error));

      setFormData({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "95%",
          overflowY: "auto",
          padding: "16px",
          borderRadius: "8px",
          margin: "20px",
          backgroundColor: "#1E1E1E",
          border: "2px solid #FFFFFF",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px",
            backgroundColor: "#1E1E1E",
            borderRadius: "8px",
            margin: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#FF6F61",
              marginBottom: "16px",
            }}
          >
            Contact Me
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <Box sx={{ marginBottom: "16px" }}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px" }}
              />
            </Box>

            <Box sx={{ marginBottom: "16px" }}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                error={!!errors.email}
                helperText={errors.email}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px" }}
              />
            </Box>

            <Box sx={{ marginBottom: "16px" }}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px" }}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: "#FF6F61",
                "&:hover": {
                  backgroundColor: "#FF5C4B",
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
}
