//Streams is to start using tha data before it has finished loading
//Read data via read streams  & Write data via write streams
//Streams like watching something on netflix ...
const fs = require('fs');

const readstream = fs.createReadStream('docs/doc2.txt' , {encoding:'utf8'});
const writeStream = fs.createWriteStream('docs/doc3.txt');
//it's an event listener when a chunk is ready the function is fired
/*readstream.on('data' , (chunk)=>{
console.log('-----NEW CHUNK-----');
writeStream.write('\n NEW CHUNK \n');
writeStream.write(chunk);
});*/

//We can do the above code using Pipe
//to transfer data from readable stream to writable stream
readstream.pipe(writeStream);