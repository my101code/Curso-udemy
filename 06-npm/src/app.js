
const readFiles = require('./js-fundamento/07-async-awail-readtxt');

readFiles()
  .then((files) => console.log(files)) // Log the contents of the read files
  .catch((error) => {
    console.error('Unable to read text files:', error.message);
    process.exitCode = 1;
  });
