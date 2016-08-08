var http = require('http');
var url = require('url');
var port = process.argv[2];
     var callBack = function (req, res) {
     var urlObj = url.parse(req.url, true);
     //console.log(urlObj);
     var timestmp = urlObj.query.iso;
     var date = new Date(timestmp);
     console.log("date: "+ date);

     if (urlObj.pathname === '/api/parsetime') {
     	//console.log(urlObj.pathname);
     	//console.log(JSON.stringify(new Date().toISOString(urlObj.search)));
     	res.writeHead(200, { 'Content-Type': 'application/json' });

     	console.log(date.getHours());
     	res.end(JSON.stringify({
     		hour:date.getHours(),
     		minute:date.getMinutes(),
     		second:date.getSeconds()
     	}));
     }
     if (urlObj.pathname === '/api/unixtime') {
     	//console.log(urlObj.pathname);
     	res.writeHead(200, { 'Content-Type': 'application/json' });
     	res.end(JSON.stringify({unixtime: date.getTime()}));
     }

}
var server = http.createServer(callBack);
server.listen(port);

/**
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

     var http = require('http')
     var url = require('url')

     function parsetime (time) {
       return {
         hour: time.getHours(),
         minute: time.getMinutes(),
         second: time.getSeconds()
       }
     }

     function unixtime (time) {
       return { unixtime : time.getTime() }
     }

     var server = http.createServer(function (req, res) {
       var parsedUrl = url.parse(req.url, true)
       var time = new Date(parsedUrl.query.iso)
       var result

       if (/^\/api\/parsetime/.test(req.url))
         result = parsetime(time)
       else if (/^\/api\/unixtime/.test(req.url))
         result = unixtime(time)

       if (result) {
         res.writeHead(200, { 'Content-Type': 'application/json' })
         res.end(JSON.stringify(result))
       } else {
         res.writeHead(404)
         res.end()
       }
     })
     server.listen(Number(process.argv[2]))

 ─────────────────────────────────────────────────────────────────────────────
 */