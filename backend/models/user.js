const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  FirstName: { type: String },
  lastName: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  // cart:{[]}
});

module.exports = mongoose.model("User", userSchema);
