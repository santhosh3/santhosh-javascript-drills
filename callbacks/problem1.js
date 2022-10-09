/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require("fs");

fs.mkdir("./test02", (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
    let a = Math.round(Math.random() * 10);
    let data = require("./sample1.json");
    fs.appendFile(`./test02/rendered${a}.json`, JSON.stringify(data), "utf-8", (err) => {
        if (err) {
            console.log(err)
        }else{
            fs.readdir("./test02", (err, files)=>{
                if(err){
                    console.log(err)
                }else{
                    files.forEach((a)=>{
                        console.log(JSON.stringify(files));
                        fs.unlink(`./test02/${a}`, (err)=>{
                            if(err){
                                console.log(err)
                            }else{
                                console.log(`files deleted  ${files.length}`);
                            }
            
                        })}
                    )
                
                }
            })
        }
    })
});