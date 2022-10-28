require('module-alias/register')

var bcrypt = require('bcrypt')
var jwt = require("jsonwebtoken")


require('dotenv').config()

module.exports.index = (aplication, req, res) => {

    res.render('adm')
    
}

module.exports.getConversas = async (aplication, req, res) => {


        try {
            
            const connection = aplication.config.db()
            const query = `SELECT COUNT(C.status) as entrada FROM conversas as C JOIN pacientes as P ON C.paciente_id = P.id WHERE C.status = 0`
            connection.query(query, (error, results, fields)=>{
                if(!error){
                    res.status(200).json(results)
                }else{
                    console.log(results)
                }
            })            

        } catch (error) {

            res.status(500).json({
                status: "erro", 
                error
            })
            
        }


}

module.exports.entrada = (aplication, req, res) => {
    
    const connection = aplication.config.db()
    const query = `SELECT * FROM conversas as C JOIN pacientes as P on C.paciente_id = P.id`
    connection.query(query, (error, results, fields)=>{
        if(!error){
            res.status(200).json(results)
        }else{
            res.status(500).json(error)
        }
    })
}


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
           supervisor: 1,
           ativo: 1,
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

    const connection = aplication.config.db()

    let {cpf, password} = req.body

    let query = `SELECT * FROM funcionarios as f WHERE f.cpf = ${cpf}`

    connection.query(query, async (error, results, fields)=>{
        if(!error){
                if(results.length != 0){
                    let usuario = results[0]
                    const result2 = await bcrypt.compare(password, usuario.password);
                    if(result2){
                        const secret = process.env.SECRET
                        const token = jwt.sign({ id: usuario.id }, secret)
                        res.cookie("token", token).redirect("/adm")
                    }else{
                        res.redirect("/")
                    }
            }else{
        
                res.status(404).json({
                    "mensagem" : "Usuario ou senha está errado",
                })
            }

        }else{
            console.log(error)
        }

    })


}

module.exports.sair = function(aplication, req, res){
    
    res.clearCookie("token");
    res.redirect("/")
}