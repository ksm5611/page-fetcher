const fs  = require('fs');
const request = require('request');
const args = process.argv.slice(2);

let requestUrl = args[0];
let localFile = args[1];



request(requestUrl, (error, response, body) => {
  if (error) throw error;
  fs.writeFile(localFile, body, (err) => {
    if (err) throw err;
    const stats = fs.statSync(localFile);
    const fileSizeInBytes = stats.size;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${localFile}`);
    
  });
});

