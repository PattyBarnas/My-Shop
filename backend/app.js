const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const productRoutes = require("./routes/product");
const mongoose = require("mongoose");

const uri = "mongodb+srv://pbarnas:store123@my-store.lzs7qfq.mongodb.net/shop";

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/products", productRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

mongoose
  .connect(uri)
  .then(() => {
    app.listen(8080, () => console.log("Port 8080"));
  })
  .catch((err) => {
    console.log(err);
  });
