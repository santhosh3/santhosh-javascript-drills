// 0.3
// Read a json file. Write the contents to a new file. Delete the first file. 
// Only after first file is deleted, delete the second file.

let fs = require('fs');

fs.readFile("./file/abc.json", "utf-8", (err,data) => {
    if(err) throw err
    else{
        fs.appendFile("./file/abcdef.json",data,"utf-8",(err) => {
            if(err) throw err
            fs.unlink("./file/abc.json", (err) => {
                if(err) throw err
                else{
                    fs.unlink("./file/abcdef.json",(err) => {
                        if(err) throw err
                        else console.log("done successfully")
                    })
                }
            })
        })
    }
})
