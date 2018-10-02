const express = require("express");
const router = express.Router();
const userRouter = require("./user.routes");
const eventRouter = require("./events.routes");
const commentRouter = require("./comments.routes");
const guestRouter = require("./guest.routes");
const eventDetailRouter = require("./eventdetail.routes");

router.use("/guests", guestRouter);
router.use("/user", userRouter);
router.use("/events", eventRouter);
router.use("/eventdetail", eventDetailRouter);
router.use("/comments", commentRouter);



module.exports = router;