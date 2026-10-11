const { v4 : uuidv4 } = require ('uuid');
const getAge  = require ( 'get-age' ) 

const buildPerson = ({name, birthDate}) => {
    return {
        id : uuidv4(),
        name,
        birthDate,
        age : getAge(birthDate),
    };
};

const Juan = buildPerson({name: 'Juan', birthDate: '1990-05-15'});
const Pedro = buildPerson({name: 'Pedro', birthDate: '1985-10-20'});

console.log(Juan);
console.log(Pedro);

