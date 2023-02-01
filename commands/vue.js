const fs = require('fs');
const readline = require('readline');

function vue() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the directory path: ', (dirPath) => {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    rl.question('Enter the file name: ', (fileName) => {
    // Create a file with the .vue extension

    fs.writeFileSync(`${dirPath}/${fileName}.vue`,
      `<template>\n  <div>Hello, world!</div>\n</template>`
    );
    rl.close();
  });
});
}
module.exports = vue
