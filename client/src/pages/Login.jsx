import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { setUser } from '../app/slice/userSlice'
import { useDispatch } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch= useDispatch();
  const loginUser = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        values
      );
      dispatch(setUser(response?.data?.user))
      localStorage.setItem("accessToken", response?.data?.token);
      // localStorage.setItem("firstName", response?.data?.user?.firstName);
      navigate("/loggedin");
      // setOpen(true);
      // setMessage(response?.data?.message);
      // setSeverity("success");
    } catch (error) {
      // setOpen(true);
      console.log(error.response.data.message);
      // setSeverity("error");
    }
  };

  const loginHAUser = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/loginHA",
        values
      );

      localStorage.setItem("accessToken", response?.data?.accessToken);
      // localStorage.setItem("firstName", response?.data?.user?.firstName);
      navigate("/loggedin");
      // setOpen(true);
      // setMessage(response?.data?.message);
      // setSeverity("success");
    } catch (error) {
      // setOpen(true);
      console.log(error.response.data.message);
      // setSeverity("error");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "80px auto",
      }}
    >
      <Tabs>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Login
        </Typography>

        <TabList style={{ margin: "20px auto" }}>
          <Tab style={{ fontWeight: "bold" }}>As Patient</Tab>
          <Tab style={{ fontWeight: "bold" }}>As Admin</Tab>
        </TabList>

        <TabPanel>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Must be a valid email id!!")
                .required()
                .trim()
                .lowercase(),
              password: Yup.string().min(8).required(),
            })}
            onSubmit={async (values) => {
              await loginUser(values);
            }}
          >
            {({ handleSubmit, getFieldProps, touched, errors }) => (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  width: "500px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  padding: "2rem",
                  borderRadius: "1rem",
                }}
              >
                <FormControl>
                  <TextField
                    label="Email"
                    variant="outlined"
                    {...getFieldProps("email")}
                  />
                  {touched.email && errors.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    {...getFieldProps("password")}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </FormControl>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#05685e" }}
                  variant="contained"
                >
                  Submit
                </Button>
                <Link to="/signup">
                  <Typography style={{ textAlign: "center" }}>
                    New here? <span style={{ color: "#05685e" }}>Register</span>
                  </Typography>
                </Link>
              </form>
            )}
          </Formik>
        </TabPanel>

        <TabPanel>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Must be a valid email id!!")
                .required()
                .trim()
                .lowercase(),
              password: Yup.string().min(8).required(),
            })}
            onSubmit={async (values) => {
              await loginHAUser(values);
            }}
          >
            {({ handleSubmit, getFieldProps, touched, errors }) => (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  width: "500px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  padding: "2rem",
                  borderRadius: "1rem",
                }}
              >
                <FormControl>
                  <TextField
                    label="Email"
                    variant="outlined"
                    {...getFieldProps("email")}
                  />
                  {touched.email && errors.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    {...getFieldProps("password")}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </FormControl>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#05685e" }}
                  variant="contained"
                >
                  Submit
                </Button>
                <Link to="/signup">
                  <Typography style={{ textAlign: "center" }}>
                    New here? <span style={{ color: "#05685e" }}>Register</span>
                  </Typography>
                </Link>
              </form>
            )}
          </Formik>
        </TabPanel>
      </Tabs>
      {/* <CustomSnackBar open={open} message={message} severity={severity} /> */}
    </div>
  );
};
export default Login;
