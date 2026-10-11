const { getId } = require ('../../plugins/get-id.plugin');
const { getAge } = require ( '../../plugins/get-age.plugin');

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

