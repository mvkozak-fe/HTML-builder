const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(filePath);
stream.setEncoding('utf-8');
stream.on('data', text => console.log(text));