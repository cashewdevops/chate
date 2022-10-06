const io = require("socket.io")();
const socket = {
    io: io
};

socket.io.on('connection', (stream) => {
    console.log('someone connected!');
  });

module.exports = socket;