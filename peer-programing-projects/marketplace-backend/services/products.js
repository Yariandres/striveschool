const express = require("express")
const fs = require("fs")

const router = express.Router()

// GET ALL PRODUCTS FROM DB
router.get("/", (req, res) => {
  var buffer = fs.readFileSync("products.json")
  var content = buffer.toString()

  res.send(content);
})

// GET PRODUCT BY ID 
router.get("/:id", (req, res) => {
  var buffer = fs.readFileSync("products.json")
  var content = buffer.toString()

  var productID = JSON.parse(content);
  var product = productID.find(x => x.ID == req.params.id)
  if (!product)
    res.send("Cannot find product")
  else 
    res.send(product)
})

// GET PRODUCT 
router.get("/reviews/:id", (req, res) => {
  var buffer = fs.readFileSync("reviews.json")
  var content = buffer.toString()
  var reviews = JSON.parse(content);

  res.send(reviews.filter(x => x._id == req.params.id))
})

router.post("/", (request, response) => {
  var newProduct = request.body;

  buffer = fs.readFileSync("products.json")
  var content = buffer.toString()
  var productsDB = JSON.parse(content)

  productsDB.push(newProduct)

  fs.writeFileSync("products.json")
})
