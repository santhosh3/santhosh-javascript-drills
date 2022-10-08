/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/


const fs= require("fs").promises


const readFile=fs.readFile(`${__dirname}/lipsum.txt`,"utf8")

readFile
.then((data)=>{
    console.log("reading the file")
    return fs.writeFile(`${__dirname}/upperCase.txt`,data.toUpperCase(),"utf8")
})
.then(()=>{
    console.log("converted to upperCase")
    return fs.writeFile(`${__dirname}/filenames.txt`,"upperCase.txt","utf8")
})
.then(()=>{
    console.log("upperCase.txt name saved in filenames.txt")
    return fs.readFile(`${__dirname}/upperCase.txt`,"utf8")
})
.then((data)=>{
    console.log("reading is done from uppercase.txt")
    return fs.writeFile(`${__dirname}/lowerCase.txt`,data.toLowerCase(),"utf8")
})
.then(()=>{
    console.log("writing data into lowercase is done")
    return fs.appendFile(`${__dirname}/filenames.txt`,"\nlowerCase.txt","utf8")
})
.then(()=>{
    console.log("lowerCase.txt name saved in filenames.txt")
    return fs.readFile(`${__dirname}/lowerCase.txt`,"utf8")
})
.then((data)=>{
    console.log("reading data from lower case file is done")
    let promiseArr=data.split(".").map(sen=> fs.appendFile(`${__dirname}/sentences.txt`,`${sen}.\n`,"utf8"))
    Promise.all(promiseArr)
    
})
.then(()=>{
    console.log("saved in sentences.txt")
    return fs.appendFile(`${__dirname}/filenames.txt`,"\nsentences.txt","utf8")
})
.then(()=>{
    console.log("sentences.txt file name saved in filenames.txt")
    return fs.readFile(`${__dirname}/sentences.txt`,"utf8")
})
.then((data)=>{
    console.log("reading data from sentences.txt is done")
   
    return fs.writeFile(`${__dirname}/sort.txt`,data.split("\n").sort().join("\n"),"utf8")
})
.then(()=>{
    console.log("sort.txt file is created")
    return fs.appendFile(`${__dirname}/filenames.txt`,"\nsort.txt","utf8")
}).then(()=>{
    console.log("sort.txt file is saved in filenames.txt")
    return fs.readFile(`${__dirname}/filenames.txt`,"utf8")
})
.then((data)=>{
    console.log("reading is succesfull from filenames.txt")
    let deleteArr=data.split("\n").map(file=>fs.unlink(`${__dirname}/${file}`))
    Promise.all(deleteArr)
})
.then(()=>{
    console.log("all files deleted from filenames.txt")
})
.catch((err)=>{
    console.error(err)
})