import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";

interface IProps {
  onUserToken: (token: string | undefined) => void;
}

interface FormInputs {
  name: string;
  password: string;
  errorServer: string;
}

export const theme = createTheme({
  direction: "ltr",
});

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function SignIn({ onUserToken }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    axios
      .post("http://localhost:3001/signInPage", {
        name: data.name,
        pass: data.password,
      })
      .then((res) => {
        console.log(res.data);
        res.data.token
          ? axios
              .get("http://localhost:3001/authenticationToken", {
                headers: {
                  "x-api-key": res.data.token,
                },
              })
              .then((res) => {
                onUserToken(res.data.token);
                console.log(res.data);
              })
              .catch((err) => console.log(err))
          : setError(
              `errorServer`,
              {
                type: "custom",
                message: `${res.data}`,
              },
              { shouldFocus: true }
            );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              {"ברוך הבא למערכת"}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{
                mt: 1,
                width: {
                  xs: "100%", //0
                  sm: "100%", //600
                  md: "100%", //900
                  lg: "100%", //1200
                  xl: "100%", //1536
                },
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="שם מלא"
                // name="name"
                autoComplete="name"
                autoFocus
                {...register("name", {
                  required: "שדה חובה",
                  maxLength: { value: 10, message: "שם המלא עד 10 תויים" },
                })}
                onChange={() => {
                  clearErrors("errorServer");
                }}
              />
              <Typography color={"red"}>
                {errors.name && errors.name.message}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                // name="password"
                label="סיסמה"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "שדה חובה",
                  maxLength: { value: 5, message: "הכנס עד 5 תווים" },
                  minLength: { value: 3, message: "הכנס 3-5 תווים " },
                })}
                onChange={() => {
                  clearErrors("errorServer");
                }}
              />
              <Typography color={"red"}>
                {errors.password && errors.password.message}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {"התחברות"}
              </Button>
            </Box>
            <Typography color={"red"}>{errors.errorServer?.message}</Typography>
            <Link
              to={"/sing-up"}
              style={{
                textDecoration: "none",
                fontFamily: "Arial",
                color: "#000000",
              }}
            >
              {"הרשמה למערכת"}
            </Link>
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}
