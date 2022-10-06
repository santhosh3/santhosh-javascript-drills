/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

let fs = require('fs');

// creating random files
fs.readFile("abc.json", "utf8", (err,data) => {
    if(err) throw err
    else {
        let a = Math.random()*10;      
            fs.appendFile(`./randomJson/file${a}.json`, data, "utf8", (err) => {
                if(err) throw err
                else console.log("created successfully")
            })  
        }
})

//deleting all random files
fs.readdir("./randomJson", (err, files)=>{
    if(err) throw err
    else{
        files.forEach((a)=>{
            fs.unlink(`./randomJson/${a}`, (err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(`files deleted  ${files}`);
                }

            })}
        )    
    }
})
