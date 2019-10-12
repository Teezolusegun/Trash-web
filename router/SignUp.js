/*
 * Sign up
 */

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.post("/signup", (req, res) => {
  const { body } = req;
  const { password } = body;
  let { email } = body;
  let { username } = body;

  if (!username) {
    return res.send({
      success: false,
      message: "Error: Username cannot be blank."
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: "Error: Email cannot be blank."
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error: Password cannot be blank."
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  User.find(
    {
      email: email
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "Error: Account already exist."
        });
      }

      // Save the new user
      const newUser = new User();

      newUser.username = username;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error"
          });
        }
        return res.send({
          success: true,
          message: "Signed up"
        });
      });
    }
  );
});

module.exports = app;
