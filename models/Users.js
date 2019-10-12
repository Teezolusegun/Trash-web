const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new userSchema({
  FirstName: {
    type: String,
    trim: true,
    required: true
  },
  LastName: {
    type: String,
    trim: true,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  Password: {
    type: String,
    require: true
  },
  PhoneNumber: {
    type: Number
  },
  isActive: {
    type: Boolean,
    default: true
  }
});
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
