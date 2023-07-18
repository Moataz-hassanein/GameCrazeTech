const Product = require("../models/productModel");
const { isValidId, resourceNotFound } = require('../middleware/errorHandlers');
const { successHandler } = require('../middleware/successHandler');


exports.getAllProducts = async (req, res, next) => {
    try {
      const products = await Product.find();
  
      successHandler(res, 200, products)
    } catch (error) {
      next(error);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
      isValidId(req);
      const product = await Product.findById(req.params.id);
      resourceNotFound(product, 'product', 'get');
      successHandler(res, 200, product);
    } catch (error) {
      next(error);
    }
  };
  
  