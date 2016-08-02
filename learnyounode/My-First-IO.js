var fs = require('fs');
var file = process.argv[2];
buf =new Buffer(fs.readFileSync(file));
var str = buf.toString();
str = str.split('\n');
str = str.length - 1; //starts at 0
console.log(str);

// buf = new Buffer(256);
// len = buf.write('\u00bd + \u00bc = \u00be', 0);
// console.log(len + " bytes: " + buf.toString('utf8', 0, len));

/** official answer
_________________________________________________________________
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
*/
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
//________________________________________________________________