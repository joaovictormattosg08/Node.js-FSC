const { User, addUser, } = require('./user');

const User1 = addUser('João', 17);

console.log(User1.getUserInfo());



