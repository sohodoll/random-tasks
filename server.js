const os = require('os');
const path = require('path');
// const math = require('./math');
const {add, subtract, multiply, divide} = require('./math');

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

//--useful path methods

path.dirname(__filename); // full directory (== __dirname)
path.basename(__filename); // file name with extension
path.extname(__filename); // just the file extension

//--useful path parse method to get and object with file properties

const fileProps = path.parse(__filename) // root, dir, base, ext, name(without ext!)

// math module (created by me)

add(2,3);
subtract(2,3);
multiply(2,3);
divide(2,3);
