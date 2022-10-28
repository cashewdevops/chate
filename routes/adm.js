require('module-alias/register')

let token = require("@token")

module.exports = (aplication) => {

    aplication.get('/', (req, res) => {

        aplication.controller.adm.index(aplication, req, res)
    
      })
    
    
      aplication.post('/logar', (req, res) => {
    
        aplication.controller.adm.logar(aplication, req, res)
      
      })
    
    
      aplication.post('/cadastrar', (req, res) => {
    
        aplication.controller.adm.cadastro(aplication, req, res)
    
      })
      
      aplication.get('/sair', (req, res) => {
    
        aplication.controller.adm.sair(aplication, req, res)
    
      })
    

    aplication.get('/adm', token, (req, res) => {
        aplication.controller.adm.index(aplication, req, res)
    })

    aplication.post('/conversa', (req, res) => {
        aplication.controller.adm.getConversas(aplication, req, res)
    })

    aplication.post('/entrada', (req, res) => {
        aplication.controller.adm.entrada(aplication, req, res)
    })

}