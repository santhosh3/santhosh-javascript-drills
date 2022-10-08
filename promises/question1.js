
/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require("fs").promises

const directory = fs.mkdir(`${__dirname}/files`);

directory.then(() => {
    console.log("file created");
    return fs.readFile(`${__dirname}/sample.json`,"utf8");
})
.then((data) => {
    console.log("read file succesfully")
    let i = 5;
    let array = []
    while(i > 0){
        array.push(fs.writeFile(`${__dirname}/files/file${Math.random()}.json`,data,"utf8"))
        i--;
    }
    return Promise.all(array)
})
.then(() => {
    console.log("Writing files completed");
    return fs.readdir(`${__dirname}/files`,"utf8")
})
.then((data) => {
   let array = []
   data.forEach((file) => {
       array.push(fs.unlink(`${__dirname}/files/${file}`))
   })
   return Promise.all(array)
}).then(() => {
    console.log("all files are deleted")
}).catch(err => console.log(arr))