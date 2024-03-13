const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account-controllers");

router.post("/signup", accountController.createUser);
// router.get("/login", productController.getProductById);

module.exports = router;
