const io = require("socket.io")();

const socket = {
    io: io
};

  socket.io.of("/adm").on('connection', (socket) => {
    
    socket.emit("status", "online")

    console.log(socket.id)

  });

  socket.io.of("/adm").on('disconect', (socket) => {
    
    socket.emit("status", "off")

  });
  

module.exports = socket;