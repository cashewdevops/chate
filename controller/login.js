require('module-alias/register')

var bcrypt = require('bcrypt')
var jwt = require("jsonwebtoken")
let user = require('@user')

require('dotenv').config()


module.exports.index = function (aplication, req, res) {

    res.render('home');
    
}

module.exports.cadastro = async function(aplication, req, res){

    let {cpf, password, nome} = req.body

    const saltRounds = 10;
    const hash2 = await bcrypt.hash(password, saltRounds);

   try {
    
       const usuario = await user.create({
           nome: nome,
           cpf: cpf,
           password: hash2,
           supervisor: 1
       })
 

    res.status(200).json({
        "mensage" : "Usuario Cadastrado com sucesso",
    })
    
   } catch (error) {

        res.status(500).json({
            "mensage" : "Erro em criar usuario",
        })

   }
    
    

}

module.exports.logar = async function(aplication, req, res){

    let {cpf, password} = req.body

    const usuario = await user.findAll({ where:{ cpf: cpf}})
    
    if(usuario.length != 0) {

        const result2 = await bcrypt.compare(password, usuario[0].password);
        

        if(result2){

            const secret = process.env.SECRET

            const token = jwt.sign({ id: usuario[0].id }, secret)

            res.status(200).json({msg: "Autenticação realizada com sucesso", token})
            

        }else{

            res.status(404).json({
                "mensagem" : "Usuario ou senha está errado",
            })

        }
       

    }else{


        res.status(404).json({
            "mensagem" : "Usuario ou senha está errado",
        })

    }
    
    



}