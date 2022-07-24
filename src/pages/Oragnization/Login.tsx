import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ILogin, ILoginResult } from "../../models/auth.model";
import { useAppDispatch } from "../../redux/store";
import { login } from "../../redux/auth";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const SignIn = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginInfo: ILogin = { email: input.email, password: input.password };

    await dispatch(login(loginInfo))
      .unwrap()
      .then(() => navigate("/organization-dashboard"))
      .catch((error: any) => console.log(error));
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput = event.target.value;

    setInput((prevState) => ({
      email: prevState.email,
      password: currentInput,
    }));
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput = event.target.value;

    setInput((prevState) => ({
      password: prevState.password,
      email: currentInput,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Prijavite se kao organizacija
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={handleEmail}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePassword}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Prijava
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
