const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const Sockets = require('./sockets');
const cors = require('cors');
require('dotenv').config();

class Server {

    constructor() {

        
        this.port = process.env.PORT;
        this.app = express();
        this.app.use(cors());
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, {});

    }


    configureSockets() {
        new Sockets(this.io)
    }

    execute() {

        this.configureSockets();

        this.server.listen(this.port, () => {
            console.log('server on port ' + this.port)
        });
    }

}

module.exports = Server;