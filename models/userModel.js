const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: false, lowercase: true },
});

class UserModel {}
UserSchema.loadClass(UserModel);
const User = mongoose.model("User", UserSchema);
module.exports = User;
