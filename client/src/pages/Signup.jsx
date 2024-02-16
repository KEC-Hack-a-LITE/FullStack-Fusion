import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "80px auto",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          gender: "female",
          bloodgroup: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("First name is required.")
            .trim()
            .max(55, "First name must be at most 55 characters."),
          lastName: Yup.string()
            .required("Last name is required.")
            .trim()
            .max(55, "Last name must be at most 55 characters."),
          email: Yup.string()
            .email()
            .required("Email is required.")
            .trim()
            .max(60, "Email must be at most 60 characters.")
            .lowercase(),
          password: Yup.string()
            .min(4, "Password must be at least 4 characters.")
            .max(16, "Password must be at max 16 characters.")
            .required(),
          gender: Yup.string()
            .trim()
            .oneOf(["male", "female", "preferNotToSay"]),
          address: Yup.string().trim().required("Address is Required"),
          height: Yup.number().required("Height is required"),
          bloodgroup: Yup.string().oneOf([
            "A",
            "B",
            "B+",
            "A+",
            "A-",
            "O+",
            "O-",
            "AB+",
            "AB-",
          ]),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, getFieldProps, touched, errors, setFieldValue }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "500px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "2rem",
            }}
          >
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Sign Up
            </Typography>

            <FormControl>
              <TextField
                label="First Name"
                variant="outlined"
                {...getFieldProps("firstName")}
              />
              {touched.firstName && errors.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Last Name"
                variant="outlined"
                {...getFieldProps("lastName")}
              />
              {touched.lastName && errors.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Email"
                variant="outlined"
                {...getFieldProps("email")}
              />
              {touched.email && errors.email ? <div>{errors.email}</div> : null}
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

            <FormControl>
              <TextField
                label="Blood Group"
                variant="outlined"
                {...getFieldProps("bloodgroup")}
              />
              {touched.bloodgroup && errors.bloodgroup ? (
                <div>{errors.bloodgroup}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Address"
                variant="outlined"
                {...getFieldProps("address")}
              />
              {touched.address && errors.address ? (
                <div>{errors.address}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Height(in cm)"
                variant="outlined"
                {...getFieldProps("height")}
              />
              {touched.height && errors.height ? (
                <div>{errors.height}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onChange={() => {
                    setFieldValue("gender", "female");
                  }}
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  onChange={() => {
                    setFieldValue("gender", "male");
                  }}
                />
                <FormControlLabel
                  value="preferNotToSay"
                  control={<Radio />}
                  label="Prefer Not to say"
                  onChange={() => {
                    setFieldValue("gender", "preferNotToSay");
                  }}
                />
              </RadioGroup>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#05685e" }}
            >
              Submit
            </Button>
            <Link to="/login">
              <Typography style={{ textAlign: "center" }}>
                Already registered?{" "}
                <span style={{ color: "#05685e" }}>Login</span>
              </Typography>
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
