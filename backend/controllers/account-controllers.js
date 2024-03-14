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

  if (!isValidEmail) {
    errors.email = "Invalid email.";
  } else {
    try {
      const exisitingUser = await User.findOne({ email: userData.email });

      if (exisitingUser) {
        errors.email = "Email already exists.";
        return res.status(401).send("email already exists");
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

    await createdUser.save();
    return res
      .status(201)
      .json({ user: createdUser, message: "User created", token: authToken });
  } catch (error) {
    next(error);
  }

  if (Object.keys(errors).length > 0) {
    return res.json({ message: "Authentication failed.", errors });
  }

  res.send("/account/login");
};

exports.createUser = createUser;
