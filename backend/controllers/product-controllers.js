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

const getProductById = async (req, res, next) => {
  let product;
  try {
    product = await Product.findById(req.params.prodId);
  } catch (error) {
    return next(error);
  }
  res.json({ product });
};

exports.getProducts = getProducts;
exports.getProductById = getProductById;
