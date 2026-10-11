
const { getAge, getId } = require ( '../../plugins'); // no ponemos index.js porque por defecto busca el index.js

const buildPerson = ({name, birthDate}) => {
    return {
        id : getId(),
        name,
        birthDate,
        age : getAge(birthDate),
    };
};

const Juan = buildPerson({name: 'Juan', birthDate: '1990-05-15'});
const Pedro = buildPerson({name: 'Pedro', birthDate: '1985-10-20'});

console.log(Juan);
console.log(Pedro);

