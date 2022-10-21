require('module-alias/register')

const io = require('@app').io

io.on('connection', (socket) => {
  
    socket.emit("status", "online")

});

io.on('disconect', (socket) => {
  
  socket.emit("status", "off")

});


