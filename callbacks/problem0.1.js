let fs = require('fs');

// 0.1
// Read a json file. Write the contents to a new file. 


fs.readFile('./abc.json', "utf8", (err,data) => {
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })

// fs.appendFile('./abcd.json', "{'A':'a', 'B':'b', 'C':'c', 'D':'d'}", (err) => {
//     if(err) throw err
//     console.log("created new file and added content")
// })

fs.readFile('./abc.json', "utf8", (error,data) => {
    if(error){
        console.error(error)
    }else{
        fs.writeFile('./abcd.json', data, (err) => {
            if(err) throw err
            console.log("saved successfully")
        })
    }
})