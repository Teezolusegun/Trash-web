const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  FullName: {
    type: String,
    required: true
  },
  Address:{
    type:String,
    required:true
  },
  CompanyName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    require: true,
    unique: true
  },
  Password: { type: String, required: true },
  PhoneNumber: {
    type: Number
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("User", userSchema);

// const userSchema = mongoose.Schema({
//   FirstName: {
//     type: String,
//     trim: true,
//     required: true
//   },
//   LastName: {
//     type: String,
//     trim: true,
//     required: true
//   },
//   Email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true
//   },
//   Password: {
//     type: String,
//     require: true
//   },
//   PhoneNumber: {
//     type: Number
//   },
//   isActive: {
//     type: Boolean,
//     default: true
//   }
// });
