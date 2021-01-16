const express = require("express");
const router = express.Router();
let OrderController = require("../controllers/orderController");
let orderController = new OrderController();

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "hello" });
});

router.post("/order/create", orderController.create);

module.exports = router;
