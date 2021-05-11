const methods = require('./method')


module.exports.getAllproducts = async() => {
    const product = await methods.getAllProduct()
    return product
}


module.exports.createProduct = async(products) => {
    console.log(products.body)
    const product = await methods.createProduct(products.body)
    return product
}


module.exports.getProductbyId = async(productId) => {
    const product = await methods.getProductById(productId)
    return product
}