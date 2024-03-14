const { clear } = require("localforage");
const User = require("../models/user");
const validator = require("email-validator");
const { passwordValidate } = require("../util/validators");
const jwt = require("jsonwebtoken");

const createUser = async (req, res, next) => {
  const userData = req.body;
  const errors = {};
  const isValidEmail = validator.validate(userData.email);
  const isValidPassword = passwordValidate(userData.password);
  const exisitingUser = await User.findOne({ email: userData.email });
  let user;

  try {
    if (!isValidEmail) {
      console.log("invalid");
      errors.email = "Invalid email.";
      res.status(401).json({ errors });
    } else {
      if (exisitingUser) {
        errors.email = "Email already exists.";
        res.json({ error });
      }
    }

    if (!isValidPassword) {
      errors.password = "Password must be atleast 6 characters long";
      res.json({ error });
    }

    try {
      user = await new User(userData);
      let token = jwt.sign({ token: userData.email }, "secret", {
        expiresIn: "1h",
      });
      console.log(token);
      await user.save();

      res.send({ token });
    } catch (error) {
      errors.error = "Failed to save user, please try again.";
    }

    if (Object.keys(errors).length > 0) {
      res.send("Authentication failed.", { errors });
    }
  } catch (error) {}

  res.send("/account/login");
};

exports.createUser = createUser;
