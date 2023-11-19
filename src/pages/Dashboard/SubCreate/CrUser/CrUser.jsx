// Import Library
import React, { useCallback, useEffect, useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { FormHelperText, Stack, Button, IconButton, Input, FormControl, FormLabel, LinearProgress } from "@mui/joy";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Key from "@mui/icons-material/Key";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { createUser, editUser } from "../../../../features/actions/user.action";
import { userService } from "../../../../services/user.service";
import { BASE_URL } from "../../../../services/api";
import axios from "axios";

// MUI Styling CSS
const Kotak = styled(Box)(() => ({
  borderRadius: "15px",
  backgroundColor: "#fff",
  width: "100%",
  minHeight: "505px",
  padding: "30px",
}));

const Judul = styled(Typography)(() => ({
  fontSize: "30px",
  fontWeight: "700",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  height: "100%",
  margin: "10px",
}));

const SpaceGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "right",
  width: "100%",
}));

const GridFlex = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "20px 30px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "10px 0px",
  },
}));

// Main Declaration
const CrUsers = (props) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [msg, setMsg] = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const minLength = 8;
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { errorMessage } = useAppSelector((state) => state.user.createUser);

  const handleUploadUser = (e) => {
    e.preventDefault();
    const url = `${BASE_URL}user/register`;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    if (username && email && password) {
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          alert("User berhasil ditambahkan");
          setMsg("Add User Successful");
          console.log(response.data);
        })
        .catch((err) => {
          setMsg("Add User failed");
          console.log(err);
        });
    }

    // navigate("/dashboard/users");
    // navigate(0);
  };

  console.log("ini mode", props.mode);

  // Main Code
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#D9D9D9", height: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Kotak>
            <Judul>Tambah Pengguna</Judul>
            <Divider sx={{ borderSize: "20px" }} />
            <form onSubmit={handleUploadUser}>
              <SpaceGrid container sx={{ justifyContent: { xs: "center", md: "left" }, paddingTop: "10px" }}>
                <GridFlex item xs={12} md={6} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                      sx={{
                        fontSize: "18px",
                      }}
                    >
                      Username
                    </FormLabel>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} size="lg" name="Size" placeholder="username" sx={{ width: "100%", borderColor: "#252525" }} />
                  </FormControl>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Email
                      </FormLabel>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} size="lg" name="Size" placeholder="...@email.com" sx={{ width: "100%", borderColor: "#252525" }} />
                    </FormControl>
                  </Box>
                  <Box sx={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "20px" }}>
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Password
                      </FormLabel>
                      <FormHelperText>Minimal 8 karakter, 1 huruf kecil, 1 huruf besar, 1 symbol, & 1 angka</FormHelperText>
                      <Stack
                        spacing={0.5}
                        sx={{
                          "--hue": Math.min(password.length * 10, 120),
                        }}
                      >
                        <Input
                          type={showPassword ? "text" : "password"}
                          size="lg"
                          name="Size"
                          placeholder="password"
                          startDecorator={<Key />}
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          endDecorator={
                            <IconButton aria-label="upload btn" color="neutral" onMouseDown={handleMouseDownPassword} onClick={handleClickShowPassword}>
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          }
                          sx={{ width: "100%", borderColor: "#252525" }}
                        />
                        <LinearProgress
                          determinate
                          size="sm"
                          value={Math.min((password.length * 100) / minLength, 100)}
                          sx={{
                            bgcolor: "background.level3",
                            color: "hsl(var(--hue) 80% 40%)",
                          }}
                        />
                        <Typography level="body-xs" sx={{ alignSelf: "flex-end", color: "hsl(var(--hue) 80% 30%)" }}>
                          {password.length < 3 && "Very weak"}
                          {password.length >= 3 && password.length < 6 && "Weak"}
                          {password.length >= 6 && password.length < 10 && "Strong"}
                          {password.length >= 10 && "Very strong"}
                        </Typography>
                      </Stack>
                    </FormControl>
                  </Box>
                </GridFlex>
                <GridFlex item xs={12} md={12} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                  <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "left", gap: "30px" }}>
                    {msg && <span>{msg}</span>}
                    <Button
                      type="submit"
                      sx={{
                        width: { xs: "100%", md: "25%" },
                        height: "48px",
                        fontSize: "16px",
                      }}
                    >
                      Submit
                    </Button>
                    {errorMessage && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>Upload Pengguna Gagal</FormHelperText>}
                  </Box>
                </GridFlex>
              </SpaceGrid>
            </form>
          </Kotak>
        </Grid>
      </Grid>
    </Box>
  );
};

CrUsers.propTypes = {
  mode: PropTypes.string,
};

// Export Code
export default CrUsers;
