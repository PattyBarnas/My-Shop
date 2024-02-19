const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controllers");

router.get("/", productController.getProducts);
router.get("/:prodId", productController.getProductById);

module.exports = router;
