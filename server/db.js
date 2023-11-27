
//Configurando o Sequelize e a conexao com o Db

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

module.exports = sequelize