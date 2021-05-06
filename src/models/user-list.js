const User = require("./user");



class UserList {

    constructor() {
        this.users = [];
    }


    addUser(nickname,id) {
        const newUser = new User(nickname,id);
        if(this.users.length == 0) {
            newUser.active = true;
        }
        this.users.push(newUser);
        return this.getUsers();
    }

    getUsers() {
        return this.users;
    }

    removeUser(id) {

        let index = null;
        
        this.users.map((user, i) => {
            if(user.id === id) {
                index = i;
            }
        });

        if(index === null) return this.users;

        if(this.users[index].active && (this.users.length -1) > index) {
            this.users[index+1].active = true;
        } else if(this.users[index].active && (this.users.length - 1) === index) {
            this.users[0].active = true;
        }

        this.users = this.users.filter(user => user.id !== id);
        return this.users;
    }

    changeActive() {
        let index = null;

        this.users.map((user,i) => {
            if(user.active) {
                index = i;
            }
        });

        if(index === null) return this.users;

        this.users[index].active = false;

        if((this.users.length - 1) === index) {
            this.users[0].active = true;
        } else {
            this.users[index+1].active = true;
        }

        return this.users;


    }

    setValue(position,id) {
        this.users = this.users.map((user) => {
            if(user.id === id) {
                user.value = position;
            }
            return user;
        });

        return this.users;
    }
    

}

module.exports = UserList;