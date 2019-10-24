const express = require("express");

var server = express();

server.get("/", (req, res) => {
  res.send("Hello world");
});

server.listen(3123, () => {
  console.log("server is running on 3123 ");
});