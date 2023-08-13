const express = require('express');
const { postProduct } = require('../Controllers/productController');
var router = express.Router();

router.route('/', postProduct);

module.exports = router;
