const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
console.log(`**************${process.env.NODE_ENV}**************`);
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
//console.log(process.env);
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello node api");
});

app.get("/blog", (req, res) => {
  res.send("hello blog my name is shravya");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("node api is running on the port 3000");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/Node-API?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
