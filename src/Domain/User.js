class User {
    constructor(username, password) {
            this.username = username;
            this.password = password;
    }
}

const userArray = [];

function addUser (username, password) {
    const newUser = new User(username, password);
    userArray.push(newUser);
}