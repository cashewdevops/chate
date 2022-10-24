require('module-alias/register')

const io = require('@app').io

io.on('connection', (socket) => {
  
    socket.emit("status", "online")

    socket.on("tipo", arg =>{

      if(arg == "entrada"){
        io.emit("entranda", true)
      }
      

    })

});

io.on('disconect', (socket) => {
  
  socket.emit("status", "off")

});


