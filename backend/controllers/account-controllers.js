const { clear } = require("localforage");
const User = require("../models/user");
const validator = require("email-validator");
const { passwordValidate } = require("../util/validators");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUser = async (req, res, next) => {
  const userData = req.body;
  let errors = {};

  const isValidEmail = validator.validate(userData.email);
  const isValidPassword = passwordValidate(userData.password);

  if (!isValidEmail) {
    errors.email = "Invalid email.";
  } else {
    try {
      const exisitingUser = await User.findOne({ email: userData.email });

      if (exisitingUser) {
        errors.email = "Email already exists.";
      }
    } catch (error) {}
  }

  if (!isValidPassword) {
    errors.password = "Password must be atleast 6 characters long";
  }
  try {
    const createdUser = await new User(userData);

    let authToken = jwt.sign(
      { firstName: createdUser.firstName, email: createdUser.email },
      "secret",
      {
        expiresIn: "1h",
      }
    );

    if (Object.keys(errors).length > 0) {
      return res.json({ message: "Signing up failed.", errors });
    }

    try {
      bcrypt.hash(createdUser.password, saltRounds, async function (err, hash) {
        console.log(err, hash, "inisde fuinction", createdUser.password);
        createdUser.password = hash;

        await createdUser.save();
      });
    } catch (error) {}

    return res
      .status(201)
      .json({ user: createdUser, message: "User created", token: authToken });
  } catch (error) {
    next(error);
  }

  res.send("/account/login");
};

const login = async (req, res, next) => {
  const userData = body.req;
};

exports.createUser = createUser;
