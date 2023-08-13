const express = require('express');
const { postProduct, getAllProducts, getProduct } = require('../Controllers/productController');
var router = express.Router();

router.route('/').get(getAllProducts).post(postProduct)
router.route('/:id').get(getProduct)

module.exports = router;
