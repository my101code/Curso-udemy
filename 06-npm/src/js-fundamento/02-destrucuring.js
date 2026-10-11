

console.log(process);

console.log(process.env);

const {SHELL, USER, PATH} = process.env;

console.log(SHELL, USER, PATH);

console.table({SHELL});