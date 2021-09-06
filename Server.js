const http = require('http');
const fs = require('fs');
const _ = require('lodash');

/*
    You can install all packages by only type npm install and this command will go inside
    package.json file and install all dependencies
*/

//req comes loaded with request info like requested url or request type get or post ...
//res used to send response to user
const server = http.createServer((req,res)=>{
    console.log("request made");  //whenever a request comes we log to console
    //Trying lodash
    let num=_.random(0,20);
    console.log(num);
    //To call function only once
    const greet = _.once(()=>console.log("Hello my friend"));
    greet();
    greet();
    ////////////////////////
    //set headers content type
    //to send text
    /*res.setHeader('Content-Type','text/plain');
    res.write("Hello , Mangos");
    res.end();*/
    //To send html
    res.setHeader('Content-Type','text/html');
    /*res.write('<p>I am Manga</p>');
    res.write('<p>From Sheblanga</p>');
    res.end();*/
    let path = './views/';
    switch(req.url)
    {
        case '/':
            path+='index.html';
            res.statusCode =200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode =200;
            break;
        case '/about-us':
            //We want to redirect this request to about
            res.statusCode =301;  //Permanent redirect the site has been moved
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
            path +='404.html';
            res.statusCode =404;
            break;
    }
    fs.readFile(path , (err , data)=>{
        if(err)
        {
            console.log(err);
            res.end();  //in order not to make the site hanging
        }else
        {
            res.end(data);  //we can to that directly if we write one thing without res.write
        }
    })

});

//Specifiy which port we listening for and domain
//Localhost is like domain name on the web like www.google.com
///127.0.0.1
//Port numbers are like a doors to our computer through which the internet connection can be made to different programs
server.listen(3000 , 'localhost' , ()=>{
    console.log('Listening to port 30000');
})

//NPM Stands for node package manager