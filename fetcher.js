const request = require('request')
const url = process.argv[2];
const path = process.argv[3];
const fs = require('fs')

request(url, (error, response, body) => {
  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});


