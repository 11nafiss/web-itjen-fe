// Import Library
import React from "react";
import {
  Box,
  IconButton,
} from "@mui/material";
import { Button, Input, FormControl, FormLabel, FormHelperText, Checkbox } from "@mui/joy";
import { styled } from "@mui/material/styles";

// Import Assets
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Main Declaration
const FormLogin = () => {
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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


// Main Code
  return (
    <FormBox>
      <form onSubmit={handleSubmit} id="demo">
        <FormControl
          sx={() => ({
            display: "flex",
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
          <Input
            placeholder="Username"
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
          <Checkbox
            label="Remember Me"
            defaultChecked
            sx={{
              marginBottom: "20px",
              fontSize: "13px",
              fontWeight: "600",
              marginLeft: "17px",
            }}
          />
            <Button
              variant="solid"
              color="primary"
              loading={data.status === "loading"}
              type="submit"
              sx={{
                borderRadius: "12px",
                width: "100%",
              }}
            >
              Submit
            </Button>
          {data.status === "failure" && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.danger[400] })}>Login Gagal</FormHelperText>}
          {data.status === "sent" && <FormHelperText sx={(theme) => ({ color: theme.vars.palette.primary[400] })}>Login Berhasil</FormHelperText>}
        </FormControl>
      </form>
    </FormBox>
  );
};

// Export Code
export default FormLogin;
