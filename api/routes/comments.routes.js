const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/comment.ctrl");

router.post("/", ctrl.createOne);
router.get("/", ctrl.getAll);

module.exports = router;