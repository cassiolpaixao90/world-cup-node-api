import http           from "../src/app";
const io = require('socket.io')(http);

io.on('connection', (socket) => {


  socket.on('disconnect', function () {
    console.log('disconnected');
  });

});
