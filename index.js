const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
var cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/trashItUsers", { useNewUrlParser: true })
  .then(() => {
    console.log("saved");
  })
  .catch(err => {
    console.log("Error on start:" + err);
    process.exit(1);
  });
app.use(cors());
app.use(bodyParser.json());

const SignInRoute = require("./router/SignIn");
const SignUpRoute = require("./router/SignUp");

//routes to product and order
app.use("/SignUp", SignUpRoute);
app.use("/SignIn", SignInRoute);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
