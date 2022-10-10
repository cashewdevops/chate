let app = {
    init(){
        this.switchOptions()
        this.socket()
    },
    
    socket(){
        
        var socket = io("/adm");

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