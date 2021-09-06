const express = require('express');

const app = express();

//register view engine
app.set('view engine','ejs');
//it automatically locks for views inside views folder 
//but if you want to change it you can easily by 
//app.set('views','the folder name');

//listening for requests
//it's localhost by default
app.listen(3000);

//handling get requests 

app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    //here we can use res.send() directly without set headers 
    //it automatially sets it depend on what we send
    //no need to use .write() and .end()
    //we don't have to set status code manually
    //res.send('Hello Manga');

    //To send HTMl file
    //it takes and absolute path so we have to specify what root should it starts from
    ///res.sendFile('./views/index.html',{root : __dirname});

    //With view engine
    //to pass data to the view we could do that easily by send them as an object
    //it will be sended to ejs file and we can access them easily
    res.render('index',{title : 'Home' , blogs});
});

app.get('/about',(req,res)=>{
   // res.sendFile('./views/about.html',{root : __dirname});
   res.render('about',{title : 'About'});
});

//redirecting

app.get('/about-us',(req,res)=>{
    //Automatically sets the statuscode to 301
    res.redirect('/about');
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'Create'});
});

//404 not found
//this function is fired with every request if and only if the code reaches the function (if it doesn't matched up with any get request handler)
//Note:: if we send a response to browser it does not carry on with the rest of the code
//So the position of this function is very important it must be at the end of the code
app.use((req,res)=>{
    //here we have to set status code manually to 404
    //res.status()  returns the reponse object itself
    //res.status(404).sendFile('./views/404.html',{root : __dirname});
    res.status(400).render('404');
});