var http = require('http');
var url = require('url');
var port = process.argv[2];
     var callBack = function (req, res) {
     var urlObj = url.parse(req.url, true);
     var date = new Date(urlObj.parse.iso);
     console.log("date: "+ date);

     if (urlObj.pathname === '/api/parsetime') {
     	//console.log(urlObj.pathname);
     	//console.log(JSON.stringify(new Date().toISOString(urlObj.search)));
     	res.writeHead(200, { 'Content-Type': 'application/json' });

     	console.log(date.getHours());
     	res.end(JSON.stringify({hour:date.getHours(),minute:date.getMinutes(),second:date.getSeconds()}));
     }
     if (urlObj.pathname === '/api/unixtime') {
     	//console.log(urlObj.pathname);
     	res.writeHead(200, { 'Content-Type': 'application/json' });
     	res.end(JSON.stringify({unixtime: date.getTime()}));
     }

}
var server = http.createServer(callBack);
server.listen(port);