var ls = require('./Make-it-Modular2.js');
var path = process.argv[2];
var ext = process.argv[3];
ls(path, ext, function(err, data)
{
	if (err)
	{
		console.log(err);
	}
	for(var i = 0 ; i < data.length; i++)
	{
		console.log(data[i])
	}
});


/** Here's the official solution in case you want to compare notes:
 ─────────────────────────────────────────────────────────────────────────────
  _C:\Users\austin\AppData\Roaming\npm\node_modules\learnyounode\exercises\m
  ake_it_modular\solution\solution.js_ :

     var filterFn = require('./solution_filter.js')
     var dir = process.argv[2]
     var filterStr = process.argv[3]

     filterFn(dir, filterStr, function (err, list) {
       if (err)
         return console.error('There was an error:', err)

       list.forEach(function (file) {
         console.log(file)
       })
     })

 ─────────────────────────────────────────────────────────────────────────────
  _C:\Users\austin\AppData\Roaming\npm\node_modules\learnyounode\exercises\m
  ake_it_modular\solution\solution_filter.js_ :

     var fs = require('fs')
     var path = require('path')

     module.exports = function (dir, filterStr, callback) {

       fs.readdir(dir, function (err, list) {
         if (err)
           return callback(err)

         list = list.filter(function (file) {
           return path.extname(file) === '.' + filterStr
         })

         callback(null, list)
       })
     }

 ─────────────────────────────────────────────────────────────────────────────
 */