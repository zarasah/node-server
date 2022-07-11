const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3000;
const json = express.json();
const userRt = require('./userRt.js');

(async () =>{ 
    await mongoose.connect('mongodb://localhost:27017/node');
})();

if (process.env.PORT) {
    console.log('ENV PORT', process.env.PORT);
}

app.use(json);
app.use(express.static('./front'));
app.use(userRt);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });

    socket.on('chat message', (info) => {
        //console.log('message', + info);
        io.emit('chat message backend', info);
    })
  });

server.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});