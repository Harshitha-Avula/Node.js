const { Model, DataTypes }= require('sequelize');
const sequelize=require('./database.js');
 
 class products extends Model {}
 
 products.init({
    name: {
        type: DataTypes.STRING
     },
    type:{
        type: DataTypes.STRING
     },
    cost:{
        type: DataTypes.NUMBER
     }
     
 },{
    sequelize,
    modelName: "products"
 });
 
 module.exports = products;