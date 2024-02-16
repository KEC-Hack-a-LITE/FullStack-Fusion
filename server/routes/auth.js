const express = require("express");
const router = express.Router();
const auth = require("../controller/auth"); // auth = login , signup
// object destructuring
const {
  login,
  signup,
  HaSignup,
  HaLogin,
  addDoctor,
  getDoctor,
} = require("../controller/auth");

//login and signup
//export login and sign up
const UserModel = require("../model/User");
const HaUserModel = require("../model/HaUser");
const DoctorModel = require("../model/doctor");
// const DoctorModel=require("../model/Doctor")

router.post("/api/signup", signup);
router.post("/api/signupHA", HaSignup);

router.post("/api/login", login);
router.post("/api/loginHA", HaLogin);

router.post("/api/addDoctor", addDoctor);
router.get("/api/getDoctor", getDoctor);

module.exports = router;

// router.post("")
