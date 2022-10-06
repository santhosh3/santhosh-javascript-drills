/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

let fs = require('fs');

// fs.appendFile("./file/lipsum.txt", "I am santhosh", "utf8", (err,data) => {
//     if(err) throw err
//     else console.log(data)
// })

fs.readFile("./file/lipsum.txt", "utf8", (err,data) => {
    if(err) throw err
    else {
        fs.writeFile("./file/upperCase.txt", data.toUpperCase(), "utf8", (err) => {
            if(err) throw err
            else {
                fs.readFile("./file/upperCase.txt", "utf8", (err,data) => {
                    if(err) throw err
                    else{
                        let d = data.toLowerCase().split(".").join("\n")
                        fs.writeFile("./file/changes.txt", d, "utf8", (err,data) => {
                            if(err) throw err
                            else {
                                fs.readFile("./file/done.txt", "utf-8", (err,data) => {
                                    if(err) throw err
                                    else{
                                        let f = data.split("\n").sort().join(" ")
                                        console.log(f)
                                        fs.writeFile("./file/newFile.txt", f, "utf8", (err) => {
                                            if(err) throw err
                                            else{
                                                fs.readFile("./file/newFile.txt","utf8",(err,data) => {
                                                    if(err) throw err
                                                    else{
                                                        fs.readdir("./file",(err,files) => {
                                                            if(err) throw err
                                                            else{
                                                                files.forEach((a) => {
                                                                    files.forEach((a) => {
                                                                        fs.unlink(`./file/${a}`, (err) => {
                                                                            if(err) throw err
                                                                            else console.log("files deleted successfully")
                                                                        })
                                                                    })
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})