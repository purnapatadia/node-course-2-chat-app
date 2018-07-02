const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '..', 'public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'PPT',
        text: 'hi',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });



});

server.listen(3000, () => {
    console.log('Server is listening port 3000');

});