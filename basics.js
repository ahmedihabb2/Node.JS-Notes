//when we use JS inside the browser for front-end the global object is window
//but here inside Node.js the global object is global

//console.log(global);
//this function will invoked every 1 sec
const interv = setInterval(()=>{
    console.log('inside interval');
},1000);

//Function to be invoked after 3 sec
const timeout = setTimeout(()=> {
    console.log("Stopping the interval");
    clearInterval(interv);
},3000);

//Things available in Node
console.log(__dirname);
console.log(__filename);

//We dont have access to document object because it is in window object
//but actually we do not need that because we using node.js in server side (backend)
//console.log(document.querySelector());



