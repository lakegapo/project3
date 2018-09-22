const express = require("express");
const router = express.Router();
const userRouter = require("./user.routes");
const eventRouter = require("./events.routes");
const eventDetailRouter = require("./eventdetail.routes");

router.use("/user", userRouter);
router.use("/events", eventRouter);
router.use("/eventdetail", eventDetailRouter);

module.exports = router;