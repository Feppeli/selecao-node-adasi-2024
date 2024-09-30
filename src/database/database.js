const { Sequelize } = require('sequelize')
require('dotenv').config();

const db = process.env.DATABASE
const user = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD

const sequelize = new Sequelize(db, user, password,{
    host: 'localhost',
    dialect: 'postgres',
});


sequelize.sync({force: false})
module.exports = sequelize