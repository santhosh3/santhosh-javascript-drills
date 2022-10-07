// 0.3
// Read a json file. Write the contents to a new file. Delete the first file. 
// Only after first file is deleted, delete the second file.

const fs = require("fs").promises;

const randomFile = fs.readFile(`./sample1.json`, "utf-8");

let a = Math.random() * 10;
    randomFile.then((data) => {
    const rander = fs.appendFile(`./content/rander${a}.json`, data, "utf-8")
    return rander
}).then(() => {
    const xyz = fs.unlink(`./sample1.json`)
    return xyz
}).then(()=>{
    const deletesinglefile = fs.unlink(`./content/rander${a}.json`)
    return deletesinglefile
}).catch((err) => {
    console.log(err);
})