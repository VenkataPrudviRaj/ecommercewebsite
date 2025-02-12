const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopping_app1', 'root', 'prudviraj@2003', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
