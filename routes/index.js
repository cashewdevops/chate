require('module-alias/register')

let token = require("@token")

module.exports = (aplication) => {

  aplication.get('/login', (req, res) => {

    aplication.controller.login.index(aplication, req, res)

  })


  aplication.post('/logar', (req, res) => {

    aplication.controller.login.logar(aplication, req, res)
  
  })


  aplication.post('/cadastrar', (req, res) => {

    aplication.controller.login.cadastro(aplication, req, res)

  })

}
