// 0.1
// Read a json file. Write the contents to a new file.

const fs = require("fs").promises;

function write(path,data){
    fs.writeFile(path,data,"utf8")
}

const readPromise = fs.readFile('./abcd.json',"utf8");

readPromise.then((data) => {
    return write('./copy.json',data)
}).then(() => {
    console.log("created successfully")
}).catch(err => console.log(err));