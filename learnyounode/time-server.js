 var net = require('net');
     var server = net.createServer(function (socket) {
       // socket handling logic
       date = new Date();
       socket.end(date.getFullYear() +'-'+
	     ('00'+(1 + date.getMonth())).slice(-2) +'-'+    // starts at 0
	     ('00'+ date.getDate()).slice(-2)  +' '+     // returns the day of month
	     ('00'+date.getHours()).slice(-2) +':'+
	     ('00'+date.getMinutes()).slice(-2) +'\n');
     })
     server.listen(process.argv[2])

     /** 
     Here's the official solution in case you want to compare notes:
      ─────────────────────────────────────────────────────────────────────────────

     var net = require('net')

     function zeroFill(i) {
       return (i < 10 ? '0' : '') + i
     }

     function now () {
       var d = new Date()
       return d.getFullYear() + '-'
         + zeroFill(d.getMonth() + 1) + '-'
         + zeroFill(d.getDate()) + ' '
         + zeroFill(d.getHours()) + ':'
         + zeroFill(d.getMinutes())
     }

     var server = net.createServer(function (socket) {
       socket.end(now() + '\n')
     })

     server.listen(Number(process.argv[2]))

 ─────────────────────────────────────────────────────────────────────────────
 */