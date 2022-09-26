
module.exports = (app) => {
    
    
    app.get('/', (req, res)=>{
        
        if(req.session.user){
            res.redirect('adm')
        }else{
            res.render('home')
        }


    })
    
    
    app.get('/logar', (req, res)=>{

        req.session.user = "pedro"

        console.log("LOGAR:" + req.session.user)

        res.redirect('adm')

    })



    
    app.get('/sair', (req, res)=>{
        
        
        delete req.session.user

        console.log("DELETADO: " + req.session.user)
        
        //res.send('deleando')

        res.redirect('/')

    })
    
}