const { Model, DataTypes }= require('sequelize');
const sequelize=require('./database');
 
 class users extends Model {}
 
 users.init({
    name: {
         type: DataTypes.STRING
     },
     phone:{
        type: DataTypes.STRING
     },
 },{
     sequelize,
     modelName: "users"
 });
 
 module.exports=users;