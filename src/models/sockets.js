const UserList = require("./user-list");

class Sockets {

    constructor( io ) {
        this.io = io;

        this.userList = new UserList();

        this.socketEvents();
    }

    socketEvents() {

        this.io.on('connection', (socket) => {
            console.log('connected');

            // join to room
            socket.on('join-room', (nickName) => {
                const user = this.userList.addUser(nickName,socket.id);
                socket.emit('user-created', {nickname: nickName, id: socket.id});
                this.io.emit('user-joined', user);
            })

            
            // change-position
            socket.on('change-position', ({currentPosition: position, user}) => {
                this.userList.changeActive();
                const users = this.userList.setValue(position,user);
                this.io.emit('change-position', ({position, users}));
            })

            // remove user when disconnect
            socket.on('disconnect', () => {
                const users = this.userList.removeUser(socket.id);
                this.io.emit('user-joined', users);
                console.log('desconnected')
            })

        });       

    }

}

module.exports = Sockets;