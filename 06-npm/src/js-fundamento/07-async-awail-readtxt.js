const fs = require('fs/promises');
const path = require('path');

async function readFiles() {
  console.log('1. Starting to read files...');

  const data1 = await fs.readFile(path.join(__dirname, '07-text1.txt'), 'utf8');
  const data2 = await fs.readFile(path.join(__dirname, '07-text2.txt'), 'utf8');

  console.log('2. Files read successfully!');
  return { data1, data2 };
}

module.exports = readFiles; 