module.exports = (aplication) => {

  aplication.get('/', (req, res) => {

    aplication.controller.login.index(aplication, req, res)

  })

}
