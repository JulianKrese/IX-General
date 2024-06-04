const express = require("express");
const router = express.Router();


router.post("/login", (req, res) => {
  login(req, res);
});

router.post("/register", (req, res) => {
  register(req, res);
});

module.exports = router;