const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const UserModel = require("./model/User.js");
const HaUserModel = require("./model/HaUser.js");
const authRoutes = require("./routes/auth.js");
const handleServer = require("./middleware/handleServer.js");

const { MONGO_URL } = process.env;
mongoose.connect(MONGO_URL).then(() => console.log("Connected!"));

app.use(cors());
app.use(express.json()); // runs for each request
app.use(authRoutes);
app.use(handleServer);

app.listen(3000, () => {
  console.log("started");
});
