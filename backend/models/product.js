const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  image: { type: String },
  title: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
