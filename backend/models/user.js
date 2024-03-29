const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // cart:{[]}
});

module.exports = mongoose.model("User", userSchema);
