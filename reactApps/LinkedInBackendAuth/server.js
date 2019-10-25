const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRouter")
const auth = require("./auth")
const passport = require("passport")

//this could be your localhost mongodb address
const url = "mongodb+srv://yari_striveschool:tMJ6V66Wd8wyKsvA@linkedinback-gfzzk.mongodb.net/test?retryWrites=true&w=majority"
const connection = mongoose.connect(url, { useNewUrlParser: true })
connection.then(db => {
    console.log("Database up & running")
},
    err => {
        console.log(err)
    })

var server = express()
server.use(cors())
server.use(express.json()) //equal to body-parser
server.use(passport.initialize())

server.use("/users", userRouter)

server.get("/", (req, res) => {
    res.send("Hello World")
})

server.listen(3333, () => {
    console.log("Server is listening on port 3333")
})