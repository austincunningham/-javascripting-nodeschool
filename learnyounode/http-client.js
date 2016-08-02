// var http = require('http')
// http.get(process.argv[2],function(res){
//     res.setEncoding('utf8');
//     res.on("error", console.error);
//     res.on("data", console.log);
//     });


 /**Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

     var http = require('http')

     http.get(process.argv[2], function (response) {
       response.setEncoding('utf8')
       response.on('data', console.log)
       response.on('error', console.error)
     }).on('error', console.error)

     */
var http = require('http');
http.get(process.argv[2], function(res) {
  //console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', console.log)
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});