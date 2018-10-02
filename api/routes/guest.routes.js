const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/guest.ctrl");

router.get("/:id", ctrl.getAllPerEvent);
router.post("/", ctrl.createOne);

module.exports = router;