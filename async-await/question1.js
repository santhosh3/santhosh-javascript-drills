/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require('fs').promises;

const directory = fs.mkdir(`${__dirname}/files`);

async function a() {
   try{
    console.log("file created");
    let data = await fs.readFile(`${__dirname}/sample.json`)
    console.log("reading file successfully");
    let i = 6 , arr=[];
    while(i > 0){
        arr.push(fs.writeFile(`${__dirname}/files/files${Math.random()}.json`,data,"utf8"));
        i--
    }
    await Promise.all(arr)
    console.log("Writing files completed");
    let readDir = await fs.readdir(`${__dirname}/files`,"utf8");
    readDir.forEach((file) => fs.unlink(`${__dirname}/files/${file}`))
    console.log("All files are deleted")
   }catch(err){
    console.log(err) 
   }
}
a()