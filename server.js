const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {

    console.log('Un usuario se conectó');

    socket.on('chat message', (msg) => {

        console.log('Mensaje recibido: ' + msg);

        io.emit('chat message', msg);

    });

});

http.listen(PORT, () => {

    console.log('Servidor corriendo en puerto ' + PORT);

});