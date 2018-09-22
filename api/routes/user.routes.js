const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/user.ctrl");

router.get("/:id", ctrl.getOne);
router.get("/", ctrl.getAll);
router.post("/", ctrl.createOne);

module.exports = router;