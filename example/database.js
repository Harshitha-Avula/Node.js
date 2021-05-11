const { Sequelize } = require('sequelize');
const sequelize= new Sequelize('productdetails','username','password',{
    dialect: 'sqlite',
    host: './dev.sqlite'
});


module.exports = sequelize