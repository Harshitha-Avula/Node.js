const { Sequelize } = require('sequelize');
const sequelize= new Sequelize('employeeDetails','username','password',{
    dialect: 'sqlite',
    host: './dev.sqlite'
});

module.exports = sequelize;