const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { category, featured, name, sort } = req.query;

  const queryObj = {};
  if (category) {
    queryObj.category = category;
  }

  if (featured) {
    queryObj.featured = featured;
  }

  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObj);

  if (sort) {
    const sortList = sort.replace(",", " ");
    apiData = apiData.sort(sortList);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 12;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const Products = await apiData;
  res.status(200).json({ Products });
};

const getProductbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { getAllProducts, getProductbyId };
