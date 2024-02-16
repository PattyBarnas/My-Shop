const express = require("express");
const router = express.Router();
const { getAll } = require("../data/products");

router.get("/", async (req, res, next) => {
  try {
    const products = await getAll();

    res.json({ products: products });
  } catch (error) {
    console.log("lol");
    next(error);
  }
});

module.exports = router;
