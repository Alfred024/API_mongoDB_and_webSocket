const socketIO = require('socket.io');
const socket = {};

function connectToSocket(server) {
    socket.io = socketIO(server);
}

module.exports = {
    connectToSocket,
    socket,
}