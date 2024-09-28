const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Course = require('./courses');

const Student = sequelize.define('Student', {
    
    cpf : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    registration: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

})

Student.belongsTo(Course, {
    constraint: true,
    foreignKey: "courseId"
})

module.exports = Student