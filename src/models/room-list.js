const Room = require("./room");



class RoomList {


    constructor() {
        this.rooms = [];
    }

    createRoom(nickName) {

        const newRoom = new Room();
        newRoom.users.push({
            nickName,
            value: ''
        });
        this.rooms.push(newRoom);
        // if(this.)
        return newRoom;
    }

    joinRoom(id,nickName) {
        this.rooms = this.rooms.map(room => {
            if(room.id === id) {
                room.users.push({
                    nickName,
                    value: ''
                });
            }    
            return room;
        })


    }

    getRoom(id) {
        console.log(id)
        const answer = this.rooms.filter(room => room.id === id);
        return answer[0];
    }


}


module.exports = RoomList;