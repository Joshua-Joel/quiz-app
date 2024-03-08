import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckIcon from "@mui/icons-material/Check";
import { Alert, Button } from "@mui/material";
import { FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    password: "",
    confirm_password: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [conflictStatus, setConflictStatus] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      if (formData.password !== formData.confirm_password) {
        setPasswordsMatch(false);
        return; 
      }
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.message === "success") {
        setSignupSuccess(true);
      } 

      setFormData({
        user_email: "",
        password: "",
        confirm_password: "",
      });
      setPasswordsMatch(true);
    } catch (error) {
      if (error.response.status === 400) {
        setConflictStatus(true);
      }
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
          height: "85%",
          padding: "20px",
          borderRadius: "10px",
          flexDirection: "column",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <div>
          <strong style={{ fontSize: "22px" }}>Sign up</strong>
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
              id="text-field-1"
              name="user_email"
              label="User name"
              variant="outlined"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <TextField
              style={{ margin: "20px 0" }}
              id="password-field-1"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              value={formData.password}
              onChange={handleInputChange}
            />
            <TextField
              style={{ margin: "9px 0" }}
              id="password-field-2"
              name="confirm_password"
              type="password"
              label="Confirm Password"
              variant="outlined"
              value={formData.confirm_password}
              onChange={handleInputChange}
            />
            {!passwordsMatch && (
              <Alert
                icon={<ErrorOutlineIcon fontSize="inherit" />}
                severity="error"
              >
                Password mismatch..!
              </Alert>
            )}
            {signupSuccess && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Registered succesfully..!
              </Alert>
            )}
            {conflictStatus && (
              <Alert
                icon={<ErrorOutlineIcon fontSize="inherit" />}
                severity="error"
              >
                Email is already associated with another account..!
              </Alert>
            )}
            <Button
              style={{ margin: "15px 0" }}
              variant="contained"
              onClick={handleSignup}
            >
              Register
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
              style={{ margin: "10px 0" }}
              onClick={() => {
                navigate("/login");
              }}
              variant="outlined"
            >
              Login
            </Button>
          </FormControl>
        </div>
      </Box>
    </div>
  );
};
