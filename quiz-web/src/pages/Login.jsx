import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Button, Alert } from "@mui/material";
import { FormControl } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [notFoundStatus, setNotFoundStatus] = useState(false);
  const [wrongPasswordStatus, setWrongPasswordStatus] = useState(false);
  const [formData, setFormData] = useState({
    user_email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    setNotFoundStatus(false); // Reset at the beginning of login attempt
    setWrongPasswordStatus(false);
    try {
      e.preventDefault();
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        redirect: "follow",
        credentials: "include", 
        headers: headers,
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if(data.message==="success"){
          console.log(data.message);
      }
      else if(response.status === 401){
        if(data.error === "Invalid user email"){
          setNotFoundStatus(true);
        }
        else if(data.error==="Invalid credentials"){
          setWrongPasswordStatus(true);
        }
      }
      setFormData({
        user_email: "",
        password: "",
      });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#1976d2",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          width: "40%",
          margin: "0 auto",
          height: "78%",
          padding: "10px",
          borderRadius: "10px",
          flexDirection: "column",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <div>
          <strong style={{ fontSize: "22px" }}>Sign in</strong>
        </div>
        <div
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "500px",
            height: "300px",
            padding: "20px",
            borderRadius: "10px",
            flexDirection: "column",
          }}
        >
          <FormControl sx={{ width: "45ch" }}>
            <TextField
              style={{ margin: " 10px 0 10px 0" }}
              id="useremail-id"
              name="user_email"
              label="User name"
              variant="outlined"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <TextField
              style={{ margin: "20px 0" }}
              id="password-id"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              value={formData.password}
              onChange={handleInputChange}
            />
            {notFoundStatus && (
              <Alert
                icon={<ErrorOutlineIcon fontSize="inherit" />}
                severity="error"
              >
                User not found..!
              </Alert>
            )}
            {wrongPasswordStatus && (
              <Alert
                icon={<ErrorOutlineIcon fontSize="inherit" />}
                severity="success"
              >
                Wrong password. Please try again!
              </Alert>
            )}
            <Button
              style={{ margin: "20px 0" }}
              onClick={handleLogin}
              variant="contained"
            >
              Login
            </Button>
            <hr
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "60%",
                alignItems: "center",
                backgroundColor: "black",
              }}
            />
            <Button
              style={{ margin: "20px 0" }}
              onClick={() => {
                navigate("/signup");
              }}
              variant="outlined"
            >
              Sign up
            </Button>
            <Link href="#" underline="hover">
              Change Password
            </Link>
          </FormControl>
        </div>
      </Box>
    </div>
  );
};
