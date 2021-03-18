const { Sequelize } = require('sequelize');
const sequelize= new Sequelize('namePhone','username','password',{
    dialect: 'sqlite',
    host: './dev.sqlite'
});

module.exports = sequelize;