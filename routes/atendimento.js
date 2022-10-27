module.exports = (application) =>{

    application.get('/login', (req, res) =>{
        application.controller.paciente.login(application, req, res)
    })

    application.post('/entrar', (req, res) =>{
        application.controller.atendimento.entrar(application, req, res)
    })
}