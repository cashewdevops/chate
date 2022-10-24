let app = {
    
    statusAndamento: document.querySelectorAll(".opcoes-tipo-atendimentos")[0],
    statusEntrada: document.querySelectorAll(".opcoes-tipo-atendimentos")[1].children[0],
    statusPendente: document.querySelectorAll(".opcoes-tipo-atendimentos")[2],

    init(){
        this.switchOptions()
        this.socket()
        this.StatusConversas(this.statusEntrada)
        this.Entrada()
        
    },
    
    socket(){
        
        var socket = io();

        socket.on('entranda', (arg)=>{
            this.StatusConversas(this.statusEntrada)
        })
    
        socket.on("status", (status) =>{

            if(status == "online"){

                $("#status")
                .removeClass("indicator-off")
                .addClass("indicator-online");
       
            }else{

                $("#status")
                .removeClass("indicator-online")
                .addClass("indicator-off")
            }
        })


    },

   async Entrada(){
      const response = await api.entrada()
      const container = document.querySelectorAll("#entrada")[1]

      response.forEach(element => {

        $(container).append(`
        
            <div id="card-mensage">
                <div class="box-incone">
                    <img style="width: 39px;"
                        src="data:image/png;base64,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">
                </div>
                <div class="box-informacao" >
                    <div class="titulo">${element.nome}</div>
                    <div class="mensagem">Quero saber quanto custa...</div>
                </div>
            </div>
        
        `);

      });
    },

    switchOptions(name){

        let tabs = document.querySelectorAll(".tabs")
        let options = document.querySelectorAll(".opcoes-tipo-atendimentos")

        var i = 0;

        options.forEach(option => {
                      
            switch (name) {

                case 'entrada':
                          
                    if(tabs[i].id == "entrada"){

                        this.removerTabs()
                        this.removeOptions()
                        
                        tabs[i].classList.add('select')
                        option.classList.add('selecionado')
                    }

                    break;
    
                case 'pendente':

                  

                    if(tabs[i].id == "pendente"){

                        this.removerTabs()
                        this.removeOptions()
                        
                        tabs[i].classList.add('select')
                        option.classList.add('selecionado')

                    }
                    break;
            
                default:              

                    if(tabs[i].id == "andamento"){

                        this.removerTabs()
                        this.removeOptions()

                        tabs[i].classList.add('select')
                        option.classList.add('selecionado')

                    }
                    
                    break;
            }

            i++
            
        });
        

    },
   async StatusConversas(status){

      const response = await api.getListaConversas()

      status.innerHTML = response[0].entrada

      
    },

    removerTabs(){
        
        let tabs = document.querySelectorAll(".tabs")

        for (let index = 0; index < tabs.length; index++) {
            const element = tabs[index];
            element.classList.remove('select')
        }
        
    },
    removeOptions(){
        let options = document.querySelectorAll(".opcoes-tipo-atendimentos")

        for (let index = 0; index < options.length; index++) {
            const element = options[index];
            element.classList.remove('selecionado')
        }
    }
}

app.init()