const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
var cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  if(req.method === 'OPTIONS'){
    res.header ("Acess-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({})
  }
  next()
  
  })
  const userRoutes = require ("./router/user")
  app.use("/user", userRoutes);
  

  app.use((req, res, next) => {
    const error = new Error("Not found, are you lost?");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

mongoose
  .connect("mongodb://localhost:27017/trashItUsers", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(err => {
    console.log("Error on start:" + err);
    process.exit(1);
  });

module.exports = app




