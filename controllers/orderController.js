const OrderRepository = require("../repositories/orderRepository");
const orderRepository = new OrderRepository();
class OrderController {
  constructor() {
  }

  async create(req, res, next) {
    let {
      fullName,
      address,
      mobile,
      pinCode,
      city,
      state,
      country,
    } = req.body.address;
    if (
      !fullName ||
      !address ||
      !mobile ||
      !pinCode ||
      !city ||
      !state ||
      !country
    ) {
      return res.status(400).json({
        error: "Invalid Params",
      });
    }

    //todo type check
    try {
      const order = await orderRepository.create(
        req.body.products,
        req.body.address
      );
      return res.json({ order });
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }
}

module.exports = OrderController;
