// Import Library
import React from "react";
import { Box, Link, IconButton } from "@mui/material";
import { Button, Input, FormLabel, FormHelperText } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Components
import { Kemenkeu } from "../../../../assets/assets";

// Import Assets
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TbArrowRight } from "react-icons/tb";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../../hooks/useTypedSelector";
import { loginUser } from "../../../../features/actions/user.action";
import { useNavigate } from "react-router-dom";
import { runLogoutTimer } from "../../../../services/auth";

// MUI Styling CSS
const FormBox = styled(Box)(() => ({
  backgroundColor: "#fff",
  color: "#000000",
  height: "300px",
  padding: "30px",
  borderRadius: "50px",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
}));

const Background = styled(Box)(() => ({
  backgroundColor: "#D9D9D9",
  color: "#000000",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
}));

const ImgBox = styled(Box)(() => ({
  width: "100%",
  margin: "50px",
  display: "flex",
  justifyContent: "center",
}));

const LinkBox = styled(Box)(() => ({
  padding: "25px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
}));

const CustomLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "default",
  fontSize: "13px",
  fontWeight: "600",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "row",
}));

// Main Declaration
const Admin = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isLoading, error } = useAppSelector((state) => state.user.loginUser);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      username,
      password,
    };
    dispatch(loginUser(userCredentials));
    navigate('/dashboard');
    runLogoutTimer(100)
  };

  // Main Code
  return (
    <Background>
      <ImgBox>
        <img src={Kemenkeu} style={{ height: "150px", display: "flex" }} />
      </ImgBox>
      <FormBox
        sx={() => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        })}
      >
        <FormLabel
          sx={(theme) => ({
            "--FormLabel-color": theme.vars.palette.primary.plainColor,
            fontSize: "18px",
            marginInline: "auto",
            marginBottom: "15px",
          })}
        >
          Login
        </FormLabel>
        <form onSubmit={handleLoginEvent} id="demo">
          <Input
            placeholder="Username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            startDecorator={<AccountCircle />}
            sx={{
              width: 300,
              marginBottom: "10px",
            }}
            required
          />
          <Input
            placeholder="Password"
            startDecorator={<VpnKeyIcon />}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            endDecorator={
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
            sx={{
              width: 300,
              marginBottom: "12px",
            }}
          />
          <Button
            variant="solid"
            color="primary"
            type="submit"
            sx={{
              borderRadius: "12px",
              width: "100%",
            }}
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
          {error && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>Login Gagal</FormHelperText>}
        </form>
      </FormBox>
      <LinkBox>
        <CustomLink href="/">
          <TbArrowRight style={{ marginRight: "10px", fontSize: "19px" }} /> Go to Website ITJEN
        </CustomLink>
      </LinkBox>
    </Background>
  );
};

// Export Code
export default Admin;
