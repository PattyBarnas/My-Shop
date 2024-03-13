const User = require("../models/user");

const createUser = async (req, res, next) => {
  const userData = req.body;
  try {
    const user = await new User(userData);
    console.log(user);

    // Validation check if user exists by checking if email exists

    await user.save();
  } catch (error) {}

  res.send("/account/login");
};

exports.createUser = createUser;
