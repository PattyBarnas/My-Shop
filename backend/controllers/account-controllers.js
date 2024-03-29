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
    errors.email = "Email must not be empty, must include an @.";
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
        createdUser.password = hash;
        createdUser.save();
      });
    } catch (error) {}

    return res
      .status(201)
      .json({ user: createdUser, message: "User created", token: authToken });
  } catch (error) {
    next(error);
  }

  res.send("/");
};

const login = async (req, res, next) => {
  const userData = req.body;
  const isValidPassword = passwordValidate(req.body.password);
  const isValidEmail = validator.validate(userData.email);

  let errors = {};

  let user;

  try {
    user = await User.findOne({ email: userData.email });

    if (!isValidPassword) {
      errors.password = "Password must not be empty.";
    }

    if (!user) {
      errors.email =
        "User was not found. email must include an @ or not be empty.";
    }
    const match = await bcrypt.compare(userData.password, user.password);

    if (user && !match) {
      errors.password = "Password was incorrect, please try again.";
    }

    let authToken = jwt.sign(
      { firstName: user.firstName, email: user.email },
      "secret",
      {
        expiresIn: "1h",
      }
    );

    return res.status(201).json({
      user,
      message: "user login was successful.",
      token: authToken,
    });
  } catch (error) {}
  if (Object.keys(errors).length > 0) {
    return res.json({ message: "login failed, please try again", errors });
  }
};

exports.createUser = createUser;
exports.login = login;
