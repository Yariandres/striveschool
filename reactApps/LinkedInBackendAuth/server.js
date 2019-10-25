const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");

const url = "mongodb+srv://yari_striveschool:tMJ6V66Wd8wyKsvA@linkedinback-gfzzk.mongodb.net/test?retryWrites=true&w=majority"
const connection = mongoose.connect(url, { useUnifiedTopology: true });

// check if ther is any errors connecting to the DB
connection.then(db => {
  console.log("Database up and Running")
},
  err => {
    console.log(err);
  }
);

var server = express();
server.use(cors());
server.use(express.json());

server.use("/users", userRouter);

server.get("/", (req, res) => {
  res.send("You are connected to the DB and server is running!");
});

var port = 3333;
server.listen(port, () => {
  console.log(`Server is running on ${port}`)
});