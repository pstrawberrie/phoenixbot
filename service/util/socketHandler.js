const socketHandler = {

  listen(io) {
    io.on('connection', socket => {
      socket.emit('FromAPI', { hello: 'world' });
    });
    
    io.on('twitch', socket => {
      console.log('socket came in: ', socket);
    });
  },

  emit(name, data) {
    console.log('sending socket data: ', data);
    socket.emit(name, data);
  }

}

module.exports = socketHandler;