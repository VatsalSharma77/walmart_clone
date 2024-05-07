const mongoose = require("mongoose");

const connectDB = async (uri) => {
  console.log("Connecting to MongoDB...");
  return mongoose.connect(uri);
};

module.exports = connectDB;
