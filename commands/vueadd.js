const fs = require('fs');
const readline = require('readline');

function vueadd() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter the file path: ', (filePath) => {
    rl.question('Enter the line number: ', (lineNumber) => {
      rl.question('Enter the message: ', (message) => {
        // Read the contents of the file
        let contents = fs.readFileSync(filePath, 'utf8');
  
        // Split the contents into an array of lines
        const lines = contents.split('\n');
  
        // Insert the message at the specified line
        lines.splice(lineNumber, 0, message);
  
        // Join the lines back into a single string
        contents = lines.join('\n');
  
        // Write the modified contents back to the file
        fs.writeFileSync(filePath, contents);
        rl.close();
      });
    });
  });
}
module.exports = vueadd
