class User {
    constructor(name, age,) {
        this.name = name;
        this.age = age;
    }
    getUserInfo() {
        return "Name: " + this.name + " Age: " + this.age
    }
}

function addUser(name, age) {
    return new User(name, age)
}

module.exports = {
    User: User,
    addUser: addUser,
}

