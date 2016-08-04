var http = require('http'); 
var buff = [];
var counter = 0;


function juggling(id){
	http.get(process.argv[i], function (response) {
	  var buf = '';
	  response.setEncoding('utf8');
	  response.on('data', function(data){
	  	buf += data; 
	  });
	  response.on('end', function(end){
        buff[id - 2] = buf;
        if(++counter === 3) { 
           print();
        }
	  });
	  response.on('error', function(error) {
	    console.log("Got error: " + error.message);
	  });
	});
}
for(var i = 2 ; i < process.argv.length; i++){	
	juggling(i);
}
function print(){
    for(var j = 0; j < buff.length; j++){
        console.log(buff[j]);
    }
}