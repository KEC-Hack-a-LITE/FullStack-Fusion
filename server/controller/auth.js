const UserModel = require("../model/User");
const HaUserModel = require("../model/HaUser");
const DoctorModel = require("../model/doctor");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Joi = require("joi");
const handleServer = require("../middleware/handleServer");

const signupSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
});

const signup = async function (req, res, next) {
  try {
    const { error: validationError } = signupSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (validationError) {
      let errors = validationError.details.map((el) => {
        return {
          message: el.message,
          field: el.context.key,
        };
      });

      console.log(validationError.message); // ValidationError
      if (validationError.name === "ValidationError") {
        return res.status(400).send({
          msg: "Bad Request",
          errors: errors,
        });
      }
    }

    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let user = await UserModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      dob: req.body.dob, // assuming other fields are also passed in the request body
      bloodgroup: req.body.bloodgroup,
      height: req.body.height,
      weight: req.body.weight,
      address: req.body.address,
      number: req.body.number,
      gender: req.body.gender,
    });

    res.send(user);
  } catch (err) {
    next(err);
  }
};

const signupHaSchema = Joi.object({
  name: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
});

const signupHa = async function (req, res, next) {
  try {
    const { error: validationError } = signupHaSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (validationError) {
      let errors = validationError.details.map((el) => {
        return {
          message: el.message,
          field: el.context.key,
        };
      });

      console.log(validationError.message); // ValidationError
      if (validationError.name === "ValidationError") {
        return res.status(400).send({
          msg: "Bad Request",
          errors: errors,
        });
      }
    }

    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let user = await HaUserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    res.send(user);
  } catch (err) {
    next(err);
  }
};

const loginSchema = Joi.object({
  password: Joi.string().alphanum().min(8).max(30).required(),
  email: Joi.string().email().required(),
});

const login = async function (req, res) {
  //let hashedPassword =await bcrypt.compare(req.body.password, hash, function(err, result) {
  // result == true
  //});
  // let hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    // check if email exist in database
    // compare hashed password
    const { error: err } = loginSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (err) {
      let errors = err.details.map((el) => {
        return {
          message: el.message,
          field: el.context.key,
        };
      });

      console.log(err.message); // ValidationError
      if (err.name === "ValidationError") {
        return res.status(400).send({
          msg: "Bad Request",
          errors: errors,
        });
      }
    }

    let user = await UserModel.findOne({ email: req.body.email }).select(
      "+password"
    );
    //link mongoose model

    if (user) {
      user = user.toObject();

      let hashedPassword = user.password;
      delete user.password;
      let matched = await bcrypt.compare(req.body.password, hashedPassword);

      const SECRET_KEY = "shhhhh";
      var token = jwt.sign(user, SECRET_KEY);

      if (matched) {
        return res.send({
          user: user,
          token: token,
        });
      }
    }
    return res.status(401).send("invalid credentials");
  } catch (err) {
    next(err);
  }
};

const HaLoginSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
});

const HaLogin = async function (req, res, next) {
  try {
    const { error: err } = HaLoginSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (err) {
      let errors = err.details.map((el) => {
        return {
          message: el.message,
          field: el.context.key,
        };
      });

      console.log(err.message); // ValidationError
      if (err.name === "ValidationError") {
        return res.status(400).send({
          msg: "Bad Request",
          errors: errors,
        });
      }
    }

    let user = await HaUserModel.findOne({ email: req.body.email }).select(
      "+password"
    );

    if (user) {
      let matched = await bcrypt.compare(req.body.password, user.password);

      if (matched) {
        // If passwords match, generate JWT token
        const SECRET_KEY = "shhhhh";
        const token = jwt.sign(
          { email: user.email, _id: user._id },
          SECRET_KEY
        );

        return res.send({
          user: { email: user.email, _id: user._id }, // Sending only necessary information
          token: token,
        });
      }
    }

    return res.status(401).send("Invalid credentials");
  } catch (err) {
    next(err);
  }
};

const doctorSchema = Joi.object({
  name: Joi.string().min(3).required(),
  department: Joi.string().required(),
  nmc: Joi.number().required(),
  availabletime: Joi.object().required(),
});

const addDoctor = async function (req, res, next) {
  try {
    const { error: validationError } = doctorSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (validationError) {
      let errors = validationError.details.map((el) => {
        return {
          message: el.message,
          field: el.context.key,
        };
      });

      console.log(validationError.message); // ValidationError
      if (validationError.name === "ValidationError") {
        return res.status(400).send({
          msg: "Bad Request",
          errors: errors,
        });
      }
    }

    let doctor = await DoctorModel.create({
      name: req.body.name,
      department: req.body.department,
      nmc: req.body.nmc,
      availabletime: req.body.availabletime,
    });

    res.send(doctor);
  } catch (err) {
    next(err);
  }
};

const getDoctor = async function (req, res, next) {
  try {
    const department = req.body.department; // Assuming department is passed as a parameter

    // Retrieve doctors from the database based on department
    const doctors = await DoctorModel.find({ department });

    if (!doctors || doctors == null) {
      return res.status(404).send({
        msg: "Doctors not found for the given department",
      });
    }

    res.status(200).send(doctors);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login: login,
  signup: signup,
  HaSignup: signupHa,
  HaLogin: HaLogin,
  addDoctor: addDoctor,
  getDoctor: getDoctor,
};
