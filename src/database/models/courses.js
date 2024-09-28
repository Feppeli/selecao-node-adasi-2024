const {DataTypes } = require('sequelize');
const sequelize = require('../database');

const Course = sequelize.define('Course', {
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Course;