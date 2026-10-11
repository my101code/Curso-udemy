

const buildPerson = ({name, birthDate}) => {
    return {
        id : Math.floor(Math.random() * 1000),
        name,
        birthDate,
        age : new Date().getFullYear() - new Date(birthDate).getFullYear()
    };
};

const Juan = buildPerson({name: 'Juan', birthDate: '1990-05-15'});
const Pedro = buildPerson({name: 'Pedro', birthDate: '1985-10-20'});

console.log(Juan);
console.log(Pedro);

