//To import people.js
//require returns empty object (if we don't use module.export inside the imported file)
//it doesn't automatically give us access to variables inside the imported file
///const xyz = require('./people');
//we can do it like that
//we can use them directly with out . operator
const {people , ages} = require('./people');
console.log(people);
console.log(ages);

//import node modules

const os = require('os');
console.log(os.platform());