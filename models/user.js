require('module-alias/register')

let {sequelize, Sequelize}  = require('@db')


const user = sequelize.define('funcionario', {
    nome: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.TEXT
    },
    ativo:{
        type: Sequelize.TINYINT
    },
    supervisor:{
        type: Sequelize.TINYINT
    }
})



module.exports = user