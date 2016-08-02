var http = require('http'); 
var url = process.argv[2];
var buff = '';
http.get(url, function (response) {
  response.on('data', function(data){
  	buff += data;
  });
  response.on('end', function(end){
  	console.log(buff.length);
  	console.log(buff)
  });
  response.on('error', function(error) {
    console.log("Got error: " + error.message);
  });

});