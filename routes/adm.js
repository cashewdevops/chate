require('module-alias/register')

module.exports = (application) => {

    application.get('/adm', (req, res)=>{
        application.controller.adm.index(application, req, res)
    })

}