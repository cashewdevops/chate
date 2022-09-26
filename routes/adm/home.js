
let auth = require('../../middleware/auth.js')

module.exports = (app) => {

    app.get('/adm', auth, (req, res)=>{

        console.log("LOGADO ADM: " + req.session.user)

        res.send('home')
    })
    
}