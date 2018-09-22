const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/event.ctrl");

router.get("/:id", ctrl.getOne);

module.exports = router;