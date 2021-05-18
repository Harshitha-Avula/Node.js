const Product = require('./products');
const sequelize = require('./database')

sequelize.sync().then(() => console.log('db is ready'))

module.exports = {

async getAllProduct()  {
  const product = await Product.findAll();
  if(product){
    return product
  }
  return "Error fetching products from db"
},

async createProduct (product) {
  console.log('products inserted')
  console.log(product)
  const body = JSON.parse(product)
  let result = await Product.create(body);
  // console.log(result)
  if(result) {
    return {
      data: body,
      message: "Product successfully created!"
    };
  }
return "Error creating new product"

},


async getProductByName(name)  {
  let product = await Product.findOne(name);
  if(product) return product;
  return "Error fetching product from db";
},

async deleteProduct(id) {
  const product  = await Product.destroy({where: {id:id}})
  return "product deleted"
}
};