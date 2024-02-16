const { array } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DoctorSchema = new Schema({
  name: {
    required: true,
    type: String,
    minlength: 3,
  },
  department: {
    required: true,
    type: String,
    enum: ["ent", "ortho", "neuro", "cardiology"],
  },
  nmc: {
    required: true,
    type: Number,
  },
  availabletime: {
    required: true,
    type: Object,
  },
});

const DoctorModel = mongoose.model("Doctor", DoctorSchema);

module.exports = DoctorModel;
