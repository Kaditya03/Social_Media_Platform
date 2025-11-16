import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { login } from "../api/endpoints";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await login(username, password);
    if (data.success) {
      navigate(`/${username}`);
    } else {
      alert("invalid username or password");
    }
  };

  return (
    <Box
      width="100%"
      height="calc(100vh - 90px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#f5f6fa" }}
    >
      <Stack
        alignItems="flex-start"
        width="95%"
        maxWidth="360px" // Slightly smaller card
        spacing={2.5} // Reduced spacing
        sx={{
          backgroundColor: "white",
          padding: "32px 24px",
          borderRadius: "14px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.07)",
        }}
      >
        <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
          Login
        </Typography>

        {/* USERNAME */}
        <Box width="100%">
          <Typography fontSize={16} sx={{ mb: 0.5 }}>
            Username
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            size="small" // <-- makes input smaller
            sx={{
              backgroundColor: "#fafafa",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* PASSWORD */}
        <Box width="100%">
          <Typography fontSize={16} sx={{ mb: 0.5 }}>
            Password
          </Typography>

          <TextField
            type="password"
            fullWidth
            variant="outlined"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small" // <-- smaller input
            sx={{
              backgroundColor: "#fafafa",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* BUTTON */}
        <Button
          onClick={handleLogin}
          fullWidth
          variant="contained"
          sx={{
            fontSize: "16px",
            paddingY: "8px",
            backgroundColor: "#4CAF50",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#43a047",
            },
          }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginPage;
