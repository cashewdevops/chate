
require('module-alias/register')


module.exports.login = (application, req, res) => {
    res.render('login')
}

module.exports.entrar = async (application, req, res) => {

    const connection = application.config.db()

    const { nome, whatsapp, email } =  req.body

    try {

        const query = `INSERT INTO pacientes (nome, telefone, email) VALUES ('${nome}', '${whatsapp}', '${email}')`

        connection.query(query, (error, results, fields)=>{
           
                try {

                    const query = `INSERT INTO conversas (status, paciente_id)VALUES('${0}', '${results.insertId}')`
                    connection.query(query, (error, results, fields) => {
                        res.status(200).json('sucesso')
                    })
                    
                } catch (error) {
                    
                    res.status(500).json({msg: error, error})

                }
           

        })

    } catch (error) {
        res.status(500).json(error)
        
    }

}