require('module-alias/register')

// let Conversa = require("@conversa")
// let Paciente = require("@paciente")

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