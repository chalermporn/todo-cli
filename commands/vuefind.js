const fs = require('fs');
const readline = require('readline');
const glob = require('glob');



function searchFile(directory, filename) {
  return new Promise((resolve, reject) => {
    glob(`${directory}`, (err, files) => {
      if (err) {
        reject(err);
      } else {
        for (const file of files) {
          if (file.endsWith(filename)) {
            resolve(file);
          }
        }
        resolve(null);
      }
    });
  });
}

function vuefind() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the file path: ', (filePath) => {
    rl.question('Enter the word to search for: ', (filename) => {
      // Read the contents of the file
      const contents = fs.readFileSync(filePath, 'utf8');

      // Split the contents into an array of lines
      const lines = contents.split('\n');


      // let fileName = ''
      searchFile(filePath, filename)
        .then(result => {
          console.log(result);
          if (result) {
            console.log(result);
          } else {

            console.log("File not found");
            return
          }
        })
        .catch(err => {
          console.error(err);
        });




      // Find the line number of the word
      // let lineNumber = -1;
      // for (let i = 0; i < lines.length; i++) {
      //   if (lines[i].includes(word)) {
      //     lineNumber = i;
      //     break;
      //   }
      // }

      // console.log(`The word "${word}" was found on line ${lineNumber + 1}`);
      // rl.close();






    });
  });
}
module.exports = vuefind
