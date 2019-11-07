const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/Users");

//the signup route
router.post("/signup", (req, res, next) => {
  User.find({ Email: req.body.Email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail already exist"
        });
      } else {
        bcrypt.hash(req.body.Password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              FullName: req.body.FullName,
              Address: req.body.Address,
              CompanyName: req.body.CompanyName,
              PhoneNumber: req.body.PhoneNumber,
              Email: req.body.Email,
              Password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User Created",
                  saveduser: user
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

// the login route to signin
router.post("/login", (req, res, next) => {
  User.find({ Email: req.body.Email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "no user found"
        });
      }
      bcrypt.compare(req.body.Password, user[0].Password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "incorrect password"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              isActive: user[0].isActive,
              userId: user[0]._id,
              name: user[0].fullName
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Good to go",
            token: token
          });
        }
        res.status(401).json({
          message: "wrong password"
        });
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// deleting user with id
router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(user => {})
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
