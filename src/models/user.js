

class User {

    constructor(nickname,id) {
        this.id = id;
        this.nickname = nickname;
        this.lastValue = null;
        this.active = false;
    }
    

}

module.exports = User;