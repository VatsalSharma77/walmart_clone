const express = require("express");
const router = express.Router();

const { getAllProducts, getProductbyId } = require("../controllers/products");


router.route('/').get(getAllProducts);
router.route('/:id').get(getProductbyId);

module.exports = router;