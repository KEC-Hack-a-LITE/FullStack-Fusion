const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const HaUserSchema = new Schema({
  name: {
    required: true,
    type: String,
    minLength: "3",
  },
  email: {
    required: true,
    type: String,
    // custom validataion
    validate: {
      validator: async function (requestValue) {
        let user = await mongoose.models.User.findOne({ email: requestValue });
        if (user) {
          return false;
        }
        return true;
      },
      message: "Email already used",
    },
  },
  password: {
    required: true,
    type: String,
  },
});

const HaUserModel = mongoose.model("HaUser", HaUserSchema);

module.exports = HaUserModel;
