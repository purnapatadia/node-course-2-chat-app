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

    socket.emit('newMessage',{
        from: 'Admin',
        text: 'Welcome to the chat room'
    })

    socket.broadcast.emit('newMessage',{
        from: 'Admin',
        text: 'New User has been connected'
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    
        io.emit('newMessage',{
            from:message.from,
            text:message.text,
            createdAt: new Date().getTime()
        })



        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });

    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });



});

server.listen(3000, () => {
    console.log('Server is listening port 3000');

});