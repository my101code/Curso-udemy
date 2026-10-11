
const users = [
    {id: 1, name: 'Leandro'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Pedro'},
];

const getUserById = (id, callback) => { // callback function
    const user = users.find(user => user.id === id); // arrow function (Es una función simplificada)
    
    (!user) ? callback(new Error(`No existe un usuario con el id ${id}`)) : callback(null, user); // ternary operator (Es un if simplificado)
};

module.exports = {getUserById};
