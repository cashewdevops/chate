require('module-alias/register')

let {sequelize, Sequelize}  = require('@db')

const conversa = sequelize.define("conversa", {
    status: {
        type: Sequelize.INTEGER            
    },
    paciente_id: {
        type: Sequelize.INTEGER            
    },
    funcionario_id: {
        type: Sequelize.INTEGER            
    }
})

module.exports = conversa