var fs = require('fs');
var ext = "."+ process.argv[3];

fs.readdir(process.argv[2], function callback(err, list)
	{
		for (var j=1; j<list.length; j++) 
		{
	        if (list[j].match(ext)) 
	        {
	        	console.log(list[j]);
	        }
    	}				
	});

 /** Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

     var fs = require('fs')
     var path = require('path')

     var folder = process.argv[2]
     var ext = '.' + process.argv[3]

     fs.readdir(folder, function (err, files) {
       if (err) return console.error(err)
       files.forEach(function(file) {
           if (path.extname(file) === ext) {
               console.log(file)
           }
       })
     })

 ─────────────────────────────────────────────────────────────────────────────
 */