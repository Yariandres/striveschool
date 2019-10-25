const express = require("express");
const User = require("../models/user");
const passport = require("passport");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    var user = await User.register(req.body, req.body.password)
    res.send(user)
  }
  catch (exx) {
    res.statusCode = 500;
    res.send(exx)
  }
})

module.exports = router;
