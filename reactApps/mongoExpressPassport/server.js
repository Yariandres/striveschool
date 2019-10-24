const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRouter")
const passport = require("passport")
const cors = require("cors")

const connection = mongoose.connect("mongodb+srv://yari_striveschool:tMJ6V66Wd8wyKsvA@cluster0-gfzzk.azure.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
connection.then(db => {
  console.log("database connected")
},
  err => { console.log(err) }
)

var server = express()
server.use(cors())
server.use(express.json())
server.use(passport.initialize())

server.use("/users", userRouter)
server.get("/", (req, res) => {
  res.send("Hello World")
})

server.listen(3123, () => {
  console.log("server is running on 3123")
})