const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
  _id: {
    type:String,
    required:true
  },
  firstname: {
    type: String,
    required:true
  },
  lastname: {
    type:String,
    required:true
  },
  middlename: {
    type:String,
    required:true
  },
  email: {
    type:String,
    unique:true,
    lowercase:true,
    required:true
  },
  address: {
    type:String,
    required:true
  },
  phone: {
    type:String,
    required:true
  },
  hash_password: {
    type:String,
    required:true
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

userSchema.virtual('fullname').get(function(){
  return `${this.firstname} ${this.middlename} ${this.lastname}`;
});

userSchema.virtual('password')
.set(function(password) {
  this.hash_password =  bcryptjs.hashSync(password, 11);
});

module.exports = mongoose.model("User", userSchema);
