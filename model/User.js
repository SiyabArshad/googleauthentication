const mongoose = require("mongoose");
const { Schema } = mongoose.model;
const UserSchema = new mongoose.Schema({
  id: {
   type: String,
  },
  name: {
   type: String,
  },
  email: {
   type: String,
  },
profile:{
    type:String,
    default:""
},
oncall:{
    type:Boolean,
    default:false
}
 },
);
const User = mongoose.model("User", UserSchema);
module.exports = User;