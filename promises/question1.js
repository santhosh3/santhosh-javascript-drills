
/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require("fs").promises

const randomFile = fs.readFile(`./sample1.json`, "utf-8");

    let a = Math.random()*10;
    randomFile.then((data) => {
    const rander = fs.writeFile(`./content/rander${a}.json`, data, "utf-8")
    return rander
}).catch(err => console.log(err))

let deleteFiles = fs.readdir(`./content`);

let b = deleteFiles.then((files) => {
    return files.forEach((file) => {
        fs.unlink(`./content/${file}`)
    })
}).catch(err => console.log(err))