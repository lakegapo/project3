const express = require("express");
const router = express.Router();

router.get("/:location/:category", function (req, res) {
  res.json({title: "Sample Title", description: "Sample Description", date: "Sample Date"})
});