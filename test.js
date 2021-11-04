const usernameGenerator = require('./src/index.js');

const username = usernameGenerator.createUserName(50000);

console.log(username);