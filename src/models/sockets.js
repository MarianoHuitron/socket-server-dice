const RoomList = require("./room-list");


class Sockets {

    constructor( io ) {
        this.io = io;

        this.roomList = new RoomList();

        this.socketEvents();
    }

    socketEvents() {

        this.io.on('connection', (socket) => {
            console.log('connected')




             // create room
            socket.on('create-room', ({nickName}) => {
                const room = this.roomList.createRoom(nickName)
                socket.join(room.id);
                socket.emit('room-created', room);
            });


            // join to room
            socket.on('join-room', ({room, nickName}) => {
                this.roomList.joinRoom(room,nickName);
                socket.join(room);
                this.io.sockets.in(room).emit('user-joined', this.roomList.getRoom(room));
            })

            
            // change-position
            socket.on('change-position', (position) => {
                this.io.emit('change-position', position);
            })
 
        });


       

    }

}

module.exports = Sockets;