const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: {
    type: String,
    enum: [
      "blonde",
      "stout",
      "pale ale",
      "ipa",
      "cider",
      "wheat beer",
      "other",
    ],
    required: true,
  },
  rating: { type: Number, min: 0, max: 5, required: true },
  isCraft: Boolean,
  price: Number,
  priceHH: Number,
  description: String,
  image: String,
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
    formattedAddress: String,
  },
  alcohol_level: Number,
  added_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
