const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');
fs.readdir(folderPath, {withFileTypes: true, encoding: 'utf-8'}, (err, files) => {
    if (err) throw err;    
    files.forEach(file => {
        if (file.isFile()) {
            const filePath = path.join(folderPath, file.name);
            fs.stat(filePath, function(err, stats) {
                if (err) throw err;
                const filenameAll = path.basename(filePath);
                let index = filenameAll.indexOf('.');
                const filename = filenameAll.slice(0, index);
                const fileExt = path.extname(filePath).slice(1);
                let fileStat = stats.size;                
                let fileInfo = filename + ' - ' + fileExt + ' - ' + fileStat + 'b';
                console.log(fileInfo);
            });  
        } 
    })
})