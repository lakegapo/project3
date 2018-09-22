const express = require("express");
const router = express.Router();
const userRouter = require("./user.routes");
const eventRouter = require("./events.routes");

router.use("/user", userRouter);
router.use("/events", eventRouter);

module.exports = router;