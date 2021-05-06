const { v4: uuidv4 } = require('uuid');

class Room {

    constructor(users) {

        this.id = uuidv4();
        this.users = [];
        this.status = 'wait';

    }

}

module.exports = Room;