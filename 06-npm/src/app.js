
const {getUserById} = require('./js-fundamento/04-arrow');

const id = 1;

getUserById(id, (error, user) => { // callback function
    (error) ? console.error(error.message) : console.log(user); // ternary operator (Es un if simplificado)

});



