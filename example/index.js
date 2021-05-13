const express= require('express');
const methods = require('./method')
 
const app=express();
app.use(express.json());
 
module.exports.getAllproducts = async() => {
    console.log("getall products")
    const product = await methods.getAllProduct()
    return formatResponse(200,product)
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
 
const formatResponse = function(statusCode, body) {
    const response = {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        isBase64Encoded: false,
        body: JSON.stringify(body)
    };
    return response;
};
 
app.listen(3000, () => {
    console.log("App is running");
});