
const {getUserById} = require('./js-fundamento/03-callbacks');

const id = 5;

getUserById(id, (error, user) => {
    if (error) {
        return console.error(error.message);
    }

    console.log(user);
});



