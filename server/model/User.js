const mongoose = require('mongoose');
const HaUserModel = require('./HaUser');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  firstName: {
    required: true,
    type : String,
    minLength : "3"
  },
  lastName: {
    required: true,
    type : String,
    minLength : "3"
  },
  email :{
    required : true,
    type: String,
// custom validataion
 validate:{
  validator :  async function(requestValue){
let user = await mongoose.models.User.findOne({ email: requestValue})
if(user){
return false
}
return true
  },
  message: "Email already used"
 }

  },
  password: {
    required : true,
    type: String,
    
  },
  dob:{
  required:true,
  type: Date 
  },
  bloodgroup:{
    required:true,
    type: String
  },
  height:{
    required:true,
    type: Number
  },
  weight:{
    required: true,
    type:Number
  },
  address:{
    required: true,
    type: String
  },
  number:{
    required: true,
    type: String
  },
  gender:{
    required: true,
    type: String,
    enum: ["male", "female", "prefer not to say"]
  }

});

const UserModel = mongoose.model("User",UserSchema)

module.exports = UserModel
