var fs = require('fs');
var file = process.argv[2];
var lines;
function FileReadingIsSlow (callback) {
    fs.readFile(file, 'utf8', function doneReading(err, data) {
       	lines = data.split('\n').length -1;
       	callback();
    });
 }

function newlines() {
	console.log(lines);
}

FileReadingIsSlow(newlines);

/** Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────

     var fs = require('fs')
     var file = process.argv[2]

     fs.readFile(file, function (err, contents) {
       // fs.readFile(file, 'utf8', callback) can also be used
       var lines = contents.toString().split('\n').length - 1
       console.log(lines)
     })

 ────────────────────────────────────────────────────────────────────────────
**/
// info on callbacks
// var myNumber = undefined // we don't know what the number is yet since it is stored in a file

// function addOne(callback) {
//   fs.readFile(file, function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//     callback()
//   })
// }

// function logMyNumber()
// {
// 	console.log(myNumber)
// }
// addOne(logMyNumber)

 