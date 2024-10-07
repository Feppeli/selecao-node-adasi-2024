const { Sequelize } = require('sequelize')
require('dotenv').config();

const db = process.env.DATABASE
const user = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD

// lembre-se de configurar as variáveis de ambiente para que se adequem com o seu banco de dados
const sequelize = new Sequelize(db, user, password,{
    host: 'localhost',
    dialect: 'postgres',
});


sequelize.sync({force: false})
module.exports = sequelize