//const { writeFile, appendFile } = require("fs");

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


async function a(){
 try{
    const readFile2 = fs.readFile(`${__dirname}/lipsum.txt`,"utf8");
    console.log("reading the file");
    await fs.writeFile(`${__dirname}/upperCase.txt`,(await readFile2).toUpperCase(),"utf8");
    console.log("converted into upperCase");
    await fs.writeFile(`${__dirname}/filesNames.txt`,"upperCase.txt","utf8");
    console.log("Upper case name file is saved into fileNames");
    const u = await fs.readFile(`${__dirname}/upperCase.txt`,"utf8");
    console.log("reading the upperCase file");
    const l = await fs.writeFile(`${__dirname}/lowerCase.txt`,(await u).toLowerCase(),"utf8");
    console.log("Writing data into lowerCase is done");
    await fs.appendFile(`${__dirname}/filesNames.txt`,"\nlowerCase.txt","utf8");
    console.log("Lower case file name is saved into fileNames.txt");
    let r = await fs.readFile(`${__dirname}/lowerCase.txt`,"utf8");
    console.log("reading data from lowerCase file is done");
    let promiseArr = r.split(".").map(sen => fs.appendFile(`${__dirname}/sentenses.txt`, `${sen}.\n`, "utf8"));
    console.log("saved into sentenses.txt");
    await fs.appendFile(`${__dirname}/filesNames.txt`,"\nsentenses.txt","utf8");
    console.log("sentenses.txt file is saved into fileName.txt");
    const sen = await fs.readFile(`${__dirname}/sentenses.txt`,"utf8");
    console.log("tenses file is created");
    await fs.writeFile(`${__dirname}/sort.txt`,(await sen).split("\n").sort().join("\n"),"utf8");
    console.log("sort.txt file is created");
    await fs.appendFile(`${__dirname}/filesNames.txt`,"\nsort.txt","utf8");
    console.log("Sort.txt file is saved into fileNames.txt");
    await fs.readFile(`${__dirname}/filesNames.txt`,"utf8");
    const readFile1 = await fs.readFile(`${__dirname}/filesNames.txt`,"utf8");
    console.log("reading file from fileNames.txt");
    let deleteFiles = readFile1.split("\n").map(file => fs.unlink(`${__dirname}/${file}`));
    console.log("files deleted sucessfully");
 }catch(err){
    console.log(err)
 }
}
a()
