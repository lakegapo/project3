const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/comment.ctrl");

router.get("/:id", ctrl.getAll);
router.post("/", ctrl.createOne);

module.exports = router;