const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Task = sequelize.define('Task', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Task;