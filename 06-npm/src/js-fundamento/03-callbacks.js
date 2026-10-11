
const users = [
    {id: 1, name: 'Leandro'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Pedro'},
];

const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);

    if (!user) {
        return callback(new Error(`No existe un usuario con el id ${id}`));
    }

    callback(null, user);
};

module.exports = {getUserById};
