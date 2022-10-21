require('module-alias/register')

let paciente = require("@paciente")
let conversa = require("@conversa")

module.exports.formulario = (application, req, res) => {
    res.render('formulario')
}

module.exports.entrar = async (application, req, res) => {

    const { nome, whatsapp, email } =  req.body

    try {

        let paci = await paciente.create({
            nome: nome,
            telefone: whatsapp,
            email: email
        })

        let conver = await conversa.create({
            status: 0,
            paciente_id: paci.id
        })
                
        res.status(200).json("sucesso")

    } catch (error) {
        res.status(500).json(error)
        
    }

}