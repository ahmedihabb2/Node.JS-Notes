const fs = require('fs');
//reading files
//Async Function does not block the code
/*fs.readFile('docs/doc1.txt',(err,data)=>{
    if(err)
    {
        console.log(err);
    }else
    {
        console.log(data.toString());
    }
});*/
////////////////////////////////////////

//Writing to file
//Async Function
//If the file does not exist it creats it and then write to it
/*fs.writeFile('docs/doc2.txt','Hello Manga , Please contact me' , ()=>{
    console.log("Writing is done");
});*/
/////////////////////////////////////////

//Directories
//What we will do is to check if the directory exist delete it else create it
//sync function
if(!fs.existsSync('./assets'))
{
    //Async function
    fs.mkdir('./assets', (err)=>{
        if(err)
        {
            console.log(err);
        }else
        {
            console.log('Dir Created');
        }
    });
}else
{
    fs.rmdir('./assets',(err)=>{
        if(err)
        {
            console.log(err);
        }else
        {
            console.log('Dir Removed');
        }
    })
}


//remove files
if(fs.existsSync('docs/doc2.txt'))
{
    fs.unlink('docs/doc2.txt',(err)=>{
        if(err)
        {
            console.log(err);
        }else
        {
            console.log('file removed');
        }
    })
}