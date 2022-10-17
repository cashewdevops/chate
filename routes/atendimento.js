module.exports = (application) =>{

    application.get('/atendimento', (req, res) =>{
        application.controller.atendimento.formulario(application, req, res)
    })
}