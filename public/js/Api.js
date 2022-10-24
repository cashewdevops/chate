let api = {
   async getListaConversas(){
        
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
    
       const response = await fetch("http://localhost:3000/conversa", requestOptions)

       return await response.json()
           
    },
    async entrada(){

        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
    
       const response = await fetch("http://localhost:3000/entrada", requestOptions)

       return await response.json()

    }
}