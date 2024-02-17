const Product = require("../models/product");

const getProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find({});
  } catch (err) {
    console.log(err, "fetching products failed", 500);
    return next(err);
  }

  res.json({
    products: products.map((prod) => prod.toObject({ getters: true })),
  });
};

exports.getProducts = getProducts;
