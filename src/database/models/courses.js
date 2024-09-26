const {DataTypes } = require('sequelize');
const sequelize = require('../database');

const Course = sequelize.define('Curse', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoincrement: true,
        primaryKey: true
    },

    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

sequelize.sync({force:false})

module.exports = Course;