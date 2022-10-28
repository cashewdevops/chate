module.exports = (aplication) =>{

    aplication.get('/login', (req, res) =>{
        aplication.controller.index.login(aplication, req, res)
    })

    aplication.post('/entrar', (req, res) =>{
        aplication.controller.index.entrar(aplication, req, res)
    })

    aplication.get('/painel', (req, res) => {
        aplication.controller.index.painel(aplication, req, res)
    })
    
}