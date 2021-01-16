const Order = require("../models/orderModel");
class OrderRepository {
  constructor() {}

  async create(products, address) {
    for (const item of products) {
      const order = new Order();
      order.product = item;
      order.shippingAddress = address;
      await order.save();
    }

    return "Ordered Successfull"
  }
}

module.exports = OrderRepository;
