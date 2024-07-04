const websocket = require('ws');

const port = 4002;

const wsserver = new websocket.Server({ port: port });

wsserver.on('listening', connection => {
    console.log(`ws server listening on port ${port}`)
});

// define what should happen when a client connects
wsserver.on('connection', socket => {
    wsserver.broadcast('a new client has connected');

    // define what should happen when a message from a client is recieved
    socket.on('message', message => {
        const arguments = JSON.parse(message);

        const argument1 = Number(arguments[0]);
        const argument2 = Number(arguments[1]);

        const msg = argument1 - argument2;

        // define what the server should send back
        wsserver.broadcast(msg);
    });

});

// a function to send a response to all connected clients
wsserver.broadcast = function broadcast(msg) {
    console.log(msg);
    wsserver.clients.forEach(function each(client) {
        client.send(msg);
    });
};