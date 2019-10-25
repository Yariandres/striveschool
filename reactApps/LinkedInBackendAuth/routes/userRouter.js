const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/signup", async (req, res) => {
  // cretae a new user => user.register
  try {
    var user = await User.register(req.body, req.body.password);
    res.send(user);
  }
  catch (exx) {
    res.statusCode = 500;
    res.send(exx);
  }
});

module.exports = router;
