const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Constant = require("../constants");

const statusEnum = [
  Constant.new,
  Constant.shipped,
  Constant.cancelled,
  Constant.delivered,
];

const OrderSchema = new Schema({
  userId: { type: Schema.ObjectId, ref: "User" },
  status: { type: String, enum: statusEnum, required: true },
  product: {
    id: { type: Schema.ObjectId, ref: "Product" },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  shippingAddress: {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: Number, required: true },
    pinCode: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
});

class OrderModel {}
OrderSchema.loadClass(OrderModel);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
