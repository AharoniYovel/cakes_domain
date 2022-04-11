const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "new version 27s 7778" });
})

module.exports = router;