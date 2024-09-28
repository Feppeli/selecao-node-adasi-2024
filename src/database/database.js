const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('Adasi_test', 'postgres', 'root',{
    host: 'localhost',
    dialect: 'postgres',
});


sequelize.sync({force: false})
module.exports = sequelize