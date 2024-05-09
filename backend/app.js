require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const user_routes = require("./routes/users");
const products_routes = require("./routes/products");
const errorHandler = require("./middlewares/errorHandler");


app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.json());
app.use(cors());
app.use("/api/users", user_routes);
app.use("/api/products", products_routes);

app.use(errorHandler);
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
