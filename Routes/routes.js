const express = require('express');
const { postProduct, getAllProducts } = require('../Controllers/productController');
var router = express.Router();

router.route('/').get(getAllProducts).post(postProduct)

module.exports = router;
