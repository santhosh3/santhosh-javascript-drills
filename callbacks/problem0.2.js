// 0.2
// Delete both the files simultaneously

let fs = require('fs');

//In order to delete same directory

// function deleteHandler() {
//     return Promise.all(
//         ['./abc.json', './abcd.json'].map(
//             file => 
//             new Promise((res,rej) => {
//                 try{
//                     fs.unlink(`${file}`, err => {
//                         if(err) throw err;
//                         console.log(`${file} was deleted`);
//                     })
//                 }
//                 catch(err){
//                     console.log(err)
//                 }
//             })
//         )
//     )
// }
// deleteHandler()

//In order to delete different directory or same directory

fs.readdir("./file", (err, files)=>{
    if(err) throw err
    else{
        files.forEach((a)=>{
            fs.unlink(`./file/${a}`, (err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(`files deleted  ${files}`);
                }

            })}
        )
    
    }
})