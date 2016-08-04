var http = require('http'); 
var url = process.argv[2];
var buff = '';
http.get(url, function (response) {
  response.on('data', function(data){
  	buff += data; //add response to buff while getting data
  });
  response.on('end', function(end){
  	console.log(buff.length);
  	console.log(buff)
  });
  response.on('error', function(error) {
    console.log("Got error: " + error.message);
  });

});

/**
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

     var http = require('http')
     var bl = require('bl')

     http.get(process.argv[2], function (response) {
       response.pipe(bl(function (err, data) {
         if (err)
           return console.error(err)
         data = data.toString()
         console.log(data.length)
         console.log(data)
       }))
     })

 ─────────────────────────────────────────────────────────────────────────────
 */