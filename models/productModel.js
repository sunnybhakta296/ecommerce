const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

class ProductModel {}
ProductSchema.loadClass(ProductModel);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
