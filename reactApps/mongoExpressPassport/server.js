const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

const connection = mongoose.connect(config.mongoUrl, { useNewUrlParse: true })
connection.then(db => {
  console.log("database connected")
},
  err => console.log(err)
);

var server = express();

server.get("/", (req, res) => {
  res.send("Hello world");
});

server.listen(3123, () => {
  console.log("server is running on 3123 ");
});