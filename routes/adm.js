require('module-alias/register')

let token = require("@token")

module.exports = (application) => {

    application.get('/adm', token, (req, res) => {
        application.controller.adm.index(application, req, res)
    })

    application.post('/conversa', (req, res) => {
        application.controller.adm.getConversas(application, req, res)
    })

    application.post('/entrada', (req, res) => {
        application.controller.adm.entrada(application, req, res)
    })

}