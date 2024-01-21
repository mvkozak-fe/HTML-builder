const fs = require('fs');
const path = require('path');
const stylesFileDest = path.join(__dirname, 'project-dist', 'bundle.css');
fs.open(stylesFileDest, 'w', (err) => {
    if(err) throw err;    
});
fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        let fileExt = path.extname(file); 
        if (fileExt == '.css') {            
            fs.readFile(path.join(__dirname, 'styles', file), function(err, data){
                if (err) throw err;
                let content = data.toString();                
                fs.appendFile(stylesFileDest, content, (err) => {
                    if (err) throw err;                    
                })
            });      
        }
    })
})