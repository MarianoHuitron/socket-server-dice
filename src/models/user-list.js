const User = require("./user");



class UserList {

    constructor() {
        this.users = [];
    }


    // add user to list
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

    // remove user from the list
    removeUser(id) {

        // get the index 
        let index = null;
        this.users.map((user, i) => {
            if(user.id === id) {
                index = i;
            }
        });

        if(index === null) return this.users;


        // validate if the user is the next for lauch the dice
        if(this.users[index].active && (this.users.length -1) > index) {
            this.users[index+1].active = true;
        } else if(this.users[index].active && (this.users.length - 1) === index) {
            this.users[0].active = true;
        }

        this.users = this.users.filter(user => user.id !== id);
        return this.users;
    }


    // Update the user active means setting wich user is next to launch the dice
    changeActive() {
        // Get the user index
        let index = null;
        this.users.map((user,i) => {
            if(user.active) {
                index = i;
            }
        });

        if(index === null) return this.users;

        // set to false
        this.users[index].active = false;

        // Set true the next user
        if((this.users.length - 1) === index) {
            this.users[0].active = true;
        } else {
            this.users[index+1].active = true;
        }

        return this.users;
    }

    // Set the last value for the user
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