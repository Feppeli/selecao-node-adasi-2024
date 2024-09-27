const {DataTypes } = require('sequelize');
const sequelize = require('../database');

const Course = sequelize.define('Course', {
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

sequelize.sync({force:false})

module.exports = Course;