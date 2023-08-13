const Product = require('../Models/ProductModel');

const getAllProducts = async (req, res) => {
  try {
    const allproducts = await Product.find({});
    res.status(200).json({msg: 'Success on all the products', data: allproducts});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}

const postProduct = async (req, res) => {
  try {
    const { body } = req;
    const product = await Product.create(body);
    res.status(201).json({msg: 'Success product added successfully'});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}

module.exports = {
  postProduct,
  getAllProducts,
}

