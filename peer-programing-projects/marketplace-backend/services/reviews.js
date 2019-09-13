const express = require("express")
const fs = require("fs")

const router = express.Router()

router.get('/', (req, res) => {
  var buffer = fs.readFileSync("reviews.json");
  var content = buffer.toString()

  res.send(content)
})

router.get("/:id", (req, res) => {
  var buffer = fs.readFileSync("reviews.json")
  var content = buffer.toString()

  var reviewID = JSON.parse(content);
  var review = reviewID.find(x => x._id == req.params.id)
  if (!product)
    res.send("Cannot find product")
  else
    res.send(review)
})

router.post("/", (request, response) => {
  var newReview = request.body;

  var buffer = fs.readFileSync("reviews.json");
  var content = buffer.toString()
  var reviewsDB = JSON.parse(content)

  newReview.id = reviewsDB.length + 1
  newReview.elementId = reviewsDB.length + 1

  newReview.createdAt = new Date()

  reviewsDB.push(newReview)

  fs.writeFileSync("reviews.json", JSON.stringify(reviewsDB))

  response.send(reviewsDB)
})

router.delete("/:id", (req, res) => {
  var buffer = fs.readFileSync("reviews.json");
  var content = buffer.toString()
  var reviewsDB = JSON.parse(content)
  var newDb = reviewsDB.filter(x => x._id != req.params.id)
  fs.writeFileSync("reviews.json", JSON.stringify(newDb))

  res.send(newDb)
})

router.put("/:id", (req, res) => {
  var buffer = fs.readFileSync("reviews.json");
  var content = buffer.toString()
  var reviewsDB = JSON.parse(content)
  var newDb = reviewsDB.filter(x => x._id != req.params.id) //removing previous item
  var project = req.body;
  project_id = req.params.id;
  newDb.push(project) //adding new item 
  fs.writeFileSync("reviews.json", JSON.stringify(newDb))

  res.send(newDb)
})

module.exports = router


