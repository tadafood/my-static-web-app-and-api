const data = require('../shared/product-data');

module.exports = async function (context, req) {
  context.log("product-get called");

  try {
    const products = data.getProducts();
    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
