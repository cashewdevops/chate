require('module-alias/register')

let token = require("@token")

module.exports = (application) => {

    application.get('/adm', token, (req, res)=>{
        application.controller.adm.index(application, req, res)
    })

}