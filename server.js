const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node api");
});

app.listen(3000, () => {
  console.log("node api is running on the port 3000");
});
