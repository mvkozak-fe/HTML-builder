const fs = require('fs');
const readline = require('readline');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(filePath);
const { stdin, stdout} = require('process');
const rl = readline.createInterface(stdin, stdout);

rl.setPrompt('Enter your data: \n');
rl.prompt();
rl.on('line', data => {
    if (data.includes('exit')) {
        console.log('bye');
        rl.close();
    } else {
        fs.appendFile(filePath, `${data} \n`, function(error) {
            if (error) throw error;
        });
    }
});
rl.on('SIGINT', () => {
    console.log('bye');
    rl.close();
})
