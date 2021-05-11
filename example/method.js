const Product = require('./products');
const sequelize = require('./database')

sequelize.sync().then(() => console.log('db is ready'))


module.exports = {

async getAllProduct()  {
  let product = await Product.findAll();
  if(product)  return product;
  return "Error fetching products from db"
},

async createProduct (product) {
  console.log(product)
  let result = await Product.create(product);
  console.log(result)
  if(result) {
    return {
      data: product,
      message: "Product successfully created!"
    };
  }
return "Error creating new product"

},


async getProductById(productId)  {
  let product = await Product.findOne(productId);
  if(product) return product;
  return "Error fetching product from db";
},
};