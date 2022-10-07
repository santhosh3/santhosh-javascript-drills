// 0.2
// Delete both the files simultaneously

//const fs = require("fs").promises;

// const p1 = fs.unlink('./copy.json').then(() => {
//     console.log("Deleted successfully")
// });

// const p2 = fs.unlink('./abcd.json').then(() => {
//     console.log("Deleted successfully")
// })

// let combinedPromise = Promise.all([p1,p2]);
// combinedPromise.then(() => {
//     console.log("deleted")
// }).catch(err => console.log(err))

const fs = require("fs").promises;

const deleteFiles = fs.readdir(`./content`);

deleteFiles.then((files) => {
    files.forEach((file,index) => {
    fs.unlink(`./content/${file}`)
   .then(() => console.log(`${index} files deleted`))
    })
}).catch(err => console.log(err))