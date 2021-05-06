const fs  = require('fs');
const request = require('request');
const args = process.argv.slice(2);

let requestUrl = '';
let localFile = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === args[0]) {
    requestUrl += args[0];
  }
  if (args[i] === args[1]) {
    localFile += args[1];
  }
}


request(requestUrl, (error, response, body) => {
  if (error) throw error;
  fs.writeFile(localFile, body, (err) => {
    if (err) throw err;
    const stats = fs.statSync(localFile);
    const fileSizeInBytes = stats.size;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${localFile}`);
    
  });
});

