const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  brand : {
    type: String,
  },
  amount: {
    type: Number,
    default: 1,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Mobiles",
        "Grocery",
        "Books",
        "Clothes",
        "Footwear",
        "Sports",
        "Furniture",
        "Appliances",
        "Home",
        "Beauty",
        "Jewellery",
        "Toys",
        "Music",
        "Men",
        "Women",
        "Kids",
      ],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
