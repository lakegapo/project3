const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/event.ctrl");

router.post("/", ctrl.createOne);
router.get("/", ctrl.getAll);
router.get("/:citystate/:category", ctrl.categoryGetAll);

module.exports = router;