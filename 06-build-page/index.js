const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises'); 
fsPromises.mkdir(path.join(__dirname, 'project-dist'), {recursive: true}).then().catch(function() { 
    console.log('folder is existed'); 
}); 

const cssFile = path.join(__dirname, 'project-dist', 'style.css');
const htmlFile = path.join(__dirname, 'project-dist', 'index.html');

const srcFolderPath = path.join(__dirname, 'assets');
const destFolderPath = path.join(__dirname, 'project-dist', 'assets');
let srcFolder;
let destFolder;
let dest;
let src;

fs.open(cssFile, 'w', (err) => {
    if(err) throw err;    
});
fs.open(htmlFile, 'w', (err) => {
    if(err) throw err;    
});


fs.readdir(srcFolderPath, (err, files) => {
    if (err) throw err;    
    files.forEach(file => { 
        fs.stat(srcFolderPath, (err, stats) => {            
            if (err) throw err;
            srcFolder = srcFolderPath + '\\' + path.basename(file);
            destFolder = destFolderPath + '\\' + path.basename(file);            
            if (stats.isDirectory()) { 
                fsPromises.mkdir(dest, {recursive: true}, err => {
                    if (err)  throw err;
                })  
            }                 
        })
    }) 
})
