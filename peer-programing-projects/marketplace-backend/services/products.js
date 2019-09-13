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

  var productsID = JSON.parse(content);
  var product = productsID.find(x => x._id == req.params.id)
  if (!product)
    res.send("Cannot find product")
  else
    res.send(product)
})

// GET PRODUCT REVIEWS
router.get("/:id/reviews", (req, res) => {
  var buffer = fs.readFileSync("reviews.json")
  var content = buffer.toString()
  var reviews = JSON.parse(content);

  res.send(reviews.filter(x => x.elementId == req.params.id))
})


router.post("/", (request, response) => {
  var newProduct = request.body;

  buffer = fs.readFileSync("products.json")
  var content = buffer.toString()
  var productsDB = JSON.parse(content)

  newProduct.id = productsDB.length + 1
  newProduct.createdAt = new Date()

  productsDB.push(newProduct)

  fs.writeFileSync("products.json", JSON.stringify(productsDB))

  response.send(productsDB)
})

// DELETE PRODUCT
router.delete("/:id", (req, res) => {
  var buffer = fs.readFileSync("products.json")
  var content = buffer.toString()
  var productsDB = JSON.parse(content)
  var newDB = productsDB.filter(x => x._id != req.params.id)

  res.send(newDB)
})

// UPDATE PRODUCT
router.put("/:id", (req, res) => {
  var buffer = fs.readFileSync("products.json")
  var content = buffer.toString()
  var productsDB = JSON.parse(content)

  // Removing previous item/product
  var previviousItem = productsDB.find(x => x._id == req.params.id)
  var newDB = productsDB.filter(x => x._id != req.params.id)
  var product = req.body
  product._id = req.params.id

  product.updatedAt = new Date()

  product.createdAt = previviousItem.createdAt

  // adding the new product
  newDB.push(product)

  fs.writeFileSync("products.json", JSON.stringify(newDB))

  res.send(newDB)
})

module.exports = router