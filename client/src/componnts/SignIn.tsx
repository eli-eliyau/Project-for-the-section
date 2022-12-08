import axios from "axios";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";

interface IProps {
  onUserToken: (token: string|undefined) => void;
}

// import { createTheme } from "@material-ui/core";



export const theme = createTheme({
  direction: "ltr",
});

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

     

export default function SignIn({ onUserToken }: IProps) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post("http://localhost:3001/signInPage", { pass: data.get("password") })
      .then((res) => {
        console.log(res.data.token);
        axios
          .get("http://localhost:3001/authenticationToken", {
            headers: {
              "x-api-key": res.data.token,
            },
          })
          .then((res) => {
            onUserToken(res.data.token);
            // navigte("/projects");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
        
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            {"ברוך הבא למערכת"}
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
              id="name"
              label="שם"
              name="name"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="סיסמה"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {"התחברות"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </CacheProvider>
  );
}
