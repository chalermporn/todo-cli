const fs = require('fs');
const glob = require('glob');
const { debuglog } = require('util');

let dd = []
function searchFile(directory, filename) {
  return new Promise((resolve, reject) => {
    glob(`${directory}`, (err, files) => {
      if (err) {
        reject(err);
      } else {
        for (const file of files) {
          // console.log(file);
          // if (file.endsWith(filename)) {
            dd.push(file)
            resolve(dd);
          // }
        }
        resolve(null);
      }
    });
  });
}

let sss 
 searchFile("./view/**/*", "*.vue")
  .then(result => {
    if (result) {
      console.log(result);
      sss = result
      return result
    } else {
      console.log("File not found");
    }
  })
  .catch(err => {
    console.error(err);
  });

  console.log('dd',sss);
