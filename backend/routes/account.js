const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account-controllers");

router.post("/signup", accountController.createUser);

router.post("/login", accountController.login);

module.exports = router;
