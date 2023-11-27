// Model para a tabela??

const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    deadline: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Task