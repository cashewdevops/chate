module.exports = (application) =>{

    application.get('/atendimento', (req, res) =>{
        application.controller.atendimento.formulario(application, req, res)
    })

    application.post('/entrar', (req, res) =>{
        application.controller.atendimento.entrar(application, req, res)
    })
}