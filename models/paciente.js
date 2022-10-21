require('module-alias/register')

let {sequelize, Sequelize}  = require('@db')

const paciente = sequelize.define("paciente", {
    nome: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.STRING
    },
    rua: {
        type: Sequelize.TEXT
    },
    bairro: {
        type: Sequelize.TEXT
    },
    cidade: {
        type: Sequelize.TEXT
    },
    cidade: {
        type: Sequelize.TEXT
    },
    plano_saude: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
})

module.exports = paciente