let cliente = {
    
    formId: document.getElementById("form-entrar-fila"),
    body:document.querySelector(".card-body"),

    init(){

        if(!localStorage.getItem("atendimento")){

            setTimeout(() => {

                let loadingInicial = document.querySelector(".loading-inicial")
    
                loadingInicial.classList.remove("loading-inicial")
                loadingInicial.classList.add("ocultar-loading")
                this.body.innerHTML = ""
    
                let ocultarLoading = document.querySelector(".ocultar-loading")
                
                ocultarLoading.addEventListener("animationend", (event)=>{
                    
                    if(event.animationName == "ocultar-loading"){
    
                        ocultarLoading.classList.remove("ocultar-loading")
                        ocultarLoading.classList.add("expandir-formulario")
    
                        this.body.innerHTML = `
                                
                            <div class="titulo">Antes de falar com um dos nossos colaboradores, peço que preencha os seguintes capos.</div>
                            <div class="campos" id="campos-nome">
                                <label>Nome</label><br>
                                <input type="text" id="nome">
                            </div>
                            <div class="campos" id="campos-whatsapp">
                                <label>Whatsapp</label><br>
                                <input type="text" id="whatsapp">
                            </div>
                            <div class="campos" id="campos-email">
                                <label>Email</label><br>
                                <input type="text" id="email">
                            </div>
                            <button onclick="cliente.entrar(this)" id="entrar">Entrar</button>
    
                            `
    
                        }
                    
                })
                
                
            }, 1000);
            
        }else{

            let loading = document.getElementsByClassName("loading-inicial")[0]

            loading.classList.remove("loading-inicial")
            
            this.chate(loading)
            
        }
       

    },
   async entrar(e){

        let formulario = document.querySelector(".expandir-formulario")

        e.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`

        let nome = document.getElementById("nome")
        let whatsapp = document.getElementById("whatsapp")
        let email = document.getElementById("email")

        if(nome.value == ""){
            this.alerta()
            e.innerHTML = "Entrar"
        }else if(whatsapp.value == ""){
            this.alerta()
            e.innerHTML = "Entrar"
        }else if(email.value == ""){
            this.alerta()
            e.innerHTML = "Entrar"
        }else{

            let requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                
                body: JSON.stringify({
                    nome: nome.value,
                    whatsapp: whatsapp.value,
                    email: email.value
                })
            }
    
            let response = await fetch("/entrar",requestOptions)
            let result = await response.json()

            setTimeout(() => {
    
                formulario.classList.remove("expandir-formulario")
                formulario.classList.add("entrar-fila")
    
                document.querySelector(".entrar-fila").addEventListener("animationend", (event)=>{
    
                    if(event.animationName == "entrarFila"){
                        
                        let legendas = [
                            "<span class='animate__animated animate__fadeInUp'>Tempo media de atendimento 10 - 30 min</span>",
                            "<span class='animate__animated animate__fadeInUp'>Aguardando...</span>",
                        ]
                        
                       setTimeout(() => {
                            
                            event.target.classList.remove('entrar-fila')
                            event.target.classList.add('status')
                            
                            this.body.style.padding = "10px 30px 0 30px"
    
                            this.body.innerHTML = `
                                <div id="loading">
                                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                                <span id="legendas-container">Aguardando...</span>
                                </div>
                                `
    
    
                            var index = 0
    
                            var time = setInterval(() => {
    
                                if(index < legendas.length){
    
    
                                    document.getElementById('legendas-container').innerHTML = legendas[index]
    
                                    
                                }else{
                                    
                                    document.getElementById('legendas-container').innerHTML = legendas[index - legendas.length]
    
                                    index = index - legendas.length
    
                                }
    
    
                                index = index + 1
    
                            }, 4000);  


                            if(result == "sucesso"){

                                clearInterval(time)
                                event.target.classList.remove("status")
                                this.chate(event.target)
                    
                            }
    
                           
    
                        }, 100);

                       
                            
                    }
    
                })
    
            
            }, 700);

           
           
               

        }

        

    
    },

    chate(document){

        var socket = io();

        // socket.on('teste', (stream) => {
        //     console.log(stream);
        // });
  
        // let header = document.querySelector(".card-header")

        // document.classList.add("chate")
        
        // $(header).append(
        //     `<div id="status-chate">
        //         <div id="legenda">Online</div>
        //         <div id="status"></div>
        //     </div>`
        // );

        // this.body.innerHTML = ""

        

        

    },

    alerta(){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos os campso são obrigatorios',
          })

    },

    formHTML(){
        return `
        
            <div class="titulo">Antes de falar com um dos nossos colaboradores, peço que preencha os seguintes capos.</div>
            <div class="campos" id="campos-nome">
                <label>Nome</label><br>
                <input type="text" id="nome" required>
            </div>
            <div class="campos" id="campos-whatsapp">
                <label>Whatsapp</label><br>
                <input type="number" id="nome" required>
            </div>
            <div class="campos" id="campos-email">
                <label>Email</label><br>
                <input type="text" id="nome" required>
            </div>
            <button>Entrar</button>
        
        `
    }
}

cliente.init()