const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8888;
app.use("/", (req, res) => {
  res.send("SERVER OWWWW");
});
app.listen(port, () => {
  console.log("Server running is the port" + port);
});
