const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  id: { type: ObjectId },
  fullName: { type: String },
  birthday: { type: String },
  gender: { type: String },
  department: { type: String },
  noodles: { type: Array },
  role: { type: Number },
  password: { type: String },
  img: { type: String },
});

module.exports = mongoose.model("user", userSchema);
