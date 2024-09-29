const {DataTypes} = require('sequelize');
const sequelize = require('../database')
const Task = require('./tasks')
const Student = require('./students')

const Activities = sequelize.define('Activities', {
    date:{
        type: DataTypes.DATE,
        allowNull: false
    },

    // Agendamento
    start_activitie: {
        type: DataTypes.TIME,
        allowNull: false
    },

    end_activitie: {
        type: DataTypes.TIME,
        allowNull: false
    },

    // Marcação de tempo do aluno durante a atividade (Opicional)
    beginning_activie: {
        type: DataTypes.TIME,
        allowNull: true
    },

    finish_activitie: {
        type: DataTypes.TIME,
        allowNull: true
    }



})

Activities.belongsTo(Task,{
    constraints: true,
    foreignKey: "taskId",
    allowNull: false
})

Activities.belongsTo(Student,{
    constraints: true,
    foreignKey: "studentId",
    allowNull: false
})

module.exports = Activities;