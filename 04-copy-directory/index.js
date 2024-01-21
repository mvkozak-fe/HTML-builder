const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises'); 
const { error } = require('console');
const srcFolderPath = path.join(__dirname, 'files');
const destFolderPath = path.join(__dirname, 'files-copy');
let dest;
let src;
fsPromises.mkdir(destFolderPath).then().catch(function() { 
    console.log('folder is existed'); 
    // deleteFiles();
    // copyFiles();    
}); 
fs.readdir(destFolderPath, (err, files) => {
    if (err) throw err; 
    files.forEach(file => {
        src = srcFolderPath + '\\' + path.basename(file);
        dest = destFolderPath + '\\' + path.basename(file); 
        if (dest !==src) {
            fs.unlink(dest, error => {
                if (error) throw error; 
            })
        }
    })

})
// function deleteFiles() {
//     fs.readdir(destFolderPath, (err, files) => {
//         if (err) throw err; 
//         files.forEach(file => {
//             dest = destFolderPath + '\\' + path.basename(file); 
//             fs.unlink(dest, (error) => {
//                 if (error) throw error;                
//             })
//         })
//     })
// }

fs.readdir(srcFolderPath, (err, files) => {
    if (err) throw err; 
    files.forEach(file => {
        src = srcFolderPath + '\\' + path.basename(file);
        dest = destFolderPath + '\\' + path.basename(file); 
    
        fs.copyFile(src, dest, err => {
            if (err) throw err;
        });
    })  
})




