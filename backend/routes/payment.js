const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/payment-controller");

router.get("/secret", paymentController.getPaymentIntent);

module.exports = router;
