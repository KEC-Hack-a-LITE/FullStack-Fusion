const express = require("express")
const router = express.Router();
const auth = require("../controller/auth") // auth = login , signup
// object destructuring 
const {login, signup, HaSignup, HaLogin}= require("../controller/auth")

//login and signup
//export login and sign up
const UserModel= require("../model/User")
const HaUserModel= require("../model/HaUser")

router.post('/api/signup', signup  )
router.post('/api/signupHA', HaSignup)

router.post('/api/login', login )
router.post('/api/loginHA', HaLogin )

  module.exports = router;

// router.post("")